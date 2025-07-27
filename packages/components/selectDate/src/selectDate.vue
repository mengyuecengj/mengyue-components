<template>
  <div class="date-picker-container">
    <div class="input-container">
      <input 
        :value="formattedDateTime" 
        class="my-selectDate" 
        :placeholder="placeholderText" 
        readonly
        @click="toggleDropdown" 
      />
      <date-range-icon class="date-range-icon" />
    </div>

    <div v-if="showDropdown" class="date-picker-dropdown">
      <!-- 自定义时间选择器 -->
      <div v-if="props.time" class="time-picker-container">
        <div v-if="props.range" class="time-range-picker">
          <div class="time-input-group">
            <label>开始时间:</label>
            <div class="custom-time-picker">
              <select v-model="selectedHourStart" class="time-select" @change="timeSelectedStart = true">
                <option v-for="h in 24" :key="'hour-start-'+h" :value="h-1">
                  {{ String(h-1).padStart(2, '0') }}
                </option>
              </select>
              <span class="time-separator">:</span>
              <select v-model="selectedMinuteStart" class="time-select" @change="timeSelectedStart = true">
                <option v-for="m in 60" :key="'min-start-'+m" :value="m-1">
                  {{ String(m-1).padStart(2, '0') }}
                </option>
              </select>
            </div>
          </div>
          <div class="time-input-group">
            <label>结束时间:</label>
            <div class="custom-time-picker">
              <select v-model="selectedHourEnd" class="time-select" @change="timeSelectedEnd = true">
                <option v-for="h in 24" :key="'hour-end-'+h" :value="h-1">
                  {{ String(h-1).padStart(2, '0') }}
                </option>
              </select>
              <span class="time-separator">:</span>
              <select v-model="selectedMinuteEnd" class="time-select" @change="timeSelectedEnd = true">
                <option v-for="m in 60" :key="'min-end-'+m" :value="m-1">
                  {{ String(m-1).padStart(2, '0') }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div v-else class="time-input-group">
          <label>选择时间:</label>
          <div class="custom-time-picker">
            <select v-model="selectedHour" class="time-select" @change="timeSelected = true">
              <option v-for="h in 24" :key="'hour-'+h" :value="h-1">
                {{ String(h-1).padStart(2, '0') }}
              </option>
            </select>
            <span class="time-separator">:</span>
            <select v-model="selectedMinute" class="time-select" @change="timeSelected = true">
              <option v-for="m in 60" :key="'min-'+m" :value="m-1">
                {{ String(m-1).padStart(2, '0') }}
              </option>
            </select>
          </div>
        </div>
        <div v-if="selectedTime && (props.range ? timeSelectedStart && timeSelectedEnd : timeSelected)" class="selected-time-display">
          已选择: {{ selectedTime }}
        </div>
      </div>

      <!-- Range Picker -->
      <div v-if="mode.startsWith('range')" class="range-container">
        <div class="picker-header">
          <button class="nav-button" @click="onPrev">◄</button>
          <span>{{ headerLabel }}</span>
          <button class="nav-button" @click="onNext">►</button>
        </div>
        <div class="range-grid" :class="{
          'grid-date': mode === 'range-date',
          'grid-month': mode === 'range-month',
          'grid-year': mode === 'range-year'
        }">
          <!-- 日期范围 -->
          <template v-if="mode === 'range-date'">
            <div v-for="d in daysOfWeek" :key="d" class="day-header">{{ d }}</div>
            <div v-for="cell in calendarCells" :key="cell.key" class="day-cell">
              <button 
                v-if="cell.date" 
                :class="{ 
                  'in-range': isInRange(cell.date),
                  'today': isToday(cell.date)
                }"
                @click="selectRangeDate(cell.date)"
              >
                {{ cell.date.getDate() }}
                <span v-if="isToday(cell.date)" class="today-badge">今</span>
              </button>
            </div>
          </template>

          <!-- 月份范围 -->
          <template v-else-if="mode === 'range-month'">
            <div v-for="(m, idx) in months" :key="idx" class="month-cell">
              <button 
                :class="{ 
                  'in-range': isInRangeMonth(idx),
                  'current': isCurrentMonth(idx)
                }" 
                @click="selectRangeMonth(idx)"
              >
                {{ m }}
              </button>
            </div>
          </template>

          <!-- 年份范围 -->
          <template v-else>
            <div v-for="y in fullYearRange" :key="y" class="year-cell">
              <button 
                :class="{ 
                  'in-range': isInRangeYear(y),
                  'current': isCurrentYear(y)
                }" 
                @click="selectRangeYear(y)"
              >
                {{ y }}
              </button>
            </div>
          </template>
        </div>
      </div>

      <!-- Single Pickers -->
      <div v-else-if="mode === 'year'" class="year-picker">
        <div class="picker-header">
          <button class="nav-button" @click="changeYear(-1)">◄</button>
          <span>{{ currentYear }}年</span>
          <button class="nav-button" @click="changeYear(1)">►</button>
        </div>
        <div class="year-grid grid-year month-cell">
          <button 
            v-for="y in fullYearRange" 
            :key="y" 
            :class="{ 
              selected: y === selectedYear,
              current: isCurrentYear(y)
            }" 
            @click="selectYear(y)"
          >
            {{ y }}
          </button>
        </div>
      </div>

      <div v-else-if="mode === 'month'" class="month-picker">
        <div class="picker-header">
          <button class="nav-button" @click="changeYear(-1)">◄</button>
          <span>{{ currentYear }}年</span>
          <button class="nav-button" @click="changeYear(1)">►</button>
        </div>
        <div class="month-grid grid-month month-cell">
          <button 
            v-for="(m, idx) in months" 
            :key="idx" 
            :class="{ 
              selected: idx === selectedMonth,
              current: isCurrentMonth(idx)
            }" 
            @click="selectMonth(idx)"
          >
            {{ m }}
          </button>
        </div>
      </div>

      <div v-else class="date-picker-default">
        <div class="picker-header">
          <button class="nav-button" @click="changeMonth(-1)">◄</button>
          <span>{{ currentYear }}年 {{ currentMonth + 1 }}月</span>
          <button class="nav-button" @click="changeMonth(1)">►</button>
        </div>
        <div class="date-grid grid-date">
          <div v-for="d in daysOfWeek" :key="d" class="day-header">{{ d }}</div>
          <div v-for="cell in calendarCells" :key="cell.key" class="day-cell">
            <button 
              v-if="cell.date" 
              :class="{ 
                selected: isSelected(cell.date),
                disabled: !cell.isCurrentMonth,
                today: isToday(cell.date)
              }" 
              :disabled="!cell.isCurrentMonth" 
              @click="selectDate(cell.date)"
            >
              {{ cell.date.getDate() }}
              <span v-if="isToday(cell.date)" class="today-badge">今</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, PropType } from 'vue';
import DateRangeIcon from './CalendarIcon.vue';
import '../style/selectDate.scss';

defineOptions({
  name: 'MYSelect-date'
});

// Props
const props = defineProps({
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  type: {
    type: String,
    default: 'date'
  },
  year: {
    type: Boolean,
    default: false
  },
  month: {
    type: Boolean,
    default: false
  },
  range: {
    type: Boolean,
    default: false
  },
  time: {
    type: Boolean,
    default: false
  },
  showToday: {
    type: Boolean,
    default: true
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: string | string[]): void;
  (e: 'change', val: string | string[]): void;
}>();

// 状态管理
const showDropdown = ref(false);
const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth());
const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref(new Date().getMonth());
const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);
const isSelectingStart = ref(true);

// 时间选择相关
const selectedHour = ref<number | null>(null);
const selectedMinute = ref<number | null>(null);
const selectedHourStart = ref<number | null>(null);
const selectedMinuteStart = ref<number | null>(null);
const selectedHourEnd = ref<number | null>(null);
const selectedMinuteEnd = ref<number | null>(null);
const timeSelected = ref(false);
const timeSelectedStart = ref(false);
const timeSelectedEnd = ref(false);

// 定义daysOfWeek和months
const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

// 计算属性
const selectedTime = computed(() => {
  if (props.range) {
    const startTime = selectedHourStart.value !== null && selectedMinuteStart.value !== null
      ? `${String(selectedHourStart.value).padStart(2, '0')}:${String(selectedMinuteStart.value).padStart(2, '0')}`
      : '';
    const endTime = selectedHourEnd.value !== null && selectedMinuteEnd.value !== null
      ? `${String(selectedHourEnd.value).padStart(2, '0')}:${String(selectedMinuteEnd.value).padStart(2, '0')}`
      : '';
    return startTime && endTime ? `${startTime} - ${endTime}` : '';
  } else {
    if (selectedHour.value === null || selectedMinute.value === null) {
      return '';
    }
    return `${String(selectedHour.value).padStart(2, '0')}:${String(selectedMinute.value).padStart(2, '0')}`;
  }
});

const mode = computed(() => {
  if (props.range && props.year) return 'range-year';
  if (props.range && props.month) return 'range-month';
  if (props.range) return 'range-date';
  if (props.year) return 'year';
  if (props.month) return 'month';
  return 'date';
});

const placeholderText = computed(() => ({
  'date': '请选择日期',
  'year': '请选择年份',
  'month': '请选择月份',
  'range-date': '请选择日期范围',
  'range-month': '请选择月份范围',
  'range-year': '请选择年份范围'
})[mode.value]);

const headerLabel = computed(() => {
  if (mode.value === 'date') {
    return `${currentYear.value}年 ${currentMonth.value + 1}月`;
  }
  return `${currentYear.value}年`;
});

const fullYearRange = computed(() => {
  const rangeSize = 15; // 显示15个年份
  const startYear = currentYear.value - Math.floor(rangeSize / 2);
  return Array.from({ length: rangeSize }, (_, i) => startYear + i);
});

const calendarCells = computed(() => {
  if (!['date', 'range-date'].includes(mode.value)) return [];
  
  const first = new Date(currentYear.value, currentMonth.value, 1);
  first.setHours(0, 0, 0, 0);
  
  const last = new Date(currentYear.value, currentMonth.value + 1, 0);
  last.setHours(0, 0, 0, 0);
  
  const cells: {
    key: string;
    date: Date | null;
    isCurrentMonth: boolean;
  }[] = [];

  for (let i = 0; i < first.getDay(); i++) {
    cells.push({ key: `prev-${i}`, date: null, isCurrentMonth: false });
  }

  for (let d = 1; d <= last.getDate(); d++) {
    const date = new Date(currentYear.value, currentMonth.value, d);
    date.setHours(0, 0, 0, 0);
    cells.push({ key: `curr-${d}`, date, isCurrentMonth: true });
  }

  const remainingCells = 42 - cells.length;
  for (let i = 1; i <= remainingCells; i++) {
    cells.push({ key: `next-${i}`, date: null, isCurrentMonth: false });
  }

  return cells;
});

const formattedDate = computed(() => {
  if (!props.range && typeof props.modelValue === 'string') {
    const [year, month, day] = props.modelValue.split('-');
    if (year && month && day) {
      return props.month ? `${year}年${month}月` : `${year}年${month}月${day}日`;
    }
    return '';
  }

  if (props.range && Array.isArray(props.modelValue)) {
    const [start, end] = props.modelValue;
    if (start && end) {
      const [sYear, sMonth, sDay] = start.split('-');
      const [eYear, eMonth, eDay] = end.split('-');
      return props.month 
        ? `${sYear}年${sMonth}月 至 ${eYear}年${eMonth}月`
        : `${sYear}年${sMonth}月${sDay}日 至 ${eYear}年${eMonth}月${eDay}日`;
    }
    return '';
  }

  return '';
});

const formattedDateTime = computed(() => {
  if (!props.time) {
    return formattedDate.value;
  }
  if (props.range) {
    const startTime = timeSelectedStart.value ? selectedTime.value.split(' - ')[0] : '';
    const endTime = timeSelectedEnd.value ? selectedTime.value.split(' - ')[1] : '';
    return startTime && endTime ? `${formattedDate.value} ${startTime} 至 ${endTime}` : formattedDate.value;
  } else {
    // 在单日期模式下，只有在用户手动选择了时间时才显示时间
    const time = timeSelected.value ? selectedTime.value : '';
    return time ? `${formattedDate.value} ${time}` : formattedDate.value;
  }
});

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
  if (showDropdown.value) {
    initFromModelValue();
  }
}

function initFromModelValue() {
  if (!props.modelValue) return;

  if (props.time) {
    if (props.range && Array.isArray(props.modelValue)) {
      const [start, end] = props.modelValue;
      if (start && start.includes(' ')) {
        const [startTime] = start.split(' ');
        const [hours, minutes] = startTime.split(':');
        selectedHourStart.value = parseInt(hours);
        selectedMinuteStart.value = parseInt(minutes);
        timeSelectedStart.value = true;
      } else {
        selectedHourStart.value = null;
        selectedMinuteStart.value = null;
        timeSelectedStart.value = false;
      }
      if (end && end.includes(' ')) {
        const [endTime] = end.split(' ');
        const [hours, minutes] = endTime.split(':');
        selectedHourEnd.value = parseInt(hours);
        selectedMinuteEnd.value = parseInt(minutes);
        timeSelectedEnd.value = true;
      } else {
        selectedHourEnd.value = null;
        selectedMinuteEnd.value = null;
        timeSelectedEnd.value = false;
      }
    } else if (typeof props.modelValue === 'string' && props.modelValue.includes(' ')) {
      const [time] = props.modelValue.split(' ');
      const [hours, minutes] = time.split(':');
      selectedHour.value = parseInt(hours);
      selectedMinute.value = parseInt(minutes);
      timeSelected.value = true;
    } else {
      selectedHour.value = null;
      selectedMinute.value = null;
      timeSelected.value = false;
    }
  }

  if (props.range && Array.isArray(props.modelValue)) {
    const [start, end] = props.modelValue;
    if (start) {
      const [year, month, day] = start.split('-');
      startDate.value = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      currentYear.value = parseInt(year);
      currentMonth.value = parseInt(month) - 1;
    }
    if (end) {
      const [year, month, day] = end.split('-');
      endDate.value = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    }
  } else if (typeof props.modelValue === 'string') {
    const [year, month, day] = props.modelValue.split('-');
    if (year && month && day) {
      selectedYear.value = parseInt(year);
      selectedMonth.value = parseInt(month) - 1;
      currentYear.value = parseInt(year);
      currentMonth.value = parseInt(month) - 1;
    }
  }
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDateTime(date: Date, isRange: boolean, isStart: boolean): string {
  const dateStr = formatDate(date);
  if (props.time) {
    if (isRange) {
      const time = isStart ? (timeSelectedStart.value ? selectedTime.value.split(' - ')[0] : '') : (timeSelectedEnd.value ? selectedTime.value.split(' - ')[1] : '');
      return time ? `${dateStr} ${time}` : dateStr;
    } else {
      const time = timeSelected.value ? selectedTime.value : '';
      return time ? `${dateStr} ${time}` : dateStr;
    }
  }
  return dateStr;
}

function selectDate(date: Date) {
  const value = formatDateTime(date, false, false);
  emit('update:modelValue', value);
  emit('change', value);
  showDropdown.value = false;
}

function selectRangeDate(date: Date) {
  if (isSelectingStart.value) {
    startDate.value = date;
    isSelectingStart.value = false;
    emit('update:modelValue', [formatDateTime(date, true, true)]);
  } else {
    endDate.value = date;
    const startValue = formatDateTime(startDate.value!, true, true);
    const endValue = formatDateTime(date, true, false);
    emit('update:modelValue', [startValue, endValue]);
    emit('change', [startValue, endValue]);
    showDropdown.value = false;
  }
}

function selectMonth(monthIndex: number) {
  const date = new Date(currentYear.value, monthIndex, 1);
  const value = formatDateTime(date, false, false);
  emit('update:modelValue', value);
  emit('change', value);
  showDropdown.value = false;
}

function selectRangeMonth(monthIndex: number) {
  const date = new Date(currentYear.value, monthIndex, 1);
  if (isSelectingStart.value) {
    startDate.value = date;
    isSelectingStart.value = false;
    emit('update:modelValue', [formatDateTime(date, true, true)]);
  } else {
    endDate.value = date;
    const startValue = formatDateTime(startDate.value!, true, true);
    const endValue = formatDateTime(date, true, false);
    emit('update:modelValue', [startValue, endValue]);
    emit('change', [startValue, endValue]);
    showDropdown.value = false;
  }
}

function selectYear(year: number) {
  const date = new Date(year, 0, 1);
  const value = formatDateTime(date, false, false);
  emit('update:modelValue', value);
  emit('change', value);
  showDropdown.value = false;
}

function selectRangeYear(year: number) {
  const date = new Date(year, 0, 1);
  if (isSelectingStart.value) {
    startDate.value = date;
    isSelectingStart.value = false;
    emit('update:modelValue', [formatDateTime(date, true, true)]);
  } else {
    endDate.value = date;
    const startValue = formatDateTime(startDate.value!, true, true);
    const endValue = formatDateTime(date, true, false);
    emit('update:modelValue', [startValue, endValue]);
    emit('change', [startValue, endValue]);
    showDropdown.value = false;
  }
}

function changeMonth(delta: number) {
  let newMonth = currentMonth.value + delta;
  let newYear = currentYear.value;

  if (newMonth < 0) {
    newMonth = 11;
    newYear--;
  } else if (newMonth > 11) {
    newMonth = 0;
    newYear++;
  }

  currentMonth.value = newMonth;
  currentYear.value = newYear;
}

function changeYear(delta: number) {
  currentYear.value += delta;
}

function onPrev() {
  if (mode.value.includes('year')) {
    changeYear(-15);
  } else if (mode.value.includes('month')) {
    changeYear(-1);
  } else {
    changeMonth(-1);
  }
}

function onNext() {
  if (mode.value.includes('year')) {
    changeYear(15);
  } else if (mode.value.includes('month')) {
    changeYear(1);
  } else {
    changeMonth(1);
  }
}

function isSelected(date: Date): boolean {
  if (props.range || typeof props.modelValue !== 'string') return false;
  
  const [year, month, day] = props.modelValue.split('-');
  return (
    date.getFullYear() === parseInt(year) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getDate() === parseInt(day)
  );
}

function isInRange(date: Date): boolean {
  if (!startDate.value || !endDate.value) return false;
  const time = date.getTime();
  return time >= startDate.value.getTime() && time <= endDate.value.getTime();
}

function isInRangeMonth(monthIndex: number): boolean {
  if (!startDate.value || !endDate.value) return false;
  const monthStart = new Date(currentYear.value, monthIndex, 1).getTime();
  const monthEnd = new Date(currentYear.value, monthIndex + 1, 0).getTime();
  return (
    monthStart <= endDate.value.getTime() && 
    monthEnd >= startDate.value.getTime()
  );
}

function isInRangeYear(year: number): boolean {
  if (!startDate.value || !endDate.value) return false;
  return year >= startDate.value.getFullYear() && 
         year <= endDate.value.getFullYear();
}

function isToday(date: Date): boolean {
  const today = new Date();
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

function isCurrentMonth(monthIndex: number): boolean {
  const now = new Date();
  return (
    currentYear.value === now.getFullYear() &&
    monthIndex === now.getMonth()
  );
}

function isCurrentYear(year: number): boolean {
  return year === new Date().getFullYear();
}

function handleOutsideClick(event: MouseEvent) {
  if (!(event.target as HTMLElement).closest('.date-picker-container')) {
    showDropdown.value = false;
  }
}

// 生命周期
onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  initFromModelValue();
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>

<style scoped lang="scss">
$bg: #2a2a2e;
$bg-light: #3a3a3e;
$border: #4a4a4e;
$border-light: #5a5a5e;
$text: #ffffff;
$text-secondary: #b0b0b0;
$hover: #3a3a3e;
$sel: #5e81ac;
$sel-light: #7a9cc6;
$today: #8fbcbb;
$disabled: #4a4a4e;

.date-picker-container {
  position: relative;
  display: inline-block;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  .input-container {
    position: relative;

    .my-selectDate {
      padding: 8px 32px 8px 12px;
      border: 1px solid $border;
      border-radius: 6px;
      background: $bg;
      color: $text;
      font-size: 14px;
      width: 350px;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: $hover;
        border-color: $border-light;
      }

      &:focus {
        outline: none;
        border-color: $today;
        box-shadow: 0 0 0 2px rgba($today, 0.2);
      }

      &::placeholder {
        color: $text-secondary;
      }
    }

    .date-range-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      color: $text-secondary;
      width: 20px;
      height: 20px;
      transition: color 0.2s;

      &:hover {
        color: $text;
      }
    }
  }

  .date-picker-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    padding: 12px;
    background: $bg;
    border: 1px solid $border;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 2000;
    width: 420px;
    animation: fadeIn 0.2s ease-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .time-picker-container {
      margin-bottom: 12px;
      padding-bottom: 12px;
      border-bottom: 1px solid $border;

      .time-input-group {
        display: flex;
        align-items: center;
        gap: 12px;

        label {
          font-size: 14px;
          color: $text;
          font-weight: 500;
        }

        .custom-time-picker {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
        }

        .time-select {
          padding: 8px 12px;
          border: 1px solid $border;
          border-radius: 6px;
          background: $bg-light;
          color: $text;
          font-size: 14px;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23b0b0b0'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 8px center;
          background-size: 16px;
          padding-right: 32px;
          transition: all 0.2s;
          
          &:hover {
            border-color: $border-light;
          }
          
          &:focus {
            outline: none;
            border-color: $today;
            box-shadow: 0 0 0 2px rgba($today, 0.2);
          }
        }

        .time-separator {
          color: $text;
          font-weight: bold;
        }
      }

      .selected-time-display {
        margin-top: 8px;
        font-size: 13px;
        color: $text-secondary;
        text-align: center;
      }
    }

    .picker-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 4px;
      margin-bottom: 12px;

      span {
        font-size: 15px;
        font-weight: 500;
        color: $text;
      }

      .nav-button {
        background: none;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color: $text;
        padding: 4px 8px;
        border-radius: 4px;
        transition: all 0.2s;

        &:hover {
          color: $today;
          background: rgba($today, 0.1);
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }

    .range-grid,
    .year-grid,
    .month-grid,
    .date-grid {
      display: grid;
      gap: 6px;

      &.grid-date {
        grid-template-columns: repeat(7, 1fr);
      }

      &.grid-month {
        grid-template-columns: repeat(3, 1fr);
      }

      &.grid-year {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .day-header {
      font-size: 13px;
      color: $text-secondary;
      text-align: center;
      height: 32px;
      line-height: 32px;
      font-weight: 500;
    }

    .day-cell,
    .month-cell,
    .year-cell {
      text-align: center;

      button {
        width: 100%;
        height: 32px;
        line-height: 32px;
        border: none;
        background: none;
        cursor: pointer;
        font-size: 13px;
        color: $text;
        border-radius: 6px;
        position: relative;
        transition: all 0.2s;

        &:hover {
          background: $hover;
        }

        &.selected {
          color: $text;
          background: $sel;
          font-weight: 500;

          &:hover {
            background: $sel-light;
          }
        }

        &.in-range {
          background: rgba($today, 0.3);
          color: $text;

          &:hover {
            background: rgba($today, 0.4);
          }
        }

        &.disabled {
          color: $disabled;
          cursor: not-allowed;
          opacity: 0.5;
        }

        &.today {
          color: $today;
          font-weight: bold;

          .today-badge {
            position: absolute;
            top: -4px;
            right: -4px;
            font-size: 10px;
            background: $today;
            color: $bg;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-weight: bold;
          }
        }

        &.current {
          color: $today;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

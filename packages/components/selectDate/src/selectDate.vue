<template>
  <div class="date-picker-container">
    <div class="input-container">
      <input :value="formattedDate" class="my-selectDate" :placeholder="placeholderText" readonly
        @click="toggleDropdown" />
      <date-range-icon class="date-range-icon" />
    </div>

    <div v-if="showDropdown" class="date-picker-dropdown">
      <!-- Range Picker -->
      <div v-if="mode.startsWith('range')" class="range-container">
        <div class="picker-header">
          <button @click="onPrev" class="nav-button">◄</button>
          <span>{{ headerLabel }}</span>
          <button @click="onNext" class="nav-button">►</button>
        </div>
        <div class="range-grid" :class="{
          'grid-date': mode === 'range-date',
          'grid-month': mode === 'range-month',
          'grid-year': mode === 'range-year'
        }">
          <!-- 日期范围 -->
          <template v-if="mode === 'range-date'">
            <div class="day-header" v-for="d in daysOfWeek" :key="d">{{ d }}</div>
            <div v-for="cell in calendarCells" :key="cell.key" class="day-cell">
              <button v-if="cell.date" :class="{ 'in-range': isInRange(cell.date) }"
                @click="selectRangeDate(cell.date)">
                {{ cell.date.getDate() }}
              </button>
            </div>
          </template>

          <!-- 月份范围 -->
          <template v-else-if="mode === 'range-month'">
            <div v-for="(m, idx) in months" :key="idx" class="month-cell">
              <button :class="{ 'in-range': isInRangeMonth(idx) }" @click="selectRangeMonth(idx)">
                {{ m }}
              </button>
            </div>
          </template>

          <!-- 年份范围 -->
          <template v-else>
            <div v-for="y in fullYearRange" :key="y" class="year-cell">
              <button :class="{ 'in-range': isInRangeYear(y) }" @click="selectRangeYear(y)">
                {{ y }}
              </button>
            </div>
          </template>
        </div>
      </div>

      <!-- Single Pickers -->
      <div v-else-if="mode === 'year'" class="year-picker">
        <div class="picker-header">
          <button @click="changeYear(-1)" class="nav-button">◄</button>
          <span>{{ currentYear }}年</span>
          <button @click="changeYear(1)" class="nav-button">►</button>
        </div>
        <div class="year-grid grid-year month-cell">
          <button v-for="y in fullYearRange" :key="y" :class="{ selected: y === selectedYear }" @click="selectYear(y)">
            {{ y }}
          </button>
        </div>
      </div>

      <div v-else-if="mode === 'month'" class="month-picker">
        <div class="picker-header">
          <button @click="changeYear(-1)" class="nav-button">◄</button>
          <span>{{ currentYear }}年</span>
          <button @click="changeYear(1)" class="nav-button">►</button>
        </div>
        <div class="month-grid grid-month month-cell">
          <button v-for="(m, idx) in months" :key="idx" :class="{ selected: idx === selectedMonth }"
            @click="selectMonth(idx)">
            {{ m }}
          </button>
        </div>
      </div>

      <div v-else class="date-picker-default">
        <div class="picker-header">
          <button @click="changeMonth(-1)" class="nav-button">◄</button>
          <span>{{ currentYear }}年 {{ currentMonth + 1 }}月</span>
          <button @click="changeMonth(1)" class="nav-button">►</button>
        </div>
        <div class="date-grid grid-date">
          <div v-for="d in daysOfWeek" :key="d" class="day-header">{{ d }}</div>
          <div v-for="cell in calendarCells" :key="cell.key" class="day-cell">
            <button v-if="cell.date" :class="{ selected: isSelected(cell.date), disabled: !cell.isCurrentMonth }"
              @click="selectDate(cell.date)" :disabled="!cell.isCurrentMonth">
              {{ cell.date.getDate() }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, PropType } from 'vue';
import { selectDateProps } from './selectDate';
import DateRangeIcon from './dateRange.vue';
import '../style/selectDate.scss'

defineOptions({ name: 'MYSelectDate' });
interface Emits { (e: 'update:modelValue', val: string | string[]): void; }
const props = defineProps({ ...selectDateProps, modelValue: [String, Array] as PropType<string | string[]> });
const emit = defineEmits<Emits>();

// State
const showDropdown = ref(false);
const currentYear = ref(new Date().getFullYear());
const currentMonth = ref(new Date().getMonth());
const selectedYear = ref(new Date().getFullYear());
const selectedMonth = ref(new Date().getMonth()); // 初始化为当前月份(0-11)
const startDate = ref<Date | null>(null);
const endDate = ref<Date | null>(null);
const isSelectingStart = ref(true);

// Data
const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
const months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

const fullYearRange = computed(() => {
  const arr: number[] = [];
  const span = 15; // 5行x3列=15个年份
  let start = currentYear.value - Math.floor(span / 2);

  // 如果当前选中的结束年份接近边界，调整显示范围
  if (endDate.value && endDate.value.getFullYear() > start + span - 1) {
    start = endDate.value.getFullYear() - span + 1;
  }

  for (let i = 0; i < span; i++) {
    arr.push(start + i);
  }
  return arr;
});


// Mode
const mode = computed(() => {
  if (props.range && props.year) return 'range-year';
  if (props.range && props.month) return 'range-month';
  if (props.range) return 'range-date';
  if (props.year) return 'year';
  if (props.month) return 'month';
  return 'date';
});

// Texts
const placeholderText = computed(() => ({
  date: '请选择日期',
  year: '请选择年份',
  month: '请选择月份',
  'range-date': '请选择日期范围',
  'range-month': '请选择月份范围',
  'range-year': '请选择年份范围'
})[mode.value]);
const headerLabel = computed(() => mode.value === 'date' ? `${currentYear.value}年 ${currentMonth.value + 1}月` : `${currentYear.value}年`);

// Formatted
const formattedDate = computed(() => {
  if (mode.value === 'date') {
    if (typeof props.modelValue !== 'string' || !props.modelValue) return '';
    const parts = (props.modelValue as string).split('-').map(n => parseInt(n, 10));
    const [y, m, d] = parts;
    if (!y || !m || !d) return '';
    return `${y}年${m}月${d}日`;
  }
  if (mode.value === 'year') {
    if (typeof props.modelValue !== 'string' || !props.modelValue) return '';
    const y = parseInt((props.modelValue as string).split('-')[0], 10);
    return isNaN(y) ? '' : `${y}年`;
  }
  if (mode.value === 'month') {
    if (typeof props.modelValue !== 'string' || !props.modelValue) return '';
    const parts = (props.modelValue as string).split('-').map(n => parseInt(n, 10));
    const [y, m] = parts;
    if (!y || !m) return '';
    return `${y}年${m}月`;
  }
  // range modes
  if (startDate.value && endDate.value) {
    if (mode.value === 'range-date') {
      const startStr = formatDate(startDate.value);
      const endStr = formatDate(endDate.value);
      return `${startStr} 至 ${endStr}`;
    }
    if (mode.value === 'range-month') {
      return `${startDate.value.getFullYear()}年${startDate.value.getMonth() + 1}月 至 ${endDate.value.getFullYear()}年${endDate.value.getMonth() + 1}月`;
    }
    if (mode.value === 'range-year') {
      // 修复年份范围显示问题
      return `${startDate.value.getFullYear()}年 至 ${endDate.value.getFullYear()}年`;
    }
  }

  // 当没有选择完整范围时（只选择了开始日期/月份/年份）
  if (startDate.value && !endDate.value) {
    if (mode.value === 'range-date') {
      return `${formatDate(startDate.value)}`;
    }
    if (mode.value === 'range-month') {
      return `${startDate.value.getFullYear()}年${startDate.value.getMonth() + 1}月`;
    }
    if (mode.value === 'range-year') {
      return `${startDate.value.getFullYear()}年`;
    }
  }

  return '';
});


// Calendar
const calendarCells = computed(() => {
  if (mode.value !== 'date' && mode.value !== 'range-date') return [];
  const cells: { key: string; date: Date | null; isCurrentMonth: boolean }[] = [];
  const first = new Date(currentYear.value, currentMonth.value, 1);
  first.setHours(0, 0, 0, 0);
  const last = new Date(currentYear.value, currentMonth.value + 1, 0);
  last.setHours(0, 0, 0, 0);

  // Previous month fill
  for (let i = 0; i < first.getDay(); i++) {
    cells.push({ key: `p${i}`, date: null, isCurrentMonth: false });
  }

  // Current month days
  for (let d = 1; d <= last.getDate(); d++) {
    const date = new Date(currentYear.value, currentMonth.value, d);
    date.setHours(0, 0, 0, 0);
    cells.push({ key: `d${d}`, date, isCurrentMonth: true });
  }

  // Next month fill
  while (cells.length < 42) {
    const idx = cells.length;
    cells.push({ key: `n${idx}`, date: null, isCurrentMonth: false });
  }
  return cells;
});


// Actions
function toggleDropdown() {
  showDropdown.value = !showDropdown.value;

  if (showDropdown.value && (props.year || props.range)) {
    if (typeof props.modelValue === 'string' && props.modelValue) {
      const year = parseInt(props.modelValue.split('-')[0], 10);
      if (!isNaN(year)) {
        selectedYear.value = year;
        currentYear.value = year;
        ensureYearVisible(year);
      }
    } else if (Array.isArray(props.modelValue) && props.modelValue.length > 0) {
      const startYear = parseInt(props.modelValue[0].split('-')[0], 10);
      const endYear = props.modelValue.length > 1 ?
        parseInt(props.modelValue[1].split('-')[0], 10) : startYear;

      if (!isNaN(startYear)) {
        selectedYear.value = startYear;
        currentYear.value = startYear;
        ensureYearVisible(endYear || startYear);
      }
    }
  }
}


function onPrev() {
  if (mode.value.includes('range')) {
    // 范围选择模式下，根据当前视图类型切换
    if (mode.value === 'range-year') {
      currentYear.value -= 15; // 年份范围每次切换15年
    } else if (mode.value === 'range-month') {
      currentYear.value -= 1; // 月份范围每次切换1年
    } else {
      changeMonth(-1); // 日期范围每次切换1个月
    }
  } else {
    // 非范围选择模式
    mode.value === 'date' ? changeMonth(-1) : changeYear(-1);
  }
}

function onNext() {
  if (mode.value.includes('range')) {
    // 范围选择模式下，根据当前视图类型切换
    if (mode.value === 'range-year') {
      currentYear.value += 15; // 年份范围每次切换15年
    } else if (mode.value === 'range-month') {
      currentYear.value += 1; // 月份范围每次切换1年
    } else {
      changeMonth(1); // 日期范围每次切换1个月
    }
  } else {
    // 非范围选择模式
    mode.value === 'date' ? changeMonth(1) : changeYear(1);
  }
}

function selectDate(d: Date) {
  emit('update:modelValue', formatDate(d));
  currentYear.value = d.getFullYear();
  currentMonth.value = d.getMonth();
  showDropdown.value = false;
}


// 添加一个辅助函数
function formatDate(d: Date): string {
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function selectRangeDate(d: Date) {
  if (isSelectingStart.value) {
    startDate.value = d;
    isSelectingStart.value = false;
    // 更新显示部分选择
    emit('update:modelValue', [formatDate(d)]);
  } else {
    endDate.value = d;
    emit('update:modelValue', [formatDate(startDate.value!), formatDate(d)]);
    showDropdown.value = false;
  }
}
function selectMonth(idx: number) {
  selectedMonth.value = idx; // 更新选中的月份索引
  emit('update:modelValue', `${currentYear.value}-${(idx + 1).toString().padStart(2, '0')}-01`);
  showDropdown.value = false;
}
function selectRangeMonth(idx: number) {
  const selectedDate = new Date(currentYear.value, idx, 1);
  selectedDate.setHours(0, 0, 0, 0);

  if (isSelectingStart.value) {
    startDate.value = selectedDate;
    isSelectingStart.value = false;
    // 更新显示部分选择
    emit('update:modelValue', [formatDate(selectedDate)]);
  } else {
    endDate.value = selectedDate;
    emit('update:modelValue', [formatDate(startDate.value!), formatDate(selectedDate)]);
    showDropdown.value = false;
  }
}
function selectYear(y: number) {
  selectedYear.value = y; // 更新选中的年份
  emit('update:modelValue', `${y}-01-01`);
  showDropdown.value = false;
}

function ensureYearVisible(year: number) {
  const visibleYears = fullYearRange.value;
  if (year < visibleYears[0] || year > visibleYears[visibleYears.length - 1]) {
    currentYear.value = year - Math.floor(visibleYears.length / 2);
  }
}


function selectRangeYear(y: number) {
  const selectedDate = new Date(y, 0, 1);
  selectedDate.setHours(0, 0, 0, 0);

  if (isSelectingStart.value) {
    startDate.value = selectedDate;
    isSelectingStart.value = false;
    ensureYearVisible(y); // 确保开始年份可见
    emit('update:modelValue', [formatDate(selectedDate)]);
  } else {
    endDate.value = selectedDate;
    ensureYearVisible(y); // 确保结束年份可见
    emit('update:modelValue', [
      formatDate(startDate.value!),
      formatDate(selectedDate)
    ]);
    showDropdown.value = false;
  }
}


function changeMonth(delta: number) {
  // 处理跨年情况
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
function isSelected(d: Date) {
  if (typeof props.modelValue !== 'string') return false;

  const parts = (props.modelValue as string).split('-').map(n => parseInt(n, 10));
  const [y, m, day] = parts;

  return d.getFullYear() === y &&
    (d.getMonth() + 1) === m &&
    d.getDate() === day;
}

function isInRange(d: Date) { if (!startDate.value || !endDate.value) return false; const t = d.getTime(); return t >= startDate.value.getTime() && t <= endDate.value.getTime(); }
function isInRangeMonth(idx: number) { return isInRange(new Date(currentYear.value, idx, 1)); }
function isInRangeYear(y: number) {
  if (!startDate.value || !endDate.value) return false;
  return y >= startDate.value.getFullYear() && y <= endDate.value.getFullYear();
}
function handleOutsideClick(e: MouseEvent) { if (!(e.target as HTMLElement).closest('.date-picker-container')) showDropdown.value = false; }

onMounted(() => document.addEventListener('click', handleOutsideClick));
onUnmounted(() => document.removeEventListener('click', handleOutsideClick));
</script>

<style scoped lang="scss"></style>

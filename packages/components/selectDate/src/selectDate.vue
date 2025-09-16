<template>
  <div class="date-picker-container">
    <div class="input-container">
      <input :value="formattedDateTime" class="my-selectDate" :placeholder="placeholderText" readonly
        @click="toggleDropdown" />
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
                <option v-for="h in 24" :key="'hour-start-' + h" :value="h - 1">
                  {{ String(h - 1).padStart(2, '0') }}
                </option>
              </select>
              <span class="time-separator">:</span>
              <select v-model="selectedMinuteStart" class="time-select" @change="timeSelectedStart = true">
                <option v-for="m in 60" :key="'min-start-' + m" :value="m - 1">
                  {{ String(m - 1).padStart(2, '0') }}
                </option>
              </select>
            </div>
          </div>
          <div class="time-input-group">
            <label>结束时间:</label>
            <div class="custom-time-picker">
              <select v-model="selectedHourEnd" class="time-select" @change="timeSelectedEnd = true">
                <option v-for="h in 24" :key="'hour-end-' + h" :value="h - 1">
                  {{ String(h - 1).padStart(2, '0') }}
                </option>
              </select>
              <span class="time-separator">:</span>
              <select v-model="selectedMinuteEnd" class="time-select" @change="timeSelectedEnd = true">
                <option v-for="m in 60" :key="'min-end-' + m" :value="m - 1">
                  {{ String(m - 1).padStart(2, '0') }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div v-else class="time-input-group">
          <label>选择时间:</label>
          <div class="custom-time-picker">
            <select v-model="selectedHour" class="time-select" @change="timeSelected = true">
              <option v-for="h in 24" :key="'hour-' + h" :value="h - 1">
                {{ String(h - 1).padStart(2, '0') }}
              </option>
            </select>
            <span class="time-separator">:</span>
            <select v-model="selectedMinute" class="time-select" @change="timeSelected = true">
              <option v-for="m in 60" :key="'min-' + m" :value="m - 1">
                {{ String(m - 1).padStart(2, '0') }}
              </option>
            </select>
          </div>
        </div>
        <div v-if="selectedTime && (props.range ? timeSelectedStart && timeSelectedEnd : timeSelected)"
          class="selected-time-display">
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
              <button v-if="cell.date" :class="{
                'in-range': isInRange(cell.date),
                'today': isToday(cell.date)
              }" @click="selectRangeDate(cell.date)">
                {{ cell.date.getDate() }}
                <span v-if="isToday(cell.date)" class="today-badge">今</span>
              </button>
            </div>
          </template>

          <!-- 月份范围 -->
          <template v-else-if="mode === 'range-month'">
            <div v-for="(m, idx) in months" :key="idx" class="month-cell">
              <button :class="{
                'in-range': isInRangeMonth(idx),
                'current': isCurrentMonth(idx)
              }" @click="selectRangeMonth(idx)">
                {{ m }}
              </button>
            </div>
          </template>

          <!-- 年份范围 -->
          <template v-else>
            <div v-for="y in fullYearRange" :key="y" class="year-cell">
              <button :class="{
                'in-range': isInRangeYear(y),
                'current': isCurrentYear(y)
              }" @click="selectRangeYear(y)">
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
          <button v-for="y in fullYearRange" :key="y" :class="{
            selected: y === selectedYear,
            current: isCurrentYear(y)
          }" @click="selectYear(y)">
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
          <button v-for="(m, idx) in months" :key="idx" :class="{
            selected: idx === selectedMonth,
            current: isCurrentMonth(idx)
          }" @click="selectMonth(idx)">
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
            <button v-if="cell.date" :class="{
              selected: isSelected(cell.date),
              disabled: !cell.isCurrentMonth,
              today: isToday(cell.date)
            }" :disabled="!cell.isCurrentMonth" @click="selectDate(cell.date)">
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
import { useSelectDate } from './selectDateComputed';
import { selectDateProps } from './selectDate';
import DateRangeIcon from './CalendarIcon.vue';
import '../style/selectDate.scss';
import { onMounted, onUnmounted } from 'vue';

const props = defineProps(selectDateProps);
const emit = defineEmits<{
  (e: 'update:modelValue', val: string | string[]): void;
  (e: 'change', val: string | string[]): void;
}>();

const {
  showDropdown,
  toggleDropdown,
  currentYear,
  currentMonth,
  fullYearRange,
  formattedDateTime,
  placeholderText,
  mode,
  selectYear,
  selectMonth,
  selectDate,
  selectedHour,
  selectedMinute,
  selectedHourStart,
  selectedMinuteStart,
  selectedHourEnd,
  selectedMinuteEnd,
  timeSelectedStart,
  timeSelectedEnd,
  timeSelected,
  selectedTime,
  onPrev,
  onNext,
  headerLabel,
  daysOfWeek,
  calendarCells,
  isInRange,
  selectRangeDate,
  isToday,
  isInRangeMonth,
  isCurrentMonth,
  selectRangeYear,
  months,
  selectRangeMonth,
  isInRangeYear,
  isCurrentYear,
  changeYear,
  selectedYear,
  selectedMonth,
  changeMonth,
  isSelected,
  initFromModelValue
} = useSelectDate(props, emit as (e: string, val: string | string[]) => void);


  /**
   * 处理外部点击事件（用于关闭下拉框）
   * @param e - 鼠标事件对象
   */
  function handleOutsideClick(e: MouseEvent) {
    if (!(e.target as HTMLElement).closest('.date-picker-container')) {
      showDropdown.value = false;
    }
  }

  // —— 生命周期 —— 
  onMounted(() => {
    document.addEventListener('click', handleOutsideClick);
    initFromModelValue();
  });
  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick);
  });
</script>
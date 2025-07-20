<template>
  <div class="date-picker-container">
    <div class="input-container">
      <input
        :value="formattedDate"
        class="my-selectDate"
        placeholder="请选择日期"
        readonly
        @click="toggleDropdown"
      />
      <dateRange class="date-range-icon" />
    </div>
    <div v-if="showDropdown" class="date-picker-dropdown">
      <div class="date-picker-header">
        <button @click="changeMonth(-1)" class="nav-button">◄</button>
        <span>{{ currentYear }}年 {{ currentMonth + 1 }}月</span>
        <button @click="changeMonth(1)" class="nav-button">►</button>
      </div>
      <div class="date-picker-grid">
        <div v-for="day in daysOfWeek" :key="day" class="day-header">{{ day }}</div>
        <div v-for="day in calendarDays" :key="day.key" class="day-cell">
          <button
            v-if="day.date"
            :class="{ selected: isSelected(day.date), disabled: !day.isCurrentMonth }"
            :disabled="!day.isCurrentMonth"
            @click="selectDate(day.date)"
          >
            {{ day.date.getDate() }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { selectDateProps } from './selectDate';
import DateRange from './dateRange.vue';

defineOptions({
  name: 'MYSelect-date'
})

// 定义 Emits 类型
interface Emits {
  (e: 'update:modelValue', value: string): void;
}

// Props 和 Emits
const props = defineProps(selectDateProps);
const emit = defineEmits<Emits>();

// 状态
const showDropdown = ref(false);
const currentDate = ref(new Date(props.modelValue || new Date()));
const currentYear = ref(currentDate.value.getFullYear());
const currentMonth = ref(currentDate.value.getMonth());

// 星期标题
const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];

// 计算日历天数
const calendarDays = computed(() => {
  const days: { key: string; date: Date | null; isCurrentMonth: boolean }[] = [];
  const firstDayOfMonth = new Date(currentYear.value, currentMonth.value, 1);
  const lastDayOfMonth = new Date(currentYear.value, currentMonth.value + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();

  // 添加上个月的占位天
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push({ key: `prev-${i}`, date: null, isCurrentMonth: false });
  }

  // 添加当前月的天
  for (let day = 1; day <= totalDays; day++) {
    const date = new Date(currentYear.value, currentMonth.value, day);
    days.push({ key: `day-${day}`, date, isCurrentMonth: true });
  }

  // 填充剩余格子
  const remainingDays = 42 - days.length; // 6行7列
  for (let i = 1; i <= remainingDays; i++) {
    days.push({ key: `next-${i}`, date: null, isCurrentMonth: false });
  }

  return days;
});

// 格式化显示日期为中文格式（YYYY年MM月DD日）
const formattedDate = computed(() => {
  if (!props.modelValue) return '';
  const date = new Date(props.modelValue);
  if (isNaN(date.getTime())) return ''; // 处理无效日期
  return `${date.getFullYear()}年${(date.getMonth() + 1).toString().padStart(2, '0')}月${date.getDate().toString().padStart(2, '0')}日`;
});

// 切换月份
const changeMonth = (delta: number) => {
  currentMonth.value += delta;
  if (currentMonth.value < 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else if (currentMonth.value > 11) {
    currentMonth.value = 0;
    currentYear.value++;
  }
};

// 选择日期
const selectDate = (date: Date) => {
  console.log('Selected date:', date);
  const formatted = date.toISOString().split('T')[0];
  emit('update:modelValue', formatted);
  showDropdown.value = false;
  currentDate.value = date;
};

// 判断是否选中
const isSelected = (date: Date) => {
  if (!props.modelValue) return false;
  const selected = new Date(props.modelValue);
  if (isNaN(selected.getTime())) return false; // 处理无效日期
  return (
    date.getFullYear() === selected.getFullYear() &&
    date.getMonth() === selected.getMonth() &&
    date.getDate() === selected.getDate()
  );
};

// 切换下拉框显示
const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

// 点击外部关闭下拉框
const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest('.date-picker-container')) {
    showDropdown.value = false;
  }
};

// 初始化和清理
onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
});
</script>

<style lang="scss" scoped>
$bg-color: #2a2a2e;
$border-color: #4a4a4e;
$hover-bg: #3a3a3e;
$hover-border: #6a6a6e;
$focus-border: #5e81ac;
$focus-shadow: rgba(94, 129, 172, 0.3);
$text-color: #ffffff;
$placeholder-color: #d0d0d0;
$dropdown-bg: #2a2a2e;
$dropdown-text: #ffffff;
$selected-bg: #5e81ac;
$date-icon-bg: #3a3a3e; // 为 dateRange 添加背景颜色
$date-icon-hover: #4a4a4e; // 悬停时的背景颜色

.date-picker-container {
  position: relative;
}

.input-container {
  position: relative;
  display: inline-block;
}

.my-selectDate {
  background-color: $bg-color;
  color: $text-color;
  border: 1px solid $border-color;
  border-radius: 6px;
  padding: 8px 32px 8px 12px; /* 为 dateRange 留出右边空间 */
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  width: 180px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: $hover-bg;
    border-color: $hover-border;
  }

  &:focus {
    outline: none;
    border-color: $focus-border;
    box-shadow: 0 0 0 3px $focus-shadow;
  }

  &::placeholder {
    color: $placeholder-color;
  }
}

.date-range-icon {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  border-radius: 4px; // 添加圆角
  padding: 4px; // 增加内边距
  width: 24px; // 固定宽度
  height: 24px; // 固定高度
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease; // 添加过渡效果
}

.date-picker-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: $dropdown-bg;
  color: $dropdown-text;
  border: 1px solid $border-color;
  border-radius: 6px;
  padding: 10px;
  width: 220px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.date-picker-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.nav-button {
  background: none;
  border: none;
  color: $dropdown-text;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;

  &:hover {
    color: $focus-border;
  }
}

.date-picker-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.day-header {
  text-align: center;
  font-size: 14px;
  color: $dropdown-text;
}

.day-cell {
  text-align: center;
}

.day-cell button {
  background: none;
  border: none;
  color: $dropdown-text;
  width: 20px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;

  &.selected {
    background: $selected-bg;
    color: $text-color;
  }

  &.disabled {
    color: $placeholder-color;
    cursor: not-allowed;
  }

  &:hover:not(.disabled) {
    background: $hover-bg;
  }
}
</style>
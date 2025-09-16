// src/composables/useSelectDate.ts
import { ref, computed, type ExtractPropTypes } from 'vue';
import { selectDateProps } from './selectDate';  // 根据你的项目路径调整

// 自动推导 Props 类型
export type SelectDateProps = ExtractPropTypes<typeof selectDateProps>;

/**
 * 日期选择器组合式函数
 * @param props - 组件属性
 * @param emit - 事件触发函数
 * @returns 返回日期选择器的状态和方法
 */
export function useSelectDate(
  props: SelectDateProps,
  emit: (e: string, val: string | string[]) => void
) {
  // —— 状态 —— 
  const showDropdown = ref(false); // 控制下拉框显示/隐藏
  const currentYear = ref(new Date().getFullYear()); // 当前显示的年份
  const currentMonth = ref(new Date().getMonth()); // 当前显示的月份
  const selectedYear = ref(new Date().getFullYear()); // 用户选择的年份
  const selectedMonth = ref(new Date().getMonth()); // 用户选择的月份
  const startDate = ref<Date | null>(null); // 范围选择的开始日期
  const endDate = ref<Date | null>(null); // 范围选择的结束日期
  const isSelectingStart = ref(true); // 标记当前是否在选择开始日期

  // 时间选择相关状态
  const selectedHour = ref<number | null>(null); // 用户选择的小时
  const selectedMinute = ref<number | null>(null); // 用户选择的分钟
  const selectedHourStart = ref<number | null>(null); // 范围选择的开始小时
  const selectedMinuteStart = ref<number | null>(null); // 范围选择的开始分钟
  const selectedHourEnd = ref<number | null>(null); // 范围选择的结束小时
  const selectedMinuteEnd = ref<number | null>(null); // 范围选择的结束分钟
  const timeSelected = ref(false); // 标记是否已选择时间
  const timeSelectedStart = ref(false); // 标记是否已选择开始时间
  const timeSelectedEnd = ref(false); // 标记是否已选择结束时间

  // 星期和月份的名称数组
  const daysOfWeek = ['日', '一', '二', '三', '四', '五', '六'];
  const months = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

  // —— 计算属性 —— 
  /**
   * 计算当前模式（日期/月份/年份/范围选择等）
   */
  const mode = computed(() => {
    if (props.range && props.year) return 'range-year';
    if (props.range && props.month) return 'range-month';
    if (props.range) return 'range-date';
    if (props.year) return 'year';
    if (props.month) return 'month';
    return 'date';
  });

  /**
   * 根据模式返回占位符文本
   */
  const placeholderText = computed(() => ({
    'date': '请选择日期',
    'year': '请选择年份',
    'month': '请选择月份',
    'range-date': '请选择日期范围',
    'range-month': '请选择月份范围',
    'range-year': '请选择年份范围'
  })[mode.value]!);

  /**
   * 返回头部显示的标签（年份或年月）
   */
  const headerLabel = computed(() =>
    mode.value === 'date'
      ? `${currentYear.value}年 ${currentMonth.value + 1}月`
      : `${currentYear.value}年`
  );

  /**
   * 计算年份范围（用于年份选择模式）
   */
  const fullYearRange = computed(() => {
    const size = 15;
    const start = currentYear.value - Math.floor(size / 2);
    return Array.from({ length: size }, (_, i) => start + i);
  });

  /**
   * 计算日历单元格（用于日期选择模式）
   */
  const calendarCells = computed(() => {
    if (!['date', 'range-date'].includes(mode.value)) return [];
    const first = new Date(currentYear.value, currentMonth.value, 1);
    first.setHours(0, 0, 0, 0);
    const last = new Date(currentYear.value, currentMonth.value + 1, 0);
    last.setHours(0, 0, 0, 0);
    const cells: { key: string; date: Date | null; isCurrentMonth: boolean }[] = [];
    for (let i = 0; i < first.getDay(); i++) {
      cells.push({ key: `prev-${i}`, date: null, isCurrentMonth: false });
    }
    for (let d = 1; d <= last.getDate(); d++) {
      const dt = new Date(currentYear.value, currentMonth.value, d);
      dt.setHours(0, 0, 0, 0);
      cells.push({ key: `curr-${d}`, date: dt, isCurrentMonth: true });
    }
    for (let i = cells.length; i < 42; i++) {
      cells.push({ key: `next-${i}`, date: null, isCurrentMonth: false });
    }
    return cells;
  });

  /**
   * 格式化显示的日期文本
   */
  const formattedDate = computed(() => {
    // —— 年份范围 —— 
    if (mode.value === 'range-year') {
      if (startDate.value && endDate.value) {
        const sy = startDate.value.getFullYear();
        const ey = endDate.value.getFullYear();
        return `${sy}年 至 ${ey}年`;
      }
      return '';
    }
    if (mode.value === 'year') {
      // modelValue 一定是形如 "YYYY-01-01" 的字符串
      if (typeof props.modelValue === 'string' && props.modelValue) {
        const [y] = props.modelValue.split('-');
        return `${y}年`;
      }
      return '';
    }
    // —— 单值模式 —— 
    if (!props.range && typeof props.modelValue === 'string') {
      const [y, m, d] = props.modelValue.split('-');
      if (y && m && d) {
        return props.month
          ? `${y}年${m}月`
          : `${y}年${m}月${d}日`;
      }
      return '';
    }

    // —— 日期/月份范围 —— 
    if (props.range && Array.isArray(props.modelValue)) {
      const [s, e] = props.modelValue;
      if (typeof s === 'string' && typeof e === 'string' && s && e) {
        const [sy, sm, sd] = s.split('-');
        const [ey, em, ed] = e.split('-');
        if (sy && sm && sd && ey && em && ed) {
          return props.month
            ? `${sy}年${sm}月 至 ${ey}年${em}月`
            : `${sy}年${sm}月${sd}日 至 ${ey}年${em}月${ed}日`;
        }
      }
      return '';
    }

    return '';
  });

  /**
   * 格式化显示的时间文本
   */
  const selectedTime = computed(() => {
    if (props.range) {
      const st = selectedHourStart.value != null && selectedMinuteStart.value != null
        ? `${String(selectedHourStart.value).padStart(2, '0')}:${String(selectedMinuteStart.value).padStart(2, '0')}`
        : '';
      const et = selectedHourEnd.value != null && selectedMinuteEnd.value != null
        ? `${String(selectedHourEnd.value).padStart(2, '0')}:${String(selectedMinuteEnd.value).padStart(2, '0')}`
        : '';
      return st && et ? `${st} - ${et}` : '';
    }
    if (selectedHour.value == null || selectedMinute.value == null) return '';
    return `${String(selectedHour.value).padStart(2, '0')}:${String(selectedMinute.value).padStart(2, '0')}`;
  });

  /**
   * 格式化显示的日期时间文本
   */
  const formattedDateTime = computed(() => {
    if (mode.value === 'range-year' || mode.value === 'year') {
      // range-year 已由 formattedDate 处理好，year 也只展示单个年份
      return formattedDate.value;
    }
    if (!props.time) {
      return formattedDate.value;
    }
    if (props.range) {
      const [st, et] = selectedTime.value.split(' - ');
      if (st && et) return `${formattedDate.value} ${st} 至 ${et}`;
      return formattedDate.value;
    }
    return selectedTime.value
      ? `${formattedDate.value} ${selectedTime.value}`
      : formattedDate.value;
  });

  // —— 方法 —— 
  /**
   * 切换下拉框显示/隐藏
   */
  function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
    if (showDropdown.value) initFromModelValue();
  }

  /**
   * 从 modelValue 初始化状态
   */
  function initFromModelValue() {
    if (!props.modelValue) return;
    // 时间初始化
    if (props.time) {
      if (props.range && Array.isArray(props.modelValue)) {
        const [s, e] = props.modelValue;
        if (typeof s === 'string' && s.includes(' ')) {
          const [st] = s.split(' ');
          const [h, m] = st.split(':').map(Number);
          selectedHourStart.value = h; selectedMinuteStart.value = m;
          timeSelectedStart.value = true;
        }
        if (typeof e === 'string' && e.includes(' ')) {
          const [et] = e.split(' ');
          const [h, m] = et.split(':').map(Number);
          selectedHourEnd.value = h; selectedMinuteEnd.value = m;
          timeSelectedEnd.value = true;
        }
      } else if (typeof props.modelValue === 'string' && props.modelValue.includes(' ')) {
        const [t] = props.modelValue.split(' ');
        const [h, m] = t.split(':').map(Number);
        selectedHour.value = h; selectedMinute.value = m;
        timeSelected.value = true;
      }
    }
    // 日期初始化
    if (props.range && Array.isArray(props.modelValue)) {
      const [s, e] = props.modelValue;
      if (typeof s === 'string') {
        const [y, mo, d] = s.split('-').map(Number);
        startDate.value = new Date(y, mo - 1, d);
        currentYear.value = y; currentMonth.value = mo - 1;
      }
      if (typeof e === 'string') {
        const [y, mo, d] = e.split('-').map(Number);
        endDate.value = new Date(y, mo - 1, d);
      }
    } else if (typeof props.modelValue === 'string') {
      const [y, mo, d] = props.modelValue.split('-').map(Number);
      if (y && mo && d) {
        selectedYear.value = y; selectedMonth.value = mo - 1;
        currentYear.value = y; currentMonth.value = mo - 1;
      }
    }
  }

  /**
   * 格式化日期为 "YYYY-MM-DD" 字符串
   * @param date - 日期对象
   */
  function formatDate(date: Date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  /**
   * 格式化日期时间为 "YYYY-MM-DD HH:mm" 字符串
   * @param date - 日期对象
   * @param isRange - 是否为范围选择
   * @param isStart - 是否为开始时间
   */
  function formatDateTime(date: Date, isRange: boolean, isStart: boolean) {
    const ds = formatDate(date);
    if (!props.time) return ds;
    const [st, et] = selectedTime.value.split(' - ');
    const t = isRange ? (isStart ? st : et) : selectedTime.value;
    return t ? `${ds} ${t}` : ds;
  }

  /**
   * 选择日期（单值模式）
   * @param date - 选择的日期对象
   */
  function selectDate(date: Date) {
    const val = formatDateTime(date, false, false);
    emit('update:modelValue', val);
    emit('change', val);
    showDropdown.value = false;
  }

  /**
   * 选择日期范围
   * @param date - 选择的日期对象
   */
  function selectRangeDate(date: Date) {
    if (isSelectingStart.value) {
      startDate.value = date;
      isSelectingStart.value = false;
      emit('update:modelValue', [formatDateTime(date, true, true)]);
    } else {
      endDate.value = date;
      const s = formatDateTime(startDate.value!, true, true);
      const e = formatDateTime(date, true, false);
      emit('update:modelValue', [s, e]);
      emit('change', [s, e]);
      showDropdown.value = false;
      isSelectingStart.value = true;
    }
  }

  /**
   * 选择月份（单值模式）
   * @param idx - 月份索引（0-11）
   */
  function selectMonth(idx: number) {
    const dt = new Date(currentYear.value, idx, 1);
    const val = formatDateTime(dt, false, false);
    emit('update:modelValue', val);
    emit('change', val);
    showDropdown.value = false;
  }

  /**
   * 选择月份范围
   * @param idx - 月份索引（0-11）
   */
  function selectRangeMonth(idx: number) {
    const dt = new Date(currentYear.value, idx, 1);
    if (isSelectingStart.value) {
      startDate.value = dt;
      isSelectingStart.value = false;
      emit('update:modelValue', [formatDateTime(dt, true, true)]);
    } else {
      endDate.value = dt;
      const s = formatDateTime(startDate.value!, true, true);
      const e = formatDateTime(dt, true, false);
      emit('update:modelValue', [s, e]);
      emit('change', [s, e]);
      showDropdown.value = false;
      isSelectingStart.value = true;
    }
  }

  /**
   * 选择年份（单值模式）
   * @param y - 年份
   */
  function selectYear(y: number) {
    if (mode.value === 'year') {
      const iso = `${y.toString().padStart(4, '0')}-01-01`;
      emit('update:modelValue', iso);
      emit('change', iso);
      showDropdown.value = false;
      // 把 selectedYear/currentYear 也同步
      selectedYear.value = y;
      currentYear.value = y;
      return;
    }
  }

  /**
   * 选择年份范围
   * @param y - 年份
   */
  function selectRangeYear(y: number) {
    if (mode.value !== 'range-year') {
      return selectYear(y);
    }
    if (isSelectingStart.value) {
      startDate.value = new Date(y, 0, 1);
      // 先 emit 第一条 ISO 字符串，等待第二次点击
      emit('update:modelValue', [`${y}-01-01`]);
      selectedYear.value = y;
      isSelectingStart.value = false;
    } else {
      endDate.value = new Date(y, 0, 1);
      const sy = startDate.value!.getFullYear();
      const ey = endDate.value.getFullYear();
      const arr = [`${sy}-01-01`, `${ey}-01-01`];
      emit('update:modelValue', arr);
      emit('change', arr);
      showDropdown.value = false;
      // 重置准备下一次
      isSelectingStart.value = true;
      // 并更新 currentYear 到 end 年
      currentYear.value = ey;
    }
  }

  /**
   * 切换月份（向前或向后）
   * @param delta - 月份变化量（正数为向后，负数为向前）
   */
  function changeMonth(delta: number) {
    let nm = currentMonth.value + delta;
    let ny = currentYear.value;
    if (nm < 0) { nm = 11; ny--; }
    if (nm > 11) { nm = 0; ny++; }
    currentMonth.value = nm;
    currentYear.value = ny;
  }

  /**
   * 切换年份（向前或向后）
   * @param delta - 年份变化量（正数为向后，负数为向前）
   */
  function changeYear(delta: number) {
    currentYear.value += delta;
  }

  /**
   * 切换到上一页（年份/月份/日期）
   */
  function onPrev() {
    if (mode.value.includes('year')) changeYear(-fullYearRange.value.length);
    else if (mode.value.includes('month')) changeYear(-1);
    else changeMonth(-1);
  }

  /**
   * 切换到下一页（年份/月份/日期）
   */
  function onNext() {
    if (mode.value.includes('year')) changeYear(fullYearRange.value.length);
    else if (mode.value.includes('month')) changeYear(1);
    else changeMonth(1);
  }

  /**
   * 检查日期是否被选中（单值模式）
   * @param date - 日期对象
   */
  function isSelected(date: Date) {
    if (props.range || typeof props.modelValue !== 'string') return false;
    const [y, m, d] = props.modelValue.split('-').map(Number);
    return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;
  }

  /**
   * 检查日期是否在范围内（范围选择模式）
   * @param date - 日期对象
   */
  function isInRange(date: Date) {
    if (!startDate.value || !endDate.value) return false;
    const t = date.getTime();
    return t >= startDate.value.getTime() && t <= endDate.value.getTime();
  }

  /**
   * 检查月份是否在范围内（范围选择模式）
   * @param idx - 月份索引（0-11）
   */
  function isInRangeMonth(idx: number) {
    if (!startDate.value || !endDate.value) return false;
    const ms = new Date(currentYear.value, idx, 1).getTime();
    const me = new Date(currentYear.value, idx + 1, 0).getTime();
    return ms <= endDate.value.getTime() && me >= startDate.value.getTime();
  }

  /**
   * 检查年份是否在范围内（范围选择模式）
   * @param y - 年份
   */
  function isInRangeYear(y: number) {
    if (!startDate.value || !endDate.value) return false;
    return y >= startDate.value.getFullYear() && y <= endDate.value.getFullYear();
  }

  /**
   * 检查日期是否为今天
   * @param date - 日期对象
   */
  function isToday(date: Date) {
    const now = new Date();
    return date.getFullYear() === now.getFullYear()
      && date.getMonth() === now.getMonth()
      && date.getDate() === now.getDate();
  }

  /**
   * 检查月份是否为当前月份
   * @param idx - 月份索引（0-11）
   */
  function isCurrentMonth(idx: number) {
    const now = new Date();
    return currentYear.value === now.getFullYear() && idx === now.getMonth();
  }

  /**
   * 检查年份是否为当前年份
   * @param y - 年份
   */
  function isCurrentYear(y: number) {
    return y === new Date().getFullYear();
  }

  return {
    showDropdown,
    formattedDateTime,
    placeholderText,
    toggleDropdown,
    daysOfWeek,
    months,
    calendarCells,
    mode,
    headerLabel,
    fullYearRange,
    selectedTime,
    currentYear,
    currentMonth,
    selectedYear,
    selectedMonth,
    selectedHour,
    selectedMinute,
    selectedHourStart,
    selectedMinuteStart,
    selectedHourEnd,
    selectedMinuteEnd,
    timeSelected,
    timeSelectedStart,
    timeSelectedEnd,
    selectDate,
    selectRangeDate,
    selectMonth,
    selectRangeMonth,
    selectYear,
    selectRangeYear,
    changeMonth,
    changeYear,
    onPrev,
    onNext,
    isSelected,
    isInRange,
    isInRangeMonth,
    isInRangeYear,
    isToday,
    isCurrentMonth,
    isCurrentYear,
    initFromModelValue
  };
}
import { describe, it, expect, vi } from 'vitest';
import { useSelectDate } from '../src/selectDateComputed';

// 假设 SelectSize 是一个字符串联合类型，如 'small' | 'medium' | 'large'
type SelectSize = 'small' | 'medium' | 'large';

interface SelectDateProps {
  modelValue: string | string[];
  disabled: boolean;
  width: SelectSize;
  height: SelectSize;
  type: string;
  time: boolean;
  year: boolean;
  month: boolean;
  range: boolean;
  showToday: boolean;
}

describe('useSelectDate', () => {
  const emit = vi.fn();
  const props: SelectDateProps = {
    modelValue: '',
    type: 'date',
    disabled: false,
    range: false,
    year: false,
    month: false,
    time: false,
    showToday: true,
    width: 'medium',   // 补充 width
    height: 'medium',  // 补充 height
  };

  it('should initialize with default values', () => {
    const { showDropdown, currentYear, currentMonth } = useSelectDate(props, emit);
    expect(showDropdown.value).toBe(false);
    expect(currentYear.value).toBe(new Date().getFullYear());
    expect(currentMonth.value).toBe(new Date().getMonth());
  });

  it('should toggle dropdown', () => {
    const { showDropdown, toggleDropdown } = useSelectDate(props, emit);
    toggleDropdown();
    expect(showDropdown.value).toBe(true);
    toggleDropdown();
    expect(showDropdown.value).toBe(false);
  });

  it('should compute mode correctly', () => {
    const { mode } = useSelectDate(props, emit);
    expect(mode.value).toBe('date');

    const rangeProps: SelectDateProps = { ...props, range: true };
    const { mode: rangeMode } = useSelectDate(rangeProps, emit);
    expect(rangeMode.value).toBe('range-date');

    const yearProps: SelectDateProps = { ...props, year: true };
    const { mode: yearMode } = useSelectDate(yearProps, emit);
    expect(yearMode.value).toBe('year');

    const monthProps: SelectDateProps = { ...props, month: true };
    const { mode: monthMode } = useSelectDate(monthProps, emit);
    expect(monthMode.value).toBe('month');
  });

  it('should compute placeholder text based on mode', () => {
    const { placeholderText } = useSelectDate(props, emit);
    expect(placeholderText.value).toBe('请选择日期');

    const yearProps: SelectDateProps = { ...props, year: true };
    const { placeholderText: yearPlaceholder } = useSelectDate(yearProps, emit);
    expect(yearPlaceholder.value).toBe('请选择年份');

    const monthProps: SelectDateProps = { ...props, month: true };
    const { placeholderText: monthPlaceholder } = useSelectDate(monthProps, emit);
    expect(monthPlaceholder.value).toBe('请选择月份');
  });

  it('should compute calendar cells for date mode', () => {
    const { calendarCells } = useSelectDate(props, emit);
    expect(calendarCells.value.length).toBeGreaterThan(0);
  });

  it('should select a date and emit event', () => {
    const { selectDate } = useSelectDate(props, emit);
    const date = new Date();
    selectDate(date);
    expect(emit).toHaveBeenCalledWith('update:modelValue', expect.any(String));
    expect(emit).toHaveBeenCalledWith('change', expect.any(String));
  });

  it('should select a range date and emit event', () => {
    const rangeProps: SelectDateProps = { ...props, range: true };
    const { selectRangeDate } = useSelectDate(rangeProps, emit);
    const date = new Date();
    selectRangeDate(date);
    expect(emit).toHaveBeenCalledWith('update:modelValue', expect.any(Array));
    selectRangeDate(date);
    expect(emit).toHaveBeenCalledWith('change', expect.any(Array));
  });

  it('should select a month and emit event', () => {
    const monthProps: SelectDateProps = { ...props, month: true };
    const { selectMonth } = useSelectDate(monthProps, emit);
    selectMonth(0);
    expect(emit).toHaveBeenCalledWith('update:modelValue', expect.any(String));
    expect(emit).toHaveBeenCalledWith('change', expect.any(String));
  });

  it('should select a year and emit event', () => {
    const yearProps: SelectDateProps = { ...props, year: true };
    const { selectYear } = useSelectDate(yearProps, emit);
    selectYear(2025);
    expect(emit).toHaveBeenCalledWith('update:modelValue', expect.any(String));
    expect(emit).toHaveBeenCalledWith('change', expect.any(String));
  });
});
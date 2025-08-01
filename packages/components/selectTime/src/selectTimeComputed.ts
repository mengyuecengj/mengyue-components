import { ref } from 'vue'

export function useSelectTimeComputed() {
  const selectedHour = ref<string | number>('');
  const selectedMinute = ref<string | number>('');
  const selectedHourStart = ref<string | number>('');
  const selectedMinuteStart = ref<string | number>('');
  const selectedHourEnd = ref<string | number>('');
  const selectedMinuteEnd = ref<string | number>('');

  function formatTime(h: string | number, m: string | number): string {
    if (h === '' || m === '') return '';
    const hh = typeof h === 'string' ? parseInt(h) : h;
    const mm = typeof m === 'string' ? parseInt(m) : m;
    return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  }

  return {
    selectedHour,
    selectedMinute,
    selectedHourStart,
    selectedMinuteStart,
    selectedHourEnd,
    selectedMinuteEnd,
    formatTime
  }
}


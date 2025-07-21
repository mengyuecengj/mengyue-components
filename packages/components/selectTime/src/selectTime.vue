<template>
  <div class="time-picker">
    <div v-if="range" class="time-range-picker">
      <div class="time-input-group">
        <div class="custom-time-picker">
          <select v-model="selectedHourStart" @change="handleTimeChange" class="time-select">
            <option value="" disabled hidden>时</option>
            <option v-for="h in 24" :key="`hour-start-${h}`" :value="h - 1">
              {{ String(h - 1).padStart(2, '0') }}
            </option>
          </select>
          <span class="time-separator">:</span>
          <select v-model="selectedMinuteStart" @change="handleTimeChange" class="time-select">
            <option value="" disabled hidden>分</option>
            <option v-for="m in 60" :key="`min-start-${m}`" :value="m - 1">
              {{ String(m - 1).padStart(2, '0') }}
            </option>
          </select>
        </div>
      </div>

      <span class="time-range-separator">至</span>

      <div class="time-input-group">
        <div class="custom-time-picker">
          <select v-model="selectedHourEnd" @change="handleTimeChange" class="time-select">
            <option value="" disabled hidden>时</option>
            <option v-for="h in 24" :key="`hour-end-${h}`" :value="h - 1">
              {{ String(h - 1).padStart(2, '0') }}
            </option>
          </select>
          <span class="time-separator">:</span>
          <select v-model="selectedMinuteEnd" @change="handleTimeChange" class="time-select">
            <option value="" disabled hidden>分</option>
            <option v-for="m in 60" :key="`min-end-${m}`" :value="m - 1">
              {{ String(m - 1).padStart(2, '0') }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div v-else class="time-input-group single">
      <div class="custom-time-picker single-picker">
        <select v-model="selectedHour" @change="handleTimeChange" class="time-select">
          <option value="" disabled hidden>时</option>
          <option v-for="h in 24" :key="`hour-${h}`" :value="h - 1">
            {{ String(h - 1).padStart(2, '0') }}
          </option>
        </select>
        <span class="time-separator">:</span>
        <select v-model="selectedMinute" @change="handleTimeChange" class="time-select">
          <option value="" disabled hidden>分</option>
          <option v-for="m in 60" :key="`min-${m}`" :value="m - 1">
            {{ String(m - 1).padStart(2, '0') }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, PropType } from 'vue';

defineOptions({ name: 'MYSelect-time' });

const props = defineProps({
  modelValue: {
    type: [String, Array] as PropType<string | string[]>,
    default: ''
  },
  range: { type: Boolean, default: false }
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: string | string[]): void;
}>();

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

function handleTimeChange() {
  if (props.range) {
    const t1 = formatTime(selectedHourStart.value, selectedMinuteStart.value);
    const t2 = formatTime(selectedHourEnd.value, selectedMinuteEnd.value);
    if (t1 && t2) emit('update:modelValue', [t1, t2]);
  } else {
    const t = formatTime(selectedHour.value, selectedMinute.value);
    if (t) emit('update:modelValue', t);
  }
}

watch(
  () => props.modelValue,
  (nv) => {
    if (props.range && Array.isArray(nv)) {
      const [hs = '', ms = ''] = nv[0]?.split(':') ?? [];
      const [he = '', me = ''] = nv[1]?.split(':') ?? [];
      selectedHourStart.value = hs !== '' ? Number(hs) : '';
      selectedMinuteStart.value = ms !== '' ? Number(ms) : '';
      selectedHourEnd.value = he !== '' ? Number(he) : '';
      selectedMinuteEnd.value = me !== '' ? Number(me) : '';
    } else if (!props.range && typeof nv === 'string') {
      const [h = '', m = ''] = nv.split(':') ?? [];
      selectedHour.value = h !== '' ? Number(h) : '';
      selectedMinute.value = m !== '' ? Number(m) : '';
    }
  },
  { immediate: true }
);

onMounted(() => {});
</script>

<style scoped lang="scss">
.time-picker {
  display: inline-flex;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.time-range-picker,
.time-input-group.single {
  display: inline-flex;
  align-items: center;
  background-color: #1e1e1e;
  border: 1px solid #444;
  border-radius: 6px;
  padding: 8px 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  height: 30px;
}

.custom-time-picker,
.custom-time-picker.single-picker {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.time-select {
  min-width: 60px;
  height: 25px;
  border: 1px solid #444;
  outline: none;
  background-color: #2d2d2d;
  font-size: 14px;
  color: #e0e0e0;
  padding: 0 8px;
  appearance: none;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.time-select option {
  background-color: #2d2d2d;
  color: #e0e0e0;
  padding: 8px;
}

.time-select:focus {
  border-color: #409eff;
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
}

.time-select:hover {
  background-color: #3a3a3a;
}

.time-separator {
  color: #666;
  font-weight: bold;
  margin: 0 2px;
}

.time-range-separator {
  color: #888;
  margin: 0 12px;
  font-size: 14px;
}

/* 深色下拉箭头 */
.time-select {
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23888888'%3e%3cpath d='M4 6l4 4 4-4z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 12px;
  padding-right: 28px;
}

/* 滚动条样式 */
.time-select::-webkit-scrollbar {
  width: 8px;
}

.time-select::-webkit-scrollbar-track {
  background: #2d2d2d;
}

.time-select::-webkit-scrollbar-thumb {
  background-color: #555;
  border-radius: 4px;
}

.time-select::-webkit-scrollbar-thumb:hover {
  background-color: #666;
}
</style>

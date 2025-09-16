<template>
  <div class="time-picker">
    <div v-if="range" class="time-range-picker">
      <div class="time-input-group">
        <div class="custom-time-picker">
          <select v-model="selectedHourStart" class="time-select">
            <option value="" disabled hidden>时</option>
            <option v-for="h in hourOptions" :key="`hour-start-${h}`" :value="h">
              {{ String(h).padStart(2, '0') }}
            </option>
          </select>
          <span class="time-separator">:</span>
          <select v-model="selectedMinuteStart" class="time-select">
            <option value="" disabled hidden>分</option>
            <option v-for="m in minuteOptions" :key="`min-start-${m}`" :value="m">
              {{ String(m).padStart(2, '0') }}
            </option>
          </select>
        </div>
      </div>

      <span class="time-range-separator">至</span>

      <div class="time-input-group">
        <div class="custom-time-picker">
          <select v-model="selectedHourEnd" class="time-select">
            <option value="" disabled hidden>时</option>
            <option v-for="h in hourOptions" :key="`hour-end-${h}`" :value="h">
              {{ String(h).padStart(2, '0') }}
            </option>
          </select>
          <span class="time-separator">:</span>
          <select v-model="selectedMinuteEnd" class="time-select">
            <option value="" disabled hidden>分</option>
            <option v-for="m in minuteOptions" :key="`min-end-${m}`" :value="m">
              {{ String(m).padStart(2, '0') }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div v-else class="time-input-group single">
      <div class="custom-time-picker single-picker">
        <select v-model="selectedHour" class="time-select">
          <option value="" disabled hidden>时</option>
          <option v-for="h in hourOptions" :key="`hour-${h}`" :value="h">
            {{ String(h).padStart(2, '0') }}
          </option>
        </select>
        <span class="time-separator">:</span>
        <select v-model="selectedMinute" class="time-select">
          <option value="" disabled hidden>分</option>
          <option v-for="m in minuteOptions" :key="`min-${m}`" :value="m">
            {{ String(m).padStart(2, '0') }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, watchEffect } from 'vue';
import { selectTimeProps } from './selectTime';
import { useSelectTimeComputed } from './selectTimeComputed';
import '../style/selectTime.scss';

defineOptions({ name: 'MYSelect-time' });

const props = defineProps(selectTimeProps);
const emit = defineEmits<{
  (e: 'update:modelValue', val: string | string[]): void;
}>();

const {
  selectedHour,
  selectedMinute,
  selectedHourStart,
  selectedMinuteStart,
  selectedHourEnd,
  selectedMinuteEnd,
  formatTime
} = useSelectTimeComputed();

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

watch(
  () => props.range,
  (newRange) => {
    emit('update:modelValue', newRange ? ['', ''] : '');
  }
);

watchEffect(() => {
  if (props.range) {
    const t1 = formatTime(selectedHourStart.value, selectedMinuteStart.value);
    const t2 = formatTime(selectedHourEnd.value, selectedMinuteEnd.value);
    if (t1 && t2) emit('update:modelValue', [t1, t2]);
  } else {
    const t = formatTime(selectedHour.value, selectedMinute.value);
    if (t) emit('update:modelValue', t);
  }
});
</script>

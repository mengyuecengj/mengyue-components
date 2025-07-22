<template>
  <div class="custom-cascader">
    <div class="selector">
      <!-- 第一级选择 -->
      <select v-model="level1" @change="resetLevels(1)">
        <option value="">请选择省份</option>
        <option 
          v-for="item in options" 
          :key="item.value" 
          :value="item.value"
        >
          {{ item.label }}
        </option>
      </select>

      <!-- 第二级选择 -->
      <select 
        v-model="level2" 
        @change="resetLevels(2)"
        :disabled="!level1"
      >
        <option value="">请选择城市</option>
        <option 
          v-for="item in level2Options" 
          :key="item.value" 
          :value="item.value"
        >
          {{ item.label }}
        </option>
      </select>

      <!-- 第三级选择 -->
      <select 
        v-model="level3" 
        :disabled="!level2"
      >
        <option value="">请选择区域</option>
        <option 
          v-for="item in level3Options" 
          :key="item.value" 
          :value="item.value"
        >
          {{ item.label }}
        </option>
      </select>
    </div>

    <div v-if="selectedText" class="result">
      您选择了：{{ selectedText }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const level1 = ref('');
const level2 = ref('');
const level3 = ref('');

// 与方案一相同的数据结构
const options = [
  // ...同上文的areaOptions数据
];

const level2Options = computed(() => {
  if (!level1.value) return [];
  return options.find(item => item.value === level1.value)?.children || [];
});

const level3Options = computed(() => {
  if (!level2.value) return [];
  return level2Options.value.find(item => item.value === level2.value)?.children || [];
});

const selectedText = computed(() => {
  if (!level3.value) return '';
  
  const l1 = options.find(item => item.value === level1.value)?.label || '';
  const l2 = level2Options.value.find(item => item.value === level2.value)?.label || '';
  const l3 = level3Options.value.find(item => item.value === level3.value)?.label || '';
  
  return `${l1} / ${l2} / ${l3}`;
});

function resetLevels(level) {
  if (level <= 2) level2.value = '';
  if (level <= 1) level3.value = '';
}
</script>

<style scoped>
.custom-cascader {
  margin: 20px;
}
.selector select {
  min-width: 120px;
  padding: 8px;
  margin-right: 10px;
}
.result {
  margin-top: 15px;
  font-weight: bold;
}
</style>

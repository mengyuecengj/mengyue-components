<template>
  <MYButton type="success" @click="navigateTo('/')">返回/首页</MYButton>

  <div class="test-container">
    <h2>SelectCascader 组件测试</h2>

    <div class="test-section">
      <h3>基础用法</h3>
      <MYSelect-cascader v-model="selectedValue1" :options="options1" placeholder="请选择" @change="handleChange" />
      <p>当前值: {{ selectedValue1 || '未选择' }}</p>
    </div>

    <div class="test-section">
      <h3>禁用状态</h3>
      <MYSelect-cascader v-model="selectedValue2" :options="options2" placeholder="禁用状态" disabled />
    </div>

    <div class="test-section">
      <h3>多级菜单</h3>
      <MYSelect-cascader v-model="selectedValue3" :options="options3" placeholder="多级菜单" height="50px" width="500px" />
      <p>当前值: {{ selectedValue3 || '未选择' }}</p>
      <p>当前高度: height50px, 当前宽度width500px</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path: any) => {
  router.push(path)
}
interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
  children?: Option[];
}

// 基础选项
const options1: Option[] = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3', disabled: true },
  { value: 'option4', label: '选项4' },
];

// 禁用状态的选项
const options2: Option[] = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
];

// 多级菜单选项
const options3: Option[] = [
  {
    value: 'group1',
    label: '分组1',
    children: [
      { value: 'option1-1', label: '选项1-1' },
      { value: 'option1-2', label: '选项1-2' },
    ]
  },
  {
    value: 'group2',
    label: '分组2',
    children: [
      { value: 'option2-1', label: '选项2-1' },
      {
        value: 'option2-2',
        label: '选项2-2',
        children: [
          { value: 'option2-2-1', label: '选项2-2-1' },
          { value: 'option2-2-2', label: '选项2-2-2', disabled: true },
        ]
      },
    ]
  },
];

const selectedValue1 = ref<string | number>('');
const selectedValue2 = ref<string | number>('option1');
const selectedValue3 = ref<string | number>('');

const handleChange = (value: string | number) => {
  console.log('值发生变化:', value);
};
</script>

<style scoped>
.test-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.test-section {
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

h3 {
  color: #666;
  margin-bottom: 10px;
}
</style>

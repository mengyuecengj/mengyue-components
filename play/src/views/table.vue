<template>
  <div>
    <!-- 普通表格测试（带复选框） -->
    <div>
      <h2>普通表格测试（带复选框）</h2>
      <MYTable :data="tableData" stripe="rgba(0, 0, 0, 0.05)" headerBackgroundColor="#f5f7fa" headerTextColor="#909399"
        bodyBackgroundColor="#fff" bodyTextColor="#606266" border-color="#ebeef5" v-model="selectedRows">
        <MYTableColumn type="selection" width="70px" align="center" />
        <MYTableColumn prop="id" label="Id" width="50px" />
        <MYTableColumn prop="date" label="Date" width="180px" />
        <MYTableColumn prop="name" label="Name" width="180px" />
        <MYTableColumn prop="address" label="Address" width="200px" />
        <MYTableColumn prop="number" label="Number" width="200px" />
        <template #status="{ row }">
          <span :class="row.status === 'success' ? 'text-green' : 'text-red'">
            {{ row.status }}
          </span>
        </template>
      </MYTable>
    </div>

    <!-- 树形表格测试（带复选框） -->
    <div style="margin-top: 50px;">
      <h2>树形表格测试（带复选框）</h2>
      <MYTable :data="treeTableData" row-key="id" :tree-props="{ children: 'children' }" indent="20"
        stripe="rgba(0, 0, 0, 0.05)" headerBackgroundColor="#f5f7fa" headerTextColor="#909399"
        bodyBackgroundColor="#fff" bodyTextColor="#606266" border-color="#ebeef5" style="margin-top: 20px;"
        v-model="selectedTreeRows">

        <MYTableColumn prop="name" label="姓名" width="200px" />
        <MYTableColumn prop="age" label="年龄" width="100px" />
        <MYTableColumn prop="address" label="地址" width="300px" />
        <template #action="{ row }">
          <button @click="handleAction(row)">操作</button>
        </template>
      </MYTable>

      <div style="margin-top: 10px;">
        <button @click="selectTreeAll">全选</button>
        <button @click="clearTreeSelection">清空选择</button>
        <span style="margin-left: 20px;">已选择 {{ selectedTreeRows.length }} 项</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 普通表格数据
const tableData = ref([
  { id: '1', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '2', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '3', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '4', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '5', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '6', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '7', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '8', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '9', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '10', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
  { id: '11', date: '2025-07-25', name: 'Alice', address: '123 Main St', number: '13999999999', status: 'success' },
  { id: '12', date: '2025-07-24', name: 'Bob', address: '456 Oak Ave', number: '13999999999', status: 'error' },
]);

// 普通表格列定义
// const tableColumns = ref([
//   { id: '0', prop: 'selection', label: '', width: '50px' }, // 复选框列
//   { id: '1', prop: 'id', label: 'Id', width: '80px' },
//   { id: '2', prop: 'date', label: 'Date', width: '180px' },
//   { id: '3', prop: 'name', label: 'Name', width: '180px' },
//   { id: '4', prop: 'address', label: 'Address', width: '200px' },
//   { id: '5', prop: 'number', label: 'Number', width: '200px' },
//   { id: '6', prop: 'status', label: 'Status', width: '120px' },
// ]);

// 选中的行
const selectedRows = ref<string[]>([]);
// 树形表格数据
const treeTableData = ref([
  {
    id: 1,
    name: '张三',
    age: 25,
    address: '北京市',
    children: [
      {
        id: 11,
        name: '张三儿子',
        age: 2,
        address: '北京市朝阳区',
        children: [
          {
            id: 111,
            name: '张三孙子',
            age: 0.5,
            address: '北京市朝阳区CBD'
          }
        ]
      },
      {
        id: 12,
        name: '张三女儿',
        age: 5,
        address: '北京市海淀区'
      }
    ]
  },
  {
    id: 2,
    name: '李四',
    age: 30,
    address: '上海市',
    children: [
      {
        id: 21,
        name: '李四儿子',
        age: 3,
        address: '上海市浦东新区'
      }
    ]
  },
  {
    id: 3,
    name: '王五',
    age: 35,
    address: '广州市'
  }
]);

// 树形表格选中的行
const selectedTreeRows = ref<number[]>([]);

// 树形表格全选
const selectTreeAll = () => {
  const getAllIds = (data: any[]): number[] => {
    let ids: number[] = [];
    data.forEach(item => {
      ids.push(item.id);
      if (item.children && item.children.length > 0) {
        ids = ids.concat(getAllIds(item.children));
      }
    });
    return ids;
  };
  selectedTreeRows.value = getAllIds(treeTableData.value);
};

// 树形表格清空选择
const clearTreeSelection = () => {
  selectedTreeRows.value = [];
};

// 操作按钮处理函数
const handleAction = (row: any) => {
  console.log('操作按钮被点击:', row);
};
</script>

<style>
.text-green {
  color: green;
}

.text-red {
  color: red;
}
</style>
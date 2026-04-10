import{_ as p,a as o}from"./chunks/tableColumn.vue_vue_type_script_setup_true_lang.tIGtejgu.js";import{_ as E}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.Iv_XFD8t.js";import{I as F,o as S,c as q,a8 as u,J as i,w as t,j as a,a as h,O as M,t as y,A as n,h as Y}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const V={style:{margin:"20px 0"}},I={style:{margin:"20px 0"}},R={style:{margin:"20px 0"}},N={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},K={style:{margin:"20px 0"}},O={style:{margin:"20px 0"}},U={style:{margin:"20px 0"}},$={style:{margin:"20px 0"}},X=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTable.md","filePath":"components/DataTable.md"}'),H={name:"components/DataTable.md"},Z=Object.assign(H,{setup(J){const b=n([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),m=n([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),f=n([{id:1,name:"张三",age:25,address:"北京市朝阳区",status:"成功"},{id:2,name:"李四",age:30,address:"上海市浦东新区",status:"失败"},{id:3,name:"王五",age:28,address:"广州市天河区",status:"成功"}]),D=n([{type:"selection",width:"50px"},{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),B=n([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),k=n([]),A=d=>{console.log("选中行:",d)},x=n([{prop:"name",label:"部门",width:"200px"},{prop:"manager",label:"负责人",width:"120px"},{prop:"count",label:"人数",width:"80px"}]),z=n([{id:1,name:"技术部",manager:"张工",count:20,children:[{id:2,name:"前端组",manager:"李工",count:8},{id:3,name:"后端组",manager:"王工",count:12}]},{id:4,name:"市场部",manager:"赵总",count:15,children:[{id:5,name:"推广组",manager:"钱经理",count:7},{id:6,name:"运营组",manager:"孙经理",count:8}]}]),C=n([{prop:"name",label:"姓名",width:"100px"},{prop:"department",label:"部门",width:"120px"},{prop:"position",label:"职位",width:"120px"},{prop:"salary",label:"薪资",width:"100px"}]),j=n([{id:1,name:"张三",department:"技术部",position:"前端工程师",salary:"15000"},{id:2,name:"李四",department:"技术部",position:"后端工程师",salary:"16000"},{id:3,name:"王五",department:"市场部",position:"市场经理",salary:"14000"},{id:4,name:"赵六",department:"人事部",position:"HR",salary:"12000"}]),w=n([{prop:"name",label:"姓名（左对齐）",width:"120px",align:"left"},{prop:"age",label:"年龄（居中）",width:"100px",align:"center"},{prop:"salary",label:"薪资（右对齐）",width:"120px",align:"right"},{prop:"bonus",label:"奖金",width:"120px",headerAlign:"center",bodyAlign:"right"}]),v=n([{id:1,name:"张三",age:25,salary:"15000",bonus:"5000"},{id:2,name:"李四",age:30,salary:"16000",bonus:"6000"},{id:3,name:"王五",age:28,salary:"14000",bonus:"4500"}]),T=n([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),c=n([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"},{id:4,name:"赵六",age:32,address:"深圳市南山区"},{id:5,name:"钱七",age:26,address:"杭州市西湖区"}]),g=n(1),r=n(2),_=Y(()=>{const d=(g.value-1)*r.value,s=d+r.value;return c.value.slice(d,s)}),P=(d,s)=>{console.log("页码变化:",d,s)};return(d,s)=>{const l=F("ShowCode");return S(),q("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[s[3]||(s[3]=u("",4)),i(l,{title:"基础表格",description:"使用 columns 和 data 属性定义表格结构和数据。",code:`<template>
  <MYTable 
    :columns='columns' 
    :data='tableData'
  />
</template>
<script setup>
import { ref } from 'vue';
const columns = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'address', label: '地址' }
]);
const tableData = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区' }
]);
<\/script>`},{demo:t(()=>[a("div",V,[i(p,{columns:b.value,data:m.value},null,8,["columns","data"])])]),_:1}),s[4]||(s[4]=a("h2",{id:"使用插槽定义列",tabindex:"-1"},[h("使用插槽定义列 "),a("a",{class:"header-anchor",href:"#使用插槽定义列","aria-label":"Permalink to “使用插槽定义列”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongchacaodingyilie shi yong cha cao ding yi lie syccdyl ")],-1)),i(l,{title:"使用插槽定义列",description:"使用 MYTableColumn 组件和插槽自定义列内容。",code:`<template>
  <MYTable :data='tableData2'>
    <MYTableColumn prop='name' label='姓名' width='120' />
    <MYTableColumn prop='age' label='年龄' width='80' />
    <MYTableColumn prop='address' label='地址' />
    <MYTableColumn prop='status' label='状态'>
      <template #default='{ row }'>
        <span :style='{ color: row.status === '成功' ? '#67C23A' : '#F56C6C' }'>
          {{ row.status }}
        </span>
      </template>
    </MYTableColumn>
  </MYTable>
</template>
<script setup>
import { ref } from 'vue';
const tableData2 = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区', status: '成功' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区', status: '失败' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区', status: '成功' }
]);
<\/script>`},{demo:t(()=>[a("div",I,[i(p,{data:f.value},{default:t(()=>[i(o,{prop:"name",label:"姓名",width:"120"}),i(o,{prop:"age",label:"年龄",width:"80"}),i(o,{prop:"address",label:"地址"}),i(o,{prop:"status",label:"状态"},{default:t(({row:e})=>[a("span",{style:M({color:e.status==="成功"?"#67C23A":"#F56C6C"})},y(e.status),5)]),_:1})]),_:1},8,["data"])])]),_:1}),s[5]||(s[5]=a("h2",{id:"选择功能",tabindex:"-1"},[h("选择功能 "),a("a",{class:"header-anchor",href:"#选择功能","aria-label":"Permalink to “选择功能”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xuanzegongneng xuan ze gong neng xzgn ")],-1)),i(l,{title:"选择功能",description:"使用 type='selection' 列启用行选择功能",code:`<template>
  <MYTable 
    :columns='columns3' 
    :data='tableData3' 
    v-model='selectedRows' 
    @selection-change='handleSelectionChange'
  />
  <div style='margin-top: 16px;'>
    已选择: {{ selectedRows.map(row => row.name).join(', ') }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
const columns3 = ref([
  { type: 'selection', width: '50px' },
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'address', label: '地址' }
]);
const tableData3 = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区' }
]);
const selectedRows = ref([]);
const handleSelectionChange = (selection) => {
  console.log('选中行:', selection);
};
<\/script>`},{demo:t(()=>[a("div",R,[i(p,{columns:D.value,data:B.value,modelValue:k.value,"onUpdate:modelValue":s[0]||(s[0]=e=>k.value=e),onSelectionChange:A},null,8,["columns","data","modelValue"]),a("div",N," 已选择: "+y(k.value.map(e=>e.name).join(", ")),1)])]),_:1}),s[6]||(s[6]=a("h2",{id:"树形数据",tabindex:"-1"},[h("树形数据 "),a("a",{class:"header-anchor",href:"#树形数据","aria-label":"Permalink to “树形数据”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shuxingshuju shu xing shu ju sxsj ")],-1)),i(l,{title:"树形数据",description:"使用树形结构数据展示层级关系",code:`<template>
  <MYTable 
    :columns='columns4' 
    :data='treeData' 
    :tree-props='{ children: 'children' }' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns4 = ref([
  { prop: 'name', label: '部门', width: '200px' },
  { prop: 'manager', label: '负责人', width: '120px' },
  { prop: 'count', label: '人数', width: '80px' }
]);
const treeData = ref([
  {
    id: 1,
    name: '技术部',
    manager: '张工',
    count: 20,
    children: [
      { id: 2, name: '前端组', manager: '李工', count: 8 },
      { id: 3, name: '后端组', manager: '王工', count: 12 }
    ]
  },
  {
    id: 4,
    name: '市场部',
    manager: '赵总',
    count: 15,
    children: [
      { id: 5, name: '推广组', manager: '钱经理', count: 7 },
      { id: 6, name: '运营组', manager: '孙经理', count: 8 }
    ]
  }
]);
<\/script>`},{demo:t(()=>[a("div",K,[i(p,{columns:x.value,data:z.value,"tree-props":{children:"children"}},null,8,["columns","data"])])]),_:1}),s[7]||(s[7]=a("h2",{id:"斑马纹表格",tabindex:"-1"},[h("斑马纹表格 "),a("a",{class:"header-anchor",href:"#斑马纹表格","aria-label":"Permalink to “斑马纹表格”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"banmawenbiaoge ban ma wen biao ge bmwbg ")],-1)),i(l,{title:"斑马纹表格",description:"使用 stripe 属性添加斑马纹样式",code:`<template>
  <MYTable 
    :columns='columns5' 
    :data='tableData5' 
    stripe='#fafafa' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns5 = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'department', label: '部门', width: '120px' },
  { prop: 'position', label: '职位', width: '120px' },
  { prop: 'salary', label: '薪资', width: '100px' }
]);
const tableData5 = ref([
  { id: 1, name: '张三', department: '技术部', position: '前端工程师', salary: '15000' },
  { id: 2, name: '李四', department: '技术部', position: '后端工程师', salary: '16000' },
  { id: 3, name: '王五', department: '市场部', position: '市场经理', salary: '14000' },
  { id: 4, name: '赵六', department: '人事部', position: 'HR', salary: '12000' }
]);
<\/script>`},{demo:t(()=>[a("div",O,[i(p,{columns:C.value,data:j.value,stripe:"#fafafa"},null,8,["columns","data"])])]),_:1}),s[8]||(s[8]=a("h2",{id:"列对齐",tabindex:"-1"},[h("列对齐 "),a("a",{class:"header-anchor",href:"#列对齐","aria-label":"Permalink to “列对齐”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"lieduiqi lie dui qi ldq ")],-1)),i(l,{title:"列对齐",description:"使用 align、headerAlign、bodyAlign 控制列内容对齐方式",code:`<template>
  <MYTable 
    :columns='columns8' 
    :data='tableData8' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns8 = ref([
  { prop: 'name', label: '姓名（左对齐）', width: '120px', align: 'left' },
  { prop: 'age', label: '年龄（居中）', width: '100px', align: 'center' },
  { prop: 'salary', label: '薪资（右对齐）', width: '120px', align: 'right' },
  { 
    prop: 'bonus', 
    label: '奖金', 
    width: '120px', 
    headerAlign: 'center',
    bodyAlign: 'right'
  }
]);
const tableData8 = ref([
  { id: 1, name: '张三', age: 25, salary: '15000', bonus: '5000' },
  { id: 2, name: '李四', age: 30, salary: '16000', bonus: '6000' },
  { id: 3, name: '王五', age: 28, salary: '14000', bonus: '4500' }
]);
<\/script>`},{demo:t(()=>[a("div",U,[i(p,{columns:w.value,data:v.value},null,8,["columns","data"])])]),_:1}),s[9]||(s[9]=a("h2",{id:"带分页的表格",tabindex:"-1"},[h("带分页的表格 "),a("a",{class:"header-anchor",href:"#带分页的表格","aria-label":"Permalink to “带分页的表格”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"daifenyedebiaoge dai fen ye de biao ge dfydbg ")],-1)),i(l,{title:"带分页的表格",description:"使用分页插槽实现表格分页功能",code:`<template>
  <MYTable 
    :columns='columns9' 
    :data='currentPageData' 
  >
    <template #pagination>
      <MYPagination 
        v-model:current-page='currentPage' 
        v-model:page-size='pageSize' 
        :total='tableData9.length' 
        layout='prev, pager, next' 
        @change='handlePageChange' 
      />
    </template>
  </MYTable>
</template>
<script setup>
import { ref, computed } from 'vue';
const columns9 = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'address', label: '地址' }
]);
const tableData9 = ref([
  { id: 1, name: '张三', age: 25, address: '北京市朝阳区' },
  { id: 2, name: '李四', age: 30, address: '上海市浦东新区' },
  { id: 3, name: '王五', age: 28, address: '广州市天河区' },
  { id: 4, name: '赵六', age: 32, address: '深圳市南山区' },
  { id: 5, name: '钱七', age: 26, address: '杭州市西湖区' }
]);
const currentPage = ref(1);
const pageSize = ref(2);
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return tableData9.value.slice(start, end);
});
const handlePageChange = (page, size) => {
  console.log('页码变化:', page, size);
};
<\/script>`},{demo:t(()=>[a("div",$,[i(p,{columns:T.value,data:_.value},{pagination:t(()=>[i(E,{"current-page":g.value,"onUpdate:currentPage":s[1]||(s[1]=e=>g.value=e),"page-size":r.value,"onUpdate:pageSize":s[2]||(s[2]=e=>r.value=e),total:c.value.length,layout:"prev, pager, next",onChange:P},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),s[10]||(s[10]=u("",9))])}}});export{X as __pageData,Z as default};

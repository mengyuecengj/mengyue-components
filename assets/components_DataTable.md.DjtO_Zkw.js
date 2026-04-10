import{_ as p,a as o}from"./chunks/tableColumn.vue_vue_type_script_setup_true_lang.tIGtejgu.js";import{_ as E}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.Iv_XFD8t.js";import{I as F,o as S,c as q,a8 as u,J as i,w as t,j as a,a as h,O as M,t as y,A as n,h as Y}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const V={style:{margin:"20px 0"}},I={style:{margin:"20px 0"}},R={style:{margin:"20px 0"}},N={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},K={style:{margin:"20px 0"}},O={style:{margin:"20px 0"}},U={style:{margin:"20px 0"}},$={style:{margin:"20px 0"}},X=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTable.md","filePath":"components/DataTable.md"}'),H={name:"components/DataTable.md"},Z=Object.assign(H,{setup(J){const b=n([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),m=n([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),f=n([{id:1,name:"张三",age:25,address:"北京市朝阳区",status:"成功"},{id:2,name:"李四",age:30,address:"上海市浦东新区",status:"失败"},{id:3,name:"王五",age:28,address:"广州市天河区",status:"成功"}]),D=n([{type:"selection",width:"50px"},{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),B=n([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),k=n([]),A=d=>{console.log("选中行:",d)},x=n([{prop:"name",label:"部门",width:"200px"},{prop:"manager",label:"负责人",width:"120px"},{prop:"count",label:"人数",width:"80px"}]),z=n([{id:1,name:"技术部",manager:"张工",count:20,children:[{id:2,name:"前端组",manager:"李工",count:8},{id:3,name:"后端组",manager:"王工",count:12}]},{id:4,name:"市场部",manager:"赵总",count:15,children:[{id:5,name:"推广组",manager:"钱经理",count:7},{id:6,name:"运营组",manager:"孙经理",count:8}]}]),C=n([{prop:"name",label:"姓名",width:"100px"},{prop:"department",label:"部门",width:"120px"},{prop:"position",label:"职位",width:"120px"},{prop:"salary",label:"薪资",width:"100px"}]),j=n([{id:1,name:"张三",department:"技术部",position:"前端工程师",salary:"15000"},{id:2,name:"李四",department:"技术部",position:"后端工程师",salary:"16000"},{id:3,name:"王五",department:"市场部",position:"市场经理",salary:"14000"},{id:4,name:"赵六",department:"人事部",position:"HR",salary:"12000"}]),w=n([{prop:"name",label:"姓名（左对齐）",width:"120px",align:"left"},{prop:"age",label:"年龄（居中）",width:"100px",align:"center"},{prop:"salary",label:"薪资（右对齐）",width:"120px",align:"right"},{prop:"bonus",label:"奖金",width:"120px",headerAlign:"center",bodyAlign:"right"}]),v=n([{id:1,name:"张三",age:25,salary:"15000",bonus:"5000"},{id:2,name:"李四",age:30,salary:"16000",bonus:"6000"},{id:3,name:"王五",age:28,salary:"14000",bonus:"4500"}]),T=n([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),c=n([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"},{id:4,name:"赵六",age:32,address:"深圳市南山区"},{id:5,name:"钱七",age:26,address:"杭州市西湖区"}]),g=n(1),r=n(2),_=Y(()=>{const d=(g.value-1)*r.value,s=d+r.value;return c.value.slice(d,s)}),P=(d,s)=>{console.log("页码变化:",d,s)};return(d,s)=>{const l=F("ShowCode");return S(),q("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[s[3]||(s[3]=u('<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-label="Permalink to “Table”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>Table 表格组件，用于展示结构化数据，支持树形数据、选择功能、自定义样式等。 可以使用 <code>&lt;MYTable&gt;&lt;/MYTable&gt;</code> 来实现一个表格组件。支持通过props.columns或子组件<code>&lt;MYTableColumn&gt;</code>定义列结构，自定义内容需使用命名插槽。<span class="pagefind-pinyin" aria-hidden="true">Table biaogezujian，yongyuzhanshijiegouhuashuju，zhichishuxingshuju、xuanzegongneng、zidingyiyangshideng。keyishiyong laishixianyigebiaogezujian。zhichitongguoprops.columnshuozizujiandingyiliejiegou，zidingyineirongxushiyongmingmingchacao。 Table biao ge zu jian ， yong yu zhan shi jie gou hua shu ju ， zhi chi shu xing shu ju 、 xuan ze gong neng 、 zi ding yi yang shi deng 。 ke yi shi yong lai shi xian yi ge biao ge zu jian 。 zhi chi tong guo props.columns huo zi zu jian ding yi lie jie gou ， zi ding yi nei rong xu shi yong ming ming cha cao 。 Tbgzj，yyzsjghsj，zcsxsj、xzgn、zdyysd。kysy lsxygbgzj。zctgphzzjdyljg，zdynrxsymmcc。</span></p><h2 id="基础表格" tabindex="-1">基础表格 <a class="header-anchor" href="#基础表格" aria-label="Permalink to “基础表格”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichubiaoge ji chu biao ge jcbg </span></h2>',4)),i(l,{title:"基础表格",description:"使用 columns 和 data 属性定义表格结构和数据。",code:`<template>
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
<\/script>`},{demo:t(()=>[a("div",$,[i(p,{columns:T.value,data:_.value},{pagination:t(()=>[i(E,{"current-page":g.value,"onUpdate:currentPage":s[1]||(s[1]=e=>g.value=e),"page-size":r.value,"onUpdate:pageSize":s[2]||(s[2]=e=>r.value=e),total:c.value.length,layout:"prev, pager, next",onChange:P},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),s[10]||(s[10]=u(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="table-props" tabindex="-1">Table Props <a class="header-anchor" href="#table-props" aria-label="Permalink to “Table Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>data</td><td>表格数据<span class="pagefind-pinyin" aria-hidden="true">biaogeshuju biao ge shu ju bgsj</span></td><td>Array</td><td>—</td><td><code>[]</code></td></tr><tr><td>columns</td><td>列配置<span class="pagefind-pinyin" aria-hidden="true">liepeizhi lie pei zhi lpz</span></td><td>TableColumnProps[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>width</td><td>表格宽度<span class="pagefind-pinyin" aria-hidden="true">biaogekuandu biao ge kuan du bgkd</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>height</td><td>表格高度<span class="pagefind-pinyin" aria-hidden="true">biaogegaodu biao ge gao du bggd</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>headerBackgroundColor</td><td>表头背景色<span class="pagefind-pinyin" aria-hidden="true">biaotoubeijingse biao tou bei jing se btbjs</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td><code>&#39;&#39;</code></td></tr><tr><td>headerTextColor</td><td>表头文字颜色<span class="pagefind-pinyin" aria-hidden="true">biaotouwenziyanse biao tou wen zi yan se btwzys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td><code>&#39;&#39;</code></td></tr><tr><td>stripe</td><td>斑马纹颜色<span class="pagefind-pinyin" aria-hidden="true">banmawenyanse ban ma wen yan se bmwys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td><code>&#39;&#39;</code></td></tr><tr><td>borderColor</td><td>边框颜色<span class="pagefind-pinyin" aria-hidden="true">biankuangyanse bian kuang yan se bkys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyBackgroundColor</td><td>表格体背景色<span class="pagefind-pinyin" aria-hidden="true">biaogetibeijingse biao ge ti bei jing se bgtbjs</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyTextColor</td><td>表格体文字颜色<span class="pagefind-pinyin" aria-hidden="true">biaogetiwenziyanse biao ge ti wen zi yan se bgtwzys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td><code>&#39;&#39;</code></td></tr><tr><td>rowKey</td><td>行数据的 Key<span class="pagefind-pinyin" aria-hidden="true">hangshujude Key hang shu ju de Key hsjd </span></td><td>string</td><td>—</td><td><code>&#39;id&#39;</code></td></tr><tr><td>treeProps</td><td>树形结构的配置<span class="pagefind-pinyin" aria-hidden="true">shuxingjiegoudepeizhi shu xing jie gou de pei zhi sxjgdpz</span></td><td>object</td><td>—</td><td><code>{ children: &#39;children&#39;, hasChildren: &#39;hasChildren&#39; }</code></td></tr><tr><td>indent</td><td>树形数据缩进<span class="pagefind-pinyin" aria-hidden="true">shuxingshujusuojin shu xing shu ju suo jin sxsjsj</span></td><td>number</td><td>—</td><td><code>16</code></td></tr><tr><td>align</td><td>表格内容对齐方式<span class="pagefind-pinyin" aria-hidden="true">biaogeneirongduiqifangshi biao ge nei rong dui qi fang shi bgnrdqfs</span></td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>headerAlign</td><td>表头对齐方式<span class="pagefind-pinyin" aria-hidden="true">biaotouduiqifangshi biao tou dui qi fang shi btdqfs</span></td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyAlign</td><td>表格体对齐方式<span class="pagefind-pinyin" aria-hidden="true">biaogetiduiqifangshi biao ge ti dui qi fang shi bgtdqfs</span></td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>loading</td><td>是否显示加载中状态<span class="pagefind-pinyin" aria-hidden="true">shifouxianshijiazaizhongzhuangtai shi fou xian shi jia zai zhong zhuang tai sfxsjzzzt</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="tablecolumn-props" tabindex="-1">TableColumn Props <a class="header-anchor" href="#tablecolumn-props" aria-label="Permalink to “TableColumn Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>prop</td><td>列对应数据的 key<span class="pagefind-pinyin" aria-hidden="true">lieduiyingshujude key lie dui ying shu ju de key ldysjd </span></td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>列标题<span class="pagefind-pinyin" aria-hidden="true">liebiaoti lie biao ti lbt</span></td><td>string</td><td>—</td><td><code>undefined</code></td></tr><tr><td>width</td><td>列宽度<span class="pagefind-pinyin" aria-hidden="true">liekuandu lie kuan du lkd</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>type</td><td>列类型<span class="pagefind-pinyin" aria-hidden="true">lieleixing lie lei xing llx</span></td><td>string</td><td><code>selection</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>align</td><td>列内容对齐方式<span class="pagefind-pinyin" aria-hidden="true">lieneirongduiqifangshi lie nei rong dui qi fang shi lnrdqfs</span></td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>headerAlign</td><td>列表头对齐方式<span class="pagefind-pinyin" aria-hidden="true">liebiaotouduiqifangshi lie biao tou dui qi fang shi lbtdqfs</span></td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyAlign</td><td>列内容对齐方式<span class="pagefind-pinyin" aria-hidden="true">lieneirongduiqifangshi lie nei rong dui qi fang shi lnrdqfs</span></td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="table-events" tabindex="-1">Table Events <a class="header-anchor" href="#table-events" aria-label="Permalink to “Table Events”">​</a></h3><table tabindex="0"><thead><tr><th>事件名<span class="pagefind-pinyin" aria-hidden="true">shijianming shi jian ming sjm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th></tr></thead><tbody><tr><td>selection-change</td><td>当选择项发生变化时触发<span class="pagefind-pinyin" aria-hidden="true">dangxuanzexiangfashengbianhuashichufa dang xuan ze xiang fa sheng bian hua shi chu fa dxzxfsbhscf</span></td><td>selection: any[]</td></tr><tr><td>update:modelValue</td><td>选中的行数据变化时触发<span class="pagefind-pinyin" aria-hidden="true">xuanzhongdehangshujubianhuashichufa xuan zhong de hang shu ju bian hua shi chu fa xzdhsjbhscf</span></td><td>value: any[]</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TableColumnProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  className</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  prop</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  label</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  fixed</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  sortable</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  filterable</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  filters</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Array</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;{ </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">; </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }&gt;;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  scopedSlot</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  children</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">TableColumnProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  colspan</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  rowspan</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  type</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  align</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  headerAlign</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  bodyAlign</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TableProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  data</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  modelValue</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  columns</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">TableColumnProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  headerColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  headerTextColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  stripe</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  bodyBackgroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  bodyTextColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  [</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">unknown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,9))])}}});export{X as __pageData,Z as default};

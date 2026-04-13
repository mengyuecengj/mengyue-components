import{_ as r,a as o}from"./chunks/tableColumn.vue_vue_type_script_setup_true_lang.tIGtejgu.js";import{_ as F}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.Iv_XFD8t.js";import{I as N,o as M,c as z,a8 as m,J as i,w as n,j as s,a as p,O as J,t as u,A as e,h as Y}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const H={style:{margin:"20px 0"}},R={style:{margin:"20px 0"}},V={style:{margin:"20px 0"}},j={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},I={style:{margin:"20px 0"}},G={style:{margin:"20px 0"}},U={style:{margin:"20px 0"}},O={style:{margin:"20px 0"}},q=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/DataTable.md","filePath":"en/components/DataTable.md"}'),L={name:"en/components/DataTable.md"},K=Object.assign(L,{setup(Z){const b=e([{prop:"name",label:"Name",width:"100px"},{prop:"age",label:"Age",width:"80px"},{prop:"address",label:"Address"}]),y=e([{id:1,name:"John",age:25,address:"Chaoyang District, Beijing"},{id:2,name:"Jane",age:30,address:"Pudong New Area, Shanghai"},{id:3,name:"Bob",age:28,address:"Tianhe District, Guangzhou"}]),D=e([{id:1,name:"John",age:25,address:"Chaoyang District, Beijing",status:"Success"},{id:2,name:"Jane",age:30,address:"Pudong New Area, Shanghai",status:"Failed"},{id:3,name:"Bob",age:28,address:"Tianhe District, Guangzhou",status:"Success"}]),B=e([{type:"selection",width:"50px"},{prop:"name",label:"Name",width:"100px"},{prop:"age",label:"Age",width:"80px"},{prop:"address",label:"Address"}]),A=e([{id:1,name:"John",age:25,address:"Chaoyang District, Beijing"},{id:2,name:"Jane",age:30,address:"Pudong New Area, Shanghai"},{id:3,name:"Bob",age:28,address:"Tianhe District, Guangzhou"}]),k=e([]),C=l=>{console.log("Selected rows:",l)},f=e([{prop:"name",label:"Department",width:"200px"},{prop:"manager",label:"Manager",width:"120px"},{prop:"count",label:"Headcount",width:"80px"}]),T=e([{id:1,name:"Engineering",manager:"Zhang",count:20,children:[{id:2,name:"Frontend",manager:"Li",count:8},{id:3,name:"Backend",manager:"Wang",count:12}]},{id:4,name:"Marketing",manager:"Zhao",count:15,children:[{id:5,name:"Promotion",manager:"Qian",count:7},{id:6,name:"Operations",manager:"Sun",count:8}]}]),x=e([{prop:"name",label:"Name",width:"100px"},{prop:"department",label:"Department",width:"120px"},{prop:"position",label:"Position",width:"120px"},{prop:"salary",label:"Salary",width:"100px"}]),w=e([{id:1,name:"John",department:"Engineering",position:"Frontend Dev",salary:"15000"},{id:2,name:"Jane",department:"Engineering",position:"Backend Dev",salary:"16000"},{id:3,name:"Bob",department:"Marketing",position:"Marketing Mgr",salary:"14000"},{id:4,name:"Alice",department:"HR",position:"HR Specialist",salary:"12000"}]),v=e([{prop:"name",label:"Name (Left)",width:"120px",align:"left"},{prop:"age",label:"Age (Center)",width:"100px",align:"center"},{prop:"salary",label:"Salary (Right)",width:"120px",align:"right"},{prop:"bonus",label:"Bonus",width:"120px",headerAlign:"center",bodyAlign:"right"}]),P=e([{id:1,name:"John",age:25,salary:"15000",bonus:"5000"},{id:2,name:"Jane",age:30,salary:"16000",bonus:"6000"},{id:3,name:"Bob",age:28,salary:"14000",bonus:"4500"}]),S=e([{prop:"name",label:"Name",width:"100px"},{prop:"age",label:"Age",width:"80px"},{prop:"address",label:"Address"}]),c=e([{id:1,name:"John",age:25,address:"Chaoyang District, Beijing"},{id:2,name:"Jane",age:30,address:"Pudong New Area, Shanghai"},{id:3,name:"Bob",age:28,address:"Tianhe District, Guangzhou"},{id:4,name:"Charlie",age:32,address:"Nanshan District, Shenzhen"},{id:5,name:"David",age:26,address:"Xihu District, Hangzhou"}]),g=e(1),h=e(2),_=Y(()=>{const l=(g.value-1)*h.value,a=l+h.value;return c.value.slice(l,a)}),E=(l,a)=>{console.log("Page changed:",l,a)};return(l,a)=>{const d=N("ShowCode");return M(),z("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[a[3]||(a[3]=m('<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-label="Permalink to “Table”">​</a></h1><h2 id="brief-introduction" tabindex="-1">Brief Introduction <a class="header-anchor" href="#brief-introduction" aria-label="Permalink to “Brief Introduction”">​</a></h2><p>The Table component is used to display structured data, supporting tree data, selection functionality, custom styles, and more. You can use <code>&lt;MYTable&gt;&lt;/MYTable&gt;</code> to implement a table component. Column structure can be defined via <code>props.columns</code> or the child component <code>&lt;MYTableColumn&gt;</code>. Custom content requires named slots.</p><h2 id="basic-table" tabindex="-1">Basic Table <a class="header-anchor" href="#basic-table" aria-label="Permalink to “Basic Table”">​</a></h2>',4)),i(d,{title:"Basic Table",description:"Define table structure and data using columns and data properties.",code:`<template>
  <MYTable 
    :columns='columns' 
    :data='tableData'
  />
</template>
<script setup>
import { ref } from 'vue';
const columns = ref([
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'age', label: 'Age', width: '80px' },
  { prop: 'address', label: 'Address' }
]);
const tableData = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' }
]);
<\/script>`},{demo:n(()=>[s("div",H,[i(r,{columns:b.value,data:y.value},null,8,["columns","data"])])]),_:1}),a[4]||(a[4]=s("h2",{id:"define-columns-using-slots",tabindex:"-1"},[p("Define Columns Using Slots "),s("a",{class:"header-anchor",href:"#define-columns-using-slots","aria-label":"Permalink to “Define Columns Using Slots”"},"​")],-1)),i(d,{title:"Define Columns Using Slots",description:"Use the MYTableColumn component and slots to customize column content.",code:`<template>
  <MYTable :data='tableData2'>
    <MYTableColumn prop='name' label='Name' width='120' />
    <MYTableColumn prop='age' label='Age' width='80' />
    <MYTableColumn prop='address' label='Address' />
    <MYTableColumn prop='status' label='Status'>
      <template #default='{ row }'>
        <span :style='{ color: row.status === 'Success' ? '#67C23A' : '#F56C6C' }'>
          {{ row.status }}
        </span>
      </template>
    </MYTableColumn>
  </MYTable>
</template>
<script setup>
import { ref } from 'vue';
const tableData2 = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing', status: 'Success' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai', status: 'Failed' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou', status: 'Success' }
]);
<\/script>`},{demo:n(()=>[s("div",R,[i(r,{data:D.value},{default:n(()=>[i(o,{prop:"name",label:"Name",width:"120"}),i(o,{prop:"age",label:"Age",width:"80"}),i(o,{prop:"address",label:"Address"}),i(o,{prop:"status",label:"Status"},{default:n(({row:t})=>[s("span",{style:J({color:t.status==="Success"?"#67C23A":"#F56C6C"})},u(t.status),5)]),_:1})]),_:1},8,["data"])])]),_:1}),a[5]||(a[5]=s("h2",{id:"selection-feature",tabindex:"-1"},[p("Selection Feature "),s("a",{class:"header-anchor",href:"#selection-feature","aria-label":"Permalink to “Selection Feature”"},"​")],-1)),i(d,{title:"Selection Feature",description:"Enable row selection using a type='selection' column.",code:`<template>
  <MYTable 
    :columns='columns3' 
    :data='tableData3' 
    v-model='selectedRows' 
    @selection-change='handleSelectionChange'
  />
  <div style='margin-top: 16px;'>
    Selected: {{ selectedRows.map(row => row.name).join(', ') }}
  </div>
</template>
<script setup>
import { ref } from 'vue';
const columns3 = ref([
  { type: 'selection', width: '50px' },
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'age', label: 'Age', width: '80px' },
  { prop: 'address', label: 'Address' }
]);
const tableData3 = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' }
]);
const selectedRows = ref([]);
const handleSelectionChange = (selection) => {
  console.log('Selected rows:', selection);
};
<\/script>`},{demo:n(()=>[s("div",V,[i(r,{columns:B.value,data:A.value,modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=t=>k.value=t),onSelectionChange:C},null,8,["columns","data","modelValue"]),s("div",j," Selected: "+u(k.value.map(t=>t.name).join(", ")),1)])]),_:1}),a[6]||(a[6]=s("h2",{id:"tree-data",tabindex:"-1"},[p("Tree Data "),s("a",{class:"header-anchor",href:"#tree-data","aria-label":"Permalink to “Tree Data”"},"​")],-1)),i(d,{title:"Tree Data",description:"Use tree-structured data to display hierarchical relationships.",code:`<template>
  <MYTable 
    :columns='columns4' 
    :data='treeData' 
    :tree-props='{ children: 'children' }' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns4 = ref([
  { prop: 'name', label: 'Department', width: '200px' },
  { prop: 'manager', label: 'Manager', width: '120px' },
  { prop: 'count', label: 'Headcount', width: '80px' }
]);
const treeData = ref([
  {
    id: 1,
    name: 'Engineering',
    manager: 'Zhang',
    count: 20,
    children: [
      { id: 2, name: 'Frontend', manager: 'Li', count: 8 },
      { id: 3, name: 'Backend', manager: 'Wang', count: 12 }
    ]
  },
  {
    id: 4,
    name: 'Marketing',
    manager: 'Zhao',
    count: 15,
    children: [
      { id: 5, name: 'Promotion', manager: 'Qian', count: 7 },
      { id: 6, name: 'Operations', manager: 'Sun', count: 8 }
    ]
  }
]);
<\/script>`},{demo:n(()=>[s("div",I,[i(r,{columns:f.value,data:T.value,"tree-props":{children:"children"}},null,8,["columns","data"])])]),_:1}),a[7]||(a[7]=s("h2",{id:"striped-table",tabindex:"-1"},[p("Striped Table "),s("a",{class:"header-anchor",href:"#striped-table","aria-label":"Permalink to “Striped Table”"},"​")],-1)),i(d,{title:"Striped Table",description:"Add zebra striping style using the stripe property.",code:`<template>
  <MYTable 
    :columns='columns5' 
    :data='tableData5' 
    stripe='#fafafa' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns5 = ref([
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'department', label: 'Department', width: '120px' },
  { prop: 'position', label: 'Position', width: '120px' },
  { prop: 'salary', label: 'Salary', width: '100px' }
]);
const tableData5 = ref([
  { id: 1, name: 'John', department: 'Engineering', position: 'Frontend Dev', salary: '15000' },
  { id: 2, name: 'Jane', department: 'Engineering', position: 'Backend Dev', salary: '16000' },
  { id: 3, name: 'Bob', department: 'Marketing', position: 'Marketing Mgr', salary: '14000' },
  { id: 4, name: 'Alice', department: 'HR', position: 'HR Specialist', salary: '12000' }
]);
<\/script>`},{demo:n(()=>[s("div",G,[i(r,{columns:x.value,data:w.value,stripe:"#fafafa"},null,8,["columns","data"])])]),_:1}),a[8]||(a[8]=s("h2",{id:"column-alignment",tabindex:"-1"},[p("Column Alignment "),s("a",{class:"header-anchor",href:"#column-alignment","aria-label":"Permalink to “Column Alignment”"},"​")],-1)),i(d,{title:"Column Alignment",description:"Control column content alignment using align, headerAlign, and bodyAlign.",code:`<template>
  <MYTable 
    :columns='columns8' 
    :data='tableData8' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns8 = ref([
  { prop: 'name', label: 'Name (Left)', width: '120px', align: 'left' },
  { prop: 'age', label: 'Age (Center)', width: '100px', align: 'center' },
  { prop: 'salary', label: 'Salary (Right)', width: '120px', align: 'right' },
  { 
    prop: 'bonus', 
    label: 'Bonus', 
    width: '120px', 
    headerAlign: 'center',
    bodyAlign: 'right'
  }
]);
const tableData8 = ref([
  { id: 1, name: 'John', age: 25, salary: '15000', bonus: '5000' },
  { id: 2, name: 'Jane', age: 30, salary: '16000', bonus: '6000' },
  { id: 3, name: 'Bob', age: 28, salary: '14000', bonus: '4500' }
]);
<\/script>`},{demo:n(()=>[s("div",U,[i(r,{columns:v.value,data:P.value},null,8,["columns","data"])])]),_:1}),a[9]||(a[9]=s("h2",{id:"table-with-pagination",tabindex:"-1"},[p("Table with Pagination "),s("a",{class:"header-anchor",href:"#table-with-pagination","aria-label":"Permalink to “Table with Pagination”"},"​")],-1)),i(d,{title:"Table with Pagination",description:"Implement table pagination using the pagination slot.",code:`<template>
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
  { prop: 'name', label: 'Name', width: '100px' },
  { prop: 'age', label: 'Age', width: '80px' },
  { prop: 'address', label: 'Address' }
]);
const tableData9 = ref([
  { id: 1, name: 'John', age: 25, address: 'Chaoyang District, Beijing' },
  { id: 2, name: 'Jane', age: 30, address: 'Pudong New Area, Shanghai' },
  { id: 3, name: 'Bob', age: 28, address: 'Tianhe District, Guangzhou' },
  { id: 4, name: 'Charlie', age: 32, address: 'Nanshan District, Shenzhen' },
  { id: 5, name: 'David', age: 26, address: 'Xihu District, Hangzhou' }
]);
const currentPage = ref(1);
const pageSize = ref(2);
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return tableData9.value.slice(start, end);
});
const handlePageChange = (page, size) => {
  console.log('Page changed:', page, size);
};
<\/script>`},{demo:n(()=>[s("div",O,[i(r,{columns:S.value,data:_.value},{pagination:n(()=>[i(F,{"current-page":g.value,"onUpdate:currentPage":a[1]||(a[1]=t=>g.value=t),"page-size":h.value,"onUpdate:pageSize":a[2]||(a[2]=t=>h.value=t),total:c.value.length,layout:"prev, pager, next",onChange:E},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),a[10]||(a[10]=m(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="table-props" tabindex="-1">Table Props <a class="header-anchor" href="#table-props" aria-label="Permalink to “Table Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Optional Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>Table data</td><td>Array</td><td>—</td><td><code>[]</code></td></tr><tr><td>columns</td><td>Column configuration</td><td>TableColumnProps[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>width</td><td>Table width</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>height</td><td>Table height</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>headerBackgroundColor</td><td>Header background color</td><td>string</td><td>Hex or named colors</td><td><code>&#39;&#39;</code></td></tr><tr><td>headerTextColor</td><td>Header text color</td><td>string</td><td>Hex or named colors</td><td><code>&#39;&#39;</code></td></tr><tr><td>stripe</td><td>Stripe color</td><td>string</td><td>Hex or named colors</td><td><code>&#39;&#39;</code></td></tr><tr><td>borderColor</td><td>Border color</td><td>string</td><td>Hex or named colors</td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyBackgroundColor</td><td>Table body background color</td><td>string</td><td>Hex or named colors</td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyTextColor</td><td>Table body text color</td><td>string</td><td>Hex or named colors</td><td><code>&#39;&#39;</code></td></tr><tr><td>rowKey</td><td>Row data key</td><td>string</td><td>—</td><td><code>&#39;id&#39;</code></td></tr><tr><td>treeProps</td><td>Tree structure config</td><td>object</td><td>—</td><td><code>{ children: &#39;children&#39;, hasChildren: &#39;hasChildren&#39; }</code></td></tr><tr><td>indent</td><td>Tree data indent</td><td>number</td><td>—</td><td><code>16</code></td></tr><tr><td>align</td><td>Content alignment</td><td>string</td><td><code>left</code> / <code>center</code> / <code>right</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>headerAlign</td><td>Header alignment</td><td>string</td><td><code>left</code> / <code>center</code> / <code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyAlign</td><td>Body alignment</td><td>string</td><td><code>left</code> / <code>center</code> / <code>right</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="tablecolumn-props" tabindex="-1">TableColumn Props <a class="header-anchor" href="#tablecolumn-props" aria-label="Permalink to “TableColumn Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Optional Values</th><th>Default</th></tr></thead><tbody><tr><td>prop</td><td>Column data key</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>Column header label</td><td>string</td><td>—</td><td><code>undefined</code></td></tr><tr><td>width</td><td>Column width</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>type</td><td>Column type</td><td>string</td><td><code>selection</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>align</td><td>Content alignment</td><td>string</td><td><code>left</code> / <code>center</code> / <code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>headerAlign</td><td>Header alignment</td><td>string</td><td><code>left</code> / <code>center</code> / <code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyAlign</td><td>Body alignment</td><td>string</td><td><code>left</code> / <code>center</code> / <code>right</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="table-events" tabindex="-1">Table Events <a class="header-anchor" href="#table-events" aria-label="Permalink to “Table Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>selection-change</td><td>Triggers when selection changes</td><td>selection: any[]</td></tr><tr><td>update:modelValue</td><td>Triggers when selected row data changes</td><td>value: any[]</td></tr></tbody></table><h3 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-label="Permalink to “Type Definitions”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TableColumnProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,9))])}}});export{q as __pageData,K as default};

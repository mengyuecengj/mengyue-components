import{d as ss,a0 as ns,z as ls,o as p,c as h,k as c,O as x,n as U,j as e,G as F,H,a as D,t as z,a1 as ds,a2 as rs,e as X,r as W,h as B,y as d,I as ps,ah as Z,J as l,w as u}from"./chunks/framework.DoR57c7M.js";import{u as J}from"./chunks/useStyleComputed.DokJCVvp.js";import{_ as hs}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.mXs8BQVp.js";const os={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},modelValue:{type:[Array,String],default:()=>[]},loading:{type:Boolean,default:!1},width:{type:String,default:""},height:{type:String,default:""},headerBackgroundColor:{type:String,default:""},headerTextColor:{type:String,default:""},stripe:{type:String,default:""},borderColor:{type:String,default:""},bodyBackgroundColor:{type:String,default:""},hoverBackgroundColor:{type:String,default:""},bodyTextColor:{type:String,default:""},rowKey:{type:String,default:"id"},treeProps:{type:Object,default:()=>({children:"children",hasChildren:"hasChildren"})},indent:{type:Number,default:16},align:{type:String,default:"left"},headerAlign:{type:String,default:""},bodyAlign:{type:String,default:""}};function ks(C){const f=J(C,{propToStyleMap:{width:"width",height:"height",border:"border"}}),T=J(C,{propToStyleMap:{headerBackgroundColor:"backgroundColor",headerTextColor:"color",headerAlign:"textAlign"}}),n=J(C,{propToStyleMap:{bodyBackgroundColor:"backgroundColor",bodyTextColor:"color",bodyAlign:"textAlign",hoverBackgroundColor:"--hover-bg-color"}});return{tableStyle:f,headerStyle:T,bodyStyle:n}}const cs=["aria-busy"],gs=["data-column"],ys=["checked",".indeterminate","disabled"],us=["data-column"],ms=["checked","disabled","onChange"],bs=["onClick"],As={class:"pagination-container"},Bs={key:0,class:"my-table__overlay"},v=ss({__name:"table",props:os,emits:["update:modelValue","selection-change"],setup(C,{emit:f}){const n=C,M=f,{tableStyle:N,headerStyle:S,bodyStyle:I}=ks(n),j=ns(),w=d([]),m=s=>{const t=String(n.rowKey??"id");return s[t]},P=s=>w.value.includes(m(s)),K=s=>{if(n.loading)return;const t=m(s),a=w.value.indexOf(t);a>-1?w.value.splice(a,1):w.value.push(t)},Y=()=>n.treeProps??{},E=s=>{const{children:t="children"}=Y(),a=s[t];return Array.isArray(a)?a:[]},V=s=>{const{hasChildren:t}=Y();return typeof t=="string"?!!s[t]:E(s).length>0},_=(s,t=0)=>{const a=[];return s.forEach(A=>{const r=E(A),R=r.length===0;a.push({row:A,level:t,isLeaf:R}),!R&&P(A)&&a.push(..._(r,t+1))}),a},g=B(()=>_(n.data??[])),O=B(()=>(n.data??[]).some(s=>E(s).length>0)),o=d([]);ls(()=>n.modelValue,s=>{Array.isArray(s)&&(o.value=s)},{immediate:!0});const b=s=>o.value.some(t=>m(t)===m(s)),i=s=>{if(n.loading)return;const t=m(s),a=o.value.findIndex(A=>m(A)===t);a>-1?o.value.splice(a,1):o.value.push(s),G()},y=B(()=>g.value.length>0&&o.value.length===g.value.length),k=B(()=>o.value.length>0&&o.value.length<g.value.length),as=()=>{n.loading||(o.value=y.value?[]:g.value.map(s=>s.row),G())},G=()=>{M("update:modelValue",o.value),M("selection-change",o.value)},ts=B(()=>{const s=j.default?.({})??[],t=[];return s.forEach(a=>{if(typeof a.type=="object"&&"name"in a.type&&a.type.name==="MYTableColumn"&&a.props){const r=a.props;t.push({...r,prop:String(r.prop),label:r.label})}}),t}),L=B(()=>n.columns?.length?n.columns:ts.value),q=B(()=>L.value.find(t=>t.type!=="selection")?.prop??""),Q=(s,t)=>({textAlign:(t==="header"?s.headerAlign||s.align:s.bodyAlign||s.align)||"left",width:s.width}),es=s=>`${Number(s)*Number(n.indent??16)}px`,is=(s,t)=>s[t];return(s,t)=>(p(),h("div",{class:U(["my-table",{"is-loading":c(n).loading}]),style:x({"--table-border-color":c(n).borderColor,"--hover-bg-color":c(n).hoverBackgroundColor,...c(N)}),"aria-busy":c(n).loading?"true":"false"},[e("table",null,[e("thead",{style:x(c(S))},[e("tr",null,[(p(!0),h(F,null,H(L.value,a=>(p(),h("th",{key:a.prop,"data-column":a.prop,style:x(Q(a,"header"))},[a.type==="selection"?(p(),h("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:y.value,".indeterminate":k.value,disabled:c(n).loading,onChange:as},null,40,ys)):(p(),h(F,{key:1},[D(z(a.label),1)],64))],12,gs))),128))])],4),e("tbody",{style:x(c(I))},[(p(!0),h(F,null,H(g.value,(a,A)=>(p(),h("tr",{key:m(a.row),class:U(["my-table-row",{"my-table-row--expanded":P(a.row)}]),style:x(A%2===1?{backgroundColor:c(n).stripe}:{})},[(p(!0),h(F,null,H(L.value,r=>(p(),h("td",{key:r.prop,"data-column":r.prop,style:x({paddingLeft:r.type!=="selection"&&r.prop===q.value?es(a.level):"",...Q(r,"body")})},[r.type==="selection"?(p(),h("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:b(a.row),disabled:c(n).loading,onChange:R=>i(a.row)},null,40,ms)):(p(),h(F,{key:1},[r.prop===q.value&&O.value?ds((p(),h("span",{key:0,class:U(["my-table__expand-icon",{"my-table__expand-icon--expanded":P(a.row)}]),onClick:R=>K(a.row)},[...t[0]||(t[0]=[e("svg",{viewBox:"0 0 1024 1024",width:"12",height:"12"},[e("path",{d:"M256 128l512 384-512 384z",fill:"currentColor"})],-1)])],10,bs)),[[rs,!a.isLeaf||V(a.row)]]):X("",!0),W(s.$slots,r.prop,{row:a.row,level:a.level,index:A},()=>[D(z(is(a.row,r.prop)),1)])],64))],12,us))),128))],6))),128))],4)]),e("div",As,[W(s.$slots,"pagination")]),c(n).loading?(p(),h("div",Bs,[...t[1]||(t[1]=[e("div",{class:"my-table__spinner"},null,-1),e("div",{class:"my-table__loading-text"},"加载中...",-1)])])):X("",!0)],14,cs))}}),$=ss({name:"MYTableColumn",__name:"tableColumn",setup(C){return(f,T)=>W(f.$slots,"default")}}),Ds={style:{margin:"20px 0"}},Cs={style:{margin:"20px 0"}},fs={style:{margin:"20px 0"}},vs={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},xs={style:{margin:"20px 0"}},ws={style:{margin:"20px 0"}},_s={style:{margin:"20px 0"}},Ts={style:{margin:"20px 0"}},Ms=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTable.md","filePath":"components/DataTable.md"}'),Ss={name:"components/DataTable.md"},Ys=Object.assign(Ss,{setup(C){const f=d([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),T=d([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),n=d([{id:1,name:"张三",age:25,address:"北京市朝阳区",status:"成功"},{id:2,name:"李四",age:30,address:"上海市浦东新区",status:"失败"},{id:3,name:"王五",age:28,address:"广州市天河区",status:"成功"}]),M=d([{type:"selection",width:"50px"},{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),N=d([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),S=d([]),I=b=>{console.log("选中行:",b)},j=d([{prop:"name",label:"部门",width:"200px"},{prop:"manager",label:"负责人",width:"120px"},{prop:"count",label:"人数",width:"80px"}]),w=d([{id:1,name:"技术部",manager:"张工",count:20,children:[{id:2,name:"前端组",manager:"李工",count:8},{id:3,name:"后端组",manager:"王工",count:12}]},{id:4,name:"市场部",manager:"赵总",count:15,children:[{id:5,name:"推广组",manager:"钱经理",count:7},{id:6,name:"运营组",manager:"孙经理",count:8}]}]),m=d([{prop:"name",label:"姓名",width:"100px"},{prop:"department",label:"部门",width:"120px"},{prop:"position",label:"职位",width:"120px"},{prop:"salary",label:"薪资",width:"100px"}]),P=d([{id:1,name:"张三",department:"技术部",position:"前端工程师",salary:"15000"},{id:2,name:"李四",department:"技术部",position:"后端工程师",salary:"16000"},{id:3,name:"王五",department:"市场部",position:"市场经理",salary:"14000"},{id:4,name:"赵六",department:"人事部",position:"HR",salary:"12000"}]),K=d([{prop:"name",label:"姓名（左对齐）",width:"120px",align:"left"},{prop:"age",label:"年龄（居中）",width:"100px",align:"center"},{prop:"salary",label:"薪资（右对齐）",width:"120px",align:"right"},{prop:"bonus",label:"奖金",width:"120px",headerAlign:"center",bodyAlign:"right"}]),Y=d([{id:1,name:"张三",age:25,salary:"15000",bonus:"5000"},{id:2,name:"李四",age:30,salary:"16000",bonus:"6000"},{id:3,name:"王五",age:28,salary:"14000",bonus:"4500"}]),E=d([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),V=d([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"},{id:4,name:"赵六",age:32,address:"深圳市南山区"},{id:5,name:"钱七",age:26,address:"杭州市西湖区"}]),_=d(1),g=d(2),O=B(()=>{const b=(_.value-1)*g.value,i=b+g.value;return V.value.slice(b,i)}),o=(b,i)=>{console.log("页码变化:",b,i)};return(b,i)=>{const y=ps("ShowCode");return p(),h("div",null,[i[3]||(i[3]=Z("",4)),l(y,{title:"基础表格",description:"使用 columns 和 data 属性定义表格结构和数据。",code:`<template>
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
<\/script>`},{demo:u(()=>[e("div",Ds,[l(v,{columns:f.value,data:T.value},null,8,["columns","data"])])]),_:1}),i[4]||(i[4]=e("h2",{id:"使用插槽定义列",tabindex:"-1"},[D("使用插槽定义列 "),e("a",{class:"header-anchor",href:"#使用插槽定义列","aria-label":"Permalink to “使用插槽定义列”"},"​")],-1)),l(y,{title:"使用插槽定义列",description:"使用 MYTableColumn 组件和插槽自定义列内容。",code:`<template>
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
<\/script>`},{demo:u(()=>[e("div",Cs,[l(v,{data:n.value},{default:u(()=>[l($,{prop:"name",label:"姓名",width:"120"}),l($,{prop:"age",label:"年龄",width:"80"}),l($,{prop:"address",label:"地址"}),l($,{prop:"status",label:"状态"},{default:u(({row:k})=>[e("span",{style:x({color:k.status==="成功"?"#67C23A":"#F56C6C"})},z(k.status),5)]),_:1})]),_:1},8,["data"])])]),_:1}),i[5]||(i[5]=e("h2",{id:"选择功能",tabindex:"-1"},[D("选择功能 "),e("a",{class:"header-anchor",href:"#选择功能","aria-label":"Permalink to “选择功能”"},"​")],-1)),l(y,{title:"选择功能",description:"使用 type='selection' 列启用行选择功能",code:`<template>
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
<\/script>`},{demo:u(()=>[e("div",fs,[l(v,{columns:M.value,data:N.value,modelValue:S.value,"onUpdate:modelValue":i[0]||(i[0]=k=>S.value=k),onSelectionChange:I},null,8,["columns","data","modelValue"]),e("div",vs," 已选择: "+z(S.value.map(k=>k.name).join(", ")),1)])]),_:1}),i[6]||(i[6]=e("h2",{id:"树形数据",tabindex:"-1"},[D("树形数据 "),e("a",{class:"header-anchor",href:"#树形数据","aria-label":"Permalink to “树形数据”"},"​")],-1)),l(y,{title:"树形数据",description:"使用树形结构数据展示层级关系",code:`<template>
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
<\/script>`},{demo:u(()=>[e("div",xs,[l(v,{columns:j.value,data:w.value,"tree-props":{children:"children"}},null,8,["columns","data"])])]),_:1}),i[7]||(i[7]=e("h2",{id:"斑马纹表格",tabindex:"-1"},[D("斑马纹表格 "),e("a",{class:"header-anchor",href:"#斑马纹表格","aria-label":"Permalink to “斑马纹表格”"},"​")],-1)),l(y,{title:"斑马纹表格",description:"使用 stripe 属性添加斑马纹样式",code:`<template>
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
<\/script>`},{demo:u(()=>[e("div",ws,[l(v,{columns:m.value,data:P.value,stripe:"#fafafa"},null,8,["columns","data"])])]),_:1}),i[8]||(i[8]=e("h2",{id:"列对齐",tabindex:"-1"},[D("列对齐 "),e("a",{class:"header-anchor",href:"#列对齐","aria-label":"Permalink to “列对齐”"},"​")],-1)),l(y,{title:"列对齐",description:"使用 align、headerAlign、bodyAlign 控制列内容对齐方式",code:`<template>
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
<\/script>`},{demo:u(()=>[e("div",_s,[l(v,{columns:K.value,data:Y.value},null,8,["columns","data"])])]),_:1}),i[9]||(i[9]=e("h2",{id:"带分页的表格",tabindex:"-1"},[D("带分页的表格 "),e("a",{class:"header-anchor",href:"#带分页的表格","aria-label":"Permalink to “带分页的表格”"},"​")],-1)),l(y,{title:"带分页的表格",description:"使用分页插槽实现表格分页功能",code:`<template>
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
<\/script>`},{demo:u(()=>[e("div",Ts,[l(v,{columns:E.value,data:O.value},{pagination:u(()=>[l(hs,{"current-page":_.value,"onUpdate:currentPage":i[1]||(i[1]=k=>_.value=k),"page-size":g.value,"onUpdate:pageSize":i[2]||(i[2]=k=>g.value=k),total:V.value.length,layout:"prev, pager, next",onChange:o},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),i[10]||(i[10]=Z("",9))])}}});export{Ms as __pageData,Ys as default};

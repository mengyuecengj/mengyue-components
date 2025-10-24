import{d as hs,a0 as os,h as B,x as r,z as ls,W as ks,c as o,o as k,O as _,k as R,j as i,G as N,H as as,a as m,t as H,n as ds,a1 as cs,e as rs,r as es,a2 as gs,I as us,ah as ps,J as d,w as u}from"./chunks/framework.CnxbpgSG.js";import{u as ts}from"./chunks/useStyleComputed.CzeN-o9K.js";import{_ as ys}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.B6x7Htj6.js";const ms={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},modelValue:{type:String,default:""},width:{type:String,default:""},height:{type:String,default:""},headerBackgroundColor:{type:String,default:""},headerTextColor:{type:String,default:""},stripe:{type:String,default:""},borderColor:{type:String,default:""},bodyBackgroundColor:{type:String,default:""},bodyTextColor:{type:String,default:""},rowKey:{type:String,default:"id"},treeProps:{type:Object,default:()=>({children:"children",hasChildren:"hasChildren"})},indent:{type:Number,default:16},align:{type:String,default:"left"},headerAlign:{type:String,default:""},bodyAlign:{type:String,default:""}};function bs(v){const w=ts(v,{propToStyleMap:{width:"width",height:"height",border:"border"}}),P=ts(v,{propToStyleMap:{headerBackgroundColor:"backgroundColor",headerTextColor:"color",headerAlign:"textAlign"}}),p=ts(v,{propToStyleMap:{bodyBackgroundColor:"backgroundColor",bodyTextColor:"color",bodyAlign:"textAlign"}});return{tableStyle:w,headerStyle:P,bodyStyle:p}}const fs=["data-column"],Ds=["checked","indeterminate"],As=["data-column"],Bs=["checked","onChange"],Cs=["onClick"],vs={key:0,viewBox:"0 0 1024 1024",width:"12",height:"12"},ws={class:"pagination-container"},A=hs({__name:"table",props:ms,emits:["update:modelValue","selection-change"],setup(v,{emit:w}){const p=v,z=w,{tableStyle:W,headerStyle:F,bodyStyle:J}=bs(p),$=os(),I=B(()=>Z.value.find(t=>t.type!=="selection")?.prop??""),G=B(()=>(p.data??[]).some(a=>{const t=M(a);return t&&t.length>0})),j=()=>p.treeProps??{},T=r([]),q=(a,t)=>{const s=f(a),n=T.value.indexOf(s),l=n!==-1;t===void 0&&(t=!l),t&&!l?T.value.push(s):!t&&l&&T.value.splice(n,1)},f=a=>{const t=String(p.rowKey??"id");return a[t]},E=a=>T.value.includes(f(a)),M=a=>{const t=j(),s=typeof t.children=="string"?t.children:"children",n=a[s];return Array.isArray(n)?n:[]},K=a=>{const s=j().hasChildren;return typeof s=="string"?!!a[String(s)]:M(a).length>0},L=(a,t=0,s=null)=>{const n=[];return a.forEach(l=>{const D=M(l),Y=D.length===0;n.push({row:l,level:t,parent:s,isLeaf:Y}),!Y&&E(l)&&n.push(...L(D,t+1,l))}),n},C=B(()=>L(p.data??[])),V=a=>{const t=Number(p.indent??16);return`${Number(a??0)*t}px`},S=(a,t)=>{const s=String(t??"");return a[s]},h=r([]);ls(()=>p.modelValue,a=>{a&&Array.isArray(a)&&(h.value=a)},{immediate:!0});const O=a=>{const t=f(a);return h.value.some(s=>f(s)===t)},b=a=>{const t=f(a),s=h.value.findIndex(n=>f(n)===t);s>-1?h.value.splice(s,1):h.value.push(a),Q()},e=B(()=>C.value.length>0&&h.value.length===C.value.length),g=B(()=>h.value.length>0&&h.value.length<C.value.length),c=()=>{e.value?h.value=[]:h.value=C.value.map(a=>a.row),Q()},Q=()=>{z("update:modelValue",h.value),z("selection-change",h.value)};ls(h,Q,{deep:!0});const X=B(()=>{const t=($.default?$.default({row:{},level:0,index:0}):[])??[],s=[],n=new Set;for(const l of t){if(!l||typeof l!="object")continue;const D=l.type;if((D?.name||D?.__name||"")==="MYTableColumn"){const y=l.props??{},x=y.type,ns=y.prop;if(x==="selection"){if(n.has("__selection__"))continue;n.add("__selection__"),s.push({prop:"__selection__",label:"",width:y.width??"",type:"selection",align:y.align??"center",className:""});continue}if(!ns)continue;const ss=String(ns);if(n.has(ss))continue;n.add(ss),s.push({prop:ss,label:y.label??"",width:y.width??"",type:y.type??"",align:y.align??void 0,className:""})}else if(l.props&&typeof l.props=="object"){const x=l.props.slot;x&&!n.has(x)&&(n.add(x),s.push({prop:x,label:x,width:"",type:"",align:void 0,className:""}))}}return s}),Z=B(()=>{const a=p.columns??[];let t=[];if(!a||a.length===0)t=X.value.map(s=>({...s,width:s.width??""}));else{t=a.map(s=>{const n=X.value.find(y=>y.prop===s.prop),l=n&&n.width?n.width:s.width??"",D=n?.type??s.type??"",Y=n?.align??s.align??"";return{...s,width:l,type:D,align:Y}});for(const s of X.value)t.find(n=>n.prop===s.prop)||t.push({...s,width:s.width??""})}return t.sort((s,n)=>s.type==="selection"?-1:n.type==="selection"?1:0),t}),is=(a,t)=>({textAlign:(t==="header"?a.headerAlign||a.align:a.bodyAlign||a.align)||"left",width:a.width});return ks("myTable",B(()=>({width:p.width??"",height:p.height??"",selectedRows:h.value,toggleSelectAll:c,isAllSelected:e.value,isIndeterminate:g.value,isRowSelected:O,toggleRowSelection:b}))),(a,t)=>(k(),o("div",{class:"my-table",style:_({"--table-border-color":R(p).borderColor,...R(W)})},[i("table",null,[i("thead",{style:_(R(F))},[i("tr",null,[(k(!0),o(N,null,as(Z.value,s=>(k(),o("th",{key:s.prop,style:_(is(s,"header")),"data-column":s.prop},[s.type==="selection"?(k(),o("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:e.value,indeterminate:g.value,onChange:c},null,40,Ds)):(k(),o(N,{key:1},[m(H(s.label),1)],64))],12,fs))),128))])],4),i("tbody",{style:_(R(J))},[(k(!0),o(N,null,as(C.value,(s,n)=>(k(),o("tr",{key:f(s.row),style:_(n%2===1?{backgroundColor:R(p).stripe}:{}),class:ds(["my-table-row",{"my-table-row--expanded":E(s.row)}])},[(k(!0),o(N,null,as(Z.value,l=>(k(),o("td",{key:l.prop,"data-column":l.prop,style:_({paddingLeft:l.type!=="selection"&&l.prop===I.value?V(s.level):"",...is(l,"body")})},[l.type==="selection"?(k(),o("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:O(s.row),onChange:D=>b(s.row)},null,40,Bs)):(k(),o(N,{key:1},[l.prop===I.value&&G.value?cs((k(),o("span",{key:0,class:ds(["my-table__expand-icon",{"my-table__expand-icon--expanded":E(s.row)}]),onClick:D=>q(s.row)},[!s.isLeaf||K(s.row)?(k(),o("svg",vs,[...t[0]||(t[0]=[i("path",{d:"M256 128l512 384-512 384z",fill:"currentColor"},null,-1)])])):rs("",!0)],10,Cs)),[[gs,!s.isLeaf||K(s.row)]]):rs("",!0),es(a.$slots,l.prop,{row:s.row,level:s.level,index:n},()=>[m(H(S(s.row,l.prop)),1)])],64))],12,As))),128))],6))),128))],4)]),i("div",ws,[es(a.$slots,"pagination")])],4))}}),U=hs({name:"MYTableColumn",__name:"tableColumn",setup(v){return(w,P)=>es(w.$slots,"default")}}),xs={style:{margin:"20px 0"}},_s={style:{margin:"20px 0"}},Ts={style:{margin:"20px 0"}},Ss={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},Ps={style:{margin:"20px 0"}},Fs={style:{margin:"20px 0"}},Es={style:{margin:"20px 0"}},Ms={style:{margin:"20px 0"}},Vs={style:{margin:"20px 0"}},Ys={style:{margin:"20px 0"}},Is=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTable.md","filePath":"components/DataTable.md"}'),Rs={name:"components/DataTable.md"},js=Object.assign(Rs,{setup(v){const w=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),P=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),p=r([{id:1,name:"张三",age:25,address:"北京市朝阳区",status:"成功"},{id:2,name:"李四",age:30,address:"上海市浦东新区",status:"失败"},{id:3,name:"王五",age:28,address:"广州市天河区",status:"成功"}]),z=r([{type:"selection",width:"50px"},{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),W=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),F=r([]),J=b=>{console.log("选中行:",b)},$=r([{prop:"name",label:"部门",width:"200px"},{prop:"manager",label:"负责人",width:"120px"},{prop:"count",label:"人数",width:"80px"}]),I=r([{id:1,name:"技术部",manager:"张工",count:20,children:[{id:2,name:"前端组",manager:"李工",count:8},{id:3,name:"后端组",manager:"王工",count:12}]},{id:4,name:"市场部",manager:"赵总",count:15,children:[{id:5,name:"推广组",manager:"钱经理",count:7},{id:6,name:"运营组",manager:"孙经理",count:8}]}]),G=r([{prop:"name",label:"姓名",width:"100px"},{prop:"department",label:"部门",width:"120px"},{prop:"position",label:"职位",width:"120px"},{prop:"salary",label:"薪资",width:"100px"}]),j=r([{id:1,name:"张三",department:"技术部",position:"前端工程师",salary:"15000"},{id:2,name:"李四",department:"技术部",position:"后端工程师",salary:"16000"},{id:3,name:"王五",department:"市场部",position:"市场经理",salary:"14000"},{id:4,name:"赵六",department:"人事部",position:"HR",salary:"12000"}]),T=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"city",label:"城市",width:"120px"}]),q=r([{id:1,name:"张三",age:25,city:"北京"},{id:2,name:"李四",age:30,city:"上海"},{id:3,name:"王五",age:28,city:"广州"}]),f=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"city",label:"城市",width:"120px"}]),E=r([{id:1,name:"张三",age:25,city:"北京"},{id:2,name:"李四",age:30,city:"上海"},{id:3,name:"王五",age:28,city:"广州"}]),M=r([{prop:"name",label:"姓名（左对齐）",width:"120px",align:"left"},{prop:"age",label:"年龄（居中）",width:"100px",align:"center"},{prop:"salary",label:"薪资（右对齐）",width:"120px",align:"right"},{prop:"bonus",label:"奖金",width:"120px",headerAlign:"center",bodyAlign:"right"}]),K=r([{id:1,name:"张三",age:25,salary:"15000",bonus:"5000"},{id:2,name:"李四",age:30,salary:"16000",bonus:"6000"},{id:3,name:"王五",age:28,salary:"14000",bonus:"4500"}]),L=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),C=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"},{id:4,name:"赵六",age:32,address:"深圳市南山区"},{id:5,name:"钱七",age:26,address:"杭州市西湖区"}]),V=r(1),S=r(2),h=B(()=>{const b=(V.value-1)*S.value,e=b+S.value;return C.value.slice(b,e)}),O=(b,e)=>{console.log("页码变化:",b,e)};return(b,e)=>{const g=us("ShowCode");return k(),o("div",null,[e[3]||(e[3]=ps("",4)),d(g,{title:"基础表格",description:"使用 columns 和 data 属性定义表格结构和数据",code:`<template>
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
<\/script>`},{demo:u(()=>[i("div",xs,[d(A,{columns:w.value,data:P.value},null,8,["columns","data"])])]),_:1}),e[4]||(e[4]=i("h2",{id:"使用插槽定义列",tabindex:"-1"},[m("使用插槽定义列 "),i("a",{class:"header-anchor",href:"#使用插槽定义列","aria-label":"Permalink to “使用插槽定义列”"},"​")],-1)),d(g,{title:"使用插槽定义列",description:"使用 MYTableColumn 组件和插槽自定义列内容",code:`<template>
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
<\/script>`},{demo:u(()=>[i("div",_s,[d(A,{data:p.value},{default:u(()=>[d(U,{prop:"name",label:"姓名",width:"120"}),d(U,{prop:"age",label:"年龄",width:"80"}),d(U,{prop:"address",label:"地址"}),d(U,{prop:"status",label:"状态"},{default:u(({row:c})=>[i("span",{style:_({color:c.status==="成功"?"#67C23A":"#F56C6C"})},H(c.status),5)]),_:1})]),_:1},8,["data"])])]),_:1}),e[5]||(e[5]=i("h2",{id:"选择功能",tabindex:"-1"},[m("选择功能 "),i("a",{class:"header-anchor",href:"#选择功能","aria-label":"Permalink to “选择功能”"},"​")],-1)),d(g,{title:"选择功能",description:"使用 type='selection' 列启用行选择功能",code:`<template>
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
<\/script>`},{demo:u(()=>[i("div",Ts,[d(A,{columns:z.value,data:W.value,modelValue:F.value,"onUpdate:modelValue":e[0]||(e[0]=c=>F.value=c),onSelectionChange:J},null,8,["columns","data","modelValue"]),i("div",Ss," 已选择: "+H(F.value.map(c=>c.name).join(", ")),1)])]),_:1}),e[6]||(e[6]=i("h2",{id:"树形数据",tabindex:"-1"},[m("树形数据 "),i("a",{class:"header-anchor",href:"#树形数据","aria-label":"Permalink to “树形数据”"},"​")],-1)),d(g,{title:"树形数据",description:"使用树形结构数据展示层级关系",code:`<template>
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
<\/script>`},{demo:u(()=>[i("div",Ps,[d(A,{columns:$.value,data:I.value,"tree-props":{children:"children"}},null,8,["columns","data"])])]),_:1}),e[7]||(e[7]=i("h2",{id:"斑马纹表格",tabindex:"-1"},[m("斑马纹表格 "),i("a",{class:"header-anchor",href:"#斑马纹表格","aria-label":"Permalink to “斑马纹表格”"},"​")],-1)),d(g,{title:"斑马纹表格",description:"使用 stripe 属性添加斑马纹样式",code:`<template>
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
<\/script>`},{demo:u(()=>[i("div",Fs,[d(A,{columns:G.value,data:j.value,stripe:"#fafafa"},null,8,["columns","data"])])]),_:1}),e[8]||(e[8]=i("h2",{id:"自定义样式",tabindex:"-1"},[m("自定义样式 "),i("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),e[9]||(e[9]=i("h3",{id:"表头样式",tabindex:"-1"},[m("表头样式 "),i("a",{class:"header-anchor",href:"#表头样式","aria-label":"Permalink to “表头样式”"},"​")],-1)),d(g,{title:"自定义表头样式",description:"使用 headerBackgroundColor 和 headerTextColor 自定义表头样式",code:`<template>
  <MYTable 
    :columns='columns6' 
    :data='tableData6' 
    header-background-color='#409EFF' 
    header-text-color='#FFFFFF' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns6 = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'city', label: '城市', width: '120px' }
]);
const tableData6 = ref([
  { id: 1, name: '张三', age: 25, city: '北京' },
  { id: 2, name: '李四', age: 30, city: '上海' },
  { id: 3, name: '王五', age: 28, city: '广州' }
]);
<\/script>`},{demo:u(()=>[i("div",Es,[d(A,{columns:T.value,data:q.value,"header-background-color":"#409EFF","header-text-color":"#FFFFFF"},null,8,["columns","data"])])]),_:1}),e[10]||(e[10]=i("h3",{id:"表格体样式",tabindex:"-1"},[m("表格体样式 "),i("a",{class:"header-anchor",href:"#表格体样式","aria-label":"Permalink to “表格体样式”"},"​")],-1)),d(g,{title:"自定义表格体样式",description:"使用 bodyBackgroundColor 和 bodyTextColor 自定义表格体样式",code:`<template>
  <MYTable 
    :columns='columns7' 
    :data='tableData7' 
    body-background-color='#f0f9ff' 
    body-text-color='#333' 
    border-color='#409EFF' 
  />
</template>
<script setup>
import { ref } from 'vue';
const columns7 = ref([
  { prop: 'name', label: '姓名', width: '100px' },
  { prop: 'age', label: '年龄', width: '80px' },
  { prop: 'city', label: '城市', width: '120px' }
]);
const tableData7 = ref([
  { id: 1, name: '张三', age: 25, city: '北京' },
  { id: 2, name: '李四', age: 30, city: '上海' },
  { id: 3, name: '王五', age: 28, city: '广州' }
]);
<\/script>`},{demo:u(()=>[i("div",Ms,[d(A,{columns:f.value,data:E.value,"body-background-color":"#f0f9ff","body-text-color":"#333","border-color":"#409EFF"},null,8,["columns","data"])])]),_:1}),e[11]||(e[11]=i("h2",{id:"列对齐",tabindex:"-1"},[m("列对齐 "),i("a",{class:"header-anchor",href:"#列对齐","aria-label":"Permalink to “列对齐”"},"​")],-1)),d(g,{title:"列对齐",description:"使用 align、headerAlign、bodyAlign 控制列内容对齐方式",code:`<template>
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
<\/script>`},{demo:u(()=>[i("div",Vs,[d(A,{columns:M.value,data:K.value},null,8,["columns","data"])])]),_:1}),e[12]||(e[12]=i("h2",{id:"带分页的表格",tabindex:"-1"},[m("带分页的表格 "),i("a",{class:"header-anchor",href:"#带分页的表格","aria-label":"Permalink to “带分页的表格”"},"​")],-1)),d(g,{title:"带分页的表格",description:"使用分页插槽实现表格分页功能",code:`<template>
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
<\/script>`},{demo:u(()=>[i("div",Ys,[d(A,{columns:L.value,data:h.value},{pagination:u(()=>[d(ys,{"current-page":V.value,"onUpdate:currentPage":e[1]||(e[1]=c=>V.value=c),"page-size":S.value,"onUpdate:pageSize":e[2]||(e[2]=c=>S.value=c),total:C.value.length,layout:"prev, pager, next",onChange:O},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),e[13]||(e[13]=ps("",9))])}}});export{Is as __pageData,js as default};

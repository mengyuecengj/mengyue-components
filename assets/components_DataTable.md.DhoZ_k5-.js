import{d as os,a0 as ks,h as A,x as r,z as rs,W as cs,c as k,o as c,O as S,k as _,j as l,G as R,H as Z,a as B,t as F,n as ps,a1 as gs,e as ss,r as ts,a2 as ys,I as us,ah as hs,J as p,w as y}from"./chunks/framework.D3tsReks.js";import{u as as}from"./chunks/useStyleComputed.BZuPLADM.js";import{_ as ms}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.DEUVmWTf.js";const bs={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},modelValue:{type:[Array,String],default:()=>[]},width:{type:String,default:""},height:{type:String,default:""},headerBackgroundColor:{type:String,default:""},headerTextColor:{type:String,default:""},stripe:{type:String,default:""},borderColor:{type:String,default:""},bodyBackgroundColor:{type:String,default:""},hoverBackgroundColor:{type:String,default:""},bodyTextColor:{type:String,default:""},rowKey:{type:String,default:"id"},treeProps:{type:Object,default:()=>({children:"children",hasChildren:"hasChildren"})},indent:{type:Number,default:16},align:{type:String,default:"left"},headerAlign:{type:String,default:""},bodyAlign:{type:String,default:""}};function As(f){const D=as(f,{propToStyleMap:{width:"width",height:"height",border:"border"}}),M=as(f,{propToStyleMap:{headerBackgroundColor:"backgroundColor",headerTextColor:"color",headerAlign:"textAlign"}}),h=as(f,{propToStyleMap:{bodyBackgroundColor:"backgroundColor",bodyTextColor:"color",bodyAlign:"textAlign",hoverBackgroundColor:"--hover-bg-color"}});return{tableStyle:D,headerStyle:M,bodyStyle:h}}const Bs=["data-column"],fs=["checked","indeterminate"],Ds=["data-column"],Cs=["checked","onChange"],vs=["onClick"],ws={key:0,style:{background:"orange",padding:"5px",color:"black"}},xs={key:1,viewBox:"0 0 1024 1024",width:"12",height:"12"},_s={class:"pagination-container"},T=os({__name:"table",props:bs,emits:["update:modelValue","selection-change"],setup(f,{emit:D}){const h=f,$=D,{tableStyle:L,headerStyle:V,bodyStyle:O}=As(h),Y=ks(),z=A(()=>q.value.find(t=>t.type!=="selection")?.prop??""),U=A(()=>(h.data??[]).some(a=>{const t=C(a);return t&&t.length>0})),I=()=>h.treeProps??{},P=r([]),H=(a,t)=>{const s=u(a),e=P.value.indexOf(s),i=e!==-1;t===void 0&&(t=!i),t&&!i?P.value.push(s):!t&&i&&P.value.splice(e,1)},u=a=>{const t=String(h.rowKey??"id");return a[t]},E=a=>P.value.includes(u(a)),C=a=>{const t=I(),s=typeof t.children=="string"?t.children:"children",e=a[s];return Array.isArray(e)?e:[]},v=a=>{const s=I().hasChildren;return typeof s=="string"?!!a[String(s)]:C(a).length>0},j=(a,t=0,s=null)=>{const e=[];return a.forEach(i=>{const b=C(i),N=b.length===0;e.push({row:i,level:t,parent:s,isLeaf:N}),!N&&E(i)&&e.push(...j(b,t+1,i))}),e},w=A(()=>j(h.data??[])),m=a=>{const t=Number(h.indent??16);return`${Number(a??0)*t}px`},n=(a,t)=>{const s=String(t??"");return a[s]},d=r([]);rs(()=>h.modelValue,a=>{a&&Array.isArray(a)&&(d.value=a)},{immediate:!0});const g=a=>{const t=u(a);return d.value.some(s=>u(s)===t)},es=a=>{const t=u(a),s=d.value.findIndex(e=>u(e)===t);s>-1?d.value.splice(s,1):d.value.push(a),J()},W=A(()=>w.value.length>0&&d.value.length===w.value.length),is=A(()=>d.value.length>0&&d.value.length<w.value.length),ns=()=>{W.value?d.value=[]:d.value=w.value.map(a=>a.row),J()},J=()=>{$("update:modelValue",d.value),$("selection-change",d.value)};rs(d,J,{deep:!0});const G=A(()=>{const t=(Y.default?Y.default({row:{},level:0,index:0}):[])??[],s=[],e=new Set;for(const i of t){if(!i||typeof i!="object")continue;const b=i.type;if((b?.name||b?.__name||"")==="MYTableColumn"){const o=i.props??{},x=o.type,ds=o.prop;if(x==="selection"){if(e.has("__selection__"))continue;e.add("__selection__"),s.push({prop:"__selection__",label:"",width:o.width??"",type:"selection",align:o.align??"center",className:""});continue}if(!ds){const X=`__default_${s.length}__`;if(e.has(X))continue;e.add(X),s.push({prop:X,label:o.label??"",width:o.width??"",type:o.type??"",align:o.align??void 0,className:""});continue}const Q=String(ds);if(e.has(Q))continue;e.add(Q),s.push({prop:Q,label:o.label??"",width:o.width??"",type:o.type??"",align:o.align??void 0,className:""})}else if(i.props&&typeof i.props=="object"){const x=i.props.slot;x&&!e.has(x)&&(e.add(x),s.push({prop:x,label:x,width:"",type:"",align:void 0,className:""}))}}return s}),q=A(()=>{const a=h.columns??[];let t=[];if(!a||a.length===0)t=G.value.map(s=>({...s,width:s.width??""}));else{t=a.map(s=>{const e=G.value.find(o=>o.prop===s.prop),i=e&&e.width?e.width:s.width??"",b=e?.type??s.type??"",N=e?.align??s.align??"";return{...s,width:i,type:b,align:N}});for(const s of G.value)t.find(e=>e.prop===s.prop)||t.push({...s,width:s.width??""})}return t.sort((s,e)=>s.type==="selection"?-1:e.type==="selection"?1:0),t}),ls=(a,t)=>({textAlign:(t==="header"?a.headerAlign||a.align:a.bodyAlign||a.align)||"left",width:a.width});return cs("myTable",A(()=>({width:h.width??"",height:h.height??"",selectedRows:d.value,toggleSelectAll:ns,isAllSelected:W.value,isIndeterminate:is.value,isRowSelected:g,toggleRowSelection:es}))),(a,t)=>(c(),k("div",{class:"my-table",style:S({"--table-border-color":_(h).borderColor,"--hover-bg-color":_(h).hoverBackgroundColor,..._(L)})},[l("table",null,[l("thead",{style:S(_(V))},[l("tr",null,[(c(!0),k(R,null,Z(q.value,s=>(c(),k("th",{key:s.prop,style:S(ls(s,"header")),"data-column":s.prop},[s.type==="selection"?(c(),k("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:W.value,indeterminate:is.value,onChange:ns},null,40,fs)):(c(),k(R,{key:1},[B(F(s.label),1)],64))],12,Bs))),128))])],4),l("tbody",{style:S(_(O))},[(c(!0),k(R,null,Z(w.value,(s,e)=>(c(),k("tr",{key:u(s.row),style:S(e%2===1?{backgroundColor:_(h).stripe}:{}),class:ps(["my-table-row",{"my-table-row--expanded":E(s.row)}])},[(c(!0),k(R,null,Z(q.value,i=>(c(),k("td",{key:i.prop,"data-column":i.prop,style:S({paddingLeft:i.type!=="selection"&&i.prop===z.value?m(s.level):"",...ls(i,"body")})},[i.type==="selection"?(c(),k("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:g(s.row),onChange:b=>es(s.row)},null,40,Cs)):(c(),k(R,{key:1},[i.prop===z.value&&U.value?gs((c(),k("span",{key:0,class:ps(["my-table__expand-icon",{"my-table__expand-icon--expanded":E(s.row)}]),onClick:b=>H(s.row)},[i.prop==="operation"?(c(),k("div",ws," 操作列调试 - 插槽存在: "+F(!!_(Y)[i.prop])+", 列prop: "+F(i.prop),1)):ss("",!0),!s.isLeaf||v(s.row)?(c(),k("svg",xs,[...t[0]||(t[0]=[l("path",{d:"M256 128l512 384-512 384z",fill:"currentColor"},null,-1)])])):ss("",!0)],10,vs)),[[ys,!s.isLeaf||v(s.row)]]):ss("",!0),ts(a.$slots,i.prop,{row:s.row,level:s.level,index:e},()=>[B(F(n(s.row,i.prop)),1)])],64))],12,Ds))),128))],6))),128))],4)]),l("div",_s,[ts(a.$slots,"pagination")])],4))}}),K=os({name:"MYTableColumn",__name:"tableColumn",setup(f){return(D,M)=>ts(D.$slots,"default")}}),Ts={style:{margin:"20px 0"}},Ss={style:{margin:"20px 0"}},Ps={style:{margin:"20px 0"}},Es={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},Fs={style:{margin:"20px 0"}},Ms={style:{margin:"20px 0"}},Vs={style:{margin:"20px 0"}},Ys={style:{margin:"20px 0"}},Is=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTable.md","filePath":"components/DataTable.md"}'),Ns={name:"components/DataTable.md"},js=Object.assign(Ns,{setup(f){const D=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),M=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),h=r([{id:1,name:"张三",age:25,address:"北京市朝阳区",status:"成功"},{id:2,name:"李四",age:30,address:"上海市浦东新区",status:"失败"},{id:3,name:"王五",age:28,address:"广州市天河区",status:"成功"}]),$=r([{type:"selection",width:"50px"},{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),L=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),V=r([]),O=m=>{console.log("选中行:",m)},Y=r([{prop:"name",label:"部门",width:"200px"},{prop:"manager",label:"负责人",width:"120px"},{prop:"count",label:"人数",width:"80px"}]),z=r([{id:1,name:"技术部",manager:"张工",count:20,children:[{id:2,name:"前端组",manager:"李工",count:8},{id:3,name:"后端组",manager:"王工",count:12}]},{id:4,name:"市场部",manager:"赵总",count:15,children:[{id:5,name:"推广组",manager:"钱经理",count:7},{id:6,name:"运营组",manager:"孙经理",count:8}]}]),U=r([{prop:"name",label:"姓名",width:"100px"},{prop:"department",label:"部门",width:"120px"},{prop:"position",label:"职位",width:"120px"},{prop:"salary",label:"薪资",width:"100px"}]),I=r([{id:1,name:"张三",department:"技术部",position:"前端工程师",salary:"15000"},{id:2,name:"李四",department:"技术部",position:"后端工程师",salary:"16000"},{id:3,name:"王五",department:"市场部",position:"市场经理",salary:"14000"},{id:4,name:"赵六",department:"人事部",position:"HR",salary:"12000"}]);r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"city",label:"城市",width:"120px"}]),r([{id:1,name:"张三",age:25,city:"北京"},{id:2,name:"李四",age:30,city:"上海"},{id:3,name:"王五",age:28,city:"广州"}]),r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"city",label:"城市",width:"120px"}]),r([{id:1,name:"张三",age:25,city:"北京"},{id:2,name:"李四",age:30,city:"上海"},{id:3,name:"王五",age:28,city:"广州"}]);const P=r([{prop:"name",label:"姓名（左对齐）",width:"120px",align:"left"},{prop:"age",label:"年龄（居中）",width:"100px",align:"center"},{prop:"salary",label:"薪资（右对齐）",width:"120px",align:"right"},{prop:"bonus",label:"奖金",width:"120px",headerAlign:"center",bodyAlign:"right"}]),H=r([{id:1,name:"张三",age:25,salary:"15000",bonus:"5000"},{id:2,name:"李四",age:30,salary:"16000",bonus:"6000"},{id:3,name:"王五",age:28,salary:"14000",bonus:"4500"}]),u=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),E=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"},{id:4,name:"赵六",age:32,address:"深圳市南山区"},{id:5,name:"钱七",age:26,address:"杭州市西湖区"}]),C=r(1),v=r(2),j=A(()=>{const m=(C.value-1)*v.value,n=m+v.value;return E.value.slice(m,n)}),w=(m,n)=>{console.log("页码变化:",m,n)};return(m,n)=>{const d=us("ShowCode");return c(),k("div",null,[n[3]||(n[3]=hs('<h1 id="table" tabindex="-1">Table <a class="header-anchor" href="#table" aria-label="Permalink to “Table”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Table 表格组件，用于展示结构化数据，支持树形数据、选择功能、自定义样式等。 可以使用 <code>&lt;MYTable&gt;&lt;/MYTable&gt;</code> 来实现一个表格组件。支持通过props.columns或子组件<code>&lt;MYTableColumn&gt;</code>定义列结构，自定义内容需使用命名插槽。</p><h2 id="基础表格" tabindex="-1">基础表格 <a class="header-anchor" href="#基础表格" aria-label="Permalink to “基础表格”">​</a></h2>',4)),p(d,{title:"基础表格",description:"使用 columns 和 data 属性定义表格结构和数据。",code:`<template>
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
<\/script>`},{demo:y(()=>[l("div",Ts,[p(T,{columns:D.value,data:M.value},null,8,["columns","data"])])]),_:1}),n[4]||(n[4]=l("h2",{id:"使用插槽定义列",tabindex:"-1"},[B("使用插槽定义列 "),l("a",{class:"header-anchor",href:"#使用插槽定义列","aria-label":"Permalink to “使用插槽定义列”"},"​")],-1)),p(d,{title:"使用插槽定义列",description:"使用 MYTableColumn 组件和插槽自定义列内容。",code:`<template>
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
<\/script>`},{demo:y(()=>[l("div",Ss,[p(T,{data:h.value},{default:y(()=>[p(K,{prop:"name",label:"姓名",width:"120"}),p(K,{prop:"age",label:"年龄",width:"80"}),p(K,{prop:"address",label:"地址"}),p(K,{prop:"status",label:"状态"},{default:y(({row:g})=>[l("span",{style:S({color:g.status==="成功"?"#67C23A":"#F56C6C"})},F(g.status),5)]),_:1})]),_:1},8,["data"])])]),_:1}),n[5]||(n[5]=l("h2",{id:"选择功能",tabindex:"-1"},[B("选择功能 "),l("a",{class:"header-anchor",href:"#选择功能","aria-label":"Permalink to “选择功能”"},"​")],-1)),p(d,{title:"选择功能",description:"使用 type='selection' 列启用行选择功能",code:`<template>
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
<\/script>`},{demo:y(()=>[l("div",Ps,[p(T,{columns:$.value,data:L.value,modelValue:V.value,"onUpdate:modelValue":n[0]||(n[0]=g=>V.value=g),onSelectionChange:O},null,8,["columns","data","modelValue"]),l("div",Es," 已选择: "+F(V.value.map(g=>g.name).join(", ")),1)])]),_:1}),n[6]||(n[6]=l("h2",{id:"树形数据",tabindex:"-1"},[B("树形数据 "),l("a",{class:"header-anchor",href:"#树形数据","aria-label":"Permalink to “树形数据”"},"​")],-1)),p(d,{title:"树形数据",description:"使用树形结构数据展示层级关系",code:`<template>
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
<\/script>`},{demo:y(()=>[l("div",Fs,[p(T,{columns:Y.value,data:z.value,"tree-props":{children:"children"}},null,8,["columns","data"])])]),_:1}),n[7]||(n[7]=l("h2",{id:"斑马纹表格",tabindex:"-1"},[B("斑马纹表格 "),l("a",{class:"header-anchor",href:"#斑马纹表格","aria-label":"Permalink to “斑马纹表格”"},"​")],-1)),p(d,{title:"斑马纹表格",description:"使用 stripe 属性添加斑马纹样式",code:`<template>
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
<\/script>`},{demo:y(()=>[l("div",Ms,[p(T,{columns:U.value,data:I.value,stripe:"#fafafa"},null,8,["columns","data"])])]),_:1}),n[8]||(n[8]=l("h2",{id:"列对齐",tabindex:"-1"},[B("列对齐 "),l("a",{class:"header-anchor",href:"#列对齐","aria-label":"Permalink to “列对齐”"},"​")],-1)),p(d,{title:"列对齐",description:"使用 align、headerAlign、bodyAlign 控制列内容对齐方式",code:`<template>
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
<\/script>`},{demo:y(()=>[l("div",Vs,[p(T,{columns:P.value,data:H.value},null,8,["columns","data"])])]),_:1}),n[9]||(n[9]=l("h2",{id:"带分页的表格",tabindex:"-1"},[B("带分页的表格 "),l("a",{class:"header-anchor",href:"#带分页的表格","aria-label":"Permalink to “带分页的表格”"},"​")],-1)),p(d,{title:"带分页的表格",description:"使用分页插槽实现表格分页功能",code:`<template>
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
<\/script>`},{demo:y(()=>[l("div",Ys,[p(T,{columns:u.value,data:j.value},{pagination:y(()=>[p(ms,{"current-page":C.value,"onUpdate:currentPage":n[1]||(n[1]=g=>C.value=g),"page-size":v.value,"onUpdate:pageSize":n[2]||(n[2]=g=>v.value=g),total:E.value.length,layout:"prev, pager, next",onChange:w},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),n[10]||(n[10]=hs(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="table-props" tabindex="-1">Table Props <a class="header-anchor" href="#table-props" aria-label="Permalink to “Table Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>表格数据</td><td>Array</td><td>—</td><td><code>[]</code></td></tr><tr><td>columns</td><td>列配置</td><td>TableColumnProps[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>width</td><td>表格宽度</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>height</td><td>表格高度</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>headerBackgroundColor</td><td>表头背景色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td><code>&#39;&#39;</code></td></tr><tr><td>headerTextColor</td><td>表头文字颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td><code>&#39;&#39;</code></td></tr><tr><td>stripe</td><td>斑马纹颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td><code>&#39;&#39;</code></td></tr><tr><td>borderColor</td><td>边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyBackgroundColor</td><td>表格体背景色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyTextColor</td><td>表格体文字颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td><code>&#39;&#39;</code></td></tr><tr><td>rowKey</td><td>行数据的 Key</td><td>string</td><td>—</td><td><code>&#39;id&#39;</code></td></tr><tr><td>treeProps</td><td>树形结构的配置</td><td>object</td><td>—</td><td><code>{ children: &#39;children&#39;, hasChildren: &#39;hasChildren&#39; }</code></td></tr><tr><td>indent</td><td>树形数据缩进</td><td>number</td><td>—</td><td><code>16</code></td></tr><tr><td>align</td><td>表格内容对齐方式</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;left&#39;</code></td></tr><tr><td>headerAlign</td><td>表头对齐方式</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyAlign</td><td>表格体对齐方式</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="tablecolumn-props" tabindex="-1">TableColumn Props <a class="header-anchor" href="#tablecolumn-props" aria-label="Permalink to “TableColumn Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>prop</td><td>列对应数据的 key</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>列标题</td><td>string</td><td>—</td><td><code>undefined</code></td></tr><tr><td>width</td><td>列宽度</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>type</td><td>列类型</td><td>string</td><td><code>selection</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>align</td><td>列内容对齐方式</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>headerAlign</td><td>列表头对齐方式</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr><tr><td>bodyAlign</td><td>列内容对齐方式</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="table-events" tabindex="-1">Table Events <a class="header-anchor" href="#table-events" aria-label="Permalink to “Table Events”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>selection-change</td><td>当选择项发生变化时触发</td><td>selection: any[]</td></tr><tr><td>update:modelValue</td><td>选中的行数据变化时触发</td><td>value: any[]</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TableColumnProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div>`,9))])}}});export{Is as __pageData,js as default};

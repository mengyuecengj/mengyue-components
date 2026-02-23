import{d as os,a0 as ks,z as rs,o as k,c,O as S,k as _,j as l,G as R,H as Z,a as B,t as F,n as ps,a1 as cs,a2 as gs,e as ss,r as ts,h as A,y as p,W as us,I as ys,ah as hs,J as r,w as u}from"./chunks/framework.BzrxsKI0.js";import{u as as}from"./chunks/useStyleComputed.BVjmiXVX.js";import{_ as ms}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.CMfhfC8e.js";const bs={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},modelValue:{type:[Array,String],default:()=>[]},width:{type:String,default:""},height:{type:String,default:""},headerBackgroundColor:{type:String,default:""},headerTextColor:{type:String,default:""},stripe:{type:String,default:""},borderColor:{type:String,default:""},bodyBackgroundColor:{type:String,default:""},hoverBackgroundColor:{type:String,default:""},bodyTextColor:{type:String,default:""},rowKey:{type:String,default:"id"},treeProps:{type:Object,default:()=>({children:"children",hasChildren:"hasChildren"})},indent:{type:Number,default:16},align:{type:String,default:"left"},headerAlign:{type:String,default:""},bodyAlign:{type:String,default:""}};function As(f){const D=as(f,{propToStyleMap:{width:"width",height:"height",border:"border"}}),M=as(f,{propToStyleMap:{headerBackgroundColor:"backgroundColor",headerTextColor:"color",headerAlign:"textAlign"}}),h=as(f,{propToStyleMap:{bodyBackgroundColor:"backgroundColor",bodyTextColor:"color",bodyAlign:"textAlign",hoverBackgroundColor:"--hover-bg-color"}});return{tableStyle:D,headerStyle:M,bodyStyle:h}}const Bs=["data-column"],fs=["checked","indeterminate"],Ds=["data-column"],Cs=["checked","onChange"],vs=["onClick"],ws={key:0,style:{background:"orange",padding:"5px",color:"black"}},xs={key:1,viewBox:"0 0 1024 1024",width:"12",height:"12"},_s={class:"pagination-container"},T=os({__name:"table",props:bs,emits:["update:modelValue","selection-change"],setup(f,{emit:D}){const h=f,$=D,{tableStyle:L,headerStyle:V,bodyStyle:O}=As(h),Y=ks(),z=A(()=>q.value.find(t=>t.type!=="selection")?.prop??""),U=A(()=>(h.data??[]).some(a=>{const t=C(a);return t&&t.length>0})),I=()=>h.treeProps??{},P=p([]),H=(a,t)=>{const s=y(a),e=P.value.indexOf(s),i=e!==-1;t===void 0&&(t=!i),t&&!i?P.value.push(s):!t&&i&&P.value.splice(e,1)},y=a=>{const t=String(h.rowKey??"id");return a[t]},E=a=>P.value.includes(y(a)),C=a=>{const t=I(),s=typeof t.children=="string"?t.children:"children",e=a[s];return Array.isArray(e)?e:[]},v=a=>{const s=I().hasChildren;return typeof s=="string"?!!a[String(s)]:C(a).length>0},j=(a,t=0,s=null)=>{const e=[];return a.forEach(i=>{const b=C(i),N=b.length===0;e.push({row:i,level:t,parent:s,isLeaf:N}),!N&&E(i)&&e.push(...j(b,t+1,i))}),e},w=A(()=>j(h.data??[])),m=a=>{const t=Number(h.indent??16);return`${Number(a??0)*t}px`},n=(a,t)=>{const s=String(t??"");return a[s]},d=p([]);rs(()=>h.modelValue,a=>{a&&Array.isArray(a)&&(d.value=a)},{immediate:!0});const g=a=>{const t=y(a);return d.value.some(s=>y(s)===t)},es=a=>{const t=y(a),s=d.value.findIndex(e=>y(e)===t);s>-1?d.value.splice(s,1):d.value.push(a),J()},W=A(()=>w.value.length>0&&d.value.length===w.value.length),is=A(()=>d.value.length>0&&d.value.length<w.value.length),ns=()=>{W.value?d.value=[]:d.value=w.value.map(a=>a.row),J()},J=()=>{$("update:modelValue",d.value),$("selection-change",d.value)};rs(d,J,{deep:!0});const G=A(()=>{const t=(Y.default?Y.default({row:{},level:0,index:0}):[])??[],s=[],e=new Set;for(const i of t){if(!i||typeof i!="object")continue;const b=i.type;if((b?.name||b?.__name||"")==="MYTableColumn"){const o=i.props??{},x=o.type,ds=o.prop;if(x==="selection"){if(e.has("__selection__"))continue;e.add("__selection__"),s.push({prop:"__selection__",label:"",width:o.width??"",type:"selection",align:o.align??"center",className:""});continue}if(!ds){const X=`__default_${s.length}__`;if(e.has(X))continue;e.add(X),s.push({prop:X,label:o.label??"",width:o.width??"",type:o.type??"",align:o.align??void 0,className:""});continue}const Q=String(ds);if(e.has(Q))continue;e.add(Q),s.push({prop:Q,label:o.label??"",width:o.width??"",type:o.type??"",align:o.align??void 0,className:""})}else if(i.props&&typeof i.props=="object"){const x=i.props.slot;x&&!e.has(x)&&(e.add(x),s.push({prop:x,label:x,width:"",type:"",align:void 0,className:""}))}}return s}),q=A(()=>{const a=h.columns??[];let t=[];if(!a||a.length===0)t=G.value.map(s=>({...s,width:s.width??""}));else{t=a.map(s=>{const e=G.value.find(o=>o.prop===s.prop),i=e&&e.width?e.width:s.width??"",b=e?.type??s.type??"",N=e?.align??s.align??"";return{...s,width:i,type:b,align:N}});for(const s of G.value)t.find(e=>e.prop===s.prop)||t.push({...s,width:s.width??""})}return t.sort((s,e)=>s.type==="selection"?-1:e.type==="selection"?1:0),t}),ls=(a,t)=>({textAlign:(t==="header"?a.headerAlign||a.align:a.bodyAlign||a.align)||"left",width:a.width});return us("myTable",A(()=>({width:h.width??"",height:h.height??"",selectedRows:d.value,toggleSelectAll:ns,isAllSelected:W.value,isIndeterminate:is.value,isRowSelected:g,toggleRowSelection:es}))),(a,t)=>(k(),c("div",{class:"my-table",style:S({"--table-border-color":_(h).borderColor,"--hover-bg-color":_(h).hoverBackgroundColor,..._(L)})},[l("table",null,[l("thead",{style:S(_(V))},[l("tr",null,[(k(!0),c(R,null,Z(q.value,s=>(k(),c("th",{key:s.prop,style:S(ls(s,"header")),"data-column":s.prop},[s.type==="selection"?(k(),c("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:W.value,indeterminate:is.value,onChange:ns},null,40,fs)):(k(),c(R,{key:1},[B(F(s.label),1)],64))],12,Bs))),128))])],4),l("tbody",{style:S(_(O))},[(k(!0),c(R,null,Z(w.value,(s,e)=>(k(),c("tr",{key:y(s.row),style:S(e%2===1?{backgroundColor:_(h).stripe}:{}),class:ps(["my-table-row",{"my-table-row--expanded":E(s.row)}])},[(k(!0),c(R,null,Z(q.value,i=>(k(),c("td",{key:i.prop,"data-column":i.prop,style:S({paddingLeft:i.type!=="selection"&&i.prop===z.value?m(s.level):"",...ls(i,"body")})},[i.type==="selection"?(k(),c("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:g(s.row),onChange:b=>es(s.row)},null,40,Cs)):(k(),c(R,{key:1},[i.prop===z.value&&U.value?cs((k(),c("span",{key:0,class:ps(["my-table__expand-icon",{"my-table__expand-icon--expanded":E(s.row)}]),onClick:b=>H(s.row)},[i.prop==="operation"?(k(),c("div",ws," 操作列调试 - 插槽存在: "+F(!!_(Y)[i.prop])+", 列prop: "+F(i.prop),1)):ss("",!0),!s.isLeaf||v(s.row)?(k(),c("svg",xs,[...t[0]||(t[0]=[l("path",{d:"M256 128l512 384-512 384z",fill:"currentColor"},null,-1)])])):ss("",!0)],10,vs)),[[gs,!s.isLeaf||v(s.row)]]):ss("",!0),ts(a.$slots,i.prop,{row:s.row,level:s.level,index:e},()=>[B(F(n(s.row,i.prop)),1)])],64))],12,Ds))),128))],6))),128))],4)]),l("div",_s,[ts(a.$slots,"pagination")])],4))}}),K=os({name:"MYTableColumn",__name:"tableColumn",setup(f){return(D,M)=>ts(D.$slots,"default")}}),Ts={style:{margin:"20px 0"}},Ss={style:{margin:"20px 0"}},Ps={style:{margin:"20px 0"}},Es={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},Fs={style:{margin:"20px 0"}},Ms={style:{margin:"20px 0"}},Vs={style:{margin:"20px 0"}},Ys={style:{margin:"20px 0"}},Is=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTable.md","filePath":"components/DataTable.md"}'),Ns={name:"components/DataTable.md"},js=Object.assign(Ns,{setup(f){const D=p([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),M=p([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),h=p([{id:1,name:"张三",age:25,address:"北京市朝阳区",status:"成功"},{id:2,name:"李四",age:30,address:"上海市浦东新区",status:"失败"},{id:3,name:"王五",age:28,address:"广州市天河区",status:"成功"}]),$=p([{type:"selection",width:"50px"},{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),L=p([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),V=p([]),O=m=>{console.log("选中行:",m)},Y=p([{prop:"name",label:"部门",width:"200px"},{prop:"manager",label:"负责人",width:"120px"},{prop:"count",label:"人数",width:"80px"}]),z=p([{id:1,name:"技术部",manager:"张工",count:20,children:[{id:2,name:"前端组",manager:"李工",count:8},{id:3,name:"后端组",manager:"王工",count:12}]},{id:4,name:"市场部",manager:"赵总",count:15,children:[{id:5,name:"推广组",manager:"钱经理",count:7},{id:6,name:"运营组",manager:"孙经理",count:8}]}]),U=p([{prop:"name",label:"姓名",width:"100px"},{prop:"department",label:"部门",width:"120px"},{prop:"position",label:"职位",width:"120px"},{prop:"salary",label:"薪资",width:"100px"}]),I=p([{id:1,name:"张三",department:"技术部",position:"前端工程师",salary:"15000"},{id:2,name:"李四",department:"技术部",position:"后端工程师",salary:"16000"},{id:3,name:"王五",department:"市场部",position:"市场经理",salary:"14000"},{id:4,name:"赵六",department:"人事部",position:"HR",salary:"12000"}]),P=p([{prop:"name",label:"姓名（左对齐）",width:"120px",align:"left"},{prop:"age",label:"年龄（居中）",width:"100px",align:"center"},{prop:"salary",label:"薪资（右对齐）",width:"120px",align:"right"},{prop:"bonus",label:"奖金",width:"120px",headerAlign:"center",bodyAlign:"right"}]),H=p([{id:1,name:"张三",age:25,salary:"15000",bonus:"5000"},{id:2,name:"李四",age:30,salary:"16000",bonus:"6000"},{id:3,name:"王五",age:28,salary:"14000",bonus:"4500"}]),y=p([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),E=p([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"},{id:4,name:"赵六",age:32,address:"深圳市南山区"},{id:5,name:"钱七",age:26,address:"杭州市西湖区"}]),C=p(1),v=p(2),j=A(()=>{const m=(C.value-1)*v.value,n=m+v.value;return E.value.slice(m,n)}),w=(m,n)=>{console.log("页码变化:",m,n)};return(m,n)=>{const d=ys("ShowCode");return k(),c("div",null,[n[3]||(n[3]=hs("",4)),r(d,{title:"基础表格",description:"使用 columns 和 data 属性定义表格结构和数据。",code:`<template>
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
<\/script>`},{demo:u(()=>[l("div",Ts,[r(T,{columns:D.value,data:M.value},null,8,["columns","data"])])]),_:1}),n[4]||(n[4]=l("h2",{id:"使用插槽定义列",tabindex:"-1"},[B("使用插槽定义列 "),l("a",{class:"header-anchor",href:"#使用插槽定义列","aria-label":"Permalink to “使用插槽定义列”"},"​")],-1)),r(d,{title:"使用插槽定义列",description:"使用 MYTableColumn 组件和插槽自定义列内容。",code:`<template>
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
<\/script>`},{demo:u(()=>[l("div",Ss,[r(T,{data:h.value},{default:u(()=>[r(K,{prop:"name",label:"姓名",width:"120"}),r(K,{prop:"age",label:"年龄",width:"80"}),r(K,{prop:"address",label:"地址"}),r(K,{prop:"status",label:"状态"},{default:u(({row:g})=>[l("span",{style:S({color:g.status==="成功"?"#67C23A":"#F56C6C"})},F(g.status),5)]),_:1})]),_:1},8,["data"])])]),_:1}),n[5]||(n[5]=l("h2",{id:"选择功能",tabindex:"-1"},[B("选择功能 "),l("a",{class:"header-anchor",href:"#选择功能","aria-label":"Permalink to “选择功能”"},"​")],-1)),r(d,{title:"选择功能",description:"使用 type='selection' 列启用行选择功能",code:`<template>
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
<\/script>`},{demo:u(()=>[l("div",Ps,[r(T,{columns:$.value,data:L.value,modelValue:V.value,"onUpdate:modelValue":n[0]||(n[0]=g=>V.value=g),onSelectionChange:O},null,8,["columns","data","modelValue"]),l("div",Es," 已选择: "+F(V.value.map(g=>g.name).join(", ")),1)])]),_:1}),n[6]||(n[6]=l("h2",{id:"树形数据",tabindex:"-1"},[B("树形数据 "),l("a",{class:"header-anchor",href:"#树形数据","aria-label":"Permalink to “树形数据”"},"​")],-1)),r(d,{title:"树形数据",description:"使用树形结构数据展示层级关系",code:`<template>
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
<\/script>`},{demo:u(()=>[l("div",Fs,[r(T,{columns:Y.value,data:z.value,"tree-props":{children:"children"}},null,8,["columns","data"])])]),_:1}),n[7]||(n[7]=l("h2",{id:"斑马纹表格",tabindex:"-1"},[B("斑马纹表格 "),l("a",{class:"header-anchor",href:"#斑马纹表格","aria-label":"Permalink to “斑马纹表格”"},"​")],-1)),r(d,{title:"斑马纹表格",description:"使用 stripe 属性添加斑马纹样式",code:`<template>
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
<\/script>`},{demo:u(()=>[l("div",Ms,[r(T,{columns:U.value,data:I.value,stripe:"#fafafa"},null,8,["columns","data"])])]),_:1}),n[8]||(n[8]=l("h2",{id:"列对齐",tabindex:"-1"},[B("列对齐 "),l("a",{class:"header-anchor",href:"#列对齐","aria-label":"Permalink to “列对齐”"},"​")],-1)),r(d,{title:"列对齐",description:"使用 align、headerAlign、bodyAlign 控制列内容对齐方式",code:`<template>
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
<\/script>`},{demo:u(()=>[l("div",Vs,[r(T,{columns:P.value,data:H.value},null,8,["columns","data"])])]),_:1}),n[9]||(n[9]=l("h2",{id:"带分页的表格",tabindex:"-1"},[B("带分页的表格 "),l("a",{class:"header-anchor",href:"#带分页的表格","aria-label":"Permalink to “带分页的表格”"},"​")],-1)),r(d,{title:"带分页的表格",description:"使用分页插槽实现表格分页功能",code:`<template>
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
<\/script>`},{demo:u(()=>[l("div",Ys,[r(T,{columns:y.value,data:j.value},{pagination:u(()=>[r(ms,{"current-page":C.value,"onUpdate:currentPage":n[1]||(n[1]=g=>C.value=g),"page-size":v.value,"onUpdate:pageSize":n[2]||(n[2]=g=>v.value=g),total:E.value.length,layout:"prev, pager, next",onChange:w},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),n[10]||(n[10]=hs("",9))])}}});export{Is as __pageData,js as default};

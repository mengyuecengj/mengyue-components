import{d as os,a0 as ks,h as B,x as r,z as rs,W as cs,c as k,o as c,O as T,k as _,j as i,G as z,H as es,a as m,t as F,n as ps,a1 as gs,e as ts,r as ns,a2 as us,I as ys,ah as hs,J as d,w as y}from"./chunks/framework.CMpBhb2-.js";import{u as is}from"./chunks/useStyleComputed.C3Tfj8Jd.js";import{_ as ms}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.B-1627gI.js";const bs={data:{type:Array,default:()=>[]},columns:{type:Array,default:()=>[]},modelValue:{type:[Array,String],default:()=>[]},width:{type:String,default:""},height:{type:String,default:""},headerBackgroundColor:{type:String,default:""},headerTextColor:{type:String,default:""},stripe:{type:String,default:""},borderColor:{type:String,default:""},bodyBackgroundColor:{type:String,default:""},hoverBackgroundColor:{type:String,default:""},bodyTextColor:{type:String,default:""},rowKey:{type:String,default:"id"},treeProps:{type:Object,default:()=>({children:"children",hasChildren:"hasChildren"})},indent:{type:Number,default:16},align:{type:String,default:"left"},headerAlign:{type:String,default:""},bodyAlign:{type:String,default:""}};function fs(v){const w=is(v,{propToStyleMap:{width:"width",height:"height",border:"border"}}),E=is(v,{propToStyleMap:{headerBackgroundColor:"backgroundColor",headerTextColor:"color",headerAlign:"textAlign"}}),p=is(v,{propToStyleMap:{bodyBackgroundColor:"backgroundColor",bodyTextColor:"color",bodyAlign:"textAlign",hoverBackgroundColor:"--hover-bg-color"}});return{tableStyle:w,headerStyle:E,bodyStyle:p}}const Ds=["data-column"],As=["checked","indeterminate"],Bs=["data-column"],Cs=["checked","onChange"],vs=["onClick"],ws={key:0,style:{background:"orange",padding:"5px",color:"black"}},xs={key:1,viewBox:"0 0 1024 1024",width:"12",height:"12"},_s={class:"pagination-container"},A=os({__name:"table",props:bs,emits:["update:modelValue","selection-change"],setup(v,{emit:w}){const p=v,I=w,{tableStyle:W,headerStyle:M,bodyStyle:J}=fs(p),V=ks(),j=B(()=>Z.value.find(e=>e.type!=="selection")?.prop??""),G=B(()=>(p.data??[]).some(a=>{const e=N(a);return e&&e.length>0})),K=()=>p.treeProps??{},S=r([]),q=(a,e)=>{const s=f(a),n=S.value.indexOf(s),l=n!==-1;e===void 0&&(e=!l),e&&!l?S.value.push(s):!e&&l&&S.value.splice(n,1)},f=a=>{const e=String(p.rowKey??"id");return a[e]},Y=a=>S.value.includes(f(a)),N=a=>{const e=K(),s=typeof e.children=="string"?e.children:"children",n=a[s];return Array.isArray(n)?n:[]},L=a=>{const s=K().hasChildren;return typeof s=="string"?!!a[String(s)]:N(a).length>0},O=(a,e=0,s=null)=>{const n=[];return a.forEach(l=>{const D=N(l),$=D.length===0;n.push({row:l,level:e,parent:s,isLeaf:$}),!$&&Y(l)&&n.push(...O(D,e+1,l))}),n},C=B(()=>O(p.data??[])),R=a=>{const e=Number(p.indent??16);return`${Number(a??0)*e}px`},P=(a,e)=>{const s=String(e??"");return a[s]},h=r([]);rs(()=>p.modelValue,a=>{a&&Array.isArray(a)&&(h.value=a)},{immediate:!0});const U=a=>{const e=f(a);return h.value.some(s=>f(s)===e)},b=a=>{const e=f(a),s=h.value.findIndex(n=>f(n)===e);s>-1?h.value.splice(s,1):h.value.push(a),Q()},t=B(()=>C.value.length>0&&h.value.length===C.value.length),u=B(()=>h.value.length>0&&h.value.length<C.value.length),g=()=>{t.value?h.value=[]:h.value=C.value.map(a=>a.row),Q()},Q=()=>{I("update:modelValue",h.value),I("selection-change",h.value)};rs(h,Q,{deep:!0});const X=B(()=>{const e=(V.default?V.default({row:{},level:0,index:0}):[])??[],s=[],n=new Set;for(const l of e){if(!l||typeof l!="object")continue;const D=l.type;if((D?.name||D?.__name||"")==="MYTableColumn"){const o=l.props??{},x=o.type,ds=o.prop;if(x==="selection"){if(n.has("__selection__"))continue;n.add("__selection__"),s.push({prop:"__selection__",label:"",width:o.width??"",type:"selection",align:o.align??"center",className:""});continue}if(!ds){const as=`__default_${s.length}__`;if(n.has(as))continue;n.add(as),s.push({prop:as,label:o.label??"",width:o.width??"",type:o.type??"",align:o.align??void 0,className:""});continue}const ss=String(ds);if(n.has(ss))continue;n.add(ss),s.push({prop:ss,label:o.label??"",width:o.width??"",type:o.type??"",align:o.align??void 0,className:""})}else if(l.props&&typeof l.props=="object"){const x=l.props.slot;x&&!n.has(x)&&(n.add(x),s.push({prop:x,label:x,width:"",type:"",align:void 0,className:""}))}}return s}),Z=B(()=>{const a=p.columns??[];let e=[];if(!a||a.length===0)e=X.value.map(s=>({...s,width:s.width??""}));else{e=a.map(s=>{const n=X.value.find(o=>o.prop===s.prop),l=n&&n.width?n.width:s.width??"",D=n?.type??s.type??"",$=n?.align??s.align??"";return{...s,width:l,type:D,align:$}});for(const s of X.value)e.find(n=>n.prop===s.prop)||e.push({...s,width:s.width??""})}return e.sort((s,n)=>s.type==="selection"?-1:n.type==="selection"?1:0),e}),ls=(a,e)=>({textAlign:(e==="header"?a.headerAlign||a.align:a.bodyAlign||a.align)||"left",width:a.width});return cs("myTable",B(()=>({width:p.width??"",height:p.height??"",selectedRows:h.value,toggleSelectAll:g,isAllSelected:t.value,isIndeterminate:u.value,isRowSelected:U,toggleRowSelection:b}))),(a,e)=>(c(),k("div",{class:"my-table",style:T({"--table-border-color":_(p).borderColor,"--hover-bg-color":_(p).hoverBackgroundColor,..._(W)})},[i("table",null,[i("thead",{style:T(_(M))},[i("tr",null,[(c(!0),k(z,null,es(Z.value,s=>(c(),k("th",{key:s.prop,style:T(ls(s,"header")),"data-column":s.prop},[s.type==="selection"?(c(),k("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:t.value,indeterminate:u.value,onChange:g},null,40,As)):(c(),k(z,{key:1},[m(F(s.label),1)],64))],12,Ds))),128))])],4),i("tbody",{style:T(_(J))},[(c(!0),k(z,null,es(C.value,(s,n)=>(c(),k("tr",{key:f(s.row),style:T(n%2===1?{backgroundColor:_(p).stripe}:{}),class:ps(["my-table-row",{"my-table-row--expanded":Y(s.row)}])},[(c(!0),k(z,null,es(Z.value,l=>(c(),k("td",{key:l.prop,"data-column":l.prop,style:T({paddingLeft:l.type!=="selection"&&l.prop===j.value?R(s.level):"",...ls(l,"body")})},[l.type==="selection"?(c(),k("input",{key:0,type:"checkbox",class:"selection-checkbox",checked:U(s.row),onChange:D=>b(s.row)},null,40,Cs)):(c(),k(z,{key:1},[l.prop===j.value&&G.value?gs((c(),k("span",{key:0,class:ps(["my-table__expand-icon",{"my-table__expand-icon--expanded":Y(s.row)}]),onClick:D=>q(s.row)},[l.prop==="operation"?(c(),k("div",ws," 操作列调试 - 插槽存在: "+F(!!_(V)[l.prop])+", 列prop: "+F(l.prop),1)):ts("",!0),!s.isLeaf||L(s.row)?(c(),k("svg",xs,[...e[0]||(e[0]=[i("path",{d:"M256 128l512 384-512 384z",fill:"currentColor"},null,-1)])])):ts("",!0)],10,vs)),[[us,!s.isLeaf||L(s.row)]]):ts("",!0),ns(a.$slots,l.prop,{row:s.row,level:s.level,index:n},()=>[m(F(P(s.row,l.prop)),1)])],64))],12,Bs))),128))],6))),128))],4)]),i("div",_s,[ns(a.$slots,"pagination")])],4))}}),H=os({name:"MYTableColumn",__name:"tableColumn",setup(v){return(w,E)=>ns(w.$slots,"default")}}),Ts={style:{margin:"20px 0"}},Ss={style:{margin:"20px 0"}},Ps={style:{margin:"20px 0"}},Fs={style:{"margin-top":"16px","font-size":"14px",color:"#606266"}},Es={style:{margin:"20px 0"}},Ms={style:{margin:"20px 0"}},Vs={style:{margin:"20px 0"}},Ys={style:{margin:"20px 0"}},Ns={style:{margin:"20px 0"}},Rs={style:{margin:"20px 0"}},Ks=JSON.parse('{"title":"Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTable.md","filePath":"components/DataTable.md"}'),$s={name:"components/DataTable.md"},Ls=Object.assign($s,{setup(v){const w=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),E=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),p=r([{id:1,name:"张三",age:25,address:"北京市朝阳区",status:"成功"},{id:2,name:"李四",age:30,address:"上海市浦东新区",status:"失败"},{id:3,name:"王五",age:28,address:"广州市天河区",status:"成功"}]),I=r([{type:"selection",width:"50px"},{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),W=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"}]),M=r([]),J=b=>{console.log("选中行:",b)},V=r([{prop:"name",label:"部门",width:"200px"},{prop:"manager",label:"负责人",width:"120px"},{prop:"count",label:"人数",width:"80px"}]),j=r([{id:1,name:"技术部",manager:"张工",count:20,children:[{id:2,name:"前端组",manager:"李工",count:8},{id:3,name:"后端组",manager:"王工",count:12}]},{id:4,name:"市场部",manager:"赵总",count:15,children:[{id:5,name:"推广组",manager:"钱经理",count:7},{id:6,name:"运营组",manager:"孙经理",count:8}]}]),G=r([{prop:"name",label:"姓名",width:"100px"},{prop:"department",label:"部门",width:"120px"},{prop:"position",label:"职位",width:"120px"},{prop:"salary",label:"薪资",width:"100px"}]),K=r([{id:1,name:"张三",department:"技术部",position:"前端工程师",salary:"15000"},{id:2,name:"李四",department:"技术部",position:"后端工程师",salary:"16000"},{id:3,name:"王五",department:"市场部",position:"市场经理",salary:"14000"},{id:4,name:"赵六",department:"人事部",position:"HR",salary:"12000"}]),S=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"city",label:"城市",width:"120px"}]),q=r([{id:1,name:"张三",age:25,city:"北京"},{id:2,name:"李四",age:30,city:"上海"},{id:3,name:"王五",age:28,city:"广州"}]),f=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"city",label:"城市",width:"120px"}]),Y=r([{id:1,name:"张三",age:25,city:"北京"},{id:2,name:"李四",age:30,city:"上海"},{id:3,name:"王五",age:28,city:"广州"}]),N=r([{prop:"name",label:"姓名（左对齐）",width:"120px",align:"left"},{prop:"age",label:"年龄（居中）",width:"100px",align:"center"},{prop:"salary",label:"薪资（右对齐）",width:"120px",align:"right"},{prop:"bonus",label:"奖金",width:"120px",headerAlign:"center",bodyAlign:"right"}]),L=r([{id:1,name:"张三",age:25,salary:"15000",bonus:"5000"},{id:2,name:"李四",age:30,salary:"16000",bonus:"6000"},{id:3,name:"王五",age:28,salary:"14000",bonus:"4500"}]),O=r([{prop:"name",label:"姓名",width:"100px"},{prop:"age",label:"年龄",width:"80px"},{prop:"address",label:"地址"}]),C=r([{id:1,name:"张三",age:25,address:"北京市朝阳区"},{id:2,name:"李四",age:30,address:"上海市浦东新区"},{id:3,name:"王五",age:28,address:"广州市天河区"},{id:4,name:"赵六",age:32,address:"深圳市南山区"},{id:5,name:"钱七",age:26,address:"杭州市西湖区"}]),R=r(1),P=r(2),h=B(()=>{const b=(R.value-1)*P.value,t=b+P.value;return C.value.slice(b,t)}),U=(b,t)=>{console.log("页码变化:",b,t)};return(b,t)=>{const u=ys("ShowCode");return c(),k("div",null,[t[3]||(t[3]=hs("",4)),d(u,{title:"基础表格",description:"使用 columns 和 data 属性定义表格结构和数据",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Ts,[d(A,{columns:w.value,data:E.value},null,8,["columns","data"])])]),_:1}),t[4]||(t[4]=i("h2",{id:"使用插槽定义列",tabindex:"-1"},[m("使用插槽定义列 "),i("a",{class:"header-anchor",href:"#使用插槽定义列","aria-label":"Permalink to “使用插槽定义列”"},"​")],-1)),d(u,{title:"使用插槽定义列",description:"使用 MYTableColumn 组件和插槽自定义列内容",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Ss,[d(A,{data:p.value},{default:y(()=>[d(H,{prop:"name",label:"姓名",width:"120"}),d(H,{prop:"age",label:"年龄",width:"80"}),d(H,{prop:"address",label:"地址"}),d(H,{prop:"status",label:"状态"},{default:y(({row:g})=>[i("span",{style:T({color:g.status==="成功"?"#67C23A":"#F56C6C"})},F(g.status),5)]),_:1})]),_:1},8,["data"])])]),_:1}),t[5]||(t[5]=i("h2",{id:"选择功能",tabindex:"-1"},[m("选择功能 "),i("a",{class:"header-anchor",href:"#选择功能","aria-label":"Permalink to “选择功能”"},"​")],-1)),d(u,{title:"选择功能",description:"使用 type='selection' 列启用行选择功能",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Ps,[d(A,{columns:I.value,data:W.value,modelValue:M.value,"onUpdate:modelValue":t[0]||(t[0]=g=>M.value=g),onSelectionChange:J},null,8,["columns","data","modelValue"]),i("div",Fs," 已选择: "+F(M.value.map(g=>g.name).join(", ")),1)])]),_:1}),t[6]||(t[6]=i("h2",{id:"树形数据",tabindex:"-1"},[m("树形数据 "),i("a",{class:"header-anchor",href:"#树形数据","aria-label":"Permalink to “树形数据”"},"​")],-1)),d(u,{title:"树形数据",description:"使用树形结构数据展示层级关系",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Es,[d(A,{columns:V.value,data:j.value,"tree-props":{children:"children"}},null,8,["columns","data"])])]),_:1}),t[7]||(t[7]=i("h2",{id:"斑马纹表格",tabindex:"-1"},[m("斑马纹表格 "),i("a",{class:"header-anchor",href:"#斑马纹表格","aria-label":"Permalink to “斑马纹表格”"},"​")],-1)),d(u,{title:"斑马纹表格",description:"使用 stripe 属性添加斑马纹样式",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Ms,[d(A,{columns:G.value,data:K.value,stripe:"#fafafa"},null,8,["columns","data"])])]),_:1}),t[8]||(t[8]=i("h2",{id:"自定义样式",tabindex:"-1"},[m("自定义样式 "),i("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),t[9]||(t[9]=i("h3",{id:"表头样式",tabindex:"-1"},[m("表头样式 "),i("a",{class:"header-anchor",href:"#表头样式","aria-label":"Permalink to “表头样式”"},"​")],-1)),d(u,{title:"自定义表头样式",description:"使用 headerBackgroundColor 和 headerTextColor 自定义表头样式",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Vs,[d(A,{columns:S.value,data:q.value,"header-background-color":"#409EFF","header-text-color":"#FFFFFF"},null,8,["columns","data"])])]),_:1}),t[10]||(t[10]=i("h3",{id:"表格体样式",tabindex:"-1"},[m("表格体样式 "),i("a",{class:"header-anchor",href:"#表格体样式","aria-label":"Permalink to “表格体样式”"},"​")],-1)),d(u,{title:"自定义表格体样式",description:"使用 bodyBackgroundColor 和 bodyTextColor 自定义表格体样式",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Ys,[d(A,{columns:f.value,data:Y.value,"body-background-color":"#f0f9ff","body-text-color":"#333","border-color":"#409EFF"},null,8,["columns","data"])])]),_:1}),t[11]||(t[11]=i("h2",{id:"列对齐",tabindex:"-1"},[m("列对齐 "),i("a",{class:"header-anchor",href:"#列对齐","aria-label":"Permalink to “列对齐”"},"​")],-1)),d(u,{title:"列对齐",description:"使用 align、headerAlign、bodyAlign 控制列内容对齐方式",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Ns,[d(A,{columns:N.value,data:L.value},null,8,["columns","data"])])]),_:1}),t[12]||(t[12]=i("h2",{id:"带分页的表格",tabindex:"-1"},[m("带分页的表格 "),i("a",{class:"header-anchor",href:"#带分页的表格","aria-label":"Permalink to “带分页的表格”"},"​")],-1)),d(u,{title:"带分页的表格",description:"使用分页插槽实现表格分页功能",code:`<template>
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
<\/script>`},{demo:y(()=>[i("div",Rs,[d(A,{columns:O.value,data:h.value},{pagination:y(()=>[d(ms,{"current-page":R.value,"onUpdate:currentPage":t[1]||(t[1]=g=>R.value=g),"page-size":P.value,"onUpdate:pageSize":t[2]||(t[2]=g=>P.value=g),total:C.value.length,layout:"prev, pager, next",onChange:U},null,8,["current-page","page-size","total"])]),_:1},8,["columns","data"])])]),_:1}),t[13]||(t[13]=hs("",9))])}}});export{Ks as __pageData,Ls as default};

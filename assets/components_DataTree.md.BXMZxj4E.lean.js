import{d as G,x as h,h as g,I as Z,c,o as i,j as l,e as K,b as U,k as ee,$ as O,t as B,n as A,G as L,H as Y,_ as le,p as ae,s as ne,z as re,O as Q,a1 as X,a as N,a2 as oe,ai as ie,R as se,ah as W,J as x,w as D}from"./chunks/framework.CnxbpgSG.js";import{_ as ce,a as ue}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.BlLSbIfS.js";import{w as te}from"./chunks/withInstall.BiBM9XaQ.js";import{u as he}from"./chunks/useStyleComputed.CzeN-o9K.js";const pe=te(ce);te(ue);const me={class:"my-tree-node"},fe={key:0,class:"my-tree-node__children"},be=G({__name:"treeNode",props:{node:{},treeProps:{},defaultExpanded:{type:Boolean},selectedKeys:{},checkedKeys:{},showCheckbox:{type:Boolean},checkStrictly:{type:Boolean},disabled:{type:Boolean}},emits:["node-click","check-change"],setup(o,{emit:P}){const e=o,v=P,p=h(e.defaultExpanded||!1),C=r=>{const u=r.target;u.closest(".tree-checkbox")||u.closest(".my-checkbox__input")||u.closest(".arrow")||u.closest(".label")||(k.value||d(),e.showCheckbox||b(e.node))},f=()=>{e.showCheckbox||b(e.node)},d=()=>{k.value||(p.value=!p.value)},b=r=>{v("node-click",r)},a=g(()=>e.treeProps.value||"id"),k=g(()=>{const r=e.node[e.treeProps.children];return!r||Array.isArray(r)&&r.length===0}),R=g(()=>{const r=e.node[a.value];return e.selectedKeys?.includes(r)}),_=g(()=>e.disabled||!1),H=g(()=>{const r=e.node[a.value];return e.checkedKeys?.includes(r)||!1}),F=g(()=>{if(e.checkStrictly||k.value)return!1;const r=e.node[e.treeProps.children]||[];if(r.length===0)return!1;const u=r.filter(m=>e.checkedKeys?.includes(m[a.value]));return u.length===r.length?!1:u.length>0}),T=r=>{const u=e.node[a.value];let m=[...e.checkedKeys||[]];if(r){if(m.includes(u)||m.push(u),!e.checkStrictly&&!k.value){const y=M=>{M.forEach(S=>{const E=S[a.value];m.includes(E)||m.push(E);const w=S[e.treeProps.children]||[];w.length>0&&y(w)})},I=e.node[e.treeProps.children]||[];y(I)}}else if(m=m.filter(y=>y!==u),!e.checkStrictly&&!k.value){const y=M=>{M.forEach(S=>{const E=S[a.value];m=m.filter(t=>t!==E);const w=S[e.treeProps.children]||[];w.length>0&&y(w)})},I=e.node[e.treeProps.children]||[];y(I)}v("check-change",m)},V=r=>{v("check-change",r)},J=r=>r[e.treeProps.label]?.toString()||r.id?.toString()||Math.random().toString();return(r,u)=>{const m=Z("TreeNode",!0);return i(),c("div",me,[l("div",{class:A(["my-tree-node__content",{expanded:p.value,leaf:k.value,selected:R.value}]),onClick:u[0]||(u[0]=y=>C(y))},[o.showCheckbox?(i(),U(ee(pe),{key:0,modelValue:H.value,value:o.node[a.value],disabled:_.value,indeterminate:F.value,"onUpdate:modelValue":T,class:"tree-checkbox"},null,8,["modelValue","value","disabled","indeterminate"])):K("",!0),!k.value&&!o.showCheckbox?(i(),c("span",{key:1,class:"arrow",onClick:O(d,["stop"])},B(p.value?"▼":"▶"),1)):K("",!0),l("span",{class:"label",onClick:O(f,["stop"])},B(o.node[o.treeProps.label]),1)],2),p.value&&!k.value?(i(),c("div",fe,[(i(!0),c(L,null,Y(o.node[o.treeProps.children],y=>(i(),U(m,{key:J(y),node:y,treeProps:o.treeProps,defaultExpanded:o.defaultExpanded,selectedKeys:o.selectedKeys,checkedKeys:o.checkedKeys,showCheckbox:o.showCheckbox,checkStrictly:o.checkStrictly,disabled:o.disabled,onNodeClick:b,onCheckChange:V},null,8,["node","treeProps","defaultExpanded","selectedKeys","checkedKeys","showCheckbox","checkStrictly","disabled"]))),128))])):K("",!0)])}}}),de=le(be,[["__scopeId","data-v-63bd20f3"]]),ye={class:"my-tree",style:{"max-width":"600px"}},ve=G({__name:"tree",props:{data:{},props:{},defaultExpanded:{type:Boolean},defaultExpandedKeys:{}},emits:["node-click"],setup(o,{emit:P}){const e=o,v=P,p=g(()=>e.props),C=d=>{v("node-click",d)},f=d=>d[p.value.label]?.toString()||d.id?.toString()||Math.random().toString();return(d,b)=>(i(),c("div",ye,[(i(!0),c(L,null,Y(o.data,a=>(i(),U(de,{key:f(a),node:a,treeProps:p.value,defaultExpanded:o.defaultExpanded||o.defaultExpandedKeys?.includes(f(a)),"default-expanded-keys":o.defaultExpandedKeys,onNodeClick:C},null,8,["node","treeProps","defaultExpanded","default-expanded-keys"]))),128))]))}}),ke={modelValue:{type:[String,Number,Array],default:null},data:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},defaultExpanded:{type:Boolean,default:!1},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},popperClass:{type:String,default:""},validateEvent:{type:Boolean,default:!0},class:{type:String,default:""},style:{type:[String,Object],default:""},defaultExpandedKeys:{type:Array,default:()=>[]},showCheckbox:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},defaultCheckedKeys:{type:Array,default:()=>[]},textColor:{type:String,default:"#606266"},backgroundColor:{type:String,default:"#fff"},activeColor:{type:String,default:"#409eff"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},inputHeight:{type:[String,Number],default:"32px"}},ge=["onClick"],xe={key:0,class:"placeholder selected"},Ce={key:3,class:"loading-spinner"},Se={key:1,class:"my-tree-select__input disabled size-{{ size }}"},Pe=["placeholder","disabled"],Te={class:"tree-container"},j=G({__name:"treeSelect",props:ke,emits:["update:modelValue","change","clear","check-change"],setup(o,{emit:P}){const e=o,v=P,p=h(null),C=h(null),f=h(!1),d=h(""),b=h(200),a=h([]),k=h(e.defaultCheckedKeys),R=g(()=>e.props),_=g(()=>e.props.value||"id"),H=g(()=>e.class||""),F=he(e,{propToStyleMap:{width:"width",height:"height",textColor:"--tree-text-color",backgroundColor:"--tree-bg-color",activeColor:"--tree-active-color",inputHeight:"--tree-input-height"}}),T=g({get:()=>e.modelValue,set:t=>{v("update:modelValue",t),v("change",t)}}),V=g(()=>e.data.length?a.value.map(t=>{const s=S(e.data,t,_.value);return s?s[e.props.label]:""}).filter(Boolean):[]),J=g(()=>{if(!d.value)return e.data;const t=s=>s.filter(n=>{if(n[e.props.label].toLowerCase().includes(d.value.toLowerCase()))return!0;const z=n[e.props.children]||[];return!!(z.length&&t(z).length>0)}).map(n=>({...n,[e.props.children]:t(n[e.props.children]||[])}));return t(e.data)}),r=async()=>{e.disabled||(f.value=!f.value,f.value&&(await se(),b.value=p.value?.offsetWidth||200))},u=t=>{d.value=t},m=t=>{const s=t[_.value];if(!e.showCheckbox){if(e.multiple){const n=a.value.indexOf(s);n>-1?a.value.splice(n,1):a.value.push(s)}else a.value=[s],f.value=!1;T.value=e.multiple?a.value:a.value[0]||null}},y=t=>{k.value=t;const s=t.map(n=>S(e.data,n,_.value)).filter(Boolean);v("check-change",{checkedKeys:t,checkedNodes:s}),e.validateEvent&&(T.value=e.multiple?t:t.length?t[0]:null)},I=t=>{const s=V.value.findIndex(n=>n===t);s>-1&&(a.value.splice(s,1),T.value=e.multiple?a.value:null)},M=()=>{a.value=[],k.value=[],T.value=e.multiple?[]:null,v("clear"),f.value=!1},S=(t,s,n)=>{for(const $ of t){if($[n]===s)return $;const q=$[e.props.children]||[],z=S(q,s,n);if(z)return z}},E=t=>t[R.value.value||"id"]?.toString()||Math.random().toString(),w=t=>{!p.value?.contains(t.target)&&!C.value?.contains(t.target)&&(f.value=!1)};return ae(()=>document.addEventListener("click",w)),ne(()=>document.removeEventListener("click",w)),re(()=>e.modelValue,t=>{e.showCheckbox?k.value=Array.isArray(t)?t:t?[t]:[]:a.value=Array.isArray(t)?t:t?[t]:[]},{immediate:!0}),(t,s)=>(i(),c("div",{class:A(["my-tree-select",[H.value,{disabled:t.disabled}]]),style:Q(ee(F)),ref_key:"selectRef",ref:p},[t.disabled?(i(),c("div",Se,B(t.placeholder),1)):(i(),c("div",{key:0,class:A(["my-tree-select__input",{[`size-${t.size}`]:!0,loading:t.loading}]),onClick:r,tabindex:"0"},[t.multiple&&V.value.length>0?(i(),c(L,{key:0},[(i(!0),c(L,null,Y(V.value,n=>(i(),c("span",{key:n,class:"select-tag"},[N(B(n)+" ",1),t.clearable?(i(),c("span",{key:0,class:"select-tag__close",onClick:O($=>I(n),["stop"])},"×",8,ge)):K("",!0)]))),128)),V.value.length<2?(i(),c("span",xe,B(t.placeholder),1)):K("",!0)],64)):(i(),c("span",{key:1,class:A(["placeholder",{selected:!!T.value}])},B(V.value.length?V.value.join(", "):t.placeholder),3)),l("span",{class:A(["arrow",{rotated:f.value}])},"▼",2),t.clearable&&T.value&&!t.multiple?(i(),c("span",{key:2,class:"clear-btn",onClick:O(M,["stop"])},"×")):K("",!0),t.loading?(i(),c("div",Ce)):K("",!0)],2)),X(l("div",{ref_key:"dropdownRef",ref:C,class:A(["my-tree-select__dropdown",t.popperClass]),style:Q({width:b.value+"px"})},[t.filterable?X((i(),c("input",{key:0,"onUpdate:modelValue":s[0]||(s[0]=n=>d.value=n),class:"search-input",placeholder:t.placeholder,disabled:t.disabled,onInput:s[1]||(s[1]=n=>u(n.target.value))},null,40,Pe)),[[ie,d.value]]):K("",!0),l("div",Te,[(i(!0),c(L,null,Y(J.value,n=>(i(),U(de,{key:E(n),node:n,treeProps:R.value,"default-expanded":t.defaultExpanded,"default-expanded-keys":t.defaultExpandedKeys,selectedKeys:a.value,"checked-keys":k.value,showCheckbox:t.showCheckbox,checkStrictly:t.checkStrictly,disabled:t.disabled,onNodeClick:m,onCheckChange:y},null,8,["node","treeProps","default-expanded","default-expanded-keys","selectedKeys","checked-keys","showCheckbox","checkStrictly","disabled"]))),128))])],6),[[oe,f.value]])],6))}}),Ve={style:{"max-width":"600px"}},Ae=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTree.md","filePath":"components/DataTree.md"}'),we={name:"components/DataTree.md"},Be=Object.assign(we,{setup(o){h([{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}]);const P=h(null),e=h([]),v=h([2,4]),p=h(null),C=h(null);return h([{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}]),h({label:"name",value:"id",children:"children"}),(f,d)=>{const b=Z("ShowCode");return i(),c("div",null,[d[6]||(d[6]=W("",5)),x(b,{title:"基础用法",code:`
<template>
  <MYTree
    :data='treeData'
    :props='{ label: 'name', children: 'children' }'
    @node-click='handleNodeClick' />
</template>
<script setup>
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '一级节点2',
    children: [
      { id: 7, name: '二级节点2-1' }
    ]
  }
]
const handleNodeClick = (node) => {
  console.log('点击节点:', node)
}
<\/script>
`},{demo:D(()=>[l("div",Ve,[x(ve,{data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",children:"children"},onNodeClick:d[0]||(d[0]=a=>console.log("点击节点:",a))})])]),_:1}),d[7]||(d[7]=l("h2",{id:"树选择器",tabindex:"-1"},[N("树选择器 "),l("a",{class:"header-anchor",href:"#树选择器","aria-label":"Permalink to “树选择器”"},"​")],-1)),d[8]||(d[8]=l("p",null,"树形选择器，支持单选、多选、过滤等功能。",-1)),d[9]||(d[9]=l("h3",{id:"单选模式",tabindex:"-1"},[N("单选模式 "),l("a",{class:"header-anchor",href:"#单选模式","aria-label":"Permalink to “单选模式”"},"​")],-1)),x(b,{title:"单选模式",code:`
<template>
  <MYTreeSelect 
    v-model='selectedValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    placeholder='请选择'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValue = ref(null)
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: '一级节点2',
    children: [
      { id: 7, name: '二级节点2-1' }
    ]
  }
]
<\/script>
`},{demo:D(()=>[x(j,{modelValue:P.value,"onUpdate:modelValue":d[1]||(d[1]=a=>P.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",value:"id",children:"children"},placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[10]||(d[10]=l("h3",{id:"多选模式",tabindex:"-1"},[N("多选模式 "),l("a",{class:"header-anchor",href:"#多选模式","aria-label":"Permalink to “多选模式”"},"​")],-1)),x(b,{title:"多选模式",code:`
<template>
  <MYTreeSelect
    v-model='selectedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    placeholder='请选择'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValues = ref([])
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:D(()=>[x(j,{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=a=>e.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"",placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[11]||(d[11]=l("h3",{id:"复选框模式",tabindex:"-1"},[N("复选框模式 "),l("a",{class:"header-anchor",href:"#复选框模式","aria-label":"Permalink to “复选框模式”"},"​")],-1)),d[12]||(d[12]=l("p",null,"支持复选框选择，可设置父子节点联动关系。",-1)),x(b,{title:"复选框模式",code:`
<template>
  <MYTreeSelect 
    v-model='checkedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    show-checkbox
    :check-strictly='false'
    placeholder='请选择' />
</template>
<script setup>
import { ref } from 'vue'
const checkedValues = ref([2, 4])
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:D(()=>[x(j,{modelValue:v.value,"onUpdate:modelValue":d[3]||(d[3]=a=>v.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"","show-checkbox":"","check-strictly":!1,placeholder:"请选择",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[13]||(d[13]=l("h3",{id:"过滤功能",tabindex:"-1"},[N("过滤功能 "),l("a",{class:"header-anchor",href:"#过滤功能","aria-label":"Permalink to “过滤功能”"},"​")],-1)),d[14]||(d[14]=l("p",null,"支持输入过滤，快速查找节点。",-1)),x(b,{title:"过滤功能",code:`
<template>
  <MYTreeSelect 
    v-model='filteredValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    filterable
    placeholder='请输入关键词' />
</template>
<script setup>
import { ref } from 'vue'
const filteredValue = ref(null)
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:D(()=>[x(j,{modelValue:p.value,"onUpdate:modelValue":d[4]||(d[4]=a=>p.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},filterable:"",placeholder:"请输入关键词",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[15]||(d[15]=l("h2",{id:"自定义样式",tabindex:"-1"},[N("自定义样式 "),l("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),d[16]||(d[16]=l("p",null,"支持自定义文本颜色、背景色和激活颜色。",-1)),x(b,{title:"自定义样式",code:`
<template>
  <MYTreeSelect 
    v-model='styledValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    background-color='#2d2d2d'
    text-color='#eaeaea'
    active-color='#409eff'
    style='width: 240px' />
</template>
<script setup>
import { ref } from 'vue'
const styledValue = ref(null)
const treeData = [
  {
    id: 1,
    name: '一级节点1',
    children: [
      { id: 2, name: '二级节点1-1' },
      {
        id: 3,
        name: '二级节点1-2',
        children: [
          { id: 4, name: '三级节点1' },
          { id: 5, name: '三级节点2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:D(()=>[x(j,{modelValue:C.value,"onUpdate:modelValue":d[5]||(d[5]=a=>C.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[17]||(d[17]=W("",8)),d[18]||(d[18]=l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"update:modelValue"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"change"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"clear"),l("td",null,"清空时触发"),l("td",null,"—")]),l("tr",null,[l("td",null,"check-change"),l("td",null,"节点复选状态改变时触发"),l("td",{checkedKeys:"",checkedNodes:""})])])],-1)),d[19]||(d[19]=W("",2))])}}});export{Ae as __pageData,Be as default};

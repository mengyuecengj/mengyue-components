import{d as q,x as p,h as m,I as Z,c,o as n,j as l,e as K,b as U,$ as O,n as D,t as $,k as ee,G as L,H as Y,O as G,p as le,s as ae,z as re,a1 as X,a as B,a2 as ne,am as oe,R as ie,ah as J,J as C,w as M}from"./chunks/framework.PAn8Jj8p.js";import{_ as se,a as ce}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.BDD4s7rV.js";import{w as te}from"./chunks/withInstall.BiBM9XaQ.js";import{u as ue}from"./chunks/useStyleComputed.DTslAc2e.js";const he=te(se);te(ce);const pe={class:"my-tree-node"},me={key:1,class:"arrow-placeholder"},fe={key:0,class:"my-tree-node__children"},de=q({__name:"treeNode",props:{node:{},treeProps:{},defaultExpanded:{type:Boolean},selectedKeys:{},checkedKeys:{},showCheckbox:{type:Boolean},showArrow:{type:Boolean},checkStrictly:{type:Boolean},disabled:{type:Boolean}},emits:["node-click","check-change"],setup(o,{emit:S}){const e=o,v=S,u=p(e.defaultExpanded||!1),f=m(()=>e.treeProps.value||"id"),y=m(()=>e.node[f.value]),d=m(()=>e.node[e.treeProps.children]||[]),i=m(()=>d.value.length===0),a=m(()=>{const h=e.node[f.value];return e.selectedKeys?.includes(h)}),N=m(()=>e.disabled||!1),P=m(()=>e.checkedKeys?.includes(y.value)||!1),I=m(()=>{if(e.checkStrictly||i.value)return!1;const h=d.value.filter(k=>e.checkedKeys?.includes(k[f.value]));return h.length===d.value.length?!1:h.length>0}),H=()=>{e.showCheckbox||i.value||x()},W=h=>{h.stopPropagation(),e.showCheckbox&&!e.showArrow&&!i.value?x():v("node-click",e.node)},x=()=>{i.value||(u.value=!u.value)},V=h=>{const k=e.node[f.value];let b=[...e.checkedKeys||[]];if(h){if(b.includes(k)||b.push(k),!e.checkStrictly&&!i.value){const g=w=>{w.forEach(A=>{const T=A[f.value];b.includes(T)||b.push(T);const E=A[e.treeProps.children]||[];E.length>0&&g(E)})};g(d.value)}}else if(b=b.filter(g=>g!==k),!e.checkStrictly&&!i.value){const g=w=>{w.forEach(A=>{const T=A[f.value];b=b.filter(R=>R!==T);const E=A[e.treeProps.children]||[];E.length>0&&g(E)})};g(d.value)}v("check-change",b)},F=h=>h[e.treeProps.label]?.toString()||h.id?.toString()||Math.random().toString();return(h,k)=>{const b=Z("TreeNode",!0);return n(),c("div",pe,[l("div",{class:D(["my-tree-node__content",{expanded:u.value,leaf:i.value,selected:a.value}]),onClick:H},[o.showArrow&&!i.value?(n(),c("span",{key:0,class:D(["arrow",{expanded:u.value}]),onClick:O(x,["stop"])},$(u.value?"▼":"▶"),3)):o.showCheckbox||!i.value?(n(),c("span",me)):K("",!0),o.showCheckbox?(n(),U(ee(he),{key:2,modelValue:P.value,indeterminate:I.value,disabled:N.value,value:"nodeKey","onUpdate:modelValue":V,class:"tree-checkbox"},null,8,["modelValue","indeterminate","disabled"])):K("",!0),l("span",{class:"label",onClick:O(W,["stop"])},$(o.node[o.treeProps.label]),1)],2),u.value&&!i.value?(n(),c("div",fe,[(n(!0),c(L,null,Y(d.value,g=>(n(),U(b,{key:F(g),node:g,treeProps:o.treeProps,showCheckbox:o.showCheckbox,showArrow:o.showArrow,checkedKeys:o.checkedKeys,checkStrictly:o.checkStrictly,onNodeClick:k[0]||(k[0]=w=>h.$emit("node-click",w)),onCheckChange:k[1]||(k[1]=w=>h.$emit("check-change",w))},null,8,["node","treeProps","showCheckbox","showArrow","checkedKeys","checkStrictly"]))),128))])):K("",!0)])}}}),ve=q({__name:"tree",props:{data:{},props:{},defaultExpanded:{type:Boolean},defaultExpandedKeys:{},showCheckbox:{type:Boolean},showArrow:{type:Boolean},checkedKeys:{},checkStrictly:{type:Boolean},width:{},height:{}},emits:["node-click","check-change"],setup(o,{emit:S}){const e=o,v=S,u=m(()=>e.props),f=m(()=>({width:e.width||"100%",height:e.height||"auto",maxWidth:e.width||"600px"})),y=a=>{v("node-click",a)},d=a=>{v("check-change",a)},i=a=>a[u.value.value||"id"]?.toString()||Math.random().toString();return(a,N)=>(n(),c("div",{class:"my-tree",style:G(f.value)},[(n(!0),c(L,null,Y(o.data,P=>(n(),U(de,{key:i(P),node:P,treeProps:u.value,defaultExpanded:o.defaultExpanded||o.defaultExpandedKeys?.includes(i(P)),showCheckbox:o.showCheckbox,showArrow:o.showArrow,checkedKeys:o.checkedKeys,checkStrictly:o.checkStrictly,onNodeClick:y,onCheckChange:d},null,8,["node","treeProps","defaultExpanded","showCheckbox","showArrow","checkedKeys","checkStrictly"]))),128))],4))}}),ye={modelValue:{type:[String,Number,Array],default:null},data:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},defaultExpanded:{type:Boolean,default:!1},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},popperClass:{type:String,default:""},validateEvent:{type:Boolean,default:!0},class:{type:String,default:""},style:{type:[String,Object],default:""},defaultExpandedKeys:{type:Array,default:()=>[]},showCheckbox:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},defaultCheckedKeys:{type:Array,default:()=>[]},textColor:{type:String,default:"#606266"},backgroundColor:{type:String,default:"#fff"},activeColor:{type:String,default:"#409eff"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},inputHeight:{type:[String,Number],default:"32px"}},be=["onClick"],ke={key:0,class:"placeholder selected"},ge={key:3,class:"loading-spinner"},Ce={key:1,class:"my-tree-select__input disabled size-{{ size }}"},xe=["placeholder","disabled"],we={class:"tree-container"},j=q({__name:"treeSelect",props:ye,emits:["update:modelValue","change","clear","check-change"],setup(o,{emit:S}){const e=o,v=S,u=p(null),f=p(null),y=p(!1),d=p(""),i=p(200),a=p([]),N=p(e.defaultCheckedKeys),P=m(()=>e.props),I=m(()=>e.props.value||"id"),H=m(()=>e.class||""),W=ue(e,{propToStyleMap:{width:"width",height:"height",textColor:"--tree-text-color",backgroundColor:"--tree-bg-color",activeColor:"--tree-active-color",inputHeight:"--tree-input-height"}}),x=m({get:()=>e.modelValue,set:t=>{v("update:modelValue",t),v("change",t)}}),V=m(()=>e.data.length?a.value.map(t=>{const s=T(e.data,t,I.value);return s?s[e.props.label]:""}).filter(Boolean):[]),F=m(()=>{if(!d.value)return e.data;const t=s=>s.filter(r=>{if(r[e.props.label].toLowerCase().includes(d.value.toLowerCase()))return!0;const z=r[e.props.children]||[];return!!(z.length&&t(z).length>0)}).map(r=>({...r,[e.props.children]:t(r[e.props.children]||[])}));return t(e.data)}),h=async()=>{e.disabled||(y.value=!y.value,y.value&&(await ie(),i.value=u.value?.offsetWidth||200))},k=t=>{d.value=t},b=t=>{const s=t[I.value];if(!e.showCheckbox){if(e.multiple){const r=a.value.indexOf(s);r>-1?a.value.splice(r,1):a.value.push(s)}else a.value=[s],y.value=!1;x.value=e.multiple?a.value:a.value[0]||null}},g=t=>{N.value=t;const s=t.map(r=>T(e.data,r,I.value)).filter(Boolean);v("check-change",{checkedKeys:t,checkedNodes:s}),e.validateEvent&&(x.value=e.multiple?t:t.length?t[0]:null)},w=t=>{const s=V.value.findIndex(r=>r===t);s>-1&&(a.value.splice(s,1),x.value=e.multiple?a.value:null)},A=()=>{a.value=[],N.value=[],x.value=e.multiple?[]:null,v("clear"),y.value=!1},T=(t,s,r)=>{for(const _ of t){if(_[r]===s)return _;const Q=_[e.props.children]||[],z=T(Q,s,r);if(z)return z}},E=t=>t[P.value.value||"id"]?.toString()||Math.random().toString(),R=t=>{!u.value?.contains(t.target)&&!f.value?.contains(t.target)&&(y.value=!1)};return le(()=>document.addEventListener("click",R)),ae(()=>document.removeEventListener("click",R)),re(()=>e.modelValue,t=>{e.showCheckbox?N.value=Array.isArray(t)?t:t?[t]:[]:a.value=Array.isArray(t)?t:t?[t]:[]},{immediate:!0}),(t,s)=>(n(),c("div",{class:D(["my-tree-select",[H.value,{disabled:t.disabled}]]),style:G(ee(W)),ref_key:"selectRef",ref:u},[t.disabled?(n(),c("div",Ce,$(t.placeholder),1)):(n(),c("div",{key:0,class:D(["my-tree-select__input",{[`size-${t.size}`]:!0,loading:t.loading}]),onClick:h,tabindex:"0"},[t.multiple&&V.value.length>0?(n(),c(L,{key:0},[(n(!0),c(L,null,Y(V.value,r=>(n(),c("span",{key:r,class:"select-tag"},[B($(r)+" ",1),t.clearable?(n(),c("span",{key:0,class:"select-tag__close",onClick:O(_=>w(r),["stop"])},"×",8,be)):K("",!0)]))),128)),V.value.length<2?(n(),c("span",ke,$(t.placeholder),1)):K("",!0)],64)):(n(),c("span",{key:1,class:D(["placeholder",{selected:!!x.value}])},$(V.value.length?V.value.join(", "):t.placeholder),3)),l("span",{class:D(["arrow",{rotated:y.value}])},"▼",2),t.clearable&&x.value&&!t.multiple?(n(),c("span",{key:2,class:"clear-btn",onClick:O(A,["stop"])},"×")):K("",!0),t.loading?(n(),c("div",ge)):K("",!0)],2)),X(l("div",{ref_key:"dropdownRef",ref:f,class:D(["my-tree-select__dropdown",t.popperClass]),style:G({width:i.value+"px"})},[t.filterable?X((n(),c("input",{key:0,"onUpdate:modelValue":s[0]||(s[0]=r=>d.value=r),class:"search-input",placeholder:t.placeholder,disabled:t.disabled,onInput:s[1]||(s[1]=r=>k(r.target.value))},null,40,xe)),[[oe,d.value]]):K("",!0),l("div",we,[(n(!0),c(L,null,Y(F.value,r=>(n(),U(de,{key:E(r),node:r,treeProps:P.value,defaultExpanded:t.defaultExpanded,selectedKeys:a.value,checkedKeys:N.value,showCheckbox:t.showCheckbox,checkStrictly:t.checkStrictly,disabled:t.disabled,onNodeClick:b,onCheckChange:g},null,8,["node","treeProps","defaultExpanded","selectedKeys","checkedKeys","showCheckbox","checkStrictly","disabled"]))),128))])],6),[[ne,y.value]])],6))}}),Se={style:{"max-width":"600px"}},Ae=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTree.md","filePath":"components/DataTree.md"}'),Pe={name:"components/DataTree.md"},Ee=Object.assign(Pe,{setup(o){p([{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}]);const S=p(null),e=p([]),v=p([2,4]),u=p(null),f=p(null);return p([{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}]),p({label:"name",value:"id",children:"children"}),(y,d)=>{const i=Z("ShowCode");return n(),c("div",null,[d[6]||(d[6]=J("",5)),C(i,{title:"基础用法",code:`
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
`},{demo:M(()=>[l("div",Se,[C(ve,{data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",children:"children"},onNodeClick:d[0]||(d[0]=a=>console.log("点击节点:",a))})])]),_:1}),d[7]||(d[7]=l("h2",{id:"树选择器",tabindex:"-1"},[B("树选择器 "),l("a",{class:"header-anchor",href:"#树选择器","aria-label":"Permalink to “树选择器”"},"​")],-1)),d[8]||(d[8]=l("p",null,"树形选择器，支持单选、多选、过滤等功能。",-1)),d[9]||(d[9]=l("h3",{id:"单选模式",tabindex:"-1"},[B("单选模式 "),l("a",{class:"header-anchor",href:"#单选模式","aria-label":"Permalink to “单选模式”"},"​")],-1)),C(i,{title:"单选模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:S.value,"onUpdate:modelValue":d[1]||(d[1]=a=>S.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",value:"id",children:"children"},placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[10]||(d[10]=l("h3",{id:"多选模式",tabindex:"-1"},[B("多选模式 "),l("a",{class:"header-anchor",href:"#多选模式","aria-label":"Permalink to “多选模式”"},"​")],-1)),C(i,{title:"多选模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=a=>e.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"",placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[11]||(d[11]=l("h3",{id:"复选框模式",tabindex:"-1"},[B("复选框模式 "),l("a",{class:"header-anchor",href:"#复选框模式","aria-label":"Permalink to “复选框模式”"},"​")],-1)),d[12]||(d[12]=l("p",null,"支持复选框选择，可设置父子节点联动关系。",-1)),C(i,{title:"复选框模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:v.value,"onUpdate:modelValue":d[3]||(d[3]=a=>v.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"","show-checkbox":"","check-strictly":!1,placeholder:"请选择",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[13]||(d[13]=l("h3",{id:"过滤功能",tabindex:"-1"},[B("过滤功能 "),l("a",{class:"header-anchor",href:"#过滤功能","aria-label":"Permalink to “过滤功能”"},"​")],-1)),d[14]||(d[14]=l("p",null,"支持输入过滤，快速查找节点。",-1)),C(i,{title:"过滤功能",code:`
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
`},{demo:M(()=>[C(j,{modelValue:u.value,"onUpdate:modelValue":d[4]||(d[4]=a=>u.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},filterable:"",placeholder:"请输入关键词",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[15]||(d[15]=l("h2",{id:"自定义样式",tabindex:"-1"},[B("自定义样式 "),l("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),d[16]||(d[16]=l("p",null,"支持自定义文本颜色、背景色和激活颜色。",-1)),C(i,{title:"自定义样式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:f.value,"onUpdate:modelValue":d[5]||(d[5]=a=>f.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[17]||(d[17]=J("",8)),d[18]||(d[18]=l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"update:modelValue"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"change"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"clear"),l("td",null,"清空时触发"),l("td",null,"—")]),l("tr",null,[l("td",null,"check-change"),l("td",null,"节点复选状态改变时触发"),l("td",{checkedKeys:"",checkedNodes:""})])])],-1)),d[19]||(d[19]=J("",2))])}}});export{Ae as __pageData,Ee as default};

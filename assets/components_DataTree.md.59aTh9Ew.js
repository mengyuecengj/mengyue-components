import{d as q,x as p,h as m,I as Z,c as s,o as r,j as l,e as A,b as U,$ as O,n as K,t as $,k as ee,G as L,H as Y,O as G,p as le,s as ae,z as re,a1 as X,a as D,a2 as ne,am as oe,R as ie,ah as J,J as C,w as M}from"./chunks/framework.D3tsReks.js";import{_ as se,a as ce}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.Bs_xyA3B.js";import{w as te}from"./chunks/withInstall.BiBM9XaQ.js";import{u as ue}from"./chunks/useStyleComputed.BZuPLADM.js";const he=te(se);te(ce);const pe={class:"my-tree-node"},me={key:1,class:"arrow-placeholder"},fe={key:0,class:"my-tree-node__children"},de=q({__name:"treeNode",props:{node:{},treeProps:{},defaultExpanded:{type:Boolean},selectedKeys:{},checkedKeys:{},showCheckbox:{type:Boolean},showArrow:{type:Boolean},checkStrictly:{type:Boolean},disabled:{type:Boolean}},emits:["node-click","check-change"],setup(o,{emit:S}){const e=o,v=S,u=p(e.defaultExpanded||!1),f=m(()=>e.treeProps.value||"id"),y=m(()=>e.node[f.value]),d=m(()=>e.node[e.treeProps.children]||[]),i=m(()=>d.value.length===0),a=m(()=>{const h=e.node[f.value];return e.selectedKeys?.includes(h)}),N=m(()=>e.disabled||!1),T=m(()=>e.checkedKeys?.includes(y.value)||!1),I=m(()=>{if(e.checkStrictly||i.value)return!1;const h=d.value.filter(k=>e.checkedKeys?.includes(k[f.value]));return h.length===d.value.length?!1:h.length>0}),H=()=>{e.showCheckbox||i.value||w()},W=h=>{h.stopPropagation(),e.showCheckbox&&!e.showArrow&&!i.value?w():v("node-click",e.node)},w=()=>{i.value||(u.value=!u.value)},P=h=>{const k=e.node[f.value];let b=[...e.checkedKeys||[]];if(h){if(b.includes(k)||b.push(k),!e.checkStrictly&&!i.value){const g=x=>{x.forEach(E=>{const V=E[f.value];b.includes(V)||b.push(V);const B=E[e.treeProps.children]||[];B.length>0&&g(B)})};g(d.value)}}else if(b=b.filter(g=>g!==k),!e.checkStrictly&&!i.value){const g=x=>{x.forEach(E=>{const V=E[f.value];b=b.filter(R=>R!==V);const B=E[e.treeProps.children]||[];B.length>0&&g(B)})};g(d.value)}v("check-change",b)},F=h=>h[e.treeProps.label]?.toString()||h.id?.toString()||Math.random().toString();return(h,k)=>{const b=Z("TreeNode",!0);return r(),s("div",pe,[l("div",{class:K(["my-tree-node__content",{expanded:u.value,leaf:i.value,selected:a.value}]),onClick:H},[o.showArrow&&!i.value?(r(),s("span",{key:0,class:K(["arrow",{expanded:u.value}]),onClick:O(w,["stop"])},$(u.value?"▼":"▶"),3)):o.showCheckbox||!i.value?(r(),s("span",me)):A("",!0),o.showCheckbox?(r(),U(ee(he),{key:2,modelValue:T.value,indeterminate:I.value,disabled:N.value,value:"nodeKey","onUpdate:modelValue":P,class:"tree-checkbox"},null,8,["modelValue","indeterminate","disabled"])):A("",!0),l("span",{class:"label",onClick:O(W,["stop"])},$(o.node[o.treeProps.label]),1)],2),u.value&&!i.value?(r(),s("div",fe,[(r(!0),s(L,null,Y(d.value,g=>(r(),U(b,{key:F(g),node:g,treeProps:o.treeProps,showCheckbox:o.showCheckbox,showArrow:o.showArrow,checkedKeys:o.checkedKeys,checkStrictly:o.checkStrictly,onNodeClick:k[0]||(k[0]=x=>h.$emit("node-click",x)),onCheckChange:k[1]||(k[1]=x=>h.$emit("check-change",x))},null,8,["node","treeProps","showCheckbox","showArrow","checkedKeys","checkStrictly"]))),128))])):A("",!0)])}}}),ye=q({__name:"tree",props:{data:{},props:{},defaultExpanded:{type:Boolean},defaultExpandedKeys:{},showCheckbox:{type:Boolean},showArrow:{type:Boolean},checkedKeys:{},checkStrictly:{type:Boolean},width:{},height:{}},emits:["node-click","check-change"],setup(o,{emit:S}){const e=o,v=S,u=m(()=>e.props),f=m(()=>({width:e.width||"100%",height:e.height||"auto",maxWidth:e.width||"600px"})),y=a=>{v("node-click",a)},d=a=>{v("check-change",a)},i=a=>a[u.value.value||"id"]?.toString()||Math.random().toString();return(a,N)=>(r(),s("div",{class:"my-tree",style:G(f.value)},[(r(!0),s(L,null,Y(o.data,T=>(r(),U(de,{key:i(T),node:T,treeProps:u.value,defaultExpanded:o.defaultExpanded||o.defaultExpandedKeys?.includes(i(T)),showCheckbox:o.showCheckbox,showArrow:o.showArrow,checkedKeys:o.checkedKeys,checkStrictly:o.checkStrictly,onNodeClick:y,onCheckChange:d},null,8,["node","treeProps","defaultExpanded","showCheckbox","showArrow","checkedKeys","checkStrictly"]))),128))],4))}}),ve={modelValue:{type:[String,Number,Array],default:null},data:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},defaultExpanded:{type:Boolean,default:!1},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},popperClass:{type:String,default:""},validateEvent:{type:Boolean,default:!0},class:{type:String,default:""},style:{type:[String,Object],default:""},defaultExpandedKeys:{type:Array,default:()=>[]},showCheckbox:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},defaultCheckedKeys:{type:Array,default:()=>[]},textColor:{type:String,default:"#606266"},backgroundColor:{type:String,default:"#fff"},activeColor:{type:String,default:"#409eff"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},inputHeight:{type:[String,Number],default:"32px"},arrowType:{type:String,default:"unicode"},arrowColor:{type:String,default:""}},be=["onClick"],ke={key:0,class:"placeholder selected"},ge={key:5,class:"loading-spinner"},Ce={key:1,class:"my-tree-select__input disabled size-{{ size }}"},we=["placeholder","disabled"],xe={class:"tree-container"},j=q({__name:"treeSelect",props:ve,emits:["update:modelValue","change","clear","check-change"],setup(o,{emit:S}){const e=o,v=S,u=p(null),f=p(null),y=p(!1),d=p(""),i=p(200),a=p([]),N=p(Array.isArray(e.defaultCheckedKeys)?e.defaultCheckedKeys:[]),T=m(()=>e.props),I=m(()=>e.props.value||"id"),H=m(()=>e.class||""),W=ue(e,{propToStyleMap:{width:"width",height:"height",textColor:"--tree-text-color",backgroundColor:"--tree-bg-color",activeColor:"--tree-active-color",inputHeight:"--tree-input-height",arrowColor:"--tree-arrow-color"}}),w=m({get:()=>e.modelValue,set:t=>{v("update:modelValue",t),v("change",t)}}),P=m(()=>e.data.length?a.value.map(t=>{const c=V(e.data,t,I.value);return c?c[e.props.label]:""}).filter(Boolean):[]),F=m(()=>{if(!d.value)return e.data;const t=c=>c.filter(n=>{if(n[e.props.label].toLowerCase().includes(d.value.toLowerCase()))return!0;const z=n[e.props.children]||[];return!!(z.length&&t(z).length>0)}).map(n=>({...n,[e.props.children]:t(n[e.props.children]||[])}));return t(e.data)}),h=async()=>{e.disabled||(y.value=!y.value,y.value&&(await ie(),i.value=u.value?.offsetWidth||200))},k=t=>{d.value=t},b=t=>{const c=t[I.value];if(!e.showCheckbox){if(e.multiple){const n=a.value.indexOf(c);n>-1?a.value.splice(n,1):a.value.push(c)}else a.value=[c],y.value=!1;w.value=e.multiple?a.value:a.value[0]||null}},g=t=>{N.value=t;const c=t.map(n=>V(e.data,n,I.value)).filter(Boolean);v("check-change",{checkedKeys:t,checkedNodes:c}),e.validateEvent&&(w.value=e.multiple?t:t.length?t[0]:null)},x=t=>{const c=P.value.findIndex(n=>n===t);c>-1&&(a.value.splice(c,1),w.value=e.multiple?a.value:null)},E=()=>{a.value=[],N.value=[],w.value=e.multiple?[]:null,v("clear"),y.value=!1},V=(t,c,n)=>{for(const _ of t){if(_[n]===c)return _;const Q=_[e.props.children]||[],z=V(Q,c,n);if(z)return z}},B=t=>t[T.value.value||"id"]?.toString()||Math.random().toString(),R=t=>{!u.value?.contains(t.target)&&!f.value?.contains(t.target)&&(y.value=!1)};return le(()=>document.addEventListener("click",R)),ae(()=>document.removeEventListener("click",R)),re(()=>e.modelValue,t=>{e.showCheckbox?N.value=Array.isArray(t)?t:t?[t]:[]:a.value=Array.isArray(t)?t:t?[t]:[]},{immediate:!0}),(t,c)=>(r(),s("div",{class:K(["my-tree-select",[H.value,{disabled:t.disabled}]]),style:G(ee(W)),ref_key:"selectRef",ref:u},[t.disabled?(r(),s("div",Ce,$(t.placeholder),1)):(r(),s("div",{key:0,class:K(["my-tree-select__input",{[`size-${t.size}`]:!0,loading:t.loading}]),onClick:h,tabindex:"0"},[t.multiple&&P.value.length>0?(r(),s(L,{key:0},[(r(!0),s(L,null,Y(P.value,n=>(r(),s("span",{key:n,class:"select-tag"},[D($(n)+" ",1),t.clearable?(r(),s("span",{key:0,class:"select-tag__close",onClick:O(_=>x(n),["stop"])},"×",8,be)):A("",!0)]))),128)),P.value.length<2?(r(),s("span",ke,$(t.placeholder),1)):A("",!0)],64)):(r(),s("span",{key:1,class:K(["placeholder",{selected:!!w.value}])},$(P.value.length?P.value.join(", "):t.placeholder),3)),t.arrowType==="css"?(r(),s("span",{key:2,class:K(["arrow-css",{rotated:y.value}])},null,2)):(r(),s("span",{key:3,class:K(["arrow",{rotated:y.value}])},"▼",2)),t.clearable&&w.value&&!t.multiple?(r(),s("span",{key:4,class:"clear-btn",onClick:O(E,["stop"])},"×")):A("",!0),t.loading?(r(),s("div",ge)):A("",!0)],2)),X(l("div",{ref_key:"dropdownRef",ref:f,class:K(["my-tree-select__dropdown",t.popperClass]),style:G({width:i.value+"px"})},[t.filterable?X((r(),s("input",{key:0,"onUpdate:modelValue":c[0]||(c[0]=n=>d.value=n),class:"search-input",placeholder:t.placeholder,disabled:t.disabled,onInput:c[1]||(c[1]=n=>k(n.target.value))},null,40,we)),[[oe,d.value]]):A("",!0),l("div",xe,[(r(!0),s(L,null,Y(F.value,n=>(r(),U(de,{key:B(n),node:n,treeProps:T.value,defaultExpanded:t.defaultExpanded,selectedKeys:a.value,checkedKeys:N.value,showCheckbox:t.showCheckbox,checkStrictly:t.checkStrictly,disabled:t.disabled,onNodeClick:b,onCheckChange:g},null,8,["node","treeProps","defaultExpanded","selectedKeys","checkedKeys","showCheckbox","checkStrictly","disabled"]))),128))])],6),[[ne,y.value]])],6))}}),Se={style:{"max-width":"600px"}},Ne=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTree.md","filePath":"components/DataTree.md"}'),Te={name:"components/DataTree.md"},Ee=Object.assign(Te,{setup(o){p([{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}]);const S=p(null),e=p([]),v=p([2,4]),u=p(null),f=p(null);return p([{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}]),p({label:"name",value:"id",children:"children"}),(y,d)=>{const i=Z("ShowCode");return r(),s("div",null,[d[6]||(d[6]=J('<h1 id="tree-树形控件" tabindex="-1">Tree 树形控件 <a class="header-anchor" href="#tree-树形控件" aria-label="Permalink to “Tree 树形控件”">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to “简介”">​</a></h2><p>树形控件用于展示层级结构数据，支持展开/收起、选中、复选等功能。可以用于组织架构、文件目录、分类等场景。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a></h2><p>基础的树形结构展示，支持节点点击事件。</p>',5)),C(i,{title:"基础用法",code:`
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
`},{demo:M(()=>[l("div",Se,[C(ye,{data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",children:"children"},onNodeClick:d[0]||(d[0]=a=>console.log("点击节点:",a))})])]),_:1}),d[7]||(d[7]=l("h2",{id:"树选择器",tabindex:"-1"},[D("树选择器 "),l("a",{class:"header-anchor",href:"#树选择器","aria-label":"Permalink to “树选择器”"},"​")],-1)),d[8]||(d[8]=l("p",null,"树形选择器，支持单选、多选、过滤等功能。",-1)),d[9]||(d[9]=l("h3",{id:"单选模式",tabindex:"-1"},[D("单选模式 "),l("a",{class:"header-anchor",href:"#单选模式","aria-label":"Permalink to “单选模式”"},"​")],-1)),C(i,{title:"单选模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:S.value,"onUpdate:modelValue":d[1]||(d[1]=a=>S.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",value:"id",children:"children"},placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[10]||(d[10]=l("h3",{id:"多选模式",tabindex:"-1"},[D("多选模式 "),l("a",{class:"header-anchor",href:"#多选模式","aria-label":"Permalink to “多选模式”"},"​")],-1)),C(i,{title:"多选模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=a=>e.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"",placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[11]||(d[11]=l("h3",{id:"复选框模式",tabindex:"-1"},[D("复选框模式 "),l("a",{class:"header-anchor",href:"#复选框模式","aria-label":"Permalink to “复选框模式”"},"​")],-1)),d[12]||(d[12]=l("p",null,"支持复选框选择，可设置父子节点联动关系。",-1)),C(i,{title:"复选框模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:v.value,"onUpdate:modelValue":d[3]||(d[3]=a=>v.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"","show-checkbox":"","check-strictly":!1,placeholder:"请选择",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[13]||(d[13]=l("h3",{id:"过滤功能",tabindex:"-1"},[D("过滤功能 "),l("a",{class:"header-anchor",href:"#过滤功能","aria-label":"Permalink to “过滤功能”"},"​")],-1)),d[14]||(d[14]=l("p",null,"支持输入过滤，快速查找节点。",-1)),C(i,{title:"过滤功能",code:`
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
`},{demo:M(()=>[C(j,{modelValue:u.value,"onUpdate:modelValue":d[4]||(d[4]=a=>u.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},filterable:"",placeholder:"请输入关键词",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[15]||(d[15]=l("h2",{id:"自定义样式",tabindex:"-1"},[D("自定义样式 "),l("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),d[16]||(d[16]=l("p",null,"支持自定义文本颜色、背景色和激活颜色。",-1)),C(i,{title:"自定义样式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:f.value,"onUpdate:modelValue":d[5]||(d[5]=a=>f.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[17]||(d[17]=J('<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="tree-props" tabindex="-1">Tree Props <a class="header-anchor" href="#tree-props" aria-label="Permalink to “Tree Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>树数据</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>props</td><td>配置选项</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>default-expanded</td><td>是否默认展开所有节点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>默认展开节点的 key 数组</td><td>array</td><td>—</td><td>[]</td></tr></tbody></table><h3 id="tree-events" tabindex="-1">Tree Events <a class="header-anchor" href="#tree-events" aria-label="Permalink to “Tree Events”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>node-click</td><td>节点被点击时触发</td><td>点击的节点数据</td></tr></tbody></table><h3 id="treeselect-props" tabindex="-1">TreeSelect Props <a class="header-anchor" href="#treeselect-props" aria-label="Permalink to “TreeSelect Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>绑定值</td><td>string / number / array</td><td>—</td><td>null</td></tr><tr><td>data</td><td>树数据</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>props</td><td>配置选项</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filterable</td><td>是否可过滤</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>占位符</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>defaultExpanded</td><td>是否默认展开所有节点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>default / small / large</td><td>default</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>是否可清空</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading</td><td>是否显示加载状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popperClass</td><td>下拉框自定义类名</td><td>string</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>class</td><td>自定义类名</td><td>string</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>style</td><td>自定义样式</td><td>string / object</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>defaultExpandedKeys</td><td>默认展开节点的 key 数组</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>showCheckbox</td><td>节点是否可被复选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>checkStrictly</td><td>复选框是否严格模式（父子不互相关联）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>defaultCheckedKeys</td><td>默认选中的节点 key 数组</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>textColor</td><td>文本颜色</td><td>string</td><td>—</td><td>#606266</td></tr><tr><td>backgroundColor</td><td>背景颜色</td><td>string</td><td>—</td><td>#fff</td></tr><tr><td>activeColor</td><td>激活颜色</td><td>string</td><td>—</td><td>#409eff</td></tr><tr><td>width</td><td>宽度</td><td>string / number</td><td>—</td><td>100%</td></tr><tr><td>height</td><td>高度</td><td>string / number</td><td>—</td><td>auto</td></tr><tr><td>inputHeight</td><td>输入框高度</td><td>string / number</td><td>—</td><td>32px</td></tr></tbody></table><h3 id="treeselect-events" tabindex="-1">TreeSelect Events <a class="header-anchor" href="#treeselect-events" aria-label="Permalink to “TreeSelect Events”">​</a></h3>',8)),d[18]||(d[18]=l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"update:modelValue"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"change"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"clear"),l("td",null,"清空时触发"),l("td",null,"—")]),l("tr",null,[l("td",null,"check-change"),l("td",null,"节点复选状态改变时触发"),l("td",{checkedKeys:"",checkedNodes:""})])])],-1)),d[19]||(d[19]=J('<h3 id="tree-props-配置项" tabindex="-1">Tree Props 配置项 <a class="header-anchor" href="#tree-props-配置项" aria-label="Permalink to “Tree Props 配置项”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>指定节点标签为节点对象的某个属性值</td><td>string</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>指定子树为节点对象的某个属性值</td><td>string</td><td>&#39;children&#39;</td></tr><tr><td>value</td><td>指定节点选择框为节点对象的某个属性值</td><td>string</td><td>&#39;id&#39;</td></tr></tbody></table>',2))])}}});export{Ne as __pageData,Ee as default};

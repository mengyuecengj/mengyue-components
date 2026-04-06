import{d as q,y as b,I as Z,o as n,c as i,j as l,$ as U,n as K,t as _,e as A,b as O,k as ee,G as L,H as Y,h as p,O as G,p as le,s as ae,z as re,a as D,a1 as X,a2 as ne,am as oe,R as se,ah as J,J as C,w as M}from"./chunks/framework.DoR57c7M.js";import{_ as ie,a as ce}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.QLhDnxin.js";import{u as ue}from"./chunks/useStyleComputed.DokJCVvp.js";const te=r=>(r.install=w=>{const e=r.name||r.__name;if(!e)throw new Error("Component must have a name or __name property");w.component(e,r)},r),he=te(ie);te(ce);const pe={class:"my-tree-node"},me={key:1,class:"arrow-placeholder"},fe={key:0,class:"my-tree-node__children"},de=q({__name:"treeNode",props:{node:{},treeProps:{},defaultExpanded:{type:Boolean},selectedKeys:{},checkedKeys:{},showCheckbox:{type:Boolean},showArrow:{type:Boolean},checkStrictly:{type:Boolean},disabled:{type:Boolean}},emits:["node-click","check-change"],setup(r,{emit:w}){const e=r,y=w,u=b(e.defaultExpanded||!1),m=p(()=>e.treeProps.value||"id"),f=p(()=>e.node[m.value]),d=p(()=>e.node[e.treeProps.children]||[]),s=p(()=>d.value.length===0),a=p(()=>{const h=e.node[m.value];return e.selectedKeys?.includes(h)}),N=p(()=>e.disabled||!1),T=p(()=>e.checkedKeys?.includes(f.value)||!1),$=p(()=>{if(e.checkStrictly||s.value)return!1;const h=d.value.filter(k=>e.checkedKeys?.includes(k[m.value]));return h.length===d.value.length?!1:h.length>0}),H=()=>{e.showCheckbox||s.value||x()},W=h=>{h.stopPropagation(),e.showCheckbox&&!e.showArrow&&!s.value?x():y("node-click",e.node)},x=()=>{s.value||(u.value=!u.value)},P=h=>{const k=e.node[m.value];let v=[...e.checkedKeys||[]];if(h){if(v.includes(k)||v.push(k),!e.checkStrictly&&!s.value){const g=S=>{S.forEach(E=>{const V=E[m.value];v.includes(V)||v.push(V);const B=E[e.treeProps.children]||[];B.length>0&&g(B)})};g(d.value)}}else if(v=v.filter(g=>g!==k),!e.checkStrictly&&!s.value){const g=S=>{S.forEach(E=>{const V=E[m.value];v=v.filter(R=>R!==V);const B=E[e.treeProps.children]||[];B.length>0&&g(B)})};g(d.value)}y("check-change",v)},F=h=>h[e.treeProps.label]?.toString()||h.id?.toString()||Math.random().toString();return(h,k)=>{const v=Z("TreeNode",!0);return n(),i("div",pe,[l("div",{class:K(["my-tree-node__content",{expanded:u.value,leaf:s.value,selected:a.value}]),onClick:H},[r.showArrow&&!s.value?(n(),i("span",{key:0,class:K(["arrow",{expanded:u.value}]),onClick:U(x,["stop"])},_(u.value?"▼":"▶"),3)):r.showCheckbox||!s.value?(n(),i("span",me)):A("",!0),r.showCheckbox?(n(),O(ee(he),{key:2,modelValue:T.value,indeterminate:$.value,disabled:N.value,value:"nodeKey","onUpdate:modelValue":P,class:"tree-checkbox"},null,8,["modelValue","indeterminate","disabled"])):A("",!0),l("span",{class:"label",onClick:U(W,["stop"])},_(r.node[r.treeProps.label]),1)],2),u.value&&!s.value?(n(),i("div",fe,[(n(!0),i(L,null,Y(d.value,g=>(n(),O(v,{key:F(g),node:g,treeProps:r.treeProps,showCheckbox:r.showCheckbox,showArrow:r.showArrow,checkedKeys:r.checkedKeys,checkStrictly:r.checkStrictly,onNodeClick:k[0]||(k[0]=S=>h.$emit("node-click",S)),onCheckChange:k[1]||(k[1]=S=>h.$emit("check-change",S))},null,8,["node","treeProps","showCheckbox","showArrow","checkedKeys","checkStrictly"]))),128))])):A("",!0)])}}}),ye=q({__name:"tree",props:{data:{},props:{},defaultExpanded:{type:Boolean},defaultExpandedKeys:{},showCheckbox:{type:Boolean},showArrow:{type:Boolean},checkedKeys:{},checkStrictly:{type:Boolean},width:{},height:{}},emits:["node-click","check-change"],setup(r,{emit:w}){const e=r,y=w,u=p(()=>e.props),m=p(()=>({width:e.width||"100%",height:e.height||"auto",maxWidth:e.width||"600px"})),f=a=>{y("node-click",a)},d=a=>{y("check-change",a)},s=a=>a[u.value.value||"id"]?.toString()||Math.random().toString();return(a,N)=>(n(),i("div",{class:"my-tree",style:G(m.value)},[(n(!0),i(L,null,Y(r.data,T=>(n(),O(de,{key:s(T),node:T,treeProps:u.value,defaultExpanded:r.defaultExpanded||r.defaultExpandedKeys?.includes(s(T)),showCheckbox:r.showCheckbox,showArrow:r.showArrow,checkedKeys:r.checkedKeys,checkStrictly:r.checkStrictly,onNodeClick:f,onCheckChange:d},null,8,["node","treeProps","defaultExpanded","showCheckbox","showArrow","checkedKeys","checkStrictly"]))),128))],4))}}),ve={modelValue:{type:[String,Number,Array],default:null},data:{type:Array,default:()=>[]},props:{type:Object,default:()=>({})},multiple:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},placeholder:{type:String,default:"请选择"},defaultExpanded:{type:Boolean,default:!1},size:{type:String,default:"default"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},popperClass:{type:String,default:""},validateEvent:{type:Boolean,default:!0},class:{type:String,default:""},style:{type:[String,Object],default:""},defaultExpandedKeys:{type:Array,default:()=>[]},showCheckbox:{type:Boolean,default:!1},checkStrictly:{type:Boolean,default:!1},showArrow:{type:Boolean,default:!0},defaultCheckedKeys:{type:Array,default:()=>[]},textColor:{type:String,default:"#606266"},backgroundColor:{type:String,default:"#fff"},activeColor:{type:String,default:"#409eff"},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"auto"},inputHeight:{type:[String,Number],default:"32px"},arrowType:{type:String,default:"unicode"},arrowColor:{type:String,default:""}},be=["onClick"],ke={key:0,class:"placeholder selected"},ge={key:5,class:"loading-spinner"},Ce={key:1,class:"my-tree-select__input disabled size-{{ size }}"},we=["placeholder","disabled"],xe={class:"tree-container"},j=q({__name:"treeSelect",props:ve,emits:["update:modelValue","change","clear","check-change"],setup(r,{emit:w}){const e=r,y=w,u=b(null),m=b(null),f=b(!1),d=b(""),s=b(200),a=b([]),N=b(Array.isArray(e.defaultCheckedKeys)?e.defaultCheckedKeys:[]),T=p(()=>e.props),$=p(()=>e.props.value||"id"),H=p(()=>e.class||""),W=ue(e,{propToStyleMap:{width:"width",height:"height",textColor:"--tree-text-color",backgroundColor:"--tree-bg-color",activeColor:"--tree-active-color",inputHeight:"--tree-input-height",arrowColor:"--tree-arrow-color"}}),x=p({get:()=>e.modelValue,set:t=>{y("update:modelValue",t),y("change",t)}}),P=p(()=>e.data.length?a.value.map(t=>{const c=V(e.data,t,$.value);return c?c[e.props.label]:""}).filter(Boolean):[]),F=p(()=>{if(!d.value)return e.data;const t=c=>c.filter(o=>{if(o[e.props.label].toLowerCase().includes(d.value.toLowerCase()))return!0;const z=o[e.props.children]||[];return!!(z.length&&t(z).length>0)}).map(o=>({...o,[e.props.children]:t(o[e.props.children]||[])}));return t(e.data)}),h=async()=>{e.disabled||(f.value=!f.value,f.value&&(await se(),s.value=u.value?.offsetWidth||200))},k=t=>{d.value=t},v=t=>{const c=t[$.value];if(!e.showCheckbox){if(e.multiple){const o=a.value.indexOf(c);o>-1?a.value.splice(o,1):a.value.push(c)}else a.value=[c],f.value=!1;x.value=e.multiple?a.value:a.value[0]||null}},g=t=>{N.value=t;const c=t.map(o=>V(e.data,o,$.value)).filter(Boolean);y("check-change",{checkedKeys:t,checkedNodes:c}),e.validateEvent&&(x.value=e.multiple?t:t.length?t[0]:null)},S=t=>{const c=P.value.findIndex(o=>o===t);c>-1&&(a.value.splice(c,1),x.value=e.multiple?a.value:null)},E=()=>{a.value=[],N.value=[],x.value=e.multiple?[]:null,y("clear"),f.value=!1},V=(t,c,o)=>{for(const I of t){if(I[o]===c)return I;const Q=I[e.props.children]||[],z=V(Q,c,o);if(z)return z}},B=t=>t[T.value.value||"id"]?.toString()||Math.random().toString(),R=t=>{!u.value?.contains(t.target)&&!m.value?.contains(t.target)&&(f.value=!1)};return le(()=>document.addEventListener("click",R)),ae(()=>document.removeEventListener("click",R)),re(()=>e.modelValue,t=>{e.showCheckbox?N.value=Array.isArray(t)?t:t?[t]:[]:a.value=Array.isArray(t)?t:t?[t]:[]},{immediate:!0}),(t,c)=>(n(),i("div",{class:K(["my-tree-select",[H.value,{disabled:t.disabled}]]),style:G(ee(W)),ref_key:"selectRef",ref:u},[t.disabled?(n(),i("div",Ce,_(t.placeholder),1)):(n(),i("div",{key:0,class:K(["my-tree-select__input",{[`size-${t.size}`]:!0,loading:t.loading}]),onClick:h,tabindex:"0"},[t.multiple&&P.value.length>0?(n(),i(L,{key:0},[(n(!0),i(L,null,Y(P.value,o=>(n(),i("span",{key:o,class:"select-tag"},[D(_(o)+" ",1),t.clearable?(n(),i("span",{key:0,class:"select-tag__close",onClick:U(I=>S(o),["stop"])},"×",8,be)):A("",!0)]))),128)),P.value.length<2?(n(),i("span",ke,_(t.placeholder),1)):A("",!0)],64)):(n(),i("span",{key:1,class:K(["placeholder",{selected:!!x.value}])},_(P.value.length?P.value.join(", "):t.placeholder),3)),t.arrowType==="css"?(n(),i("span",{key:2,class:K(["arrow-css",{rotated:f.value}])},null,2)):(n(),i("span",{key:3,class:K(["arrow",{rotated:f.value}])},"▼",2)),t.clearable&&x.value&&!t.multiple?(n(),i("span",{key:4,class:"clear-btn",onClick:U(E,["stop"])},"×")):A("",!0),t.loading?(n(),i("div",ge)):A("",!0)],2)),X(l("div",{ref_key:"dropdownRef",ref:m,class:K(["my-tree-select__dropdown",t.popperClass]),style:G({width:s.value+"px"})},[t.filterable?X((n(),i("input",{key:0,"onUpdate:modelValue":c[0]||(c[0]=o=>d.value=o),class:"search-input",placeholder:t.placeholder,disabled:t.disabled,onInput:c[1]||(c[1]=o=>k(o.target.value))},null,40,we)),[[oe,d.value]]):A("",!0),l("div",xe,[(n(!0),i(L,null,Y(F.value,o=>(n(),O(de,{key:B(o),node:o,treeProps:T.value,defaultExpanded:t.defaultExpanded,selectedKeys:a.value,checkedKeys:N.value,showCheckbox:t.showCheckbox,checkStrictly:t.checkStrictly,disabled:t.disabled,onNodeClick:v,onCheckChange:g},null,8,["node","treeProps","defaultExpanded","selectedKeys","checkedKeys","showCheckbox","checkStrictly","disabled"]))),128))])],6),[[ne,f.value]])],6))}}),Se={style:{"max-width":"600px"}},Ae=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTree.md","filePath":"components/DataTree.md"}'),Te={name:"components/DataTree.md"},Ne=Object.assign(Te,{setup(r){const w=b(null),e=b([]),y=b([2,4]),u=b(null),m=b(null);return(f,d)=>{const s=Z("ShowCode");return n(),i("div",null,[d[6]||(d[6]=J("",5)),C(s,{title:"基础用法",code:`
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
`},{demo:M(()=>[l("div",Se,[C(ye,{data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",children:"children"},onNodeClick:d[0]||(d[0]=a=>console.log("点击节点:",a))})])]),_:1}),d[7]||(d[7]=l("h2",{id:"树选择器",tabindex:"-1"},[D("树选择器 "),l("a",{class:"header-anchor",href:"#树选择器","aria-label":"Permalink to “树选择器”"},"​")],-1)),d[8]||(d[8]=l("p",null,"树形选择器，支持单选、多选、过滤等功能。",-1)),d[9]||(d[9]=l("h3",{id:"单选模式",tabindex:"-1"},[D("单选模式 "),l("a",{class:"header-anchor",href:"#单选模式","aria-label":"Permalink to “单选模式”"},"​")],-1)),C(s,{title:"单选模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:w.value,"onUpdate:modelValue":d[1]||(d[1]=a=>w.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",value:"id",children:"children"},placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[10]||(d[10]=l("h3",{id:"多选模式",tabindex:"-1"},[D("多选模式 "),l("a",{class:"header-anchor",href:"#多选模式","aria-label":"Permalink to “多选模式”"},"​")],-1)),C(s,{title:"多选模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:e.value,"onUpdate:modelValue":d[2]||(d[2]=a=>e.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"",placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[11]||(d[11]=l("h3",{id:"复选框模式",tabindex:"-1"},[D("复选框模式 "),l("a",{class:"header-anchor",href:"#复选框模式","aria-label":"Permalink to “复选框模式”"},"​")],-1)),d[12]||(d[12]=l("p",null,"支持复选框选择，可设置父子节点联动关系。",-1)),C(s,{title:"复选框模式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:y.value,"onUpdate:modelValue":d[3]||(d[3]=a=>y.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"","show-checkbox":"","check-strictly":!1,placeholder:"请选择",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[13]||(d[13]=l("h3",{id:"过滤功能",tabindex:"-1"},[D("过滤功能 "),l("a",{class:"header-anchor",href:"#过滤功能","aria-label":"Permalink to “过滤功能”"},"​")],-1)),d[14]||(d[14]=l("p",null,"支持输入过滤，快速查找节点。",-1)),C(s,{title:"过滤功能",code:`
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
`},{demo:M(()=>[C(j,{modelValue:u.value,"onUpdate:modelValue":d[4]||(d[4]=a=>u.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},filterable:"",placeholder:"请输入关键词",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[15]||(d[15]=l("h2",{id:"自定义样式",tabindex:"-1"},[D("自定义样式 "),l("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),d[16]||(d[16]=l("p",null,"支持自定义文本颜色、背景色和激活颜色。",-1)),C(s,{title:"自定义样式",code:`
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
`},{demo:M(()=>[C(j,{modelValue:m.value,"onUpdate:modelValue":d[5]||(d[5]=a=>m.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),d[17]||(d[17]=J("",8)),d[18]||(d[18]=l("table",{tabindex:"0"},[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"update:modelValue"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"change"),l("td",null,"值改变时触发"),l("td",null,"新的值")]),l("tr",null,[l("td",null,"clear"),l("td",null,"清空时触发"),l("td",null,"—")]),l("tr",null,[l("td",null,"check-change"),l("td",null,"节点复选状态改变时触发"),l("td",{checkedKeys:"",checkedNodes:""})])])],-1)),d[19]||(d[19]=J("",2))])}}});export{Ae as __pageData,Ne as default};

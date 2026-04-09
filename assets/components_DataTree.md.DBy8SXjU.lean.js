import{_ as b,a as i}from"./chunks/treeSelect.vue_vue_type_script_setup_true_lang.n2rsupg5.js";import{I as f,o as v,c as x,ah as s,J as d,w as r,j as e,a as n,y as o}from"./chunks/framework.DmoDkOge.js";import"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.BLKbLKuo.js";import"./chunks/useStyleComputed.CS9pThfp.js";const k={style:{"max-width":"600px"}},w=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTree.md","filePath":"components/DataTree.md"}'),T={name:"components/DataTree.md"},C=Object.assign(T,{setup(V){const h=o(null),m=o([]),c=o([2,4]),p=o(null),u=o(null);return(y,t)=>{const l=f("ShowCode");return v(),x("div",null,[t[6]||(t[6]=s("",5)),d(l,{title:"基础用法",code:`
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
`},{demo:r(()=>[e("div",k,[d(b,{data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",children:"children"},onNodeClick:t[0]||(t[0]=a=>console.log("点击节点:",a))})])]),_:1}),t[7]||(t[7]=e("h2",{id:"树选择器",tabindex:"-1"},[n("树选择器 "),e("a",{class:"header-anchor",href:"#树选择器","aria-label":"Permalink to “树选择器”"},"​")],-1)),t[8]||(t[8]=e("p",null,"树形选择器，支持单选、多选、过滤等功能。",-1)),t[9]||(t[9]=e("h3",{id:"单选模式",tabindex:"-1"},[n("单选模式 "),e("a",{class:"header-anchor",href:"#单选模式","aria-label":"Permalink to “单选模式”"},"​")],-1)),d(l,{title:"单选模式",code:`
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
`},{demo:r(()=>[d(i,{modelValue:h.value,"onUpdate:modelValue":t[1]||(t[1]=a=>h.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",value:"id",children:"children"},placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t[10]||(t[10]=e("h3",{id:"多选模式",tabindex:"-1"},[n("多选模式 "),e("a",{class:"header-anchor",href:"#多选模式","aria-label":"Permalink to “多选模式”"},"​")],-1)),d(l,{title:"多选模式",code:`
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
`},{demo:r(()=>[d(i,{modelValue:m.value,"onUpdate:modelValue":t[2]||(t[2]=a=>m.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"",placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t[11]||(t[11]=e("h3",{id:"复选框模式",tabindex:"-1"},[n("复选框模式 "),e("a",{class:"header-anchor",href:"#复选框模式","aria-label":"Permalink to “复选框模式”"},"​")],-1)),t[12]||(t[12]=e("p",null,"支持复选框选择，可设置父子节点联动关系。",-1)),d(l,{title:"复选框模式",code:`
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
`},{demo:r(()=>[d(i,{modelValue:c.value,"onUpdate:modelValue":t[3]||(t[3]=a=>c.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"","show-checkbox":"","check-strictly":!1,placeholder:"请选择",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t[13]||(t[13]=e("h3",{id:"过滤功能",tabindex:"-1"},[n("过滤功能 "),e("a",{class:"header-anchor",href:"#过滤功能","aria-label":"Permalink to “过滤功能”"},"​")],-1)),t[14]||(t[14]=e("p",null,"支持输入过滤，快速查找节点。",-1)),d(l,{title:"过滤功能",code:`
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
`},{demo:r(()=>[d(i,{modelValue:p.value,"onUpdate:modelValue":t[4]||(t[4]=a=>p.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},filterable:"",placeholder:"请输入关键词",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t[15]||(t[15]=e("h2",{id:"自定义样式",tabindex:"-1"},[n("自定义样式 "),e("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),t[16]||(t[16]=e("p",null,"支持自定义文本颜色、背景色和激活颜色。",-1)),d(l,{title:"自定义样式",code:`
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
`},{demo:r(()=>[d(i,{modelValue:u.value,"onUpdate:modelValue":t[5]||(t[5]=a=>u.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t[17]||(t[17]=s("",8)),t[18]||(t[18]=e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"事件名"),e("th",null,"说明"),e("th",null,"参数")])]),e("tbody",null,[e("tr",null,[e("td",null,"update:modelValue"),e("td",null,"值改变时触发"),e("td",null,"新的值")]),e("tr",null,[e("td",null,"change"),e("td",null,"值改变时触发"),e("td",null,"新的值")]),e("tr",null,[e("td",null,"clear"),e("td",null,"清空时触发"),e("td",null,"—")]),e("tr",null,[e("td",null,"check-change"),e("td",null,"节点复选状态改变时触发"),e("td",{checkedKeys:"",checkedNodes:""})])])],-1)),t[19]||(t[19]=s("",2))])}}});export{w as __pageData,C as default};

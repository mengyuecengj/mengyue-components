import{_ as b,a as i}from"./chunks/treeSelect.vue_vue_type_script_setup_true_lang.htKHRB31.js";import{I as f,o as N,c as g,a8 as s,J as d,w as r,j as t,a as o,A as n}from"./chunks/framework.DvHWw5tv.js";import"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import"./chunks/useStyleComputed.CediP0a2.js";const k={style:{"max-width":"600px"}},S=JSON.parse('{"title":"Tree","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/DataTree.md","filePath":"en/plus/DataTree.md"}'),x={name:"en/plus/DataTree.md"},w=Object.assign(x,{setup(C){const c=n(null),h=n([]),m=n([2,4]),p=n(null),u=n(null);return(v,e)=>{const a=f("ShowCode");return N(),g("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[6]||(e[6]=s("",5)),d(a,{title:"Basic Usage",code:`
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
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Root Node 2',
    children: [
      { id: 7, name: 'Child Node 2-1' }
    ]
  }
]
const handleNodeClick = (node) => {
  console.log('Node clicked:', node)
}
<\/script>
`},{demo:r(()=>[t("div",k,[d(b,{data:[{id:1,name:"Root Node 1",children:[{id:2,name:"Child Node 1-1"},{id:3,name:"Child Node 1-2",children:[{id:4,name:"Grandchild Node 1"},{id:5,name:"Grandchild Node 2"}]}]},{id:6,name:"Root Node 2",children:[{id:7,name:"Child Node 2-1"}]}],props:{label:"name",children:"children"},onNodeClick:e[0]||(e[0]=l=>console.log("Node clicked:",l))})])]),_:1}),e[7]||(e[7]=t("h2",{id:"tree-selector",tabindex:"-1"},[o("Tree Selector "),t("a",{class:"header-anchor",href:"#tree-selector","aria-label":"Permalink to “Tree Selector”"},"​")],-1)),e[8]||(e[8]=t("p",null,"Tree selector supports single selection, multiple selection, filtering, and other features.",-1)),e[9]||(e[9]=t("h3",{id:"single-selection-mode",tabindex:"-1"},[o("Single Selection Mode "),t("a",{class:"header-anchor",href:"#single-selection-mode","aria-label":"Permalink to “Single Selection Mode”"},"​")],-1)),d(a,{title:"Single Selection Mode",code:`
<template>
  <MYTreeSelect 
    v-model='selectedValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    placeholder='Please select'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValue = ref(null)
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Root Node 2',
    children: [
      { id: 7, name: 'Child Node 2-1' }
    ]
  }
]
<\/script>
`},{demo:r(()=>[d(i,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=l=>c.value=l),data:[{id:1,name:"Root Node 1",children:[{id:2,name:"Child Node 1-1"},{id:3,name:"Child Node 1-2",children:[{id:4,name:"Grandchild Node 1"},{id:5,name:"Grandchild Node 2"}]}]},{id:6,name:"Root Node 2",children:[{id:7,name:"Child Node 2-1"}]}],props:{label:"name",value:"id",children:"children"},placeholder:"Please select",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[10]||(e[10]=t("h3",{id:"multiple-selection-mode",tabindex:"-1"},[o("Multiple Selection Mode "),t("a",{class:"header-anchor",href:"#multiple-selection-mode","aria-label":"Permalink to “Multiple Selection Mode”"},"​")],-1)),d(a,{title:"Multiple Selection Mode",code:`
<template>
  <MYTreeSelect
    v-model='selectedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    placeholder='Please select'
    clearable />
</template>
<script setup>
import { ref } from 'vue'
const selectedValues = ref([])
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:r(()=>[d(i,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=l=>h.value=l),data:[{id:1,name:"Root Node 1",children:[{id:2,name:"Child Node 1-1"},{id:3,name:"Child Node 1-2",children:[{id:4,name:"Grandchild Node 1"},{id:5,name:"Grandchild Node 2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"",placeholder:"Please select",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[11]||(e[11]=t("h3",{id:"checkbox-mode",tabindex:"-1"},[o("Checkbox Mode "),t("a",{class:"header-anchor",href:"#checkbox-mode","aria-label":"Permalink to “Checkbox Mode”"},"​")],-1)),e[12]||(e[12]=t("p",null,"Supports checkbox selection with parent-child linkage options.",-1)),d(a,{title:"Checkbox Mode",code:`
<template>
  <MYTreeSelect 
    v-model='checkedValues'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    multiple
    show-checkbox
    :check-strictly='false'
    placeholder='Please select' />
</template>
<script setup>
import { ref } from 'vue'
const checkedValues = ref([2, 4])
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:r(()=>[d(i,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=l=>m.value=l),data:[{id:1,name:"Root Node 1",children:[{id:2,name:"Child Node 1-1"},{id:3,name:"Child Node 1-2",children:[{id:4,name:"Grandchild Node 1"},{id:5,name:"Grandchild Node 2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"","show-checkbox":"","check-strictly":!1,placeholder:"Please select",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[13]||(e[13]=t("h3",{id:"filtering",tabindex:"-1"},[o("Filtering "),t("a",{class:"header-anchor",href:"#filtering","aria-label":"Permalink to “Filtering”"},"​")],-1)),e[14]||(e[14]=t("p",null,"Supports input filtering for quick node lookup.",-1)),d(a,{title:"Filtering",code:`
<template>
  <MYTreeSelect 
    v-model='filteredValue'
    :data='treeData'
    :props='{ label: 'name', value: 'id', children: 'children' }'
    filterable
    placeholder='Enter keyword' />
</template>
<script setup>
import { ref } from 'vue'
const filteredValue = ref(null)
const treeData = [
  {
    id: 1,
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:r(()=>[d(i,{modelValue:p.value,"onUpdate:modelValue":e[4]||(e[4]=l=>p.value=l),data:[{id:1,name:"Root Node 1",children:[{id:2,name:"Child Node 1-1"},{id:3,name:"Child Node 1-2",children:[{id:4,name:"Grandchild Node 1"},{id:5,name:"Grandchild Node 2"}]}]}],props:{label:"name",value:"id",children:"children"},filterable:"",placeholder:"Enter keyword",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[15]||(e[15]=t("h2",{id:"custom-styling",tabindex:"-1"},[o("Custom Styling "),t("a",{class:"header-anchor",href:"#custom-styling","aria-label":"Permalink to “Custom Styling”"},"​")],-1)),e[16]||(e[16]=t("p",null,"Supports custom text color, background color, and active color.",-1)),d(a,{title:"Custom Styling",code:`
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
    name: 'Root Node 1',
    children: [
      { id: 2, name: 'Child Node 1-1' },
      {
        id: 3,
        name: 'Child Node 1-2',
        children: [
          { id: 4, name: 'Grandchild Node 1' },
          { id: 5, name: 'Grandchild Node 2' }
        ]
      }
    ]
  }
]
<\/script>
`},{demo:r(()=>[d(i,{modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=l=>u.value=l),data:[{id:1,name:"Root Node 1",children:[{id:2,name:"Child Node 1-1"},{id:3,name:"Child Node 1-2",children:[{id:4,name:"Grandchild Node 1"},{id:5,name:"Grandchild Node 2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[17]||(e[17]=s("",8)),e[18]||(e[18]=t("table",{tabindex:"0"},[t("thead",null,[t("tr",null,[t("th",null,"Event Name"),t("th",null,"Description"),t("th",null,"Parameters")])]),t("tbody",null,[t("tr",null,[t("td",null,"update:modelValue"),t("td",null,"Triggered when value changes"),t("td",null,"New value")]),t("tr",null,[t("td",null,"change"),t("td",null,"Triggered when value changes"),t("td",null,"New value")]),t("tr",null,[t("td",null,"clear"),t("td",null,"Triggered on clear"),t("td",null,"—")]),t("tr",null,[t("td",null,"check-change"),t("td",null,"Triggered when node checkbox state changes"),t("td",{checkedKeys:"",checkedNodes:""})])])],-1)),e[19]||(e[19]=s("",2))])}}});export{S as __pageData,w as default};

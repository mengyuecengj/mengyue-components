import{_ as b,a as i}from"./chunks/treeSelect.vue_vue_type_script_setup_true_lang.htKHRB31.js";import{I as f,o as v,c as x,a8 as s,J as d,w as r,j as e,a as n,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import"./chunks/useStyleComputed.CediP0a2.js";const k={style:{"max-width":"600px"}},w=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTree.md","filePath":"components/DataTree.md"}'),T={name:"components/DataTree.md"},C=Object.assign(T,{setup(V){const h=o(null),m=o([]),c=o([2,4]),p=o(null),u=o(null);return(y,t)=>{const l=f("ShowCode");return v(),x("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[t[6]||(t[6]=s('<h1 id="tree-树形控件" tabindex="-1">Tree 树形控件 <a class="header-anchor" href="#tree-树形控件" aria-label="Permalink to “Tree 树形控件”">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to “简介”">​</a></h2><p>树形控件用于展示层级结构数据，支持展开/收起、选中、复选等功能。可以用于组织架构、文件目录、分类等场景。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a></h2><p>基础的树形结构展示，支持节点点击事件。</p>',5)),d(l,{title:"基础用法",code:`
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
`},{demo:r(()=>[d(i,{modelValue:u.value,"onUpdate:modelValue":t[5]||(t[5]=a=>u.value=a),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),t[17]||(t[17]=s('<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="tree-props" tabindex="-1">Tree Props <a class="header-anchor" href="#tree-props" aria-label="Permalink to “Tree Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>树数据</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>props</td><td>配置选项</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>default-expanded</td><td>是否默认展开所有节点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>默认展开节点的 key 数组</td><td>array</td><td>—</td><td>[]</td></tr></tbody></table><h3 id="tree-events" tabindex="-1">Tree Events <a class="header-anchor" href="#tree-events" aria-label="Permalink to “Tree Events”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>node-click</td><td>节点被点击时触发</td><td>点击的节点数据</td></tr></tbody></table><h3 id="treeselect-props" tabindex="-1">TreeSelect Props <a class="header-anchor" href="#treeselect-props" aria-label="Permalink to “TreeSelect Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>绑定值</td><td>string / number / array</td><td>—</td><td>null</td></tr><tr><td>data</td><td>树数据</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>props</td><td>配置选项</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>multiple</td><td>是否多选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filterable</td><td>是否可过滤</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>占位符</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>defaultExpanded</td><td>是否默认展开所有节点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>default / small / large</td><td>default</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>是否可清空</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading</td><td>是否显示加载状态</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popperClass</td><td>下拉框自定义类名</td><td>string</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>class</td><td>自定义类名</td><td>string</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>style</td><td>自定义样式</td><td>string / object</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>defaultExpandedKeys</td><td>默认展开节点的 key 数组</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>showCheckbox</td><td>节点是否可被复选</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>checkStrictly</td><td>复选框是否严格模式（父子不互相关联）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>defaultCheckedKeys</td><td>默认选中的节点 key 数组</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>textColor</td><td>文本颜色</td><td>string</td><td>—</td><td>#606266</td></tr><tr><td>backgroundColor</td><td>背景颜色</td><td>string</td><td>—</td><td>#fff</td></tr><tr><td>activeColor</td><td>激活颜色</td><td>string</td><td>—</td><td>#409eff</td></tr><tr><td>width</td><td>宽度</td><td>string / number</td><td>—</td><td>100%</td></tr><tr><td>height</td><td>高度</td><td>string / number</td><td>—</td><td>auto</td></tr><tr><td>inputHeight</td><td>输入框高度</td><td>string / number</td><td>—</td><td>32px</td></tr><tr><td>validateEvent</td><td>是否触发表单验证</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showArrow</td><td>是否显示箭头</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>arrowType</td><td>箭头类型</td><td>string</td><td>—</td><td>arrow</td></tr><tr><td>arrowColor</td><td>箭头颜色</td><td>string</td><td>—</td><td>#909399</td></tr></tbody></table><h3 id="treeselect-events" tabindex="-1">TreeSelect Events <a class="header-anchor" href="#treeselect-events" aria-label="Permalink to “TreeSelect Events”">​</a></h3>',8)),t[18]||(t[18]=e("table",{tabindex:"0"},[e("thead",null,[e("tr",null,[e("th",null,"事件名"),e("th",null,"说明"),e("th",null,"参数")])]),e("tbody",null,[e("tr",null,[e("td",null,"update:modelValue"),e("td",null,"值改变时触发"),e("td",null,"新的值")]),e("tr",null,[e("td",null,"change"),e("td",null,"值改变时触发"),e("td",null,"新的值")]),e("tr",null,[e("td",null,"clear"),e("td",null,"清空时触发"),e("td",null,"—")]),e("tr",null,[e("td",null,"check-change"),e("td",null,"节点复选状态改变时触发"),e("td",{checkedKeys:"",checkedNodes:""})])])],-1)),t[19]||(t[19]=s('<h3 id="tree-props-配置项" tabindex="-1">Tree Props 配置项 <a class="header-anchor" href="#tree-props-配置项" aria-label="Permalink to “Tree Props 配置项”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>指定节点标签为节点对象的某个属性值</td><td>string</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>指定子树为节点对象的某个属性值</td><td>string</td><td>&#39;children&#39;</td></tr><tr><td>value</td><td>指定节点选择框为节点对象的某个属性值</td><td>string</td><td>&#39;id&#39;</td></tr></tbody></table>',2))])}}});export{w as __pageData,C as default};

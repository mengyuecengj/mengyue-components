import{_ as m,a as r}from"./chunks/treeSelect.vue_vue_type_script_setup_true_lang.htKHRB31.js";import{I as f,o as y,c as x,a8 as h,J as i,w as s,j as a,a as n,A as l}from"./chunks/framework.DvHWw5tv.js";import"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import"./chunks/useStyleComputed.CediP0a2.js";const z={style:{"max-width":"600px"}},P=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"plus/DataTree.md","filePath":"plus/DataTree.md"}'),j={name:"plus/DataTree.md"},w=Object.assign(j,{setup(b){const u=l(null),p=l([]),o=l([2,4]),g=l(null),c=l(null);return(k,e)=>{const t=f("ShowCode");return y(),x("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[e[6]||(e[6]=h("",5)),i(t,{title:"基础用法",code:`
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
`},{demo:s(()=>[a("div",z,[i(m,{data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",children:"children"},onNodeClick:e[0]||(e[0]=d=>console.log("点击节点:",d))})])]),_:1}),e[7]||(e[7]=h("",3)),i(t,{title:"单选模式",code:`
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
`},{demo:s(()=>[i(r,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=d=>u.value=d),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",value:"id",children:"children"},placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[8]||(e[8]=a("h3",{id:"多选模式",tabindex:"-1"},[n("多选模式 "),a("a",{class:"header-anchor",href:"#多选模式","aria-label":"Permalink to “多选模式”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duoxuanmoshi duo xuan mo shi dxms ")],-1)),i(t,{title:"多选模式",code:`
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
`},{demo:s(()=>[i(r,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=d=>p.value=d),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"",placeholder:"请选择",clearable:"",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[9]||(e[9]=a("h3",{id:"复选框模式",tabindex:"-1"},[n("复选框模式 "),a("a",{class:"header-anchor",href:"#复选框模式","aria-label":"Permalink to “复选框模式”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"fuxuankuangmoshi fu xuan kuang mo shi fxkms ")],-1)),e[10]||(e[10]=a("p",null,[n("支持复选框选择，可设置父子节点联动关系。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhichifuxuankuangxuanze，keshezhifuzijiedianliandongguanxi。 zhi chi fu xuan kuang xuan ze ， ke she zhi fu zi jie dian lian dong guan xi 。 zcfxkxz，kszfzjdldgx。")],-1)),i(t,{title:"复选框模式",code:`
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
`},{demo:s(()=>[i(r,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=d=>o.value=d),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},multiple:"","show-checkbox":"","check-strictly":!1,placeholder:"请选择",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[11]||(e[11]=a("h3",{id:"过滤功能",tabindex:"-1"},[n("过滤功能 "),a("a",{class:"header-anchor",href:"#过滤功能","aria-label":"Permalink to “过滤功能”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"guolvgongneng guo lv gong neng glgn ")],-1)),e[12]||(e[12]=a("p",null,[n("支持输入过滤，快速查找节点。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhichishuruguolv，kuaisuchazhaojiedian。 zhi chi shu ru guo lv ， kuai su cha zhao jie dian 。 zcsrgl，ksczjd。")],-1)),i(t,{title:"过滤功能",code:`
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
`},{demo:s(()=>[i(r,{modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=d=>g.value=d),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},filterable:"",placeholder:"请输入关键词",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[13]||(e[13]=a("h2",{id:"自定义样式",tabindex:"-1"},[n("自定义样式 "),a("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyangshi zi ding yi yang shi zdyys ")],-1)),e[14]||(e[14]=a("p",null,[n("支持自定义文本颜色、背景色和激活颜色。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhichizidingyiwenbenyanse、beijingsehejihuoyanse。 zhi chi zi ding yi wen ben yan se 、 bei jing se he ji huo yan se 。 zczdywbys、bjshjhys。")],-1)),i(t,{title:"自定义样式",code:`
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
`},{demo:s(()=>[i(r,{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=d=>c.value=d),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[15]||(e[15]=h("",8)),e[16]||(e[16]=a("table",{tabindex:"0"},[a("thead",null,[a("tr",null,[a("th",null,[n("事件名"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shijianming shi jian ming sjm")]),a("th",null,[n("说明"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shuoming shuo ming sm")]),a("th",null,[n("参数"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"canshu can shu cs")])])]),a("tbody",null,[a("tr",null,[a("td",null,"update:modelValue"),a("td",null,[n("值改变时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhigaibianshichufa zhi gai bian shi chu fa zgbscf")]),a("td",null,[n("新的值"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xindezhi xin de zhi xdz")])]),a("tr",null,[a("td",null,"change"),a("td",null,[n("值改变时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhigaibianshichufa zhi gai bian shi chu fa zgbscf")]),a("td",null,[n("新的值"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xindezhi xin de zhi xdz")])]),a("tr",null,[a("td",null,"clear"),a("td",null,[n("清空时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"qingkongshichufa qing kong shi chu fa qkscf")]),a("td",null,"—")]),a("tr",null,[a("td",null,"check-change"),a("td",null,[n("节点复选状态改变时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jiedianfuxuanzhuangtaigaibianshichufa jie dian fu xuan zhuang tai gai bian shi chu fa jdfxztgbscf")]),a("td",{checkedKeys:"",checkedNodes:""})])])],-1)),e[17]||(e[17]=h("",2))])}}});export{P as __pageData,w as default};

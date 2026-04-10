import{_ as m,a as r}from"./chunks/treeSelect.vue_vue_type_script_setup_true_lang.htKHRB31.js";import{I as f,o as y,c as x,a8 as h,J as i,w as s,j as a,a as n,A as l}from"./chunks/framework.DvHWw5tv.js";import"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import"./chunks/useStyleComputed.CediP0a2.js";const z={style:{"max-width":"600px"}},P=JSON.parse('{"title":"Tree 树形控件","description":"","frontmatter":{},"headers":[],"relativePath":"plus/DataTree.md","filePath":"plus/DataTree.md"}'),j={name:"plus/DataTree.md"},w=Object.assign(j,{setup(b){const u=l(null),p=l([]),o=l([2,4]),g=l(null),c=l(null);return(k,e)=>{const t=f("ShowCode");return y(),x("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[e[6]||(e[6]=h('<h1 id="tree-树形控件" tabindex="-1">Tree 树形控件 <a class="header-anchor" href="#tree-树形控件" aria-label="Permalink to “Tree 树形控件”">​</a><span class="pagefind-pinyin" aria-hidden="true">Tree shuxingkongjian Tree shu xing kong jian Tsxkj </span></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to “简介”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianjie jian jie jj </span></h2><p>树形控件用于展示层级结构数据，支持展开/收起、选中、复选等功能。可以用于组织架构、文件目录、分类等场景。<span class="pagefind-pinyin" aria-hidden="true">shuxingkongjianyongyuzhanshicengjijiegoushuju，zhichizhankai/shouqi、xuanzhong、fuxuandenggongneng。keyiyongyuzuzhijiagou、wenjianmulu、fenleidengchangjing。 shu xing kong jian yong yu zhan shi ceng ji jie gou shu ju ， zhi chi zhan kai / shou qi 、 xuan zhong 、 fu xuan deng gong neng 。 ke yi yong yu zu zhi jia gou 、 wen jian mu lu 、 fen lei deng chang jing 。 sxkjyyzscjjgsj，zczk/sq、xz、fxdgn。kyyyzzjg、wjml、fldcj。</span></p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichuyongfa ji chu yong fa jcyf </span></h2><p>基础的树形结构展示，支持节点点击事件。<span class="pagefind-pinyin" aria-hidden="true">jichudeshuxingjiegouzhanshi，zhichijiediandianjishijian。 ji chu de shu xing jie gou zhan shi ， zhi chi jie dian dian ji shi jian 。 jcdsxjgzs，zcjddjsj。</span></p>',5)),i(t,{title:"基础用法",code:`
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
`},{demo:s(()=>[a("div",z,[i(m,{data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]},{id:6,name:"一级节点2",children:[{id:7,name:"二级节点2-1"}]}],props:{label:"name",children:"children"},onNodeClick:e[0]||(e[0]=d=>console.log("点击节点:",d))})])]),_:1}),e[7]||(e[7]=h('<h2 id="树选择器" tabindex="-1">树选择器 <a class="header-anchor" href="#树选择器" aria-label="Permalink to “树选择器”">​</a><span class="pagefind-pinyin" aria-hidden="true">shuxuanzeqi shu xuan ze qi sxzq </span></h2><p>树形选择器，支持单选、多选、过滤等功能。<span class="pagefind-pinyin" aria-hidden="true">shuxingxuanzeqi，zhichidanxuan、duoxuan、guolvdenggongneng。 shu xing xuan ze qi ， zhi chi dan xuan 、 duo xuan 、 guo lv deng gong neng 。 sxxzq，zcdx、dx、gldgn。</span></p><h3 id="单选模式" tabindex="-1">单选模式 <a class="header-anchor" href="#单选模式" aria-label="Permalink to “单选模式”">​</a><span class="pagefind-pinyin" aria-hidden="true">danxuanmoshi dan xuan mo shi dxms </span></h3>',3)),i(t,{title:"单选模式",code:`
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
`},{demo:s(()=>[i(r,{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=d=>c.value=d),data:[{id:1,name:"一级节点1",children:[{id:2,name:"二级节点1-1"},{id:3,name:"二级节点1-2",children:[{id:4,name:"三级节点1"},{id:5,name:"三级节点2"}]}]}],props:{label:"name",value:"id",children:"children"},"background-color":"#2d2d2d","text-color":"#eaeaea","active-color":"#409eff",style:{width:"240px"}},null,8,["modelValue"])]),_:1}),e[15]||(e[15]=h('<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="tree-props" tabindex="-1">Tree Props <a class="header-anchor" href="#tree-props" aria-label="Permalink to “Tree Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>data</td><td>树数据<span class="pagefind-pinyin" aria-hidden="true">shushuju shu shu ju ssj</span></td><td>array</td><td>—</td><td>[]</td></tr><tr><td>props</td><td>配置选项<span class="pagefind-pinyin" aria-hidden="true">peizhixuanxiang pei zhi xuan xiang pzxx</span></td><td>object</td><td>—</td><td>{}</td></tr><tr><td>default-expanded</td><td>是否默认展开所有节点<span class="pagefind-pinyin" aria-hidden="true">shifoumorenzhankaisuoyoujiedian shi fou mo ren zhan kai suo you jie dian sfmrzksyjd</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expanded-keys</td><td>默认展开节点的 key 数组<span class="pagefind-pinyin" aria-hidden="true">morenzhankaijiediande key shuzu mo ren zhan kai jie dian de key shu zu mrzkjdd sz</span></td><td>array</td><td>—</td><td>[]</td></tr></tbody></table><h3 id="tree-events" tabindex="-1">Tree Events <a class="header-anchor" href="#tree-events" aria-label="Permalink to “Tree Events”">​</a></h3><table tabindex="0"><thead><tr><th>事件名<span class="pagefind-pinyin" aria-hidden="true">shijianming shi jian ming sjm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th></tr></thead><tbody><tr><td>node-click</td><td>节点被点击时触发<span class="pagefind-pinyin" aria-hidden="true">jiedianbeidianjishichufa jie dian bei dian ji shi chu fa jdbdjscf</span></td><td>点击的节点数据<span class="pagefind-pinyin" aria-hidden="true">dianjidejiedianshuju dian ji de jie dian shu ju djdjdsj</span></td></tr></tbody></table><h3 id="treeselect-props" tabindex="-1">TreeSelect Props <a class="header-anchor" href="#treeselect-props" aria-label="Permalink to “TreeSelect Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>绑定值<span class="pagefind-pinyin" aria-hidden="true">bangdingzhi bang ding zhi bdz</span></td><td>string / number / array</td><td>—</td><td>null</td></tr><tr><td>data</td><td>树数据<span class="pagefind-pinyin" aria-hidden="true">shushuju shu shu ju ssj</span></td><td>array</td><td>—</td><td>[]</td></tr><tr><td>props</td><td>配置选项<span class="pagefind-pinyin" aria-hidden="true">peizhixuanxiang pei zhi xuan xiang pzxx</span></td><td>object</td><td>—</td><td>{}</td></tr><tr><td>multiple</td><td>是否多选<span class="pagefind-pinyin" aria-hidden="true">shifouduoxuan shi fou duo xuan sfdx</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>filterable</td><td>是否可过滤<span class="pagefind-pinyin" aria-hidden="true">shifoukeguolv shi fou ke guo lv sfkgl</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placeholder</td><td>占位符<span class="pagefind-pinyin" aria-hidden="true">zhanweifu zhan wei fu zwf</span></td><td>string</td><td>—</td><td>请选择<span class="pagefind-pinyin" aria-hidden="true">qingxuanze qing xuan ze qxz</span></td></tr><tr><td>defaultExpanded</td><td>是否默认展开所有节点<span class="pagefind-pinyin" aria-hidden="true">shifoumorenzhankaisuoyoujiedian shi fou mo ren zhan kai suo you jie dian sfmrzksyjd</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸<span class="pagefind-pinyin" aria-hidden="true">chicun chi cun cc</span></td><td>string</td><td>default / small / large</td><td>default</td></tr><tr><td>disabled</td><td>是否禁用<span class="pagefind-pinyin" aria-hidden="true">shifoujinyong shi fou jin yong sfjy</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>是否可清空<span class="pagefind-pinyin" aria-hidden="true">shifoukeqingkong shi fou ke qing kong sfkqk</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>loading</td><td>是否显示加载状态<span class="pagefind-pinyin" aria-hidden="true">shifouxianshijiazaizhuangtai shi fou xian shi jia zai zhuang tai sfxsjzzt</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>popperClass</td><td>下拉框自定义类名<span class="pagefind-pinyin" aria-hidden="true">xialakuangzidingyileiming xia la kuang zi ding yi lei ming xlkzdylm</span></td><td>string</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>class</td><td>自定义类名<span class="pagefind-pinyin" aria-hidden="true">zidingyileiming zi ding yi lei ming zdylm</span></td><td>string</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>style</td><td>自定义样式<span class="pagefind-pinyin" aria-hidden="true">zidingyiyangshi zi ding yi yang shi zdyys</span></td><td>string / object</td><td>—</td><td>&#39;&#39;</td></tr><tr><td>defaultExpandedKeys</td><td>默认展开节点的 key 数组<span class="pagefind-pinyin" aria-hidden="true">morenzhankaijiediande key shuzu mo ren zhan kai jie dian de key shu zu mrzkjdd sz</span></td><td>array</td><td>—</td><td>[]</td></tr><tr><td>showCheckbox</td><td>节点是否可被复选<span class="pagefind-pinyin" aria-hidden="true">jiedianshifoukebeifuxuan jie dian shi fou ke bei fu xuan jdsfkbfx</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>checkStrictly</td><td>复选框是否严格模式（父子不互相关联）<span class="pagefind-pinyin" aria-hidden="true">fuxuankuangshifouyangemoshi（fuzibuhuxiangguanlian） fu xuan kuang shi fou yan ge mo shi （ fu zi bu hu xiang guan lian ） fxksfygms（fzbhxgl）</span></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>defaultCheckedKeys</td><td>默认选中的节点 key 数组<span class="pagefind-pinyin" aria-hidden="true">morenxuanzhongdejiedian key shuzu mo ren xuan zhong de jie dian key shu zu mrxzdjd sz</span></td><td>array</td><td>—</td><td>[]</td></tr><tr><td>textColor</td><td>文本颜色<span class="pagefind-pinyin" aria-hidden="true">wenbenyanse wen ben yan se wbys</span></td><td>string</td><td>—</td><td>#606266</td></tr><tr><td>backgroundColor</td><td>背景颜色<span class="pagefind-pinyin" aria-hidden="true">beijingyanse bei jing yan se bjys</span></td><td>string</td><td>—</td><td>#fff</td></tr><tr><td>activeColor</td><td>激活颜色<span class="pagefind-pinyin" aria-hidden="true">jihuoyanse ji huo yan se jhys</span></td><td>string</td><td>—</td><td>#409eff</td></tr><tr><td>width</td><td>宽度<span class="pagefind-pinyin" aria-hidden="true">kuandu kuan du kd</span></td><td>string / number</td><td>—</td><td>100%</td></tr><tr><td>height</td><td>高度<span class="pagefind-pinyin" aria-hidden="true">gaodu gao du gd</span></td><td>string / number</td><td>—</td><td>auto</td></tr><tr><td>inputHeight</td><td>输入框高度<span class="pagefind-pinyin" aria-hidden="true">shurukuanggaodu shu ru kuang gao du srkgd</span></td><td>string / number</td><td>—</td><td>32px</td></tr></tbody></table><h3 id="treeselect-events" tabindex="-1">TreeSelect Events <a class="header-anchor" href="#treeselect-events" aria-label="Permalink to “TreeSelect Events”">​</a></h3>',8)),e[16]||(e[16]=a("table",{tabindex:"0"},[a("thead",null,[a("tr",null,[a("th",null,[n("事件名"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shijianming shi jian ming sjm")]),a("th",null,[n("说明"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shuoming shuo ming sm")]),a("th",null,[n("参数"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"canshu can shu cs")])])]),a("tbody",null,[a("tr",null,[a("td",null,"update:modelValue"),a("td",null,[n("值改变时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhigaibianshichufa zhi gai bian shi chu fa zgbscf")]),a("td",null,[n("新的值"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xindezhi xin de zhi xdz")])]),a("tr",null,[a("td",null,"change"),a("td",null,[n("值改变时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhigaibianshichufa zhi gai bian shi chu fa zgbscf")]),a("td",null,[n("新的值"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xindezhi xin de zhi xdz")])]),a("tr",null,[a("td",null,"clear"),a("td",null,[n("清空时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"qingkongshichufa qing kong shi chu fa qkscf")]),a("td",null,"—")]),a("tr",null,[a("td",null,"check-change"),a("td",null,[n("节点复选状态改变时触发"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jiedianfuxuanzhuangtaigaibianshichufa jie dian fu xuan zhuang tai gai bian shi chu fa jdfxztgbscf")]),a("td",{checkedKeys:"",checkedNodes:""})])])],-1)),e[17]||(e[17]=h('<h3 id="tree-props-配置项" tabindex="-1">Tree Props 配置项 <a class="header-anchor" href="#tree-props-配置项" aria-label="Permalink to “Tree Props 配置项”">​</a><span class="pagefind-pinyin" aria-hidden="true">Tree Props peizhixiang Tree Props pei zhi xiang Tpzx </span></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>label</td><td>指定节点标签为节点对象的某个属性值<span class="pagefind-pinyin" aria-hidden="true">zhidingjiedianbiaoqianweijiedianduixiangdemougeshuxingzhi zhi ding jie dian biao qian wei jie dian dui xiang de mou ge shu xing zhi zdjdbqwjddxdmgsxz</span></td><td>string</td><td>&#39;label&#39;</td></tr><tr><td>children</td><td>指定子树为节点对象的某个属性值<span class="pagefind-pinyin" aria-hidden="true">zhidingzishuweijiedianduixiangdemougeshuxingzhi zhi ding zi shu wei jie dian dui xiang de mou ge shu xing zhi zdzswjddxdmgsxz</span></td><td>string</td><td>&#39;children&#39;</td></tr><tr><td>value</td><td>指定节点选择框为节点对象的某个属性值<span class="pagefind-pinyin" aria-hidden="true">zhidingjiedianxuanzekuangweijiedianduixiangdemougeshuxingzhi zhi ding jie dian xuan ze kuang wei jie dian dui xiang de mou ge shu xing zhi zdjdxzkwjddxdmgsxz</span></td><td>string</td><td>&#39;id&#39;</td></tr></tbody></table>',2))])}}});export{P as __pageData,w as default};

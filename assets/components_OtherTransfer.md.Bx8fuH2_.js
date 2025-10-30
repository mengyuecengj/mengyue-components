import{u as O}from"./chunks/useStyleComputed.C3Tfj8Jd.js";import{d as E,c as D,o as A,O as _,k as C,j as a,t as P,G as Y,H as $,n as w,a as r,x as i,h as V,J as d,I,ah as S,w as m}from"./chunks/framework.CMpBhb2-.js";const F=f=>({transferStyle:O(f,{propToStyleMap:{backgroundColor:"background-color",colorText:"color",hoverBackground:"transparent"}})}),M={modelValue:{type:Array,default:()=>[]},data:{type:Array,default:[]},backgroundColor:{type:String,default:""},colorText:{type:String,default:""},hoverBackground:{type:String,default:""},titles:{type:Array,default:()=>[]}},N={...M,title:{type:String,default:""},data:{type:Array,default:[]},selected:{type:Array,default:[]},colorText:{type:String,default:""},hoverBackground:{type:String,default:""}},j={class:"transfer-panel__title"},L={class:"transfer-panel__list"},R=["onClick"],z=["checked","disabled"],U=E({name:"MYTransferPanel",__name:"transferPanel",props:N,emits:["update:selected"],setup(f,{emit:b}){const s=f,c=b,u=l=>{if(l.disabled)return;const h=[...s.selected],t=h.indexOf(l.key);t>-1?h.splice(t,1):h.push(l.key),c("update:selected",h)},{transferStyle:k}=F(s);return(l,h)=>(A(),D("div",{class:"transfer-panel",style:_({...C(k),"--hover-background":l.hoverBackground})},[a("div",j,P(l.title),1),a("ul",L,[(A(!0),D(Y,null,$(l.data,t=>(A(),D("li",{key:t.key,class:w(["transfer-panel__item",{"is-disabled":t.disabled,"is-selected":l.selected.includes(t.key)}]),style:_({"--hover-background":l.hoverBackground}),onClick:v=>u(t)},[a("input",{class:"transfer-panel__checkbox",type:"checkbox",checked:l.selected.includes(t.key),disabled:t.disabled},null,8,z),r(" "+P(t.label),1)],14,R))),128))])],4))}}),J={class:"my-transfer"},K={class:"my-transfer__buttons"},G=["disabled"],H=["disabled"],g=E({name:"MYTransfer",__name:"transfer",props:M,emits:["update:modelValue"],setup(f,{emit:b}){const s=f,c=b,u=i([]),k=i([]),l=V(()=>s.data.filter(n=>!s.modelValue.includes(n.key))),h=V(()=>s.data.filter(n=>s.modelValue.includes(n.key))),t=V(()=>s.titles?.[0]),v=V(()=>s.titles?.[1]),x=()=>{const n=[...s.modelValue,...u.value];c("update:modelValue",n),u.value=[]},B=()=>{const n=s.modelValue.filter(o=>!k.value.includes(o));c("update:modelValue",n),k.value=[]},{transferStyle:T}=F(s);return(n,o)=>(A(),D("div",J,[d(U,{selected:u.value,"onUpdate:selected":o[0]||(o[0]=e=>u.value=e),title:t.value,data:l.value,style:_(C(T)),hoverBackground:n.hoverBackground},null,8,["selected","title","data","style","hoverBackground"]),a("div",K,[a("button",{disabled:!u.value.length,onClick:x},"→",8,G),a("button",{disabled:!k.value.length,onClick:B},"←",8,H)]),d(U,{selected:k.value,"onUpdate:selected":o[1]||(o[1]=e=>k.value=e),title:v.value,data:h.value,style:_(C(T)),hoverBackground:n.hoverBackground},null,8,["selected","title","data","style","hoverBackground"])]))}}),q={style:{"margin-top":"16px"}},Z=JSON.parse('{"title":"Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherTransfer.md","filePath":"components/OtherTransfer.md"}'),Q={name:"components/OtherTransfer.md"},ee=Object.assign(Q,{setup(f){const b=i([1,2]),s=i([{key:1,label:"选项一",disabled:!1},{key:2,label:"选项二",disabled:!1},{key:3,label:"选项三",disabled:!1},{key:4,label:"选项四",disabled:!1},{key:5,label:"禁用选项",disabled:!0}]),c=i([2,4]),u=i([{key:1,label:"苹果",disabled:!1},{key:2,label:"香蕉",disabled:!1},{key:3,label:"橙子",disabled:!1},{key:4,label:"葡萄",disabled:!1},{key:5,label:"芒果",disabled:!1}]),k=i([1,3]),l=i([{key:1,label:"选项一",disabled:!1},{key:2,label:"选项二",disabled:!1},{key:3,label:"选项三",disabled:!1},{key:4,label:"选项四",disabled:!1}]),h=i([2,5]),t=i([{key:1,label:"项目一",disabled:!1},{key:2,label:"项目二",disabled:!1},{key:3,label:"项目三",disabled:!1},{key:4,label:"项目四",disabled:!1},{key:5,label:"项目五",disabled:!1}]),v=i([2]),x=i([{key:1,label:"可选项一",disabled:!1},{key:2,label:"可选项二",disabled:!1},{key:3,label:"禁用选项一",disabled:!0},{key:4,label:"可选项三",disabled:!1},{key:5,label:"禁用选项二",disabled:!0},{key:6,label:"可选项四",disabled:!1}]),B=i([101,103]),T=i([{key:101,label:"张三",disabled:!1},{key:102,label:"李四",disabled:!1},{key:103,label:"王五",disabled:!1},{key:104,label:"赵六",disabled:!1},{key:105,label:"钱七",disabled:!1}]),n=V(()=>T.value.filter(o=>B.value.includes(o.key)).map(o=>o.label).join(", "));return(o,e)=>{const y=I("ShowCode");return A(),D("div",null,[e[6]||(e[6]=S('<h1 id="transfer" tabindex="-1">Transfer <a class="header-anchor" href="#transfer" aria-label="Permalink to “Transfer”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Transfer 穿梭框组件，用于在两栏中移动数据选项。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYTransfer&gt;&lt;/MYTransfer&gt;</code> 来实现数据穿梭功能。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础穿梭框" tabindex="-1">基础穿梭框 <a class="header-anchor" href="#基础穿梭框" aria-label="Permalink to “基础穿梭框”">​</a></h3><p>基础的穿梭框组件，支持数据在左右两栏之间移动。</p>',6)),d(y,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['列表一', '列表二']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 2])
const data = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false },
  { key: 5, label: '禁用选项', disabled: true }
])
<\/script>
  `.trim()},{demo:m(()=>[d(g,{modelValue:b.value,"onUpdate:modelValue":e[0]||(e[0]=p=>b.value=p),data:s.value,titles:["列表一","列表二"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[7]||(e[7]=a("h3",{id:"自定义标题",tabindex:"-1"},[r("自定义标题 "),a("a",{class:"header-anchor",href:"#自定义标题","aria-label":"Permalink to “自定义标题”"},"​")],-1)),e[8]||(e[8]=a("p",null,[r("使用 "),a("code",null,"titles"),r(" 属性自定义左右两栏的标题。")],-1)),d(y,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['源列表', '目标列表']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 4])
const data = ref([
  { key: 1, label: '苹果', disabled: false },
  { key: 2, label: '香蕉', disabled: false },
  { key: 3, label: '橙子', disabled: false },
  { key: 4, label: '葡萄', disabled: false },
  { key: 5, label: '芒果', disabled: false }
])
<\/script>
  `.trim()},{demo:m(()=>[d(g,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=p=>c.value=p),data:u.value,titles:["源列表","目标列表"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[9]||(e[9]=a("h3",{id:"自定义颜色",tabindex:"-1"},[r("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),e[10]||(e[10]=a("p",null,[r("使用 "),a("code",null,"backgroundColor"),r("、"),a("code",null,"colorText"),r(" 和 "),a("code",null,"hoverBackground"),r(" 属性自定义穿梭框的颜色。")],-1)),d(y,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#f0f9ff'
    color-text='#0369a1'
    hover-background='#e0f2fe'
    :titles='['浅色主题', '浅色主题']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 3])
const data = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false }
])
<\/script>
  `.trim()},{demo:m(()=>[d(g,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=p=>k.value=p),data:l.value,"background-color":"#f0f9ff","color-text":"#0369a1","hover-background":"#e0f2fe",titles:["浅色主题","浅色主题"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[11]||(e[11]=a("h3",{id:"深色主题",tabindex:"-1"},[r("深色主题 "),a("a",{class:"header-anchor",href:"#深色主题","aria-label":"Permalink to “深色主题”"},"​")],-1)),e[12]||(e[12]=a("p",null,"使用深色背景创建深色主题的穿梭框。",-1)),d(y,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#1e293b'
    color-text='#f1f5f9'
    hover-background='#334155'
    :titles='['深色主题', '深色主题']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 5])
const data = ref([
  { key: 1, label: '项目一', disabled: false },
  { key: 2, label: '项目二', disabled: false },
  { key: 3, label: '项目三', disabled: false },
  { key: 4, label: '项目四', disabled: false },
  { key: 5, label: '项目五', disabled: false }
])
<\/script>
  `.trim()},{demo:m(()=>[d(g,{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=p=>h.value=p),data:t.value,"background-color":"#1e293b","color-text":"#f1f5f9","hover-background":"#334155",titles:["深色主题","深色主题"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[13]||(e[13]=a("h3",{id:"禁用选项",tabindex:"-1"},[r("禁用选项 "),a("a",{class:"header-anchor",href:"#禁用选项","aria-label":"Permalink to “禁用选项”"},"​")],-1)),e[14]||(e[14]=a("p",null,"数据中包含禁用选项，用户无法选择或移动这些选项。",-1)),d(y,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['可选列表', '已选列表']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2])
const data = ref([
  { key: 1, label: '可选项一', disabled: false },
  { key: 2, label: '可选项二', disabled: false },
  { key: 3, label: '禁用选项一', disabled: true },
  { key: 4, label: '可选项三', disabled: false },
  { key: 5, label: '禁用选项二', disabled: true },
  { key: 6, label: '可选项四', disabled: false }
])
<\/script>
  `.trim()},{demo:m(()=>[d(g,{modelValue:v.value,"onUpdate:modelValue":e[4]||(e[4]=p=>v.value=p),data:x.value,titles:["可选列表","已选列表"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[15]||(e[15]=a("h3",{id:"动态数据",tabindex:"-1"},[r("动态数据 "),a("a",{class:"header-anchor",href:"#动态数据","aria-label":"Permalink to “动态数据”"},"​")],-1)),e[16]||(e[16]=a("p",null,"结合动态数据源创建穿梭框。",-1)),d(y,{title:"代码演示",code:`
<template>
  <div>
    <MYTransfer 
      v-model='selectedUsers'
      :data='users'
      :titles='['所有用户', '已选用户']'
    />
    <div style='margin-top: 16px;'>
      <p>已选择用户: {{ selectedUsersLabels }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: '张三', disabled: false },
  { key: 102, label: '李四', disabled: false },
  { key: 103, label: '王五', disabled: false },
  { key: 104, label: '赵六', disabled: false },
  { key: 105, label: '钱七', disabled: false }
])
const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
<\/script>
  `.trim()},{demo:m(()=>[a("div",null,[d(g,{modelValue:B.value,"onUpdate:modelValue":e[5]||(e[5]=p=>B.value=p),data:T.value,titles:["所有用户","已选用户"]},null,8,["modelValue","data"]),a("div",q,[a("p",null,"已选择用户: "+P(n.value),1)])])]),_:1},8,["code"]),e[17]||(e[17]=S(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="transfer-props" tabindex="-1">Transfer Props <a class="header-anchor" href="#transfer-props" aria-label="Permalink to “Transfer Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>选中项的 key 数组</td><td>number[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>data</td><td>数据源</td><td>Option[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>titles</td><td>自定义左右列表的标题</td><td>string[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>backgroundColor</td><td>背景颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>colorText</td><td>文字颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>hoverBackground</td><td>悬停背景色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to “数据类型”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Option</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  key</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  label</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  disabled</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TransferProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  modelValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  data</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Option</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  titles</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[];</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  colorText</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  hoverBackground</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5))])}}});export{Z as __pageData,ee as default};

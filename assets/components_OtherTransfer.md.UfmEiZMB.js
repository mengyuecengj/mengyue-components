import{_ as n}from"./chunks/transfer.vue_vue_type_script_setup_true_lang.DuSbkiQJ.js";import{I as T,o as V,c as x,ah as y,J as s,w as r,j as a,a as i,t as P,y as l,h as C}from"./chunks/framework.DmoDkOge.js";import"./chunks/useStyleComputed.CS9pThfp.js";const E={style:{"margin-top":"16px"}},O=JSON.parse('{"title":"Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherTransfer.md","filePath":"components/OtherTransfer.md"}'),U={name:"components/OtherTransfer.md"},Y=Object.assign(U,{setup(_){const k=l([1,2]),m=l([{key:1,label:"选项一",disabled:!1},{key:2,label:"选项二",disabled:!1},{key:3,label:"选项三",disabled:!1},{key:4,label:"选项四",disabled:!1},{key:5,label:"禁用选项",disabled:!0}]),b=l([2,4]),g=l([{key:1,label:"苹果",disabled:!1},{key:2,label:"香蕉",disabled:!1},{key:3,label:"橙子",disabled:!1},{key:4,label:"葡萄",disabled:!1},{key:5,label:"芒果",disabled:!1}]),h=l([1,3]),v=l([{key:1,label:"选项一",disabled:!1},{key:2,label:"选项二",disabled:!1},{key:3,label:"选项三",disabled:!1},{key:4,label:"选项四",disabled:!1}]),f=l([2,5]),D=l([{key:1,label:"项目一",disabled:!1},{key:2,label:"项目二",disabled:!1},{key:3,label:"项目三",disabled:!1},{key:4,label:"项目四",disabled:!1},{key:5,label:"项目五",disabled:!1}]),u=l([2]),B=l([{key:1,label:"可选项一",disabled:!1},{key:2,label:"可选项二",disabled:!1},{key:3,label:"禁用选项一",disabled:!0},{key:4,label:"可选项三",disabled:!1},{key:5,label:"禁用选项二",disabled:!0},{key:6,label:"可选项四",disabled:!1}]),o=l([101,103]),c=l([{key:101,label:"张三",disabled:!1},{key:102,label:"李四",disabled:!1},{key:103,label:"王五",disabled:!1},{key:104,label:"赵六",disabled:!1},{key:105,label:"钱七",disabled:!1}]),A=C(()=>c.value.filter(p=>o.value.includes(p.key)).map(p=>p.label).join(", "));return(p,e)=>{const d=T("ShowCode");return V(),x("div",null,[e[6]||(e[6]=y('<h1 id="transfer" tabindex="-1">Transfer <a class="header-anchor" href="#transfer" aria-label="Permalink to “Transfer”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Transfer 穿梭框组件，用于在两栏中移动数据选项。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYTransfer&gt;&lt;/MYTransfer&gt;</code> 来实现数据穿梭功能。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础穿梭框" tabindex="-1">基础穿梭框 <a class="header-anchor" href="#基础穿梭框" aria-label="Permalink to “基础穿梭框”">​</a></h3><p>基础的穿梭框组件，支持数据在左右两栏之间移动。</p>',6)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[s(n,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=t=>k.value=t),data:m.value,titles:["列表一","列表二"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[7]||(e[7]=a("h3",{id:"自定义标题",tabindex:"-1"},[i("自定义标题 "),a("a",{class:"header-anchor",href:"#自定义标题","aria-label":"Permalink to “自定义标题”"},"​")],-1)),e[8]||(e[8]=a("p",null,[i("使用 "),a("code",null,"titles"),i(" 属性自定义左右两栏的标题。")],-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[s(n,{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=t=>b.value=t),data:g.value,titles:["源列表","目标列表"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[9]||(e[9]=a("h3",{id:"自定义颜色",tabindex:"-1"},[i("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),e[10]||(e[10]=a("p",null,[i("使用 "),a("code",null,"backgroundColor"),i("、"),a("code",null,"colorText"),i(" 和 "),a("code",null,"hoverBackground"),i(" 属性自定义穿梭框的颜色。")],-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[s(n,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=t=>h.value=t),data:v.value,"background-color":"#f0f9ff","color-text":"#0369a1","hover-background":"#e0f2fe",titles:["浅色主题","浅色主题"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[11]||(e[11]=a("h3",{id:"深色主题",tabindex:"-1"},[i("深色主题 "),a("a",{class:"header-anchor",href:"#深色主题","aria-label":"Permalink to “深色主题”"},"​")],-1)),e[12]||(e[12]=a("p",null,"使用深色背景创建深色主题的穿梭框。",-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[s(n,{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=t=>f.value=t),data:D.value,"background-color":"#1e293b","color-text":"#f1f5f9","hover-background":"#334155",titles:["深色主题","深色主题"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[13]||(e[13]=a("h3",{id:"禁用选项",tabindex:"-1"},[i("禁用选项 "),a("a",{class:"header-anchor",href:"#禁用选项","aria-label":"Permalink to “禁用选项”"},"​")],-1)),e[14]||(e[14]=a("p",null,"数据中包含禁用选项，用户无法选择或移动这些选项。",-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[s(n,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=t=>u.value=t),data:B.value,titles:["可选列表","已选列表"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[15]||(e[15]=a("h3",{id:"动态数据",tabindex:"-1"},[i("动态数据 "),a("a",{class:"header-anchor",href:"#动态数据","aria-label":"Permalink to “动态数据”"},"​")],-1)),e[16]||(e[16]=a("p",null,"结合动态数据源创建穿梭框。",-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[a("div",null,[s(n,{modelValue:o.value,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value=t),data:c.value,titles:["所有用户","已选用户"]},null,8,["modelValue","data"]),a("div",E,[a("p",null,"已选择用户: "+P(A.value),1)])])]),_:1},8,["code"]),e[17]||(e[17]=y(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="transfer-props" tabindex="-1">Transfer Props <a class="header-anchor" href="#transfer-props" aria-label="Permalink to “Transfer Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>选中项的 key 数组</td><td>number[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>data</td><td>数据源</td><td>Option[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>titles</td><td>自定义左右列表的标题</td><td>string[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>backgroundColor</td><td>背景颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>colorText</td><td>文字颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>hoverBackground</td><td>悬停背景色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to “数据类型”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Option</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5))])}}});export{O as __pageData,Y as default};

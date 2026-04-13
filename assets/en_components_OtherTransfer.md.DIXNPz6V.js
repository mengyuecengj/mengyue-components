import{_ as d}from"./chunks/transfer.vue_vue_type_script_setup_true_lang.CZvSIjrN.js";import{I as B,o as C,c as O,a8 as f,J as s,w as r,j as a,a as i,t as V,A as l,h as I}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const x={style:{"margin-top":"16px"}},_=JSON.parse('{"title":"Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/OtherTransfer.md","filePath":"en/components/OtherTransfer.md"}'),P={name:"en/components/OtherTransfer.md"},w=Object.assign(P,{setup(L){const k=l([1,2]),y=l([{key:1,label:"Option 1",disabled:!1},{key:2,label:"Option 2",disabled:!1},{key:3,label:"Option 3",disabled:!1},{key:4,label:"Option 4",disabled:!1},{key:5,label:"Disabled Option",disabled:!0}]),b=l([2,4]),g=l([{key:1,label:"Apple",disabled:!1},{key:2,label:"Banana",disabled:!1},{key:3,label:"Orange",disabled:!1},{key:4,label:"Grape",disabled:!1},{key:5,label:"Mango",disabled:!1}]),h=l([1,3]),v=l([{key:1,label:"Option 1",disabled:!1},{key:2,label:"Option 2",disabled:!1},{key:3,label:"Option 3",disabled:!1},{key:4,label:"Option 4",disabled:!1}]),m=l([2,5]),D=l([{key:1,label:"Item 1",disabled:!1},{key:2,label:"Item 2",disabled:!1},{key:3,label:"Item 3",disabled:!1},{key:4,label:"Item 4",disabled:!1},{key:5,label:"Item 5",disabled:!1}]),u=l([2]),T=l([{key:1,label:"Available Item 1",disabled:!1},{key:2,label:"Available Item 2",disabled:!1},{key:3,label:"Disabled Item 1",disabled:!0},{key:4,label:"Available Item 3",disabled:!1},{key:5,label:"Disabled Item 2",disabled:!0},{key:6,label:"Available Item 4",disabled:!1}]),p=l([101,103]),c=l([{key:101,label:"Zhang San",disabled:!1},{key:102,label:"Li Si",disabled:!1},{key:103,label:"Wang Wu",disabled:!1},{key:104,label:"Zhao Liu",disabled:!1},{key:105,label:"Qian Qi",disabled:!1}]),A=I(()=>c.value.filter(o=>p.value.includes(o.key)).map(o=>o.label).join(", "));return(o,e)=>{const n=B("ShowCode");return C(),O("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[6]||(e[6]=f('<h1 id="transfer" tabindex="-1">Transfer <a class="header-anchor" href="#transfer" aria-label="Permalink to “Transfer”">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to “Introduction”">​</a></h2><p>The Transfer component is used for moving data options between two columns. mengyue-components has encapsulated this component and conducted vitest testing. You can use <code>&lt;MYTransfer&gt;&lt;/MYTransfer&gt;</code> to implement data transfer functionality.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to “Basic Usage”">​</a></h2><h3 id="basic-transfer" tabindex="-1">Basic Transfer <a class="header-anchor" href="#basic-transfer" aria-label="Permalink to “Basic Transfer”">​</a></h3><p>A basic transfer component that supports moving data between left and right columns.</p>',6)),s(n,{title:"Code Demo",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['List One', 'List Two']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 2])
const data = ref([
  { key: 1, label: 'Option 1', disabled: false },
  { key: 2, label: 'Option 2', disabled: false },
  { key: 3, label: 'Option 3', disabled: false },
  { key: 4, label: 'Option 4', disabled: false },
  { key: 5, label: 'Disabled Option', disabled: true }
])
<\/script>
  `.trim()},{demo:r(()=>[s(d,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=t=>k.value=t),data:y.value,titles:["List One","List Two"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[7]||(e[7]=a("h3",{id:"custom-titles",tabindex:"-1"},[i("Custom Titles "),a("a",{class:"header-anchor",href:"#custom-titles","aria-label":"Permalink to “Custom Titles”"},"​")],-1)),e[8]||(e[8]=a("p",null,[i("Use the "),a("code",null,"titles"),i(" prop to customize the titles of the left and right columns.")],-1)),s(n,{title:"Code Demo",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['Source List', 'Target List']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 4])
const data = ref([
  { key: 1, label: 'Apple', disabled: false },
  { key: 2, label: 'Banana', disabled: false },
  { key: 3, label: 'Orange', disabled: false },
  { key: 4, label: 'Grape', disabled: false },
  { key: 5, label: 'Mango', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[s(d,{modelValue:b.value,"onUpdate:modelValue":e[1]||(e[1]=t=>b.value=t),data:g.value,titles:["Source List","Target List"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[9]||(e[9]=a("h3",{id:"custom-colors",tabindex:"-1"},[i("Custom Colors "),a("a",{class:"header-anchor",href:"#custom-colors","aria-label":"Permalink to “Custom Colors”"},"​")],-1)),e[10]||(e[10]=a("p",null,[i("Use the "),a("code",null,"backgroundColor"),i(", "),a("code",null,"colorText"),i(", and "),a("code",null,"hoverBackground"),i(" props to customize the transfer component's colors.")],-1)),s(n,{title:"Code Demo",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#f0f9ff'
    color-text='#0369a1'
    hover-background='#e0f2fe'
    :titles='['Light Theme', 'Light Theme']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 3])
const data = ref([
  { key: 1, label: 'Option 1', disabled: false },
  { key: 2, label: 'Option 2', disabled: false },
  { key: 3, label: 'Option 3', disabled: false },
  { key: 4, label: 'Option 4', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[s(d,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=t=>h.value=t),data:v.value,"background-color":"#f0f9ff","color-text":"#0369a1","hover-background":"#e0f2fe",titles:["Light Theme","Light Theme"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[11]||(e[11]=a("h3",{id:"dark-theme",tabindex:"-1"},[i("Dark Theme "),a("a",{class:"header-anchor",href:"#dark-theme","aria-label":"Permalink to “Dark Theme”"},"​")],-1)),e[12]||(e[12]=a("p",null,"Create a dark-themed transfer component using dark backgrounds.",-1)),s(n,{title:"Code Demo",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#1e293b'
    color-text='#f1f5f9'
    hover-background='#334155'
    :titles='['Dark Theme', 'Dark Theme']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 5])
const data = ref([
  { key: 1, label: 'Item 1', disabled: false },
  { key: 2, label: 'Item 2', disabled: false },
  { key: 3, label: 'Item 3', disabled: false },
  { key: 4, label: 'Item 4', disabled: false },
  { key: 5, label: 'Item 5', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[s(d,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=t=>m.value=t),data:D.value,"background-color":"#1e293b","color-text":"#f1f5f9","hover-background":"#334155",titles:["Dark Theme","Dark Theme"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[13]||(e[13]=a("h3",{id:"disabled-options",tabindex:"-1"},[i("Disabled Options "),a("a",{class:"header-anchor",href:"#disabled-options","aria-label":"Permalink to “Disabled Options”"},"​")],-1)),e[14]||(e[14]=a("p",null,"Data containing disabled options that users cannot select or move.",-1)),s(n,{title:"Code Demo",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['Available List', 'Selected List']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2])
const data = ref([
  { key: 1, label: 'Available Item 1', disabled: false },
  { key: 2, label: 'Available Item 2', disabled: false },
  { key: 3, label: 'Disabled Item 1', disabled: true },
  { key: 4, label: 'Available Item 3', disabled: false },
  { key: 5, label: 'Disabled Item 2', disabled: true },
  { key: 6, label: 'Available Item 4', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[s(d,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=t=>u.value=t),data:T.value,titles:["Available List","Selected List"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[15]||(e[15]=a("h3",{id:"dynamic-data",tabindex:"-1"},[i("Dynamic Data "),a("a",{class:"header-anchor",href:"#dynamic-data","aria-label":"Permalink to “Dynamic Data”"},"​")],-1)),e[16]||(e[16]=a("p",null,"Create a transfer component with dynamic data sources.",-1)),s(n,{title:"Code Demo",code:`
<template>
  <div>
    <MYTransfer 
      v-model='selectedUsers'
      :data='users'
      :titles='['All Users', 'Selected Users']'
    />
    <div style='margin-top: 16px;'>
      <p>Selected users: {{ selectedUsersLabels }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: 'Zhang San', disabled: false },
  { key: 102, label: 'Li Si', disabled: false },
  { key: 103, label: 'Wang Wu', disabled: false },
  { key: 104, label: 'Zhao Liu', disabled: false },
  { key: 105, label: 'Qian Qi', disabled: false }
])
const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
<\/script>
  `.trim()},{demo:r(()=>[a("div",null,[s(d,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t),data:c.value,titles:["All Users","Selected Users"]},null,8,["modelValue","data"]),a("div",x,[a("p",null,"Selected users: "+V(A.value),1)])])]),_:1},8,["code"]),e[17]||(e[17]=f(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="transfer-props" tabindex="-1">Transfer Props <a class="header-anchor" href="#transfer-props" aria-label="Permalink to “Transfer Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>modelValue</td><td>Array of selected item keys</td><td>number[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>data</td><td>Data source</td><td>Option[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>titles</td><td>Custom titles for left and right lists</td><td>string[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>backgroundColor</td><td>Background color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>colorText</td><td>Text color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>hoverBackground</td><td>Hover background color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="data-types" tabindex="-1">Data Types <a class="header-anchor" href="#data-types" aria-label="Permalink to “Data Types”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Option</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5))])}}});export{_ as __pageData,w as default};

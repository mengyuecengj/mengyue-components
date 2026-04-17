import{_ as r}from"./chunks/transfer.vue_vue_type_script_setup_true_lang.CZvSIjrN.js";import{I as A,o as O,c as C,a8 as m,J as s,w as d,j as a,a as i,t as P,A as l,h as x}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const V={style:{"margin-top":"16px"}},j=JSON.parse('{"title":"Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/OtherTransfer.md","filePath":"en/plus/OtherTransfer.md"}'),S={name:"en/plus/OtherTransfer.md"},E=Object.assign(S,{setup(w){const k=l([1,2]),y=l([{key:1,label:"Option One",disabled:!1},{key:2,label:"Option Two",disabled:!1},{key:3,label:"Option Three",disabled:!1},{key:4,label:"Option Four",disabled:!1},{key:5,label:"Disabled Option",disabled:!0}]),h=l([2,4]),g=l([{key:1,label:"Apple",disabled:!1},{key:2,label:"Banana",disabled:!1},{key:3,label:"Orange",disabled:!1},{key:4,label:"Grape",disabled:!1},{key:5,label:"Mango",disabled:!1}]),b=l([1,3]),v=l([{key:1,label:"Option One",disabled:!1},{key:2,label:"Option Two",disabled:!1},{key:3,label:"Option Three",disabled:!1},{key:4,label:"Option Four",disabled:!1}]),c=l([2,5]),T=l([{key:1,label:"Project One",disabled:!1},{key:2,label:"Project Two",disabled:!1},{key:3,label:"Project Three",disabled:!1},{key:4,label:"Project Four",disabled:!1},{key:5,label:"Project Five",disabled:!1}]),u=l([2]),D=l([{key:1,label:"Selectable One",disabled:!1},{key:2,label:"Selectable Two",disabled:!1},{key:3,label:"Disabled One",disabled:!0},{key:4,label:"Selectable Three",disabled:!1},{key:5,label:"Disabled Two",disabled:!0},{key:6,label:"Selectable Four",disabled:!1}]),p=l([101,103]),f=l([{key:101,label:"John Doe",disabled:!1},{key:102,label:"Jane Smith",disabled:!1},{key:103,label:"Bob Johnson",disabled:!1},{key:104,label:"Alice Brown",disabled:!1},{key:105,label:"Charlie Wilson",disabled:!1}]),B=x(()=>f.value.filter(o=>p.value.includes(o.key)).map(o=>o.label).join(", "));return(o,e)=>{const n=A("ShowCode");return O(),C("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[6]||(e[6]=m('<h1 id="transfer" tabindex="-1">Transfer <a class="header-anchor" href="#transfer" aria-label="Permalink to “Transfer”">​</a></h1><h2 id="brief-introduction" tabindex="-1">Brief Introduction <a class="header-anchor" href="#brief-introduction" aria-label="Permalink to “Brief Introduction”">​</a></h2><p>The Transfer shuttle box component is used to move data options between two columns. <code>mengyue-components</code> has encapsulated it and performed <code>vitest</code> testing. You can use <code>&lt;MYTransfer&gt;&lt;/MYTransfer&gt;</code> to implement data shuttle functionality.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to “Basic Usage”">​</a></h2><h3 id="basic-transfer" tabindex="-1">Basic Transfer <a class="header-anchor" href="#basic-transfer" aria-label="Permalink to “Basic Transfer”">​</a></h3><p>Basic transfer box component, supports moving data between left and right columns.</p>',6)),s(n,{title:"Code Demo",code:`
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
  { key: 1, label: 'Option One', disabled: false },
  { key: 2, label: 'Option Two', disabled: false },
  { key: 3, label: 'Option Three', disabled: false },
  { key: 4, label: 'Option Four', disabled: false },
  { key: 5, label: 'Disabled Option', disabled: true }
])
<\/script>
  `.trim()},{demo:d(()=>[s(r,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=t=>k.value=t),data:y.value,titles:["List One","List Two"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[7]||(e[7]=a("h3",{id:"custom-titles",tabindex:"-1"},[i("Custom Titles "),a("a",{class:"header-anchor",href:"#custom-titles","aria-label":"Permalink to “Custom Titles”"},"​")],-1)),e[8]||(e[8]=a("p",null,[i("Use the "),a("code",null,"titles"),i(" property to customize the titles of the left and right columns.")],-1)),s(n,{title:"Code Demo",code:`
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
  `.trim()},{demo:d(()=>[s(r,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t),data:g.value,titles:["Source List","Target List"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[9]||(e[9]=a("h3",{id:"custom-colors",tabindex:"-1"},[i("Custom Colors "),a("a",{class:"header-anchor",href:"#custom-colors","aria-label":"Permalink to “Custom Colors”"},"​")],-1)),e[10]||(e[10]=a("p",null,[i("Use the "),a("code",null,"backgroundColor"),i(", "),a("code",null,"colorText"),i(", and "),a("code",null,"hoverBackground"),i(" properties to customize the colors of the transfer box.")],-1)),s(n,{title:"Code Demo",code:`
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
  { key: 1, label: 'Option One', disabled: false },
  { key: 2, label: 'Option Two', disabled: false },
  { key: 3, label: 'Option Three', disabled: false },
  { key: 4, label: 'Option Four', disabled: false }
])
<\/script>
  `.trim()},{demo:d(()=>[s(r,{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=t=>b.value=t),data:v.value,"background-color":"#f0f9ff","color-text":"#0369a1","hover-background":"#e0f2fe",titles:["Light Theme","Light Theme"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[11]||(e[11]=a("h3",{id:"dark-theme",tabindex:"-1"},[i("Dark Theme "),a("a",{class:"header-anchor",href:"#dark-theme","aria-label":"Permalink to “Dark Theme”"},"​")],-1)),e[12]||(e[12]=a("p",null,"Create a dark-themed transfer box using dark backgrounds.",-1)),s(n,{title:"Code Demo",code:`
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
  { key: 1, label: 'Project One', disabled: false },
  { key: 2, label: 'Project Two', disabled: false },
  { key: 3, label: 'Project Three', disabled: false },
  { key: 4, label: 'Project Four', disabled: false },
  { key: 5, label: 'Project Five', disabled: false }
])
<\/script>
  `.trim()},{demo:d(()=>[s(r,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=t=>c.value=t),data:T.value,"background-color":"#1e293b","color-text":"#f1f5f9","hover-background":"#334155",titles:["Dark Theme","Dark Theme"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[13]||(e[13]=a("h3",{id:"disabled-options",tabindex:"-1"},[i("Disabled Options "),a("a",{class:"header-anchor",href:"#disabled-options","aria-label":"Permalink to “Disabled Options”"},"​")],-1)),e[14]||(e[14]=a("p",null,"Data containing disabled options; users cannot select or move these options.",-1)),s(n,{title:"Code Demo",code:`
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
  { key: 1, label: 'Selectable One', disabled: false },
  { key: 2, label: 'Selectable Two', disabled: false },
  { key: 3, label: 'Disabled One', disabled: true },
  { key: 4, label: 'Selectable Three', disabled: false },
  { key: 5, label: 'Disabled Two', disabled: true },
  { key: 6, label: 'Selectable Four', disabled: false }
])
<\/script>
  `.trim()},{demo:d(()=>[s(r,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=t=>u.value=t),data:D.value,titles:["Available List","Selected List"]},null,8,["modelValue","data"])]),_:1},8,["code"]),e[15]||(e[15]=a("h3",{id:"dynamic-data",tabindex:"-1"},[i("Dynamic Data "),a("a",{class:"header-anchor",href:"#dynamic-data","aria-label":"Permalink to “Dynamic Data”"},"​")],-1)),e[16]||(e[16]=a("p",null,"Create a transfer box with a dynamic data source.",-1)),s(n,{title:"Code Demo",code:`
<template>
  <div>
    <MYTransfer 
      v-model='selectedUsers'
      :data='users'
      :titles='['All Users', 'Selected Users']'
    />
    <div style='margin-top: 16px;'>
      <p>Selected Users: {{ selectedUsersLabels }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: 'John Doe', disabled: false },
  { key: 102, label: 'Jane Smith', disabled: false },
  { key: 103, label: 'Bob Johnson', disabled: false },
  { key: 104, label: 'Alice Brown', disabled: false },
  { key: 105, label: 'Charlie Wilson', disabled: false }
])
const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
<\/script>
  `.trim()},{demo:d(()=>[a("div",null,[s(r,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t),data:f.value,titles:["All Users","Selected Users"]},null,8,["modelValue","data"]),a("div",V,[a("p",null,"Selected Users: "+P(B.value),1)])])]),_:1},8,["code"]),e[17]||(e[17]=m(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="transfer-props" tabindex="-1">Transfer Props <a class="header-anchor" href="#transfer-props" aria-label="Permalink to “Transfer Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>modelValue</td><td>Array of keys for selected items</td><td>number[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>data</td><td>Data source</td><td>Option[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>titles</td><td>Custom titles for left/right lists</td><td>string[]</td><td>—</td><td><code>[]</code></td></tr><tr><td>backgroundColor</td><td>Background color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>colorText</td><td>Text color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>hoverBackground</td><td>Hover background color</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="data-type" tabindex="-1">Data Type <a class="header-anchor" href="#data-type" aria-label="Permalink to “Data Type”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Option</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5))])}}});export{j as __pageData,E as default};

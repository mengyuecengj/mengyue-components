import{_ as d}from"./chunks/transfer.vue_vue_type_script_setup_true_lang.CZvSIjrN.js";import{I as B,o as C,c as O,a8 as f,J as s,w as r,j as a,a as i,t as V,A as l,h as I}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const x={style:{"margin-top":"16px"}},_=JSON.parse('{"title":"Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/OtherTransfer.md","filePath":"en/components/OtherTransfer.md"}'),P={name:"en/components/OtherTransfer.md"},w=Object.assign(P,{setup(L){const k=l([1,2]),y=l([{key:1,label:"Option 1",disabled:!1},{key:2,label:"Option 2",disabled:!1},{key:3,label:"Option 3",disabled:!1},{key:4,label:"Option 4",disabled:!1},{key:5,label:"Disabled Option",disabled:!0}]),b=l([2,4]),g=l([{key:1,label:"Apple",disabled:!1},{key:2,label:"Banana",disabled:!1},{key:3,label:"Orange",disabled:!1},{key:4,label:"Grape",disabled:!1},{key:5,label:"Mango",disabled:!1}]),h=l([1,3]),v=l([{key:1,label:"Option 1",disabled:!1},{key:2,label:"Option 2",disabled:!1},{key:3,label:"Option 3",disabled:!1},{key:4,label:"Option 4",disabled:!1}]),m=l([2,5]),D=l([{key:1,label:"Item 1",disabled:!1},{key:2,label:"Item 2",disabled:!1},{key:3,label:"Item 3",disabled:!1},{key:4,label:"Item 4",disabled:!1},{key:5,label:"Item 5",disabled:!1}]),u=l([2]),T=l([{key:1,label:"Available Item 1",disabled:!1},{key:2,label:"Available Item 2",disabled:!1},{key:3,label:"Disabled Item 1",disabled:!0},{key:4,label:"Available Item 3",disabled:!1},{key:5,label:"Disabled Item 2",disabled:!0},{key:6,label:"Available Item 4",disabled:!1}]),p=l([101,103]),c=l([{key:101,label:"Zhang San",disabled:!1},{key:102,label:"Li Si",disabled:!1},{key:103,label:"Wang Wu",disabled:!1},{key:104,label:"Zhao Liu",disabled:!1},{key:105,label:"Qian Qi",disabled:!1}]),A=I(()=>c.value.filter(o=>p.value.includes(o.key)).map(o=>o.label).join(", "));return(o,e)=>{const n=B("ShowCode");return C(),O("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[6]||(e[6]=f("",6)),s(n,{title:"Code Demo",code:`
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
  `.trim()},{demo:r(()=>[a("div",null,[s(d,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t),data:c.value,titles:["All Users","Selected Users"]},null,8,["modelValue","data"]),a("div",x,[a("p",null,"Selected users: "+V(A.value),1)])])]),_:1},8,["code"]),e[17]||(e[17]=f("",5))])}}});export{_ as __pageData,w as default};

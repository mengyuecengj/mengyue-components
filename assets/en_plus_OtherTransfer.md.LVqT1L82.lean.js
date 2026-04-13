import{_ as r}from"./chunks/transfer.vue_vue_type_script_setup_true_lang.CZvSIjrN.js";import{I as A,o as O,c as C,a8 as m,J as s,w as d,j as a,a as i,t as P,A as l,h as x}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const V={style:{"margin-top":"16px"}},j=JSON.parse('{"title":"Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/OtherTransfer.md","filePath":"en/plus/OtherTransfer.md"}'),S={name:"en/plus/OtherTransfer.md"},E=Object.assign(S,{setup(w){const k=l([1,2]),y=l([{key:1,label:"Option One",disabled:!1},{key:2,label:"Option Two",disabled:!1},{key:3,label:"Option Three",disabled:!1},{key:4,label:"Option Four",disabled:!1},{key:5,label:"Disabled Option",disabled:!0}]),h=l([2,4]),g=l([{key:1,label:"Apple",disabled:!1},{key:2,label:"Banana",disabled:!1},{key:3,label:"Orange",disabled:!1},{key:4,label:"Grape",disabled:!1},{key:5,label:"Mango",disabled:!1}]),b=l([1,3]),v=l([{key:1,label:"Option One",disabled:!1},{key:2,label:"Option Two",disabled:!1},{key:3,label:"Option Three",disabled:!1},{key:4,label:"Option Four",disabled:!1}]),c=l([2,5]),T=l([{key:1,label:"Project One",disabled:!1},{key:2,label:"Project Two",disabled:!1},{key:3,label:"Project Three",disabled:!1},{key:4,label:"Project Four",disabled:!1},{key:5,label:"Project Five",disabled:!1}]),u=l([2]),D=l([{key:1,label:"Selectable One",disabled:!1},{key:2,label:"Selectable Two",disabled:!1},{key:3,label:"Disabled One",disabled:!0},{key:4,label:"Selectable Three",disabled:!1},{key:5,label:"Disabled Two",disabled:!0},{key:6,label:"Selectable Four",disabled:!1}]),p=l([101,103]),f=l([{key:101,label:"John Doe",disabled:!1},{key:102,label:"Jane Smith",disabled:!1},{key:103,label:"Bob Johnson",disabled:!1},{key:104,label:"Alice Brown",disabled:!1},{key:105,label:"Charlie Wilson",disabled:!1}]),B=x(()=>f.value.filter(o=>p.value.includes(o.key)).map(o=>o.label).join(", "));return(o,e)=>{const n=A("ShowCode");return O(),C("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[6]||(e[6]=m("",6)),s(n,{title:"Code Demo",code:`
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
  `.trim()},{demo:d(()=>[a("div",null,[s(r,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=t=>p.value=t),data:f.value,titles:["All Users","Selected Users"]},null,8,["modelValue","data"]),a("div",V,[a("p",null,"Selected Users: "+P(B.value),1)])])]),_:1},8,["code"]),e[17]||(e[17]=m("",5))])}}});export{j as __pageData,E as default};

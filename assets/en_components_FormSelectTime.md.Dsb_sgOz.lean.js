import{_ as l}from"./chunks/selectTime.vue_vue_type_script_setup_true_lang.D7WTOvUl.js";import{I as c,o as g,c as b,a8 as k,J as i,w as o,j as t,a as s,A as d}from"./chunks/framework.DvHWw5tv.js";const y={style:{position:"relative","z-index":"1000"}},f={style:{position:"relative","z-index":"1000"}},v={style:{position:"relative","z-index":"1000"}},P={style:{position:"relative","z-index":"1000"}},S={style:{position:"relative","z-index":"1000"}},A=JSON.parse('{"title":"SelectTime","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FormSelectTime.md","filePath":"en/components/FormSelectTime.md"}'),T={name:"en/components/FormSelectTime.md"},V=Object.assign(T,{setup(B){const r=d("00:00"),p=d("09:00"),m=d("00:00"),h=d([]),u=d([]);return(C,e)=>{const n=c("ShowCode");return g(),b("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[5]||(e[5]=k("",5)),i(n,{title:"Code Demo",code:`
<template>
    <MYSelect-time v-model='timePoint' />
</template>
  `.trim()},{demo:o(()=>[t("div",y,[i(l,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=a=>r.value=a)},null,8,["modelValue"])])]),_:1},8,["code"]),e[6]||(e[6]=t("h2",{id:"select-time-range",tabindex:"-1"},[s("Select Time Range "),t("a",{class:"header-anchor",href:"#select-time-range","aria-label":"Permalink to “Select Time Range”"},"​")],-1)),e[7]||(e[7]=t("p",null,[s("Use the "),t("code",null,"range"),s(" property to enable time range selection mode.")],-1)),i(n,{title:"Code Demo",code:`
<template>
    <MYSelect-time v-model='timeRange' range />
</template>
  `.trim()},{demo:o(()=>[t("div",f,[i(l,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=a=>h.value=a),range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[8]||(e[8]=t("h2",{id:"custom-hour-options",tabindex:"-1"},[s("Custom Hour Options "),t("a",{class:"header-anchor",href:"#custom-hour-options","aria-label":"Permalink to “Custom Hour Options”"},"​")],-1)),e[9]||(e[9]=t("p",null,[s("Use the "),t("code",null,"hourOptions"),s(" property to customize the hour options.")],-1)),i(n,{title:"Code Demo",code:`
<template>
    <MYSelect-time v-model='timePoint2' :hourOptions='[9, 10, 11, 12, 13, 14, 15, 16, 17]' />
</template>
  `.trim()},{demo:o(()=>[t("div",v,[i(l,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=a=>p.value=a),hourOptions:[9,10,11,12,13,14,15,16,17]},null,8,["modelValue"])])]),_:1},8,["code"]),e[10]||(e[10]=t("h2",{id:"custom-minute-options",tabindex:"-1"},[s("Custom Minute Options "),t("a",{class:"header-anchor",href:"#custom-minute-options","aria-label":"Permalink to “Custom Minute Options”"},"​")],-1)),e[11]||(e[11]=t("p",null,[s("Use the "),t("code",null,"minuteOptions"),s(" property to customize the minute options.")],-1)),i(n,{title:"Code Demo",code:`
<template>
    <MYSelect-time v-model='timePoint3' :minuteOptions='[0, 15, 30, 45]' />
</template>
  `.trim()},{demo:o(()=>[t("div",P,[i(l,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=a=>m.value=a),minuteOptions:[0,15,30,45]},null,8,["modelValue"])])]),_:1},8,["code"]),e[12]||(e[12]=t("h2",{id:"combined-usage",tabindex:"-1"},[s("Combined Usage "),t("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[13]||(e[13]=t("p",null,"Finally, combine multiple APIs to create a customized time picker:",-1)),i(n,{title:"Code Demo",code:`
<template>
    <MYSelect-time 
        v-model='timeRange2' 
        range 
        :hourOptions='[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]'
        :minuteOptions='[0, 30]'
    />
</template>
  `.trim()},{demo:o(()=>[t("div",S,[i(l,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=a=>u.value=a),range:"",hourOptions:[8,9,10,11,12,13,14,15,16,17,18],minuteOptions:[0,30]},null,8,["modelValue"])])]),_:1},8,["code"]),e[14]||(e[14]=k("",5))])}}});export{A as __pageData,V as default};

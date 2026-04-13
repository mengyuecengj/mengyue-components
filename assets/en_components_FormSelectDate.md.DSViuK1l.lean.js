import{_ as n}from"./chunks/selectDate.vue_vue_type_script_setup_true_lang.BouwiF4r.js";import{I as y,o as v,c as D,a8 as b,J as i,w as d,j as t,a,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const f={style:{position:"relative","z-index":"1000"}},P={style:{position:"relative","z-index":"1000"}},S={style:{position:"relative","z-index":"1000"}},V={style:{position:"relative","z-index":"1000"}},B={style:{position:"relative","z-index":"1000"}},x={style:{position:"relative","z-index":"1000"}},A={style:{position:"relative","z-index":"1000","min-height":"300px"}},C={style:{position:"relative","z-index":"1000","min-height":"300px"}},F=JSON.parse('{"title":"SelectDate","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FormSelectDate.md","filePath":"en/components/FormSelectDate.md"}'),T={name:"en/components/FormSelectDate.md"},E=Object.assign(T,{setup(R){const r=o(""),p=o([]),h=o(""),m=o([]),k=o(""),g=o([]),c=o(""),u=o([]);return(U,e)=>{const l=y("ShowCode");return v(),D("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[8]||(e[8]=b("",5)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date v-model='singleDate' />
</template>
  `.trim()},{demo:d(()=>[t("div",f,[i(n,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s)},null,8,["modelValue"])])]),_:1},8,["code"]),e[9]||(e[9]=t("h2",{id:"date-range-selection",tabindex:"-1"},[a("Date Range Selection "),t("a",{class:"header-anchor",href:"#date-range-selection","aria-label":"Permalink to “Date Range Selection”"},"​")],-1)),e[10]||(e[10]=t("p",null,[a("Use the "),t("code",null,"range"),a(" prop to enable date range selection mode.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date v-model='dateRange' range />
</template>
  `.trim()},{demo:d(()=>[t("div",P,[i(n,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=s=>p.value=s),range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[11]||(e[11]=t("h2",{id:"single-month-picker",tabindex:"-1"},[a("Single Month Picker "),t("a",{class:"header-anchor",href:"#single-month-picker","aria-label":"Permalink to “Single Month Picker”"},"​")],-1)),e[12]||(e[12]=t("p",null,[a("Use the "),t("code",null,"month"),a(" prop to select only the month.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date v-model='singleMonth' month />
</template>
  `.trim()},{demo:d(()=>[t("div",S,[i(n,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=s=>h.value=s),month:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[13]||(e[13]=t("h2",{id:"month-range-picker",tabindex:"-1"},[a("Month Range Picker "),t("a",{class:"header-anchor",href:"#month-range-picker","aria-label":"Permalink to “Month Range Picker”"},"​")],-1)),e[14]||(e[14]=t("p",null,[a("Use the "),t("code",null,"range"),a(" prop to enable month range selection mode.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date v-model='monthRange' range month />
</template>
  `.trim()},{demo:d(()=>[t("div",V,[i(n,{modelValue:m.value,"onUpdate:modelValue":e[3]||(e[3]=s=>m.value=s),range:"",month:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[15]||(e[15]=t("h2",{id:"year-picker",tabindex:"-1"},[a("Year Picker "),t("a",{class:"header-anchor",href:"#year-picker","aria-label":"Permalink to “Year Picker”"},"​")],-1)),e[16]||(e[16]=t("p",null,[a("Use the "),t("code",null,"year"),a(" prop to select only the year.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date v-model='singleYear' year />
</template>
  `.trim()},{demo:d(()=>[t("div",B,[i(n,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=s=>k.value=s),year:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[17]||(e[17]=t("h2",{id:"year-range-picker",tabindex:"-1"},[a("Year Range Picker "),t("a",{class:"header-anchor",href:"#year-range-picker","aria-label":"Permalink to “Year Range Picker”"},"​")],-1)),e[18]||(e[18]=t("p",null,[a("Use the "),t("code",null,"range"),a(" prop to enable year range selection mode.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date v-model='yearRange' year range />
</template>
  `.trim()},{demo:d(()=>[t("div",x,[i(n,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=s=>g.value=s),year:"",range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[19]||(e[19]=t("h2",{id:"time-picker",tabindex:"-1"},[a("Time Picker "),t("a",{class:"header-anchor",href:"#time-picker","aria-label":"Permalink to “Time Picker”"},"​")],-1)),e[20]||(e[20]=t("p",null,[a("Use the "),t("code",null,"time"),a(" prop to enable time selection.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date v-model='datetime' time />
</template>
  `.trim()},{demo:d(()=>[t("div",A,[i(n,{modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=s=>c.value=s),time:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[21]||(e[21]=t("h2",{id:"combined-usage",tabindex:"-1"},[a("Combined Usage "),t("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[22]||(e[22]=t("p",null,"Finally, here's an example combining multiple APIs to implement a date-time range picker:",-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSelect-date 
        v-model='datetimeRange' 
        range 
        time 
        placeholder='Select date and time range'
    />
</template>
  `.trim()},{demo:d(()=>[t("div",C,[i(n,{modelValue:u.value,"onUpdate:modelValue":e[7]||(e[7]=s=>u.value=s),range:"",time:"",placeholder:"Select date and time range"},null,8,["modelValue"])])]),_:1},8,["code"]),e[23]||(e[23]=b("",5))])}}});export{F as __pageData,E as default};

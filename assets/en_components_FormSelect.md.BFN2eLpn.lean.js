import{_ as o,a as i}from"./chunks/option.vue_vue_type_script_setup_true_lang.Chkzkhu-.js";import{I as g,o as m,c as y,a8 as u,J as a,w as l,j as s,a as t,A as r}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const v={style:{position:"relative","z-index":"1000"}},f={style:{position:"relative","z-index":"1000"}},B={style:{position:"relative","z-index":"1000"}},D={style:{position:"relative","z-index":"1000"}},A={style:{position:"relative","z-index":"1000"}},M=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FormSelect.md","filePath":"en/components/FormSelect.md"}'),C={name:"en/components/FormSelect.md"},Y=Object.assign(C,{setup(O){const p=r(""),h=r(""),k=r(""),c=r(""),b=r("B");return(S,e)=>{const d=g("ShowCode");return m(),y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[5]||(e[5]=u("",5)),a(d,{title:"Code Demo",code:`
<template>
    <MYSelect v-model='selectedValue1' placeholder='Please select a fruit'>
        <MYOption value='apple' label='Apple' />
        <MYOption value='banana' label='Banana' />
        <MYOption value='orange' label='Orange' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[s("div",v,[a(o,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=n=>p.value=n),placeholder:"Please select a fruit"},{default:l(()=>[a(i,{value:"apple",label:"Apple"}),a(i,{value:"banana",label:"Banana"}),a(i,{value:"orange",label:"Orange"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[6]||(e[6]=s("h2",{id:"disabled-state",tabindex:"-1"},[t("Disabled State "),s("a",{class:"header-anchor",href:"#disabled-state","aria-label":"Permalink to “Disabled State”"},"​")],-1)),e[7]||(e[7]=s("h3",{id:"disable-entire-selector",tabindex:"-1"},[t("Disable Entire Selector "),s("a",{class:"header-anchor",href:"#disable-entire-selector","aria-label":"Permalink to “Disable Entire Selector”"},"​")],-1)),e[8]||(e[8]=s("p",null,[t("Use the "),s("code",null,"disabled"),t(" property to disable the selector.")],-1)),a(d,{title:"Code Demo",code:`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='Disabled state'>
        <MYOption value='1' label='Option 1' />
        <MYOption value='2' label='Option 2' />
        <MYOption value='3' label='Option 3' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[s("div",f,[a(o,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=n=>h.value=n),disabled:"",placeholder:"Disabled state"},{default:l(()=>[a(i,{value:"1",label:"Option 1"}),a(i,{value:"2",label:"Option 2"}),a(i,{value:"3",label:"Option 3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[9]||(e[9]=s("h3",{id:"disable-a-specific-option",tabindex:"-1"},[t("Disable a Specific Option "),s("a",{class:"header-anchor",href:"#disable-a-specific-option","aria-label":"Permalink to “Disable a Specific Option”"},"​")],-1)),e[10]||(e[10]=s("p",null,[t("Use the "),s("code",null,"disabled"),t(" property to disable a single option.")],-1)),a(d,{title:"Code Demo",code:`
<template>
    <MYSelect v-model='selectedValue3' placeholder='Disable an option'>
        <MYOption value='1' label='Option 1' />
        <MYOption value='2' label='Option 2' disabled />
        <MYOption value='3' label='Option 3' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[s("div",B,[a(o,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=n=>k.value=n),placeholder:"Disable an option"},{default:l(()=>[a(i,{value:"1",label:"Option 1"}),a(i,{value:"2",label:"Option 2",disabled:""}),a(i,{value:"3",label:"Option 3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[11]||(e[11]=s("h2",{id:"custom-size",tabindex:"-1"},[t("Custom Size "),s("a",{class:"header-anchor",href:"#custom-size","aria-label":"Permalink to “Custom Size”"},"​")],-1)),e[12]||(e[12]=s("p",null,[t("Use the "),s("code",null,"width"),t(" and "),s("code",null,"height"),t(" properties to customize the selector's width and height.")],-1)),a(d,{title:"Code Demo",code:`
<template>
    <MYSelect v-model='selectedValue4' placeholder='Width 300px Height 50px' width='300px' height='50px'>
        <MYOption value='4' label='Option 4' />
        <MYOption value='5' label='Option 5' />
        <MYOption value='6' label='Option 6' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[s("div",D,[a(o,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=n=>c.value=n),placeholder:"Width 300px Height 50px",width:"300px",height:"50px"},{default:l(()=>[a(i,{value:"4",label:"Option 4"}),a(i,{value:"5",label:"Option 5"}),a(i,{value:"6",label:"Option 6"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[13]||(e[13]=s("h2",{id:"custom-colors",tabindex:"-1"},[t("Custom Colors "),s("a",{class:"header-anchor",href:"#custom-colors","aria-label":"Permalink to “Custom Colors”"},"​")],-1)),e[14]||(e[14]=s("p",null,[t("Use the "),s("code",null,"backgroundColor"),t(", "),s("code",null,"hoverbackgroundColor"),t(", and "),s("code",null,"borderColor"),t(" properties to customize the selector's colors.")],-1)),a(d,{title:"Code Demo",code:`
<template>
    <MYSelect 
        v-model='selectedValue5' 
        placeholder='Custom colors'
        backgroundColor='#f0f8ff'
        hoverbackgroundColor='#e6f3ff'
        borderColor='#409EFF'
    >
        <MYOption value='A' label='Option A' />
        <MYOption value='B' label='Option B' />
        <MYOption value='C' label='Option C' />
    </MYSelect>
</template>
  `.trim()},{demo:l(()=>[s("div",A,[a(o,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=n=>b.value=n),placeholder:"Custom colors",backgroundColor:"#f0f8ff",hoverbackgroundColor:"#e6f3ff",borderColor:"#409EFF"},{default:l(()=>[a(i,{value:"A",label:"Option A"}),a(i,{value:"B",label:"Option B"}),a(i,{value:"C",label:"Option C"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[15]||(e[15]=u("",7))])}}});export{M as __pageData,Y as default};

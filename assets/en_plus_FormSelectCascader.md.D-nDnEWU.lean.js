import{_ as n}from"./chunks/selectCascader.vue_vue_type_script_setup_true_lang.CYuS7vqk.js";import{I as D,o as f,c as B,a8 as b,J as a,w as d,j as s,a as i,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const A={style:{position:"relative","z-index":"1000"}},C={style:{position:"relative","z-index":"1000"}},V={style:{position:"relative","z-index":"1000"}},x={style:{position:"relative","z-index":"1000"}},S={style:{position:"relative","z-index":"1000"}},P={style:{position:"relative","z-index":"1000"}},w=JSON.parse('{"title":"SelectCascader","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/FormSelectCascader.md","filePath":"en/plus/FormSelectCascader.md"}'),O={name:"en/plus/FormSelectCascader.md"},U=Object.assign(O,{setup(_){const r=o(""),h=o(""),k=o(""),c=o(""),u=o(""),m=o(""),g=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],y=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"}],v=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2",disabled:!0}],p=[{value:"group1",label:"Group 1",children:[{value:"option1-1",label:"Option 1-1"},{value:"option1-2",label:"Option 1-2"}]},{value:"group2",label:"Group 2",children:[{value:"option2-1",label:"Option 2-1"},{value:"option2-2",label:"Option 2-2",children:[{value:"option2-2-1",label:"Option 2-2-1"},{value:"option2-2-2",label:"Option 2-2-2"}]}]}];return(E,e)=>{const l=D("ShowCode");return f(),B("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[6]||(e[6]=b("",5)),a(l,{title:"Code Demo",code:`
<template>
    <MYSelect-cascader v-model='selectedValue1' :options='options1' placeholder='Please select' />
</template>
  `.trim()},{demo:d(()=>[s("div",A,[a(n,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),options:g,placeholder:"Please select"},null,8,["modelValue"])])]),_:1},8,["code"]),e[7]||(e[7]=s("h2",{id:"disabled-state",tabindex:"-1"},[i("Disabled State "),s("a",{class:"header-anchor",href:"#disabled-state","aria-label":"Permalink to “Disabled State”"},"​")],-1)),e[8]||(e[8]=s("h3",{id:"disable-entire-selector",tabindex:"-1"},[i("Disable Entire Selector "),s("a",{class:"header-anchor",href:"#disable-entire-selector","aria-label":"Permalink to “Disable Entire Selector”"},"​")],-1)),e[9]||(e[9]=s("p",null,[i("Use the "),s("code",null,"disabled"),i(" prop to disable the selector.")],-1)),a(l,{title:"Code Demo",code:`
<template>
    <MYSelect-cascader v-model='selectedValue2' :options='options2' placeholder='Disabled state' disabled />
</template>
  `.trim()},{demo:d(()=>[s("div",C,[a(n,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=t=>h.value=t),options:y,placeholder:"Disabled state",disabled:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[10]||(e[10]=s("h3",{id:"disable-a-specific-option",tabindex:"-1"},[i("Disable a Specific Option "),s("a",{class:"header-anchor",href:"#disable-a-specific-option","aria-label":"Permalink to “Disable a Specific Option”"},"​")],-1)),e[11]||(e[11]=s("p",null,[i("Use the "),s("code",null,"disabled"),i(" prop to disable a single option.")],-1)),a(l,{title:"Code Demo",code:`
<template>
    <MYSelect-cascader v-model='selectedValue3' :options='options3' placeholder='Disable a specific option' />
</template>
  `.trim()},{demo:d(()=>[s("div",V,[a(n,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=t=>k.value=t),options:v,placeholder:"Disable a specific option"},null,8,["modelValue"])])]),_:1},8,["code"]),e[12]||(e[12]=s("h2",{id:"multi-level-menu",tabindex:"-1"},[i("Multi-level Menu "),s("a",{class:"header-anchor",href:"#multi-level-menu","aria-label":"Permalink to “Multi-level Menu”"},"​")],-1)),e[13]||(e[13]=s("p",null,[i("Multi-level menu, pass multi-level data via the "),s("code",null,"options"),i(" prop.")],-1)),a(l,{title:"Code Demo",code:`
<template>
    <MYSelect-cascader v-model='selectedValue4' :options='options4' placeholder='Multi-level menu' />
</template>
  `.trim()},{demo:d(()=>[s("div",x,[a(n,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=t=>c.value=t),options:p,placeholder:"Multi-level menu"},null,8,["modelValue"])])]),_:1},8,["code"]),e[14]||(e[14]=s("h2",{id:"custom-size",tabindex:"-1"},[i("Custom Size "),s("a",{class:"header-anchor",href:"#custom-size","aria-label":"Permalink to “Custom Size”"},"​")],-1)),e[15]||(e[15]=s("p",null,[i("Use the "),s("code",null,"width"),i(" and "),s("code",null,"height"),i(" props to customize the selector's width and height.")],-1)),a(l,{title:"Code Demo",code:`
<template>
    <MYSelect-cascader v-model='selectedValue5' :options='options4' placeholder='Custom size' height='50px' width='500px' />
</template>
  `.trim()},{demo:d(()=>[s("div",S,[a(n,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=t=>u.value=t),options:p,placeholder:"Custom size",height:"50px",width:"500px"},null,8,["modelValue"])])]),_:1},8,["code"]),e[16]||(e[16]=s("h2",{id:"combined-usage",tabindex:"-1"},[i("Combined Usage "),s("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[17]||(e[17]=s("p",null,"Finally, here is a combination of multiple APIs to create a cascader selector:",-1)),a(l,{title:"Code Demo",code:`
<template>
    <MYSelect-cascader 
        v-model='selectedValue6' 
        :options='options4' 
        placeholder='Combined usage example'
        height='45px'
        width='400px'
    />
</template>
  `.trim()},{demo:d(()=>[s("div",P,[a(n,{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=t=>m.value=t),options:p,placeholder:"Combined usage example",height:"45px",width:"400px"},null,8,["modelValue"])])]),_:1},8,["code"]),e[18]||(e[18]=b("",5))])}}});export{w as __pageData,U as default};

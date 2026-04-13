import{a as l,_ as r}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import{y as v,I as D,o as B,c as M,a8 as u,J as s,w as t,j as i,a,A as n,R as Y}from"./chunks/framework.DvHWw5tv.js";const E=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FormCheckbox.md","filePath":"en/components/FormCheckbox.md"}'),A={name:"en/components/FormCheckbox.md"},F=Object.assign(A,{setup(V){const p=n(!0),h=n(["option1"]),k=n([]),c=n(["red"]),g=n(["mon"]),b=n([]),m=n(["default"]),x=n(["option1"]),C=n(["1"]),y=n(["default"]),f=()=>{Y(()=>{})};return v([p,h,k,c,g,b,m,x,C,y],()=>{f()}),(P,e)=>{const d=D("ShowCode");return B(),M("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[18]||(e[18]=u("",6)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox v-model='singleChecked'>Single Checkbox</MYCheckbox>
</template>
  `.trim()},{demo:t(()=>[i("div",null,[s(l,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=o=>p.value=o)},{default:t(()=>[...e[5]||(e[5]=[a("Single Checkbox",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[19]||(e[19]=i("h3",{id:"checkbox-group",tabindex:"-1"},[a("Checkbox Group "),i("a",{class:"header-anchor",href:"#checkbox-group","aria-label":"Permalink to “Checkbox Group”"},"​")],-1)),e[20]||(e[20]=i("p",null,[a("Use "),i("code",null,"<MYCheckbox-group></MYCheckbox-group>"),a(" to group checkboxes together.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues1'>
    <MYCheckbox value='option1'>Option 1</MYCheckbox>
    <MYCheckbox value='option2'>Option 2</MYCheckbox>
    <MYCheckbox value='option3'>Option 3</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:t(()=>[s(r,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=o=>h.value=o)},{default:t(()=>[s(l,{value:"option1"},{default:t(()=>[...e[6]||(e[6]=[a("Option 1",-1)])]),_:1}),s(l,{value:"option2"},{default:t(()=>[...e[7]||(e[7]=[a("Option 2",-1)])]),_:1}),s(l,{value:"option3"},{default:t(()=>[...e[8]||(e[8]=[a("Option 3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[21]||(e[21]=i("h2",{id:"layout-direction",tabindex:"-1"},[a("Layout Direction "),i("a",{class:"header-anchor",href:"#layout-direction","aria-label":"Permalink to “Layout Direction”"},"​")],-1)),e[22]||(e[22]=i("h3",{id:"vertical-layout",tabindex:"-1"},[a("Vertical Layout "),i("a",{class:"header-anchor",href:"#vertical-layout","aria-label":"Permalink to “Vertical Layout”"},"​")],-1)),e[23]||(e[23]=i("p",null,[a("Use "),i("code",null,'direction="vertical"'),a(" to arrange checkboxes vertically.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues2' direction='vertical'>
    <MYCheckbox value='apple'>Apple</MYCheckbox>
    <MYCheckbox value='banana'>Banana</MYCheckbox>
    <MYCheckbox value='orange'>Orange</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:t(()=>[s(r,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=o=>k.value=o),direction:"vertical"},{default:t(()=>[s(l,{value:"apple"},{default:t(()=>[...e[9]||(e[9]=[a("Apple",-1)])]),_:1}),s(l,{value:"banana"},{default:t(()=>[...e[10]||(e[10]=[a("Banana",-1)])]),_:1}),s(l,{value:"orange"},{default:t(()=>[...e[11]||(e[11]=[a("Orange",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[24]||(e[24]=i("h2",{id:"disabled-state",tabindex:"-1"},[a("Disabled State "),i("a",{class:"header-anchor",href:"#disabled-state","aria-label":"Permalink to “Disabled State”"},"​")],-1)),e[25]||(e[25]=i("h3",{id:"entire-group-disabled",tabindex:"-1"},[a("Entire Group Disabled "),i("a",{class:"header-anchor",href:"#entire-group-disabled","aria-label":"Permalink to “Entire Group Disabled”"},"​")],-1)),e[26]||(e[26]=i("p",null,"Disable the entire checkbox group.",-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues3' disabled>
    <MYCheckbox value='red'>Red</MYCheckbox>
    <MYCheckbox value='green'>Green</MYCheckbox>
    <MYCheckbox value='blue'>Blue</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:t(()=>[s(r,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=o=>c.value=o),disabled:""},{default:t(()=>[s(l,{value:"red"},{default:t(()=>[...e[12]||(e[12]=[a("Red",-1)])]),_:1}),s(l,{value:"green"},{default:t(()=>[...e[13]||(e[13]=[a("Green",-1)])]),_:1}),s(l,{value:"blue"},{default:t(()=>[...e[14]||(e[14]=[a("Blue",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[27]||(e[27]=i("h2",{id:"custom-spacing",tabindex:"-1"},[a("Custom Spacing "),i("a",{class:"header-anchor",href:"#custom-spacing","aria-label":"Permalink to “Custom Spacing”"},"​")],-1)),e[28]||(e[28]=i("p",null,[a("Use the "),i("code",null,"gap"),a(" prop to control the spacing between checkboxes.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues5' gap='72px'>
    <MYCheckbox value='cat'>Cat</MYCheckbox>
    <MYCheckbox value='dog'>Dog</MYCheckbox>
    <MYCheckbox value='bird'>Bird</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:t(()=>[s(r,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=o=>b.value=o),gap:"72px"},{default:t(()=>[s(l,{value:"cat"},{default:t(()=>[...e[15]||(e[15]=[a("Cat",-1)])]),_:1}),s(l,{value:"dog"},{default:t(()=>[...e[16]||(e[16]=[a("Dog",-1)])]),_:1}),s(l,{value:"bird"},{default:t(()=>[...e[17]||(e[17]=[a("Bird",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[29]||(e[29]=u("",7))])}}});export{E as __pageData,F as default};

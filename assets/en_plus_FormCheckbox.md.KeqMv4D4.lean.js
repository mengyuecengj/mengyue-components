import{a as l,_ as r}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import{y as v,I as B,o as D,c as M,a8 as u,J as s,w as i,j as t,a,A as n,R as Y}from"./chunks/framework.DvHWw5tv.js";const E=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/FormCheckbox.md","filePath":"en/plus/FormCheckbox.md"}'),A={name:"en/plus/FormCheckbox.md"},F=Object.assign(A,{setup(V){const p=n(!0),h=n(["option1"]),k=n([]),b=n(["red"]),g=n(["mon"]),c=n([]),m=n(["default"]),x=n(["option1"]),C=n(["1"]),y=n(["default"]),f=()=>{Y(()=>{})};return v([p,h,k,b,g,c,m,x,C,y],()=>{f()}),(P,e)=>{const d=B("ShowCode");return D(),M("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[18]||(e[18]=u("",6)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox v-model='singleChecked'>Single Checkbox</MYCheckbox>
</template>
  `.trim()},{demo:i(()=>[t("div",null,[s(l,{modelValue:p.value,"onUpdate:modelValue":e[0]||(e[0]=o=>p.value=o)},{default:i(()=>[...e[5]||(e[5]=[a("Single Checkbox",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[19]||(e[19]=t("h3",{id:"checkbox-group",tabindex:"-1"},[a("Checkbox Group "),t("a",{class:"header-anchor",href:"#checkbox-group","aria-label":"Permalink to “Checkbox Group”"},"​")],-1)),e[20]||(e[20]=t("p",null,[a("Use "),t("code",null,"<MYCheckbox-group></MYCheckbox-group>"),a(" to group checkboxes together.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues1'>
    <MYCheckbox value='option1'>Option 1</MYCheckbox>
    <MYCheckbox value='option2'>Option 2</MYCheckbox>
    <MYCheckbox value='option3'>Option 3</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=o=>h.value=o)},{default:i(()=>[s(l,{value:"option1"},{default:i(()=>[...e[6]||(e[6]=[a("Option 1",-1)])]),_:1}),s(l,{value:"option2"},{default:i(()=>[...e[7]||(e[7]=[a("Option 2",-1)])]),_:1}),s(l,{value:"option3"},{default:i(()=>[...e[8]||(e[8]=[a("Option 3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[21]||(e[21]=t("h2",{id:"layout-direction",tabindex:"-1"},[a("Layout Direction "),t("a",{class:"header-anchor",href:"#layout-direction","aria-label":"Permalink to “Layout Direction”"},"​")],-1)),e[22]||(e[22]=t("h3",{id:"vertical-arrangement",tabindex:"-1"},[a("Vertical Arrangement "),t("a",{class:"header-anchor",href:"#vertical-arrangement","aria-label":"Permalink to “Vertical Arrangement”"},"​")],-1)),e[23]||(e[23]=t("p",null,[a("Use "),t("code",null,'direction="vertical"'),a(" to arrange checkboxes vertically.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues2' direction='vertical'>
    <MYCheckbox value='apple'>Apple</MYCheckbox>
    <MYCheckbox value='banana'>Banana</MYCheckbox>
    <MYCheckbox value='orange'>Orange</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=o=>k.value=o),direction:"vertical"},{default:i(()=>[s(l,{value:"apple"},{default:i(()=>[...e[9]||(e[9]=[a("Apple",-1)])]),_:1}),s(l,{value:"banana"},{default:i(()=>[...e[10]||(e[10]=[a("Banana",-1)])]),_:1}),s(l,{value:"orange"},{default:i(()=>[...e[11]||(e[11]=[a("Orange",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[24]||(e[24]=t("h2",{id:"disabled-state",tabindex:"-1"},[a("Disabled State "),t("a",{class:"header-anchor",href:"#disabled-state","aria-label":"Permalink to “Disabled State”"},"​")],-1)),e[25]||(e[25]=t("h3",{id:"disable-entire-group",tabindex:"-1"},[a("Disable Entire Group "),t("a",{class:"header-anchor",href:"#disable-entire-group","aria-label":"Permalink to “Disable Entire Group”"},"​")],-1)),e[26]||(e[26]=t("p",null,"Disable the entire checkbox group.",-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues3' disabled>
    <MYCheckbox value='red'>Red</MYCheckbox>
    <MYCheckbox value='green'>Green</MYCheckbox>
    <MYCheckbox value='blue'>Blue</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=o=>b.value=o),disabled:""},{default:i(()=>[s(l,{value:"red"},{default:i(()=>[...e[12]||(e[12]=[a("Red",-1)])]),_:1}),s(l,{value:"green"},{default:i(()=>[...e[13]||(e[13]=[a("Green",-1)])]),_:1}),s(l,{value:"blue"},{default:i(()=>[...e[14]||(e[14]=[a("Blue",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[27]||(e[27]=t("h2",{id:"custom-spacing",tabindex:"-1"},[a("Custom Spacing "),t("a",{class:"header-anchor",href:"#custom-spacing","aria-label":"Permalink to “Custom Spacing”"},"​")],-1)),e[28]||(e[28]=t("p",null,[a("Use the "),t("code",null,"gap"),a(" property to control the spacing between checkboxes.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYCheckbox-group v-model='selectedValues5' gap='72px'>
    <MYCheckbox value='cat'>Cat</MYCheckbox>
    <MYCheckbox value='dog'>Dog</MYCheckbox>
    <MYCheckbox value='bird'>Bird</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=o=>c.value=o),gap:"72px"},{default:i(()=>[s(l,{value:"cat"},{default:i(()=>[...e[15]||(e[15]=[a("Cat",-1)])]),_:1}),s(l,{value:"dog"},{default:i(()=>[...e[16]||(e[16]=[a("Dog",-1)])]),_:1}),s(l,{value:"bird"},{default:i(()=>[...e[17]||(e[17]=[a("Bird",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[29]||(e[29]=u("",7))])}}});export{E as __pageData,F as default};

import{_ as n}from"./chunks/text.vue_vue_type_script_setup_true_lang.Couc8lvn.js";import{_ as m,a as l}from"./chunks/col.vue_vue_type_script_setup_true_lang.DdC9l-8w.js";import{I as d,o as x,c as h,a8 as r,J as t,w as s,a as i,j as a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useOverallComputed.oY471y-F.js";const u={style:{display:"flex",gap:"20px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},T={style:{display:"flex","flex-direction":"column",gap:"10px"}},D=JSON.parse('{"title":"Text","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/Basictext.md","filePath":"en/components/Basictext.md"}'),g={name:"en/components/Basictext.md"},_=Object.assign(g,{setup(f){return(y,e)=>{const p=d("MYBorder"),o=d("ShowCode");return x(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[16]||(e[16]=r("",6)),t(o,{title:"Code Demo",code:`
<template>
  <MYText>Default Text</MYText>
  <MYText type='primary'>primary Text</MYText>
  <MYText type='success'>Success Text</MYText>
  <MYText type='warning'>Warning Text</MYText>
  <MYText type='danger'>Danger Text</MYText>
  <MYText type='info'>Info Text</MYText>
</template>
  `.trim()},{demo:s(()=>[t(m,{gutter:16},{default:s(()=>[t(l,{span:8},{default:s(()=>[t(n,{plain:""},{default:s(()=>[...e[0]||(e[0]=[i("Default Text",-1)])]),_:1})]),_:1}),t(l,{span:8},{default:s(()=>[t(n,{type:"primary",plain:""},{default:s(()=>[...e[1]||(e[1]=[i("primary Text",-1)])]),_:1})]),_:1}),t(l,{span:8},{default:s(()=>[t(n,{type:"success",plain:""},{default:s(()=>[...e[2]||(e[2]=[i("Success Text",-1)])]),_:1})]),_:1}),t(p,{borderColor:"transparent",paddingText:"10px"}),t(l,{span:8},{default:s(()=>[t(n,{type:"warning",plain:""},{default:s(()=>[...e[3]||(e[3]=[i("Warning Text",-1)])]),_:1})]),_:1}),t(l,{span:8},{default:s(()=>[t(n,{type:"danger",plain:""},{default:s(()=>[...e[4]||(e[4]=[i("Danger Text",-1)])]),_:1})]),_:1}),t(l,{span:8},{default:s(()=>[t(n,{type:"info",plain:""},{default:s(()=>[...e[5]||(e[5]=[i("Info Text",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e[17]||(e[17]=a("h2",{id:"custom-color",tabindex:"-1"},[i("Custom Color "),a("a",{class:"header-anchor",href:"#custom-color","aria-label":"Permalink to “Custom Color”"},"​")],-1)),e[18]||(e[18]=a("p",null,[i("If the default colors don't meet your needs, you can also customize the color using the "),a("code",null,"textColor"),i(" property.")],-1)),t(o,{title:"Code Demo",code:`
<template>
  <MYText textColor='#ff0000'>Custom Red Text</MYText>
  <MYText textColor='pink'>Custom Pink Text</MYText>
</template>
  `.trim()},{demo:s(()=>[a("div",u,[t(n,{textColor:"#ff0000"},{default:s(()=>[...e[6]||(e[6]=[i("Custom Red Text",-1)])]),_:1}),t(n,{textColor:"pink"},{default:s(()=>[...e[7]||(e[7]=[i("Custom Pink Text",-1)])]),_:1})])]),_:1},8,["code"]),e[19]||(e[19]=a("h2",{id:"sizing",tabindex:"-1"},[i("Sizing "),a("a",{class:"header-anchor",href:"#sizing","aria-label":"Permalink to “Sizing”"},"​")],-1)),e[20]||(e[20]=a("h3",{id:"size",tabindex:"-1"},[i("size "),a("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),e[21]||(e[21]=a("p",null,[i("Use the "),a("code",null,"size"),i(" property to adjust the text size.")],-1)),t(o,{title:"Code Demo",code:`
<template>
  <MYText size='small'>small Text</MYText>
  <MYText size='medium'>medium Text</MYText>
  <MYText size='large'>large Text</MYText>
</template>
  `.trim()},{demo:s(()=>[a("div",k,[t(n,{size:"small"},{default:s(()=>[...e[8]||(e[8]=[i("small Text",-1)])]),_:1}),t(n,{size:"medium"},{default:s(()=>[...e[9]||(e[9]=[i("medium Text",-1)])]),_:1}),t(n,{size:"large"},{default:s(()=>[...e[10]||(e[10]=[i("large Text",-1)])]),_:1})])]),_:1},8,["code"]),e[22]||(e[22]=a("h3",{id:"custom-size",tabindex:"-1"},[i("Custom Size "),a("a",{class:"header-anchor",href:"#custom-size","aria-label":"Permalink to “Custom Size”"},"​")],-1)),e[23]||(e[23]=a("p",null,"Custom text sizes are also supported:",-1)),t(o,{title:"Code Demo",code:`
<template>
  <MYText size='20px'>Custom Text 20px</MYText>
  <MYText :size='20'>Custom Text: 20</MYText>
  <MYText size='5rem'>Custom Text 5rem</MYText>
  <MYText size='5em'>Custom Text 5em</MYText>
</template>
  `.trim()},{demo:s(()=>[a("div",T,[t(n,{size:"20px"},{default:s(()=>[...e[11]||(e[11]=[i("Custom Text 20px",-1)])]),_:1}),t(n,{size:20},{default:s(()=>[...e[12]||(e[12]=[i("Custom Text: 20",-1)])]),_:1}),t(n,{size:"5rem"},{default:s(()=>[...e[13]||(e[13]=[i("Custom Text 5rem",-1)])]),_:1}),t(n,{size:"5em"},{default:s(()=>[...e[14]||(e[14]=[i("Custom Text 5em",-1)])]),_:1})])]),_:1},8,["code"]),e[24]||(e[24]=a("h3",{id:"combined-usage",tabindex:"-1"},[i("Combined Usage "),a("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[25]||(e[25]=a("p",null,"Finally, combine multiple APIs:",-1)),t(o,{title:"Code Demo",code:`
<template>
  <MYText size='5em' textColor='blue'>Combined usage with medium and blue</MYText>
</template>
  `.trim()},{demo:s(()=>[t(n,{size:"5em",textColor:"blue"},{default:s(()=>[...e[15]||(e[15]=[i("Combined usage with medium and blue",-1)])]),_:1})]),_:1},8,["code"]),e[26]||(e[26]=r("",5))])}}});export{D as __pageData,_ as default};

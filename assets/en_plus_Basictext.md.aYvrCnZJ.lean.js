import{_ as n}from"./chunks/text.vue_vue_type_script_setup_true_lang.Couc8lvn.js";import{_ as m,a as o}from"./chunks/col.vue_vue_type_script_setup_true_lang.DdC9l-8w.js";import{I as d,o as h,c as u,a8 as r,J as t,w as s,a as i,j as a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useOverallComputed.oY471y-F.js";const x={style:{display:"flex",gap:"20px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},f={style:{display:"flex","flex-direction":"column",gap:"10px"}},D=JSON.parse('{"title":"Text","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/Basictext.md","filePath":"en/plus/Basictext.md"}'),c={name:"en/plus/Basictext.md"},B=Object.assign(c,{setup(g){return(y,e)=>{const p=d("MYBorder"),l=d("ShowCode");return h(),u("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[16]||(e[16]=r("",6)),t(l,{title:"Code Demo",code:`
<template>
  <MYText>Default text</MYText>
  <MYText type='primary'>Primary text</MYText>
  <MYText type='success'>Success text</MYText>
  <MYText type='warning'>Warning text</MYText>
  <MYText type='danger'>Danger text</MYText>
  <MYText type='info'>Info text</MYText>
</template>
  `.trim()},{demo:s(()=>[t(m,{gutter:16},{default:s(()=>[t(o,{span:8},{default:s(()=>[t(n,{plain:""},{default:s(()=>[...e[0]||(e[0]=[i("Default text",-1)])]),_:1})]),_:1}),t(o,{span:8},{default:s(()=>[t(n,{type:"primary",plain:""},{default:s(()=>[...e[1]||(e[1]=[i("Primary text",-1)])]),_:1})]),_:1}),t(o,{span:8},{default:s(()=>[t(n,{type:"success",plain:""},{default:s(()=>[...e[2]||(e[2]=[i("Success text",-1)])]),_:1})]),_:1}),t(p,{borderColor:"transparent",paddingText:"10px"}),t(o,{span:8},{default:s(()=>[t(n,{type:"warning",plain:""},{default:s(()=>[...e[3]||(e[3]=[i("Warning text",-1)])]),_:1})]),_:1}),t(o,{span:8},{default:s(()=>[t(n,{type:"danger",plain:""},{default:s(()=>[...e[4]||(e[4]=[i("Danger text",-1)])]),_:1})]),_:1}),t(o,{span:8},{default:s(()=>[t(n,{type:"info",plain:""},{default:s(()=>[...e[5]||(e[5]=[i("Info text",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e[17]||(e[17]=a("h2",{id:"custom-color",tabindex:"-1"},[i("Custom Color "),a("a",{class:"header-anchor",href:"#custom-color","aria-label":"Permalink to “Custom Color”"},"​")],-1)),e[18]||(e[18]=a("p",null,[i("If the default colors do not meet your needs, you can customize the text color using the "),a("code",null,"color"),i(" prop.")],-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYText color='#ff0000'>Custom red text</MYText>
  <MYText color='pink'>Custom pink text</MYText>
</template>
  `.trim()},{demo:s(()=>[a("div",x,[t(n,{Tecolor:"#ff0000"},{default:s(()=>[...e[6]||(e[6]=[i("Custom red text",-1)])]),_:1}),t(n,{Tecolor:"pink"},{default:s(()=>[...e[7]||(e[7]=[i("Custom pink text",-1)])]),_:1})])]),_:1},8,["code"]),e[19]||(e[19]=a("h2",{id:"sizes",tabindex:"-1"},[i("Sizes "),a("a",{class:"header-anchor",href:"#sizes","aria-label":"Permalink to “Sizes”"},"​")],-1)),e[20]||(e[20]=a("h3",{id:"size",tabindex:"-1"},[i("size "),a("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),e[21]||(e[21]=a("p",null,[i("Use the "),a("code",null,"size"),i(" prop to adjust the text size.")],-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYText size='small'>Small text</MYText>
  <MYText size='medium'>Medium text</MYText>
  <MYText size='large'>Large text</MYText>
</template>
  `.trim()},{demo:s(()=>[a("div",k,[t(n,{size:"small"},{default:s(()=>[...e[8]||(e[8]=[i("Small text",-1)])]),_:1}),t(n,{size:"medium"},{default:s(()=>[...e[9]||(e[9]=[i("Medium text",-1)])]),_:1}),t(n,{size:"large"},{default:s(()=>[...e[10]||(e[10]=[i("Large text",-1)])]),_:1})])]),_:1},8,["code"]),e[22]||(e[22]=a("h3",{id:"custom-size",tabindex:"-1"},[i("Custom Size "),a("a",{class:"header-anchor",href:"#custom-size","aria-label":"Permalink to “Custom Size”"},"​")],-1)),e[23]||(e[23]=a("p",null,"You can also customize the text size:",-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYText size='20px'>Custom text 20px</MYText>
  <MYText :size='20'>Custom text: 20</MYText>
  <MYText size='5rem'>Custom text 5rem</MYText>
  <MYText size='5em'>Custom text 5em</MYText>
</template>
  `.trim()},{demo:s(()=>[a("div",f,[t(n,{size:"20px"},{default:s(()=>[...e[11]||(e[11]=[i("Custom text 20px",-1)])]),_:1}),t(n,{size:20},{default:s(()=>[...e[12]||(e[12]=[i("Custom text: 20",-1)])]),_:1}),t(n,{size:"5rem"},{default:s(()=>[...e[13]||(e[13]=[i("Custom text 5rem",-1)])]),_:1}),t(n,{size:"5em"},{default:s(()=>[...e[14]||(e[14]=[i("Custom text 5em",-1)])]),_:1})])]),_:1},8,["code"]),e[24]||(e[24]=a("h3",{id:"combined-usage",tabindex:"-1"},[i("Combined Usage "),a("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[25]||(e[25]=a("p",null,"Finally, here is a combination of multiple APIs:",-1)),t(l,{title:"Code Demo",code:`
<template>
  <MYText size='5em' color='blue'>Combined usage: medium size and blue color</MYText>
</template>
  `.trim()},{demo:s(()=>[t(n,{size:"5em",Tecolor:"blue"},{default:s(()=>[...e[15]||(e[15]=[i("Combined usage: medium size and blue color",-1)])]),_:1})]),_:1},8,["code"]),e[26]||(e[26]=r("",5))])}}});export{D as __pageData,B as default};

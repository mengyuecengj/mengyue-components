import{_ as n}from"./chunks/a.vue_vue_type_script_setup_true_lang.B07wek4H.js";import{I as o,o as r,c as p,a8 as l,J as a,w as s,j as t,a as i}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const h={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},u={style:{display:"flex","flex-direction":"column",gap:"10px"}},m={style:{display:"flex","flex-direction":"column",gap:"10px"}},M=JSON.parse('{"title":"A","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/BasicA.md","filePath":"en/components/BasicA.md"}'),c={name:"en/components/BasicA.md"},Y=Object.assign(c,{setup(b){return(y,e)=>{const d=o("ShowCode");return r(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[16]||(e[16]=l("",6)),a(d,{title:"Code Demo",code:`
<template>
  <MYa type='primary'>primary type</MYa>
  <MYa type='success'>success type</MYa>
  <MYa type='warning'>warning type</MYa>
  <MYa type='danger'>danger type</MYa>
  <MYa type='info'>info type</MYa>
  <MYa>default type</MYa>
</template>
  `.trim()},{demo:s(()=>[t("div",h,[a(n,{type:"primary"},{default:s(()=>[...e[0]||(e[0]=[i("primary type",-1)])]),_:1}),a(n,{type:"success"},{default:s(()=>[...e[1]||(e[1]=[i("success type",-1)])]),_:1}),a(n,{type:"warning"},{default:s(()=>[...e[2]||(e[2]=[i("warning type",-1)])]),_:1}),a(n,{type:"danger"},{default:s(()=>[...e[3]||(e[3]=[i("danger type",-1)])]),_:1}),a(n,{type:"info"},{default:s(()=>[...e[4]||(e[4]=[i("info type",-1)])]),_:1}),a(n,null,{default:s(()=>[...e[5]||(e[5]=[i("default type",-1)])]),_:1})])]),_:1},8,["code"]),e[17]||(e[17]=t("h3",{id:"custom-color",tabindex:"-1"},[i("Custom Color "),t("a",{class:"header-anchor",href:"#custom-color","aria-label":"Permalink to “Custom Color”"},"​")],-1)),e[18]||(e[18]=t("p",null,[i("If the default colors do not meet your needs, you can customize the color using the "),t("code",null,"color"),i(" attribute.")],-1)),a(d,{title:"Code Demo",code:`
<template>
  <MYa color='#ff0000'>Custom Red Link</MYa>
  <MYa color='red'>Custom Red Link</MYa>
</template>
  `.trim()},{demo:s(()=>[t("div",k,[a(n,{color:"#ff0000"},{default:s(()=>[...e[6]||(e[6]=[i("Custom Red Link",-1)])]),_:1}),a(n,{color:"red"},{default:s(()=>[...e[7]||(e[7]=[i("Custom Red Link",-1)])]),_:1})])]),_:1},8,["code"]),e[19]||(e[19]=t("h2",{id:"about-interactive-behavior",tabindex:"-1"},[i("About Interactive Behavior "),t("a",{class:"header-anchor",href:"#about-interactive-behavior","aria-label":"Permalink to “About Interactive Behavior”"},"​")],-1)),e[20]||(e[20]=t("h3",{id:"disabled",tabindex:"-1"},[i("disabled "),t("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),e[21]||(e[21]=t("p",null,[i("Use the "),t("code",null,"disabled"),i(" attribute to disable the link.")],-1)),a(d,{title:"Code Demo",code:`
<template>
  <MYa disabled>Disabled Link</MYa>
</template>
  `.trim()},{demo:s(()=>[a(n,{disabled:""},{default:s(()=>[...e[8]||(e[8]=[i("Disabled Link",-1)])]),_:1})]),_:1},8,["code"]),e[22]||(e[22]=t("h3",{id:"underline",tabindex:"-1"},[i("underline "),t("a",{class:"header-anchor",href:"#underline","aria-label":"Permalink to “underline”"},"​")],-1)),e[23]||(e[23]=t("p",null,[i("Use the "),t("code",null,"underline"),i(" attribute to control the display of the link's underline.")],-1)),a(d,{title:"Code Demo",code:`
<template>
      <MYa underline>Link without underline</MYa>
      <MYa :underline='false'>Link with underline</MYa>
</template>
  `.trim()},{demo:s(()=>[t("div",u,[a(n,{underline:""},{default:s(()=>[...e[9]||(e[9]=[i("Link without underline",-1)])]),_:1}),a(n,{underline:!1},{default:s(()=>[...e[10]||(e[10]=[i("Link with underline",-1)])]),_:1})])]),_:1},8,["code"]),e[24]||(e[24]=t("h2",{id:"about-size",tabindex:"-1"},[i("About Size "),t("a",{class:"header-anchor",href:"#about-size","aria-label":"Permalink to “About Size”"},"​")],-1)),e[25]||(e[25]=t("h3",{id:"size",tabindex:"-1"},[i("size "),t("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),e[26]||(e[26]=t("p",null,[i("Use the "),t("code",null,"size"),i(" attribute to adjust the link size.")],-1)),a(d,{title:"Code Demo",code:`
<template>
  <MYa size='large'>large size</MYa>
  <MYa size='medium'>medium size</MYa>
  <MYa size='small'>small size</MYa>
  <MYa size='mini'>mini size</MYa>
</template>
  `.trim()},{demo:s(()=>[t("div",m,[a(n,{size:"large"},{default:s(()=>[...e[11]||(e[11]=[i("large size",-1)])]),_:1}),a(n,{size:"medium"},{default:s(()=>[...e[12]||(e[12]=[i("medium size",-1)])]),_:1}),a(n,{size:"small"},{default:s(()=>[...e[13]||(e[13]=[i("small size",-1)])]),_:1}),a(n,{size:"mini"},{default:s(()=>[...e[14]||(e[14]=[i("mini size",-1)])]),_:1})])]),_:1},8,["code"]),e[27]||(e[27]=t("h3",{id:"combined-usage",tabindex:"-1"},[i("Combined Usage "),t("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[28]||(e[28]=t("p",null,"Finally, achieve combined usage of multiple APIs:",-1)),a(d,{title:"Code Demo",code:`
<template>
  <MYa 
    size='large' 
    color='#ff0000' 
    underline
  >
    Combined: large + red + underline
  </MYa>
</template>
  `.trim()},{demo:s(()=>[a(n,{size:"large",color:"#ff0000",underline:""},{default:s(()=>[...e[15]||(e[15]=[i(" Combined: large + red + underline ",-1)])]),_:1})]),_:1},8,["code"]),e[29]||(e[29]=l("",6))])}}});export{M as __pageData,Y as default};

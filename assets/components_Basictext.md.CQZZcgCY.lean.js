import{_ as l}from"./chunks/text.vue_vue_type_script_setup_true_lang.Couc8lvn.js";import{_ as h,a as n}from"./chunks/col.vue_vue_type_script_setup_true_lang.DdC9l-8w.js";import{I as r,o as m,c as k,a8 as p,J as t,w as s,a,j as i}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useOverallComputed.oY471y-F.js";const x={style:{display:"flex",gap:"20px"}},g={style:{display:"flex","flex-direction":"column",gap:"10px"}},u={style:{display:"flex","flex-direction":"column",gap:"10px"}},A=JSON.parse('{"title":"Text","description":"","frontmatter":{},"headers":[],"relativePath":"components/Basictext.md","filePath":"components/Basictext.md"}'),f={name:"components/Basictext.md"},P=Object.assign(f,{setup(y){return(b,e)=>{const o=r("MYBorder"),d=r("ShowCode");return m(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[16]||(e[16]=p("",6)),t(d,{title:"代码演示",code:`
<template>
  <MYText>Default 文本</MYText>
  <MYText type='primary'>primary 文本</MYText>
  <MYText type='success'>Success 文本</MYText>
  <MYText type='warning'>Warning 文本</MYText>
  <MYText type='danger'>Danger 文本</MYText>
  <MYText type='info'>Info 文本</MYText>
</template>
  `.trim()},{demo:s(()=>[t(h,{gutter:16},{default:s(()=>[t(n,{span:8},{default:s(()=>[t(l,{plain:""},{default:s(()=>[...e[0]||(e[0]=[a("Default文本",-1)])]),_:1})]),_:1}),t(n,{span:8},{default:s(()=>[t(l,{type:"primary",plain:""},{default:s(()=>[...e[1]||(e[1]=[a("primary文本",-1)])]),_:1})]),_:1}),t(n,{span:8},{default:s(()=>[t(l,{type:"success",plain:""},{default:s(()=>[...e[2]||(e[2]=[a("Success文本",-1)])]),_:1})]),_:1}),t(o,{borderColor:"transparent",paddingText:"10px"}),t(n,{span:8},{default:s(()=>[t(l,{type:"warning",plain:""},{default:s(()=>[...e[3]||(e[3]=[a("Warning文本",-1)])]),_:1})]),_:1}),t(n,{span:8},{default:s(()=>[t(l,{type:"danger",plain:""},{default:s(()=>[...e[4]||(e[4]=[a("Danger文本",-1)])]),_:1})]),_:1}),t(n,{span:8},{default:s(()=>[t(l,{type:"info",plain:""},{default:s(()=>[...e[5]||(e[5]=[a("Info文本",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),e[17]||(e[17]=i("h2",{id:"自定义颜色",tabindex:"-1"},[a("自定义颜色 "),i("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),e[18]||(e[18]=i("p",null,[a("如果默认颜色不满足需求，还可以自定义颜色，使用 "),i("code",null,"color"),a(" 属性自定义文本颜色。")],-1)),t(d,{title:"代码演示",code:`
<template>
  <MYText color='#ff0000'>自定义红色文本</MYText>
  <MYText color='pink'>自定义粉色文本</MYText>
</template>
  `.trim()},{demo:s(()=>[i("div",x,[t(l,{textColor:"#ff0000"},{default:s(()=>[...e[6]||(e[6]=[a("自定义红色文本",-1)])]),_:1}),t(l,{textColor:"pink"},{default:s(()=>[...e[7]||(e[7]=[a("自定义粉色文本",-1)])]),_:1})])]),_:1},8,["code"]),e[19]||(e[19]=i("h2",{id:"关于尺寸",tabindex:"-1"},[a("关于尺寸 "),i("a",{class:"header-anchor",href:"#关于尺寸","aria-label":"Permalink to “关于尺寸”"},"​")],-1)),e[20]||(e[20]=i("h3",{id:"size",tabindex:"-1"},[a("size "),i("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),e[21]||(e[21]=i("p",null,[a("使用 "),i("code",null,"size"),a(" 属性可以调整文本大小。")],-1)),t(d,{title:"代码演示",code:`
<template>
  <MYText size='small'>small 文本</MYText>
  <MYText size='medium'>medium 文本</MYText>
  <MYText size='large'>large 文本</MYText>
</template>
  `.trim()},{demo:s(()=>[i("div",g,[t(l,{size:"small"},{default:s(()=>[...e[8]||(e[8]=[a("small 文本",-1)])]),_:1}),t(l,{size:"medium"},{default:s(()=>[...e[9]||(e[9]=[a("medium 文本",-1)])]),_:1}),t(l,{size:"large"},{default:s(()=>[...e[10]||(e[10]=[a("large 文本",-1)])]),_:1})])]),_:1},8,["code"]),e[22]||(e[22]=i("h3",{id:"自定义尺寸",tabindex:"-1"},[a("自定义尺寸 "),i("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[23]||(e[23]=i("p",null,"也可以支持自定义文本大小：",-1)),t(d,{title:"代码演示",code:`
<template>
  <MYText size='20px'>自定义文本20px</MYText>
  <MYText :size='20'>自定义文本:20</MYText>
  <MYText size='5rem'>自定义文本5rem</MYText>
  <MYText size='5em'>自定义文本5em</MYText>
</template>
  `.trim()},{demo:s(()=>[i("div",u,[t(l,{size:"20px"},{default:s(()=>[...e[11]||(e[11]=[a("自定义文本20px",-1)])]),_:1}),t(l,{size:20},{default:s(()=>[...e[12]||(e[12]=[a("自定义文本:20",-1)])]),_:1}),t(l,{size:"5rem"},{default:s(()=>[...e[13]||(e[13]=[a("自定义文本5rem",-1)])]),_:1}),t(l,{size:"5em"},{default:s(()=>[...e[14]||(e[14]=[a("自定义文本5em",-1)])]),_:1})])]),_:1},8,["code"]),e[24]||(e[24]=i("h3",{id:"组合使用",tabindex:"-1"},[a("组合使用 "),i("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),e[25]||(e[25]=i("p",null,"最后，实现多种 API 组合使用：",-1)),t(d,{title:"代码演示",code:`
<template>
  <MYText size='5em' color='blue'>组合使用medium和blue</MYText>
</template>
  `.trim()},{demo:s(()=>[t(l,{size:"5em",textColor:"blue"},{default:s(()=>[...e[15]||(e[15]=[a("组合使用medium和blue",-1)])]),_:1})]),_:1},8,["code"]),e[26]||(e[26]=p("",5))])}}});export{A as __pageData,P as default};

import{u as g}from"./chunks/useClassComputed.DlyVcdbE.js";import{u as m}from"./chunks/useStyleComputed.DokJCVvp.js";import{a as u}from"./chunks/useScrollCommon.CutdSYqc.js";import{d as y,o as k,c,O as f,k as o,n as x,r as C,I as B,ah as p,J as t,w as i,a as e,j as l}from"./chunks/framework.DoR57c7M.js";import{_ as r}from"./chunks/text.vue_vue_type_script_setup_true_lang.45Cn3a16.js";const S={height:{type:String,default:""},maxHeight:{type:String,default:""},scrollWidth:{type:String,default:""},widthX:{type:Boolean,default:!1}},A={thumbColor:{type:String,default:""},thumbHoverColor:{type:String,default:""},trackColor:{type:String,default:""}},D={disabledHeight:{type:Boolean,default:!1},disabledWidth:{type:Boolean,default:!1},disabledScroll:{type:Boolean,default:!1}},M={corner:{type:Boolean,default:!1},tag:{type:String,default:"div"}},T={...S,...A,...D,...M};function Y(a){const n=g({baseClass:"scrollbar-container",flagClasses:{Maxheight:!!a.Maxheight,widthX:a.widthX,disabledHeight:a.disabledHeight,disabledWidth:a.disabledWidth,disabledScroll:a.disabledScroll,corner:a.corner}}),s=m(a,{propToStyleMap:{height:"height",Maxheight:"maxHeight",scrollWidth:"scrollWidth"},cssVariables:u({thumbColor:a.thumbColor,thumbHoverColor:a.thumbHoverColor,trackColor:a.trackColor,scrollWidth:a.scrollWidth,scrollHeight:a.scrollWidth})});return{scrollbarClass:n,scrollbarStyle:s}}const _=["is"],h=y({name:"MYScrollbar",__name:"scrollbar",props:T,setup(a){const n=a,{scrollbarClass:s,scrollbarStyle:d}=Y(n);return(b,v)=>(k(),c("div",{is:n.tag,class:x(o(s)),style:f(o(d))},[C(b.$slots,"default")],14,_))}}),w=JSON.parse('{"title":"Scrollbar","description":"","frontmatter":{},"headers":[],"relativePath":"components/DistributionScrollbar.md","filePath":"components/DistributionScrollbar.md"}'),P={name:"components/DistributionScrollbar.md"},V=Object.assign(P,{setup(a){return(n,s)=>{const d=B("ShowCode");return k(),c("div",null,[s[9]||(s[9]=p("",6)),t(d,{title:"代码演示",code:`
<template>
  <MYScrollbar widthX ScrollWidth='20px' corner>
    <MYText size='30rem'>11111111111111111111111111111</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:i(()=>[t(h,{widthX:"",ScrollWidth:"20px",corner:""},{default:i(()=>[t(r,{size:"30rem"},{default:i(()=>[...s[0]||(s[0]=[e("11111111111111111111111111111",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[10]||(s[10]=l("h3",{id:"滚动条颜色",tabindex:"-1"},[e("滚动条颜色 "),l("a",{class:"header-anchor",href:"#滚动条颜色","aria-label":"Permalink to “滚动条颜色”"},"​")],-1)),s[11]||(s[11]=l("p",null,"改变滚动条的滑块，滑轨，鼠标点击或者触碰滑块时的颜色：",-1)),t(d,{title:"代码演示",code:`
<template>
  <MYScrollbar 
    height='500px' 
    thumbColor='#ff0000' 
    thumbHoverColor='#2c2' 
    trackColor='#797'
  >
    <MYText size='30rem'>111</MYText>
    <MYText size='30rem'>111</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:i(()=>[t(h,{height:"500px",thumbColor:"#ff0000",thumbHoverColor:"#2c2",trackColor:"#797"},{default:i(()=>[t(r,{size:"30rem"},{default:i(()=>[...s[1]||(s[1]=[e("111",-1)])]),_:1}),t(r,{size:"30rem"},{default:i(()=>[...s[2]||(s[2]=[e("111",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[12]||(s[12]=l("h3",{id:"禁用滚动",tabindex:"-1"},[e("禁用滚动 "),l("a",{class:"header-anchor",href:"#禁用滚动","aria-label":"Permalink to “禁用滚动”"},"​")],-1)),s[13]||(s[13]=l("p",null,"取消滚动条禁止滚动功能：",-1)),t(d,{title:"代码演示",code:`
<template>
  <MYScrollbar height='500px' Maxheight='800px' disabledScroll>
    <MYText size='30rem'>222</MYText>
    <MYText size='30rem'>222</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:i(()=>[t(h,{height:"500px",Maxheight:"800px",disabledScroll:""},{default:i(()=>[t(r,{size:"30rem"},{default:i(()=>[...s[3]||(s[3]=[e("222",-1)])]),_:1}),t(r,{size:"30rem"},{default:i(()=>[...s[4]||(s[4]=[e("222",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[14]||(s[14]=l("h3",{id:"设置最大高度",tabindex:"-1"},[e("设置最大高度 "),l("a",{class:"header-anchor",href:"#设置最大高度","aria-label":"Permalink to “设置最大高度”"},"​")],-1)),s[15]||(s[15]=l("p",null,"设置最大高度为800px：",-1)),t(d,{title:"代码演示",code:`
<template>
  <MYScrollbar height='500px' Maxheight='800px'>
    <MYText size='30rem'>333</MYText>
    <MYText size='30rem'>333</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:i(()=>[t(h,{height:"500px",Maxheight:"800px"},{default:i(()=>[t(r,{size:"30rem"},{default:i(()=>[...s[5]||(s[5]=[e("333",-1)])]),_:1}),t(r,{size:"30rem"},{default:i(()=>[...s[6]||(s[6]=[e("333",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[16]||(s[16]=l("h3",{id:"组合使用",tabindex:"-1"},[e("组合使用 "),l("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),s[17]||(s[17]=l("p",null,"多种属性组合使用：",-1)),t(d,{title:"代码演示",code:`
<template>
  <MYScrollbar 
    height='600px' 
    Maxheight='1000px' 
    thumbColor='#fff' 
    thumbHoverColor='#191919' 
    trackColor='#2c2'
  >
    <MYText size='30rem'>444</MYText>
    <MYText size='30rem'>444</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:i(()=>[t(h,{height:"600px",Maxheight:"1000px",thumbColor:"#fff",thumbHoverColor:"#191919",trackColor:"#2c2"},{default:i(()=>[t(r,{size:"30rem"},{default:i(()=>[...s[7]||(s[7]=[e("444",-1)])]),_:1}),t(r,{size:"30rem"},{default:i(()=>[...s[8]||(s[8]=[e("444",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),s[18]||(s[18]=p("",5))])}}});export{w as __pageData,V as default};

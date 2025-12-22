import{d as y,x as f,p as v,Z as B,b as _,o as p,w as s,c as m,e as T,O as x,r as A,j as e,T as P,I as g,ah as b,J as i,a as r}from"./chunks/framework.D3tsReks.js";const C={visibilityHeight:{type:Number,default:200},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},target:{type:String,default:""}},h=y({name:"MYBacktop",__name:"backtop",props:C,setup(k){const a=k,t=f(!1);let l=window;const o=()=>a.target?document.querySelector(a.target)?.scrollTop||0:document.documentElement.scrollTop||document.body.scrollTop,d=()=>{t.value=o()>=a.visibilityHeight},u=()=>{if(a.target){const n=document.querySelector(a.target);n&&n.scrollTo({top:0,behavior:"smooth"})}else window.scrollTo({top:0,behavior:"smooth"})};return v(()=>{l=a.target?document.querySelector(a.target):window,l?.addEventListener("scroll",d),d()}),B(()=>{l?.removeEventListener("scroll",d)}),(n,c)=>(p(),_(P,{name:"fade"},{default:s(()=>[t.value?(p(),m("div",{key:0,class:"my-backtop",style:x({right:`${n.right}px`,bottom:`${n.bottom}px`}),onClick:u},[A(n.$slots,"default",{},()=>[c[0]||(c[0]=e("div",{class:"default-content"},"↑",-1))])],4)):T("",!0)]),_:3}))}}),D=JSON.parse('{"title":"BackTop","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationBacktop.md","filePath":"components/NavigationBacktop.md"}'),S={name:"components/NavigationBacktop.md"},E=Object.assign(S,{setup(k){return(a,t)=>{const l=g("ClientOnly"),o=g("ShowCode");return p(),m("div",null,[t[1]||(t[1]=b("",6)),i(o,{title:"代码演示",code:`
<template>
  <MYBacktop :right='50' :bottom='80' />
</template>
  `.trim()},{demo:s(()=>[i(l,null,{default:s(()=>[i(h,{right:50,bottom:80})]),_:1})]),_:1},8,["code"]),t[2]||(t[2]=e("h3",{id:"自定义位置",tabindex:"-1"},[r("自定义位置 "),e("a",{class:"header-anchor",href:"#自定义位置","aria-label":"Permalink to “自定义位置”"},"​")],-1)),t[3]||(t[3]=e("p",null,[r("通过 "),e("code",null,"right"),r(" 和 "),e("code",null,"bottom"),r(" 属性可以自定义组件在页面中的位置。")],-1)),i(o,{title:"代码演示",code:`
<template>
  <MYBacktop :right='100' :bottom='100' />
</template>
  `.trim()},{demo:s(()=>[i(l,null,{default:s(()=>[i(h,{right:100,bottom:100})]),_:1})]),_:1},8,["code"]),t[4]||(t[4]=e("h3",{id:"自定义插槽用法",tabindex:"-1"},[r("自定义插槽用法 "),e("a",{class:"header-anchor",href:"#自定义插槽用法","aria-label":"Permalink to “自定义插槽用法”"},"​")],-1)),t[5]||(t[5]=e("p",null,"使用插槽可以完全自定义返回顶部按钮的内容和样式。",-1)),i(o,{title:"代码演示",code:`
<template>
  <MYBacktop :bottom='140' :right='110'>
    <div
      style='
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
        font-weight: bold;
      '
    >
      UP
    </div>
  </MYBacktop>
</template>
  `.trim()},{demo:s(()=>[i(l,null,{default:s(()=>[i(h,{bottom:140,right:110},{default:s(()=>[...t[0]||(t[0]=[e("div",{style:{height:"100%",width:"100%","background-color":"var(--el-bg-color-overlay)","box-shadow":"var(--el-box-shadow-lighter)","text-align":"center","line-height":"40px",color:"#1989fa","font-weight":"bold"}}," UP ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[6]||(t[6]=b("",5))])}}});export{D as __pageData,E as default};

import{a as H,b as N}from"./chunks/useOverallComputed.BG-BUn0l.js";import{d as m,b as y,o as k,w as n,r as M,O as f,k as d,n as A,K as b,a0 as $,h as L,a3 as V,c as v,G as I,H as R,x as P,p as q,s as O,I as j,ah as S,J as l,j as a,a as c}from"./chunks/framework.D3tsReks.js";import"./chunks/useClassComputed.XPUKWacB.js";import"./chunks/useStyleComputed.BZuPLADM.js";const B={tag:{type:String,default:"div"},height:{type:[String,Number],default:"",validator:i=>typeof i=="string"||typeof i=="number"&&!isNaN(i)},width:{type:[String,Number],default:"",validator:i=>typeof i=="string"||typeof i=="number"&&!isNaN(i)},background:{type:String,default:""},fixed:{type:Boolean,default:!1},position:{type:String,default:"left",validator:i=>["left","right"].includes(i)}},z={...B,fixed:{type:Boolean,default:!1},tag:{type:String,default:"header"}},J={...B,position:{type:String,default:"left"},tag:{type:String,default:"aside"}},G={...B,tag:{type:String,default:"main"}},K={...B,tag:{type:String,default:"footer"}};function D(i){return{...N(i),styleContainer:H(i)}}const w=m({name:"MYAside",__name:"aside",props:J,setup(i){const t=i,{asideClass:s,styleContainer:e}=D(t);return(r,o)=>(k(),y(b(t.tag),{class:A(d(s)),style:f(d(e))},{default:n(()=>[M(r.$slots,"default")]),_:3},8,["class","style"]))}}),Y=m({name:"MYContainer",__name:"container",props:B,setup(i){const t=i,{containerClass:s,styleContainer:e}=D(t),r=$(),o=L(()=>{const u=r.default?.()||[],g=[],h=[],x=[],_=[],F=[],E=[];u.forEach(p=>{const C=p.type?.name||"";C.includes("Header")?g.push(p):C.includes("Footer")?h.push(p):C.includes("Aside")?(p.props?.position||"left")==="right"?_.push(p):x.push(p):C.includes("Main")?F.push(p):E.push(p)});const T=x.length||F.length||_.length?V("div",{class:"my-body"},[...x,...F,..._]):null;return[...g,T,...h,...E].filter(Boolean)});return(u,g)=>(k(),y(b(t.tag),{class:A(d(s)),style:f(d(e))},{default:n(()=>[(k(!0),v(I,null,R(o.value,h=>(k(),y(b(h),{key:h.id}))),128))]),_:1},8,["class","style"]))}}),U=m({name:"MYFooter",__name:"footer",props:K,setup(i){const t=i,{footerClass:s,styleContainer:e}=D(t);return(r,o)=>(k(),y(b(t.tag),{class:A(d(s)),style:f(d(e))},{default:n(()=>[M(r.$slots,"default")]),_:3},8,["class","style"]))}}),Q=m({name:"MYHeader",__name:"header",props:z,setup(i){const t=i,{headerClass:s,styleContainer:e}=D(t),r=P(!1),o=P(!1),u=()=>{if(t.fixed){const h=window.scrollY;r.value=h>100,o.value=h>0}};return q(()=>{t.fixed&&window.addEventListener("scroll",u)}),O(()=>{t.fixed&&window.removeEventListener("scroll",u)}),(g,h)=>(k(),y(b(t.tag),{class:A([d(s),{"my-container--fixed":r.value,"is-scrolled":o.value}]),style:f(d(e))},{default:n(()=>[M(g.$slots,"default")]),_:3},8,["class","style"]))}}),W=m({name:"MYMain",__name:"main",props:G,setup(i){const t=i,{mainClass:s,styleContainer:e}=D(t);return(r,o)=>(k(),y(b(t.tag),{class:A(d(s)),style:f(d(e))},{default:n(()=>[M(r.$slots,"default")]),_:3},8,["class","style"]))}}),X={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},Z={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},ss={class:"test-case"},rs=JSON.parse('{"title":"Container","description":"","frontmatter":{},"headers":[],"relativePath":"components/RollContainer.md","filePath":"components/RollContainer.md"}'),is={name:"components/RollContainer.md"},ds=Object.assign(is,{setup(i){return(t,s)=>{const e=j("ShowCode");return k(),v("div",null,[s[10]||(s[10]=S("",6)),l(e,{title:"代码演示",code:`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>基础容器</h3>
    <MYContainer class='basic-container'>
      <p>这是一个基础容器</p>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:n(()=>[a("div",X,[s[1]||(s[1]=a("h3",null,"基础容器",-1)),l(Y,{class:"basic-container"},{default:n(()=>[...s[0]||(s[0]=[a("p",null,"这是一个基础容器",-1)])]),_:1})])]),_:1},8,["code"]),s[11]||(s[11]=a("h3",{id:"自定义样式容器",tabindex:"-1"},[c("自定义样式容器 "),a("a",{class:"header-anchor",href:"#自定义样式容器","aria-label":"Permalink to “自定义样式容器”"},"​")],-1)),s[12]||(s[12]=a("p",null,"带着自定义样式的基础容器：",-1)),l(e,{title:"代码演示",code:`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>带自定义样式的容器</h3>
    <MYContainer 
      height='300px' 
      width='80%' 
      background='#470303ff' 
      class='styled-container'
    >
      <p>自定义高度、宽度和背景色的容器</p>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:n(()=>[a("div",Z,[s[3]||(s[3]=a("h3",null,"带自定义样式的容器",-1)),l(Y,{height:"300px",width:"80%",background:"#470303ff",class:"styled-container"},{default:n(()=>[...s[2]||(s[2]=[a("p",null,"自定义高度、宽度和背景色的容器",-1)])]),_:1})])]),_:1},8,["code"]),s[13]||(s[13]=a("h3",{id:"完整布局",tabindex:"-1"},[c("完整布局 "),a("a",{class:"header-anchor",href:"#完整布局","aria-label":"Permalink to “完整布局”"},"​")],-1)),s[14]||(s[14]=a("p",null,"完整布局示例(宽度高度颜色等可自由调节)：",-1)),l(e,{title:"代码演示",code:`
<template>
  <div class='test-case'>
    <h3>完整布局</h3>
    <MYContainer height='200px' class='full-layout'>
      <MYHeader class='header' height='30px'>头部</MYHeader>
      <MYAside class='left-aside'>左侧边栏</MYAside>
      <MYMain class='main-content'>
        <p>主内容区域</p>
        <p>可以放置各种内容</p>
      </MYMain>
      <MYAside position='right' class='right-aside'>右侧边栏</MYAside>
      <MYFooter class='footer' height='30px'>页脚区域</MYFooter>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:n(()=>[a("div",ss,[s[9]||(s[9]=a("h3",null,"完整布局",-1)),l(Y,{height:"200px",class:"full-layout"},{default:n(()=>[l(Q,{class:"header",height:"30px"},{default:n(()=>[...s[4]||(s[4]=[c("头部",-1)])]),_:1}),l(w,{class:"left-aside"},{default:n(()=>[...s[5]||(s[5]=[c("左侧边栏",-1)])]),_:1}),l(W,{class:"main-content"},{default:n(()=>[...s[6]||(s[6]=[a("p",null,"主内容区域",-1),a("p",null,"可以放置各种内容",-1)])]),_:1}),l(w,{position:"right",class:"right-aside"},{default:n(()=>[...s[7]||(s[7]=[c("右侧边栏",-1)])]),_:1}),l(U,{class:"footer",height:"30px"},{default:n(()=>[...s[8]||(s[8]=[c("页脚区域",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),s[15]||(s[15]=S("",13))])}}});export{rs as __pageData,ds as default};

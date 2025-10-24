import{d as g,h as r,c as k,o,j as i,O as y,n as m,t as u,I as _,ah as h,J as e,w as d,a as l}from"./chunks/framework.CnxbpgSG.js";const b={percentage:{type:Number,default:50},status:{type:String,default:""},format:{type:Function,default:void 0}},A={class:"my-progress"},B={class:"my-progress__bar"},C={class:"my-progress__text"},t=g({name:"MYProgress",__name:"progress",props:b,setup(p){const a=p,s=r(()=>Math.min(100,Math.max(0,a.percentage))),n=r(()=>({"my-progress__bar-inner--success":a.status==="success","my-progress__bar-inner--warning":a.status==="warning","my-progress__bar-inner--exception":a.status==="exception"})),c=r(()=>typeof a.format=="function"?a.format(s.value):`${s.value}%`);return(P,x)=>(o(),k("div",A,[i("div",B,[i("div",{class:m(["my-progress__bar-inner",n.value]),style:y({width:`${s.value}%`})},null,6)]),i("div",C,u(c.value),1)]))}}),D={style:{display:"flex","flex-direction":"column",gap:"20px"}},T=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackProgress.md","filePath":"components/FeedbackProgress.md"}'),f={name:"components/FeedbackProgress.md"},S=Object.assign(f,{setup(p){return(a,s)=>{const n=_("ShowCode");return o(),k("div",null,[s[0]||(s[0]=h("",5)),e(n,{title:"代码演示",code:`
<template>
    <MYProgress :percentage='50' />
</template>
  `.trim()},{demo:d(()=>[e(t,{percentage:50})]),_:1},8,["code"]),s[1]||(s[1]=i("h2",{id:"不同状态",tabindex:"-1"},[l("不同状态 "),i("a",{class:"header-anchor",href:"#不同状态","aria-label":"Permalink to “不同状态”"},"​")],-1)),s[2]||(s[2]=i("p",null,[l("使用"),i("code",null,"status"),l("属性可以设置进度条的状态。")],-1)),e(n,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYProgress :percentage='70' status='success' />
        <MYProgress :percentage='50' status='warning' />
        <MYProgress :percentage='30' status='exception' />
    </div>
</template>
  `.trim()},{demo:d(()=>[i("div",D,[e(t,{percentage:70,status:"success"}),e(t,{percentage:50,status:"warning"}),e(t,{percentage:30,status:"exception"}),e(t,{percentage:50,status:"exception"})])]),_:1},8,["code"]),s[3]||(s[3]=h("",5))])}}});export{T as __pageData,S as default};

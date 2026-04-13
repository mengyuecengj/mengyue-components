import{_ as a}from"./chunks/progress.vue_vue_type_script_setup_true_lang.ivbeCHiu.js";import{I as l,o as p,c as k,a8 as h,J as i,w as r,j as e,a as t}from"./chunks/framework.DvHWw5tv.js";const d={style:{display:"flex","flex-direction":"column",gap:"20px"}},b=JSON.parse('{"title":"Progress","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackProgress.md","filePath":"components/FeedbackProgress.md"}'),o={name:"components/FeedbackProgress.md"},A=Object.assign(o,{setup(g){return(c,s)=>{const n=l("ShowCode");return p(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[s[0]||(s[0]=h("",5)),i(n,{title:"代码演示",code:`
<template>
    <MYProgress :percentage='50' />
</template>
  `.trim()},{demo:r(()=>[i(a,{percentage:50})]),_:1},8,["code"]),s[1]||(s[1]=e("h2",{id:"不同状态",tabindex:"-1"},[t("不同状态 "),e("a",{class:"header-anchor",href:"#不同状态","aria-label":"Permalink to “不同状态”"},"​")],-1)),s[2]||(s[2]=e("p",null,[t("使用"),e("code",null,"status"),t("属性可以设置进度条的状态。")],-1)),i(n,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYProgress :percentage='70' status='success' />
        <MYProgress :percentage='50' status='warning' />
        <MYProgress :percentage='30' status='exception' />
    </div>
</template>
  `.trim()},{demo:r(()=>[e("div",d,[i(a,{percentage:70,status:"success"}),i(a,{percentage:50,status:"warning"}),i(a,{percentage:30,status:"exception"}),i(a,{percentage:50,status:"exception"})])]),_:1},8,["code"]),s[3]||(s[3]=h("",5))])}}});export{b as __pageData,A as default};

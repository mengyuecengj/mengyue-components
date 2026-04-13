import{_ as r,a as l}from"./chunks/collapseItem.vue_vue_type_script_setup_true_lang.BE9Y7qWp.js";import{I as m,o as c,c as b,a8 as h,J as e,w as t,j as s,a as n,A as k}from"./chunks/framework.DvHWw5tv.js";const f=JSON.parse('{"title":"Collapse","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackCollapse.md","filePath":"plus/FeedbackCollapse.md"}'),u={name:"plus/FeedbackCollapse.md"},_=Object.assign(u,{setup(g){const d=k(["1"]),p=k("a");return(C,a)=>{const o=m("ShowCode");return c(),b("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[a[8]||(a[8]=h("",5)),e(o,{title:"代码演示",code:`
<template>
    <MYCollapse v-model='activeNames'>
        <MYCollapse-item title='功能特性' name='1'>
            <div>支持多面板同时展开</div>
            <div>通过 v-model 绑定展开的面板</div>
        </MYCollapse-item>
        <MYCollapse-item title='用户体验' name='2'>
            <div>提供平滑的展开/收起动画</div>
            <div>支持自定义内容</div>
        </MYCollapse-item>
        <MYCollapse-item title='可配置性' name='3'>
            <div>可以通过 props 调整行为</div>
            <div>支持手风琴模式和多面板模式</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()},{demo:t(()=>[e(r,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=i=>d.value=i)},{default:t(()=>[e(l,{title:"功能特性",name:"1"},{default:t(()=>[...a[2]||(a[2]=[s("div",null,"支持多面板同时展开",-1),s("div",null,"通过 v-model 绑定展开的面板",-1)])]),_:1}),e(l,{title:"用户体验",name:"2"},{default:t(()=>[...a[3]||(a[3]=[s("div",null,"提供平滑的展开/收起动画",-1),s("div",null,"支持自定义内容",-1)])]),_:1}),e(l,{title:"可配置性",name:"3"},{default:t(()=>[...a[4]||(a[4]=[s("div",null,"可以通过 props 调整行为",-1),s("div",null,"支持手风琴模式和多面板模式",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[9]||(a[9]=s("h2",{id:"手风琴模式",tabindex:"-1"},[n("手风琴模式 "),s("a",{class:"header-anchor",href:"#手风琴模式","aria-label":"Permalink to “手风琴模式”"},"​")],-1)),a[10]||(a[10]=s("p",null,[n("使用"),s("code",null,"accordion"),n("属性可以设置为手风琴模式，每次只能展开一个面板。")],-1)),e(o,{title:"代码演示",code:`
<template>
    <MYCollapse v-model='activeAccordionName' accordion>
        <MYCollapse-item title='简介' name='a'>
            <div>手风琴模式一次只能展开一个面板</div>
        </MYCollapse-item>
        <MYCollapse-item title='细节' name='b'>
            <div>点击一个面板会收起其他面板</div>
        </MYCollapse-item>
        <MYCollapse-item title='备注' name='c'>
            <div>适合需要聚焦单一内容的场景</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()},{demo:t(()=>[e(r,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=i=>p.value=i),accordion:""},{default:t(()=>[e(l,{title:"简介",name:"a"},{default:t(()=>[...a[5]||(a[5]=[s("div",null,"手风琴模式一次只能展开一个面板",-1)])]),_:1}),e(l,{title:"细节",name:"b"},{default:t(()=>[...a[6]||(a[6]=[s("div",null,"点击一个面板会收起其他面板",-1)])]),_:1}),e(l,{title:"备注",name:"c"},{default:t(()=>[...a[7]||(a[7]=[s("div",null,"适合需要聚焦单一内容的场景",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[11]||(a[11]=h("",9))])}}});export{f as __pageData,_ as default};

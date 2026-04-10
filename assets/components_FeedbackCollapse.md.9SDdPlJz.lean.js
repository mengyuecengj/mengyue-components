import{_ as o,a as n}from"./chunks/collapseItem.vue_vue_type_script_setup_true_lang.BE9Y7qWp.js";import{I as k,o as g,c,a8 as r,J as s,w as e,j as i,a as t,A as m}from"./chunks/framework.DvHWw5tv.js";const v=JSON.parse('{"title":"Collapse","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackCollapse.md","filePath":"components/FeedbackCollapse.md"}'),u={name:"components/FeedbackCollapse.md"},z=Object.assign(u,{setup(y){const d=m(["1"]),p=m("a");return(b,a)=>{const h=k("ShowCode");return g(),c("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[8]||(a[8]=r("",5)),s(h,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[s(o,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=l=>d.value=l)},{default:e(()=>[s(n,{title:"功能特性",name:"1"},{default:e(()=>[...a[2]||(a[2]=[i("div",null,"支持多面板同时展开",-1),i("div",null,"通过 v-model 绑定展开的面板",-1)])]),_:1}),s(n,{title:"用户体验",name:"2"},{default:e(()=>[...a[3]||(a[3]=[i("div",null,"提供平滑的展开/收起动画",-1),i("div",null,"支持自定义内容",-1)])]),_:1}),s(n,{title:"可配置性",name:"3"},{default:e(()=>[...a[4]||(a[4]=[i("div",null,"可以通过 props 调整行为",-1),i("div",null,"支持手风琴模式和多面板模式",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[9]||(a[9]=i("h2",{id:"手风琴模式",tabindex:"-1"},[t("手风琴模式 "),i("a",{class:"header-anchor",href:"#手风琴模式","aria-label":"Permalink to “手风琴模式”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shoufengqinmoshi shou feng qin mo shi sfqms ")],-1)),a[10]||(a[10]=i("p",null,[t("使用"),i("code",null,"accordion"),t("属性可以设置为手风琴模式，每次只能展开一个面板。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhiweishoufengqinmoshi，meicizhinengzhankaiyigemianban。 shi yong shu xing ke yi she zhi wei shou feng qin mo shi ， mei ci zhi neng zhan kai yi ge mian ban 。 sysxkyszwsfqms，mcznzkygmb。")],-1)),s(h,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[s(o,{modelValue:p.value,"onUpdate:modelValue":a[1]||(a[1]=l=>p.value=l),accordion:""},{default:e(()=>[s(n,{title:"简介",name:"a"},{default:e(()=>[...a[5]||(a[5]=[i("div",null,"手风琴模式一次只能展开一个面板",-1)])]),_:1}),s(n,{title:"细节",name:"b"},{default:e(()=>[...a[6]||(a[6]=[i("div",null,"点击一个面板会收起其他面板",-1)])]),_:1}),s(n,{title:"备注",name:"c"},{default:e(()=>[...a[7]||(a[7]=[i("div",null,"适合需要聚焦单一内容的场景",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[11]||(a[11]=r("",9))])}}});export{v as __pageData,z as default};

import{d as g,o as c,c as k,r as m,W as _,h as C,N as f,j as s,a as h,t as A,a1 as M,a2 as Y,I as P,ah as u,J as l,w as i,y as v}from"./chunks/framework.BzrxsKI0.js";const B={class:"my-collapse"},b=g({name:"MYCollapse",__name:"collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(r,{emit:d}){const t=r,o=d,a=C({get(){return t.modelValue},set(e){o("update:modelValue",e),o("change",e)}});return _("collapse",{activeNames:a,toggleItem(e){if(t.accordion)a.value=a.value===e?"":e;else{const n=Array.isArray(a.value)?a.value:[];n.includes(e)?a.value=n.filter(y=>y!==e):a.value=[...n,e]}}}),(e,n)=>(c(),k("div",B,[m(e.$slots,"default")]))}}),D={class:"my-collapse-item"},V=["aria-expanded"],x={class:"my-collapse-item__content"},p=g({name:"MYCollapse-item",__name:"collapseItem",props:{name:{},title:{}},setup(r){const d=r,t=f("collapse"),o=C(()=>Array.isArray(t.activeNames.value)?t.activeNames.value.includes(d.name):t.activeNames.value===d.name),a=()=>{t.toggleItem(d.name)};return(e,n)=>(c(),k("div",D,[s("div",{class:"my-collapse-item__header","aria-expanded":o.value,onClick:a},[m(e.$slots,"title",{},()=>[h(A(r.title),1)])],8,V),M(s("div",x,[m(e.$slots,"default")],512),[[Y,o.value]])]))}}),S=JSON.parse('{"title":"Collapse","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackCollapse.md","filePath":"components/FeedbackCollapse.md"}'),N={name:"components/FeedbackCollapse.md"},T=Object.assign(N,{setup(r){const d=v(["1"]),t=v("a");return(o,a)=>{const e=P("ShowCode");return c(),k("div",null,[a[8]||(a[8]=u("",5)),l(e,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[l(b,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=n=>d.value=n)},{default:i(()=>[l(p,{title:"功能特性",name:"1"},{default:i(()=>[...a[2]||(a[2]=[s("div",null,"支持多面板同时展开",-1),s("div",null,"通过 v-model 绑定展开的面板",-1)])]),_:1}),l(p,{title:"用户体验",name:"2"},{default:i(()=>[...a[3]||(a[3]=[s("div",null,"提供平滑的展开/收起动画",-1),s("div",null,"支持自定义内容",-1)])]),_:1}),l(p,{title:"可配置性",name:"3"},{default:i(()=>[...a[4]||(a[4]=[s("div",null,"可以通过 props 调整行为",-1),s("div",null,"支持手风琴模式和多面板模式",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[9]||(a[9]=s("h2",{id:"手风琴模式",tabindex:"-1"},[h("手风琴模式 "),s("a",{class:"header-anchor",href:"#手风琴模式","aria-label":"Permalink to “手风琴模式”"},"​")],-1)),a[10]||(a[10]=s("p",null,[h("使用"),s("code",null,"accordion"),h("属性可以设置为手风琴模式，每次只能展开一个面板。")],-1)),l(e,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[l(b,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=n=>t.value=n),accordion:""},{default:i(()=>[l(p,{title:"简介",name:"a"},{default:i(()=>[...a[5]||(a[5]=[s("div",null,"手风琴模式一次只能展开一个面板",-1)])]),_:1}),l(p,{title:"细节",name:"b"},{default:i(()=>[...a[6]||(a[6]=[s("div",null,"点击一个面板会收起其他面板",-1)])]),_:1}),l(p,{title:"备注",name:"c"},{default:i(()=>[...a[7]||(a[7]=[s("div",null,"适合需要聚焦单一内容的场景",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[11]||(a[11]=u("",9))])}}});export{S as __pageData,T as default};

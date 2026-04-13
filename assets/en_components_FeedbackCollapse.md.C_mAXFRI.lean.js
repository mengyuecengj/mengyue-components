import{_ as r,a as s}from"./chunks/collapseItem.vue_vue_type_script_setup_true_lang.BE9Y7qWp.js";import{I as m,o as k,c as u,a8 as h,J as t,w as i,j as a,a as n,A as c}from"./chunks/framework.DvHWw5tv.js";const y=JSON.parse('{"title":"Collapse","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FeedbackCollapse.md","filePath":"en/components/FeedbackCollapse.md"}'),b={name:"en/components/FeedbackCollapse.md"},A=Object.assign(b,{setup(g){const o=c(["1"]),d=c("a");return(f,e)=>{const p=m("ShowCode");return k(),u("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[8]||(e[8]=h("",5)),t(p,{title:"Code Demo",code:`
<template>
    <MYCollapse v-model='activeNames'>
        <MYCollapse-item title='Features' name='1'>
            <div>Support multiple panels expanded simultaneously</div>
            <div>Bind expanded panels via v-model</div>
        </MYCollapse-item>
        <MYCollapse-item title='User Experience' name='2'>
            <div>Smooth expand/collapse animations</div>
            <div>Support custom content</div>
        </MYCollapse-item>
        <MYCollapse-item title='Configurability' name='3'>
            <div>Adjust behavior via props</div>
            <div>Support accordion mode and multi-panel mode</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()},{demo:i(()=>[t(r,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=l=>o.value=l)},{default:i(()=>[t(s,{title:"Features",name:"1"},{default:i(()=>[...e[2]||(e[2]=[a("div",null,"Support multiple panels expanded simultaneously",-1),a("div",null,"Bind expanded panels via v-model",-1)])]),_:1}),t(s,{title:"User Experience",name:"2"},{default:i(()=>[...e[3]||(e[3]=[a("div",null,"Smooth expand/collapse animations",-1),a("div",null,"Support custom content",-1)])]),_:1}),t(s,{title:"Configurability",name:"3"},{default:i(()=>[...e[4]||(e[4]=[a("div",null,"Adjust behavior via props",-1),a("div",null,"Support accordion mode and multi-panel mode",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[9]||(e[9]=a("h2",{id:"accordion-mode",tabindex:"-1"},[n("Accordion Mode "),a("a",{class:"header-anchor",href:"#accordion-mode","aria-label":"Permalink to “Accordion Mode”"},"​")],-1)),e[10]||(e[10]=a("p",null,[n("Use the "),a("code",null,"accordion"),n(" prop to enable accordion mode, where only one panel can be expanded at a time.")],-1)),t(p,{title:"Code Demo",code:`
<template>
    <MYCollapse v-model='activeAccordionName' accordion>
        <MYCollapse-item title='Introduction' name='a'>
            <div>Accordion mode allows only one panel expanded at a time</div>
        </MYCollapse-item>
        <MYCollapse-item title='Details' name='b'>
            <div>Clicking a panel will collapse others</div>
        </MYCollapse-item>
        <MYCollapse-item title='Notes' name='c'>
            <div>Ideal for scenarios requiring focus on a single piece of content</div>
        </MYCollapse-item>
    </MYCollapse>
</template>
  `.trim()},{demo:i(()=>[t(r,{modelValue:d.value,"onUpdate:modelValue":e[1]||(e[1]=l=>d.value=l),accordion:""},{default:i(()=>[t(s,{title:"Introduction",name:"a"},{default:i(()=>[...e[5]||(e[5]=[a("div",null,"Accordion mode allows only one panel expanded at a time",-1)])]),_:1}),t(s,{title:"Details",name:"b"},{default:i(()=>[...e[6]||(e[6]=[a("div",null,"Clicking a panel will collapse others",-1)])]),_:1}),t(s,{title:"Notes",name:"c"},{default:i(()=>[...e[7]||(e[7]=[a("div",null,"Ideal for scenarios requiring focus on a single piece of content",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[11]||(e[11]=h("",9))])}}});export{y as __pageData,A as default};

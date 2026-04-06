import{d as O,z as U,o as C,c as D,O as R,k as L,n as V,j as s,t as P,J as t,T as j,w as c,r as T,e as q,y as k,R as _,W as J,h as M,N as K,a as n,I as W,ah as w}from"./chunks/framework.DoR57c7M.js";import{u as G}from"./chunks/useStyleComputed.DokJCVvp.js";const H={modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:"260px"},height:{type:[String,Number],default:"40px"},backgroundColor:{type:String,default:""},hoverBackgroundColor:{type:String,default:""},borderColor:{type:String,default:""},autoScrollbar:{type:Boolean,default:!0}},Q={class:"selected-value"},X={key:0,class:"select-dropdown"},A=O({name:"MYSelect",__name:"select",props:H,emits:["update:modelValue"],setup(u,{emit:o}){const r=u,v=o,b=k(null),g=k(null),p=k(!1),e=k(!1),h=k(""),i=k(-1),y=a=>{if(!p.value&&(a.key==="Enter"||a.key===" ")){a.preventDefault(),E();return}if(p.value)switch(a.key){case"ArrowDown":a.preventDefault(),f(1);break;case"ArrowUp":a.preventDefault(),f(-1);break;case"Enter":a.preventDefault(),S();break;case"Escape":x();break}},m=()=>g.value?Array.from(g.value.querySelectorAll(".select-option:not(.is-disabled)")):[],f=a=>{const l=m();l.length&&(i.value=i.value===-1?0:(i.value+a+l.length)%l.length,Y())},Y=()=>{_(()=>{const a=m(),l=a[i.value];l&&(a.forEach(B=>B.classList.remove("is-focused")),l.classList.add("is-focused"),l.focus())})},S=()=>{const a=document.activeElement;if(a?.classList.contains("select-option")){const l=a.dataset.value,B=a.dataset.label;l&&F(l,B||l)}},E=()=>{r.disabled||(p.value=!p.value)},x=()=>{p.value=!1,i.value=-1},N=()=>{r.disabled||(e.value=!0)},I=a=>{const l=a.relatedTarget;l&&b.value?.contains(l)||(e.value=!1,x())},F=(a,l)=>{v("update:modelValue",a),h.value=l,x(),_(()=>{b.value?.focus()})};J("select",{selectOption:F,setFocusedIndex:a=>i.value=a,currentValue:M(()=>r.modelValue),disabled:M(()=>r.disabled)}),U(()=>r.modelValue,a=>{const B=m().find($=>$.dataset.value===String(a));h.value=B?.dataset.label||""},{immediate:!0});const z=G(r,{propToStyleMap:{width:"width",height:"height"}});return(a,l)=>(C(),D("div",{ref_key:"selectRef",ref:b,class:V(["select-e",{"is-disabled":a.disabled,"is-focused":e.value}]),tabindex:"0",style:R(L(z)),onFocus:N,onBlur:I,onKeydown:y},[s("div",{class:"select-trigger",onClick:E},[s("span",Q,P(h.value||a.placeholder),1),s("span",{class:V(["arrow-icon",{"is-open":p.value}])},[...l[0]||(l[0]=[s("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},[s("path",{d:"M7 10l5 5 5-5z"})],-1)])],2)]),t(j,{name:"slide-fade"},{default:c(()=>[p.value?(C(),D("div",X,[s("div",{ref_key:"optionsContainer",ref:g,class:"select-dropdown-content"},[T(a.$slots,"default")],512)])):q("",!0)]),_:3})],38))}}),Z=["data-value","data-label"],d=O({name:"MYOption",__name:"option",props:{value:{type:[String,Number],required:!0},label:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(u){const o=u,r=K("select");if(!r)throw new Error("MYOption must be used inside MYSelect");const{selectOption:v,setFocusedIndex:b,currentValue:g,disabled:p}=r,e=M(()=>g.value===o.value),h=()=>{!o.disabled&&!p.value&&v(o.value,o.label||String(o.value))},i=y=>{if(o.disabled||p.value)return;const m=y.currentTarget;m.focus();const f=m.parentElement;if(!f)return;const S=Array.from(f.querySelectorAll(".select-option:not(.is-disabled)")).indexOf(m);S>=0&&b(S)};return(y,m)=>(C(),D("div",{class:V(["select-option",{"is-selected":e.value,"is-disabled":u.disabled}]),"data-value":u.value,"data-label":u.label||u.value,tabindex:"-1",onClick:h,onMouseenter:i},[T(y.$slots,"default",{},()=>[n(P(u.label),1)])],42,Z))}}),ee={style:{position:"relative","z-index":"1000"}},se={style:{position:"relative","z-index":"1000"}},ae={style:{position:"relative","z-index":"1000"}},te={style:{position:"relative","z-index":"1000"}},le={style:{position:"relative","z-index":"1000"}},re=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelect.md","filePath":"components/FormSelect.md"}'),ie={name:"components/FormSelect.md"},oe=Object.assign(ie,{setup(u){const o=k(""),r=k(""),v=k(""),b=k(""),g=k("B");return(p,e)=>{const h=W("ShowCode");return C(),D("div",null,[e[5]||(e[5]=w("",5)),t(h,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue1' placeholder='请选择水果'>
        <MYOption value='apple' label='苹果' />
        <MYOption value='banana' label='香蕉' />
        <MYOption value='orange' label='橙子' />
    </MYSelect>
</template>
  `.trim()},{demo:c(()=>[s("div",ee,[t(A,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value=i),placeholder:"请选择水果"},{default:c(()=>[t(d,{value:"apple",label:"苹果"}),t(d,{value:"banana",label:"香蕉"}),t(d,{value:"orange",label:"橙子"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[6]||(e[6]=s("h2",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),s("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[7]||(e[7]=s("h3",{id:"禁用整个选择器",tabindex:"-1"},[n("禁用整个选择器 "),s("a",{class:"header-anchor",href:"#禁用整个选择器","aria-label":"Permalink to “禁用整个选择器”"},"​")],-1)),e[8]||(e[8]=s("p",null,[n("使用"),s("code",null,"disabled"),n("属性可以禁用选择器。")],-1)),t(h,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='禁用状态'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:c(()=>[s("div",se,[t(A,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=i=>r.value=i),disabled:"",placeholder:"禁用状态"},{default:c(()=>[t(d,{value:"1",label:"选项1"}),t(d,{value:"2",label:"选项2"}),t(d,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[9]||(e[9]=s("h3",{id:"禁用某个选项",tabindex:"-1"},[n("禁用某个选项 "),s("a",{class:"header-anchor",href:"#禁用某个选项","aria-label":"Permalink to “禁用某个选项”"},"​")],-1)),e[10]||(e[10]=s("p",null,[n("使用"),s("code",null,"disabled"),n("属性可以禁用单个选项。")],-1)),t(h,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue3' placeholder='禁用某个选项'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' disabled />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:c(()=>[s("div",ae,[t(A,{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=i=>v.value=i),placeholder:"禁用某个选项"},{default:c(()=>[t(d,{value:"1",label:"选项1"}),t(d,{value:"2",label:"选项2",disabled:""}),t(d,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[11]||(e[11]=s("h2",{id:"自定义尺寸",tabindex:"-1"},[n("自定义尺寸 "),s("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[12]||(e[12]=s("p",null,[n("使用"),s("code",null,"width"),n("和"),s("code",null,"height"),n("属性可以自定义选择器的宽度和高度。")],-1)),t(h,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue4' placeholder='宽300px高50px' width='300px' height='50px'>
        <MYOption value='4' label='选项4' />
        <MYOption value='5' label='选项5' />
        <MYOption value='6' label='选项6' />
    </MYSelect>
</template>
  `.trim()},{demo:c(()=>[s("div",te,[t(A,{modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=i=>b.value=i),placeholder:"宽300px高50px",width:"300px",height:"50px"},{default:c(()=>[t(d,{value:"4",label:"选项4"}),t(d,{value:"5",label:"选项5"}),t(d,{value:"6",label:"选项6"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[13]||(e[13]=s("h2",{id:"自定义颜色",tabindex:"-1"},[n("自定义颜色 "),s("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),e[14]||(e[14]=s("p",null,[n("使用"),s("code",null,"backgroundColor"),n("、"),s("code",null,"hoverbackgroundColor"),n("和"),s("code",null,"borderColor"),n("属性可以自定义选择器的颜色。")],-1)),t(h,{title:"代码演示",code:`
<template>
    <MYSelect 
        v-model='selectedValue5' 
        placeholder='自定义颜色'
        backgroundColor='#f0f8ff'
        hoverbackgroundColor='#e6f3ff'
        borderColor='#409EFF'
    >
        <MYOption value='A' label='选项A' />
        <MYOption value='B' label='选项B' />
        <MYOption value='C' label='选项C' />
    </MYSelect>
</template>
  `.trim()},{demo:c(()=>[s("div",le,[t(A,{modelValue:g.value,"onUpdate:modelValue":e[4]||(e[4]=i=>g.value=i),placeholder:"自定义颜色",backgroundColor:"#f0f8ff",hoverbackgroundColor:"#e6f3ff",borderColor:"#409EFF"},{default:c(()=>[t(d,{value:"A",label:"选项A"}),t(d,{value:"B",label:"选项B"}),t(d,{value:"C",label:"选项C"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[15]||(e[15]=w("",7))])}}});export{re as __pageData,oe as default};

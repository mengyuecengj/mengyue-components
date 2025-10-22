import{d as x,x as h,z as A,W as T,h as f,c as B,o as v,O as N,n as S,k as D,j as a,J as s,t as M,T as z,w as r,e as $,b as I,r as C,R,N as U,a as l,I as j,ah as V}from"./chunks/framework.DHTvsukI.js";import{_ as q}from"./chunks/scrollbar.vue_vue_type_script_setup_true_lang.DW0bIEH8.js";import{w as H}from"./chunks/withInstall.BiBM9XaQ.js";import{u as J}from"./chunks/useStyleComputed.BAeCZWeL.js";import"./chunks/useClassComputed.CEqmS9F9.js";import"./chunks/useScrollCommon.BgwSuZz0.js";const L=H(q),W={modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:"260px"},height:{type:[String,Number],default:"40px"},backgroundColor:{type:String,default:""},hoverbackgroundColor:{type:String,default:""},borderColor:{type:String,default:""},autoScrollbar:{type:Boolean,default:!0}},G={class:"selected-value"},K={key:1,class:"select-dropdown-content"},y=x({name:"MYSelect",__name:"select",props:W,emits:["update:modelValue"],setup(u,{emit:k}){const t=u,m=k,c=h(null),b=h(!1),o=h(!1),e=h(""),p=h(!1),d=()=>{R(()=>{if(!t.autoScrollbar){b.value=!1;return}if(c.value){const g=(c.value.querySelector(".select-dropdown-content")||c.value).scrollHeight;b.value=g>190}})},Y=(i,g)=>{t.disabled||(m("update:modelValue",i),e.value=g||String(i),o.value=!1)},_=()=>{t.disabled||(p.value=!0)},F=()=>{p.value=!1,o.value=!1},w=()=>{t.disabled||(o.value=!o.value,o.value&&d())},O=J(t,{propToStyleMap:{width:"width",height:"height",backgroundColor:"backgroundColor",hoverbackgroundColor:"--hover-bg-color"}});return A(()=>t.modelValue,i=>{if(i==null||i==="")e.value="";else{const g=c.value?.querySelectorAll?.("[data-value]")||[],P=Array.from(g).find(E=>E.dataset.value==String(i));e.value=P?.dataset.label||String(i)}},{immediate:!0}),A(o,i=>{i&&d()}),T("select",{selectOption:Y,currentValue:f(()=>t.modelValue),disabled:f(()=>t.disabled),width:f(()=>t.width),height:f(()=>t.height)}),(i,g)=>(v(),B("div",{class:S(["select-e",{"is-disabled":i.disabled,"is-focused":p.value}]),tabindex:"0",style:N(D(O)),onFocus:_,onBlur:F},[a("div",{class:"select-trigger",onClick:w},[a("span",G,M(e.value||i.placeholder),1),a("span",{class:S(["arrow-icon",{"is-open":o.value}])},[...g[0]||(g[0]=[a("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},[a("path",{d:"M7 10l5 5 5-5z"})],-1)])],2)]),s(z,{name:"slide-fade"},{default:r(()=>[o.value?(v(),B("div",{key:0,ref_key:"dropdownRef",ref:c,class:"select-dropdown"},[b.value?(v(),I(D(L),{key:0,height:"200px",thumbColor:"#4C4D4F",thumbHoverColor:"#2a2a2e",trackColor:"#2a2a2e"},{default:r(()=>[C(i.$slots,"default")]),_:3})):(v(),B("div",K,[C(i.$slots,"default")]))],512)):$("",!0)]),_:3})],38))}}),Q=["data-value","data-label"],n=x({name:"MYOption",__name:"option",props:{value:{type:[String,Number],required:!0},label:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(u){const k=u,t=U("select");if(!t)throw new Error("MYOption must be used inside MYSelect");const{selectOption:m,currentValue:c,disabled:b}=t,o=f(()=>c.value===k.value),e=()=>{!k.disabled&&!b.value&&m(k.value,k.label||String(k.value))};return(p,d)=>(v(),B("div",{class:S(["select-option",{"is-selected":o.value,"is-disabled":u.disabled}]),"data-value":u.value,"data-label":u.label||u.value,onClick:e},[C(p.$slots,"default",{},()=>[l(M(u.label),1)])],10,Q))}}),X={style:{position:"relative","z-index":"1000"}},Z={style:{position:"relative","z-index":"1000"}},ee={style:{position:"relative","z-index":"1000"}},ae={style:{position:"relative","z-index":"1000"}},se={style:{position:"relative","z-index":"1000"}},pe=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelect.md","filePath":"components/FormSelect.md"}'),le={name:"components/FormSelect.md"},he=Object.assign(le,{setup(u){const k=h(""),t=h(""),m=h(""),c=h(""),b=h("B");return h(""),(o,e)=>{const p=j("ShowCode");return v(),B("div",null,[e[5]||(e[5]=V("",5)),s(p,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue1' placeholder='请选择水果'>
        <MYOption value='apple' label='苹果' />
        <MYOption value='banana' label='香蕉' />
        <MYOption value='orange' label='橙子' />
    </MYSelect>
</template>
  `.trim()},{demo:r(()=>[a("div",X,[s(y,{modelValue:k.value,"onUpdate:modelValue":e[0]||(e[0]=d=>k.value=d),placeholder:"请选择水果"},{default:r(()=>[s(n,{value:"apple",label:"苹果"}),s(n,{value:"banana",label:"香蕉"}),s(n,{value:"orange",label:"橙子"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[6]||(e[6]=a("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[7]||(e[7]=a("h3",{id:"禁用整个选择器",tabindex:"-1"},[l("禁用整个选择器 "),a("a",{class:"header-anchor",href:"#禁用整个选择器","aria-label":"Permalink to “禁用整个选择器”"},"​")],-1)),e[8]||(e[8]=a("p",null,[l("使用"),a("code",null,"disabled"),l("属性可以禁用选择器。")],-1)),s(p,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='禁用状态'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:r(()=>[a("div",Z,[s(y,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=d=>t.value=d),disabled:"",placeholder:"禁用状态"},{default:r(()=>[s(n,{value:"1",label:"选项1"}),s(n,{value:"2",label:"选项2"}),s(n,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[9]||(e[9]=a("h3",{id:"禁用某个选项",tabindex:"-1"},[l("禁用某个选项 "),a("a",{class:"header-anchor",href:"#禁用某个选项","aria-label":"Permalink to “禁用某个选项”"},"​")],-1)),e[10]||(e[10]=a("p",null,[l("使用"),a("code",null,"disabled"),l("属性可以禁用单个选项。")],-1)),s(p,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue3' placeholder='禁用某个选项'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' disabled />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:r(()=>[a("div",ee,[s(y,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=d=>m.value=d),placeholder:"禁用某个选项"},{default:r(()=>[s(n,{value:"1",label:"选项1"}),s(n,{value:"2",label:"选项2",disabled:""}),s(n,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[11]||(e[11]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[l("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[12]||(e[12]=a("p",null,[l("使用"),a("code",null,"width"),l("和"),a("code",null,"height"),l("属性可以自定义选择器的宽度和高度。")],-1)),s(p,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue4' placeholder='宽300px高50px' width='300px' height='50px'>
        <MYOption value='4' label='选项4' />
        <MYOption value='5' label='选项5' />
        <MYOption value='6' label='选项6' />
    </MYSelect>
</template>
  `.trim()},{demo:r(()=>[a("div",ae,[s(y,{modelValue:c.value,"onUpdate:modelValue":e[3]||(e[3]=d=>c.value=d),placeholder:"宽300px高50px",width:"300px",height:"50px"},{default:r(()=>[s(n,{value:"4",label:"选项4"}),s(n,{value:"5",label:"选项5"}),s(n,{value:"6",label:"选项6"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[13]||(e[13]=a("h2",{id:"自定义颜色",tabindex:"-1"},[l("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),e[14]||(e[14]=a("p",null,[l("使用"),a("code",null,"backgroundColor"),l("、"),a("code",null,"hoverbackgroundColor"),l("和"),a("code",null,"borderColor"),l("属性可以自定义选择器的颜色。")],-1)),s(p,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[a("div",se,[s(y,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=d=>b.value=d),placeholder:"自定义颜色",backgroundColor:"#f0f8ff",hoverbackgroundColor:"#e6f3ff",borderColor:"#409EFF"},{default:r(()=>[s(n,{value:"A",label:"选项A"}),s(n,{value:"B",label:"选项B"}),s(n,{value:"C",label:"选项C"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[15]||(e[15]=V("",7))])}}});export{pe as __pageData,he as default};

import{d as M,x as k,z as D,W as N,h as f,c as B,o as v,O as z,n as S,k as V,j as a,J as s,t as Y,T as $,w as o,e as I,b as R,r as C,R as U,N as j,a as t,I as q,ah as x}from"./chunks/framework.PAn8Jj8p.js";import{_ as H}from"./chunks/scrollbar.vue_vue_type_script_setup_true_lang.CA_qT8MP.js";import{w as J}from"./chunks/withInstall.BiBM9XaQ.js";import{u as L}from"./chunks/useStyleComputed.DTslAc2e.js";import"./chunks/useClassComputed.nZJ4II5u.js";import"./chunks/useScrollCommon.DFJxlbya.js";const W=J(H),G={modelValue:{type:[String,Number],default:""},placeholder:{type:String,default:"请选择"},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:"260px"},height:{type:[String,Number],default:"40px"},backgroundColor:{type:String,default:""},hoverbackgroundColor:{type:String,default:""},borderColor:{type:String,default:""},autoScrollbar:{type:Boolean,default:!0}},K={class:"selected-value"},Q={key:1,class:"select-dropdown-content"},y=M({name:"MYSelect",__name:"select",props:G,emits:["update:modelValue"],setup(u,{emit:c}){const l=u,m=c,p=k(null),b=k(!1),h=k(!1),e=k(!1),r=k(""),d=()=>{U(()=>{if(!l.autoScrollbar){b.value=!1;return}if(p.value){const g=(p.value.querySelector(".select-dropdown-content")||p.value).scrollHeight;b.value=g>190}})},_=(i,g)=>{l.disabled||(m("update:modelValue",i),r.value=g||String(i),h.value=!1)},w=()=>{l.disabled||(e.value=!0)},F=()=>{e.value=!1,h.value=!1},O=()=>{l.disabled||(h.value=!h.value,h.value&&(d(),A()))},P=L(l,{propToStyleMap:{width:"width",height:"height",backgroundColor:"backgroundColor",hoverbackgroundColor:"--hover-bg-color"}}),A=()=>{const i=l.modelValue;if(i==null||i===""){r.value="";return}if(p.value){const g=p.value.querySelectorAll("[data-value]"),E=Array.from(g).find(T=>T.dataset.value===String(i));r.value=E?.dataset.label||""}};return D(()=>l.modelValue,i=>{A()},{immediate:!0}),D(h,i=>{i&&d()}),N("select",{selectOption:_,currentValue:f(()=>l.modelValue),disabled:f(()=>l.disabled),width:f(()=>l.width),height:f(()=>l.height)}),(i,g)=>(v(),B("div",{class:S(["select-e",{"is-disabled":i.disabled,"is-focused":e.value}]),tabindex:"0",style:z(V(P)),onFocus:w,onBlur:F},[a("div",{class:"select-trigger",onClick:O},[a("span",K,Y(r.value||i.placeholder),1),a("span",{class:S(["arrow-icon",{"is-open":h.value}])},[...g[0]||(g[0]=[a("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},[a("path",{d:"M7 10l5 5 5-5z"})],-1)])],2)]),s($,{name:"slide-fade"},{default:o(()=>[h.value?(v(),B("div",{key:0,ref_key:"dropdownRef",ref:p,class:"select-dropdown"},[b.value?(v(),R(V(W),{key:0,height:"200px",thumbColor:"#4C4D4F",thumbHoverColor:"#2a2a2e",trackColor:"#2a2a2e"},{default:o(()=>[C(i.$slots,"default")]),_:3})):(v(),B("div",Q,[C(i.$slots,"default")]))],512)):I("",!0)]),_:3})],38))}}),X=["data-value","data-label"],n=M({name:"MYOption",__name:"option",props:{value:{type:[String,Number],required:!0},label:{type:String,default:""},disabled:{type:Boolean,default:!1}},setup(u){const c=u,l=j("select");if(!l)throw new Error("MYOption must be used inside MYSelect");const{selectOption:m,currentValue:p,disabled:b}=l,h=f(()=>p.value===c.value),e=()=>{!c.disabled&&!b.value&&m(c.value,c.label||String(c.value))};return(r,d)=>(v(),B("div",{class:S(["select-option",{"is-selected":h.value,"is-disabled":u.disabled}]),"data-value":u.value,"data-label":u.label||u.value,onClick:e},[C(r.$slots,"default",{},()=>[t(Y(u.label),1)])],10,X))}}),Z={style:{position:"relative","z-index":"1000"}},ee={style:{position:"relative","z-index":"1000"}},ae={style:{position:"relative","z-index":"1000"}},se={style:{position:"relative","z-index":"1000"}},le={style:{position:"relative","z-index":"1000"}},he=JSON.parse('{"title":"Select","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelect.md","filePath":"components/FormSelect.md"}'),te={name:"components/FormSelect.md"},ke=Object.assign(te,{setup(u){const c=k(""),l=k(""),m=k(""),p=k(""),b=k("B");return k(""),(h,e)=>{const r=q("ShowCode");return v(),B("div",null,[e[5]||(e[5]=x("",5)),s(r,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue1' placeholder='请选择水果'>
        <MYOption value='apple' label='苹果' />
        <MYOption value='banana' label='香蕉' />
        <MYOption value='orange' label='橙子' />
    </MYSelect>
</template>
  `.trim()},{demo:o(()=>[a("div",Z,[s(y,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=d=>c.value=d),placeholder:"请选择水果"},{default:o(()=>[s(n,{value:"apple",label:"苹果"}),s(n,{value:"banana",label:"香蕉"}),s(n,{value:"orange",label:"橙子"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[6]||(e[6]=a("h2",{id:"禁用状态",tabindex:"-1"},[t("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[7]||(e[7]=a("h3",{id:"禁用整个选择器",tabindex:"-1"},[t("禁用整个选择器 "),a("a",{class:"header-anchor",href:"#禁用整个选择器","aria-label":"Permalink to “禁用整个选择器”"},"​")],-1)),e[8]||(e[8]=a("p",null,[t("使用"),a("code",null,"disabled"),t("属性可以禁用选择器。")],-1)),s(r,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue2' disabled placeholder='禁用状态'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:o(()=>[a("div",ee,[s(y,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=d=>l.value=d),disabled:"",placeholder:"禁用状态"},{default:o(()=>[s(n,{value:"1",label:"选项1"}),s(n,{value:"2",label:"选项2"}),s(n,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[9]||(e[9]=a("h3",{id:"禁用某个选项",tabindex:"-1"},[t("禁用某个选项 "),a("a",{class:"header-anchor",href:"#禁用某个选项","aria-label":"Permalink to “禁用某个选项”"},"​")],-1)),e[10]||(e[10]=a("p",null,[t("使用"),a("code",null,"disabled"),t("属性可以禁用单个选项。")],-1)),s(r,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue3' placeholder='禁用某个选项'>
        <MYOption value='1' label='选项1' />
        <MYOption value='2' label='选项2' disabled />
        <MYOption value='3' label='选项3' />
    </MYSelect>
</template>
  `.trim()},{demo:o(()=>[a("div",ae,[s(y,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=d=>m.value=d),placeholder:"禁用某个选项"},{default:o(()=>[s(n,{value:"1",label:"选项1"}),s(n,{value:"2",label:"选项2",disabled:""}),s(n,{value:"3",label:"选项3"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[11]||(e[11]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[t("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[12]||(e[12]=a("p",null,[t("使用"),a("code",null,"width"),t("和"),a("code",null,"height"),t("属性可以自定义选择器的宽度和高度。")],-1)),s(r,{title:"代码演示",code:`
<template>
    <MYSelect v-model='selectedValue4' placeholder='宽300px高50px' width='300px' height='50px'>
        <MYOption value='4' label='选项4' />
        <MYOption value='5' label='选项5' />
        <MYOption value='6' label='选项6' />
    </MYSelect>
</template>
  `.trim()},{demo:o(()=>[a("div",se,[s(y,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=d=>p.value=d),placeholder:"宽300px高50px",width:"300px",height:"50px"},{default:o(()=>[s(n,{value:"4",label:"选项4"}),s(n,{value:"5",label:"选项5"}),s(n,{value:"6",label:"选项6"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[13]||(e[13]=a("h2",{id:"自定义颜色",tabindex:"-1"},[t("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),e[14]||(e[14]=a("p",null,[t("使用"),a("code",null,"backgroundColor"),t("、"),a("code",null,"hoverbackgroundColor"),t("和"),a("code",null,"borderColor"),t("属性可以自定义选择器的颜色。")],-1)),s(r,{title:"代码演示",code:`
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
  `.trim()},{demo:o(()=>[a("div",le,[s(y,{modelValue:b.value,"onUpdate:modelValue":e[4]||(e[4]=d=>b.value=d),placeholder:"自定义颜色",backgroundColor:"#f0f8ff",hoverbackgroundColor:"#e6f3ff",borderColor:"#409EFF"},{default:o(()=>[s(n,{value:"A",label:"选项A"}),s(n,{value:"B",label:"选项B"}),s(n,{value:"C",label:"选项C"})]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[15]||(e[15]=x("",7))])}}});export{he as __pageData,ke as default};

import{_ as n}from"./chunks/selectCascader.vue_vue_type_script_setup_true_lang.CYuS7vqk.js";import{I as A,o as B,c as V,a8 as b,J as i,w as d,j as a,a as e,A as p}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const D={style:{position:"relative","z-index":"1000"}},x={style:{position:"relative","z-index":"1000"}},f={style:{position:"relative","z-index":"1000"}},C={style:{position:"relative","z-index":"1000"}},P={style:{position:"relative","z-index":"1000"}},S={style:{position:"relative","z-index":"1000"}},Y=JSON.parse('{"title":"SelectCascader","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelectCascader.md","filePath":"components/FormSelectCascader.md"}'),_={name:"components/FormSelectCascader.md"},I=Object.assign(_,{setup(E){const r=p(""),h=p(""),k=p(""),c=p(""),u=p(""),m=p(""),g=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"},{value:"option3",label:"选项3"},{value:"option4",label:"选项4"}],y=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"}],v=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2",disabled:!0}],o=[{value:"group1",label:"分组1",children:[{value:"option1-1",label:"选项1-1"},{value:"option1-2",label:"选项1-2"}]},{value:"group2",label:"分组2",children:[{value:"option2-1",label:"选项2-1"},{value:"option2-2",label:"选项2-2",children:[{value:"option2-2-1",label:"选项2-2-1"},{value:"option2-2-2",label:"选项2-2-2"}]}]}];return(F,s)=>{const t=A("ShowCode");return B(),V("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[s[6]||(s[6]=b("",5)),i(t,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue1' :options='options1' placeholder='请选择' />
</template>
  `.trim()},{demo:d(()=>[a("div",D,[i(n,{modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=l=>r.value=l),options:g,placeholder:"请选择"},null,8,["modelValue"])])]),_:1},8,["code"]),s[7]||(s[7]=a("h2",{id:"禁用状态",tabindex:"-1"},[e("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),s[8]||(s[8]=a("h3",{id:"禁用整个选择器",tabindex:"-1"},[e("禁用整个选择器 "),a("a",{class:"header-anchor",href:"#禁用整个选择器","aria-label":"Permalink to “禁用整个选择器”"},"​")],-1)),s[9]||(s[9]=a("p",null,[e("使用"),a("code",null,"disabled"),e("属性可以禁用选择器。")],-1)),i(t,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue2' :options='options2' placeholder='禁用状态' disabled />
</template>
  `.trim()},{demo:d(()=>[a("div",x,[i(n,{modelValue:h.value,"onUpdate:modelValue":s[1]||(s[1]=l=>h.value=l),options:y,placeholder:"禁用状态",disabled:""},null,8,["modelValue"])])]),_:1},8,["code"]),s[10]||(s[10]=a("h3",{id:"禁用某个选项",tabindex:"-1"},[e("禁用某个选项 "),a("a",{class:"header-anchor",href:"#禁用某个选项","aria-label":"Permalink to “禁用某个选项”"},"​")],-1)),s[11]||(s[11]=a("p",null,[e("使用"),a("code",null,"disabled"),e("属性可以禁用单个选项。")],-1)),i(t,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue3' :options='options3' placeholder='禁用某个选项' />
</template>
  `.trim()},{demo:d(()=>[a("div",f,[i(n,{modelValue:k.value,"onUpdate:modelValue":s[2]||(s[2]=l=>k.value=l),options:v,placeholder:"禁用某个选项"},null,8,["modelValue"])])]),_:1},8,["code"]),s[12]||(s[12]=a("h2",{id:"多级菜单",tabindex:"-1"},[e("多级菜单 "),a("a",{class:"header-anchor",href:"#多级菜单","aria-label":"Permalink to “多级菜单”"},"​")],-1)),s[13]||(s[13]=a("p",null,[e("多级菜单，使用"),a("code",null,"options"),e("属性传递多级数据。")],-1)),i(t,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue4' :options='options4' placeholder='多级菜单' />
</template>
  `.trim()},{demo:d(()=>[a("div",C,[i(n,{modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=l=>c.value=l),options:o,placeholder:"多级菜单"},null,8,["modelValue"])])]),_:1},8,["code"]),s[14]||(s[14]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[e("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),s[15]||(s[15]=a("p",null,[e("使用"),a("code",null,"width"),e("和"),a("code",null,"height"),e("属性可以自定义选择器的宽度和高度。")],-1)),i(t,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue5' :options='options4' placeholder='自定义尺寸' height='50px' width='500px' />
</template>
  `.trim()},{demo:d(()=>[a("div",P,[i(n,{modelValue:u.value,"onUpdate:modelValue":s[4]||(s[4]=l=>u.value=l),options:o,placeholder:"自定义尺寸",height:"50px",width:"500px"},null,8,["modelValue"])])]),_:1},8,["code"]),s[16]||(s[16]=a("h2",{id:"组合使用",tabindex:"-1"},[e("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),s[17]||(s[17]=a("p",null,"最后，实现个多种api组合使用实现个级联选择器：",-1)),i(t,{title:"代码演示",code:`
<template>
    <MYSelect-cascader 
        v-model='selectedValue6' 
        :options='options4' 
        placeholder='组合使用示例'
        height='45px'
        width='400px'
    />
</template>
  `.trim()},{demo:d(()=>[a("div",S,[i(n,{modelValue:m.value,"onUpdate:modelValue":s[5]||(s[5]=l=>m.value=l),options:o,placeholder:"组合使用示例",height:"45px",width:"400px"},null,8,["modelValue"])])]),_:1},8,["code"]),s[18]||(s[18]=b("",5))])}}});export{Y as __pageData,I as default};

import{_ as l,a as r}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.Bs_xyA3B.js";import{x as n,z as f,I as M,c as Y,o as B,ah as c,J as s,j as t,w as i,a,R as A}from"./chunks/framework.D3tsReks.js";const E=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormCheckbox.md","filePath":"components/FormCheckbox.md"}'),V={name:"components/FormCheckbox.md"},F=Object.assign(V,{setup(D){const h=n(!0),p=n(["option1"]),k=n([]),b=n(["red"]),m=n(["mon"]),u=n([]),g=n(["default"]),x=n(["option1"]),C=n(["1"]),y=n(["default"]),v=()=>{A(()=>{})};return f([h,p,k,b,m,u,g,x,C,y],()=>{v()}),(P,e)=>{const o=M("ShowCode");return B(),Y("div",null,[e[18]||(e[18]=c("",6)),s(o,{title:"代码演示",code:`
<template>
  <MYCheckbox v-model='singleChecked'>单个复选框</MYCheckbox>
</template>
  `.trim()},{demo:i(()=>[t("div",null,[s(l,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=d=>h.value=d)},{default:i(()=>[...e[5]||(e[5]=[a("单个复选框",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[19]||(e[19]=t("h3",{id:"复选框组",tabindex:"-1"},[a("复选框组 "),t("a",{class:"header-anchor",href:"#复选框组","aria-label":"Permalink to “复选框组”"},"​")],-1)),e[20]||(e[20]=t("p",null,[a("使用 "),t("code",null,"<MYCheckbox-group></MYCheckbox-group>"),a(" 可以将复选框分组。")],-1)),s(o,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues1'>
    <MYCheckbox value='option1'>选项1</MYCheckbox>
    <MYCheckbox value='option2'>选项2</MYCheckbox>
    <MYCheckbox value='option3'>选项3</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=d=>p.value=d)},{default:i(()=>[s(l,{value:"option1"},{default:i(()=>[...e[6]||(e[6]=[a("选项1",-1)])]),_:1}),s(l,{value:"option2"},{default:i(()=>[...e[7]||(e[7]=[a("选项2",-1)])]),_:1}),s(l,{value:"option3"},{default:i(()=>[...e[8]||(e[8]=[a("选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[21]||(e[21]=t("h2",{id:"布局方向",tabindex:"-1"},[a("布局方向 "),t("a",{class:"header-anchor",href:"#布局方向","aria-label":"Permalink to “布局方向”"},"​")],-1)),e[22]||(e[22]=t("h3",{id:"垂直排列",tabindex:"-1"},[a("垂直排列 "),t("a",{class:"header-anchor",href:"#垂直排列","aria-label":"Permalink to “垂直排列”"},"​")],-1)),e[23]||(e[23]=t("p",null,[a("使用 "),t("code",null,'direction="vertical"'),a(" 将复选框垂直排列。")],-1)),s(o,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues2' direction='vertical'>
    <MYCheckbox value='apple'>苹果</MYCheckbox>
    <MYCheckbox value='banana'>香蕉</MYCheckbox>
    <MYCheckbox value='orange'>橙子</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:k.value,"onUpdate:modelValue":e[2]||(e[2]=d=>k.value=d),direction:"vertical"},{default:i(()=>[s(l,{value:"apple"},{default:i(()=>[...e[9]||(e[9]=[a("苹果",-1)])]),_:1}),s(l,{value:"banana"},{default:i(()=>[...e[10]||(e[10]=[a("香蕉",-1)])]),_:1}),s(l,{value:"orange"},{default:i(()=>[...e[11]||(e[11]=[a("橙子",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[24]||(e[24]=t("h2",{id:"禁用状态",tabindex:"-1"},[a("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[25]||(e[25]=t("h3",{id:"整个组禁用",tabindex:"-1"},[a("整个组禁用 "),t("a",{class:"header-anchor",href:"#整个组禁用","aria-label":"Permalink to “整个组禁用”"},"​")],-1)),e[26]||(e[26]=t("p",null,"禁用整个复选框组。",-1)),s(o,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues3' disabled>
    <MYCheckbox value='red'>红色</MYCheckbox>
    <MYCheckbox value='green'>绿色</MYCheckbox>
    <MYCheckbox value='blue'>蓝色</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:b.value,"onUpdate:modelValue":e[3]||(e[3]=d=>b.value=d),disabled:""},{default:i(()=>[s(l,{value:"red"},{default:i(()=>[...e[12]||(e[12]=[a("红色",-1)])]),_:1}),s(l,{value:"green"},{default:i(()=>[...e[13]||(e[13]=[a("绿色",-1)])]),_:1}),s(l,{value:"blue"},{default:i(()=>[...e[14]||(e[14]=[a("蓝色",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[27]||(e[27]=t("h2",{id:"自定义间距",tabindex:"-1"},[a("自定义间距 "),t("a",{class:"header-anchor",href:"#自定义间距","aria-label":"Permalink to “自定义间距”"},"​")],-1)),e[28]||(e[28]=t("p",null,[a("使用 "),t("code",null,"gap"),a(" 属性控制复选框之间的间距。")],-1)),s(o,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues5' gap='72px'>
    <MYCheckbox value='cat'>猫</MYCheckbox>
    <MYCheckbox value='dog'>狗</MYCheckbox>
    <MYCheckbox value='bird'>鸟</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:i(()=>[s(r,{modelValue:u.value,"onUpdate:modelValue":e[4]||(e[4]=d=>u.value=d),gap:"72px"},{default:i(()=>[s(l,{value:"cat"},{default:i(()=>[...e[15]||(e[15]=[a("猫",-1)])]),_:1}),s(l,{value:"dog"},{default:i(()=>[...e[16]||(e[16]=[a("狗",-1)])]),_:1}),s(l,{value:"bird"},{default:i(()=>[...e[17]||(e[17]=[a("鸟",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[29]||(e[29]=c("",7))])}}});export{E as __pageData,F as default};

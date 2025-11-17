import{_ as n}from"./chunks/button.vue_vue_type_script_setup_true_lang.v3w7-jGH.js";import{_ as r}from"./chunks/a.vue_vue_type_script_setup_true_lang.VYiC-HZv.js";import{_ as u}from"./chunks/plus.vue_vue_type_script_setup_true_lang.CWLTPrjR.js";import{I as o,c as k,o as h,ah as p,J as s,j as l,w as i,a}from"./chunks/framework.PAn8Jj8p.js";import"./chunks/useClassComputed.nZJ4II5u.js";import"./chunks/useColorUtils.CfbVybqV.js";import"./chunks/useStyleComputed.DTslAc2e.js";import"./chunks/IconBase.vue_vue_type_script_setup_true_lang.DxiooZ3q.js";const g={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},m={style:{display:"flex",gap:"50px"}},B={style:{display:"flex",gap:"50px"}},y={style:{display:"flex",gap:"50px"}},b={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},c=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/BasicButton.md","filePath":"components/BasicButton.md"}'),f={name:"components/BasicButton.md"},S=Object.assign(f,{setup(M){return(Y,t)=>{const e=o("ClientOnly"),d=o("ShowCode");return h(),k("div",null,[t[37]||(t[37]=p("",6)),s(d,{title:"代码演示",code:`
<template>
    <MYButton>Default按钮</MYButton>
    <MYButton type='primary'>primary按钮</MYButton>
    <MYButton type='success'>Success按钮</MYButton>
    <MYButton type='warning'>Warning按钮</MYButton>
    <MYButton type='danger'>Danger按钮</MYButton>
    <MYButton type='info'>Info按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("span",null,[t[1]||(t[1]=a("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[0]||(t[0]=[a("关于尺寸",-1)])]),_:1}),t[2]||(t[2]=a("的描述",-1))]),s(e,null,{default:i(()=>[l("div",g,[s(n,null,{default:i(()=>[...t[3]||(t[3]=[a("Default按钮",-1)])]),_:1}),s(n,{type:"primary"},{default:i(()=>[...t[4]||(t[4]=[a("primary按钮",-1)])]),_:1}),s(n,{type:"success"},{default:i(()=>[...t[5]||(t[5]=[a("Success按钮",-1)])]),_:1}),s(n,{type:"warning"},{default:i(()=>[...t[6]||(t[6]=[a("Warning按钮",-1)])]),_:1}),s(n,{type:"danger"},{default:i(()=>[...t[7]||(t[7]=[a("Danger按钮",-1)])]),_:1}),s(n,{type:"info"},{default:i(()=>[...t[8]||(t[8]=[a("Info按钮",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[38]||(t[38]=l("h3",{id:"colorbg",tabindex:"-1"},[a("colorBg "),l("a",{class:"header-anchor",href:"#colorbg","aria-label":"Permalink to “colorBg”"},"​")],-1)),t[39]||(t[39]=l("p",null,"当然，如果上面的颜色不满足需求，还可以自定义颜色，使用colorBg自定义按钮背景颜色 例如这里使用红色背景：",-1)),s(d,{title:"代码演示",description:"如果使用了colorBg api,那么type属性将会被colorBg属性覆盖掉",code:`
<template>
    <MYButton colorBg='#ff0000'>十六进制自定义红色背景按钮</MYButton>
    <MYButton colorBg='red'>单词自定义红色背景按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("div",m,[s(e,null,{default:i(()=>[s(n,{colorBg:"#ff0000"},{default:i(()=>[...t[9]||(t[9]=[a("十六进制自定义红色背景按钮",-1)])]),_:1}),s(n,{colorBg:"red"},{default:i(()=>[...t[10]||(t[10]=[a("单词自定义红色背景按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[40]||(t[40]=l("h3",{id:"colortext",tabindex:"-1"},[a("colorText "),l("a",{class:"header-anchor",href:"#colortext","aria-label":"Permalink to “colorText”"},"​")],-1)),t[41]||(t[41]=l("p",null,[l("code",null,"MYButton"),a("按钮也支持自定义文本颜色，这里使用colorText自定义按钮文字颜色")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton colorText='#ff0000'>十六进制自定义红色文本按钮</MYButton>
    <MYButton colorText='red'>单词自定义红色文本按钮</MYButton>
</template>
    `},{demo:i(()=>[l("div",B,[s(e,null,{default:i(()=>[s(n,{colorText:"#ff0000"},{default:i(()=>[...t[11]||(t[11]=[a("十六进制自定义红色背景按钮",-1)])]),_:1}),s(n,{colorText:"red"},{default:i(()=>[...t[12]||(t[12]=[a("单词自定义红色背景按钮",-1)])]),_:1})]),_:1})])]),_:1}),t[42]||(t[42]=l("h3",{id:"colorborder",tabindex:"-1"},[a("colorBorder "),l("a",{class:"header-anchor",href:"#colorborder","aria-label":"Permalink to “colorBorder”"},"​")],-1)),t[43]||(t[43]=l("p",null,"自定义按钮边框颜色，这里使用colorBorder自定义按钮边框颜色",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton colorBorder='#FF7F50'>十六进制自定义橙色边框按钮</MYButton>
    <MYButton colorBorder='orange'>单词自定义橙色边框按钮</MYButton>
</template>
    `},{demo:i(()=>[l("div",y,[s(e,null,{default:i(()=>[s(n,{colorBorder:"#FF7F50"},{default:i(()=>[...t[13]||(t[13]=[a("十六进制自定义橙色边框按钮",-1)])]),_:1}),s(n,{colorBorder:"#FF7F50"},{default:i(()=>[...t[14]||(t[14]=[a("单词自定义橙色边框按钮",-1)])]),_:1})]),_:1})])]),_:1}),t[44]||(t[44]=l("h3",{id:"plain",tabindex:"-1"},[a("plain "),l("a",{class:"header-anchor",href:"#plain","aria-label":"Permalink to “plain”"},"​")],-1)),t[45]||(t[45]=l("p",null,"使用plain属性可以把按钮渲染为透明样式，配合上面的自定义颜色实现不一样的样式",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton plain>Default按钮</MYButton>
    <MYButton plain type='primary'>primary按钮</MYButton>
    <MYButton plain type='success'>Success按钮</MYButton>
    <MYButton plain type='warning'>Warning按钮</MYButton>
    <MYButton plain type='danger'>Danger按钮</MYButton>
    <MYButton plain type='info'>Info按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("span",null,[t[16]||(t[16]=a("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[15]||(t[15]=[a("关于尺寸",-1)])]),_:1}),t[17]||(t[17]=a("的描述",-1))]),l("div",b,[s(e,null,{default:i(()=>[s(n,{plain:""},{default:i(()=>[...t[18]||(t[18]=[a("Default按钮",-1)])]),_:1}),s(n,{type:"primary",plain:""},{default:i(()=>[...t[19]||(t[19]=[a("primary按钮",-1)])]),_:1}),s(n,{type:"success",plain:""},{default:i(()=>[...t[20]||(t[20]=[a("Success按钮",-1)])]),_:1}),s(n,{type:"warning",plain:""},{default:i(()=>[...t[21]||(t[21]=[a("Warning按钮",-1)])]),_:1}),s(n,{type:"danger",plain:""},{default:i(()=>[...t[22]||(t[22]=[a("Danger按钮",-1)])]),_:1}),s(n,{type:"info",plain:""},{default:i(()=>[...t[23]||(t[23]=[a("Info按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[46]||(t[46]=l("h2",{id:"关于圆角",tabindex:"-1"},[a("关于圆角 "),l("a",{class:"header-anchor",href:"#关于圆角","aria-label":"Permalink to “关于圆角”"},"​")],-1)),t[47]||(t[47]=l("h3",{id:"round",tabindex:"-1"},[a("round "),l("a",{class:"header-anchor",href:"#round","aria-label":"Permalink to “round”"},"​")],-1)),t[48]||(t[48]=l("p",null,"使用round可以把按钮变成圆角",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton round>圆角按钮</MYButton>
</template>
    `},{demo:i(()=>[s(e,null,{default:i(()=>[s(n,{round:""},{default:i(()=>[...t[24]||(t[24]=[a("圆角按钮",-1)])]),_:1})]),_:1})]),_:1}),t[49]||(t[49]=l("h3",{id:"circle",tabindex:"-1"},[a("circle "),l("a",{class:"header-anchor",href:"#circle","aria-label":"Permalink to “circle”"},"​")],-1)),t[50]||(t[50]=l("p",null,"使用circle可以把按钮变成圆形",-1)),s(d,{title:"代码演示",description:"circle属性和round属性不能同时使用",code:`
<template>
    <MYButton circle>A</MYButton>
</template>
    `},{demo:i(()=>[s(e,null,{default:i(()=>[s(n,{circle:""},{default:i(()=>[...t[25]||(t[25]=[a("A",-1)])]),_:1})]),_:1})]),_:1}),t[51]||(t[51]=l("h2",{id:"aboutSize",tabindex:"-1"},[a("关于尺寸 "),l("a",{class:"header-anchor",href:"#aboutSize","aria-label":"Permalink to “关于尺寸”"},"​")],-1)),t[52]||(t[52]=l("h3",{id:"size",tabindex:"-1"},[a("size "),l("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),t[53]||(t[53]=l("p",null,"使用size属性可以支持调整按钮大小",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton size='supersmall'>supersmall按钮</MYButton>
    <MYButton size='small'>small按钮</MYButton>
    <MYButton size='medium'>medium按钮</MYButton>
    <MYButton size='large'>large按钮</MYButton>
    <MYButton size='superbig'>superbig按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("span",null,[t[27]||(t[27]=a("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[26]||(t[26]=[a("关于尺寸",-1)])]),_:1}),t[28]||(t[28]=a("的描述",-1))]),l("div",null,[s(e,null,{default:i(()=>[s(n,{style:{display:"block","margin-top":"20px"},size:"supersmall"},{default:i(()=>[...t[29]||(t[29]=[a("supersmall按钮",-1)])]),_:1}),s(n,{style:{display:"block","margin-top":"20px"},size:"small"},{default:i(()=>[...t[30]||(t[30]=[a("small按钮",-1)])]),_:1}),s(n,{style:{display:"block","margin-top":"20px"},size:"medium"},{default:i(()=>[...t[31]||(t[31]=[a("medium按钮",-1)])]),_:1}),s(n,{style:{display:"block","margin-top":"20px"},size:"large"},{default:i(()=>[...t[32]||(t[32]=[a("large按钮",-1)])]),_:1}),s(n,{style:{display:"block","margin-top":"20px"},size:"superbig"},{default:i(()=>[...t[33]||(t[33]=[a("superbig按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[54]||(t[54]=l("h2",{id:"关于禁用",tabindex:"-1"},[a("关于禁用 "),l("a",{class:"header-anchor",href:"#关于禁用","aria-label":"Permalink to “关于禁用”"},"​")],-1)),t[55]||(t[55]=l("h3",{id:"disabled",tabindex:"-1"},[a("disabled "),l("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),t[56]||(t[56]=l("p",null,"使用disabled可以支持禁用按钮",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton disabled>禁用按钮</MYButton>
</template>
    `},{demo:i(()=>[s(e,null,{default:i(()=>[s(n,{disabled:""},{default:i(()=>[...t[34]||(t[34]=[a("禁用按钮",-1)])]),_:1})]),_:1})]),_:1}),t[57]||(t[57]=l("h2",{id:"插入图标",tabindex:"-1"},[a("插入图标 "),l("a",{class:"header-anchor",href:"#插入图标","aria-label":"Permalink to “插入图标”"},"​")],-1)),t[58]||(t[58]=l("p",null,"使用icon属性可以支持插入图标",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton icon="MYPlus">带图标的按钮</MYButton>
</template>
    `},{demo:i(()=>[s(e,null,{default:i(()=>[s(n,{type:"success"},{default:i(()=>[s(u),t[35]||(t[35]=a(" 带图标的按钮 ",-1))]),_:1})]),_:1})]),_:1}),t[59]||(t[59]=l("p",null,"最后，实现个多种api组合使用实现个按钮：",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton
        size='superbig'
        round
        plain
        colorBorder='#FF7F50'
        colorBg='#8d4dd1'
        colorText='red'
    >组合按钮</MYButton>
</template>
    `},{demo:i(()=>[s(e,null,{default:i(()=>[s(n,{size:"superbig",round:"",plain:"",colorBorder:"#FF7F50",colorBg:"#8d4dd1",colorText:"red"},{default:i(()=>[...t[36]||(t[36]=[a("组合按钮",-1)])]),_:1})]),_:1})]),_:1}),t[60]||(t[60]=p("",5))])}}});export{c as __pageData,S as default};

import{_ as e}from"./chunks/button.vue_vue_type_script_setup_true_lang.CLxj8FSM.js";import{_ as r}from"./chunks/a.vue_vue_type_script_setup_true_lang.CjVls6Bl.js";import{I as o,c as u,o as k,ah as p,J as s,j as l,w as i,a}from"./chunks/framework.CnxbpgSG.js";import"./chunks/useClassComputed.C9lK823B.js";import"./chunks/useColorUtils.BfOxRDRG.js";import"./chunks/useStyleComputed.CzeN-o9K.js";const h={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},g={style:{display:"flex",gap:"50px"}},m={style:{display:"flex",gap:"50px"}},B={style:{display:"flex",gap:"50px"}},y={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},T=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"components/BasicButton.md","filePath":"components/BasicButton.md"}'),b={name:"components/BasicButton.md"},z=Object.assign(b,{setup(f){return(M,t)=>{const n=o("ClientOnly"),d=o("ShowCode");return k(),u("div",null,[t[36]||(t[36]=p("",6)),s(d,{title:"代码演示",code:`
<template>
    <MYButton>Default按钮</MYButton>
    <MYButton type='primary'>primary按钮</MYButton>
    <MYButton type='success'>Success按钮</MYButton>
    <MYButton type='warning'>Warning按钮</MYButton>
    <MYButton type='danger'>Danger按钮</MYButton>
    <MYButton type='info'>Info按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("span",null,[t[1]||(t[1]=a("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[0]||(t[0]=[a("关于尺寸",-1)])]),_:1}),t[2]||(t[2]=a("的描述",-1))]),s(n,null,{default:i(()=>[l("div",h,[s(e,null,{default:i(()=>[...t[3]||(t[3]=[a("Default按钮",-1)])]),_:1}),s(e,{type:"primary"},{default:i(()=>[...t[4]||(t[4]=[a("primary按钮",-1)])]),_:1}),s(e,{type:"success"},{default:i(()=>[...t[5]||(t[5]=[a("Success按钮",-1)])]),_:1}),s(e,{type:"warning"},{default:i(()=>[...t[6]||(t[6]=[a("Warning按钮",-1)])]),_:1}),s(e,{type:"danger"},{default:i(()=>[...t[7]||(t[7]=[a("Danger按钮",-1)])]),_:1}),s(e,{type:"info"},{default:i(()=>[...t[8]||(t[8]=[a("Info按钮",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[37]||(t[37]=l("h3",{id:"colorbg",tabindex:"-1"},[a("colorBg "),l("a",{class:"header-anchor",href:"#colorbg","aria-label":"Permalink to “colorBg”"},"​")],-1)),t[38]||(t[38]=l("p",null,"当然，如果上面的颜色不满足需求，还可以自定义颜色，使用colorBg自定义按钮背景颜色 例如这里使用红色背景：",-1)),s(d,{title:"代码演示",description:"如果使用了colorBg api,那么type属性将会被colorBg属性覆盖掉",code:`
<template>
    <MYButton colorBg='#ff0000'>十六进制自定义红色背景按钮</MYButton>
    <MYButton colorBg='red'>单词自定义红色背景按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("div",g,[s(n,null,{default:i(()=>[s(e,{colorBg:"#ff0000"},{default:i(()=>[...t[9]||(t[9]=[a("十六进制自定义红色背景按钮",-1)])]),_:1}),s(e,{colorBg:"red"},{default:i(()=>[...t[10]||(t[10]=[a("单词自定义红色背景按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[39]||(t[39]=l("h3",{id:"colortext",tabindex:"-1"},[a("colorText "),l("a",{class:"header-anchor",href:"#colortext","aria-label":"Permalink to “colorText”"},"​")],-1)),t[40]||(t[40]=l("p",null,[l("code",null,"MYButton"),a("按钮也支持自定义文本颜色，这里使用colorText自定义按钮文字颜色")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton colorText='#ff0000'>十六进制自定义红色文本按钮</MYButton>
    <MYButton colorText='red'>单词自定义红色文本按钮</MYButton>
</template>
    `},{demo:i(()=>[l("div",m,[s(n,null,{default:i(()=>[s(e,{colorText:"#ff0000"},{default:i(()=>[...t[11]||(t[11]=[a("十六进制自定义红色背景按钮",-1)])]),_:1}),s(e,{colorText:"red"},{default:i(()=>[...t[12]||(t[12]=[a("单词自定义红色背景按钮",-1)])]),_:1})]),_:1})])]),_:1}),t[41]||(t[41]=l("h3",{id:"colorborder",tabindex:"-1"},[a("colorBorder "),l("a",{class:"header-anchor",href:"#colorborder","aria-label":"Permalink to “colorBorder”"},"​")],-1)),t[42]||(t[42]=l("p",null,"自定义按钮边框颜色，这里使用colorBorder自定义按钮边框颜色",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton colorBorder='#FF7F50'>十六进制自定义橙色边框按钮</MYButton>
    <MYButton colorBorder='orange'>单词自定义橙色边框按钮</MYButton>
</template>
    `},{demo:i(()=>[l("div",B,[s(n,null,{default:i(()=>[s(e,{colorBorder:"#FF7F50"},{default:i(()=>[...t[13]||(t[13]=[a("十六进制自定义橙色边框按钮",-1)])]),_:1}),s(e,{colorBorder:"#FF7F50"},{default:i(()=>[...t[14]||(t[14]=[a("单词自定义橙色边框按钮",-1)])]),_:1})]),_:1})])]),_:1}),t[43]||(t[43]=l("h3",{id:"plain",tabindex:"-1"},[a("plain "),l("a",{class:"header-anchor",href:"#plain","aria-label":"Permalink to “plain”"},"​")],-1)),t[44]||(t[44]=l("p",null,"使用plain属性可以把按钮渲染为透明样式，配合上面的自定义颜色实现不一样的样式",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton plain>Default按钮</MYButton>
    <MYButton plain type='primary'>primary按钮</MYButton>
    <MYButton plain type='success'>Success按钮</MYButton>
    <MYButton plain type='warning'>Warning按钮</MYButton>
    <MYButton plain type='danger'>Danger按钮</MYButton>
    <MYButton plain type='info'>Info按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("span",null,[t[16]||(t[16]=a("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[15]||(t[15]=[a("关于尺寸",-1)])]),_:1}),t[17]||(t[17]=a("的描述",-1))]),l("div",y,[s(n,null,{default:i(()=>[s(e,{plain:""},{default:i(()=>[...t[18]||(t[18]=[a("Default按钮",-1)])]),_:1}),s(e,{type:"primary",plain:""},{default:i(()=>[...t[19]||(t[19]=[a("primary按钮",-1)])]),_:1}),s(e,{type:"success",plain:""},{default:i(()=>[...t[20]||(t[20]=[a("Success按钮",-1)])]),_:1}),s(e,{type:"warning",plain:""},{default:i(()=>[...t[21]||(t[21]=[a("Warning按钮",-1)])]),_:1}),s(e,{type:"danger",plain:""},{default:i(()=>[...t[22]||(t[22]=[a("Danger按钮",-1)])]),_:1}),s(e,{type:"info",plain:""},{default:i(()=>[...t[23]||(t[23]=[a("Info按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[45]||(t[45]=l("h2",{id:"关于圆角",tabindex:"-1"},[a("关于圆角 "),l("a",{class:"header-anchor",href:"#关于圆角","aria-label":"Permalink to “关于圆角”"},"​")],-1)),t[46]||(t[46]=l("h3",{id:"round",tabindex:"-1"},[a("round "),l("a",{class:"header-anchor",href:"#round","aria-label":"Permalink to “round”"},"​")],-1)),t[47]||(t[47]=l("p",null,"使用round可以把按钮变成圆角",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton round>圆角按钮</MYButton>
</template>
    `},{demo:i(()=>[s(n,null,{default:i(()=>[s(e,{round:""},{default:i(()=>[...t[24]||(t[24]=[a("圆角按钮",-1)])]),_:1})]),_:1})]),_:1}),t[48]||(t[48]=l("h3",{id:"circle",tabindex:"-1"},[a("circle "),l("a",{class:"header-anchor",href:"#circle","aria-label":"Permalink to “circle”"},"​")],-1)),t[49]||(t[49]=l("p",null,"使用circle可以把按钮变成圆形",-1)),s(d,{title:"代码演示",description:"circle属性和round属性不能同时使用",code:`
<template>
    <MYButton circle>A</MYButton>
</template>
    `},{demo:i(()=>[s(n,null,{default:i(()=>[s(e,{circle:""},{default:i(()=>[...t[25]||(t[25]=[a("A",-1)])]),_:1})]),_:1})]),_:1}),t[50]||(t[50]=l("h2",{id:"aboutSize",tabindex:"-1"},[a("关于尺寸 "),l("a",{class:"header-anchor",href:"#aboutSize","aria-label":"Permalink to “关于尺寸”"},"​")],-1)),t[51]||(t[51]=l("h3",{id:"size",tabindex:"-1"},[a("size "),l("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),t[52]||(t[52]=l("p",null,"使用size属性可以支持调整按钮大小",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton size='supersmall'>supersmall按钮</MYButton>
    <MYButton size='small'>small按钮</MYButton>
    <MYButton size='medium'>medium按钮</MYButton>
    <MYButton size='large'>large按钮</MYButton>
    <MYButton size='superbig'>superbig按钮</MYButton>
</template>
`.trim()},{demo:i(()=>[l("span",null,[t[27]||(t[27]=a("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[26]||(t[26]=[a("关于尺寸",-1)])]),_:1}),t[28]||(t[28]=a("的描述",-1))]),l("div",null,[s(n,null,{default:i(()=>[s(e,{style:{display:"block","margin-top":"20px"},size:"supersmall"},{default:i(()=>[...t[29]||(t[29]=[a("supersmall按钮",-1)])]),_:1}),s(e,{style:{display:"block","margin-top":"20px"},size:"small"},{default:i(()=>[...t[30]||(t[30]=[a("small按钮",-1)])]),_:1}),s(e,{style:{display:"block","margin-top":"20px"},size:"medium"},{default:i(()=>[...t[31]||(t[31]=[a("medium按钮",-1)])]),_:1}),s(e,{style:{display:"block","margin-top":"20px"},size:"large"},{default:i(()=>[...t[32]||(t[32]=[a("large按钮",-1)])]),_:1}),s(e,{style:{display:"block","margin-top":"20px"},size:"superbig"},{default:i(()=>[...t[33]||(t[33]=[a("superbig按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[53]||(t[53]=l("h2",{id:"关于禁用",tabindex:"-1"},[a("关于禁用 "),l("a",{class:"header-anchor",href:"#关于禁用","aria-label":"Permalink to “关于禁用”"},"​")],-1)),t[54]||(t[54]=l("h3",{id:"disabled",tabindex:"-1"},[a("disabled "),l("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),t[55]||(t[55]=l("p",null,"使用disabled可以支持禁用按钮",-1)),s(d,{title:"代码演示",code:`
<template>
    <MYButton disabled>禁用按钮</MYButton>
</template>
    `},{demo:i(()=>[s(n,null,{default:i(()=>[s(e,{disabled:""},{default:i(()=>[...t[34]||(t[34]=[a("禁用按钮",-1)])]),_:1})]),_:1})]),_:1}),t[56]||(t[56]=l("p",null,"最后，实现个多种api组合使用实现个按钮：",-1)),s(d,{title:"代码演示",code:`
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
    `},{demo:i(()=>[s(n,null,{default:i(()=>[s(e,{size:"superbig",round:"",plain:"",colorBorder:"#FF7F50",colorBg:"#8d4dd1",colorText:"red"},{default:i(()=>[...t[35]||(t[35]=[a("组合按钮",-1)])]),_:1})]),_:1})]),_:1}),t[57]||(t[57]=p("",5))])}}});export{T as __pageData,z as default};

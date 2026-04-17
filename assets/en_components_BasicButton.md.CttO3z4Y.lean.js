import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{_ as d}from"./chunks/a.vue_vue_type_script_setup_true_lang.B07wek4H.js";import{_ as u}from"./chunks/plus.vue_vue_type_script_setup_true_lang.gab9I-zL.js";import{I as r,o as k,c as h,a8 as p,J as n,w as s,j as i,a as e}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/IconBase.vue_vue_type_script_setup_true_lang.l0ItinT5.js";const m={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},B={style:{display:"flex",gap:"50px"}},g={style:{display:"flex",gap:"50px"}},b={style:{display:"flex",gap:"50px"}},y={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},S=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/BasicButton.md","filePath":"en/components/BasicButton.md"}'),f={name:"en/components/BasicButton.md"},F=Object.assign(f,{setup(c){return(x,t)=>{const a=r("ClientOnly"),l=r("ShowCode");return k(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[37]||(t[37]=p("",6)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton>Default Button</MYButton>
    <MYButton type='primary'>Primary Button</MYButton>
    <MYButton type='success'>Success Button</MYButton>
    <MYButton type='warning'>Warning Button</MYButton>
    <MYButton type='danger'>Danger Button</MYButton>
    <MYButton type='info'>Info Button</MYButton>
</template>
`.trim()},{demo:s(()=>[i("span",null,[t[1]||(t[1]=e("Note: The demo elements are slightly enlarged. Please refer to the ",-1)),n(d,{href:"#aboutSize",style:{}},{default:s(()=>[...t[0]||(t[0]=[e("Size",-1)])]),_:1}),t[2]||(t[2]=e(" section below for specific dimensions.",-1))]),n(a,null,{default:s(()=>[i("div",m,[n(o,null,{default:s(()=>[...t[3]||(t[3]=[e("Default Button",-1)])]),_:1}),n(o,{type:"primary"},{default:s(()=>[...t[4]||(t[4]=[e("Primary Button",-1)])]),_:1}),n(o,{type:"success"},{default:s(()=>[...t[5]||(t[5]=[e("Success Button",-1)])]),_:1}),n(o,{type:"warning"},{default:s(()=>[...t[6]||(t[6]=[e("Warning Button",-1)])]),_:1}),n(o,{type:"danger"},{default:s(()=>[...t[7]||(t[7]=[e("Danger Button",-1)])]),_:1}),n(o,{type:"info"},{default:s(()=>[...t[8]||(t[8]=[e("Info Button",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[38]||(t[38]=i("h3",{id:"colorbackground",tabindex:"-1"},[e("colorBackground "),i("a",{class:"header-anchor",href:"#colorbackground","aria-label":"Permalink to “colorBackground”"},"​")],-1)),t[39]||(t[39]=i("p",null,[e("Of course, if the above colors don't meet your needs, you can customize the button background color using "),i("code",null,"colorBackground"),e(". For example, using a red background:")],-1)),n(l,{title:"Code Demo",description:"If you use the colorBackground API, the type property will be overridden by the colorBackground property.",code:`
<template>
    <MYButton colorBackground='#ff0000'>Custom red background button (hex)</MYButton>
    <MYButton colorBackground='red'>Custom red background button (named)</MYButton>
</template>
`.trim()},{demo:s(()=>[i("div",B,[n(a,null,{default:s(()=>[n(o,{colorBackground:"#ff0000"},{default:s(()=>[...t[9]||(t[9]=[e("Custom red background button (hex)",-1)])]),_:1}),n(o,{colorBackground:"red"},{default:s(()=>[...t[10]||(t[10]=[e("Custom red background button (named)",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[40]||(t[40]=i("h3",{id:"colortext",tabindex:"-1"},[e("colorText "),i("a",{class:"header-anchor",href:"#colortext","aria-label":"Permalink to “colorText”"},"​")],-1)),t[41]||(t[41]=i("p",null,[e("The "),i("code",null,"MYButton"),e(" component also supports custom text color using "),i("code",null,"colorText"),e(".")],-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton colorText='#ff0000'>Custom red text button (hex)</MYButton>
    <MYButton colorText='red'>Custom red text button (named)</MYButton>
</template>
    `},{demo:s(()=>[i("div",g,[n(a,null,{default:s(()=>[n(o,{colorText:"#ff0000"},{default:s(()=>[...t[11]||(t[11]=[e("Custom red text button (hex)",-1)])]),_:1}),n(o,{colorText:"red"},{default:s(()=>[...t[12]||(t[12]=[e("Custom red text button (named)",-1)])]),_:1})]),_:1})])]),_:1}),t[42]||(t[42]=i("h3",{id:"colorborder",tabindex:"-1"},[e("colorBorder "),i("a",{class:"header-anchor",href:"#colorborder","aria-label":"Permalink to “colorBorder”"},"​")],-1)),t[43]||(t[43]=i("p",null,[e("Customize the button border color using "),i("code",null,"colorBorder"),e(".")],-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton colorBorder='#FF7F50'>Custom orange border button (hex)</MYButton>
    <MYButton colorBorder='orange'>Custom orange border button (named)</MYButton>
</template>
    `},{demo:s(()=>[i("div",b,[n(a,null,{default:s(()=>[n(o,{colorBorder:"#FF7F50"},{default:s(()=>[...t[13]||(t[13]=[e("Custom orange border button (hex)",-1)])]),_:1}),n(o,{colorBorder:"#FF7F50"},{default:s(()=>[...t[14]||(t[14]=[e("Custom orange border button (named)",-1)])]),_:1})]),_:1})])]),_:1}),t[44]||(t[44]=i("h3",{id:"plain",tabindex:"-1"},[e("plain "),i("a",{class:"header-anchor",href:"#plain","aria-label":"Permalink to “plain”"},"​")],-1)),t[45]||(t[45]=i("p",null,[e("Use the "),i("code",null,"plain"),e(" property to render the button with a transparent style, allowing you to achieve different looks when combined with custom colors.")],-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton plain>Default Button</MYButton>
    <MYButton plain type='primary'>Primary Button</MYButton>
    <MYButton plain type='success'>Success Button</MYButton>
    <MYButton plain type='warning'>Warning Button</MYButton>
    <MYButton plain type='danger'>Danger Button</MYButton>
    <MYButton plain type='info'>Info Button</MYButton>
</template>
`.trim()},{demo:s(()=>[i("span",null,[t[16]||(t[16]=e("Note: The demo elements are slightly enlarged. Please refer to the ",-1)),n(d,{href:"#aboutSize",style:{}},{default:s(()=>[...t[15]||(t[15]=[e("Size",-1)])]),_:1}),t[17]||(t[17]=e(" section below for specific dimensions.",-1))]),i("div",y,[n(a,null,{default:s(()=>[n(o,{plain:""},{default:s(()=>[...t[18]||(t[18]=[e("Default Button",-1)])]),_:1}),n(o,{type:"primary",plain:""},{default:s(()=>[...t[19]||(t[19]=[e("Primary Button",-1)])]),_:1}),n(o,{type:"success",plain:""},{default:s(()=>[...t[20]||(t[20]=[e("Success Button",-1)])]),_:1}),n(o,{type:"warning",plain:""},{default:s(()=>[...t[21]||(t[21]=[e("Warning Button",-1)])]),_:1}),n(o,{type:"danger",plain:""},{default:s(()=>[...t[22]||(t[22]=[e("Danger Button",-1)])]),_:1}),n(o,{type:"info",plain:""},{default:s(()=>[...t[23]||(t[23]=[e("Info Button",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[46]||(t[46]=i("h2",{id:"rounded-corners",tabindex:"-1"},[e("Rounded Corners "),i("a",{class:"header-anchor",href:"#rounded-corners","aria-label":"Permalink to “Rounded Corners”"},"​")],-1)),t[47]||(t[47]=i("h3",{id:"rounded",tabindex:"-1"},[e("rounded "),i("a",{class:"header-anchor",href:"#rounded","aria-label":"Permalink to “rounded”"},"​")],-1)),t[48]||(t[48]=i("p",null,[e("Use "),i("code",null,"rounded"),e(" to make the button have rounded corners.")],-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton rounded>Rounded Button</MYButton>
</template>
    `},{demo:s(()=>[n(a,null,{default:s(()=>[n(o,{rounded:""},{default:s(()=>[...t[24]||(t[24]=[e("Rounded Button",-1)])]),_:1})]),_:1})]),_:1}),t[49]||(t[49]=i("h3",{id:"circular",tabindex:"-1"},[e("circular "),i("a",{class:"header-anchor",href:"#circular","aria-label":"Permalink to “circular”"},"​")],-1)),t[50]||(t[50]=i("p",null,[e("Use "),i("code",null,"circular"),e(" to make the button circular.")],-1)),n(l,{title:"Code Demo",description:"The circular and rounded properties cannot be used simultaneously.",code:`
<template>
    <MYButton circular>A</MYButton>
</template>
    `},{demo:s(()=>[n(a,null,{default:s(()=>[n(o,{circular:""},{default:s(()=>[...t[25]||(t[25]=[e("A",-1)])]),_:1})]),_:1})]),_:1}),t[51]||(t[51]=i("h2",{id:"aboutSize",tabindex:"-1"},[e("Sizes "),i("a",{class:"header-anchor",href:"#aboutSize","aria-label":"Permalink to “Sizes”"},"​")],-1)),t[52]||(t[52]=i("h3",{id:"size",tabindex:"-1"},[e("size "),i("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),t[53]||(t[53]=i("p",null,[e("Use the "),i("code",null,"size"),e(" property to adjust the button size.")],-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton size='supersmall'>Supersmall Button</MYButton>
    <MYButton size='small'>Small Button</MYButton>
    <MYButton size='medium'>Medium Button</MYButton>
    <MYButton size='large'>Large Button</MYButton>
    <MYButton size='superbig'>Superbig Button</MYButton>
</template>
`.trim()},{demo:s(()=>[i("span",null,[t[27]||(t[27]=e("Note: The demo elements are slightly enlarged. Please refer to the ",-1)),n(d,{href:"#aboutSize",style:{}},{default:s(()=>[...t[26]||(t[26]=[e("Size",-1)])]),_:1}),t[28]||(t[28]=e(" section above for specific dimensions.",-1))]),i("div",null,[n(a,null,{default:s(()=>[n(o,{style:{display:"block","margin-top":"20px"},size:"supersmall"},{default:s(()=>[...t[29]||(t[29]=[e("Supersmall Button",-1)])]),_:1}),n(o,{style:{display:"block","margin-top":"20px"},size:"small"},{default:s(()=>[...t[30]||(t[30]=[e("Small Button",-1)])]),_:1}),n(o,{style:{display:"block","margin-top":"20px"},size:"medium"},{default:s(()=>[...t[31]||(t[31]=[e("Medium Button",-1)])]),_:1}),n(o,{style:{display:"block","margin-top":"20px"},size:"large"},{default:s(()=>[...t[32]||(t[32]=[e("Large Button",-1)])]),_:1}),n(o,{style:{display:"block","margin-top":"20px"},size:"superbig"},{default:s(()=>[...t[33]||(t[33]=[e("Superbig Button",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[54]||(t[54]=i("h2",{id:"disabled-state",tabindex:"-1"},[e("Disabled State "),i("a",{class:"header-anchor",href:"#disabled-state","aria-label":"Permalink to “Disabled State”"},"​")],-1)),t[55]||(t[55]=i("h3",{id:"disabled",tabindex:"-1"},[e("disabled "),i("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),t[56]||(t[56]=i("p",null,[e("Use "),i("code",null,"disabled"),e(" to disable the button.")],-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton disabled>Disabled Button</MYButton>
</template>
    `},{demo:s(()=>[n(a,null,{default:s(()=>[n(o,{disabled:""},{default:s(()=>[...t[34]||(t[34]=[e("Disabled Button",-1)])]),_:1})]),_:1})]),_:1}),t[57]||(t[57]=i("h2",{id:"adding-icons",tabindex:"-1"},[e("Adding Icons "),i("a",{class:"header-anchor",href:"#adding-icons","aria-label":"Permalink to “Adding Icons”"},"​")],-1)),t[58]||(t[58]=i("p",null,[e("Use the "),i("code",null,"icon"),e(" property to add an icon to the button.")],-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton icon="MYPlus">Button with Icon</MYButton>
</template>
    `},{demo:s(()=>[n(a,null,{default:s(()=>[n(o,{type:"success"},{default:s(()=>[n(u),t[35]||(t[35]=e(" Button with Icon ",-1))]),_:1})]),_:1})]),_:1}),t[59]||(t[59]=i("p",null,"Finally, here's an example combining multiple APIs to create a custom button:",-1)),n(l,{title:"Code Demo",code:`
<template>
    <MYButton
        size='superbig'
        rounded
        plain
        colorBorder='#FF7F50'
        colorBackground='#8d4dd1'
        colorText='red'
    >Combined Button</MYButton>
</template>
    `},{demo:s(()=>[n(a,null,{default:s(()=>[n(o,{size:"superbig",rounded:"",plain:"",colorBorder:"#FF7F50",colorBackground:"#8d4dd1",colorText:"red"},{default:s(()=>[...t[36]||(t[36]=[e("Combined Button",-1)])]),_:1})]),_:1})]),_:1}),t[60]||(t[60]=p("",5))])}}});export{S as __pageData,F as default};

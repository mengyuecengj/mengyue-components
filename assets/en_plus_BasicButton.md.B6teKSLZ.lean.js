import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{_ as r}from"./chunks/a.vue_vue_type_script_setup_true_lang.B07wek4H.js";import{_ as u}from"./chunks/plus.vue_vue_type_script_setup_true_lang.gab9I-zL.js";import{I as d,o as h,c as m,a8 as p,J as s,w as i,j as n,a as e}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/IconBase.vue_vue_type_script_setup_true_lang.l0ItinT5.js";const k={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},B={style:{display:"flex",gap:"50px"}},b={style:{display:"flex",gap:"50px"}},g={style:{display:"flex",gap:"50px"}},f={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},F=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/BasicButton.md","filePath":"en/plus/BasicButton.md"}'),y={name:"en/plus/BasicButton.md"},S=Object.assign(y,{setup(c){return(x,t)=>{const a=d("ClientOnly"),l=d("ShowCode");return h(),m("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[37]||(t[37]=p("",6)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton>Default Button</MYButton>
    <MYButton type='primary'>Primary Button</MYButton>
    <MYButton type='success'>Success Button</MYButton>
    <MYButton type='warning'>Warning Button</MYButton>
    <MYButton type='danger'>Danger Button</MYButton>
    <MYButton type='info'>Info Button</MYButton>
</template>
`.trim()},{demo:i(()=>[n("span",null,[t[1]||(t[1]=e("Note: The demo effect has some element magnification. For specific dimensions, please read the ",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[0]||(t[0]=[e("About Size",-1)])]),_:1}),t[2]||(t[2]=e(" description below.",-1))]),s(a,null,{default:i(()=>[n("div",k,[s(o,null,{default:i(()=>[...t[3]||(t[3]=[e("Default Button",-1)])]),_:1}),s(o,{type:"primary"},{default:i(()=>[...t[4]||(t[4]=[e("Primary Button",-1)])]),_:1}),s(o,{type:"success"},{default:i(()=>[...t[5]||(t[5]=[e("Success Button",-1)])]),_:1}),s(o,{type:"warning"},{default:i(()=>[...t[6]||(t[6]=[e("Warning Button",-1)])]),_:1}),s(o,{type:"danger"},{default:i(()=>[...t[7]||(t[7]=[e("Danger Button",-1)])]),_:1}),s(o,{type:"info"},{default:i(()=>[...t[8]||(t[8]=[e("Info Button",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[38]||(t[38]=n("h3",{id:"colorbg",tabindex:"-1"},[e("colorBg "),n("a",{class:"header-anchor",href:"#colorbg","aria-label":"Permalink to “colorBg”"},"​")],-1)),t[39]||(t[39]=n("p",null,[e("If the above colors do not meet your needs, you can customize the color. Use "),n("code",null,"colorBg"),e(" to customize the button background color. For example, using a red background here:")],-1)),s(l,{title:"Code Demo",description:"If the colorBg API is used, the type attribute will be overridden by the colorBg attribute.",code:`
<template>
    <MYButton colorBg='#ff0000'>Hex Custom Red Background Button</MYButton>
    <MYButton colorBg='red'>Named Color Custom Red Background Button</MYButton>
</template>
`.trim()},{demo:i(()=>[n("div",B,[s(a,null,{default:i(()=>[s(o,{colorBg:"#ff0000"},{default:i(()=>[...t[9]||(t[9]=[e("Hex Custom Red Background Button",-1)])]),_:1}),s(o,{colorBg:"red"},{default:i(()=>[...t[10]||(t[10]=[e("Named Color Custom Red Background Button",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[40]||(t[40]=n("h3",{id:"colortext",tabindex:"-1"},[e("colorText "),n("a",{class:"header-anchor",href:"#colortext","aria-label":"Permalink to “colorText”"},"​")],-1)),t[41]||(t[41]=n("p",null,[e("The "),n("code",null,"MYButton"),e(" also supports custom text color. Use "),n("code",null,"colorText"),e(" to customize the button's text color.")],-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton colorText='#ff0000'>Hex Custom Red Text Button</MYButton>
    <MYButton colorText='red'>Named Color Custom Red Text Button</MYButton>
</template>
    `},{demo:i(()=>[n("div",b,[s(a,null,{default:i(()=>[s(o,{colorText:"#ff0000"},{default:i(()=>[...t[11]||(t[11]=[e("Hex Custom Red Text Button",-1)])]),_:1}),s(o,{colorText:"red"},{default:i(()=>[...t[12]||(t[12]=[e("Named Color Custom Red Text Button",-1)])]),_:1})]),_:1})])]),_:1}),t[42]||(t[42]=n("h3",{id:"colorborder",tabindex:"-1"},[e("colorBorder "),n("a",{class:"header-anchor",href:"#colorborder","aria-label":"Permalink to “colorBorder”"},"​")],-1)),t[43]||(t[43]=n("p",null,[e("Customize the button border color. Use "),n("code",null,"colorBorder"),e(" to customize the button's border color.")],-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton colorBorder='#FF7F50'>Hex Custom Orange Border Button</MYButton>
    <MYButton colorBorder='orange'>Named Color Custom Orange Border Button</MYButton>
</template>
    `},{demo:i(()=>[n("div",g,[s(a,null,{default:i(()=>[s(o,{colorBorder:"#FF7F50"},{default:i(()=>[...t[13]||(t[13]=[e("Hex Custom Orange Border Button",-1)])]),_:1}),s(o,{colorBorder:"orange"},{default:i(()=>[...t[14]||(t[14]=[e("Named Color Custom Orange Border Button",-1)])]),_:1})]),_:1})])]),_:1}),t[44]||(t[44]=n("h3",{id:"plain",tabindex:"-1"},[e("plain "),n("a",{class:"header-anchor",href:"#plain","aria-label":"Permalink to “plain”"},"​")],-1)),t[45]||(t[45]=n("p",null,[e("Use the "),n("code",null,"plain"),e(" attribute to render the button with a transparent style, which can be combined with the custom colors above to achieve unique appearances.")],-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton plain>Default Button</MYButton>
    <MYButton plain type='primary'>Primary Button</MYButton>
    <MYButton plain type='success'>Success Button</MYButton>
    <MYButton plain type='warning'>Warning Button</MYButton>
    <MYButton plain type='danger'>Danger Button</MYButton>
    <MYButton plain type='info'>Info Button</MYButton>
</template>
`.trim()},{demo:i(()=>[n("span",null,[t[16]||(t[16]=e("Note: The demo effect has some element magnification. For specific dimensions, please read the ",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[15]||(t[15]=[e("About Size",-1)])]),_:1}),t[17]||(t[17]=e(" description below.",-1))]),n("div",f,[s(a,null,{default:i(()=>[s(o,{plain:""},{default:i(()=>[...t[18]||(t[18]=[e("Default Button",-1)])]),_:1}),s(o,{type:"primary",plain:""},{default:i(()=>[...t[19]||(t[19]=[e("Primary Button",-1)])]),_:1}),s(o,{type:"success",plain:""},{default:i(()=>[...t[20]||(t[20]=[e("Success Button",-1)])]),_:1}),s(o,{type:"warning",plain:""},{default:i(()=>[...t[21]||(t[21]=[e("Warning Button",-1)])]),_:1}),s(o,{type:"danger",plain:""},{default:i(()=>[...t[22]||(t[22]=[e("Danger Button",-1)])]),_:1}),s(o,{type:"info",plain:""},{default:i(()=>[...t[23]||(t[23]=[e("Info Button",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[46]||(t[46]=n("h2",{id:"about-border-radius",tabindex:"-1"},[e("About Border Radius "),n("a",{class:"header-anchor",href:"#about-border-radius","aria-label":"Permalink to “About Border Radius”"},"​")],-1)),t[47]||(t[47]=n("h3",{id:"round",tabindex:"-1"},[e("round "),n("a",{class:"header-anchor",href:"#round","aria-label":"Permalink to “round”"},"​")],-1)),t[48]||(t[48]=n("p",null,[e("Use "),n("code",null,"round"),e(" to make the button have rounded corners.")],-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton round>Rounded Button</MYButton>
</template>
    `},{demo:i(()=>[s(a,null,{default:i(()=>[s(o,{round:""},{default:i(()=>[...t[24]||(t[24]=[e("Rounded Button",-1)])]),_:1})]),_:1})]),_:1}),t[49]||(t[49]=n("h3",{id:"circle",tabindex:"-1"},[e("circle "),n("a",{class:"header-anchor",href:"#circle","aria-label":"Permalink to “circle”"},"​")],-1)),t[50]||(t[50]=n("p",null,[e("Use "),n("code",null,"circle"),e(" to make the button circular.")],-1)),s(l,{title:"Code Demo",description:"The circle and round attributes cannot be used simultaneously.",code:`
<template>
    <MYButton circle>A</MYButton>
</template>
    `},{demo:i(()=>[s(a,null,{default:i(()=>[s(o,{circle:""},{default:i(()=>[...t[25]||(t[25]=[e("A",-1)])]),_:1})]),_:1})]),_:1}),t[51]||(t[51]=n("h2",{id:"aboutSize",tabindex:"-1"},[e("About Size "),n("a",{class:"header-anchor",href:"#aboutSize","aria-label":"Permalink to “About Size”"},"​")],-1)),t[52]||(t[52]=n("h3",{id:"size",tabindex:"-1"},[e("size "),n("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),t[53]||(t[53]=n("p",null,[e("Use the "),n("code",null,"size"),e(" attribute to adjust the button size.")],-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton size='supersmall'>supersmall Button</MYButton>
    <MYButton size='small'>small Button</MYButton>
    <MYButton size='medium'>medium Button</MYButton>
    <MYButton size='large'>large Button</MYButton>
    <MYButton size='superbig'>superbig Button</MYButton>
</template>
`.trim()},{demo:i(()=>[n("span",null,[t[27]||(t[27]=e("Note: The demo effect has some element magnification. For specific dimensions, please read the ",-1)),s(r,{href:"#aboutSize",style:{}},{default:i(()=>[...t[26]||(t[26]=[e("About Size",-1)])]),_:1}),t[28]||(t[28]=e(" description below.",-1))]),n("div",null,[s(a,null,{default:i(()=>[s(o,{style:{display:"block","margin-top":"20px"},size:"supersmall"},{default:i(()=>[...t[29]||(t[29]=[e("supersmall Button",-1)])]),_:1}),s(o,{style:{display:"block","margin-top":"20px"},size:"small"},{default:i(()=>[...t[30]||(t[30]=[e("small Button",-1)])]),_:1}),s(o,{style:{display:"block","margin-top":"20px"},size:"medium"},{default:i(()=>[...t[31]||(t[31]=[e("medium Button",-1)])]),_:1}),s(o,{style:{display:"block","margin-top":"20px"},size:"large"},{default:i(()=>[...t[32]||(t[32]=[e("large Button",-1)])]),_:1}),s(o,{style:{display:"block","margin-top":"20px"},size:"superbig"},{default:i(()=>[...t[33]||(t[33]=[e("superbig Button",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[54]||(t[54]=n("h2",{id:"about-disabled",tabindex:"-1"},[e("About Disabled "),n("a",{class:"header-anchor",href:"#about-disabled","aria-label":"Permalink to “About Disabled”"},"​")],-1)),t[55]||(t[55]=n("h3",{id:"disabled",tabindex:"-1"},[e("disabled "),n("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),t[56]||(t[56]=n("p",null,[e("Use "),n("code",null,"disabled"),e(" to disable the button.")],-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton disabled>Disabled Button</MYButton>
</template>
    `},{demo:i(()=>[s(a,null,{default:i(()=>[s(o,{disabled:""},{default:i(()=>[...t[34]||(t[34]=[e("Disabled Button",-1)])]),_:1})]),_:1})]),_:1}),t[57]||(t[57]=n("h2",{id:"insert-icon",tabindex:"-1"},[e("Insert Icon "),n("a",{class:"header-anchor",href:"#insert-icon","aria-label":"Permalink to “Insert Icon”"},"​")],-1)),t[58]||(t[58]=n("p",null,[e("Use the "),n("code",null,"icon"),e(" property or the default slot to insert an icon into the button.")],-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton>
        <MYPlus /> Button with Icon
    </MYButton>
</template>
    `},{demo:i(()=>[s(a,null,{default:i(()=>[s(o,{type:"success"},{default:i(()=>[s(u),t[35]||(t[35]=e(" Button with Icon ",-1))]),_:1})]),_:1})]),_:1}),t[59]||(t[59]=n("p",null,"Finally, combine multiple APIs to create a customized button:",-1)),s(l,{title:"Code Demo",code:`
<template>
    <MYButton
        size='superbig'
        round
        plain
        colorBorder='#FF7F50'
        colorBg='#8d4dd1'
        colorText='red'
    >Combined Button</MYButton>
</template>
    `},{demo:i(()=>[s(a,null,{default:i(()=>[s(o,{size:"superbig",round:"",plain:"",colorBorder:"#FF7F50",colorBg:"#8d4dd1",colorText:"red"},{default:i(()=>[...t[36]||(t[36]=[e("Combined Button",-1)])]),_:1})]),_:1})]),_:1}),t[60]||(t[60]=p("",5))])}}});export{F as __pageData,S as default};

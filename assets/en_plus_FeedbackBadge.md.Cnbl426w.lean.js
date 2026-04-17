import{_ as n}from"./chunks/badge.vue_vue_type_script_setup_true_lang.uU3XICJV.js";import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as r,o as p,c as h,a8 as l,J as e,w as a,a as i,j as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const m={style:{display:"flex",gap:"20px"}},g={style:{display:"flex",gap:"20px"}},k={style:{display:"flex",gap:"20px","align-items":"center"}},C=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/FeedbackBadge.md","filePath":"en/plus/FeedbackBadge.md"}'),u={name:"en/plus/FeedbackBadge.md"},D=Object.assign(u,{setup(y){return(B,t)=>{const d=r("ShowCode");return p(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[11]||(t[11]=l("",5)),e(d,{title:"Code Demo",code:`
<template>
    <MYBadge :content='5'>
        <MYButton type='primary'>Messages</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(n,{content:5},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[0]||(t[0]=[i("Messages",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[12]||(t[12]=s("h2",{id:"dot-mode",tabindex:"-1"},[i("Dot Mode "),s("a",{class:"header-anchor",href:"#dot-mode","aria-label":"Permalink to “Dot Mode”"},"​")],-1)),t[13]||(t[13]=s("p",null,[i("Use the "),s("code",null,"dot"),i(" prop to display a small red dot instead of a specific number.")],-1)),e(d,{title:"Code Demo",code:`
<template>
    <MYBadge dot>
        <MYButton type='primary'>Notifications</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(n,{dot:""},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[1]||(t[1]=[i("Notifications",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[14]||(t[14]=s("h2",{id:"custom-color",tabindex:"-1"},[i("Custom Color "),s("a",{class:"header-anchor",href:"#custom-color","aria-label":"Permalink to “Custom Color”"},"​")],-1)),t[15]||(t[15]=s("p",null,[i("Use the "),s("code",null,"color"),i(" prop to customize the badge color.")],-1)),e(d,{title:"Code Demo",code:`
<template>
    <MYBadge :content='8' color='#52c41a'>
        <MYButton type='primary'>Green Badge</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(n,{content:8,color:"#52c41a"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[2]||(t[2]=[i("Green Badge",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[16]||(t[16]=s("h2",{id:"position-adjustment",tabindex:"-1"},[i("Position Adjustment "),s("a",{class:"header-anchor",href:"#position-adjustment","aria-label":"Permalink to “Position Adjustment”"},"​")],-1)),t[17]||(t[17]=s("p",null,[i("Use the "),s("code",null,"position"),i(" prop to adjust the badge position.")],-1)),e(d,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='3' position='top-left'>
            <MYButton type='primary'>Top Left</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='top-right'>
            <MYButton type='primary'>Top Right</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-left'>
            <MYButton type='primary'>Bottom Left</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-right'>
            <MYButton type='primary'>Bottom Right</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:a(()=>[s("div",m,[e(n,{content:3,position:"top-left"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[3]||(t[3]=[i("Top Left",-1)])]),_:1})]),_:1}),e(n,{content:3,position:"top-right"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[4]||(t[4]=[i("Top Right",-1)])]),_:1})]),_:1}),e(n,{content:3,position:"bottom-left"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[5]||(t[5]=[i("Bottom Left",-1)])]),_:1})]),_:1}),e(n,{content:3,position:"bottom-right"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[6]||(t[6]=[i("Bottom Right",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[18]||(t[18]=s("h2",{id:"max-value-limit",tabindex:"-1"},[i("Max Value Limit "),s("a",{class:"header-anchor",href:"#max-value-limit","aria-label":"Permalink to “Max Value Limit”"},"​")],-1)),t[19]||(t[19]=s("p",null,[i("Use the "),s("code",null,"max"),i(" prop to limit the maximum numeric value displayed on the badge.")],-1)),e(d,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='100' :max='99'>
            <MYButton type='primary'>Messages</MYButton>
        </MYBadge>
        <MYBadge :content='100' :max='10'>
            <MYButton type='primary'>Messages</MYButton>
        </MYBadge>
        <MYBadge :content='8' :max='5'>
            <MYButton type='primary'>Messages</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:a(()=>[s("div",g,[e(n,{content:100,max:99},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[7]||(t[7]=[i("Messages",-1)])]),_:1})]),_:1}),e(n,{content:100,max:10},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[8]||(t[8]=[i("Messages",-1)])]),_:1})]),_:1}),e(n,{content:8,max:5},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[9]||(t[9]=[i("Messages",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[20]||(t[20]=s("h2",{id:"standalone-usage",tabindex:"-1"},[i("Standalone Usage "),s("a",{class:"header-anchor",href:"#standalone-usage","aria-label":"Permalink to “Standalone Usage”"},"​")],-1)),t[21]||(t[21]=s("p",null,"The badge can also be used independently without wrapping any content.",-1)),e(d,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 20px; align-items: center;'>
        <MYBadge :content='5' />
        <MYBadge content='New Message!' />
        <MYBadge dot />
    </div>
</template>
  `.trim()},{demo:a(()=>[s("div",k,[e(n,{content:5}),e(n,{content:"New Message!"}),e(n,{dot:""})])]),_:1},8,["code"]),t[22]||(t[22]=s("h2",{id:"combined-usage",tabindex:"-1"},[i("Combined Usage "),s("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),t[23]||(t[23]=s("p",null,"Finally, here's an example combining multiple APIs to create a badge:",-1)),e(d,{title:"Code Demo",code:`
<template>
    <MYBadge 
        :content='25' 
        color='#8d4dd1'
        position='bottom-right'
        :max='20'
        dot
    >
        <MYButton 
            type='primary'
            size='large'
        >
            Combined Badge
        </MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(n,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:a(()=>[e(o,{type:"primary",size:"large"},{default:a(()=>[...t[10]||(t[10]=[i(" Combined Badge ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[24]||(t[24]=l("",5))])}}});export{C as __pageData,D as default};

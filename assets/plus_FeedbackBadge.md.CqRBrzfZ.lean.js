import{_ as n}from"./chunks/badge.vue_vue_type_script_setup_true_lang.uU3XICJV.js";import{_ as d}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as r,o,c as h,a8 as p,J as a,w as i,a as e,j as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const k={style:{display:"flex",gap:"20px"}},g={style:{display:"flex",gap:"20px"}},m={style:{display:"flex",gap:"20px","align-items":"center"}},A=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackBadge.md","filePath":"plus/FeedbackBadge.md"}'),y={name:"plus/FeedbackBadge.md"},D=Object.assign(y,{setup(B){return(u,t)=>{const l=r("ShowCode");return o(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[t[11]||(t[11]=p("",5)),a(l,{title:"代码演示",code:`
<template>
    <MYBadge :content='5'>
        <MYButton type='primary'>消息</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:i(()=>[a(n,{content:5},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[0]||(t[0]=[e("消息",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[12]||(t[12]=s("h2",{id:"小红点模式",tabindex:"-1"},[e("小红点模式 "),s("a",{class:"header-anchor",href:"#小红点模式","aria-label":"Permalink to “小红点模式”"},"​")],-1)),t[13]||(t[13]=s("p",null,[e("使用"),s("code",null,"dot"),e("属性可以显示小红点而不显示具体数字。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <MYBadge dot>
        <MYButton type='primary'>通知</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:i(()=>[a(n,{dot:""},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[1]||(t[1]=[e("通知",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[14]||(t[14]=s("h2",{id:"自定义颜色",tabindex:"-1"},[e("自定义颜色 "),s("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),t[15]||(t[15]=s("p",null,[e("使用"),s("code",null,"color"),e("属性可以自定义徽章颜色。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <MYBadge :content='8' color='#52c41a'>
        <MYButton type='primary'>绿色徽章</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:i(()=>[a(n,{content:8,color:"#52c41a"},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[2]||(t[2]=[e("绿色徽章",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[16]||(t[16]=s("h2",{id:"位置调整",tabindex:"-1"},[e("位置调整 "),s("a",{class:"header-anchor",href:"#位置调整","aria-label":"Permalink to “位置调整”"},"​")],-1)),t[17]||(t[17]=s("p",null,[e("使用"),s("code",null,"position"),e("属性可以调整徽章的位置。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='3' position='top-left'>
            <MYButton type='primary'>左上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='top-right'>
            <MYButton type='primary'>右上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-left'>
            <MYButton type='primary'>左下</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-right'>
            <MYButton type='primary'>右下</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:i(()=>[s("div",k,[a(n,{content:3,position:"top-left"},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[3]||(t[3]=[e("左上",-1)])]),_:1})]),_:1}),a(n,{content:3,position:"top-right"},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[4]||(t[4]=[e("右上",-1)])]),_:1})]),_:1}),a(n,{content:3,position:"bottom-left"},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[5]||(t[5]=[e("左下",-1)])]),_:1})]),_:1}),a(n,{content:3,position:"bottom-right"},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[6]||(t[6]=[e("右下",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[18]||(t[18]=s("h2",{id:"最大值限制",tabindex:"-1"},[e("最大值限制 "),s("a",{class:"header-anchor",href:"#最大值限制","aria-label":"Permalink to “最大值限制”"},"​")],-1)),t[19]||(t[19]=s("p",null,[e("使用"),s("code",null,"max"),e("属性可以限制徽章显示的最大数值。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='100' :max='99'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='100' :max='10'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='8' :max='5'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:i(()=>[s("div",g,[a(n,{content:100,max:99},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[7]||(t[7]=[e("消息",-1)])]),_:1})]),_:1}),a(n,{content:100,max:10},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[8]||(t[8]=[e("消息",-1)])]),_:1})]),_:1}),a(n,{content:8,max:5},{default:i(()=>[a(d,{type:"primary"},{default:i(()=>[...t[9]||(t[9]=[e("消息",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[20]||(t[20]=s("h2",{id:"独立使用",tabindex:"-1"},[e("独立使用 "),s("a",{class:"header-anchor",href:"#独立使用","aria-label":"Permalink to “独立使用”"},"​")],-1)),t[21]||(t[21]=s("p",null,"徽章也可以独立使用，不包裹任何内容。",-1)),a(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px; align-items: center;'>
        <MYBadge :content='5' />
        <MYBadge :content='新消息!' />
        <MYBadge dot />
    </div>
</template>
  `.trim()},{demo:i(()=>[s("div",m,[a(n,{content:5}),a(n,{content:"新消息!"}),a(n,{dot:""})])]),_:1},8,["code"]),t[22]||(t[22]=s("h2",{id:"组合使用",tabindex:"-1"},[e("组合使用 "),s("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),t[23]||(t[23]=s("p",null,"最后，实现个多种api组合使用实现个徽章：",-1)),a(l,{title:"代码演示",code:`
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
            组合徽章
        </MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:i(()=>[a(n,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:i(()=>[a(d,{type:"primary",size:"large"},{default:i(()=>[...t[10]||(t[10]=[e(" 组合徽章 ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[24]||(t[24]=p("",5))])}}});export{A as __pageData,D as default};

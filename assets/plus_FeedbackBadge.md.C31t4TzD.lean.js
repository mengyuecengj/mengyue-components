import{_ as n}from"./chunks/badge.vue_vue_type_script_setup_true_lang.q2q81IqN.js";import{_ as d}from"./chunks/button.vue_vue_type_script_setup_true_lang.BZH5oCUC.js";import{I as r,o,c as h,ah as p,J as i,w as a,a as s,j as e}from"./chunks/framework.DmoDkOge.js";import"./chunks/useStyleComputed.CS9pThfp.js";import"./chunks/useClassComputed.Wc7vThmZ.js";import"./chunks/useColorUtils.Cc58FlZ9.js";const k={style:{display:"flex",gap:"20px"}},g={style:{display:"flex",gap:"20px"}},m={style:{display:"flex",gap:"20px","align-items":"center"}},A=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackBadge.md","filePath":"plus/FeedbackBadge.md"}'),y={name:"plus/FeedbackBadge.md"},D=Object.assign(y,{setup(B){return(u,t)=>{const l=r("ShowCode");return o(),h("div",null,[t[11]||(t[11]=p("",5)),i(l,{title:"代码演示",code:`
<template>
    <MYBadge :content='5'>
        <MYButton type='primary'>消息</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[i(n,{content:5},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[0]||(t[0]=[s("消息",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[12]||(t[12]=e("h2",{id:"小红点模式",tabindex:"-1"},[s("小红点模式 "),e("a",{class:"header-anchor",href:"#小红点模式","aria-label":"Permalink to “小红点模式”"},"​")],-1)),t[13]||(t[13]=e("p",null,[s("使用"),e("code",null,"dot"),s("属性可以显示小红点而不显示具体数字。")],-1)),i(l,{title:"代码演示",code:`
<template>
    <MYBadge dot>
        <MYButton type='primary'>通知</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[i(n,{dot:""},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[1]||(t[1]=[s("通知",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[14]||(t[14]=e("h2",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),e("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),t[15]||(t[15]=e("p",null,[s("使用"),e("code",null,"color"),s("属性可以自定义徽章颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
    <MYBadge :content='8' color='#52c41a'>
        <MYButton type='primary'>绿色徽章</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[i(n,{content:8,color:"#52c41a"},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[2]||(t[2]=[s("绿色徽章",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[16]||(t[16]=e("h2",{id:"位置调整",tabindex:"-1"},[s("位置调整 "),e("a",{class:"header-anchor",href:"#位置调整","aria-label":"Permalink to “位置调整”"},"​")],-1)),t[17]||(t[17]=e("p",null,[s("使用"),e("code",null,"position"),s("属性可以调整徽章的位置。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[e("div",k,[i(n,{content:3,position:"top-left"},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[3]||(t[3]=[s("左上",-1)])]),_:1})]),_:1}),i(n,{content:3,position:"top-right"},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[4]||(t[4]=[s("右上",-1)])]),_:1})]),_:1}),i(n,{content:3,position:"bottom-left"},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[5]||(t[5]=[s("左下",-1)])]),_:1})]),_:1}),i(n,{content:3,position:"bottom-right"},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[6]||(t[6]=[s("右下",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[18]||(t[18]=e("h2",{id:"最大值限制",tabindex:"-1"},[s("最大值限制 "),e("a",{class:"header-anchor",href:"#最大值限制","aria-label":"Permalink to “最大值限制”"},"​")],-1)),t[19]||(t[19]=e("p",null,[s("使用"),e("code",null,"max"),s("属性可以限制徽章显示的最大数值。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[e("div",g,[i(n,{content:100,max:99},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[7]||(t[7]=[s("消息",-1)])]),_:1})]),_:1}),i(n,{content:100,max:10},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[8]||(t[8]=[s("消息",-1)])]),_:1})]),_:1}),i(n,{content:8,max:5},{default:a(()=>[i(d,{type:"primary"},{default:a(()=>[...t[9]||(t[9]=[s("消息",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[20]||(t[20]=e("h2",{id:"独立使用",tabindex:"-1"},[s("独立使用 "),e("a",{class:"header-anchor",href:"#独立使用","aria-label":"Permalink to “独立使用”"},"​")],-1)),t[21]||(t[21]=e("p",null,"徽章也可以独立使用，不包裹任何内容。",-1)),i(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px; align-items: center;'>
        <MYBadge :content='5' />
        <MYBadge :content='新消息!' />
        <MYBadge dot />
    </div>
</template>
  `.trim()},{demo:a(()=>[e("div",m,[i(n,{content:5}),i(n,{content:"新消息!"}),i(n,{dot:""})])]),_:1},8,["code"]),t[22]||(t[22]=e("h2",{id:"组合使用",tabindex:"-1"},[s("组合使用 "),e("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),t[23]||(t[23]=e("p",null,"最后，实现个多种api组合使用实现个徽章：",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:a(()=>[i(n,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:a(()=>[i(d,{type:"primary",size:"large"},{default:a(()=>[...t[10]||(t[10]=[s(" 组合徽章 ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[24]||(t[24]=p("",5))])}}});export{A as __pageData,D as default};

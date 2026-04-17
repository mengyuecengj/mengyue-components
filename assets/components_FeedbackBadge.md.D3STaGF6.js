import{_ as n}from"./chunks/badge.vue_vue_type_script_setup_true_lang.uU3XICJV.js";import{_ as d}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as o,o as r,c as h,a8 as p,J as a,w as i,a as e,j as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const k={style:{display:"flex",gap:"20px"}},g={style:{display:"flex",gap:"20px"}},m={style:{display:"flex",gap:"20px","align-items":"center"}},A=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackBadge.md","filePath":"components/FeedbackBadge.md"}'),y={name:"components/FeedbackBadge.md"},D=Object.assign(y,{setup(B){return(u,t)=>{const l=o("ShowCode");return r(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[11]||(t[11]=p('<h1 id="badge" tabindex="-1">Badge <a class="header-anchor" href="#badge" aria-label="Permalink to “Badge”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>badge徽章组件，用于在图标或文字旁显示未读消息数或状态标记。。<br> 可以使用<code>&lt;MYBadge&gt;&lt;/MYBadge&gt;</code>或者<code>&lt;MYBadge /&gt;</code>来实现一个徽章</p><h2 id="数字内容" tabindex="-1">数字内容 <a class="header-anchor" href="#数字内容" aria-label="Permalink to “数字内容”">​</a></h2><p>使用<code>content</code>属性设置徽章内容。</p>',5)),a(l,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[a(n,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:i(()=>[a(d,{type:"primary",size:"large"},{default:i(()=>[...t[10]||(t[10]=[e(" 组合徽章 ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[24]||(t[24]=p(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>content</td><td>徽章内容</td><td>string | number</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>dot</td><td>是否显示小红点</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>color</td><td>徽章颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td><code>&#39;#ff4d4f&#39;</code></td></tr><tr><td>position</td><td>徽章位置</td><td>string</td><td><code>top-right</code>/<code>top-left</code>/<code>bottom-right</code>/<code>bottom-left</code></td><td><code>&#39;top-right&#39;</code></td></tr><tr><td>max</td><td>最大值限制</td><td>number</td><td>—</td><td><code>99</code></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> BadgeProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  content</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  dot</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  position</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bottom-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bottom-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  max</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5))])}}});export{A as __pageData,D as default};

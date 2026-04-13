import{_ as n}from"./chunks/badge.vue_vue_type_script_setup_true_lang.uU3XICJV.js";import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as r,o as p,c as h,a8 as l,J as e,w as a,a as i,j as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const m={style:{display:"flex",gap:"20px"}},g={style:{display:"flex",gap:"20px"}},k={style:{display:"flex",gap:"20px","align-items":"center"}},C=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FeedbackBadge.md","filePath":"en/components/FeedbackBadge.md"}'),u={name:"en/components/FeedbackBadge.md"},D=Object.assign(u,{setup(y){return(B,t)=>{const d=r("ShowCode");return p(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[t[11]||(t[11]=l('<h1 id="badge" tabindex="-1">Badge <a class="header-anchor" href="#badge" aria-label="Permalink to “Badge”">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to “Introduction”">​</a></h2><p>The badge component is used to display unread message counts or status indicators next to icons or text.<br> You can use <code>&lt;MYBadge&gt;&lt;/MYBadge&gt;</code> or <code>&lt;MYBadge /&gt;</code> to create a badge.</p><h2 id="numeric-content" tabindex="-1">Numeric Content <a class="header-anchor" href="#numeric-content" aria-label="Permalink to “Numeric Content”">​</a></h2><p>Use the <code>content</code> prop to set the badge content.</p>',5)),e(d,{title:"Code Demo",code:`
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
  `.trim()},{demo:a(()=>[e(n,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:a(()=>[e(o,{type:"primary",size:"large"},{default:a(()=>[...t[10]||(t[10]=[i(" Combined Badge ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[24]||(t[24]=l(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>content</td><td>Badge content</td><td>string | number</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>dot</td><td>Whether to show a small red dot</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>color</td><td>Badge color</td><td>string</td><td>Supports hex colors or color names</td><td><code>&#39;#ff4d4f&#39;</code></td></tr><tr><td>position</td><td>Badge position</td><td>string</td><td><code>top-right</code>/<code>top-left</code>/<code>bottom-right</code>/<code>bottom-left</code></td><td><code>&#39;top-right&#39;</code></td></tr><tr><td>max</td><td>Maximum value limit</td><td>number</td><td>—</td><td><code>99</code></td></tr></tbody></table><h3 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-label="Permalink to “Type Definitions”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> BadgeProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  content</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  dot</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  position</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bottom-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bottom-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  max</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5))])}}});export{C as __pageData,D as default};

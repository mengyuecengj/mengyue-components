import{_ as e}from"./chunks/border.vue_vue_type_script_setup_true_lang.wGeNBiT-.js";import{I as o,o as n,c as p,a8 as l,J as i,w as r,j as s,a as t}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const h={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},b={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}},C=JSON.parse('{"title":"Border","description":"","frontmatter":{},"headers":[],"relativePath":"components/BasicBorder.md","filePath":"components/BasicBorder.md"}'),g={name:"components/BasicBorder.md"},f=Object.assign(g,{setup(B){return(y,d)=>{const a=o("ShowCode");return n(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[d[21]||(d[21]=l('<h1 id="border" tabindex="-1">Border <a class="header-anchor" href="#border" aria-label="Permalink to “Border”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Border 组件用于为元素添加边框样式，支持多种边框风格、颜色和方向。 可以使用<code>&lt;MYBorder&gt;&lt;/MYBorder&gt;</code>或者<code>&lt;MYBorder /&gt;</code>可以实现边框的配置。</p><h2 id="关于基本边框" tabindex="-1">关于基本边框 <a class="header-anchor" href="#关于基本边框" aria-label="Permalink to “关于基本边框”">​</a></h2><h3 id="borderstyle" tabindex="-1">borderStyle <a class="header-anchor" href="#borderstyle" aria-label="Permalink to “borderStyle”">​</a></h3><p>使用 <code>borderStyle</code> 定义边框的基本样式。<br> 默认为黑色，此处使用<code>borderColor</code>配了个清晰的颜色。</p>',6)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>边框为solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>边框为dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>边框为dotted</MYBorder>
</template>
  `.trim()},{demo:r(()=>[s("div",h,[i(e,{borderStyle:"solid",borderColor:"#2c2"},{default:r(()=>[...d[0]||(d[0]=[t("边框为solid",-1)])]),_:1}),i(e,{borderStyle:"dashed",borderColor:"#2c2"},{default:r(()=>[...d[1]||(d[1]=[t("边框为dashed",-1)])]),_:1}),i(e,{borderStyle:"dotted",borderColor:"#2c2"},{default:r(()=>[...d[2]||(d[2]=[t("边框为dotted",-1)])]),_:1})])]),_:1},8,["code"]),d[22]||(d[22]=s("h3",{id:"borderwidth",tabindex:"-1"},[t("borderWidth "),s("a",{class:"header-anchor",href:"#borderwidth","aria-label":"Permalink to “borderWidth”"},"​")],-1)),d[23]||(d[23]=s("p",null,[t("使用 "),s("code",null,"borderWidth"),t(" 定义边框的厚度，默认为 "),s("code",null,"1px"),t("。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>厚度为2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>厚度为4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>厚度为6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>厚度为8vw</MYBorder>
</template>
  `.trim()},{demo:r(()=>[s("div",k,[i(e,{borderWidth:"2px",borderColor:"#2c2"},{default:r(()=>[...d[3]||(d[3]=[t("厚度为2px",-1)])]),_:1}),i(e,{borderWidth:"4vh",borderColor:"#2c2"},{default:r(()=>[...d[4]||(d[4]=[t("厚度为4vh",-1)])]),_:1}),i(e,{borderWidth:"6rem",borderColor:"#2c2"},{default:r(()=>[...d[5]||(d[5]=[t("厚度为6rem",-1)])]),_:1}),i(e,{borderWidth:"8vw",borderColor:"#2c2"},{default:r(()=>[...d[6]||(d[6]=[t("厚度为8vw",-1)])]),_:1})])]),_:1},8,["code"]),d[24]||(d[24]=s("h3",{id:"bordercolor",tabindex:"-1"},[t("borderColor "),s("a",{class:"header-anchor",href:"#bordercolor","aria-label":"Permalink to “borderColor”"},"​")],-1)),d[25]||(d[25]=s("p",null,[t("使用 "),s("code",null,"borderColor"),t(" 定义边框的颜色。默认值为黑色，此处使用"),s("code",null,"borderStyle"),t("配了"),s("code",null,'borderStyle="dashed"'),t("。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>蓝色边框</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>蓝色边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[s("div",b,[i(e,{borderColor:"#ff0000",borderStyle:"dashed"},{default:r(()=>[...d[7]||(d[7]=[t("红色边框",-1)])]),_:1}),i(e,{borderColor:"#409EFF",borderStyle:"dashed"},{default:r(()=>[...d[8]||(d[8]=[t("蓝色边框",-1)])]),_:1}),i(e,{borderColor:"red",borderStyle:"dashed"},{default:r(()=>[...d[9]||(d[9]=[t("红色边框",-1)])]),_:1}),i(e,{borderColor:"blue",borderStyle:"dashed"},{default:r(()=>[...d[10]||(d[10]=[t("蓝色边框",-1)])]),_:1})])]),_:1},8,["code"]),d[26]||(d[26]=s("h2",{id:"边框方向",tabindex:"-1"},[t("边框方向 "),s("a",{class:"header-anchor",href:"#边框方向","aria-label":"Permalink to “边框方向”"},"​")],-1)),d[27]||(d[27]=s("p",null,"可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。",-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder 
    topColor='red' 
    bottomColor='blue' 
    leftColor='green' 
    rightColor='yellow'
  >
    这是一个带有不同方向颜色的边框
  </MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow"},{default:r(()=>[...d[11]||(d[11]=[t(" 上下左右分别为红色和蓝色绿色黄色 ",-1)])]),_:1})]),_:1},8,["code"]),d[28]||(d[28]=s("h2",{id:"边框内容居中",tabindex:"-1"},[t("边框内容居中 "),s("a",{class:"header-anchor",href:"#边框内容居中","aria-label":"Permalink to “边框内容居中”"},"​")],-1)),d[29]||(d[29]=s("p",null,[t("使用 "),s("code",null,"center"),t(" 将边框中的内容居中。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder center borderColor='#2c2'>居中的文字</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{center:"",borderColor:"#2c2"},{default:r(()=>[...d[12]||(d[12]=[t("居中的文字",-1)])]),_:1})]),_:1},8,["code"]),d[30]||(d[30]=s("h2",{id:"边框圆角",tabindex:"-1"},[t("边框圆角 "),s("a",{class:"header-anchor",href:"#边框圆角","aria-label":"Permalink to “边框圆角”"},"​")],-1)),d[31]||(d[31]=s("p",null,[t("使用 "),s("code",null,"rounded"),t(" 属性为边框添加圆角。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。为了效果更直观这里使用了"),s("code",null,"paddingText"),t("移动了文本的位置。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder rounded borderColor='#2c2' paddingText='10px'>这是一个圆角边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{rounded:"",borderColor:"#2c2",paddingText:"10px"},{default:r(()=>[...d[13]||(d[13]=[t("这是一个圆角边框",-1)])]),_:1})]),_:1},8,["code"]),d[32]||(d[32]=s("h2",{id:"边框圆形",tabindex:"-1"},[t("边框圆形 "),s("a",{class:"header-anchor",href:"#边框圆形","aria-label":"Permalink to “边框圆形”"},"​")],-1)),d[33]||(d[33]=s("p",null,[t("使用 "),s("code",null,"circular"),t(" 属性将边框变为圆形。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。为了效果更直观这里使用了"),s("code",null,"paddingText"),t("移动了文本的位置。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder circular borderColor='#2c2' paddingText='10px'>这是一个圆形边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{circular:"",borderColor:"#2c2",paddingText:"10px"},{default:r(()=>[...d[14]||(d[14]=[t("这是一个圆形边框",-1)])]),_:1})]),_:1},8,["code"]),d[34]||(d[34]=s("h2",{id:"边框内部背景颜色",tabindex:"-1"},[t("边框内部背景颜色 "),s("a",{class:"header-anchor",href:"#边框内部背景颜色","aria-label":"Permalink to “边框内部背景颜色”"},"​")],-1)),d[35]||(d[35]=s("p",null,[t("使用 "),s("code",null,"colorBackground"),t(" 设置边框内部的背景色。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder colorBackground='#2c2'>这是一个带有背景色的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{colorBackground:"#2c2"},{default:r(()=>[...d[15]||(d[15]=[t("这是一个带有背景色的边框",-1)])]),_:1})]),_:1},8,["code"]),d[36]||(d[36]=s("h2",{id:"边框内部文本颜色",tabindex:"-1"},[t("边框内部文本颜色 "),s("a",{class:"header-anchor",href:"#边框内部文本颜色","aria-label":"Permalink to “边框内部文本颜色”"},"​")],-1)),d[37]||(d[37]=s("p",null,[t("使用 "),s("code",null,"textColor"),t(" 设置边框内文本的颜色。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder textColor='red'>这是一个红色文本的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{textColor:"red"},{default:r(()=>[...d[16]||(d[16]=[t("这是一个红色文本的边框",-1)])]),_:1})]),_:1},8,["code"]),d[38]||(d[38]=s("h2",{id:"阴影",tabindex:"-1"},[t("阴影 "),s("a",{class:"header-anchor",href:"#阴影","aria-label":"Permalink to “阴影”"},"​")],-1)),d[39]||(d[39]=s("p",null,[t("使用 "),s("code",null,"boxShadow"),t(" 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>这是一个带有阴影的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{boxShadow:"10px 2px 8px red"},{default:r(()=>[...d[17]||(d[17]=[t("这是一个带有阴影的边框",-1)])]),_:1})]),_:1},8,["code"]),d[40]||(d[40]=s("h2",{id:"自定义宽高",tabindex:"-1"},[t("自定义宽高 "),s("a",{class:"header-anchor",href:"#自定义宽高","aria-label":"Permalink to “自定义宽高”"},"​")],-1)),d[41]||(d[41]=s("p",null,[t("使用"),s("code",null,"width"),t("和"),s("code",null,"height"),t("属性进行宽高的设置。为了效果更直观这里使用了"),s("code",null,"paddingText"),t("和"),s("code",null,"borderColor"),t("移动了文本的位置和设置颜色。这个宽和高也可以单独使用。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    borderColor='#2c2' 
    paddingText='20px'
  >
    高100px宽300px
  </MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{width:"300px",height:"100px",borderColor:"#2c2",paddingText:"20px"},{default:r(()=>[...d[18]||(d[18]=[t(" 高100px宽300px ",-1)])]),_:1})]),_:1},8,["code"]),d[42]||(d[42]=s("h2",{id:"边框内容与边框之间距离",tabindex:"-1"},[t("边框内容与边框之间距离 "),s("a",{class:"header-anchor",href:"#边框内容与边框之间距离","aria-label":"Permalink to “边框内容与边框之间距离”"},"​")],-1)),d[43]||(d[43]=s("p",null,[t("使用"),s("code",null,"paddingText"),t("设置边框内容与边框之间的距离，其效果相当于原生css的"),s("code",null,"padding"),t("属性。也与css原生的padding使用方法是一致的。")],-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    paddingText='100px' 
    borderColor='#2c2'
  >
    paddingText为100px
  </MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{width:"300px",height:"100px",paddingText:"100px",borderColor:"#2c2"},{default:r(()=>[...d[19]||(d[19]=[t(" paddingText为100px ",-1)])]),_:1})]),_:1},8,["code"]),d[44]||(d[44]=s("p",null,"最后，下面为多种进行组合使用：",-1)),i(a,{title:"代码演示",code:`
<template>
  <MYBorder 
    rounded
    topColor='red'
    bottomColor='blue'
    leftColor='green'
    rightColor='yellow'
    width='300px'
    height='100px'
    textColor='#ff00ff'
    paddingText='100px'
    colorBackground='#2c2'
    boxShadow='10px 2px 8px red'
  >
    组合使用
  </MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{rounded:"",topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow",width:"300px",height:"100px",textColor:"#ff00ff",paddingText:"100px",colorBackground:"#2c2",boxShadow:"10px 2px 8px red"},{default:r(()=>[...d[20]||(d[20]=[t(" 组合使用 ",-1)])]),_:1})]),_:1},8,["code"]),d[45]||(d[45]=l(`<p><strong>注意: </strong><br></p><blockquote><p>· 如果使用了边框方向设置了颜色,那么<code>borderStyle</code>和<code>borderWidth</code>会被覆盖，使borderStyle不再生效。 <br> · <code>borderColor</code>和边框方向的颜色值同时设置了，那么边框方向会覆盖<code>borderColor</code>设置的颜色。所以它们指南同时使用一种样式。 <br> · 如果设置了<code>cricle</code>，<code>rounded</code>将不会生效，<code>cricle</code>和<code>rounded</code>只能同时使用一种样式。 <br></p></blockquote><h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>borderStyle</td><td>边框样式</td><td>string</td><td><code>solid</code>/<code>dashed</code>/<code>dotted</code>/<code>double</code></td><td><code>solid</code></td></tr><tr><td>borderWidth</td><td>边框厚度</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td><code>1px</code></td></tr><tr><td>borderColor</td><td>边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>topColor</td><td>上边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>bottomColor</td><td>下边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>leftColor</td><td>左边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>rightColor</td><td>右边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>rounded</td><td>是否为圆角</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>circular</td><td>是否为圆形</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>colorBackground</td><td>背景色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>textColor</td><td>文本颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>boxShadow</td><td>阴影效果</td><td>string</td><td>支持所有CSS阴影格式</td><td>—</td></tr><tr><td>width</td><td>边框宽度</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td>—</td></tr><tr><td>height</td><td>边框高度</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td>—</td></tr><tr><td>paddingText</td><td>内容与边框间距</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td>—</td></tr><tr><td>tag</td><td>渲染标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>div</code></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> BorderProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderStyle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">solid</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dashed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dotted</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderWidth</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  topColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  bottomColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  leftColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  rightColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  rounded</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  circular</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  colorBackground</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  textColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  boxShadow</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  paddingText</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  tag</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,7))])}}});export{C as __pageData,f as default};

import{_ as e}from"./chunks/border.vue_vue_type_script_setup_true_lang.D_AxnSuW.js";import{I as o,o as n,c as p,ah as a,J as i,w as r,j as t,a as d}from"./chunks/framework.DmoDkOge.js";import"./chunks/useClassComputed.Wc7vThmZ.js";import"./chunks/useStyleComputed.CS9pThfp.js";const h={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},b={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}},u=JSON.parse('{"title":"Border","description":"","frontmatter":{},"headers":[],"relativePath":"plus/BasicBorder.md","filePath":"plus/BasicBorder.md"}'),g={name:"plus/BasicBorder.md"},f=Object.assign(g,{setup(B){return(y,s)=>{const l=o("ShowCode");return n(),p("div",null,[s[21]||(s[21]=a('<h1 id="border" tabindex="-1">Border <a class="header-anchor" href="#border" aria-label="Permalink to “Border”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Border 组件用于为元素添加边框样式，支持多种边框风格、颜色和方向。 可以使用<code>&lt;MYBorder&gt;&lt;/MYBorder&gt;</code>或者<code>&lt;MYBorder /&gt;</code>可以实现边框的配置。</p><h2 id="关于基本边框" tabindex="-1">关于基本边框 <a class="header-anchor" href="#关于基本边框" aria-label="Permalink to “关于基本边框”">​</a></h2><h3 id="borderstyle" tabindex="-1">borderStyle <a class="header-anchor" href="#borderstyle" aria-label="Permalink to “borderStyle”">​</a></h3><p>使用 <code>borderStyle</code> 定义边框的基本样式。<br> 默认为黑色，此处使用<code>borderColor</code>配了个清晰的颜色。</p>',6)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>边框为solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>边框为dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>边框为dotted</MYBorder>
</template>
  `.trim()},{demo:r(()=>[t("div",h,[i(e,{borderStyle:"solid",borderColor:"#2c2"},{default:r(()=>[...s[0]||(s[0]=[d("边框为solid",-1)])]),_:1}),i(e,{borderStyle:"dashed",borderColor:"#2c2"},{default:r(()=>[...s[1]||(s[1]=[d("边框为dashed",-1)])]),_:1}),i(e,{borderStyle:"dotted",borderColor:"#2c2"},{default:r(()=>[...s[2]||(s[2]=[d("边框为dotted",-1)])]),_:1})])]),_:1},8,["code"]),s[22]||(s[22]=t("h3",{id:"borderwidth",tabindex:"-1"},[d("borderWidth "),t("a",{class:"header-anchor",href:"#borderwidth","aria-label":"Permalink to “borderWidth”"},"​")],-1)),s[23]||(s[23]=t("p",null,[d("使用 "),t("code",null,"borderWidth"),d(" 定义边框的厚度，默认为 "),t("code",null,"1px"),d("。此处使用"),t("code",null,"borderColor"),d("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>厚度为2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>厚度为4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>厚度为6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>厚度为8vw</MYBorder>
</template>
  `.trim()},{demo:r(()=>[t("div",k,[i(e,{borderWidth:"2px",borderColor:"#2c2"},{default:r(()=>[...s[3]||(s[3]=[d("厚度为2px",-1)])]),_:1}),i(e,{borderWidth:"4vh",borderColor:"#2c2"},{default:r(()=>[...s[4]||(s[4]=[d("厚度为4vh",-1)])]),_:1}),i(e,{borderWidth:"6rem",borderColor:"#2c2"},{default:r(()=>[...s[5]||(s[5]=[d("厚度为6rem",-1)])]),_:1}),i(e,{borderWidth:"8vw",borderColor:"#2c2"},{default:r(()=>[...s[6]||(s[6]=[d("厚度为8vw",-1)])]),_:1})])]),_:1},8,["code"]),s[24]||(s[24]=t("h3",{id:"bordercolor",tabindex:"-1"},[d("borderColor "),t("a",{class:"header-anchor",href:"#bordercolor","aria-label":"Permalink to “borderColor”"},"​")],-1)),s[25]||(s[25]=t("p",null,[d("使用 "),t("code",null,"borderColor"),d(" 定义边框的颜色。默认值为黑色，此处使用"),t("code",null,"borderStyle"),d("配了"),t("code",null,'borderStyle="dashed"'),d("。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>蓝色边框</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>蓝色边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[t("div",b,[i(e,{borderColor:"#ff0000",borderStyle:"dashed"},{default:r(()=>[...s[7]||(s[7]=[d("红色边框",-1)])]),_:1}),i(e,{borderColor:"#409EFF",borderStyle:"dashed"},{default:r(()=>[...s[8]||(s[8]=[d("蓝色边框",-1)])]),_:1}),i(e,{borderColor:"red",borderStyle:"dashed"},{default:r(()=>[...s[9]||(s[9]=[d("红色边框",-1)])]),_:1}),i(e,{borderColor:"blue",borderStyle:"dashed"},{default:r(()=>[...s[10]||(s[10]=[d("蓝色边框",-1)])]),_:1})])]),_:1},8,["code"]),s[26]||(s[26]=t("h2",{id:"边框方向",tabindex:"-1"},[d("边框方向 "),t("a",{class:"header-anchor",href:"#边框方向","aria-label":"Permalink to “边框方向”"},"​")],-1)),s[27]||(s[27]=t("p",null,"可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[i(e,{topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow"},{default:r(()=>[...s[11]||(s[11]=[d(" 上下左右分别为红色和蓝色绿色黄色 ",-1)])]),_:1})]),_:1},8,["code"]),s[28]||(s[28]=t("h2",{id:"边框内容居中",tabindex:"-1"},[d("边框内容居中 "),t("a",{class:"header-anchor",href:"#边框内容居中","aria-label":"Permalink to “边框内容居中”"},"​")],-1)),s[29]||(s[29]=t("p",null,[d("使用 "),t("code",null,"center"),d(" 将边框中的内容居中。此处使用"),t("code",null,"borderColor"),d("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder center borderColor='#2c2'>居中的文字</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{center:"",borderColor:"#2c2"},{default:r(()=>[...s[12]||(s[12]=[d("居中的文字",-1)])]),_:1})]),_:1},8,["code"]),s[30]||(s[30]=t("h2",{id:"边框圆角",tabindex:"-1"},[d("边框圆角 "),t("a",{class:"header-anchor",href:"#边框圆角","aria-label":"Permalink to “边框圆角”"},"​")],-1)),s[31]||(s[31]=t("p",null,[d("使用 "),t("code",null,"round"),d(" 属性为边框添加圆角。此处使用"),t("code",null,"borderColor"),d("配了个清晰的颜色。为了效果更直观这里使用了"),t("code",null,"paddingText"),d("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder round borderColor='#2c2' paddingText='10px'>这是一个圆角边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{round:"",borderColor:"#2c2",paddingText:"10px"},{default:r(()=>[...s[13]||(s[13]=[d("这是一个圆角边框",-1)])]),_:1})]),_:1},8,["code"]),s[32]||(s[32]=t("h2",{id:"边框圆形",tabindex:"-1"},[d("边框圆形 "),t("a",{class:"header-anchor",href:"#边框圆形","aria-label":"Permalink to “边框圆形”"},"​")],-1)),s[33]||(s[33]=t("p",null,[d("使用 "),t("code",null,"circle"),d(" 属性将边框变为圆形。此处使用"),t("code",null,"borderColor"),d("配了个清晰的颜色。为了效果更直观这里使用了"),t("code",null,"paddingText"),d("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder circle borderColor='#2c2' paddingText='10px'>这是一个圆形边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{circle:"",borderColor:"#2c2",paddingText:"10px"},{default:r(()=>[...s[14]||(s[14]=[d("这是一个圆形边框",-1)])]),_:1})]),_:1},8,["code"]),s[34]||(s[34]=t("h2",{id:"边框内部背景颜色",tabindex:"-1"},[d("边框内部背景颜色 "),t("a",{class:"header-anchor",href:"#边框内部背景颜色","aria-label":"Permalink to “边框内部背景颜色”"},"​")],-1)),s[35]||(s[35]=t("p",null,[d("使用 "),t("code",null,"colorBg"),d(" 设置边框内部的背景色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder colorBg='#2c2'>这是一个带有背景色的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{colorBg:"#2c2"},{default:r(()=>[...s[15]||(s[15]=[d("这是一个带有背景色的边框",-1)])]),_:1})]),_:1},8,["code"]),s[36]||(s[36]=t("h2",{id:"边框内部文本颜色",tabindex:"-1"},[d("边框内部文本颜色 "),t("a",{class:"header-anchor",href:"#边框内部文本颜色","aria-label":"Permalink to “边框内部文本颜色”"},"​")],-1)),s[37]||(s[37]=t("p",null,[d("使用 "),t("code",null,"textColor"),d(" 设置边框内文本的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder textColor='red'>这是一个红色文本的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{textColor:"red"},{default:r(()=>[...s[16]||(s[16]=[d("这是一个红色文本的边框",-1)])]),_:1})]),_:1},8,["code"]),s[38]||(s[38]=t("h2",{id:"阴影",tabindex:"-1"},[d("阴影 "),t("a",{class:"header-anchor",href:"#阴影","aria-label":"Permalink to “阴影”"},"​")],-1)),s[39]||(s[39]=t("p",null,[d("使用 "),t("code",null,"boxShadow"),d(" 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>这是一个带有阴影的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{boxShadow:"10px 2px 8px red"},{default:r(()=>[...s[17]||(s[17]=[d("这是一个带有阴影的边框",-1)])]),_:1})]),_:1},8,["code"]),s[40]||(s[40]=t("h2",{id:"自定义宽高",tabindex:"-1"},[d("自定义宽高 "),t("a",{class:"header-anchor",href:"#自定义宽高","aria-label":"Permalink to “自定义宽高”"},"​")],-1)),s[41]||(s[41]=t("p",null,[d("使用"),t("code",null,"width"),d("和"),t("code",null,"height"),d("属性进行宽高的设置。为了效果更直观这里使用了"),t("code",null,"paddingText"),d("和"),t("code",null,"borderColor"),d("移动了文本的位置和设置颜色。这个宽和高也可以单独使用。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[i(e,{width:"300px",height:"100px",borderColor:"#2c2",paddingText:"20px"},{default:r(()=>[...s[18]||(s[18]=[d(" 高100px宽300px ",-1)])]),_:1})]),_:1},8,["code"]),s[42]||(s[42]=t("h2",{id:"边框内容与边框之间距离",tabindex:"-1"},[d("边框内容与边框之间距离 "),t("a",{class:"header-anchor",href:"#边框内容与边框之间距离","aria-label":"Permalink to “边框内容与边框之间距离”"},"​")],-1)),s[43]||(s[43]=t("p",null,[d("使用"),t("code",null,"paddingText"),d("设置边框内容与边框之间的距离，其效果相当于原生css的"),t("code",null,"padding"),d("属性。也与css原生的padding使用方法是一致的。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[i(e,{width:"300px",height:"100px",paddingText:"100px",borderColor:"#2c2"},{default:r(()=>[...s[19]||(s[19]=[d(" paddingText为100px ",-1)])]),_:1})]),_:1},8,["code"]),s[44]||(s[44]=t("p",null,"最后，下面为多种进行组合使用：",-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder 
    round
    topColor='red'
    bottomColor='blue'
    leftColor='green'
    rightColor='yellow'
    width='300px'
    height='100px'
    textColor='#ff00ff'
    paddingText='100px'
    colorBg='#2c2'
    boxShadow='10px 2px 8px red'
  >
    组合使用
  </MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{round:"",topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow",width:"300px",height:"100px",textColor:"#ff00ff",paddingText:"100px",colorBg:"#2c2",boxShadow:"10px 2px 8px red"},{default:r(()=>[...s[20]||(s[20]=[d(" 组合使用 ",-1)])]),_:1})]),_:1},8,["code"]),s[45]||(s[45]=a(`<p><strong>注意: </strong><br></p><blockquote><p>· 如果使用了边框方向设置了颜色,那么<code>borderStyle</code>和<code>borderWidth</code>会被覆盖，使borderStyle不再生效。 <br> · <code>borderColor</code>和边框方向的颜色值同时设置了，那么边框方向会覆盖<code>borderColor</code>设置的颜色。所以它们指南同时使用一种样式。 <br> · 如果设置了<code>cricle</code>，<code>round</code>将不会生效，<code>cricle</code>和<code>round</code>只能同时使用一种样式。 <br></p></blockquote><h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>borderStyle</td><td>边框样式</td><td>string</td><td><code>solid</code>/<code>dashed</code>/<code>dotted</code>/<code>double</code></td><td><code>solid</code></td></tr><tr><td>borderWidth</td><td>边框厚度</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td><code>1px</code></td></tr><tr><td>borderColor</td><td>边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>topColor</td><td>上边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>bottomColor</td><td>下边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>leftColor</td><td>左边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>rightColor</td><td>右边框颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>round</td><td>是否为圆角</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>circle</td><td>是否为圆形</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>colorBg</td><td>背景色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>textColor</td><td>文本颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>boxShadow</td><td>阴影效果</td><td>string</td><td>支持所有CSS阴影格式</td><td>—</td></tr><tr><td>width</td><td>边框宽度</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td>—</td></tr><tr><td>height</td><td>边框高度</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td>—</td></tr><tr><td>paddingText</td><td>内容与边框间距</td><td>string</td><td><code>px</code>/<code>rem</code>/<code>vh</code>/<code>vw</code></td><td>—</td></tr><tr><td>tag</td><td>渲染标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>div</code></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> BorderProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderStyle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">solid</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dashed</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dotted</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">double</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderWidth</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  topColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  bottomColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  leftColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  rightColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  round</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  circle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  colorBg</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  textColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  boxShadow</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  paddingText</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  tag</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,7))])}}});export{u as __pageData,f as default};

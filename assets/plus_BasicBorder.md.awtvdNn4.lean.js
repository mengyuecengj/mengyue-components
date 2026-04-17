import{_ as r}from"./chunks/border.vue_vue_type_script_setup_true_lang.wGeNBiT-.js";import{I as o,o as n,c as p,a8 as a,J as i,w as e,j as s,a as t}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const h={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},b={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}},u=JSON.parse('{"title":"Border","description":"","frontmatter":{},"headers":[],"relativePath":"plus/BasicBorder.md","filePath":"plus/BasicBorder.md"}'),g={name:"plus/BasicBorder.md"},f=Object.assign(g,{setup(B){return(y,d)=>{const l=o("ShowCode");return n(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[d[21]||(d[21]=a("",6)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>边框为solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>边框为dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>边框为dotted</MYBorder>
</template>
  `.trim()},{demo:e(()=>[s("div",h,[i(r,{borderStyle:"solid",borderColor:"#2c2"},{default:e(()=>[...d[0]||(d[0]=[t("边框为solid",-1)])]),_:1}),i(r,{borderStyle:"dashed",borderColor:"#2c2"},{default:e(()=>[...d[1]||(d[1]=[t("边框为dashed",-1)])]),_:1}),i(r,{borderStyle:"dotted",borderColor:"#2c2"},{default:e(()=>[...d[2]||(d[2]=[t("边框为dotted",-1)])]),_:1})])]),_:1},8,["code"]),d[22]||(d[22]=s("h3",{id:"borderwidth",tabindex:"-1"},[t("borderWidth "),s("a",{class:"header-anchor",href:"#borderwidth","aria-label":"Permalink to “borderWidth”"},"​")],-1)),d[23]||(d[23]=s("p",null,[t("使用 "),s("code",null,"borderWidth"),t(" 定义边框的厚度，默认为 "),s("code",null,"1px"),t("。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>厚度为2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>厚度为4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>厚度为6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>厚度为8vw</MYBorder>
</template>
  `.trim()},{demo:e(()=>[s("div",k,[i(r,{borderWidth:"2px",borderColor:"#2c2"},{default:e(()=>[...d[3]||(d[3]=[t("厚度为2px",-1)])]),_:1}),i(r,{borderWidth:"4vh",borderColor:"#2c2"},{default:e(()=>[...d[4]||(d[4]=[t("厚度为4vh",-1)])]),_:1}),i(r,{borderWidth:"6rem",borderColor:"#2c2"},{default:e(()=>[...d[5]||(d[5]=[t("厚度为6rem",-1)])]),_:1}),i(r,{borderWidth:"8vw",borderColor:"#2c2"},{default:e(()=>[...d[6]||(d[6]=[t("厚度为8vw",-1)])]),_:1})])]),_:1},8,["code"]),d[24]||(d[24]=s("h3",{id:"bordercolor",tabindex:"-1"},[t("borderColor "),s("a",{class:"header-anchor",href:"#bordercolor","aria-label":"Permalink to “borderColor”"},"​")],-1)),d[25]||(d[25]=s("p",null,[t("使用 "),s("code",null,"borderColor"),t(" 定义边框的颜色。默认值为黑色，此处使用"),s("code",null,"borderStyle"),t("配了"),s("code",null,'borderStyle="dashed"'),t("。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>蓝色边框</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>蓝色边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[s("div",b,[i(r,{borderColor:"#ff0000",borderStyle:"dashed"},{default:e(()=>[...d[7]||(d[7]=[t("红色边框",-1)])]),_:1}),i(r,{borderColor:"#409EFF",borderStyle:"dashed"},{default:e(()=>[...d[8]||(d[8]=[t("蓝色边框",-1)])]),_:1}),i(r,{borderColor:"red",borderStyle:"dashed"},{default:e(()=>[...d[9]||(d[9]=[t("红色边框",-1)])]),_:1}),i(r,{borderColor:"blue",borderStyle:"dashed"},{default:e(()=>[...d[10]||(d[10]=[t("蓝色边框",-1)])]),_:1})])]),_:1},8,["code"]),d[26]||(d[26]=s("h2",{id:"边框方向",tabindex:"-1"},[t("边框方向 "),s("a",{class:"header-anchor",href:"#边框方向","aria-label":"Permalink to “边框方向”"},"​")],-1)),d[27]||(d[27]=s("p",null,"可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow"},{default:e(()=>[...d[11]||(d[11]=[t(" 上下左右分别为红色和蓝色绿色黄色 ",-1)])]),_:1})]),_:1},8,["code"]),d[28]||(d[28]=s("h2",{id:"边框内容居中",tabindex:"-1"},[t("边框内容居中 "),s("a",{class:"header-anchor",href:"#边框内容居中","aria-label":"Permalink to “边框内容居中”"},"​")],-1)),d[29]||(d[29]=s("p",null,[t("使用 "),s("code",null,"center"),t(" 将边框中的内容居中。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder center borderColor='#2c2'>居中的文字</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{center:"",borderColor:"#2c2"},{default:e(()=>[...d[12]||(d[12]=[t("居中的文字",-1)])]),_:1})]),_:1},8,["code"]),d[30]||(d[30]=s("h2",{id:"边框圆角",tabindex:"-1"},[t("边框圆角 "),s("a",{class:"header-anchor",href:"#边框圆角","aria-label":"Permalink to “边框圆角”"},"​")],-1)),d[31]||(d[31]=s("p",null,[t("使用 "),s("code",null,"round"),t(" 属性为边框添加圆角。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。为了效果更直观这里使用了"),s("code",null,"paddingText"),t("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder round borderColor='#2c2' paddingText='10px'>这是一个圆角边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{round:"",borderColor:"#2c2",paddingText:"10px"},{default:e(()=>[...d[13]||(d[13]=[t("这是一个圆角边框",-1)])]),_:1})]),_:1},8,["code"]),d[32]||(d[32]=s("h2",{id:"边框圆形",tabindex:"-1"},[t("边框圆形 "),s("a",{class:"header-anchor",href:"#边框圆形","aria-label":"Permalink to “边框圆形”"},"​")],-1)),d[33]||(d[33]=s("p",null,[t("使用 "),s("code",null,"circle"),t(" 属性将边框变为圆形。此处使用"),s("code",null,"borderColor"),t("配了个清晰的颜色。为了效果更直观这里使用了"),s("code",null,"paddingText"),t("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder circle borderColor='#2c2' paddingText='10px'>这是一个圆形边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{circle:"",borderColor:"#2c2",paddingText:"10px"},{default:e(()=>[...d[14]||(d[14]=[t("这是一个圆形边框",-1)])]),_:1})]),_:1},8,["code"]),d[34]||(d[34]=s("h2",{id:"边框内部背景颜色",tabindex:"-1"},[t("边框内部背景颜色 "),s("a",{class:"header-anchor",href:"#边框内部背景颜色","aria-label":"Permalink to “边框内部背景颜色”"},"​")],-1)),d[35]||(d[35]=s("p",null,[t("使用 "),s("code",null,"colorBg"),t(" 设置边框内部的背景色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder colorBg='#2c2'>这是一个带有背景色的边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{colorBg:"#2c2"},{default:e(()=>[...d[15]||(d[15]=[t("这是一个带有背景色的边框",-1)])]),_:1})]),_:1},8,["code"]),d[36]||(d[36]=s("h2",{id:"边框内部文本颜色",tabindex:"-1"},[t("边框内部文本颜色 "),s("a",{class:"header-anchor",href:"#边框内部文本颜色","aria-label":"Permalink to “边框内部文本颜色”"},"​")],-1)),d[37]||(d[37]=s("p",null,[t("使用 "),s("code",null,"textColor"),t(" 设置边框内文本的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder textColor='red'>这是一个红色文本的边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{textColor:"red"},{default:e(()=>[...d[16]||(d[16]=[t("这是一个红色文本的边框",-1)])]),_:1})]),_:1},8,["code"]),d[38]||(d[38]=s("h2",{id:"阴影",tabindex:"-1"},[t("阴影 "),s("a",{class:"header-anchor",href:"#阴影","aria-label":"Permalink to “阴影”"},"​")],-1)),d[39]||(d[39]=s("p",null,[t("使用 "),s("code",null,"boxShadow"),t(" 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>这是一个带有阴影的边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{boxShadow:"10px 2px 8px red"},{default:e(()=>[...d[17]||(d[17]=[t("这是一个带有阴影的边框",-1)])]),_:1})]),_:1},8,["code"]),d[40]||(d[40]=s("h2",{id:"自定义宽高",tabindex:"-1"},[t("自定义宽高 "),s("a",{class:"header-anchor",href:"#自定义宽高","aria-label":"Permalink to “自定义宽高”"},"​")],-1)),d[41]||(d[41]=s("p",null,[t("使用"),s("code",null,"width"),t("和"),s("code",null,"height"),t("属性进行宽高的设置。为了效果更直观这里使用了"),s("code",null,"paddingText"),t("和"),s("code",null,"borderColor"),t("移动了文本的位置和设置颜色。这个宽和高也可以单独使用。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{width:"300px",height:"100px",borderColor:"#2c2",paddingText:"20px"},{default:e(()=>[...d[18]||(d[18]=[t(" 高100px宽300px ",-1)])]),_:1})]),_:1},8,["code"]),d[42]||(d[42]=s("h2",{id:"边框内容与边框之间距离",tabindex:"-1"},[t("边框内容与边框之间距离 "),s("a",{class:"header-anchor",href:"#边框内容与边框之间距离","aria-label":"Permalink to “边框内容与边框之间距离”"},"​")],-1)),d[43]||(d[43]=s("p",null,[t("使用"),s("code",null,"paddingText"),t("设置边框内容与边框之间的距离，其效果相当于原生css的"),s("code",null,"padding"),t("属性。也与css原生的padding使用方法是一致的。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{width:"300px",height:"100px",paddingText:"100px",borderColor:"#2c2"},{default:e(()=>[...d[19]||(d[19]=[t(" paddingText为100px ",-1)])]),_:1})]),_:1},8,["code"]),d[44]||(d[44]=s("p",null,"最后，下面为多种进行组合使用：",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{round:"",topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow",width:"300px",height:"100px",textColor:"#ff00ff",paddingText:"100px",colorBg:"#2c2",boxShadow:"10px 2px 8px red"},{default:e(()=>[...d[20]||(d[20]=[t(" 组合使用 ",-1)])]),_:1})]),_:1},8,["code"]),d[45]||(d[45]=a("",7))])}}});export{u as __pageData,f as default};

import{_ as r}from"./chunks/border.vue_vue_type_script_setup_true_lang.BEisB-7S.js";import{I as o,c as n,o as p,ah as a,J as i,j as d,w as e,a as t}from"./chunks/framework.BWIYv-lY.js";import"./chunks/useClassComputed.D3OyU7_1.js";import"./chunks/useStyleComputed.DYexXzp7.js";const h={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},b={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}},u=JSON.parse('{"title":"Border","description":"","frontmatter":{},"headers":[],"relativePath":"components/BasicBorder.md","filePath":"components/BasicBorder.md"}'),g={name:"components/BasicBorder.md"},f=Object.assign(g,{setup(B){return(y,s)=>{const l=o("ShowCode");return p(),n("div",null,[s[21]||(s[21]=a("",6)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>边框为solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>边框为dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>边框为dotted</MYBorder>
</template>
  `.trim()},{demo:e(()=>[d("div",h,[i(r,{borderStyle:"solid",borderColor:"#2c2"},{default:e(()=>[...s[0]||(s[0]=[t("边框为solid",-1)])]),_:1}),i(r,{borderStyle:"dashed",borderColor:"#2c2"},{default:e(()=>[...s[1]||(s[1]=[t("边框为dashed",-1)])]),_:1}),i(r,{borderStyle:"dotted",borderColor:"#2c2"},{default:e(()=>[...s[2]||(s[2]=[t("边框为dotted",-1)])]),_:1})])]),_:1},8,["code"]),s[22]||(s[22]=d("h3",{id:"borderwidth",tabindex:"-1"},[t("borderWidth "),d("a",{class:"header-anchor",href:"#borderwidth","aria-label":"Permalink to “borderWidth”"},"​")],-1)),s[23]||(s[23]=d("p",null,[t("使用 "),d("code",null,"borderWidth"),t(" 定义边框的厚度，默认为 "),d("code",null,"1px"),t("。此处使用"),d("code",null,"borderColor"),t("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>厚度为2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>厚度为4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>厚度为6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>厚度为8vw</MYBorder>
</template>
  `.trim()},{demo:e(()=>[d("div",k,[i(r,{borderWidth:"2px",borderColor:"#2c2"},{default:e(()=>[...s[3]||(s[3]=[t("厚度为2px",-1)])]),_:1}),i(r,{borderWidth:"4vh",borderColor:"#2c2"},{default:e(()=>[...s[4]||(s[4]=[t("厚度为4vh",-1)])]),_:1}),i(r,{borderWidth:"6rem",borderColor:"#2c2"},{default:e(()=>[...s[5]||(s[5]=[t("厚度为6rem",-1)])]),_:1}),i(r,{borderWidth:"8vw",borderColor:"#2c2"},{default:e(()=>[...s[6]||(s[6]=[t("厚度为8vw",-1)])]),_:1})])]),_:1},8,["code"]),s[24]||(s[24]=d("h3",{id:"bordercolor",tabindex:"-1"},[t("borderColor "),d("a",{class:"header-anchor",href:"#bordercolor","aria-label":"Permalink to “borderColor”"},"​")],-1)),s[25]||(s[25]=d("p",null,[t("使用 "),d("code",null,"borderColor"),t(" 定义边框的颜色。默认值为黑色，此处使用"),d("code",null,"borderStyle"),t("配了"),d("code",null,'borderStyle="dashed"'),t("。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>蓝色边框</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>蓝色边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[d("div",b,[i(r,{borderColor:"#ff0000",borderStyle:"dashed"},{default:e(()=>[...s[7]||(s[7]=[t("红色边框",-1)])]),_:1}),i(r,{borderColor:"#409EFF",borderStyle:"dashed"},{default:e(()=>[...s[8]||(s[8]=[t("蓝色边框",-1)])]),_:1}),i(r,{borderColor:"red",borderStyle:"dashed"},{default:e(()=>[...s[9]||(s[9]=[t("红色边框",-1)])]),_:1}),i(r,{borderColor:"blue",borderStyle:"dashed"},{default:e(()=>[...s[10]||(s[10]=[t("蓝色边框",-1)])]),_:1})])]),_:1},8,["code"]),s[26]||(s[26]=d("h2",{id:"边框方向",tabindex:"-1"},[t("边框方向 "),d("a",{class:"header-anchor",href:"#边框方向","aria-label":"Permalink to “边框方向”"},"​")],-1)),s[27]||(s[27]=d("p",null,"可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow"},{default:e(()=>[...s[11]||(s[11]=[t(" 上下左右分别为红色和蓝色绿色黄色 ",-1)])]),_:1})]),_:1},8,["code"]),s[28]||(s[28]=d("h2",{id:"边框内容居中",tabindex:"-1"},[t("边框内容居中 "),d("a",{class:"header-anchor",href:"#边框内容居中","aria-label":"Permalink to “边框内容居中”"},"​")],-1)),s[29]||(s[29]=d("p",null,[t("使用 "),d("code",null,"center"),t(" 将边框中的内容居中。此处使用"),d("code",null,"borderColor"),t("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder center borderColor='#2c2'>居中的文字</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{center:"",borderColor:"#2c2"},{default:e(()=>[...s[12]||(s[12]=[t("居中的文字",-1)])]),_:1})]),_:1},8,["code"]),s[30]||(s[30]=d("h2",{id:"边框圆角",tabindex:"-1"},[t("边框圆角 "),d("a",{class:"header-anchor",href:"#边框圆角","aria-label":"Permalink to “边框圆角”"},"​")],-1)),s[31]||(s[31]=d("p",null,[t("使用 "),d("code",null,"round"),t(" 属性为边框添加圆角。此处使用"),d("code",null,"borderColor"),t("配了个清晰的颜色。为了效果更直观这里使用了"),d("code",null,"paddingText"),t("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder round borderColor='#2c2' paddingText='10px'>这是一个圆角边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{round:"",borderColor:"#2c2",paddingText:"10px"},{default:e(()=>[...s[13]||(s[13]=[t("这是一个圆角边框",-1)])]),_:1})]),_:1},8,["code"]),s[32]||(s[32]=d("h2",{id:"边框圆形",tabindex:"-1"},[t("边框圆形 "),d("a",{class:"header-anchor",href:"#边框圆形","aria-label":"Permalink to “边框圆形”"},"​")],-1)),s[33]||(s[33]=d("p",null,[t("使用 "),d("code",null,"circle"),t(" 属性将边框变为圆形。此处使用"),d("code",null,"borderColor"),t("配了个清晰的颜色。为了效果更直观这里使用了"),d("code",null,"paddingText"),t("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder circle borderColor='#2c2' paddingText='10px'>这是一个圆形边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{circle:"",borderColor:"#2c2",paddingText:"10px"},{default:e(()=>[...s[14]||(s[14]=[t("这是一个圆形边框",-1)])]),_:1})]),_:1},8,["code"]),s[34]||(s[34]=d("h2",{id:"边框内部背景颜色",tabindex:"-1"},[t("边框内部背景颜色 "),d("a",{class:"header-anchor",href:"#边框内部背景颜色","aria-label":"Permalink to “边框内部背景颜色”"},"​")],-1)),s[35]||(s[35]=d("p",null,[t("使用 "),d("code",null,"colorBg"),t(" 设置边框内部的背景色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder colorBg='#2c2'>这是一个带有背景色的边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{colorBg:"#2c2"},{default:e(()=>[...s[15]||(s[15]=[t("这是一个带有背景色的边框",-1)])]),_:1})]),_:1},8,["code"]),s[36]||(s[36]=d("h2",{id:"边框内部文本颜色",tabindex:"-1"},[t("边框内部文本颜色 "),d("a",{class:"header-anchor",href:"#边框内部文本颜色","aria-label":"Permalink to “边框内部文本颜色”"},"​")],-1)),s[37]||(s[37]=d("p",null,[t("使用 "),d("code",null,"textColor"),t(" 设置边框内文本的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder textColor='red'>这是一个红色文本的边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{textColor:"red"},{default:e(()=>[...s[16]||(s[16]=[t("这是一个红色文本的边框",-1)])]),_:1})]),_:1},8,["code"]),s[38]||(s[38]=d("h2",{id:"阴影",tabindex:"-1"},[t("阴影 "),d("a",{class:"header-anchor",href:"#阴影","aria-label":"Permalink to “阴影”"},"​")],-1)),s[39]||(s[39]=d("p",null,[t("使用 "),d("code",null,"boxShadow"),t(" 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>这是一个带有阴影的边框</MYBorder>
</template>
  `.trim()},{demo:e(()=>[i(r,{boxShadow:"10px 2px 8px red"},{default:e(()=>[...s[17]||(s[17]=[t("这是一个带有阴影的边框",-1)])]),_:1})]),_:1},8,["code"]),s[40]||(s[40]=d("h2",{id:"自定义宽高",tabindex:"-1"},[t("自定义宽高 "),d("a",{class:"header-anchor",href:"#自定义宽高","aria-label":"Permalink to “自定义宽高”"},"​")],-1)),s[41]||(s[41]=d("p",null,[t("使用"),d("code",null,"width"),t("和"),d("code",null,"height"),t("属性进行宽高的设置。为了效果更直观这里使用了"),d("code",null,"paddingText"),t("和"),d("code",null,"borderColor"),t("移动了文本的位置和设置颜色。这个宽和高也可以单独使用。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{width:"300px",height:"100px",borderColor:"#2c2",paddingText:"20px"},{default:e(()=>[...s[18]||(s[18]=[t(" 高100px宽300px ",-1)])]),_:1})]),_:1},8,["code"]),s[42]||(s[42]=d("h2",{id:"边框内容与边框之间距离",tabindex:"-1"},[t("边框内容与边框之间距离 "),d("a",{class:"header-anchor",href:"#边框内容与边框之间距离","aria-label":"Permalink to “边框内容与边框之间距离”"},"​")],-1)),s[43]||(s[43]=d("p",null,[t("使用"),d("code",null,"paddingText"),t("设置边框内容与边框之间的距离，其效果相当于原生css的"),d("code",null,"padding"),t("属性。也与css原生的padding使用方法是一致的。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{width:"300px",height:"100px",paddingText:"100px",borderColor:"#2c2"},{default:e(()=>[...s[19]||(s[19]=[t(" paddingText为100px ",-1)])]),_:1})]),_:1},8,["code"]),s[44]||(s[44]=d("p",null,"最后，下面为多种进行组合使用：",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(r,{round:"",topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow",width:"300px",height:"100px",textColor:"#ff00ff",paddingText:"100px",colorBg:"#2c2",boxShadow:"10px 2px 8px red"},{default:e(()=>[...s[20]||(s[20]=[t(" 组合使用 ",-1)])]),_:1})]),_:1},8,["code"]),s[45]||(s[45]=a("",7))])}}});export{u as __pageData,f as default};

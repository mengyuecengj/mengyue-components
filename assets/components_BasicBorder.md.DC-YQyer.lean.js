import{_ as e}from"./chunks/border.vue_vue_type_script_setup_true_lang.D_AxnSuW.js";import{I as o,o as n,c as p,ah as a,J as i,w as r,j as t,a as s}from"./chunks/framework.DmoDkOge.js";import"./chunks/useClassComputed.Wc7vThmZ.js";import"./chunks/useStyleComputed.CS9pThfp.js";const h={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},b={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}},C=JSON.parse('{"title":"Border","description":"","frontmatter":{},"headers":[],"relativePath":"components/BasicBorder.md","filePath":"components/BasicBorder.md"}'),g={name:"components/BasicBorder.md"},f=Object.assign(g,{setup(B){return(y,d)=>{const l=o("ShowCode");return n(),p("div",null,[d[21]||(d[21]=a("",6)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>边框为solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>边框为dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>边框为dotted</MYBorder>
</template>
  `.trim()},{demo:r(()=>[t("div",h,[i(e,{borderStyle:"solid",borderColor:"#2c2"},{default:r(()=>[...d[0]||(d[0]=[s("边框为solid",-1)])]),_:1}),i(e,{borderStyle:"dashed",borderColor:"#2c2"},{default:r(()=>[...d[1]||(d[1]=[s("边框为dashed",-1)])]),_:1}),i(e,{borderStyle:"dotted",borderColor:"#2c2"},{default:r(()=>[...d[2]||(d[2]=[s("边框为dotted",-1)])]),_:1})])]),_:1},8,["code"]),d[22]||(d[22]=t("h3",{id:"borderwidth",tabindex:"-1"},[s("borderWidth "),t("a",{class:"header-anchor",href:"#borderwidth","aria-label":"Permalink to “borderWidth”"},"​")],-1)),d[23]||(d[23]=t("p",null,[s("使用 "),t("code",null,"borderWidth"),s(" 定义边框的厚度，默认为 "),t("code",null,"1px"),s("。此处使用"),t("code",null,"borderColor"),s("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>厚度为2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>厚度为4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>厚度为6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>厚度为8vw</MYBorder>
</template>
  `.trim()},{demo:r(()=>[t("div",k,[i(e,{borderWidth:"2px",borderColor:"#2c2"},{default:r(()=>[...d[3]||(d[3]=[s("厚度为2px",-1)])]),_:1}),i(e,{borderWidth:"4vh",borderColor:"#2c2"},{default:r(()=>[...d[4]||(d[4]=[s("厚度为4vh",-1)])]),_:1}),i(e,{borderWidth:"6rem",borderColor:"#2c2"},{default:r(()=>[...d[5]||(d[5]=[s("厚度为6rem",-1)])]),_:1}),i(e,{borderWidth:"8vw",borderColor:"#2c2"},{default:r(()=>[...d[6]||(d[6]=[s("厚度为8vw",-1)])]),_:1})])]),_:1},8,["code"]),d[24]||(d[24]=t("h3",{id:"bordercolor",tabindex:"-1"},[s("borderColor "),t("a",{class:"header-anchor",href:"#bordercolor","aria-label":"Permalink to “borderColor”"},"​")],-1)),d[25]||(d[25]=t("p",null,[s("使用 "),t("code",null,"borderColor"),s(" 定义边框的颜色。默认值为黑色，此处使用"),t("code",null,"borderStyle"),s("配了"),t("code",null,'borderStyle="dashed"'),s("。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>蓝色边框</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>蓝色边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[t("div",b,[i(e,{borderColor:"#ff0000",borderStyle:"dashed"},{default:r(()=>[...d[7]||(d[7]=[s("红色边框",-1)])]),_:1}),i(e,{borderColor:"#409EFF",borderStyle:"dashed"},{default:r(()=>[...d[8]||(d[8]=[s("蓝色边框",-1)])]),_:1}),i(e,{borderColor:"red",borderStyle:"dashed"},{default:r(()=>[...d[9]||(d[9]=[s("红色边框",-1)])]),_:1}),i(e,{borderColor:"blue",borderStyle:"dashed"},{default:r(()=>[...d[10]||(d[10]=[s("蓝色边框",-1)])]),_:1})])]),_:1},8,["code"]),d[26]||(d[26]=t("h2",{id:"边框方向",tabindex:"-1"},[s("边框方向 "),t("a",{class:"header-anchor",href:"#边框方向","aria-label":"Permalink to “边框方向”"},"​")],-1)),d[27]||(d[27]=t("p",null,"可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[i(e,{topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow"},{default:r(()=>[...d[11]||(d[11]=[s(" 上下左右分别为红色和蓝色绿色黄色 ",-1)])]),_:1})]),_:1},8,["code"]),d[28]||(d[28]=t("h2",{id:"边框内容居中",tabindex:"-1"},[s("边框内容居中 "),t("a",{class:"header-anchor",href:"#边框内容居中","aria-label":"Permalink to “边框内容居中”"},"​")],-1)),d[29]||(d[29]=t("p",null,[s("使用 "),t("code",null,"center"),s(" 将边框中的内容居中。此处使用"),t("code",null,"borderColor"),s("配了个清晰的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder center borderColor='#2c2'>居中的文字</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{center:"",borderColor:"#2c2"},{default:r(()=>[...d[12]||(d[12]=[s("居中的文字",-1)])]),_:1})]),_:1},8,["code"]),d[30]||(d[30]=t("h2",{id:"边框圆角",tabindex:"-1"},[s("边框圆角 "),t("a",{class:"header-anchor",href:"#边框圆角","aria-label":"Permalink to “边框圆角”"},"​")],-1)),d[31]||(d[31]=t("p",null,[s("使用 "),t("code",null,"rounded"),s(" 属性为边框添加圆角。此处使用"),t("code",null,"borderColor"),s("配了个清晰的颜色。为了效果更直观这里使用了"),t("code",null,"paddingText"),s("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder rounded borderColor='#2c2' paddingText='10px'>这是一个圆角边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{rounded:"",borderColor:"#2c2",paddingText:"10px"},{default:r(()=>[...d[13]||(d[13]=[s("这是一个圆角边框",-1)])]),_:1})]),_:1},8,["code"]),d[32]||(d[32]=t("h2",{id:"边框圆形",tabindex:"-1"},[s("边框圆形 "),t("a",{class:"header-anchor",href:"#边框圆形","aria-label":"Permalink to “边框圆形”"},"​")],-1)),d[33]||(d[33]=t("p",null,[s("使用 "),t("code",null,"circular"),s(" 属性将边框变为圆形。此处使用"),t("code",null,"borderColor"),s("配了个清晰的颜色。为了效果更直观这里使用了"),t("code",null,"paddingText"),s("移动了文本的位置。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder circular borderColor='#2c2' paddingText='10px'>这是一个圆形边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{circular:"",borderColor:"#2c2",paddingText:"10px"},{default:r(()=>[...d[14]||(d[14]=[s("这是一个圆形边框",-1)])]),_:1})]),_:1},8,["code"]),d[34]||(d[34]=t("h2",{id:"边框内部背景颜色",tabindex:"-1"},[s("边框内部背景颜色 "),t("a",{class:"header-anchor",href:"#边框内部背景颜色","aria-label":"Permalink to “边框内部背景颜色”"},"​")],-1)),d[35]||(d[35]=t("p",null,[s("使用 "),t("code",null,"colorBackground"),s(" 设置边框内部的背景色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder colorBackground='#2c2'>这是一个带有背景色的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{colorBackground:"#2c2"},{default:r(()=>[...d[15]||(d[15]=[s("这是一个带有背景色的边框",-1)])]),_:1})]),_:1},8,["code"]),d[36]||(d[36]=t("h2",{id:"边框内部文本颜色",tabindex:"-1"},[s("边框内部文本颜色 "),t("a",{class:"header-anchor",href:"#边框内部文本颜色","aria-label":"Permalink to “边框内部文本颜色”"},"​")],-1)),d[37]||(d[37]=t("p",null,[s("使用 "),t("code",null,"textColor"),s(" 设置边框内文本的颜色。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder textColor='red'>这是一个红色文本的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{textColor:"red"},{default:r(()=>[...d[16]||(d[16]=[s("这是一个红色文本的边框",-1)])]),_:1})]),_:1},8,["code"]),d[38]||(d[38]=t("h2",{id:"阴影",tabindex:"-1"},[s("阴影 "),t("a",{class:"header-anchor",href:"#阴影","aria-label":"Permalink to “阴影”"},"​")],-1)),d[39]||(d[39]=t("p",null,[s("使用 "),t("code",null,"boxShadow"),s(" 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。")],-1)),i(l,{title:"代码演示",code:`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>这是一个带有阴影的边框</MYBorder>
</template>
  `.trim()},{demo:r(()=>[i(e,{boxShadow:"10px 2px 8px red"},{default:r(()=>[...d[17]||(d[17]=[s("这是一个带有阴影的边框",-1)])]),_:1})]),_:1},8,["code"]),d[40]||(d[40]=t("h2",{id:"自定义宽高",tabindex:"-1"},[s("自定义宽高 "),t("a",{class:"header-anchor",href:"#自定义宽高","aria-label":"Permalink to “自定义宽高”"},"​")],-1)),d[41]||(d[41]=t("p",null,[s("使用"),t("code",null,"width"),s("和"),t("code",null,"height"),s("属性进行宽高的设置。为了效果更直观这里使用了"),t("code",null,"paddingText"),s("和"),t("code",null,"borderColor"),s("移动了文本的位置和设置颜色。这个宽和高也可以单独使用。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[i(e,{width:"300px",height:"100px",borderColor:"#2c2",paddingText:"20px"},{default:r(()=>[...d[18]||(d[18]=[s(" 高100px宽300px ",-1)])]),_:1})]),_:1},8,["code"]),d[42]||(d[42]=t("h2",{id:"边框内容与边框之间距离",tabindex:"-1"},[s("边框内容与边框之间距离 "),t("a",{class:"header-anchor",href:"#边框内容与边框之间距离","aria-label":"Permalink to “边框内容与边框之间距离”"},"​")],-1)),d[43]||(d[43]=t("p",null,[s("使用"),t("code",null,"paddingText"),s("设置边框内容与边框之间的距离，其效果相当于原生css的"),t("code",null,"padding"),s("属性。也与css原生的padding使用方法是一致的。")],-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[i(e,{width:"300px",height:"100px",paddingText:"100px",borderColor:"#2c2"},{default:r(()=>[...d[19]||(d[19]=[s(" paddingText为100px ",-1)])]),_:1})]),_:1},8,["code"]),d[44]||(d[44]=t("p",null,"最后，下面为多种进行组合使用：",-1)),i(l,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[i(e,{rounded:"",topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow",width:"300px",height:"100px",textColor:"#ff00ff",paddingText:"100px",colorBackground:"#2c2",boxShadow:"10px 2px 8px red"},{default:r(()=>[...d[20]||(d[20]=[s(" 组合使用 ",-1)])]),_:1})]),_:1},8,["code"]),d[45]||(d[45]=a("",7))])}}});export{C as __pageData,f as default};

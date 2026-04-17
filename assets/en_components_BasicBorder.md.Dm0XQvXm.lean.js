import{_ as s}from"./chunks/border.vue_vue_type_script_setup_true_lang.wGeNBiT-.js";import{I as l,o as n,c as h,a8 as a,J as d,w as i,j as t,a as r}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const p={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},b={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}},x=JSON.parse('{"title":"Border","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/BasicBorder.md","filePath":"en/components/BasicBorder.md"}'),c={name:"en/components/BasicBorder.md"},f=Object.assign(c,{setup(g){return(u,e)=>{const o=l("ShowCode");return n(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[21]||(e[21]=a("",6)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>Border is solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>Border is dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>Border is dotted</MYBorder>
</template>
  `.trim()},{demo:i(()=>[t("div",p,[d(s,{borderStyle:"solid",borderColor:"#2c2"},{default:i(()=>[...e[0]||(e[0]=[r("Border is solid",-1)])]),_:1}),d(s,{borderStyle:"dashed",borderColor:"#2c2"},{default:i(()=>[...e[1]||(e[1]=[r("Border is dashed",-1)])]),_:1}),d(s,{borderStyle:"dotted",borderColor:"#2c2"},{default:i(()=>[...e[2]||(e[2]=[r("Border is dotted",-1)])]),_:1})])]),_:1},8,["code"]),e[22]||(e[22]=t("h3",{id:"borderwidth",tabindex:"-1"},[r("borderWidth "),t("a",{class:"header-anchor",href:"#borderwidth","aria-label":"Permalink to “borderWidth”"},"​")],-1)),e[23]||(e[23]=t("p",null,[r("Use "),t("code",null,"borderWidth"),r(" to define the thickness of the border. Default is "),t("code",null,"1px"),r(". Here we use "),t("code",null,"borderColor"),r(" to set a clear color.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>Thickness is 2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>Thickness is 4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>Thickness is 6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>Thickness is 8vw</MYBorder>
</template>
  `.trim()},{demo:i(()=>[t("div",k,[d(s,{borderWidth:"2px",borderColor:"#2c2"},{default:i(()=>[...e[3]||(e[3]=[r("Thickness is 2px",-1)])]),_:1}),d(s,{borderWidth:"4vh",borderColor:"#2c2"},{default:i(()=>[...e[4]||(e[4]=[r("Thickness is 4vh",-1)])]),_:1}),d(s,{borderWidth:"6rem",borderColor:"#2c2"},{default:i(()=>[...e[5]||(e[5]=[r("Thickness is 6rem",-1)])]),_:1}),d(s,{borderWidth:"8vw",borderColor:"#2c2"},{default:i(()=>[...e[6]||(e[6]=[r("Thickness is 8vw",-1)])]),_:1})])]),_:1},8,["code"]),e[24]||(e[24]=t("h3",{id:"bordercolor",tabindex:"-1"},[r("borderColor "),t("a",{class:"header-anchor",href:"#bordercolor","aria-label":"Permalink to “borderColor”"},"​")],-1)),e[25]||(e[25]=t("p",null,[r("Use "),t("code",null,"borderColor"),r(" to define the color of the border. Default is black; here we use "),t("code",null,'borderStyle="dashed"'),r(" together.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>Red border</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>Blue border</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>Red border</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>Blue border</MYBorder>
</template>
  `.trim()},{demo:i(()=>[t("div",b,[d(s,{borderColor:"#ff0000",borderStyle:"dashed"},{default:i(()=>[...e[7]||(e[7]=[r("Red border",-1)])]),_:1}),d(s,{borderColor:"#409EFF",borderStyle:"dashed"},{default:i(()=>[...e[8]||(e[8]=[r("Blue border",-1)])]),_:1}),d(s,{borderColor:"red",borderStyle:"dashed"},{default:i(()=>[...e[9]||(e[9]=[r("Red border",-1)])]),_:1}),d(s,{borderColor:"blue",borderStyle:"dashed"},{default:i(()=>[...e[10]||(e[10]=[r("Blue border",-1)])]),_:1})])]),_:1},8,["code"]),e[26]||(e[26]=t("h2",{id:"border-directions",tabindex:"-1"},[r("Border Directions "),t("a",{class:"header-anchor",href:"#border-directions","aria-label":"Permalink to “Border Directions”"},"​")],-1)),e[27]||(e[27]=t("p",null,"You can set a separate color for each direction of the border. If you set a color for a single direction, the default border color becomes white.",-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder 
    topColor='red' 
    bottomColor='blue' 
    leftColor='green' 
    rightColor='yellow'
  >
    A border with different colors per direction
  </MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow"},{default:i(()=>[...e[11]||(e[11]=[r(" Top, bottom, left, right: red, blue, green, yellow respectively ",-1)])]),_:1})]),_:1},8,["code"]),e[28]||(e[28]=t("h2",{id:"center-content",tabindex:"-1"},[r("Center Content "),t("a",{class:"header-anchor",href:"#center-content","aria-label":"Permalink to “Center Content”"},"​")],-1)),e[29]||(e[29]=t("p",null,[r("Use "),t("code",null,"center"),r(" to center the content inside the border. Here we use "),t("code",null,"borderColor"),r(" to set a clear color.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder center borderColor='#2c2'>Centered text</MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{center:"",borderColor:"#2c2"},{default:i(()=>[...e[12]||(e[12]=[r("Centered text",-1)])]),_:1})]),_:1},8,["code"]),e[30]||(e[30]=t("h2",{id:"rounded-corners",tabindex:"-1"},[r("Rounded Corners "),t("a",{class:"header-anchor",href:"#rounded-corners","aria-label":"Permalink to “Rounded Corners”"},"​")],-1)),e[31]||(e[31]=t("p",null,[r("Use the "),t("code",null,"rounded"),r(" prop to add rounded corners to the border. Here we use "),t("code",null,"borderColor"),r(" to set a clear color. For better visualization, we also use "),t("code",null,"paddingText"),r(" to move the text.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder rounded borderColor='#2c2' paddingText='10px'>This is a rounded border</MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{rounded:"",borderColor:"#2c2",paddingText:"10px"},{default:i(()=>[...e[13]||(e[13]=[r("This is a rounded border",-1)])]),_:1})]),_:1},8,["code"]),e[32]||(e[32]=t("h2",{id:"circle-shape",tabindex:"-1"},[r("Circle Shape "),t("a",{class:"header-anchor",href:"#circle-shape","aria-label":"Permalink to “Circle Shape”"},"​")],-1)),e[33]||(e[33]=t("p",null,[r("Use the "),t("code",null,"circular"),r(" prop to turn the border into a circle. Here we use "),t("code",null,"borderColor"),r(" to set a clear color. For better visualization, we also use "),t("code",null,"paddingText"),r(" to move the text.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder circular borderColor='#2c2' paddingText='10px'>This is a circular border</MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{circular:"",borderColor:"#2c2",paddingText:"10px"},{default:i(()=>[...e[14]||(e[14]=[r("This is a circular border",-1)])]),_:1})]),_:1},8,["code"]),e[34]||(e[34]=t("h2",{id:"background-color-inside-border",tabindex:"-1"},[r("Background Color Inside Border "),t("a",{class:"header-anchor",href:"#background-color-inside-border","aria-label":"Permalink to “Background Color Inside Border”"},"​")],-1)),e[35]||(e[35]=t("p",null,[r("Use "),t("code",null,"colorBackground"),r(" to set the background color inside the border.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder colorBackground='#2c2'>This is a border with background color</MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{colorBackground:"#2c2"},{default:i(()=>[...e[15]||(e[15]=[r("This is a border with background color",-1)])]),_:1})]),_:1},8,["code"]),e[36]||(e[36]=t("h2",{id:"text-color-inside-border",tabindex:"-1"},[r("Text Color Inside Border "),t("a",{class:"header-anchor",href:"#text-color-inside-border","aria-label":"Permalink to “Text Color Inside Border”"},"​")],-1)),e[37]||(e[37]=t("p",null,[r("Use "),t("code",null,"textColor"),r(" to set the color of the text inside the border.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder textColor='red'>This is a border with red text</MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{textColor:"red"},{default:i(()=>[...e[16]||(e[16]=[r("This is a border with red text",-1)])]),_:1})]),_:1},8,["code"]),e[38]||(e[38]=t("h2",{id:"shadow",tabindex:"-1"},[r("Shadow "),t("a",{class:"header-anchor",href:"#shadow","aria-label":"Permalink to “Shadow”"},"​")],-1)),e[39]||(e[39]=t("p",null,[r("Use "),t("code",null,"boxShadow"),r(" to add a shadow effect to the border. Its usage is the same as the native CSS "),t("code",null,"box-shadow"),r(" property.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>This is a border with shadow</MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{boxShadow:"10px 2px 8px red"},{default:i(()=>[...e[17]||(e[17]=[r("This is a border with shadow",-1)])]),_:1})]),_:1},8,["code"]),e[40]||(e[40]=t("h2",{id:"custom-width-and-height",tabindex:"-1"},[r("Custom Width and Height "),t("a",{class:"header-anchor",href:"#custom-width-and-height","aria-label":"Permalink to “Custom Width and Height”"},"​")],-1)),e[41]||(e[41]=t("p",null,[r("Use the "),t("code",null,"width"),r(" and "),t("code",null,"height"),r(" props to set the dimensions. For better visualization, we also use "),t("code",null,"paddingText"),r(" to move the text and "),t("code",null,"borderColor"),r(" to set a color. Width and height can be used independently.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    borderColor='#2c2' 
    paddingText='20px'
  >
    100px high, 300px wide
  </MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{width:"300px",height:"100px",borderColor:"#2c2",paddingText:"20px"},{default:i(()=>[...e[18]||(e[18]=[r(" 100px high, 300px wide ",-1)])]),_:1})]),_:1},8,["code"]),e[42]||(e[42]=t("h2",{id:"spacing-between-content-and-border",tabindex:"-1"},[r("Spacing Between Content and Border "),t("a",{class:"header-anchor",href:"#spacing-between-content-and-border","aria-label":"Permalink to “Spacing Between Content and Border”"},"​")],-1)),e[43]||(e[43]=t("p",null,[r("Use "),t("code",null,"paddingText"),r(" to set the distance between the content and the border. It works like the native CSS "),t("code",null,"padding"),r(" property, and its usage is the same as CSS padding.")],-1)),d(o,{title:"Code Demo",code:`
<template>
  <MYBorder 
    width='300px' 
    height='100px' 
    paddingText='100px' 
    borderColor='#2c2'
  >
    paddingText is 100px
  </MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{width:"300px",height:"100px",paddingText:"100px",borderColor:"#2c2"},{default:i(()=>[...e[19]||(e[19]=[r(" paddingText is 100px ",-1)])]),_:1})]),_:1},8,["code"]),e[44]||(e[44]=t("p",null,"Finally, here is a combination of multiple props:",-1)),d(o,{title:"Code Demo",code:`
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
    Combined usage
  </MYBorder>
</template>
  `.trim()},{demo:i(()=>[d(s,{rounded:"",topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow",width:"300px",height:"100px",textColor:"#ff00ff",paddingText:"100px",colorBackground:"#2c2",boxShadow:"10px 2px 8px red"},{default:i(()=>[...e[20]||(e[20]=[r(" Combined usage ",-1)])]),_:1})]),_:1},8,["code"]),e[45]||(e[45]=a("",7))])}}});export{x as __pageData,f as default};

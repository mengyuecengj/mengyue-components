import{_ as d}from"./chunks/border.vue_vue_type_script_setup_true_lang.wGeNBiT-.js";import{I as o,o as h,c as l,a8 as t,J as e,w as s,j as n,a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const p={style:{display:"flex","flex-direction":"column",gap:"10px"}},g={style:{display:"flex","flex-direction":"column",gap:"10px"}},y={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}},m=JSON.parse('{"title":"Border","description":"","frontmatter":{},"headers":[],"relativePath":"components/BasicBorder.md","filePath":"components/BasicBorder.md"}'),k={name:"components/BasicBorder.md"},B=Object.assign(k,{setup(u){return(b,i)=>{const r=o("ShowCode");return h(),l("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[21]||(i[21]=t("",6)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder borderStyle='solid' borderColor='#2c2'>边框为solid</MYBorder>
  <MYBorder borderStyle='dashed' borderColor='#2c2'>边框为dashed</MYBorder>
  <MYBorder borderStyle='dotted' borderColor='#2c2'>边框为dotted</MYBorder>
</template>
  `.trim()},{demo:s(()=>[n("div",p,[e(d,{borderStyle:"solid",borderColor:"#2c2"},{default:s(()=>[...i[0]||(i[0]=[a("边框为solid",-1)])]),_:1}),e(d,{borderStyle:"dashed",borderColor:"#2c2"},{default:s(()=>[...i[1]||(i[1]=[a("边框为dashed",-1)])]),_:1}),e(d,{borderStyle:"dotted",borderColor:"#2c2"},{default:s(()=>[...i[2]||(i[2]=[a("边框为dotted",-1)])]),_:1})])]),_:1},8,["code"]),i[22]||(i[22]=n("h3",{id:"borderwidth",tabindex:"-1"},[a("borderWidth "),n("a",{class:"header-anchor",href:"#borderwidth","aria-label":"Permalink to “borderWidth”"},"​")],-1)),i[23]||(i[23]=n("p",null,[a("使用 "),n("code",null,"borderWidth"),a(" 定义边框的厚度，默认为 "),n("code",null,"1px"),a("。此处使用"),n("code",null,"borderColor"),a("配了个清晰的颜色。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong dingyibiankuangdehoudu，morenwei 。cichushiyongpeilegeqingxideyanse。 shi yong ding yi bian kuang de hou du ， mo ren wei 。 ci chu shi yong pei le ge qing xi de yan se 。 sy dybkdhd，mrw ccsyplgqxdys。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder borderWidth='2px' borderColor='#2c2'>厚度为2px</MYBorder>
  <MYBorder borderWidth='4vh' borderColor='#2c2'>厚度为4vh</MYBorder>
  <MYBorder borderWidth='6rem' borderColor='#2c2'>厚度为6rem</MYBorder>
  <MYBorder borderWidth='8vw' borderColor='#2c2'>厚度为8vw</MYBorder>
</template>
  `.trim()},{demo:s(()=>[n("div",g,[e(d,{borderWidth:"2px",borderColor:"#2c2"},{default:s(()=>[...i[3]||(i[3]=[a("厚度为2px",-1)])]),_:1}),e(d,{borderWidth:"4vh",borderColor:"#2c2"},{default:s(()=>[...i[4]||(i[4]=[a("厚度为4vh",-1)])]),_:1}),e(d,{borderWidth:"6rem",borderColor:"#2c2"},{default:s(()=>[...i[5]||(i[5]=[a("厚度为6rem",-1)])]),_:1}),e(d,{borderWidth:"8vw",borderColor:"#2c2"},{default:s(()=>[...i[6]||(i[6]=[a("厚度为8vw",-1)])]),_:1})])]),_:1},8,["code"]),i[24]||(i[24]=n("h3",{id:"bordercolor",tabindex:"-1"},[a("borderColor "),n("a",{class:"header-anchor",href:"#bordercolor","aria-label":"Permalink to “borderColor”"},"​")],-1)),i[25]||(i[25]=n("p",null,[a("使用 "),n("code",null,"borderColor"),a(" 定义边框的颜色。默认值为黑色，此处使用"),n("code",null,"borderStyle"),a("配了"),n("code",null,'borderStyle="dashed"'),a("。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong dingyibiankuangdeyanse。morenzhiweiheise，cichushiyongpeile。 shi yong ding yi bian kuang de yan se 。 mo ren zhi wei hei se ， ci chu shi yong pei le 。 sy dybkdys。mrzwhs，ccsypl。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder borderColor='#ff0000' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='#409EFF' borderStyle='dashed'>蓝色边框</MYBorder>
  <MYBorder borderColor='red' borderStyle='dashed'>红色边框</MYBorder>
  <MYBorder borderColor='blue' borderStyle='dashed'>蓝色边框</MYBorder>
</template>
  `.trim()},{demo:s(()=>[n("div",y,[e(d,{borderColor:"#ff0000",borderStyle:"dashed"},{default:s(()=>[...i[7]||(i[7]=[a("红色边框",-1)])]),_:1}),e(d,{borderColor:"#409EFF",borderStyle:"dashed"},{default:s(()=>[...i[8]||(i[8]=[a("蓝色边框",-1)])]),_:1}),e(d,{borderColor:"red",borderStyle:"dashed"},{default:s(()=>[...i[9]||(i[9]=[a("红色边框",-1)])]),_:1}),e(d,{borderColor:"blue",borderStyle:"dashed"},{default:s(()=>[...i[10]||(i[10]=[a("蓝色边框",-1)])]),_:1})])]),_:1},8,["code"]),i[26]||(i[26]=n("h2",{id:"边框方向",tabindex:"-1"},[a("边框方向 "),n("a",{class:"header-anchor",href:"#边框方向","aria-label":"Permalink to “边框方向”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biankuangfangxiang bian kuang fang xiang bkfx ")],-1)),i[27]||(i[27]=n("p",null,[a("可以为边框的每个方向单独设置颜色。当然也可以单独设置一个方向的颜色，单独设置后，边框默认的颜色会变成白色。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"keyiweibiankuangdemeigefangxiangdandushezhiyanse。dangranyekeyidandushezhiyigefangxiangdeyanse，dandushezhihou，biankuangmorendeyansehuibianchengbaise。 ke yi wei bian kuang de mei ge fang xiang dan du she zhi yan se 。 dang ran ye ke yi dan du she zhi yi ge fang xiang de yan se ， dan du she zhi hou ， bian kuang mo ren de yan se hui bian cheng bai se 。 kywbkdmgfxddszys。drykyddszygfxdys，ddszh，bkmrdyshbcbs。")],-1)),e(r,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[e(d,{topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow"},{default:s(()=>[...i[11]||(i[11]=[a(" 上下左右分别为红色和蓝色绿色黄色 ",-1)])]),_:1})]),_:1},8,["code"]),i[28]||(i[28]=n("h2",{id:"边框内容居中",tabindex:"-1"},[a("边框内容居中 "),n("a",{class:"header-anchor",href:"#边框内容居中","aria-label":"Permalink to “边框内容居中”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biankuangneirongjuzhong bian kuang nei rong ju zhong bknrjz ")],-1)),i[29]||(i[29]=n("p",null,[a("使用 "),n("code",null,"center"),a(" 将边框中的内容居中。此处使用"),n("code",null,"borderColor"),a("配了个清晰的颜色。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong jiangbiankuangzhongdeneirongjuzhong。cichushiyongpeilegeqingxideyanse。 shi yong jiang bian kuang zhong de nei rong ju zhong 。 ci chu shi yong pei le ge qing xi de yan se 。 sy jbkzdnrjz。ccsyplgqxdys。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder center borderColor='#2c2'>居中的文字</MYBorder>
</template>
  `.trim()},{demo:s(()=>[e(d,{center:"",borderColor:"#2c2"},{default:s(()=>[...i[12]||(i[12]=[a("居中的文字",-1)])]),_:1})]),_:1},8,["code"]),i[30]||(i[30]=n("h2",{id:"边框圆角",tabindex:"-1"},[a("边框圆角 "),n("a",{class:"header-anchor",href:"#边框圆角","aria-label":"Permalink to “边框圆角”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biankuangyuanjiao bian kuang yuan jiao bkyj ")],-1)),i[31]||(i[31]=n("p",null,[a("使用 "),n("code",null,"rounded"),a(" 属性为边框添加圆角。此处使用"),n("code",null,"borderColor"),a("配了个清晰的颜色。为了效果更直观这里使用了"),n("code",null,"paddingText"),a("移动了文本的位置。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingweibiankuangtianjiayuanjiao。cichushiyongpeilegeqingxideyanse。weilexiaoguogengzhiguanzhelishiyongleyidonglewenbendeweizhi。 shi yong shu xing wei bian kuang tian jia yuan jiao 。 ci chu shi yong pei le ge qing xi de yan se 。 wei le xiao guo geng zhi guan zhe li shi yong le yi dong le wen ben de wei zhi 。 sy sxwbktjyj。ccsyplgqxdys。wlxggzgzlsylydlwbdwz。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder rounded borderColor='#2c2' paddingText='10px'>这是一个圆角边框</MYBorder>
</template>
  `.trim()},{demo:s(()=>[e(d,{rounded:"",borderColor:"#2c2",paddingText:"10px"},{default:s(()=>[...i[13]||(i[13]=[a("这是一个圆角边框",-1)])]),_:1})]),_:1},8,["code"]),i[32]||(i[32]=n("h2",{id:"边框圆形",tabindex:"-1"},[a("边框圆形 "),n("a",{class:"header-anchor",href:"#边框圆形","aria-label":"Permalink to “边框圆形”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biankuangyuanxing bian kuang yuan xing bkyx ")],-1)),i[33]||(i[33]=n("p",null,[a("使用 "),n("code",null,"circular"),a(" 属性将边框变为圆形。此处使用"),n("code",null,"borderColor"),a("配了个清晰的颜色。为了效果更直观这里使用了"),n("code",null,"paddingText"),a("移动了文本的位置。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingjiangbiankuangbianweiyuanxing。cichushiyongpeilegeqingxideyanse。weilexiaoguogengzhiguanzhelishiyongleyidonglewenbendeweizhi。 shi yong shu xing jiang bian kuang bian wei yuan xing 。 ci chu shi yong pei le ge qing xi de yan se 。 wei le xiao guo geng zhi guan zhe li shi yong le yi dong le wen ben de wei zhi 。 sy sxjbkbwyx。ccsyplgqxdys。wlxggzgzlsylydlwbdwz。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder circular borderColor='#2c2' paddingText='10px'>这是一个圆形边框</MYBorder>
</template>
  `.trim()},{demo:s(()=>[e(d,{circular:"",borderColor:"#2c2",paddingText:"10px"},{default:s(()=>[...i[14]||(i[14]=[a("这是一个圆形边框",-1)])]),_:1})]),_:1},8,["code"]),i[34]||(i[34]=n("h2",{id:"边框内部背景颜色",tabindex:"-1"},[a("边框内部背景颜色 "),n("a",{class:"header-anchor",href:"#边框内部背景颜色","aria-label":"Permalink to “边框内部背景颜色”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biankuangneibubeijingyanse bian kuang nei bu bei jing yan se bknbbjys ")],-1)),i[35]||(i[35]=n("p",null,[a("使用 "),n("code",null,"colorBackground"),a(" 设置边框内部的背景色。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shezhibiankuangneibudebeijingse。 shi yong she zhi bian kuang nei bu de bei jing se 。 sy szbknbdbjs。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder colorBackground='#2c2'>这是一个带有背景色的边框</MYBorder>
</template>
  `.trim()},{demo:s(()=>[e(d,{colorBackground:"#2c2"},{default:s(()=>[...i[15]||(i[15]=[a("这是一个带有背景色的边框",-1)])]),_:1})]),_:1},8,["code"]),i[36]||(i[36]=n("h2",{id:"边框内部文本颜色",tabindex:"-1"},[a("边框内部文本颜色 "),n("a",{class:"header-anchor",href:"#边框内部文本颜色","aria-label":"Permalink to “边框内部文本颜色”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biankuangneibuwenbenyanse bian kuang nei bu wen ben yan se bknbwbys ")],-1)),i[37]||(i[37]=n("p",null,[a("使用 "),n("code",null,"textColor"),a(" 设置边框内文本的颜色。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shezhibiankuangneiwenbendeyanse。 shi yong she zhi bian kuang nei wen ben de yan se 。 sy szbknwbdys。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder textColor='red'>这是一个红色文本的边框</MYBorder>
</template>
  `.trim()},{demo:s(()=>[e(d,{textColor:"red"},{default:s(()=>[...i[16]||(i[16]=[a("这是一个红色文本的边框",-1)])]),_:1})]),_:1},8,["code"]),i[38]||(i[38]=n("h2",{id:"阴影",tabindex:"-1"},[a("阴影 "),n("a",{class:"header-anchor",href:"#阴影","aria-label":"Permalink to “阴影”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yinying yin ying yy ")],-1)),i[39]||(i[39]=n("p",null,[a("使用 "),n("code",null,"boxShadow"),a(" 为边框添加阴影效果。他的使用方式和原生css的box-shadow属性用法一致。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong weibiankuangtianjiayinyingxiaoguo。tadeshiyongfangshiheyuanshengcssdebox-shadowshuxingyongfayizhi。 shi yong wei bian kuang tian jia yin ying xiao guo 。 ta de shi yong fang shi he yuan sheng css de box-shadow shu xing yong fa yi zhi 。 sy wbktjyyxg。tdsyfshyscdbsxyfyz。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYBorder boxShadow='10px 2px 8px red'>这是一个带有阴影的边框</MYBorder>
</template>
  `.trim()},{demo:s(()=>[e(d,{boxShadow:"10px 2px 8px red"},{default:s(()=>[...i[17]||(i[17]=[a("这是一个带有阴影的边框",-1)])]),_:1})]),_:1},8,["code"]),i[40]||(i[40]=t("",2)),e(r,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[e(d,{width:"300px",height:"100px",borderColor:"#2c2",paddingText:"20px"},{default:s(()=>[...i[18]||(i[18]=[a(" 高100px宽300px ",-1)])]),_:1})]),_:1},8,["code"]),i[41]||(i[41]=n("h2",{id:"边框内容与边框之间距离",tabindex:"-1"},[a("边框内容与边框之间距离 "),n("a",{class:"header-anchor",href:"#边框内容与边框之间距离","aria-label":"Permalink to “边框内容与边框之间距离”"},"​"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biankuangneirongyubiankuangzhijianjuli bian kuang nei rong yu bian kuang zhi jian ju li bknrybkzjjl ")],-1)),i[42]||(i[42]=n("p",null,[a("使用"),n("code",null,"paddingText"),a("设置边框内容与边框之间的距离，其效果相当于原生css的"),n("code",null,"padding"),a("属性。也与css原生的padding使用方法是一致的。"),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshezhibiankuangneirongyubiankuangzhijiandejuli，qixiaoguoxiangdangyuyuanshengcssdeshuxing。yeyucssyuanshengdepaddingshiyongfangfashiyizhide。 shi yong she zhi bian kuang nei rong yu bian kuang zhi jian de ju li ， qi xiao guo xiang dang yu yuan sheng css de shu xing 。 ye yu css yuan sheng de padding shi yong fang fa shi yi zhi de 。 syszbknrybkzjdjl，qxgxdyyscdsx。yycysdpsyffsyzd。")],-1)),e(r,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[e(d,{width:"300px",height:"100px",paddingText:"100px",borderColor:"#2c2"},{default:s(()=>[...i[19]||(i[19]=[a(" paddingText为100px ",-1)])]),_:1})]),_:1},8,["code"]),i[43]||(i[43]=n("p",null,[a("最后，下面为多种进行组合使用："),n("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，xiamianweiduozhongjinhangzuheshiyong： zui hou ， xia mian wei duo zhong jin hang zu he shi yong ： zh，xmwdzjhzhsy：")],-1)),e(r,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[e(d,{rounded:"",topColor:"red",bottomColor:"blue",leftColor:"green",rightColor:"yellow",width:"300px",height:"100px",textColor:"#ff00ff",paddingText:"100px",colorBackground:"#2c2",boxShadow:"10px 2px 8px red"},{default:s(()=>[...i[20]||(i[20]=[a(" 组合使用 ",-1)])]),_:1})]),_:1},8,["code"]),i[44]||(i[44]=t("",7))])}}});export{m as __pageData,B as default};

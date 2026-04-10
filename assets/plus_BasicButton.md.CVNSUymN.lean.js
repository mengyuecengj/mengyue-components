import{_ as t}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{_ as o}from"./chunks/a.vue_vue_type_script_setup_true_lang.B07wek4H.js";import{_ as u}from"./chunks/plus.vue_vue_type_script_setup_true_lang.gab9I-zL.js";import{I as p,o as y,c as h,a8 as r,J as n,w as a,j as e,a as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/IconBase.vue_vue_type_script_setup_true_lang.l0ItinT5.js";const g={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},k={style:{display:"flex",gap:"50px"}},b={style:{display:"flex",gap:"50px"}},m={style:{display:"flex",gap:"50px"}},f={style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px","justify-content":"center","margin-top":"20px"}},_=JSON.parse('{"title":"Button","description":"","frontmatter":{},"headers":[],"relativePath":"plus/BasicButton.md","filePath":"plus/BasicButton.md"}'),c={name:"plus/BasicButton.md"},w=Object.assign(c,{setup(B){return(z,i)=>{const d=p("ClientOnly"),l=p("ShowCode");return y(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[37]||(i[37]=r("",6)),n(l,{title:"代码演示",code:`
<template>
    <MYButton>Default按钮</MYButton>
    <MYButton type='primary'>primary按钮</MYButton>
    <MYButton type='success'>Success按钮</MYButton>
    <MYButton type='warning'>Warning按钮</MYButton>
    <MYButton type='danger'>Danger按钮</MYButton>
    <MYButton type='info'>Info按钮</MYButton>
</template>
`.trim()},{demo:a(()=>[e("span",null,[i[1]||(i[1]=s("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),n(o,{href:"#aboutSize",style:{}},{default:a(()=>[...i[0]||(i[0]=[s("关于尺寸",-1)])]),_:1}),i[2]||(i[2]=s("的描述",-1))]),n(d,null,{default:a(()=>[e("div",g,[n(t,null,{default:a(()=>[...i[3]||(i[3]=[s("Default按钮",-1)])]),_:1}),n(t,{type:"primary"},{default:a(()=>[...i[4]||(i[4]=[s("primary按钮",-1)])]),_:1}),n(t,{type:"success"},{default:a(()=>[...i[5]||(i[5]=[s("Success按钮",-1)])]),_:1}),n(t,{type:"warning"},{default:a(()=>[...i[6]||(i[6]=[s("Warning按钮",-1)])]),_:1}),n(t,{type:"danger"},{default:a(()=>[...i[7]||(i[7]=[s("Danger按钮",-1)])]),_:1}),n(t,{type:"info"},{default:a(()=>[...i[8]||(i[8]=[s("Info按钮",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),i[38]||(i[38]=e("h3",{id:"colorbg",tabindex:"-1"},[s("colorBg "),e("a",{class:"header-anchor",href:"#colorbg","aria-label":"Permalink to “colorBg”"},"​")],-1)),i[39]||(i[39]=e("p",null,[s("当然，如果上面的颜色不满足需求，还可以自定义颜色，使用colorBg自定义按钮背景颜色 例如这里使用红色背景："),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"dangran，ruguoshangmiandeyansebumanzuxuqiu，huankeyizidingyiyanse，shiyongcolorBgzidingyianniubeijingyanse liruzhelishiyonghongsebeijing： dang ran ， ru guo shang mian de yan se bu man zu xu qiu ， huan ke yi zi ding yi yan se ， shi yong colorBg zi ding yi an niu bei jing yan se li ru zhe li shi yong hong se bei jing ： dr，rgsmdysbmzxq，hkyzdyys，syczdyanbjys lrzlsyhsbj：")],-1)),n(l,{title:"代码演示",description:"如果使用了colorBg api,那么type属性将会被colorBg属性覆盖掉",code:`
<template>
    <MYButton colorBg='#ff0000'>十六进制自定义红色背景按钮</MYButton>
    <MYButton colorBg='red'>单词自定义红色背景按钮</MYButton>
</template>
`.trim()},{demo:a(()=>[e("div",k,[n(d,null,{default:a(()=>[n(t,{colorBg:"#ff0000"},{default:a(()=>[...i[9]||(i[9]=[s("十六进制自定义红色背景按钮",-1)])]),_:1}),n(t,{colorBg:"red"},{default:a(()=>[...i[10]||(i[10]=[s("单词自定义红色背景按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[40]||(i[40]=e("h3",{id:"colortext",tabindex:"-1"},[s("colorText "),e("a",{class:"header-anchor",href:"#colortext","aria-label":"Permalink to “colorText”"},"​")],-1)),i[41]||(i[41]=e("p",null,[e("code",null,"MYButton"),s("按钮也支持自定义文本颜色，这里使用colorText自定义按钮文字颜色"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"anniuyezhichizidingyiwenbenyanse，zhelishiyongcolorTextzidingyianniuwenziyanse an niu ye zhi chi zi ding yi wen ben yan se ， zhe li shi yong colorText zi ding yi an niu wen zi yan se anyzczdywbys，zlsyczdyanwzys")],-1)),n(l,{title:"代码演示",code:`
<template>
    <MYButton colorText='#ff0000'>十六进制自定义红色文本按钮</MYButton>
    <MYButton colorText='red'>单词自定义红色文本按钮</MYButton>
</template>
    `},{demo:a(()=>[e("div",b,[n(d,null,{default:a(()=>[n(t,{colorText:"#ff0000"},{default:a(()=>[...i[11]||(i[11]=[s("十六进制自定义红色背景按钮",-1)])]),_:1}),n(t,{colorText:"red"},{default:a(()=>[...i[12]||(i[12]=[s("单词自定义红色背景按钮",-1)])]),_:1})]),_:1})])]),_:1}),i[42]||(i[42]=e("h3",{id:"colorborder",tabindex:"-1"},[s("colorBorder "),e("a",{class:"header-anchor",href:"#colorborder","aria-label":"Permalink to “colorBorder”"},"​")],-1)),i[43]||(i[43]=e("p",null,[s("自定义按钮边框颜色，这里使用colorBorder自定义按钮边框颜色"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyianniubiankuangyanse，zhelishiyongcolorBorderzidingyianniubiankuangyanse zi ding yi an niu bian kuang yan se ， zhe li shi yong colorBorder zi ding yi an niu bian kuang yan se zdyanbkys，zlsyczdyanbkys")],-1)),n(l,{title:"代码演示",code:`
<template>
    <MYButton colorBorder='#FF7F50'>十六进制自定义橙色边框按钮</MYButton>
    <MYButton colorBorder='orange'>单词自定义橙色边框按钮</MYButton>
</template>
    `},{demo:a(()=>[e("div",m,[n(d,null,{default:a(()=>[n(t,{colorBorder:"#FF7F50"},{default:a(()=>[...i[13]||(i[13]=[s("十六进制自定义橙色边框按钮",-1)])]),_:1}),n(t,{colorBorder:"#FF7F50"},{default:a(()=>[...i[14]||(i[14]=[s("单词自定义橙色边框按钮",-1)])]),_:1})]),_:1})])]),_:1}),i[44]||(i[44]=e("h3",{id:"plain",tabindex:"-1"},[s("plain "),e("a",{class:"header-anchor",href:"#plain","aria-label":"Permalink to “plain”"},"​")],-1)),i[45]||(i[45]=e("p",null,[s("使用plain属性可以把按钮渲染为透明样式，配合上面的自定义颜色实现不一样的样式"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongplainshuxingkeyibaanniuxuanranweitoumingyangshi，peiheshangmiandezidingyiyanseshixianbuyiyangdeyangshi shi yong plain shu xing ke yi ba an niu xuan ran wei tou ming yang shi ， pei he shang mian de zi ding yi yan se shi xian bu yi yang de yang shi sypsxkybanxrwtmys，phsmdzdyyssxbyydys")],-1)),n(l,{title:"代码演示",code:`
<template>
    <MYButton plain>Default按钮</MYButton>
    <MYButton plain type='primary'>primary按钮</MYButton>
    <MYButton plain type='success'>Success按钮</MYButton>
    <MYButton plain type='warning'>Warning按钮</MYButton>
    <MYButton plain type='danger'>Danger按钮</MYButton>
    <MYButton plain type='info'>Info按钮</MYButton>
</template>
`.trim()},{demo:a(()=>[e("span",null,[i[16]||(i[16]=s("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),n(o,{href:"#aboutSize",style:{}},{default:a(()=>[...i[15]||(i[15]=[s("关于尺寸",-1)])]),_:1}),i[17]||(i[17]=s("的描述",-1))]),e("div",f,[n(d,null,{default:a(()=>[n(t,{plain:""},{default:a(()=>[...i[18]||(i[18]=[s("Default按钮",-1)])]),_:1}),n(t,{type:"primary",plain:""},{default:a(()=>[...i[19]||(i[19]=[s("primary按钮",-1)])]),_:1}),n(t,{type:"success",plain:""},{default:a(()=>[...i[20]||(i[20]=[s("Success按钮",-1)])]),_:1}),n(t,{type:"warning",plain:""},{default:a(()=>[...i[21]||(i[21]=[s("Warning按钮",-1)])]),_:1}),n(t,{type:"danger",plain:""},{default:a(()=>[...i[22]||(i[22]=[s("Danger按钮",-1)])]),_:1}),n(t,{type:"info",plain:""},{default:a(()=>[...i[23]||(i[23]=[s("Info按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[46]||(i[46]=r("",3)),n(l,{title:"代码演示",code:`
<template>
    <MYButton round>圆角按钮</MYButton>
</template>
    `},{demo:a(()=>[n(d,null,{default:a(()=>[n(t,{round:""},{default:a(()=>[...i[24]||(i[24]=[s("圆角按钮",-1)])]),_:1})]),_:1})]),_:1}),i[47]||(i[47]=e("h3",{id:"circle",tabindex:"-1"},[s("circle "),e("a",{class:"header-anchor",href:"#circle","aria-label":"Permalink to “circle”"},"​")],-1)),i[48]||(i[48]=e("p",null,[s("使用circle可以把按钮变成圆形"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongcirclekeyibaanniubianchengyuanxing shi yong circle ke yi ba an niu bian cheng yuan xing syckybanbcyx")],-1)),n(l,{title:"代码演示",description:"circle属性和round属性不能同时使用",code:`
<template>
    <MYButton circle>A</MYButton>
</template>
    `},{demo:a(()=>[n(d,null,{default:a(()=>[n(t,{circle:""},{default:a(()=>[...i[25]||(i[25]=[s("A",-1)])]),_:1})]),_:1})]),_:1}),i[49]||(i[49]=r("",3)),n(l,{title:"代码演示",code:`
<template>
    <MYButton size='supersmall'>supersmall按钮</MYButton>
    <MYButton size='small'>small按钮</MYButton>
    <MYButton size='medium'>medium按钮</MYButton>
    <MYButton size='large'>large按钮</MYButton>
    <MYButton size='superbig'>superbig按钮</MYButton>
</template>
`.trim()},{demo:a(()=>[e("span",null,[i[27]||(i[27]=s("注意: 演示效果有一定的放大元素，具体尺寸请阅读下面",-1)),n(o,{href:"#aboutSize",style:{}},{default:a(()=>[...i[26]||(i[26]=[s("关于尺寸",-1)])]),_:1}),i[28]||(i[28]=s("的描述",-1))]),e("div",null,[n(d,null,{default:a(()=>[n(t,{style:{display:"block","margin-top":"20px"},size:"supersmall"},{default:a(()=>[...i[29]||(i[29]=[s("supersmall按钮",-1)])]),_:1}),n(t,{style:{display:"block","margin-top":"20px"},size:"small"},{default:a(()=>[...i[30]||(i[30]=[s("small按钮",-1)])]),_:1}),n(t,{style:{display:"block","margin-top":"20px"},size:"medium"},{default:a(()=>[...i[31]||(i[31]=[s("medium按钮",-1)])]),_:1}),n(t,{style:{display:"block","margin-top":"20px"},size:"large"},{default:a(()=>[...i[32]||(i[32]=[s("large按钮",-1)])]),_:1}),n(t,{style:{display:"block","margin-top":"20px"},size:"superbig"},{default:a(()=>[...i[33]||(i[33]=[s("superbig按钮",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[50]||(i[50]=r("",3)),n(l,{title:"代码演示",code:`
<template>
    <MYButton disabled>禁用按钮</MYButton>
</template>
    `},{demo:a(()=>[n(d,null,{default:a(()=>[n(t,{disabled:""},{default:a(()=>[...i[34]||(i[34]=[s("禁用按钮",-1)])]),_:1})]),_:1})]),_:1}),i[51]||(i[51]=e("h2",{id:"插入图标",tabindex:"-1"},[s("插入图标 "),e("a",{class:"header-anchor",href:"#插入图标","aria-label":"Permalink to “插入图标”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"charutubiao cha ru tu biao crtb ")],-1)),i[52]||(i[52]=e("p",null,[s("使用icon属性可以支持插入图标"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongiconshuxingkeyizhichicharutubiao shi yong icon shu xing ke yi zhi chi cha ru tu biao syisxkyzccrtb")],-1)),n(l,{title:"代码演示",code:`
<template>
    <MYButton icon="MYPlus">带图标的按钮</MYButton>
</template>
    `},{demo:a(()=>[n(d,null,{default:a(()=>[n(t,{type:"success"},{default:a(()=>[n(u),i[35]||(i[35]=s(" 带图标的按钮 ",-1))]),_:1})]),_:1})]),_:1}),i[53]||(i[53]=e("p",null,[s("最后，实现个多种api组合使用实现个按钮："),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangeanniu： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge an niu ： zh，sxgdzazhsysxgan：")],-1)),n(l,{title:"代码演示",code:`
<template>
    <MYButton
        size='superbig'
        round
        plain
        colorBorder='#FF7F50'
        colorBg='#8d4dd1'
        colorText='red'
    >组合按钮</MYButton>
</template>
    `},{demo:a(()=>[n(d,null,{default:a(()=>[n(t,{size:"superbig",round:"",plain:"",colorBorder:"#FF7F50",colorBg:"#8d4dd1",colorText:"red"},{default:a(()=>[...i[36]||(i[36]=[s("组合按钮",-1)])]),_:1})]),_:1})]),_:1}),i[54]||(i[54]=r("",5))])}}});export{_ as __pageData,w as default};

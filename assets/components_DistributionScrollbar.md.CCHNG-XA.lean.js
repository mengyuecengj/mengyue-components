import{_ as h}from"./chunks/scrollbar.vue_vue_type_script_setup_true_lang.CmRLiPZZ.js";import{_ as t}from"./chunks/text.vue_vue_type_script_setup_true_lang.Couc8lvn.js";import{I as r,o as p,c as o,a8 as l,J as n,w as s,a as e,j as a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useScrollCommon.BuCZSVsl.js";const z=JSON.parse('{"title":"Scrollbar","description":"","frontmatter":{},"headers":[],"relativePath":"components/DistributionScrollbar.md","filePath":"components/DistributionScrollbar.md"}'),g={name:"components/DistributionScrollbar.md"},B=Object.assign(g,{setup(u){return(k,i)=>{const d=r("ShowCode");return p(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[9]||(i[9]=l("",6)),n(d,{title:"代码演示",code:`
<template>
  <MYScrollbar widthX ScrollWidth='20px' corner>
    <MYText size='30rem'>11111111111111111111111111111</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:s(()=>[n(h,{widthX:"",ScrollWidth:"20px",corner:""},{default:s(()=>[n(t,{size:"30rem"},{default:s(()=>[...i[0]||(i[0]=[e("11111111111111111111111111111",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[10]||(i[10]=a("h3",{id:"滚动条颜色",tabindex:"-1"},[e("滚动条颜色 "),a("a",{class:"header-anchor",href:"#滚动条颜色","aria-label":"Permalink to “滚动条颜色”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"gundongtiaoyanse gun dong tiao yan se gdtys ")],-1)),i[11]||(i[11]=a("p",null,[e("改变滚动条的滑块，滑轨，鼠标点击或者触碰滑块时的颜色："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"gaibiangundongtiaodehuakuai，huagui，shubiaodianjihuozhechupenghuakuaishideyanse： gai bian gun dong tiao de hua kuai ， hua gui ， shu biao dian ji huo zhe chu peng hua kuai shi de yan se ： gbgdtdhk，hg，sbdjhzcphksdys：")],-1)),n(d,{title:"代码演示",code:`
<template>
  <MYScrollbar 
    height='500px' 
    thumbColor='#ff0000' 
    thumbHoverColor='#2c2' 
    trackColor='#797'
  >
    <MYText size='30rem'>111</MYText>
    <MYText size='30rem'>111</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:s(()=>[n(h,{height:"500px",thumbColor:"#ff0000",thumbHoverColor:"#2c2",trackColor:"#797"},{default:s(()=>[n(t,{size:"30rem"},{default:s(()=>[...i[1]||(i[1]=[e("111",-1)])]),_:1}),n(t,{size:"30rem"},{default:s(()=>[...i[2]||(i[2]=[e("111",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[12]||(i[12]=a("h3",{id:"禁用滚动",tabindex:"-1"},[e("禁用滚动 "),a("a",{class:"header-anchor",href:"#禁用滚动","aria-label":"Permalink to “禁用滚动”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyonggundong jin yong gun dong jygd ")],-1)),i[13]||(i[13]=a("p",null,[e("取消滚动条禁止滚动功能："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"quxiaogundongtiaojinzhigundonggongneng： qu xiao gun dong tiao jin zhi gun dong gong neng ： qxgdtjzgdgn：")],-1)),n(d,{title:"代码演示",code:`
<template>
  <MYScrollbar height='500px' Maxheight='800px' disabledScroll>
    <MYText size='30rem'>222</MYText>
    <MYText size='30rem'>222</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:s(()=>[n(h,{height:"500px",Maxheight:"800px",disabledScroll:""},{default:s(()=>[n(t,{size:"30rem"},{default:s(()=>[...i[3]||(i[3]=[e("222",-1)])]),_:1}),n(t,{size:"30rem"},{default:s(()=>[...i[4]||(i[4]=[e("222",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[14]||(i[14]=a("h3",{id:"设置最大高度",tabindex:"-1"},[e("设置最大高度 "),a("a",{class:"header-anchor",href:"#设置最大高度","aria-label":"Permalink to “设置最大高度”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shezhizuidagaodu she zhi zui da gao du szzdgd ")],-1)),i[15]||(i[15]=a("p",null,[e("设置最大高度为800px："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shezhizuidagaoduwei800px： she zhi zui da gao du wei 800px： szzdgdw8")],-1)),n(d,{title:"代码演示",code:`
<template>
  <MYScrollbar height='500px' Maxheight='800px'>
    <MYText size='30rem'>333</MYText>
    <MYText size='30rem'>333</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:s(()=>[n(h,{height:"500px",Maxheight:"800px"},{default:s(()=>[n(t,{size:"30rem"},{default:s(()=>[...i[5]||(i[5]=[e("333",-1)])]),_:1}),n(t,{size:"30rem"},{default:s(()=>[...i[6]||(i[6]=[e("333",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[16]||(i[16]=a("h3",{id:"组合使用",tabindex:"-1"},[e("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[17]||(i[17]=a("p",null,[e("多种属性组合使用："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duozhongshuxingzuheshiyong： duo zhong shu xing zu he shi yong ： dzsxzhsy：")],-1)),n(d,{title:"代码演示",code:`
<template>
  <MYScrollbar 
    height='600px' 
    Maxheight='1000px' 
    thumbColor='#fff' 
    thumbHoverColor='#191919' 
    trackColor='#2c2'
  >
    <MYText size='30rem'>444</MYText>
    <MYText size='30rem'>444</MYText>
  </MYScrollbar>
</template>
  `.trim()},{demo:s(()=>[n(h,{height:"600px",Maxheight:"1000px",thumbColor:"#fff",thumbHoverColor:"#191919",trackColor:"#2c2"},{default:s(()=>[n(t,{size:"30rem"},{default:s(()=>[...i[7]||(i[7]=[e("444",-1)])]),_:1}),n(t,{size:"30rem"},{default:s(()=>[...i[8]||(i[8]=[e("444",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[18]||(i[18]=l("",5))])}}});export{z as __pageData,B as default};

import{_ as t}from"./chunks/text.vue_vue_type_script_setup_true_lang.Couc8lvn.js";import{_ as o,a as d}from"./chunks/col.vue_vue_type_script_setup_true_lang.DdC9l-8w.js";import{I as l,o as y,c as g,a8 as p,J as e,w as n,a,j as s}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useOverallComputed.oY471y-F.js";const u={style:{display:"flex",gap:"20px"}},m={style:{display:"flex","flex-direction":"column",gap:"10px"}},x={style:{display:"flex","flex-direction":"column",gap:"10px"}},Y=JSON.parse('{"title":"Text","description":"","frontmatter":{},"headers":[],"relativePath":"plus/Basictext.md","filePath":"plus/Basictext.md"}'),k={name:"plus/Basictext.md"},A=Object.assign(k,{setup(c){return(b,i)=>{const h=l("MYBorder"),r=l("ShowCode");return y(),g("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[16]||(i[16]=p("",6)),e(r,{title:"代码演示",code:`
<template>
  <MYText>Default 文本</MYText>
  <MYText type='primary'>primary 文本</MYText>
  <MYText type='success'>Success 文本</MYText>
  <MYText type='warning'>Warning 文本</MYText>
  <MYText type='danger'>Danger 文本</MYText>
  <MYText type='info'>Info 文本</MYText>
</template>
  `.trim()},{demo:n(()=>[e(o,{gutter:16},{default:n(()=>[e(d,{span:8},{default:n(()=>[e(t,{plain:""},{default:n(()=>[...i[0]||(i[0]=[a("Default文本",-1)])]),_:1})]),_:1}),e(d,{span:8},{default:n(()=>[e(t,{type:"primary",plain:""},{default:n(()=>[...i[1]||(i[1]=[a("primary文本",-1)])]),_:1})]),_:1}),e(d,{span:8},{default:n(()=>[e(t,{type:"success",plain:""},{default:n(()=>[...i[2]||(i[2]=[a("Success文本",-1)])]),_:1})]),_:1}),e(h,{borderColor:"transparent",paddingText:"10px"}),e(d,{span:8},{default:n(()=>[e(t,{type:"warning",plain:""},{default:n(()=>[...i[3]||(i[3]=[a("Warning文本",-1)])]),_:1})]),_:1}),e(d,{span:8},{default:n(()=>[e(t,{type:"danger",plain:""},{default:n(()=>[...i[4]||(i[4]=[a("Danger文本",-1)])]),_:1})]),_:1}),e(d,{span:8},{default:n(()=>[e(t,{type:"info",plain:""},{default:n(()=>[...i[5]||(i[5]=[a("Info文本",-1)])]),_:1})]),_:1})]),_:1})]),_:1},8,["code"]),i[17]||(i[17]=s("h2",{id:"自定义颜色",tabindex:"-1"},[a("自定义颜色 "),s("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyanse zi ding yi yan se zdyys ")],-1)),i[18]||(i[18]=s("p",null,[a("如果默认颜色不满足需求，还可以自定义颜色，使用 "),s("code",null,"color"),a(" 属性自定义文本颜色。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"ruguomorenyansebumanzuxuqiu，huankeyizidingyiyanse，shiyong shuxingzidingyiwenbenyanse。 ru guo mo ren yan se bu man zu xu qiu ， huan ke yi zi ding yi yan se ， shi yong shu xing zi ding yi wen ben yan se 。 rgmrysbmzxq，hkyzdyys，sy sxzdywbys。")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYText color='#ff0000'>自定义红色文本</MYText>
  <MYText color='pink'>自定义粉色文本</MYText>
</template>
  `.trim()},{demo:n(()=>[s("div",u,[e(t,{Tecolor:"#ff0000"},{default:n(()=>[...i[6]||(i[6]=[a("自定义红色文本",-1)])]),_:1}),e(t,{Tecolor:"pink"},{default:n(()=>[...i[7]||(i[7]=[a("自定义粉色文本",-1)])]),_:1})])]),_:1},8,["code"]),i[19]||(i[19]=p("",3)),e(r,{title:"代码演示",code:`
<template>
  <MYText size='small'>small 文本</MYText>
  <MYText size='medium'>medium 文本</MYText>
  <MYText size='large'>large 文本</MYText>
</template>
  `.trim()},{demo:n(()=>[s("div",m,[e(t,{size:"small"},{default:n(()=>[...i[8]||(i[8]=[a("small 文本",-1)])]),_:1}),e(t,{size:"medium"},{default:n(()=>[...i[9]||(i[9]=[a("medium 文本",-1)])]),_:1}),e(t,{size:"large"},{default:n(()=>[...i[10]||(i[10]=[a("large 文本",-1)])]),_:1})])]),_:1},8,["code"]),i[20]||(i[20]=s("h3",{id:"自定义尺寸",tabindex:"-1"},[a("自定义尺寸 "),s("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichicun zi ding yi chi cun zdycc ")],-1)),i[21]||(i[21]=s("p",null,[a("也可以支持自定义文本大小："),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yekeyizhichizidingyiwenbendaxiao： ye ke yi zhi chi zi ding yi wen ben da xiao ： ykyzczdywbdx：")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYText size='20px'>自定义文本20px</MYText>
  <MYText :size='20'>自定义文本:20</MYText>
  <MYText size='5rem'>自定义文本5rem</MYText>
  <MYText size='5em'>自定义文本5em</MYText>
</template>
  `.trim()},{demo:n(()=>[s("div",x,[e(t,{size:"20px"},{default:n(()=>[...i[11]||(i[11]=[a("自定义文本20px",-1)])]),_:1}),e(t,{size:20},{default:n(()=>[...i[12]||(i[12]=[a("自定义文本:20",-1)])]),_:1}),e(t,{size:"5rem"},{default:n(()=>[...i[13]||(i[13]=[a("自定义文本5rem",-1)])]),_:1}),e(t,{size:"5em"},{default:n(()=>[...i[14]||(i[14]=[a("自定义文本5em",-1)])]),_:1})])]),_:1},8,["code"]),i[22]||(i[22]=s("h3",{id:"组合使用",tabindex:"-1"},[a("组合使用 "),s("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[23]||(i[23]=s("p",null,[a("最后，实现多种 API 组合使用："),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixianduozhong API zuheshiyong： zui hou ， shi xian duo zhong API zu he shi yong ： zh，sxdz zhsy：")],-1)),e(r,{title:"代码演示",code:`
<template>
  <MYText size='5em' color='blue'>组合使用medium和blue</MYText>
</template>
  `.trim()},{demo:n(()=>[e(t,{size:"5em",Tecolor:"blue"},{default:n(()=>[...i[15]||(i[15]=[a("组合使用medium和blue",-1)])]),_:1})]),_:1},8,["code"]),i[24]||(i[24]=p("",5))])}}});export{Y as __pageData,A as default};

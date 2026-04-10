import{_ as l}from"./chunks/slidebar.vue_vue_type_script_setup_true_lang.B93asPUC.js";import{I as c,o as b,c as f,a8 as m,J as s,w as t,j as a,a as n,A as h}from"./chunks/framework.DvHWw5tv.js";const C=JSON.parse('{"title":"Slidebar","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSidebar.md","filePath":"components/FormSidebar.md"}'),z={name:"components/FormSidebar.md"},j=Object.assign(z,{setup(x){const r=h(0),o=h(0),p=h(0),u=h(0),g=h(0),y=h(0),k=h(0);return(V,i)=>{const d=c("ShowCode");return b(),f("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[7]||(i[7]=m("",5)),s(d,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue1' />
</template>
  `.trim()},{demo:t(()=>[s(l,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=e=>r.value=e)},null,8,["modelValue"])]),_:1},8,["code"]),i[8]||(i[8]=a("h2",{id:"自定义滑块颜色",tabindex:"-1"},[n("自定义滑块颜色 "),a("a",{class:"header-anchor",href:"#自定义滑块颜色","aria-label":"Permalink to “自定义滑块颜色”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyihuakuaiyanse zi ding yi hua kuai yan se zdyhkys ")],-1)),i[9]||(i[9]=a("p",null,[n("使用"),a("code",null,"thumbColor"),n("属性可以自定义滑块的颜色。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyihuakuaideyanse。 shi yong shu xing ke yi zi ding yi hua kuai de yan se 。 sysxkyzdyhkdys。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue2' thumbColor='#ff0000' />
</template>
  `.trim()},{demo:t(()=>[s(l,{modelValue:o.value,"onUpdate:modelValue":i[1]||(i[1]=e=>o.value=e),thumbColor:"#ff0000"},null,8,["modelValue"])]),_:1},8,["code"]),i[10]||(i[10]=a("h2",{id:"自定义轨道颜色",tabindex:"-1"},[n("自定义轨道颜色 "),a("a",{class:"header-anchor",href:"#自定义轨道颜色","aria-label":"Permalink to “自定义轨道颜色”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiguidaoyanse zi ding yi gui dao yan se zdygdys ")],-1)),i[11]||(i[11]=a("p",null,[n("使用"),a("code",null,"trackColor"),n("属性可以自定义轨道的颜色。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyiguidaodeyanse。 shi yong shu xing ke yi zi ding yi gui dao de yan se 。 sysxkyzdygddys。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue3' trackColor='#00ff00' />
</template>
  `.trim()},{demo:t(()=>[s(l,{modelValue:p.value,"onUpdate:modelValue":i[2]||(i[2]=e=>p.value=e),trackColor:"#00ff00"},null,8,["modelValue"])]),_:1},8,["code"]),i[12]||(i[12]=a("h2",{id:"禁用状态",tabindex:"-1"},[n("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongzhuangtai jin yong zhuang tai jyzt ")],-1)),i[13]||(i[13]=a("p",null,[n("使用"),a("code",null,"disabled"),n("属性可以禁用滑动条。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyijinyonghuadongtiao。 shi yong shu xing ke yi jin yong hua dong tiao 。 sysxkyjyhdt。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue4' disabled />
</template>
  `.trim()},{demo:t(()=>[s(l,{modelValue:u.value,"onUpdate:modelValue":i[3]||(i[3]=e=>u.value=e),disabled:""},null,8,["modelValue"])]),_:1},8,["code"]),i[14]||(i[14]=a("h2",{id:"隐藏数值",tabindex:"-1"},[n("隐藏数值 "),a("a",{class:"header-anchor",href:"#隐藏数值","aria-label":"Permalink to “隐藏数值”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yincangshuzhi yin cang shu zhi ycsz ")],-1)),i[15]||(i[15]=a("p",null,[n("使用"),a("code",null,"noNum"),n("属性可以隐藏滑动条的数值显示。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyiyincanghuadongtiaodeshuzhixianshi。 shi yong shu xing ke yi yin cang hua dong tiao de shu zhi xian shi 。 sysxkyychdtdszxs。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue5' noNum />
</template>
  `.trim()},{demo:t(()=>[s(l,{modelValue:g.value,"onUpdate:modelValue":i[4]||(i[4]=e=>g.value=e),noNum:""},null,8,["modelValue"])]),_:1},8,["code"]),i[16]||(i[16]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[n("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichicun zi ding yi chi cun zdycc ")],-1)),i[17]||(i[17]=a("p",null,[n("使用"),a("code",null,"size"),n("属性可以自定义滑动条的尺寸。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyihuadongtiaodechicun。 shi yong shu xing ke yi zi ding yi hua dong tiao de chi cun 。 sysxkyzdyhdtdcc。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue6' size='500px' />
</template>
  `.trim()},{demo:t(()=>[s(l,{modelValue:y.value,"onUpdate:modelValue":i[5]||(i[5]=e=>y.value=e),size:"500px"},null,8,["modelValue"])]),_:1},8,["code"]),i[18]||(i[18]=a("h2",{id:"组合使用",tabindex:"-1"},[n("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[19]||(i[19]=a("p",null,[n("最后，实现个多种api组合使用实现个滑动条："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangehuadongtiao： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge hua dong tiao ： zh，sxgdzazhsysxghdt：")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSlidebar 
        v-model='sliderValue7' 
        size='400px'
        thumbColor='#8d4dd1'
        trackColor='#e6f3ff'
        noNum
    />
</template>
  `.trim()},{demo:t(()=>[s(l,{modelValue:k.value,"onUpdate:modelValue":i[6]||(i[6]=e=>k.value=e),size:"400px",thumbColor:"#8d4dd1",trackColor:"#e6f3ff",noNum:""},null,8,["modelValue"])]),_:1},8,["code"]),i[20]||(i[20]=m("",5))])}}});export{C as __pageData,j as default};

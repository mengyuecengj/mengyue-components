import{_ as l}from"./chunks/selectDate.vue_vue_type_script_setup_true_lang.BouwiF4r.js";import{I as x,o as z,c,a8 as f,J as n,w as d,j as i,a,A as r}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const b={style:{position:"relative","z-index":"1000"}},q={style:{position:"relative","z-index":"1000"}},v={style:{position:"relative","z-index":"1000"}},w={style:{position:"relative","z-index":"1000"}},D={style:{position:"relative","z-index":"1000"}},V={style:{position:"relative","z-index":"1000"}},A={style:{position:"relative","z-index":"1000","min-height":"300px"}},B={style:{position:"relative","z-index":"1000","min-height":"300px"}},T=JSON.parse('{"title":"SelectDate","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelectDate.md","filePath":"components/FormSelectDate.md"}'),S={name:"components/FormSelectDate.md"},Y=Object.assign(S,{setup(j){const h=r(""),p=r([]),o=r(""),u=r([]),y=r(""),g=r([]),k=r(""),m=r([]);return(P,e)=>{const t=x("ShowCode");return z(),c("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[e[8]||(e[8]=f("",5)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='singleDate' />
</template>
  `.trim()},{demo:d(()=>[i("div",b,[n(l,{modelValue:h.value,"onUpdate:modelValue":e[0]||(e[0]=s=>h.value=s)},null,8,["modelValue"])])]),_:1},8,["code"]),e[9]||(e[9]=i("h2",{id:"选择日期范围",tabindex:"-1"},[a("选择日期范围 "),i("a",{class:"header-anchor",href:"#选择日期范围","aria-label":"Permalink to “选择日期范围”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xuanzeriqifanwei xuan ze ri qi fan wei xzrqfw ")],-1)),e[10]||(e[10]=i("p",null,[a("使用"),i("code",null,"range"),a("属性可以启用日期范围选择模式。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyiqiyongriqifanweixuanzemoshi。 shi yong shu xing ke yi qi yong ri qi fan wei xuan ze mo shi 。 sysxkyqyrqfwxzms。")],-1)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='dateRange' range />
</template>
  `.trim()},{demo:d(()=>[i("div",q,[n(l,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=s=>p.value=s),range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[11]||(e[11]=i("h2",{id:"单月选择器",tabindex:"-1"},[a("单月选择器 "),i("a",{class:"header-anchor",href:"#单月选择器","aria-label":"Permalink to “单月选择器”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"danyuexuanzeqi dan yue xuan ze qi dyxzq ")],-1)),e[12]||(e[12]=i("p",null,[a("使用"),i("code",null,"month"),a("属性可以只选择月份。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizhixuanzeyuefen。 shi yong shu xing ke yi zhi xuan ze yue fen 。 sysxkyzxzyf。")],-1)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='singleMonth' month />
</template>
  `.trim()},{demo:d(()=>[i("div",v,[n(l,{modelValue:o.value,"onUpdate:modelValue":e[2]||(e[2]=s=>o.value=s),month:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[13]||(e[13]=i("h2",{id:"月份范围选择器",tabindex:"-1"},[a("月份范围选择器 "),i("a",{class:"header-anchor",href:"#月份范围选择器","aria-label":"Permalink to “月份范围选择器”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yuefenfanweixuanzeqi yue fen fan wei xuan ze qi yffwxzq ")],-1)),e[14]||(e[14]=i("p",null,[a("使用"),i("code",null,"range"),a("属性可以启用月份范围选择模式。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyiqiyongyuefenfanweixuanzemoshi。 shi yong shu xing ke yi qi yong yue fen fan wei xuan ze mo shi 。 sysxkyqyyffwxzms。")],-1)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='monthRange' range month />
</template>
  `.trim()},{demo:d(()=>[i("div",w,[n(l,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=s=>u.value=s),range:"",month:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[15]||(e[15]=i("h2",{id:"年份选择器",tabindex:"-1"},[a("年份选择器 "),i("a",{class:"header-anchor",href:"#年份选择器","aria-label":"Permalink to “年份选择器”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"nianfenxuanzeqi nian fen xuan ze qi nfxzq ")],-1)),e[16]||(e[16]=i("p",null,[a("使用"),i("code",null,"year"),a("属性可以只选择年份。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizhixuanzenianfen。 shi yong shu xing ke yi zhi xuan ze nian fen 。 sysxkyzxznf。")],-1)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='singleYear' year />
</template>
  `.trim()},{demo:d(()=>[i("div",D,[n(l,{modelValue:y.value,"onUpdate:modelValue":e[4]||(e[4]=s=>y.value=s),year:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[17]||(e[17]=i("h2",{id:"年份范围选择器",tabindex:"-1"},[a("年份范围选择器 "),i("a",{class:"header-anchor",href:"#年份范围选择器","aria-label":"Permalink to “年份范围选择器”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"nianfenfanweixuanzeqi nian fen fan wei xuan ze qi nffwxzq ")],-1)),e[18]||(e[18]=i("p",null,[a("使用"),i("code",null,"range"),a("属性可以启用年份范围选择模式。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyiqiyongnianfenfanweixuanzemoshi。 shi yong shu xing ke yi qi yong nian fen fan wei xuan ze mo shi 。 sysxkyqynffwxzms。")],-1)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='yearRange' year range />
</template>
  `.trim()},{demo:d(()=>[i("div",V,[n(l,{modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=s=>g.value=s),year:"",range:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[19]||(e[19]=i("h2",{id:"时间选择器",tabindex:"-1"},[a("时间选择器 "),i("a",{class:"header-anchor",href:"#时间选择器","aria-label":"Permalink to “时间选择器”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shijianxuanzeqi shi jian xuan ze qi sjxzq ")],-1)),e[20]||(e[20]=i("p",null,[a("使用"),i("code",null,"time"),a("属性可以启用时间选择。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyiqiyongshijianxuanze。 shi yong shu xing ke yi qi yong shi jian xuan ze 。 sysxkyqysjxz。")],-1)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date v-model='datetime' time />
</template>
  `.trim()},{demo:d(()=>[i("div",A,[n(l,{modelValue:k.value,"onUpdate:modelValue":e[6]||(e[6]=s=>k.value=s),time:""},null,8,["modelValue"])])]),_:1},8,["code"]),e[21]||(e[21]=i("h2",{id:"组合使用",tabindex:"-1"},[a("组合使用 "),i("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),e[22]||(e[22]=i("p",null,[a("最后，实现个多种api组合使用实现个日期时间范围选择器："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangeriqishijianfanweixuanzeqi： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge ri qi shi jian fan wei xuan ze qi ： zh，sxgdzazhsysxgrqsjfwxzq：")],-1)),n(t,{title:"代码演示",code:`
<template>
    <MYSelect-date 
        v-model='datetimeRange' 
        range 
        time 
        placeholder='选择日期时间范围'
    />
</template>
  `.trim()},{demo:d(()=>[i("div",B,[n(l,{modelValue:m.value,"onUpdate:modelValue":e[7]||(e[7]=s=>m.value=s),range:"",time:"",placeholder:"选择日期时间范围"},null,8,["modelValue"])])]),_:1},8,["code"]),e[23]||(e[23]=f("",5))])}}});export{T as __pageData,Y as default};

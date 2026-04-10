import{_ as d}from"./chunks/selectTime.vue_vue_type_script_setup_true_lang.D7WTOvUl.js";import{I as y,o as k,c as x,a8 as m,J as e,w as l,j as a,a as n,A as h}from"./chunks/framework.DvHWw5tv.js";const c={style:{position:"relative","z-index":"1000"}},f={style:{position:"relative","z-index":"1000"}},z={style:{position:"relative","z-index":"1000"}},b={style:{position:"relative","z-index":"1000"}},j={style:{position:"relative","z-index":"1000"}},V=JSON.parse('{"title":"SelectTime","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSelectTime.md","filePath":"components/FormSelectTime.md"}'),v={name:"components/FormSelectTime.md"},T=Object.assign(v,{setup(P){const o=h("00:00"),p=h("09:00"),r=h("00:00"),u=h([]),g=h([]);return(A,i)=>{const t=y("ShowCode");return k(),x("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[5]||(i[5]=m("",5)),e(t,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timePoint' />
</template>
  `.trim()},{demo:l(()=>[a("div",c,[e(d,{modelValue:o.value,"onUpdate:modelValue":i[0]||(i[0]=s=>o.value=s)},null,8,["modelValue"])])]),_:1},8,["code"]),i[6]||(i[6]=a("h2",{id:"选择时间范围",tabindex:"-1"},[n("选择时间范围 "),a("a",{class:"header-anchor",href:"#选择时间范围","aria-label":"Permalink to “选择时间范围”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xuanzeshijianfanwei xuan ze shi jian fan wei xzsjfw ")],-1)),i[7]||(i[7]=a("p",null,[n("使用"),a("code",null,"range"),n("属性可以启用时间范围选择模式。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyiqiyongshijianfanweixuanzemoshi。 shi yong shu xing ke yi qi yong shi jian fan wei xuan ze mo shi 。 sysxkyqysjfwxzms。")],-1)),e(t,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timeRange' range />
</template>
  `.trim()},{demo:l(()=>[a("div",f,[e(d,{modelValue:u.value,"onUpdate:modelValue":i[1]||(i[1]=s=>u.value=s),range:""},null,8,["modelValue"])])]),_:1},8,["code"]),i[8]||(i[8]=a("h2",{id:"自定义小时选项",tabindex:"-1"},[n("自定义小时选项 "),a("a",{class:"header-anchor",href:"#自定义小时选项","aria-label":"Permalink to “自定义小时选项”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyixiaoshixuanxiang zi ding yi xiao shi xuan xiang zdyxsxx ")],-1)),i[9]||(i[9]=a("p",null,[n("使用"),a("code",null,"hourOptions"),n("属性可以自定义小时选项。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyixiaoshixuanxiang。 shi yong shu xing ke yi zi ding yi xiao shi xuan xiang 。 sysxkyzdyxsxx。")],-1)),e(t,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timePoint2' :hourOptions='[9, 10, 11, 12, 13, 14, 15, 16, 17]' />
</template>
  `.trim()},{demo:l(()=>[a("div",z,[e(d,{modelValue:p.value,"onUpdate:modelValue":i[2]||(i[2]=s=>p.value=s),hourOptions:[9,10,11,12,13,14,15,16,17]},null,8,["modelValue"])])]),_:1},8,["code"]),i[10]||(i[10]=a("h2",{id:"自定义分钟选项",tabindex:"-1"},[n("自定义分钟选项 "),a("a",{class:"header-anchor",href:"#自定义分钟选项","aria-label":"Permalink to “自定义分钟选项”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyifenzhongxuanxiang zi ding yi fen zhong xuan xiang zdyfzxx ")],-1)),i[11]||(i[11]=a("p",null,[n("使用"),a("code",null,"minuteOptions"),n("属性可以自定义分钟选项。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyifenzhongxuanxiang。 shi yong shu xing ke yi zi ding yi fen zhong xuan xiang 。 sysxkyzdyfzxx。")],-1)),e(t,{title:"代码演示",code:`
<template>
    <MYSelect-time v-model='timePoint3' :minuteOptions='[0, 15, 30, 45]' />
</template>
  `.trim()},{demo:l(()=>[a("div",b,[e(d,{modelValue:r.value,"onUpdate:modelValue":i[3]||(i[3]=s=>r.value=s),minuteOptions:[0,15,30,45]},null,8,["modelValue"])])]),_:1},8,["code"]),i[12]||(i[12]=a("h2",{id:"组合使用",tabindex:"-1"},[n("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[13]||(i[13]=a("p",null,[n("最后，实现个多种api组合使用实现个时间选择器："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangeshijianxuanzeqi： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge shi jian xuan ze qi ： zh，sxgdzazhsysxgsjxzq：")],-1)),e(t,{title:"代码演示",code:`
<template>
    <MYSelect-time 
        v-model='timeRange2' 
        range 
        :hourOptions='[8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]'
        :minuteOptions='[0, 30]'
    />
</template>
  `.trim()},{demo:l(()=>[a("div",j,[e(d,{modelValue:g.value,"onUpdate:modelValue":i[4]||(i[4]=s=>g.value=s),range:"",hourOptions:[8,9,10,11,12,13,14,15,16,17,18],minuteOptions:[0,30]},null,8,["modelValue"])])]),_:1},8,["code"]),i[14]||(i[14]=m("",5))])}}});export{V as __pageData,T as default};

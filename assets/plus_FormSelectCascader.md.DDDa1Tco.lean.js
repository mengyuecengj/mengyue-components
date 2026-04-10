import{_ as t}from"./chunks/selectCascader.vue_vue_type_script_setup_true_lang.CYuS7vqk.js";import{I as z,o as j,c as f,a8 as o,J as s,w as d,j as a,a as e,A as p}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const v={style:{position:"relative","z-index":"1000"}},A={style:{position:"relative","z-index":"1000"}},B={style:{position:"relative","z-index":"1000"}},V={style:{position:"relative","z-index":"1000"}},D={style:{position:"relative","z-index":"1000"}},_={style:{position:"relative","z-index":"1000"}},w=JSON.parse('{"title":"SelectCascader","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FormSelectCascader.md","filePath":"plus/FormSelectCascader.md"}'),C={name:"plus/FormSelectCascader.md"},F=Object.assign(C,{setup(P){const r=p(""),u=p(""),g=p(""),k=p(""),c=p(""),y=p(""),b=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"},{value:"option3",label:"选项3"},{value:"option4",label:"选项4"}],m=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"}],x=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2",disabled:!0}],h=[{value:"group1",label:"分组1",children:[{value:"option1-1",label:"选项1-1"},{value:"option1-2",label:"选项1-2"}]},{value:"group2",label:"分组2",children:[{value:"option2-1",label:"选项2-1"},{value:"option2-2",label:"选项2-2",children:[{value:"option2-2-1",label:"选项2-2-1"},{value:"option2-2-2",label:"选项2-2-2"}]}]}];return(S,i)=>{const l=z("ShowCode");return j(),f("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[6]||(i[6]=o("",5)),s(l,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue1' :options='options1' placeholder='请选择' />
</template>
  `.trim()},{demo:d(()=>[a("div",v,[s(t,{modelValue:r.value,"onUpdate:modelValue":i[0]||(i[0]=n=>r.value=n),options:b,placeholder:"请选择"},null,8,["modelValue"])])]),_:1},8,["code"]),i[7]||(i[7]=o("",3)),s(l,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue2' :options='options2' placeholder='禁用状态' disabled />
</template>
  `.trim()},{demo:d(()=>[a("div",A,[s(t,{modelValue:u.value,"onUpdate:modelValue":i[1]||(i[1]=n=>u.value=n),options:m,placeholder:"禁用状态",disabled:""},null,8,["modelValue"])])]),_:1},8,["code"]),i[8]||(i[8]=a("h3",{id:"禁用某个选项",tabindex:"-1"},[e("禁用某个选项 "),a("a",{class:"header-anchor",href:"#禁用某个选项","aria-label":"Permalink to “禁用某个选项”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongmougexuanxiang jin yong mou ge xuan xiang jymgxx ")],-1)),i[9]||(i[9]=a("p",null,[e("使用"),a("code",null,"disabled"),e("属性可以禁用单个选项。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyijinyongdangexuanxiang。 shi yong shu xing ke yi jin yong dan ge xuan xiang 。 sysxkyjydgxx。")],-1)),s(l,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue3' :options='options3' placeholder='禁用某个选项' />
</template>
  `.trim()},{demo:d(()=>[a("div",B,[s(t,{modelValue:g.value,"onUpdate:modelValue":i[2]||(i[2]=n=>g.value=n),options:x,placeholder:"禁用某个选项"},null,8,["modelValue"])])]),_:1},8,["code"]),i[10]||(i[10]=a("h2",{id:"多级菜单",tabindex:"-1"},[e("多级菜单 "),a("a",{class:"header-anchor",href:"#多级菜单","aria-label":"Permalink to “多级菜单”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duojicaidan duo ji cai dan djcd ")],-1)),i[11]||(i[11]=a("p",null,[e("多级菜单，使用"),a("code",null,"options"),e("属性传递多级数据。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duojicaidan，shiyongshuxingchuandiduojishuju。 duo ji cai dan ， shi yong shu xing chuan di duo ji shu ju 。 djcd，sysxcddjsj。")],-1)),s(l,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue4' :options='options4' placeholder='多级菜单' />
</template>
  `.trim()},{demo:d(()=>[a("div",V,[s(t,{modelValue:k.value,"onUpdate:modelValue":i[3]||(i[3]=n=>k.value=n),options:h,placeholder:"多级菜单"},null,8,["modelValue"])])]),_:1},8,["code"]),i[12]||(i[12]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[e("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichicun zi ding yi chi cun zdycc ")],-1)),i[13]||(i[13]=a("p",null,[e("使用"),a("code",null,"width"),e("和"),a("code",null,"height"),e("属性可以自定义选择器的宽度和高度。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongheshuxingkeyizidingyixuanzeqidekuanduhegaodu。 shi yong he shu xing ke yi zi ding yi xuan ze qi de kuan du he gao du 。 syhsxkyzdyxzqdkdhgd。")],-1)),s(l,{title:"代码演示",code:`
<template>
    <MYSelect-cascader v-model='selectedValue5' :options='options4' placeholder='自定义尺寸' height='50px' width='500px' />
</template>
  `.trim()},{demo:d(()=>[a("div",D,[s(t,{modelValue:c.value,"onUpdate:modelValue":i[4]||(i[4]=n=>c.value=n),options:h,placeholder:"自定义尺寸",height:"50px",width:"500px"},null,8,["modelValue"])])]),_:1},8,["code"]),i[14]||(i[14]=a("h2",{id:"组合使用",tabindex:"-1"},[e("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[15]||(i[15]=a("p",null,[e("最后，实现个多种api组合使用实现个级联选择器："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangejilianxuanzeqi： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge ji lian xuan ze qi ： zh，sxgdzazhsysxgjlxzq：")],-1)),s(l,{title:"代码演示",code:`
<template>
    <MYSelect-cascader 
        v-model='selectedValue6' 
        :options='options4' 
        placeholder='组合使用示例'
        height='45px'
        width='400px'
    />
</template>
  `.trim()},{demo:d(()=>[a("div",_,[s(t,{modelValue:y.value,"onUpdate:modelValue":i[5]||(i[5]=n=>y.value=n),options:h,placeholder:"组合使用示例",height:"45px",width:"400px"},null,8,["modelValue"])])]),_:1},8,["code"]),i[16]||(i[16]=o("",5))])}}});export{w as __pageData,F as default};

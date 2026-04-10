import{a as s,_ as p}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import{y as C,I as j,o as v,c as A,a8 as o,J as i,w as n,j as t,a as e,A as d,R as M}from"./chunks/framework.DvHWw5tv.js";const P=JSON.parse('{"title":"Checkbox","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FormCheckbox.md","filePath":"plus/FormCheckbox.md"}'),Y={name:"plus/FormCheckbox.md"},S=Object.assign(Y,{setup(B){const r=d(!0),u=d(["option1"]),k=d([]),g=d(["red"]),b=d(["mon"]),c=d([]),y=d(["default"]),x=d(["option1"]),f=d(["1"]),m=d(["default"]),z=()=>{M(()=>{})};return C([r,u,k,g,b,c,y,x,f,m],()=>{z()}),(V,a)=>{const h=j("ShowCode");return v(),A("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[18]||(a[18]=o("",6)),i(h,{title:"代码演示",code:`
<template>
  <MYCheckbox v-model='singleChecked'>单个复选框</MYCheckbox>
</template>
  `.trim()},{demo:n(()=>[t("div",null,[i(s,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=l=>r.value=l)},{default:n(()=>[...a[5]||(a[5]=[e("单个复选框",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),a[19]||(a[19]=t("h3",{id:"复选框组",tabindex:"-1"},[e("复选框组 "),t("a",{class:"header-anchor",href:"#复选框组","aria-label":"Permalink to “复选框组”"},"​"),t("span",{class:"pagefind-pinyin","aria-hidden":"true"},"fuxuankuangzu fu xuan kuang zu fxkz ")],-1)),a[20]||(a[20]=t("p",null,[e("使用 "),t("code",null,"<MYCheckbox-group></MYCheckbox-group>"),e(" 可以将复选框分组。"),t("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong keyijiangfuxuankuangfenzu。 shi yong ke yi jiang fu xuan kuang fen zu 。 sy kyjfxkfz。")],-1)),i(h,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues1'>
    <MYCheckbox value='option1'>选项1</MYCheckbox>
    <MYCheckbox value='option2'>选项2</MYCheckbox>
    <MYCheckbox value='option3'>选项3</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:n(()=>[i(p,{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=l=>u.value=l)},{default:n(()=>[i(s,{value:"option1"},{default:n(()=>[...a[6]||(a[6]=[e("选项1",-1)])]),_:1}),i(s,{value:"option2"},{default:n(()=>[...a[7]||(a[7]=[e("选项2",-1)])]),_:1}),i(s,{value:"option3"},{default:n(()=>[...a[8]||(a[8]=[e("选项3",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[21]||(a[21]=o("",3)),i(h,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues2' direction='vertical'>
    <MYCheckbox value='apple'>苹果</MYCheckbox>
    <MYCheckbox value='banana'>香蕉</MYCheckbox>
    <MYCheckbox value='orange'>橙子</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:n(()=>[i(p,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=l=>k.value=l),direction:"vertical"},{default:n(()=>[i(s,{value:"apple"},{default:n(()=>[...a[9]||(a[9]=[e("苹果",-1)])]),_:1}),i(s,{value:"banana"},{default:n(()=>[...a[10]||(a[10]=[e("香蕉",-1)])]),_:1}),i(s,{value:"orange"},{default:n(()=>[...a[11]||(a[11]=[e("橙子",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[22]||(a[22]=o("",3)),i(h,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues3' disabled>
    <MYCheckbox value='red'>红色</MYCheckbox>
    <MYCheckbox value='green'>绿色</MYCheckbox>
    <MYCheckbox value='blue'>蓝色</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:n(()=>[i(p,{modelValue:g.value,"onUpdate:modelValue":a[3]||(a[3]=l=>g.value=l),disabled:""},{default:n(()=>[i(s,{value:"red"},{default:n(()=>[...a[12]||(a[12]=[e("红色",-1)])]),_:1}),i(s,{value:"green"},{default:n(()=>[...a[13]||(a[13]=[e("绿色",-1)])]),_:1}),i(s,{value:"blue"},{default:n(()=>[...a[14]||(a[14]=[e("蓝色",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[23]||(a[23]=t("h2",{id:"自定义间距",tabindex:"-1"},[e("自定义间距 "),t("a",{class:"header-anchor",href:"#自定义间距","aria-label":"Permalink to “自定义间距”"},"​"),t("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyijianju zi ding yi jian ju zdyjj ")],-1)),a[24]||(a[24]=t("p",null,[e("使用 "),t("code",null,"gap"),e(" 属性控制复选框之间的间距。"),t("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingkongzhifuxuankuangzhijiandejianju。 shi yong shu xing kong zhi fu xuan kuang zhi jian de jian ju 。 sy sxkzfxkzjdjj。")],-1)),i(h,{title:"代码演示",code:`
<template>
  <MYCheckbox-group v-model='selectedValues5' gap='72px'>
    <MYCheckbox value='cat'>猫</MYCheckbox>
    <MYCheckbox value='dog'>狗</MYCheckbox>
    <MYCheckbox value='bird'>鸟</MYCheckbox>
  </MYCheckbox-group>
</template>
  `.trim()},{demo:n(()=>[i(p,{modelValue:c.value,"onUpdate:modelValue":a[4]||(a[4]=l=>c.value=l),gap:"72px"},{default:n(()=>[i(s,{value:"cat"},{default:n(()=>[...a[15]||(a[15]=[e("猫",-1)])]),_:1}),i(s,{value:"dog"},{default:n(()=>[...a[16]||(a[16]=[e("狗",-1)])]),_:1}),i(s,{value:"bird"},{default:n(()=>[...a[17]||(a[17]=[e("鸟",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["code"]),a[25]||(a[25]=o("",7))])}}});export{P as __pageData,S as default};

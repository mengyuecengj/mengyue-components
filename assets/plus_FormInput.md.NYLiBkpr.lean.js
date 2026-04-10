import{_ as l}from"./chunks/input.vue_vue_type_script_setup_true_lang.Qz_sZHj_.js";import{y as x,I as z,o as w,c as V,a8 as r,J as s,w as p,j as i,a as n,R as A,A as h}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const T=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FormInput.md","filePath":"plus/FormInput.md"}'),B={name:"plus/FormInput.md"},_=Object.assign(B,{setup(D){const o=h(""),u=h(""),g=h(""),k=h(""),y=h(""),c=h(""),m=h(""),b=h(""),f=h(""),t=()=>{A(()=>{})};return x([o,u,g,k,y,c,m,b,f],()=>{t()}),(C,a)=>{const d=z("ShowCode");return w(),V("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[9]||(a[9]=r("",5)),s(d,{title:"代码演示",code:`
<template>
  <MYInput v-model='inputValue' placeholder='请输入内容' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:o.value,"onUpdate:modelValue":[a[0]||(a[0]=e=>o.value=e),t],placeholder:"请输入内容"},null,8,["modelValue"])]),_:1},8,["code"]),a[10]||(a[10]=i("h2",{id:"输入类型",tabindex:"-1"},[n("输入类型 "),i("a",{class:"header-anchor",href:"#输入类型","aria-label":"Permalink to “输入类型”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shuruleixing shu ru lei xing srlx ")],-1)),a[11]||(a[11]=i("p",null,[n("通过 "),i("code",null,"type"),n(" 属性可以设置输入框的类型，如 "),i("code",null,"text"),n("、"),i("code",null,"password"),n(" 等。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguo shuxingkeyishezhishurukuangdeleixing，ru 、 deng。 tong guo shu xing ke yi she zhi shu ru kuang de lei xing ， ru 、 deng 。 tg sxkyszsrkdlx，r d。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput type='password' placeholder='请输入密码' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:p(()=>[s(l,{type:"password",placeholder:"请输入密码","onUpdate:modelValue":t})]),_:1},8,["code"]),a[12]||(a[12]=i("h2",{id:"尺寸控制",tabindex:"-1"},[n("尺寸控制 "),i("a",{class:"header-anchor",href:"#尺寸控制","aria-label":"Permalink to “尺寸控制”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"chicunkongzhi chi cun kong zhi cckz ")],-1)),a[13]||(a[13]=i("p",null,[n("使用 "),i("code",null,"width"),n(" 和 "),i("code",null,"height"),n(" 属性可以自定义输入框的尺寸。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong he shuxingkeyizidingyishurukuangdechicun。 shi yong he shu xing ke yi zi ding yi shu ru kuang de chi cun 。 sy h sxkyzdysrkdcc。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput width='200px' height='40px' placeholder='自定义尺寸' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:p(()=>[s(l,{width:"200px",height:"40px",placeholder:"自定义尺寸","onUpdate:modelValue":t})]),_:1},8,["code"]),a[14]||(a[14]=r("",3)),s(d,{title:"代码演示",code:`
<template>
  <MYInput disabled placeholder='禁用状态' />
</template>
  `.trim()},{demo:p(()=>[s(l,{disabled:"",placeholder:"禁用状态"})]),_:1},8,["code"]),a[15]||(a[15]=i("h3",{id:"clearable",tabindex:"-1"},[n("clearable "),i("a",{class:"header-anchor",href:"#clearable","aria-label":"Permalink to “clearable”"},"​")],-1)),a[16]||(a[16]=i("p",null,[n("显示清除按钮："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xianshiqingchuanniu： xian shi qing chu an niu ： xsqcan：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <div>
    <MYInput 
      v-model='clearableValue'
      clearable 
      placeholder='可清除内容' 
    />
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const clearableValue = ref('')
<\/script>
  `.trim()},{demo:p(()=>[i("div",null,[s(l,{modelValue:g.value,"onUpdate:modelValue":[a[1]||(a[1]=e=>g.value=e),t],clearable:"",placeholder:"可清除内容"},null,8,["modelValue"])])]),_:1},8,["code"]),a[17]||(a[17]=i("h3",{id:"showpassword",tabindex:"-1"},[n("showPassword "),i("a",{class:"header-anchor",href:"#showpassword","aria-label":"Permalink to “showPassword”"},"​")],-1)),a[18]||(a[18]=i("p",null,[n("切换密码可见性："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"qiehuanmimakejianxing： qie huan mi ma ke jian xing ： qhmmkjx：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='passwordValue' 
    type='password' 
    showPassword 
    placeholder='切换密码可见性' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:u.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>u.value=e),t],type:"password",showPassword:"",placeholder:"切换密码可见性"},null,8,["modelValue"])]),_:1},8,["code"]),a[19]||(a[19]=r("",3)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='limitValue' 
    maxlength='10' 
    placeholder='最多输入10个字符' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:k.value,"onUpdate:modelValue":[a[3]||(a[3]=e=>k.value=e),t],maxlength:"10",placeholder:"最多输入10个字符"},null,8,["modelValue"])]),_:1},8,["code"]),a[20]||(a[20]=i("h3",{id:"字数统计",tabindex:"-1"},[n("字数统计 "),i("a",{class:"header-anchor",href:"#字数统计","aria-label":"Permalink to “字数统计”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zishutongji zi shu tong ji zstj ")],-1)),a[21]||(a[21]=i("p",null,[n("使用 "),i("code",null,"wordLimit"),n(" 显示字数统计："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong xianshizishutongji： shi yong xian shi zi shu tong ji ： sy xszstj：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <div>
    <MYInput 
      v-model='wordLimitValue' 
      maxlength='20' 
      wordLimit 
      placeholder='显示字数统计' 
    />
  </div>
</template>
  `.trim()},{demo:p(()=>[i("div",null,[s(l,{modelValue:y.value,"onUpdate:modelValue":[a[4]||(a[4]=e=>y.value=e),t],maxlength:"20",wordLimit:"",placeholder:"显示字数统计"},null,8,["modelValue"])])]),_:1},8,["code"]),a[22]||(a[22]=r("",3)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='textColorValue' 
    textColor='#ff0000' 
    placeholder='红色文本' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:c.value,"onUpdate:modelValue":[a[5]||(a[5]=e=>c.value=e),t],textColor:"#ff0000",placeholder:"红色文本"},null,8,["modelValue"])]),_:1},8,["code"]),a[23]||(a[23]=i("h3",{id:"placeholdercolor",tabindex:"-1"},[n("placeholderColor "),i("a",{class:"header-anchor",href:"#placeholdercolor","aria-label":"Permalink to “placeholderColor”"},"​")],-1)),a[24]||(a[24]=i("p",null,[n("自定义占位符颜色："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyizhanweifuyanse： zi ding yi zhan wei fu yan se ： zdyzwfys：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='placeholderColorValue' 
    placeholderColor='#409EFF' 
    placeholder='蓝色占位符' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:m.value,"onUpdate:modelValue":[a[6]||(a[6]=e=>m.value=e),t],placeholderColor:"#409EFF",placeholder:"蓝色占位符"},null,8,["modelValue"])]),_:1},8,["code"]),a[25]||(a[25]=i("h2",{id:"多行文本",tabindex:"-1"},[n("多行文本 "),i("a",{class:"header-anchor",href:"#多行文本","aria-label":"Permalink to “多行文本”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duohangwenben duo hang wen ben dhwb ")],-1)),a[26]||(a[26]=i("p",null,[n("使用 "),i("code",null,'tag="textarea"'),n(" 实现多行文本输入："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shixianduohangwenbenshuru： shi yong shi xian duo hang wen ben shu ru ： sy sxdhwbsr：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='textareaValue' 
    tag='textarea' 
    width='300px' 
    height='100px' 
    placeholder='多行文本输入框' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:b.value,"onUpdate:modelValue":[a[7]||(a[7]=e=>b.value=e),t],tag:"textarea",width:"300px",height:"100px",placeholder:"多行文本输入框"},null,8,["modelValue"])]),_:1},8,["code"]),a[27]||(a[27]=i("h2",{id:"组合使用",tabindex:"-1"},[n("组合使用 "),i("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),a[28]||(a[28]=i("p",null,[n("多种属性组合使用："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duozhongshuxingzuheshiyong： duo zhong shu xing zu he shi yong ： dzsxzhsy：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='combinedValue'
    type='password'
    showPassword
    clearable
    maxlength='15'
    wordLimit
    width='250px'
    textColor='#2c2'
    placeholder='组合使用示例'
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:f.value,"onUpdate:modelValue":[a[8]||(a[8]=e=>f.value=e),t],type:"password",showPassword:"",clearable:"",maxlength:"15",wordLimit:"",width:"250px",textColor:"#2c2",placeholder:"组合使用示例"},null,8,["modelValue"])]),_:1},8,["code"]),a[29]||(a[29]=r("",5))])}}});export{T as __pageData,_ as default};

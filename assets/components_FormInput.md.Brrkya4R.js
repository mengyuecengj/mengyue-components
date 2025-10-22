import{_ as n}from"./chunks/input.vue_vue_type_script_setup_true_lang.DN72wa1b.js";import{x as p,z as V,I as B,c as f,o as A,ah as x,J as s,j as e,w as r,a as t,R as w}from"./chunks/framework.DHTvsukI.js";import"./chunks/useClassComputed.CEqmS9F9.js";import"./chunks/useStyleComputed.BAeCZWeL.js";const U=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormInput.md","filePath":"components/FormInput.md"}'),D={name:"components/FormInput.md"},M=Object.assign(D,{setup(v){const o=p(""),h=p(""),k=p(""),m=p(""),u=p(""),g=p(""),b=p(""),c=p(""),y=p(""),i=()=>{w(()=>{})};return V([o,h,k,m,u,g,b,c,y],()=>{i()}),(C,a)=>{const d=B("ShowCode");return A(),f("div",null,[a[9]||(a[9]=x('<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to “Input”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>input 输入框组件，用于用户输入文本内容。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYInput&gt;&lt;/MYInput&gt;</code> 来实现一个输入框。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a></h2><p>使用 <code>modelValue</code> 绑定输入框的值。</p>',5)),s(d,{title:"代码演示",code:`
<template>
  <MYInput v-model='inputValue' placeholder='请输入内容' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:r(()=>[s(n,{modelValue:o.value,"onUpdate:modelValue":[a[0]||(a[0]=l=>o.value=l),i],placeholder:"请输入内容"},null,8,["modelValue"])]),_:1},8,["code"]),a[10]||(a[10]=e("h2",{id:"输入类型",tabindex:"-1"},[t("输入类型 "),e("a",{class:"header-anchor",href:"#输入类型","aria-label":"Permalink to “输入类型”"},"​")],-1)),a[11]||(a[11]=e("p",null,[t("通过 "),e("code",null,"type"),t(" 属性可以设置输入框的类型，如 "),e("code",null,"text"),t("、"),e("code",null,"password"),t(" 等。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput type='password' placeholder='请输入密码' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:r(()=>[s(n,{type:"password",placeholder:"请输入密码","onUpdate:modelValue":i})]),_:1},8,["code"]),a[12]||(a[12]=e("h2",{id:"尺寸控制",tabindex:"-1"},[t("尺寸控制 "),e("a",{class:"header-anchor",href:"#尺寸控制","aria-label":"Permalink to “尺寸控制”"},"​")],-1)),a[13]||(a[13]=e("p",null,[t("使用 "),e("code",null,"width"),t(" 和 "),e("code",null,"height"),t(" 属性可以自定义输入框的尺寸。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput width='200px' height='40px' placeholder='自定义尺寸' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:r(()=>[s(n,{width:"200px",height:"40px",placeholder:"自定义尺寸","onUpdate:modelValue":i})]),_:1},8,["code"]),a[14]||(a[14]=e("h2",{id:"状态控制",tabindex:"-1"},[t("状态控制 "),e("a",{class:"header-anchor",href:"#状态控制","aria-label":"Permalink to “状态控制”"},"​")],-1)),a[15]||(a[15]=e("h3",{id:"disabled",tabindex:"-1"},[t("disabled "),e("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),a[16]||(a[16]=e("p",null,"禁用输入框：",-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput disabled placeholder='禁用状态' />
</template>
  `.trim()},{demo:r(()=>[s(n,{disabled:"",placeholder:"禁用状态"})]),_:1},8,["code"]),a[17]||(a[17]=e("h3",{id:"clearable",tabindex:"-1"},[t("clearable "),e("a",{class:"header-anchor",href:"#clearable","aria-label":"Permalink to “clearable”"},"​")],-1)),a[18]||(a[18]=e("p",null,"显示清除按钮：",-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[e("div",null,[s(n,{modelValue:k.value,"onUpdate:modelValue":[a[1]||(a[1]=l=>k.value=l),i],clearable:"",placeholder:"可清除内容"},null,8,["modelValue"])])]),_:1},8,["code"]),a[19]||(a[19]=e("h3",{id:"showpassword",tabindex:"-1"},[t("showPassword "),e("a",{class:"header-anchor",href:"#showpassword","aria-label":"Permalink to “showPassword”"},"​")],-1)),a[20]||(a[20]=e("p",null,"切换密码可见性：",-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='passwordValue' 
    type='password' 
    showPassword 
    placeholder='切换密码可见性' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:r(()=>[s(n,{modelValue:h.value,"onUpdate:modelValue":[a[2]||(a[2]=l=>h.value=l),i],type:"password",showPassword:"",placeholder:"切换密码可见性"},null,8,["modelValue"])]),_:1},8,["code"]),a[21]||(a[21]=e("h2",{id:"输入限制",tabindex:"-1"},[t("输入限制 "),e("a",{class:"header-anchor",href:"#输入限制","aria-label":"Permalink to “输入限制”"},"​")],-1)),a[22]||(a[22]=e("h3",{id:"长度限制",tabindex:"-1"},[t("长度限制 "),e("a",{class:"header-anchor",href:"#长度限制","aria-label":"Permalink to “长度限制”"},"​")],-1)),a[23]||(a[23]=e("p",null,[t("使用 "),e("code",null,"minlength"),t(" 和 "),e("code",null,"maxlength"),t(" 限制输入长度：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='limitValue' 
    maxlength='10' 
    placeholder='最多输入10个字符' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:r(()=>[s(n,{modelValue:m.value,"onUpdate:modelValue":[a[3]||(a[3]=l=>m.value=l),i],maxlength:"10",placeholder:"最多输入10个字符"},null,8,["modelValue"])]),_:1},8,["code"]),a[24]||(a[24]=e("h3",{id:"字数统计",tabindex:"-1"},[t("字数统计 "),e("a",{class:"header-anchor",href:"#字数统计","aria-label":"Permalink to “字数统计”"},"​")],-1)),a[25]||(a[25]=e("p",null,[t("使用 "),e("code",null,"wordLimit"),t(" 显示字数统计：")],-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[e("div",null,[s(n,{modelValue:u.value,"onUpdate:modelValue":[a[4]||(a[4]=l=>u.value=l),i],maxlength:"20",wordLimit:"",placeholder:"显示字数统计"},null,8,["modelValue"])])]),_:1},8,["code"]),a[26]||(a[26]=e("h2",{id:"自定义颜色",tabindex:"-1"},[t("自定义颜色 "),e("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),a[27]||(a[27]=e("h3",{id:"textcolor",tabindex:"-1"},[t("textColor "),e("a",{class:"header-anchor",href:"#textcolor","aria-label":"Permalink to “textColor”"},"​")],-1)),a[28]||(a[28]=e("p",null,"自定义文本颜色：",-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='textColorValue' 
    textColor='#ff0000' 
    placeholder='红色文本' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:r(()=>[s(n,{modelValue:g.value,"onUpdate:modelValue":[a[5]||(a[5]=l=>g.value=l),i],textColor:"#ff0000",placeholder:"红色文本"},null,8,["modelValue"])]),_:1},8,["code"]),a[29]||(a[29]=e("h3",{id:"placeholdercolor",tabindex:"-1"},[t("placeholderColor "),e("a",{class:"header-anchor",href:"#placeholdercolor","aria-label":"Permalink to “placeholderColor”"},"​")],-1)),a[30]||(a[30]=e("p",null,"自定义占位符颜色：",-1)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='placeholderColorValue' 
    placeholderColor='#409EFF' 
    placeholder='蓝色占位符' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:r(()=>[s(n,{modelValue:b.value,"onUpdate:modelValue":[a[6]||(a[6]=l=>b.value=l),i],placeholderColor:"#409EFF",placeholder:"蓝色占位符"},null,8,["modelValue"])]),_:1},8,["code"]),a[31]||(a[31]=e("h2",{id:"多行文本",tabindex:"-1"},[t("多行文本 "),e("a",{class:"header-anchor",href:"#多行文本","aria-label":"Permalink to “多行文本”"},"​")],-1)),a[32]||(a[32]=e("p",null,[t("使用 "),e("code",null,'tag="textarea"'),t(" 实现多行文本输入：")],-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[s(n,{modelValue:c.value,"onUpdate:modelValue":[a[7]||(a[7]=l=>c.value=l),i],tag:"textarea",width:"300px",height:"100px",placeholder:"多行文本输入框"},null,8,["modelValue"])]),_:1},8,["code"]),a[33]||(a[33]=e("h2",{id:"组合使用",tabindex:"-1"},[t("组合使用 "),e("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),a[34]||(a[34]=e("p",null,"多种属性组合使用：",-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:r(()=>[s(n,{modelValue:y.value,"onUpdate:modelValue":[a[8]||(a[8]=l=>y.value=l),i],type:"password",showPassword:"",clearable:"",maxlength:"15",wordLimit:"",width:"250px",textColor:"#2c2",placeholder:"组合使用示例"},null,8,["modelValue"])]),_:1},8,["code"]),a[35]||(a[35]=x(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>输入框类型</td><td>string</td><td><code>text</code>/<code>password</code>等</td><td><code>text</code></td></tr><tr><td>tag</td><td>标签类型</td><td>string</td><td><code>input</code>/<code>textarea</code>等</td><td><code>input</code></td></tr><tr><td>width</td><td>宽度</td><td>string | number</td><td>—</td><td><code>100%</code></td></tr><tr><td>height</td><td>高度</td><td>string | number</td><td>—</td><td><code>30px</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>clearable</td><td>是否可清除</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>showPassword</td><td>是否显示密码切换</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>modelValue</td><td>绑定值</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>minlength</td><td>最小输入长度</td><td>number</td><td>—</td><td>—</td></tr><tr><td>maxlength</td><td>最大输入长度</td><td>number | string</td><td>—</td><td>—</td></tr><tr><td>wordLimit</td><td>是否显示字数统计</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>textColor</td><td>文本颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>placeholderColor</td><td>占位符颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> InputProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  type</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  tag</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  disabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  clearable</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  showPassword</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  placeholder</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  modelValue</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  minlength</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  maxlength</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  wordLimit</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  textColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  placeholderColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,5))])}}});export{U as __pageData,M as default};

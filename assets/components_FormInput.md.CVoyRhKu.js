import{_ as l}from"./chunks/input.vue_vue_type_script_setup_true_lang.Qz_sZHj_.js";import{y as x,I as z,o as w,c as V,a8 as r,J as s,w as p,j as i,a as n,R as A,A as h}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const T=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormInput.md","filePath":"components/FormInput.md"}'),B={name:"components/FormInput.md"},_=Object.assign(B,{setup(D){const o=h(""),u=h(""),g=h(""),k=h(""),y=h(""),c=h(""),m=h(""),b=h(""),f=h(""),t=()=>{A(()=>{})};return x([o,u,g,k,y,c,m,b,f],()=>{t()}),(C,a)=>{const d=z("ShowCode");return w(),V("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[9]||(a[9]=r('<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to “Input”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>input 输入框组件，用于用户输入文本内容。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYInput&gt;&lt;/MYInput&gt;</code> 来实现一个输入框。<span class="pagefind-pinyin" aria-hidden="true">input shurukuangzujian，yongyuyonghushuruwenbenneirong。mengyue-components jinhanglefengzhuangbingjinhangle vitest ceshi。keyishiyong laishixianyigeshurukuang。 input shu ru kuang zu jian ， yong yu yong hu shu ru wen ben nei rong 。mengyue-components jin hang le feng zhuang bing jin hang le vitest ce shi 。 ke yi shi yong lai shi xian yi ge shu ru kuang 。 isrkzj，yyyhsrwbnr。jhlfzbjhl cs。kysy lsxygsrk。</span></p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichuyongfa ji chu yong fa jcyf </span></h2><p>使用 <code>modelValue</code> 绑定输入框的值。<span class="pagefind-pinyin" aria-hidden="true">shiyong bangdingshurukuangdezhi。 shi yong bang ding shu ru kuang de zhi 。 sy bdsrkdz。</span></p>',5)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:p(()=>[s(l,{width:"200px",height:"40px",placeholder:"自定义尺寸","onUpdate:modelValue":t})]),_:1},8,["code"]),a[14]||(a[14]=r('<h2 id="状态控制" tabindex="-1">状态控制 <a class="header-anchor" href="#状态控制" aria-label="Permalink to “状态控制”">​</a><span class="pagefind-pinyin" aria-hidden="true">zhuangtaikongzhi zhuang tai kong zhi ztkz </span></h2><h3 id="disabled" tabindex="-1">disabled <a class="header-anchor" href="#disabled" aria-label="Permalink to “disabled”">​</a></h3><p>禁用输入框：<span class="pagefind-pinyin" aria-hidden="true">jinyongshurukuang： jin yong shu ru kuang ： jysrk：</span></p>',3)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:p(()=>[s(l,{modelValue:u.value,"onUpdate:modelValue":[a[2]||(a[2]=e=>u.value=e),t],type:"password",showPassword:"",placeholder:"切换密码可见性"},null,8,["modelValue"])]),_:1},8,["code"]),a[19]||(a[19]=r('<h2 id="输入限制" tabindex="-1">输入限制 <a class="header-anchor" href="#输入限制" aria-label="Permalink to “输入限制”">​</a><span class="pagefind-pinyin" aria-hidden="true">shuruxianzhi shu ru xian zhi srxz </span></h2><h3 id="长度限制" tabindex="-1">长度限制 <a class="header-anchor" href="#长度限制" aria-label="Permalink to “长度限制”">​</a><span class="pagefind-pinyin" aria-hidden="true">changduxianzhi chang du xian zhi cdxz </span></h3><p>使用 <code>minLength</code> 和 <code>maxLength</code> 限制输入长度：<span class="pagefind-pinyin" aria-hidden="true">shiyong he xianzhishuruchangdu： shi yong he xian zhi shu ru chang du ： sy h xzsrcd：</span></p>',3)),s(d,{title:"代码演示",code:`
<template>
  <MYInput 
    v-model='limitValue' 
    maxLength='10' 
    placeholder='最多输入10个字符' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:k.value,"onUpdate:modelValue":[a[3]||(a[3]=e=>k.value=e),t],maxlength:"10",placeholder:"最多输入10个字符"},null,8,["modelValue"])]),_:1},8,["code"]),a[20]||(a[20]=i("h3",{id:"字数统计",tabindex:"-1"},[n("字数统计 "),i("a",{class:"header-anchor",href:"#字数统计","aria-label":"Permalink to “字数统计”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zishutongji zi shu tong ji zstj ")],-1)),a[21]||(a[21]=i("p",null,[n("使用 "),i("code",null,"wordLimit"),n(" 显示字数统计："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong xianshizishutongji： shi yong xian shi zi shu tong ji ： sy xszstj：")],-1)),s(d,{title:"代码演示",code:`
<template>
  <div>
    <MYInput 
      v-model='wordLimitValue' 
      maxLength='20' 
      wordLimit 
      placeholder='显示字数统计' 
    />
  </div>
</template>
  `.trim()},{demo:p(()=>[i("div",null,[s(l,{modelValue:y.value,"onUpdate:modelValue":[a[4]||(a[4]=e=>y.value=e),t],maxLength:"20",wordLimit:"",placeholder:"显示字数统计"},null,8,["modelValue"])])]),_:1},8,["code"]),a[22]||(a[22]=r('<h2 id="自定义颜色" tabindex="-1">自定义颜色 <a class="header-anchor" href="#自定义颜色" aria-label="Permalink to “自定义颜色”">​</a><span class="pagefind-pinyin" aria-hidden="true">zidingyiyanse zi ding yi yan se zdyys </span></h2><h3 id="textcolor" tabindex="-1">textColor <a class="header-anchor" href="#textcolor" aria-label="Permalink to “textColor”">​</a></h3><p>自定义文本颜色：<span class="pagefind-pinyin" aria-hidden="true">zidingyiwenbenyanse： zi ding yi wen ben yan se ： zdywbys：</span></p>',3)),s(d,{title:"代码演示",code:`
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
    maxLength='15'
    wordLimit
    width='250px'
    textColor='#2c2'
    placeholder='组合使用示例'
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:p(()=>[s(l,{modelValue:f.value,"onUpdate:modelValue":[a[8]||(a[8]=e=>f.value=e),t],type:"password",showPassword:"",clearable:"",maxLength:"15",wordLimit:"",width:"250px",textColor:"#2c2",placeholder:"组合使用示例"},null,8,["modelValue"])]),_:1},8,["code"]),a[29]||(a[29]=r(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>type</td><td>输入框类型<span class="pagefind-pinyin" aria-hidden="true">shurukuangleixing shu ru kuang lei xing srklx</span></td><td>string</td><td><code>text</code>/<code>password</code>等<span class="pagefind-pinyin" aria-hidden="true">/deng / deng /d</span></td><td><code>text</code></td></tr><tr><td>tag</td><td>标签类型<span class="pagefind-pinyin" aria-hidden="true">biaoqianleixing biao qian lei xing bqlx</span></td><td>string</td><td><code>input</code>/<code>textarea</code>等<span class="pagefind-pinyin" aria-hidden="true">/deng / deng /d</span></td><td><code>input</code></td></tr><tr><td>width</td><td>宽度<span class="pagefind-pinyin" aria-hidden="true">kuandu kuan du kd</span></td><td>string | number</td><td>—</td><td><code>100%</code></td></tr><tr><td>height</td><td>高度<span class="pagefind-pinyin" aria-hidden="true">gaodu gao du gd</span></td><td>string | number</td><td>—</td><td><code>30px</code></td></tr><tr><td>disabled</td><td>是否禁用<span class="pagefind-pinyin" aria-hidden="true">shifoujinyong shi fou jin yong sfjy</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>clearable</td><td>是否可清除<span class="pagefind-pinyin" aria-hidden="true">shifoukeqingchu shi fou ke qing chu sfkqc</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>showPassword</td><td>是否显示密码切换<span class="pagefind-pinyin" aria-hidden="true">shifouxianshimimaqiehuan shi fou xian shi mi ma qie huan sfxsmmqh</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>placeholder</td><td>占位文本<span class="pagefind-pinyin" aria-hidden="true">zhanweiwenben zhan wei wen ben zwwb</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>modelValue</td><td>绑定值<span class="pagefind-pinyin" aria-hidden="true">bangdingzhi bang ding zhi bdz</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>minLength</td><td>最小输入长度<span class="pagefind-pinyin" aria-hidden="true">zuixiaoshuruchangdu zui xiao shu ru chang du zxsrcd</span></td><td>number</td><td>—</td><td>—</td></tr><tr><td>maxLength</td><td>最大输入长度<span class="pagefind-pinyin" aria-hidden="true">zuidashuruchangdu zui da shu ru chang du zdsrcd</span></td><td>number | string</td><td>—</td><td>—</td></tr><tr><td>wordLimit</td><td>是否显示字数统计<span class="pagefind-pinyin" aria-hidden="true">shifouxianshizishutongji shi fou xian shi zi shu tong ji sfxszstj</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>textColor</td><td>文本颜色<span class="pagefind-pinyin" aria-hidden="true">wenbenyanse wen ben yan se wbys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td>—</td></tr><tr><td>placeholderColor</td><td>占位符颜色<span class="pagefind-pinyin" aria-hidden="true">zhanweifuyanse zhan wei fu yan se zwfys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td>—</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> InputProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  type</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  tag</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  disabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  clearable</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  showPassword</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  placeholder</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  modelValue</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  minLength</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  maxLength</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  wordLimit</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  textColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  placeholderColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,5))])}}});export{T as __pageData,_ as default};

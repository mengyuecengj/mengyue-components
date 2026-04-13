import{_ as n}from"./chunks/input.vue_vue_type_script_setup_true_lang.Qz_sZHj_.js";import{y as f,I as C,o as w,c as B,a8 as x,J as s,w as o,j as t,a,R as D,A as r}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const F=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/FormInput.md","filePath":"en/components/FormInput.md"}'),V={name:"en/components/FormInput.md"},L=Object.assign(V,{setup(A){const p=r(""),h=r(""),k=r(""),u=r(""),m=r(""),c=r(""),g=r(""),b=r(""),y=r(""),l=()=>{D(()=>{})};return f([p,h,k,u,m,c,g,b,y],()=>{l()}),(v,e)=>{const d=C("ShowCode");return w(),B("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[9]||(e[9]=x('<h1 id="input" tabindex="-1">Input <a class="header-anchor" href="#input" aria-label="Permalink to “Input”">​</a></h1><h2 id="brief-introduction" tabindex="-1">Brief Introduction <a class="header-anchor" href="#brief-introduction" aria-label="Permalink to “Brief Introduction”">​</a></h2><p>The <code>input</code> component is used for users to enter text content. <code>mengyue-components</code> has encapsulated it and performed <code>vitest</code> testing. You can use <code>&lt;MYInput&gt;&lt;/MYInput&gt;</code> to implement an input box.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to “Basic Usage”">​</a></h2><p>Use <code>modelValue</code> to bind the value of the input box.</p>',5)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput v-model='inputValue' placeholder='Please enter content' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:o(()=>[s(n,{modelValue:p.value,"onUpdate:modelValue":[e[0]||(e[0]=i=>p.value=i),l],placeholder:"Please enter content"},null,8,["modelValue"])]),_:1},8,["code"]),e[10]||(e[10]=t("h2",{id:"input-type",tabindex:"-1"},[a("Input Type "),t("a",{class:"header-anchor",href:"#input-type","aria-label":"Permalink to “Input Type”"},"​")],-1)),e[11]||(e[11]=t("p",null,[a("Use the "),t("code",null,"type"),a(" property to set the type of the input box, such as "),t("code",null,"text"),a(", "),t("code",null,"password"),a(", etc.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput type='password' placeholder='Please enter password' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:o(()=>[s(n,{type:"password",placeholder:"Please enter password","onUpdate:modelValue":l})]),_:1},8,["code"]),e[12]||(e[12]=t("h2",{id:"size-control",tabindex:"-1"},[a("Size Control "),t("a",{class:"header-anchor",href:"#size-control","aria-label":"Permalink to “Size Control”"},"​")],-1)),e[13]||(e[13]=t("p",null,[a("Use the "),t("code",null,"width"),a(" and "),t("code",null,"height"),a(" properties to customize the dimensions of the input box.")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput width='200px' height='40px' placeholder='Custom size' @update:modelValue='forceUpdate' />
</template>
  `.trim()},{demo:o(()=>[s(n,{width:"200px",height:"40px",placeholder:"Custom size","onUpdate:modelValue":l})]),_:1},8,["code"]),e[14]||(e[14]=t("h2",{id:"state-control",tabindex:"-1"},[a("State Control "),t("a",{class:"header-anchor",href:"#state-control","aria-label":"Permalink to “State Control”"},"​")],-1)),e[15]||(e[15]=t("h3",{id:"disabled",tabindex:"-1"},[a("disabled "),t("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),e[16]||(e[16]=t("p",null,"Disable the input box:",-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput disabled placeholder='Disabled state' />
</template>
  `.trim()},{demo:o(()=>[s(n,{disabled:"",placeholder:"Disabled state"})]),_:1},8,["code"]),e[17]||(e[17]=t("h3",{id:"clearable",tabindex:"-1"},[a("clearable "),t("a",{class:"header-anchor",href:"#clearable","aria-label":"Permalink to “clearable”"},"​")],-1)),e[18]||(e[18]=t("p",null,"Show clear button:",-1)),s(d,{title:"Code Demo",code:`
<template>
  <div>
    <MYInput 
      v-model='clearableValue'
      clearable 
      placeholder='Clearable content' 
    />
  </div>
</template>
<script setup>
    import { ref } from 'vue'
    const clearableValue = ref('')
<\/script>
  `.trim()},{demo:o(()=>[t("div",null,[s(n,{modelValue:k.value,"onUpdate:modelValue":[e[1]||(e[1]=i=>k.value=i),l],clearable:"",placeholder:"Clearable content"},null,8,["modelValue"])])]),_:1},8,["code"]),e[19]||(e[19]=t("h3",{id:"showpassword",tabindex:"-1"},[a("showPassword "),t("a",{class:"header-anchor",href:"#showpassword","aria-label":"Permalink to “showPassword”"},"​")],-1)),e[20]||(e[20]=t("p",null,"Toggle password visibility:",-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput 
    v-model='passwordValue' 
    type='password' 
    showPassword 
    placeholder='Toggle password visibility' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:o(()=>[s(n,{modelValue:h.value,"onUpdate:modelValue":[e[2]||(e[2]=i=>h.value=i),l],type:"password",showPassword:"",placeholder:"Toggle password visibility"},null,8,["modelValue"])]),_:1},8,["code"]),e[21]||(e[21]=t("h2",{id:"input-restrictions",tabindex:"-1"},[a("Input Restrictions "),t("a",{class:"header-anchor",href:"#input-restrictions","aria-label":"Permalink to “Input Restrictions”"},"​")],-1)),e[22]||(e[22]=t("h3",{id:"length-limit",tabindex:"-1"},[a("Length Limit "),t("a",{class:"header-anchor",href:"#length-limit","aria-label":"Permalink to “Length Limit”"},"​")],-1)),e[23]||(e[23]=t("p",null,[a("Use "),t("code",null,"minLength"),a(" and "),t("code",null,"maxLength"),a(" to limit input length:")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput 
    v-model='limitValue' 
    maxLength='10' 
    placeholder='Maximum 10 characters' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:o(()=>[s(n,{modelValue:u.value,"onUpdate:modelValue":[e[3]||(e[3]=i=>u.value=i),l],maxlength:"10",placeholder:"Maximum 10 characters"},null,8,["modelValue"])]),_:1},8,["code"]),e[24]||(e[24]=t("h3",{id:"word-count",tabindex:"-1"},[a("Word Count "),t("a",{class:"header-anchor",href:"#word-count","aria-label":"Permalink to “Word Count”"},"​")],-1)),e[25]||(e[25]=t("p",null,[a("Use "),t("code",null,"wordLimit"),a(" to display word count:")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <div>
    <MYInput 
      v-model='wordLimitValue' 
      maxLength='20' 
      wordLimit 
      placeholder='Show word count' 
    />
  </div>
</template>
  `.trim()},{demo:o(()=>[t("div",null,[s(n,{modelValue:m.value,"onUpdate:modelValue":[e[4]||(e[4]=i=>m.value=i),l],maxLength:"20",wordLimit:"",placeholder:"Show word count"},null,8,["modelValue"])])]),_:1},8,["code"]),e[26]||(e[26]=t("h2",{id:"custom-colors",tabindex:"-1"},[a("Custom Colors "),t("a",{class:"header-anchor",href:"#custom-colors","aria-label":"Permalink to “Custom Colors”"},"​")],-1)),e[27]||(e[27]=t("h3",{id:"textcolor",tabindex:"-1"},[a("textColor "),t("a",{class:"header-anchor",href:"#textcolor","aria-label":"Permalink to “textColor”"},"​")],-1)),e[28]||(e[28]=t("p",null,"Custom text color:",-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput 
    v-model='textColorValue' 
    textColor='#ff0000' 
    placeholder='Red text' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:o(()=>[s(n,{modelValue:c.value,"onUpdate:modelValue":[e[5]||(e[5]=i=>c.value=i),l],textColor:"#ff0000",placeholder:"Red text"},null,8,["modelValue"])]),_:1},8,["code"]),e[29]||(e[29]=t("h3",{id:"placeholdercolor",tabindex:"-1"},[a("placeholderColor "),t("a",{class:"header-anchor",href:"#placeholdercolor","aria-label":"Permalink to “placeholderColor”"},"​")],-1)),e[30]||(e[30]=t("p",null,"Custom placeholder color:",-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput 
    v-model='placeholderColorValue' 
    placeholderColor='#409EFF' 
    placeholder='Blue placeholder' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:o(()=>[s(n,{modelValue:g.value,"onUpdate:modelValue":[e[6]||(e[6]=i=>g.value=i),l],placeholderColor:"#409EFF",placeholder:"Blue placeholder"},null,8,["modelValue"])]),_:1},8,["code"]),e[31]||(e[31]=t("h2",{id:"multiline-text",tabindex:"-1"},[a("Multiline Text "),t("a",{class:"header-anchor",href:"#multiline-text","aria-label":"Permalink to “Multiline Text”"},"​")],-1)),e[32]||(e[32]=t("p",null,[a("Use "),t("code",null,'tag="textarea"'),a(" for multiline text input:")],-1)),s(d,{title:"Code Demo",code:`
<template>
  <MYInput 
    v-model='textareaValue' 
    tag='textarea' 
    width='300px' 
    height='100px' 
    placeholder='Multiline text input' 
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:o(()=>[s(n,{modelValue:b.value,"onUpdate:modelValue":[e[7]||(e[7]=i=>b.value=i),l],tag:"textarea",width:"300px",height:"100px",placeholder:"Multiline text input"},null,8,["modelValue"])]),_:1},8,["code"]),e[33]||(e[33]=t("h2",{id:"combined-usage",tabindex:"-1"},[a("Combined Usage "),t("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[34]||(e[34]=t("p",null,"Combine multiple properties:",-1)),s(d,{title:"Code Demo",code:`
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
    placeholder='Combined usage example'
    @update:modelValue='forceUpdate'
  />
</template>
  `.trim()},{demo:o(()=>[s(n,{modelValue:y.value,"onUpdate:modelValue":[e[8]||(e[8]=i=>y.value=i),l],type:"password",showPassword:"",clearable:"",maxLength:"15",wordLimit:"",width:"250px",textColor:"#2c2",placeholder:"Combined usage example"},null,8,["modelValue"])]),_:1},8,["code"]),e[35]||(e[35]=x(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>type</td><td>Input type</td><td>string</td><td><code>text</code>/<code>password</code> etc.</td><td><code>text</code></td></tr><tr><td>tag</td><td>Tag type</td><td>string</td><td><code>input</code>/<code>textarea</code> etc.</td><td><code>input</code></td></tr><tr><td>width</td><td>Width</td><td>string | number</td><td>—</td><td><code>100%</code></td></tr><tr><td>height</td><td>Height</td><td>string | number</td><td>—</td><td><code>30px</code></td></tr><tr><td>disabled</td><td>Whether disabled</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>clearable</td><td>Whether clearable</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>showPassword</td><td>Whether to show password toggle</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>placeholder</td><td>Placeholder text</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>modelValue</td><td>Bound value</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>minLength</td><td>Minimum input length</td><td>number</td><td>—</td><td>—</td></tr><tr><td>maxLength</td><td>Maximum input length</td><td>number | string</td><td>—</td><td>—</td></tr><tr><td>wordLimit</td><td>Whether to show word count</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>textColor</td><td>Text color</td><td>string</td><td>Hex or named color</td><td>—</td></tr><tr><td>placeholderColor</td><td>Placeholder color</td><td>string</td><td>Hex or named color</td><td>—</td></tr></tbody></table><h3 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-label="Permalink to “Type Definitions”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> InputProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,5))])}}});export{F as __pageData,L as default};

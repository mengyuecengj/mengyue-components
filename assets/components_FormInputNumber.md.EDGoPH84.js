import{d as P,x as m,I as y,c as V,o as N,J as a,w as s,a as p,t as n,z as w,ap as C,ah as x,j as t}from"./chunks/framework.PAn8Jj8p.js";const D={class:"my-inputNumber"},u=P({name:"MYInputNumber",__name:"inputNumber",setup(I){const o=m(0);return(h,l)=>{const d=y("MYButton"),f=y("MYInput");return N(),V("div",D,[a(d,{type:"info",onClick:l[0]||(l[0]=v=>o.value--)},{default:s(()=>[...l[3]||(l[3]=[p("-",-1)])]),_:1}),a(f,{type:"text",class:"my-inputNumber__input",width:"50px",modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=v=>o.value=v)},{default:s(()=>[p(n(o.value),1)]),_:1},8,["modelValue"]),a(d,{type:"info",onClick:l[2]||(l[2]=v=>o.value++)},{default:s(()=>[...l[4]||(l[4]=[p("+",-1)])]),_:1})])}}}),A={style:{"margin-top":"10px",color:"#666"}},B={style:{"margin-top":"10px",color:"#666"}},M={style:{"margin-top":"5px",color:"#666"}},Y={style:{"margin-bottom":"10px"}},T={style:{color:"#666"}},F={style:{"margin-bottom":"10px"}},S={style:{"margin-top":"10px",color:"#666"}},q={style:{display:"flex","flex-direction":"column",gap:"15px","max-width":"300px"}},E={style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},U={style:{"margin-top":"5px","font-weight":"bold"}},j=JSON.parse('{"title":"InputNumber","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormInputNumber.md","filePath":"components/FormInputNumber.md"}'),z={name:"components/FormInputNumber.md"},J=Object.assign(z,{setup(I){const o=m(0),h=m(10),l=m(50);w(l,g=>{g<0&&(l.value=0),g>100&&(l.value=100)});const d=m(0),f=()=>{d.value+=5},v=()=>{d.value-=5},k=m(5),c=m(!1),_=()=>{c.value=!c.value},r=C({quantity:1,price:100});return(g,e)=>{const b=y("ShowCode");return N(),V("div",null,[e[10]||(e[10]=x('<h1 id="inputnumber" tabindex="-1">InputNumber <a class="header-anchor" href="#inputnumber" aria-label="Permalink to “InputNumber”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>InputNumber 数字输入框组件，用于输入数字或进行数字的增减操作。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYInputNumber&gt;&lt;/MYInputNumber&gt;</code> 或者 <code>&lt;MYInputNumber /&gt;</code> 来实现一个数字输入框。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础数字输入框" tabindex="-1">基础数字输入框 <a class="header-anchor" href="#基础数字输入框" aria-label="Permalink to “基础数字输入框”">​</a></h3><p>基础的数字输入框，支持通过按钮增减数值。</p>',6)),a(b,{title:"代码演示",code:`
<template>
  <MYInputNumber v-model='value' />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(0)
<\/script>
  `.trim()},{demo:s(()=>[t("div",null,[a(u,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=i=>o.value=i)},null,8,["modelValue"]),t("div",A,"当前值: "+n(o.value),1)])]),_:1},8,["code"]),e[11]||(e[11]=t("h3",{id:"设置初始值",tabindex:"-1"},[p("设置初始值 "),t("a",{class:"header-anchor",href:"#设置初始值","aria-label":"Permalink to “设置初始值”"},"​")],-1)),e[12]||(e[12]=t("p",null,"设置数字输入框的初始值。",-1)),a(b,{title:"代码演示",code:`
<template>
  <MYInputNumber v-model='value' />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(10)
<\/script>
  `.trim()},{demo:s(()=>[t("div",null,[a(u,{modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=i=>h.value=i)},null,8,["modelValue"]),t("div",B,"当前值: "+n(h.value),1)])]),_:1},8,["code"]),e[13]||(e[13]=t("h3",{id:"范围限制",tabindex:"-1"},[p("范围限制 "),t("a",{class:"header-anchor",href:"#范围限制","aria-label":"Permalink to “范围限制”"},"​")],-1)),e[14]||(e[14]=t("p",null,"通过计算属性或监听器实现数值范围限制。",-1)),a(b,{title:"代码演示",code:`
<template>
  <div>
    <MYInputNumber v-model='value' />
    <div style='margin-top: 10px; font-size: 12px; color: #666;'>
      数值范围: 0 - 100
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const value = ref(50)
watch(value, (newVal) => {
  if (newVal < 0) value.value = 0
  if (newVal > 100) value.value = 100
})
<\/script>
  `.trim()},{demo:s(()=>[t("div",null,[a(u,{modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=i=>l.value=i)},null,8,["modelValue"]),e[7]||(e[7]=t("div",{style:{"margin-top":"10px","font-size":"12px",color:"#666"}}," 数值范围: 0 - 100 ",-1)),t("div",M,"当前值: "+n(l.value),1)])]),_:1},8,["code"]),e[15]||(e[15]=t("h3",{id:"步进控制",tabindex:"-1"},[p("步进控制 "),t("a",{class:"header-anchor",href:"#步进控制","aria-label":"Permalink to “步进控制”"},"​")],-1)),e[16]||(e[16]=t("p",null,"通过自定义逻辑控制每次增减的步长。",-1)),a(b,{title:"代码演示",code:`
<template>
  <div>
    <MYInputNumber v-model='value' />
    <div style='margin-top: 10px; font-size: 12px; color: #666;'>
      每次增减 5
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const value = ref(0)
// 通过外部逻辑控制步进
const handleIncrement = () => {
  value.value += 5
}
const handleDecrement = () => {
  value.value -= 5
}
<\/script>
  `.trim()},{demo:s(()=>[t("div",null,[t("div",Y,[a(u,{modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=i=>d.value=i)},null,8,["modelValue"])]),t("div",{style:{display:"flex",gap:"10px","margin-bottom":"10px"}},[t("button",{onClick:v,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"-5"),t("button",{onClick:f,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"+5")]),t("div",T,"当前值: "+n(d.value),1)])]),_:1},8,["code"]),e[17]||(e[17]=t("h3",{id:"禁用状态",tabindex:"-1"},[p("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[18]||(e[18]=t("p",null,"通过外部逻辑控制数字输入框的禁用状态。",-1)),a(b,{title:"代码演示",code:`
<template>
  <div>
    <div style='margin-bottom: 10px;'>
      <button @click='toggleDisabled'>
        {{ disabled ? '启用' : '禁用' }}数字输入框
      </button>
    </div>
    <MYInputNumber v-model='value' :disabled='disabled' />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const value = ref(5)
const disabled = ref(false)
const toggleDisabled = () => {
  disabled.value = !disabled.value
}
<\/script>
  `.trim()},{demo:s(()=>[t("div",null,[t("div",F,[t("button",{onClick:_,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},n(c.value?"启用":"禁用")+"数字输入框 ",1)]),a(u,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=i=>k.value=i),disabled:c.value},null,8,["modelValue","disabled"]),t("div",S,"当前值: "+n(k.value),1)])]),_:1},8,["code"]),e[19]||(e[19]=t("h3",{id:"表单集成",tabindex:"-1"},[p("表单集成 "),t("a",{class:"header-anchor",href:"#表单集成","aria-label":"Permalink to “表单集成”"},"​")],-1)),e[20]||(e[20]=t("p",null,"在表单中使用数字输入框。",-1)),a(b,{title:"代码演示",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px; max-width: 300px;'>
    <div>
      <label style='display: block; margin-bottom: 5px; font-weight: bold;'>数量:</label>
      <MYInputNumber v-model='form.quantity' />
    </div>
    <div>
      <label style='display: block; margin-bottom: 5px; font-weight: bold;'>价格:</label>
      <MYInputNumber v-model='form.price' />
    </div>
    <div style='padding: 10px; background: #f5f5f5; border-radius: 4px;'>
      <div>数量: {{ form.quantity }}</div>
      <div>价格: {{ form.price }}</div>
      <div style='margin-top: 5px; font-weight: bold;'>
        总价: {{ form.quantity * form.price }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const form = reactive({
  quantity: 1,
  price: 100
})
<\/script>
  `.trim()},{demo:s(()=>[t("div",q,[t("div",null,[e[8]||(e[8]=t("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"数量:",-1)),a(u,{modelValue:r.quantity,"onUpdate:modelValue":e[5]||(e[5]=i=>r.quantity=i)},null,8,["modelValue"])]),t("div",null,[e[9]||(e[9]=t("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"价格:",-1)),a(u,{modelValue:r.price,"onUpdate:modelValue":e[6]||(e[6]=i=>r.price=i)},null,8,["modelValue"])]),t("div",E,[t("div",null,"数量: "+n(r.quantity),1),t("div",null,"价格: "+n(r.price),1),t("div",U," 总价: "+n(r.quantity*r.price),1)])])]),_:1},8,["code"]),e[21]||(e[21]=x(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值</td><td>number</td><td>—</td><td><code>0</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to “事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>值变化时触发</td><td>value: number</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> InputNumberProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  modelValue</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  disabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,7))])}}});export{j as __pageData,J as default};

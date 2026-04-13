import{_ as d,a}from"./chunks/step.vue_vue_type_script_setup_true_lang.Drf7GC24.js";import{I as y,o as k,c as o,a8 as c,J as s,w as i,j as e,a as n,G as m,H as S,b as B,A as g}from"./chunks/framework.DvHWw5tv.js";const f={style:{"margin-top":"20px",display:"flex",gap:"10px"}},A=["disabled"],D=["disabled"],_=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationStep.md","filePath":"components/NavigationStep.md"}'),v={name:"components/NavigationStep.md"},P=Object.assign(v,{setup(x){const l=g(0),r=g([{index:0,title:"第一步",description:"填写基本信息"},{index:1,title:"第二步",description:"上传相关文件"},{index:2,title:"第三步",description:"确认提交"},{index:3,title:"第四步",description:"完成"}]),u=()=>{l.value>0&&l.value--},b=()=>{l.value<r.value.length-1&&l.value++};return(C,t)=>{const p=y("ShowCode");return k(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[t[8]||(t[8]=c('<h1 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to “Steps”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Steps 步骤条组件，用于引导用户按照流程完成任务。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYSteps&gt;&lt;/MYSteps&gt;</code> 和 <code>&lt;MYStep&gt;&lt;/MYStep&gt;</code> 组合来实现步骤条功能。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础步骤条" tabindex="-1">基础步骤条 <a class="header-anchor" href="#基础步骤条" aria-label="Permalink to “基础步骤条”">​</a></h3><p>默认的水平步骤条，显示当前进度状态。</p>',6)),s(p,{title:"代码演示",code:`
<template>
  <MYSteps :active='1'>
    <MYStep title='步骤一' description='这是第一步的描述' />
    <MYStep title='步骤二' description='这是第二步的描述' />
    <MYStep title='步骤三' description='这是第三步的描述' />
    <MYStep title='步骤四' description='这是第四步的描述' />
  </MYSteps>
</template>
  `.trim()},{demo:i(()=>[s(d,{active:1},{default:i(()=>[s(a,{title:"步骤一",description:"这是第一步的描述"}),s(a,{title:"步骤二",description:"这是第二步的描述"}),s(a,{title:"步骤三",description:"这是第三步的描述"}),s(a,{title:"步骤四",description:"这是第四步的描述"})]),_:1})]),_:1},8,["code"]),t[9]||(t[9]=e("h3",{id:"自定义状态",tabindex:"-1"},[n("自定义状态 "),e("a",{class:"header-anchor",href:"#自定义状态","aria-label":"Permalink to “自定义状态”"},"​")],-1)),t[10]||(t[10]=e("p",null,[n("通过设置 Step 的 "),e("code",null,"status"),n(" 属性来自定义每个步骤的状态。")],-1)),s(p,{title:"代码演示",code:`
<template>
  <MYSteps :active='2'>
    <MYStep title='已完成' status='finish' />
    <MYStep title='进行中' status='process' />
    <MYStep title='错误' status='error' />
    <MYStep title='等待' status='wait' />
  </MYSteps>
</template>
  `.trim()},{demo:i(()=>[s(d,{active:2},{default:i(()=>[s(a,{title:"已完成",status:"finish"}),s(a,{title:"进行中",status:"process"}),s(a,{title:"错误",status:"error"}),s(a,{title:"等待",status:"wait"})]),_:1})]),_:1},8,["code"]),t[11]||(t[11]=e("h3",{id:"自定义图标",tabindex:"-1"},[n("自定义图标 "),e("a",{class:"header-anchor",href:"#自定义图标","aria-label":"Permalink to “自定义图标”"},"​")],-1)),t[12]||(t[12]=e("p",null,"通过插槽自定义每个步骤的图标。",-1)),s(p,{title:"代码演示",code:`
<template>
  <MYSteps :active='2'>
    <MYStep title='步骤一'>
      <template #icon>📝</template>
      填写信息
    </MYStep>
    <MYStep title='步骤二'>
      <template #icon>✅</template>
      确认提交
    </MYStep>
    <MYStep title='步骤三'>
      <template #icon>⏳</template>
      等待审核
    </MYStep>
    <MYStep title='步骤四'>
      <template #icon>🎉</template>
      完成
    </MYStep>
  </MYSteps>
</template>
  `.trim()},{demo:i(()=>[s(d,{active:2},{default:i(()=>[s(a,{title:"步骤一"},{icon:i(()=>[...t[0]||(t[0]=[n("📝",-1)])]),default:i(()=>[t[1]||(t[1]=n(" 填写信息 ",-1))]),_:1}),s(a,{title:"步骤二"},{icon:i(()=>[...t[2]||(t[2]=[n("✅",-1)])]),default:i(()=>[t[3]||(t[3]=n(" 确认提交 ",-1))]),_:1}),s(a,{title:"步骤三"},{icon:i(()=>[...t[4]||(t[4]=[n("⏳",-1)])]),default:i(()=>[t[5]||(t[5]=n(" 等待审核 ",-1))]),_:1}),s(a,{title:"步骤四"},{icon:i(()=>[...t[6]||(t[6]=[n("🎉",-1)])]),default:i(()=>[t[7]||(t[7]=n(" 完成 ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),t[13]||(t[13]=e("h3",{id:"动态步骤",tabindex:"-1"},[n("动态步骤 "),e("a",{class:"header-anchor",href:"#动态步骤","aria-label":"Permalink to “动态步骤”"},"​")],-1)),t[14]||(t[14]=e("p",null,"结合数据动态渲染步骤条，并支持交互。",-1)),s(p,{title:"代码演示",code:`
<template>
  <div>
    <MYSteps :active='currentStep'>
      <MYStep 
        v-for='step in steps' 
        :key='step.index'
        :title='step.title' 
        :description='step.description'
      />
    </MYSteps>
    <div style='margin-top: 20px; display: flex; gap: 10px;'>
      <button @click='prevStep' :disabled='currentStep <= 0'>上一步</button>
      <button @click='nextStep' :disabled='currentStep >= steps.length - 1'>下一步</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const currentStep = ref(0)
const steps = ref([
  { index: 0, title: '第一步', description: '填写基本信息' },
  { index: 1, title: '第二步', description: '上传相关文件' },
  { index: 2, title: '第三步', description: '确认提交' },
  { index: 3, title: '第四步', description: '完成' }
])
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--
}
const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) currentStep.value++
}
<\/script>
  `.trim()},{demo:i(()=>[e("div",null,[s(d,{active:l.value},{default:i(()=>[(k(!0),o(m,null,S(r.value,h=>(k(),B(a,{key:h.index,title:h.title,description:h.description},null,8,["title","description"]))),128))]),_:1},8,["active"]),e("div",f,[e("button",{onClick:u,disabled:l.value<=0,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"上一步",8,A),e("button",{onClick:b,disabled:l.value>=r.value.length-1,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"下一步",8,D)])])]),_:1},8,["code"]),t[15]||(t[15]=c(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="steps-props" tabindex="-1">Steps Props <a class="header-anchor" href="#steps-props" aria-label="Permalink to “Steps Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>active</td><td>设置当前激活步骤</td><td>number</td><td>—</td><td><code>0</code></td></tr><tr><td>direction</td><td>步骤条方向</td><td>string</td><td><code>horizontal</code>/<code>vertical</code></td><td><code>horizontal</code></td></tr><tr><td>align</td><td>步骤条对齐方式</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>left</code></td></tr><tr><td>finish-status</td><td>步骤完成状态</td><td>string</td><td>—</td><td><code>finish</code></td></tr></tbody></table><h3 id="step-props" tabindex="-1">Step Props <a class="header-anchor" href="#step-props" aria-label="Permalink to “Step Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>步骤标题</td><td>string</td><td>—</td><td><code>必需</code></td></tr><tr><td>description</td><td>步骤描述</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>status</td><td>步骤状态</td><td>string</td><td><code>wait</code>/<code>process</code>/<code>finish</code>/<code>error</code></td><td><code>自动计算</code></td></tr><tr><td>index</td><td>步骤索引</td><td>number</td><td>—</td><td><code>必需</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to “插槽”">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>icon</td><td>自定义步骤图标</td></tr><tr><td>default</td><td>步骤内容</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> StepsProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  active</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  direction</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">horizontal</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vertical</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  align</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">center</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  finishStatus</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> StepProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  description</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  status</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">wait</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">process</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">finish</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">error</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  index</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,9))])}}});export{_ as __pageData,P as default};

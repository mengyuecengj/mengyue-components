import{_ as r,a}from"./chunks/step.vue_vue_type_script_setup_true_lang.Drf7GC24.js";import{I as b,o as h,c as k,a8 as c,J as s,w as i,j as e,a as n,G as y,H as S,b as f,A as u}from"./chunks/framework.DvHWw5tv.js";const D={style:{"margin-top":"20px",display:"flex",gap:"10px"}},C=["disabled"],B=["disabled"],M=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/NavigationStep.md","filePath":"en/components/NavigationStep.md"}'),A={name:"en/components/NavigationStep.md"},_=Object.assign(A,{setup(v){const p=u(0),d=u([{index:0,title:"Step 1",description:"Fill in basic information"},{index:1,title:"Step 2",description:"Upload relevant files"},{index:2,title:"Step 3",description:"Confirm submission"},{index:3,title:"Step 4",description:"Complete"}]),g=()=>{p.value>0&&p.value--},m=()=>{p.value<d.value.length-1&&p.value++};return(x,t)=>{const l=b("ShowCode");return h(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[8]||(t[8]=c('<h1 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to “Steps”">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to “Introduction”">​</a></h2><p>The Steps component is used to guide users through completing tasks in a sequential process. mengyue-components has encapsulated this component and conducted vitest testing. You can use <code>&lt;MYSteps&gt;&lt;/MYSteps&gt;</code> and <code>&lt;MYStep&gt;&lt;/MYStep&gt;</code> together to implement the steps functionality.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to “Basic Usage”">​</a></h2><h3 id="basic-steps" tabindex="-1">Basic Steps <a class="header-anchor" href="#basic-steps" aria-label="Permalink to “Basic Steps”">​</a></h3><p>Default horizontal steps bar showing current progress status.</p>',6)),s(l,{title:"Code Demo",code:`
<template>
  <MYSteps :active='1'>
    <MYStep title='Step 1' description='Description for step 1' />
    <MYStep title='Step 2' description='Description for step 2' />
    <MYStep title='Step 3' description='Description for step 3' />
    <MYStep title='Step 4' description='Description for step 4' />
  </MYSteps>
</template>
  `.trim()},{demo:i(()=>[s(r,{active:1},{default:i(()=>[s(a,{title:"Step 1",description:"Description for step 1"}),s(a,{title:"Step 2",description:"Description for step 2"}),s(a,{title:"Step 3",description:"Description for step 3"}),s(a,{title:"Step 4",description:"Description for step 4"})]),_:1})]),_:1},8,["code"]),t[9]||(t[9]=e("h3",{id:"custom-status",tabindex:"-1"},[n("Custom Status "),e("a",{class:"header-anchor",href:"#custom-status","aria-label":"Permalink to “Custom Status”"},"​")],-1)),t[10]||(t[10]=e("p",null,[n("Customize the status of each step by setting the Step's "),e("code",null,"status"),n(" prop.")],-1)),s(l,{title:"Code Demo",code:`
<template>
  <MYSteps :active='2'>
    <MYStep title='Completed' status='finish' />
    <MYStep title='In Progress' status='process' />
    <MYStep title='Error' status='error' />
    <MYStep title='Pending' status='wait' />
  </MYSteps>
</template>
  `.trim()},{demo:i(()=>[s(r,{active:2},{default:i(()=>[s(a,{title:"Completed",status:"finish"}),s(a,{title:"In Progress",status:"process"}),s(a,{title:"Error",status:"error"}),s(a,{title:"Pending",status:"wait"})]),_:1})]),_:1},8,["code"]),t[11]||(t[11]=e("h3",{id:"custom-icons",tabindex:"-1"},[n("Custom Icons "),e("a",{class:"header-anchor",href:"#custom-icons","aria-label":"Permalink to “Custom Icons”"},"​")],-1)),t[12]||(t[12]=e("p",null,"Customize the icon for each step using slots.",-1)),s(l,{title:"Code Demo",code:`
<template>
  <MYSteps :active='2'>
    <MYStep title='Step 1'>
      <template #icon>📝</template>
      Fill in information
    </MYStep>
    <MYStep title='Step 2'>
      <template #icon>✅</template>
      Confirm submission
    </MYStep>
    <MYStep title='Step 3'>
      <template #icon>⏳</template>
      Awaiting review
    </MYStep>
    <MYStep title='Step 4'>
      <template #icon>🎉</template>
      Complete
    </MYStep>
  </MYSteps>
</template>
  `.trim()},{demo:i(()=>[s(r,{active:2},{default:i(()=>[s(a,{title:"Step 1"},{icon:i(()=>[...t[0]||(t[0]=[n("📝",-1)])]),default:i(()=>[t[1]||(t[1]=n(" Fill in information ",-1))]),_:1}),s(a,{title:"Step 2"},{icon:i(()=>[...t[2]||(t[2]=[n("✅",-1)])]),default:i(()=>[t[3]||(t[3]=n(" Confirm submission ",-1))]),_:1}),s(a,{title:"Step 3"},{icon:i(()=>[...t[4]||(t[4]=[n("⏳",-1)])]),default:i(()=>[t[5]||(t[5]=n(" Awaiting review ",-1))]),_:1}),s(a,{title:"Step 4"},{icon:i(()=>[...t[6]||(t[6]=[n("🎉",-1)])]),default:i(()=>[t[7]||(t[7]=n(" Complete ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),t[13]||(t[13]=e("h3",{id:"dynamic-steps",tabindex:"-1"},[n("Dynamic Steps "),e("a",{class:"header-anchor",href:"#dynamic-steps","aria-label":"Permalink to “Dynamic Steps”"},"​")],-1)),t[14]||(t[14]=e("p",null,"Dynamically render steps with data and support interaction.",-1)),s(l,{title:"Code Demo",code:`
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
      <button @click='prevStep' :disabled='currentStep <= 0'>Previous</button>
      <button @click='nextStep' :disabled='currentStep >= steps.length - 1'>Next</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const currentStep = ref(0)
const steps = ref([
  { index: 0, title: 'Step 1', description: 'Fill in basic information' },
  { index: 1, title: 'Step 2', description: 'Upload relevant files' },
  { index: 2, title: 'Step 3', description: 'Confirm submission' },
  { index: 3, title: 'Step 4', description: 'Complete' }
])
const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--
}
const nextStep = () => {
  if (currentStep.value < steps.value.length - 1) currentStep.value++
}
<\/script>
  `.trim()},{demo:i(()=>[e("div",null,[s(r,{active:p.value},{default:i(()=>[(h(!0),k(y,null,S(d.value,o=>(h(),f(a,{key:o.index,title:o.title,description:o.description},null,8,["title","description"]))),128))]),_:1},8,["active"]),e("div",D,[e("button",{onClick:g,disabled:p.value<=0,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"Previous",8,C),e("button",{onClick:m,disabled:p.value>=d.value.length-1,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"Next",8,B)])])]),_:1},8,["code"]),t[15]||(t[15]=c(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="steps-props" tabindex="-1">Steps Props <a class="header-anchor" href="#steps-props" aria-label="Permalink to “Steps Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>active</td><td>Set the current active step</td><td>number</td><td>—</td><td><code>0</code></td></tr><tr><td>direction</td><td>Steps bar direction</td><td>string</td><td><code>horizontal</code>/<code>vertical</code></td><td><code>horizontal</code></td></tr><tr><td>align</td><td>Steps bar alignment</td><td>string</td><td><code>left</code>/<code>center</code>/<code>right</code></td><td><code>left</code></td></tr><tr><td>finish-status</td><td>Step completion status</td><td>string</td><td>—</td><td><code>finish</code></td></tr></tbody></table><h3 id="step-props" tabindex="-1">Step Props <a class="header-anchor" href="#step-props" aria-label="Permalink to “Step Props”">​</a></h3><table tabindex="0"><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>title</td><td>Step title</td><td>string</td><td>—</td><td>Required</td></tr><tr><td>description</td><td>Step description</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>status</td><td>Step status</td><td>string</td><td><code>wait</code>/<code>process</code>/<code>finish</code>/<code>error</code></td><td>Auto-calculated</td></tr><tr><td>index</td><td>Step index</td><td>number</td><td>—</td><td>Required</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to “Slots”">​</a></h3><table tabindex="0"><thead><tr><th>Slot Name</th><th>Description</th></tr></thead><tbody><tr><td>icon</td><td>Custom step icon</td></tr><tr><td>default</td><td>Step content</td></tr></tbody></table><h3 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-label="Permalink to “Type Definitions”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> StepsProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,9))])}}});export{M as __pageData,_ as default};

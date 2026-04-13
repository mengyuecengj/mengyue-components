import{_ as r,a}from"./chunks/step.vue_vue_type_script_setup_true_lang.Drf7GC24.js";import{I as b,o as h,c as k,a8 as c,J as s,w as i,j as e,a as n,G as y,H as S,b as f,A as u}from"./chunks/framework.DvHWw5tv.js";const D={style:{"margin-top":"20px",display:"flex",gap:"10px"}},C=["disabled"],B=["disabled"],M=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/NavigationStep.md","filePath":"en/components/NavigationStep.md"}'),A={name:"en/components/NavigationStep.md"},_=Object.assign(A,{setup(v){const p=u(0),d=u([{index:0,title:"Step 1",description:"Fill in basic information"},{index:1,title:"Step 2",description:"Upload relevant files"},{index:2,title:"Step 3",description:"Confirm submission"},{index:3,title:"Step 4",description:"Complete"}]),g=()=>{p.value>0&&p.value--},m=()=>{p.value<d.value.length-1&&p.value++};return(x,t)=>{const l=b("ShowCode");return h(),k("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[t[8]||(t[8]=c("",6)),s(l,{title:"Code Demo",code:`
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
  `.trim()},{demo:i(()=>[e("div",null,[s(r,{active:p.value},{default:i(()=>[(h(!0),k(y,null,S(d.value,o=>(h(),f(a,{key:o.index,title:o.title,description:o.description},null,8,["title","description"]))),128))]),_:1},8,["active"]),e("div",D,[e("button",{onClick:g,disabled:p.value<=0,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"Previous",8,C),e("button",{onClick:m,disabled:p.value>=d.value.length-1,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"Next",8,B)])])]),_:1},8,["code"]),t[15]||(t[15]=c("",9))])}}});export{M as __pageData,_ as default};

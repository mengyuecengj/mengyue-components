import{_ as d,a}from"./chunks/step.vue_vue_type_script_setup_true_lang.Drf7GC24.js";import{I as y,o as k,c as o,a8 as c,J as s,w as i,j as e,a as n,G as m,H as S,b as B,A as g}from"./chunks/framework.DvHWw5tv.js";const f={style:{"margin-top":"20px",display:"flex",gap:"10px"}},A=["disabled"],D=["disabled"],_=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationStep.md","filePath":"components/NavigationStep.md"}'),v={name:"components/NavigationStep.md"},P=Object.assign(v,{setup(x){const l=g(0),r=g([{index:0,title:"第一步",description:"填写基本信息"},{index:1,title:"第二步",description:"上传相关文件"},{index:2,title:"第三步",description:"确认提交"},{index:3,title:"第四步",description:"完成"}]),u=()=>{l.value>0&&l.value--},b=()=>{l.value<r.value.length-1&&l.value++};return(C,t)=>{const p=y("ShowCode");return k(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[8]||(t[8]=c("",6)),s(p,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[e("div",null,[s(d,{active:l.value},{default:i(()=>[(k(!0),o(m,null,S(r.value,h=>(k(),B(a,{key:h.index,title:h.title,description:h.description},null,8,["title","description"]))),128))]),_:1},8,["active"]),e("div",f,[e("button",{onClick:u,disabled:l.value<=0,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"上一步",8,A),e("button",{onClick:b,disabled:l.value>=r.value.length-1,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"下一步",8,D)])])]),_:1},8,["code"]),t[15]||(t[15]=c("",9))])}}});export{_ as __pageData,P as default};

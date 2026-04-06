import{d as A,aq as M,x as Y,p as P,o as d,c as o,n as S,r as x,y as v,W as N,N as w,j as i,G as m,a as e,t as f,e as B,h as y,I as E,ah as C,J as s,w as n,H as T,b as F}from"./chunks/framework.DoR57c7M.js";const b=A({name:"MYSteps",__name:"steps",props:{active:{type:Number,default:0},finishStatus:{type:String,default:"finish"},direction:{type:String,default:"horizontal"},align:{type:String,default:"left"},stepCount:Number},setup(k,{expose:p}){const a=k,r=v(0),h=M({active:a.active,finishStatus:a.finishStatus,direction:a.direction,stepCount:r.value});return Y(()=>{h.active=a.active,h.finishStatus=a.finishStatus,h.direction=a.direction,h.stepCount=r.value}),P(()=>{const u=document.querySelectorAll(".my-step");r.value=u.length}),N("stepsContext",h),p({stepCount:r}),(u,t)=>(d(),o("div",{class:S(["my-steps",[`my-steps--${k.direction}`,`my-steps--align-${k.align}`]])},[x(u.$slots,"default")],2))}}),$={class:"my-step__icon-container"},V={class:"my-step__icon"},I={class:"my-step__content-wrapper"},z={class:"my-step__content"},q={class:"my-step__title"},j={key:0,class:"my-step__description"},l=A({name:"MYStep",__name:"step",props:{title:{type:String,required:!0},description:{type:String,default:""},status:{type:String,default:""},index:{type:Number,required:!0}},setup(k,{expose:p}){const a=k,r=w("stepsContext"),h=y(()=>r?.active??0),u=y(()=>r?.finishStatus??"finish"),t=y(()=>r?.direction??"horizontal"),g=y(()=>r?.stepCount??0),c=y(()=>a.status?a.status:a.index<h.value?u.value:a.index===h.value?"process":"wait"),D=y(()=>a.index===g.value-1);return p({currentStatus:c}),(_,G)=>(d(),o("div",{class:S(["my-step",[`my-step--${t.value}`,`my-step--status-${c.value}`]])},[i("div",$,[i("div",V,[x(_.$slots,"icon",{},()=>[c.value==="finish"?(d(),o(m,{key:0},[e("✔️")],64)):c.value==="error"?(d(),o(m,{key:1},[e("❌")],64)):c.value==="process"?(d(),o(m,{key:2},[e("🔵")],64)):(d(),o(m,{key:3},[e("⚪")],64))])])]),i("div",I,[i("div",z,[i("div",q,f(k.title),1),k.description?(d(),o("div",j,f(k.description),1)):B("",!0)])]),D.value?B("",!0):(d(),o("div",{key:0,class:S(["my-step__line",`my-step__line--${t.value}`])},null,2))],2))}}),J={style:{"margin-top":"20px",display:"flex",gap:"10px"}},L=["disabled"],O=["disabled"],W=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationStep.md","filePath":"components/NavigationStep.md"}'),R={name:"components/NavigationStep.md"},K=Object.assign(R,{setup(k){const p=v(0),a=v([{index:0,title:"第一步",description:"填写基本信息"},{index:1,title:"第二步",description:"上传相关文件"},{index:2,title:"第三步",description:"确认提交"},{index:3,title:"第四步",description:"完成"}]),r=()=>{p.value>0&&p.value--},h=()=>{p.value<a.value.length-1&&p.value++};return(u,t)=>{const g=E("ShowCode");return d(),o("div",null,[t[8]||(t[8]=C("",6)),s(g,{title:"代码演示",code:`
<template>
  <MYSteps :active='1'>
    <MYStep title='步骤一' description='这是第一步的描述' />
    <MYStep title='步骤二' description='这是第二步的描述' />
    <MYStep title='步骤三' description='这是第三步的描述' />
    <MYStep title='步骤四' description='这是第四步的描述' />
  </MYSteps>
</template>
  `.trim()},{demo:n(()=>[s(b,{active:1},{default:n(()=>[s(l,{title:"步骤一",description:"这是第一步的描述"}),s(l,{title:"步骤二",description:"这是第二步的描述"}),s(l,{title:"步骤三",description:"这是第三步的描述"}),s(l,{title:"步骤四",description:"这是第四步的描述"})]),_:1})]),_:1},8,["code"]),t[9]||(t[9]=i("h3",{id:"自定义状态",tabindex:"-1"},[e("自定义状态 "),i("a",{class:"header-anchor",href:"#自定义状态","aria-label":"Permalink to “自定义状态”"},"​")],-1)),t[10]||(t[10]=i("p",null,[e("通过设置 Step 的 "),i("code",null,"status"),e(" 属性来自定义每个步骤的状态。")],-1)),s(g,{title:"代码演示",code:`
<template>
  <MYSteps :active='2'>
    <MYStep title='已完成' status='finish' />
    <MYStep title='进行中' status='process' />
    <MYStep title='错误' status='error' />
    <MYStep title='等待' status='wait' />
  </MYSteps>
</template>
  `.trim()},{demo:n(()=>[s(b,{active:2},{default:n(()=>[s(l,{title:"已完成",status:"finish"}),s(l,{title:"进行中",status:"process"}),s(l,{title:"错误",status:"error"}),s(l,{title:"等待",status:"wait"})]),_:1})]),_:1},8,["code"]),t[11]||(t[11]=i("h3",{id:"自定义图标",tabindex:"-1"},[e("自定义图标 "),i("a",{class:"header-anchor",href:"#自定义图标","aria-label":"Permalink to “自定义图标”"},"​")],-1)),t[12]||(t[12]=i("p",null,"通过插槽自定义每个步骤的图标。",-1)),s(g,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[s(b,{active:2},{default:n(()=>[s(l,{title:"步骤一"},{icon:n(()=>[...t[0]||(t[0]=[e("📝",-1)])]),default:n(()=>[t[1]||(t[1]=e(" 填写信息 ",-1))]),_:1}),s(l,{title:"步骤二"},{icon:n(()=>[...t[2]||(t[2]=[e("✅",-1)])]),default:n(()=>[t[3]||(t[3]=e(" 确认提交 ",-1))]),_:1}),s(l,{title:"步骤三"},{icon:n(()=>[...t[4]||(t[4]=[e("⏳",-1)])]),default:n(()=>[t[5]||(t[5]=e(" 等待审核 ",-1))]),_:1}),s(l,{title:"步骤四"},{icon:n(()=>[...t[6]||(t[6]=[e("🎉",-1)])]),default:n(()=>[t[7]||(t[7]=e(" 完成 ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),t[13]||(t[13]=i("h3",{id:"动态步骤",tabindex:"-1"},[e("动态步骤 "),i("a",{class:"header-anchor",href:"#动态步骤","aria-label":"Permalink to “动态步骤”"},"​")],-1)),t[14]||(t[14]=i("p",null,"结合数据动态渲染步骤条，并支持交互。",-1)),s(g,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[i("div",null,[s(b,{active:p.value},{default:n(()=>[(d(!0),o(m,null,T(a.value,c=>(d(),F(l,{key:c.index,title:c.title,description:c.description},null,8,["title","description"]))),128))]),_:1},8,["active"]),i("div",J,[i("button",{onClick:r,disabled:p.value<=0,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"上一步",8,L),i("button",{onClick:h,disabled:p.value>=a.value.length-1,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"下一步",8,O)])])]),_:1},8,["code"]),t[15]||(t[15]=C("",9))])}}});export{W as __pageData,K as default};

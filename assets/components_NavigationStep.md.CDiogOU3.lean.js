import{_ as h,a as e}from"./chunks/step.vue_vue_type_script_setup_true_lang.Drf7GC24.js";import{I as b,o,c as u,a8 as k,J as s,w as t,j as a,a as n,G as z,H as m,b as f,A as g}from"./chunks/framework.DvHWw5tv.js";const x={style:{"margin-top":"20px",display:"flex",gap:"10px"}},S=["disabled"],B=["disabled"],M=JSON.parse('{"title":"Steps","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationStep.md","filePath":"components/NavigationStep.md"}'),A={name:"components/NavigationStep.md"},Y=Object.assign(A,{setup(v){const p=g(0),l=g([{index:0,title:"第一步",description:"填写基本信息"},{index:1,title:"第二步",description:"上传相关文件"},{index:2,title:"第三步",description:"确认提交"},{index:3,title:"第四步",description:"完成"}]),c=()=>{p.value>0&&p.value--},y=()=>{p.value<l.value.length-1&&p.value++};return(D,i)=>{const d=b("ShowCode");return o(),u("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[8]||(i[8]=k("",6)),s(d,{title:"代码演示",code:`
<template>
  <MYSteps :active='1'>
    <MYStep title='步骤一' description='这是第一步的描述' />
    <MYStep title='步骤二' description='这是第二步的描述' />
    <MYStep title='步骤三' description='这是第三步的描述' />
    <MYStep title='步骤四' description='这是第四步的描述' />
  </MYSteps>
</template>
  `.trim()},{demo:t(()=>[s(h,{active:1},{default:t(()=>[s(e,{title:"步骤一",description:"这是第一步的描述"}),s(e,{title:"步骤二",description:"这是第二步的描述"}),s(e,{title:"步骤三",description:"这是第三步的描述"}),s(e,{title:"步骤四",description:"这是第四步的描述"})]),_:1})]),_:1},8,["code"]),i[9]||(i[9]=a("h3",{id:"自定义状态",tabindex:"-1"},[n("自定义状态 "),a("a",{class:"header-anchor",href:"#自定义状态","aria-label":"Permalink to “自定义状态”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyizhuangtai zi ding yi zhuang tai zdyzt ")],-1)),i[10]||(i[10]=a("p",null,[n("通过设置 Step 的 "),a("code",null,"status"),n(" 属性来自定义每个步骤的状态。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguoshezhi Step de shuxinglaizidingyimeigebuzhoudezhuangtai。 tong guo she zhi Step de shu xing lai zi ding yi mei ge bu zhou de zhuang tai 。 tgsz d sxlzdymgbzdzt。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYSteps :active='2'>
    <MYStep title='已完成' status='finish' />
    <MYStep title='进行中' status='process' />
    <MYStep title='错误' status='error' />
    <MYStep title='等待' status='wait' />
  </MYSteps>
</template>
  `.trim()},{demo:t(()=>[s(h,{active:2},{default:t(()=>[s(e,{title:"已完成",status:"finish"}),s(e,{title:"进行中",status:"process"}),s(e,{title:"错误",status:"error"}),s(e,{title:"等待",status:"wait"})]),_:1})]),_:1},8,["code"]),i[11]||(i[11]=a("h3",{id:"自定义图标",tabindex:"-1"},[n("自定义图标 "),a("a",{class:"header-anchor",href:"#自定义图标","aria-label":"Permalink to “自定义图标”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyitubiao zi ding yi tu biao zdytb ")],-1)),i[12]||(i[12]=a("p",null,[n("通过插槽自定义每个步骤的图标。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguochacaozidingyimeigebuzhoudetubiao。 tong guo cha cao zi ding yi mei ge bu zhou de tu biao 。 tgcczdymgbzdtb。")],-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[s(h,{active:2},{default:t(()=>[s(e,{title:"步骤一"},{icon:t(()=>[...i[0]||(i[0]=[n("📝",-1)])]),default:t(()=>[i[1]||(i[1]=n(" 填写信息 ",-1))]),_:1}),s(e,{title:"步骤二"},{icon:t(()=>[...i[2]||(i[2]=[n("✅",-1)])]),default:t(()=>[i[3]||(i[3]=n(" 确认提交 ",-1))]),_:1}),s(e,{title:"步骤三"},{icon:t(()=>[...i[4]||(i[4]=[n("⏳",-1)])]),default:t(()=>[i[5]||(i[5]=n(" 等待审核 ",-1))]),_:1}),s(e,{title:"步骤四"},{icon:t(()=>[...i[6]||(i[6]=[n("🎉",-1)])]),default:t(()=>[i[7]||(i[7]=n(" 完成 ",-1))]),_:1})]),_:1})]),_:1},8,["code"]),i[13]||(i[13]=a("h3",{id:"动态步骤",tabindex:"-1"},[n("动态步骤 "),a("a",{class:"header-anchor",href:"#动态步骤","aria-label":"Permalink to “动态步骤”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"dongtaibuzhou dong tai bu zhou dtbz ")],-1)),i[14]||(i[14]=a("p",null,[n("结合数据动态渲染步骤条，并支持交互。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jieheshujudongtaixuanranbuzhoutiao，bingzhichijiaohu。 jie he shu ju dong tai xuan ran bu zhou tiao ， bing zhi chi jiao hu 。 jhsjdtxrbzt，bzcjh。")],-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",null,[s(h,{active:p.value},{default:t(()=>[(o(!0),u(z,null,m(l.value,r=>(o(),f(e,{key:r.index,title:r.title,description:r.description},null,8,["title","description"]))),128))]),_:1},8,["active"]),a("div",x,[a("button",{onClick:c,disabled:p.value<=0,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"上一步",8,S),a("button",{onClick:y,disabled:p.value>=l.value.length-1,style:{padding:"5px 10px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"下一步",8,B)])])]),_:1},8,["code"]),i[15]||(i[15]=k("",9))])}}});export{M as __pageData,Y as default};

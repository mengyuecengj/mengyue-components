import{_ as n}from"./chunks/upload.vue_vue_type_script_setup_true_lang.C7r1mw-K.js";import{I as P,o,c as h,a8 as v,J as e,w as t,j as a,a as i,t as k,e as c,A as d}from"./chunks/framework.DvHWw5tv.js";const E={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},F={style:{"margin-top":"10px",color:"#666","font-size":"12px"}},C={style:{display:"flex","flex-direction":"column",gap:"15px"}},w={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},_={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},M={style:{display:"flex","flex-direction":"column",gap:"15px"}},Y={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},$=JSON.parse('{"title":"Upload","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherUpload.md","filePath":"components/OtherUpload.md"}'),T={name:"components/OtherUpload.md"},N=Object.assign(T,{setup(R){const r=d(""),A=(l,s)=>{r.value=`上传成功: ${s.name}`},x=(l,s)=>{r.value=`上传失败: ${s.name} - ${l}`},B=(l,s)=>{r.value=`上传进度: ${s.name} - ${l}%`},u=d(""),D=(l,s)=>{u.value=URL.createObjectURL(s)},g=d(""),b=(l,s)=>{g.value=`文件上传成功: ${s.name}`},U=d({Authorization:"Bearer demo-token","X-Custom-Header":"custom-value"}),y=d(""),S=(l,s)=>{y.value=`带认证上传成功: ${s.name}`},m=d(""),f=(l,s)=>{m.value=`上传成功: ${s.name}`};return(l,s)=>{const p=P("ShowCode");return o(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[s[14]||(s[14]=v("",6)),e(p,{title:"代码演示",code:`
<template>
  <MYUpload 
    action='/api/upload'
    :show-file-list='true'
    @success='handleSuccess'
    @error='handleError'
    @progress='handleProgress'
  >
    <template #icon>📁</template>
    点击上传文件
  </MYUpload>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('上传成功:', file.name, res)
}
const handleError = (err, file) => {
  console.error('上传失败:', file.name, err)
}
const handleProgress = (percent, file) => {
  console.log('上传进度:', file.name, percent + '%')
}
<\/script>
  `.trim()},{demo:t(()=>[a("div",null,[e(n,{action:"/api/upload","show-file-list":!0,onSuccess:A,onError:x,onProgress:B},{icon:t(()=>[...s[0]||(s[0]=[i("📁",-1)])]),default:t(()=>[s[1]||(s[1]=i(" 点击上传文件 ",-1))]),_:1}),r.value?(o(),h("div",E,[a("div",null,k(r.value),1)])):c("",!0)])]),_:1},8,["code"]),s[15]||(s[15]=a("h3",{id:"头像上传",tabindex:"-1"},[i("头像上传 "),a("a",{class:"header-anchor",href:"#头像上传","aria-label":"Permalink to “头像上传”"},"​")],-1)),s[16]||(s[16]=a("p",null,[i("使用 "),a("code",null,"avatar"),i(" 属性开启头像上传模式。")],-1)),e(p,{title:"代码演示",code:`
<template>
  <MYUpload 
    action='/api/upload'
    :avatar='true'
    :src='avatarUrl'
    @success='handleAvatarSuccess'
  >
    <template #icon>👤</template>
    点击上传头像
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const avatarUrl = ref('')
const handleAvatarSuccess = (res, file) => {
  console.log('头像上传成功:', file.name)
  // 这里可以更新头像URL
  avatarUrl.value = URL.createObjectURL(file)
}
<\/script>
  `.trim()},{demo:t(()=>[a("div",null,[e(n,{action:"/api/upload",avatar:!0,src:u.value,onSuccess:D},{icon:t(()=>[...s[2]||(s[2]=[i("👤",-1)])]),default:t(()=>[s[3]||(s[3]=i(" 点击上传头像 ",-1))]),_:1},8,["src"]),a("div",F," 当前头像: "+k(u.value?"已设置":"未设置"),1)])]),_:1},8,["code"]),s[17]||(s[17]=a("h3",{id:"文件类型限制",tabindex:"-1"},[i("文件类型限制 "),a("a",{class:"header-anchor",href:"#文件类型限制","aria-label":"Permalink to “文件类型限制”"},"​")],-1)),s[18]||(s[18]=a("p",null,[i("使用 "),a("code",null,"accept"),i(" 属性限制可上传的文件类型。")],-1)),e(p,{title:"代码演示",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>图片上传 (仅限 jpg, png):</label>
      <MYUpload 
        action='/api/upload'
        accept='.jpg,.jpeg,.png'
        @success='handleSuccess'
      >
        <template #icon>🖼️</template>
        上传图片
      </MYUpload>
    </div>
    <div>
      <label>文档上传 (仅限 pdf, doc):</label>
      <MYUpload 
        action='/api/upload'
        accept='.pdf,.doc,.docx'
        @success='handleSuccess'
      >
        <template #icon>📄</template>
        上传文档
      </MYUpload>
    </div>
  </div>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('上传成功:', file.name)
}
<\/script>
  `.trim()},{demo:t(()=>[a("div",C,[a("div",null,[s[6]||(s[6]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"图片上传 (仅限 jpg, png):",-1)),e(n,{action:"/api/upload",accept:".jpg,.jpeg,.png",onSuccess:b},{icon:t(()=>[...s[4]||(s[4]=[i("🖼️",-1)])]),default:t(()=>[s[5]||(s[5]=i(" 上传图片 ",-1))]),_:1})]),a("div",null,[s[9]||(s[9]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"文档上传 (仅限 pdf, doc):",-1)),e(n,{action:"/api/upload",accept:".pdf,.doc,.docx",onSuccess:b},{icon:t(()=>[...s[7]||(s[7]=[i("📄",-1)])]),default:t(()=>[s[8]||(s[8]=i(" 上传文档 ",-1))]),_:1})]),g.value?(o(),h("div",w,[a("div",null,k(g.value),1)])):c("",!0)])]),_:1},8,["code"]),s[19]||(s[19]=a("h3",{id:"自定义请求头",tabindex:"-1"},[i("自定义请求头 "),a("a",{class:"header-anchor",href:"#自定义请求头","aria-label":"Permalink to “自定义请求头”"},"​")],-1)),s[20]||(s[20]=a("p",null,[i("使用 "),a("code",null,"headers"),i(" 属性设置上传请求的头部信息。")],-1)),e(p,{title:"代码演示",code:`
<template>
  <MYUpload 
    action='/api/upload'
    :headers='headers'
    @success='handleSuccess'
  >
    <template #icon>🔐</template>
    带认证的上传
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const headers = ref({
  'Authorization': 'Bearer your-token-here',
  'X-Custom-Header': 'custom-value'
})
const handleSuccess = (res, file) => {
  console.log('带认证上传成功:', file.name)
}
<\/script>
  `.trim()},{demo:t(()=>[a("div",null,[e(n,{action:"/api/upload",headers:U.value,onSuccess:S},{icon:t(()=>[...s[10]||(s[10]=[i("🔐",-1)])]),default:t(()=>[s[11]||(s[11]=i(" 带认证的上传 ",-1))]),_:1},8,["headers"]),y.value?(o(),h("div",_,[a("div",null,k(y.value),1)])):c("",!0)])]),_:1},8,["code"]),s[21]||(s[21]=a("h3",{id:"隐藏文件列表",tabindex:"-1"},[i("隐藏文件列表 "),a("a",{class:"header-anchor",href:"#隐藏文件列表","aria-label":"Permalink to “隐藏文件列表”"},"​")],-1)),s[22]||(s[22]=a("p",null,[i("使用 "),a("code",null,"show-file-list"),i(" 属性控制是否显示文件列表。")],-1)),e(p,{title:"代码演示",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>显示文件列表:</label>
      <MYUpload 
        action='/api/upload'
        :show-file-list='true'
        @success='handleSuccess'
      />
    </div>
    <div>
      <label>隐藏文件列表:</label>
      <MYUpload 
        action='/api/upload'
        :show-file-list='false'
        @success='handleSuccess'
      />
    </div>
  </div>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('上传成功:', file.name)
}
<\/script>
  `.trim()},{demo:t(()=>[a("div",M,[a("div",null,[s[12]||(s[12]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"显示文件列表:",-1)),e(n,{action:"/api/upload","show-file-list":!0,onSuccess:f})]),a("div",null,[s[13]||(s[13]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"隐藏文件列表:",-1)),e(n,{action:"/api/upload","show-file-list":!1,onSuccess:f})]),m.value?(o(),h("div",Y,[a("div",null,k(m.value),1)])):c("",!0)])]),_:1},8,["code"]),s[23]||(s[23]=v("",9))])}}});export{$ as __pageData,N as default};

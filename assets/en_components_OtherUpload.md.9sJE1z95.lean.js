import{_ as n}from"./chunks/upload.vue_vue_type_script_setup_true_lang.C7r1mw-K.js";import{I as C,o as p,c as h,a8 as v,J as i,w as t,j as e,a,t as c,e as k,A as d}from"./chunks/framework.DvHWw5tv.js";const F={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},P={style:{"margin-top":"10px",color:"#666","font-size":"12px"}},E={style:{display:"flex","flex-direction":"column",gap:"15px"}},w={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},T={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},R={style:{display:"flex","flex-direction":"column",gap:"15px"}},_={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},j=JSON.parse('{"title":"Upload","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/OtherUpload.md","filePath":"en/components/OtherUpload.md"}'),Y={name:"en/components/OtherUpload.md"},N=Object.assign(Y,{setup(L){const o=d(""),A=(l,s)=>{o.value=`Upload successful: ${s.name}`},U=(l,s)=>{o.value=`Upload failed: ${s.name} - ${l}`},D=(l,s)=>{o.value=`Upload progress: ${s.name} - ${l}%`},u=d(""),B=(l,s)=>{u.value=URL.createObjectURL(s)},g=d(""),y=(l,s)=>{g.value=`File upload successful: ${s.name}`},x=d({Authorization:"Bearer demo-token","X-Custom-Header":"custom-value"}),f=d(""),S=(l,s)=>{f.value=`Authenticated upload successful: ${s.name}`},m=d(""),b=(l,s)=>{m.value=`Upload successful: ${s.name}`};return(l,s)=>{const r=C("ShowCode");return p(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[s[14]||(s[14]=v("",6)),i(r,{title:"Code Demo",code:`
<template>
  <MYUpload 
    action='/api/upload'
    :show-file-list='true'
    @success='handleSuccess'
    @error='handleError'
    @progress='handleProgress'
  >
    <template #icon>📁</template>
    Click to upload file
  </MYUpload>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('Upload successful:', file.name, res)
}
const handleError = (err, file) => {
  console.error('Upload failed:', file.name, err)
}
const handleProgress = (percent, file) => {
  console.log('Upload progress:', file.name, percent + '%')
}
<\/script>
  `.trim()},{demo:t(()=>[e("div",null,[i(n,{action:"/api/upload","show-file-list":!0,onSuccess:A,onError:U,onProgress:D},{icon:t(()=>[...s[0]||(s[0]=[a("📁",-1)])]),default:t(()=>[s[1]||(s[1]=a(" Click to upload file ",-1))]),_:1}),o.value?(p(),h("div",F,[e("div",null,c(o.value),1)])):k("",!0)])]),_:1},8,["code"]),s[15]||(s[15]=e("h3",{id:"avatar-upload",tabindex:"-1"},[a("Avatar Upload "),e("a",{class:"header-anchor",href:"#avatar-upload","aria-label":"Permalink to “Avatar Upload”"},"​")],-1)),s[16]||(s[16]=e("p",null,[a("Use the "),e("code",null,"avatar"),a(" prop to enable avatar upload mode.")],-1)),i(r,{title:"Code Demo",code:`
<template>
  <MYUpload 
    action='/api/upload'
    :avatar='true'
    :src='avatarUrl'
    @success='handleAvatarSuccess'
  >
    <template #icon>👤</template>
    Click to upload avatar
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const avatarUrl = ref('')
const handleAvatarSuccess = (res, file) => {
  console.log('Avatar upload successful:', file.name)
  // Update avatar URL here
  avatarUrl.value = URL.createObjectURL(file)
}
<\/script>
  `.trim()},{demo:t(()=>[e("div",null,[i(n,{action:"/api/upload",avatar:!0,src:u.value,onSuccess:B},{icon:t(()=>[...s[2]||(s[2]=[a("👤",-1)])]),default:t(()=>[s[3]||(s[3]=a(" Click to upload avatar ",-1))]),_:1},8,["src"]),e("div",P," Current avatar: "+c(u.value?"Set":"Not set"),1)])]),_:1},8,["code"]),s[17]||(s[17]=e("h3",{id:"file-type-restriction",tabindex:"-1"},[a("File Type Restriction "),e("a",{class:"header-anchor",href:"#file-type-restriction","aria-label":"Permalink to “File Type Restriction”"},"​")],-1)),s[18]||(s[18]=e("p",null,[a("Use the "),e("code",null,"accept"),a(" prop to restrict the file types that can be uploaded.")],-1)),i(r,{title:"Code Demo",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>Image Upload (jpg, png only):</label>
      <MYUpload 
        action='/api/upload'
        accept='.jpg,.jpeg,.png'
        @success='handleSuccess'
      >
        <template #icon>🖼️</template>
        Upload Image
      </MYUpload>
    </div>
    <div>
      <label>Document Upload (pdf, doc only):</label>
      <MYUpload 
        action='/api/upload'
        accept='.pdf,.doc,.docx'
        @success='handleSuccess'
      >
        <template #icon>📄</template>
        Upload Document
      </MYUpload>
    </div>
  </div>
</template>
<script setup>
const handleSuccess = (res, file) => {
  console.log('Upload successful:', file.name)
}
<\/script>
  `.trim()},{demo:t(()=>[e("div",E,[e("div",null,[s[6]||(s[6]=e("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"Image Upload (jpg, png only):",-1)),i(n,{action:"/api/upload",accept:".jpg,.jpeg,.png",onSuccess:y},{icon:t(()=>[...s[4]||(s[4]=[a("🖼️",-1)])]),default:t(()=>[s[5]||(s[5]=a(" Upload Image ",-1))]),_:1})]),e("div",null,[s[9]||(s[9]=e("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"Document Upload (pdf, doc only):",-1)),i(n,{action:"/api/upload",accept:".pdf,.doc,.docx",onSuccess:y},{icon:t(()=>[...s[7]||(s[7]=[a("📄",-1)])]),default:t(()=>[s[8]||(s[8]=a(" Upload Document ",-1))]),_:1})]),g.value?(p(),h("div",w,[e("div",null,c(g.value),1)])):k("",!0)])]),_:1},8,["code"]),s[19]||(s[19]=e("h3",{id:"custom-request-headers",tabindex:"-1"},[a("Custom Request Headers "),e("a",{class:"header-anchor",href:"#custom-request-headers","aria-label":"Permalink to “Custom Request Headers”"},"​")],-1)),s[20]||(s[20]=e("p",null,[a("Use the "),e("code",null,"headers"),a(" prop to set custom headers for the upload request.")],-1)),i(r,{title:"Code Demo",code:`
<template>
  <MYUpload 
    action='/api/upload'
    :headers='headers'
    @success='handleSuccess'
  >
    <template #icon>🔐</template>
    Upload with Authentication
  </MYUpload>
</template>
<script setup>
import { ref } from 'vue'
const headers = ref({
  'Authorization': 'Bearer your-token-here',
  'X-Custom-Header': 'custom-value'
})
const handleSuccess = (res, file) => {
  console.log('Authenticated upload successful:', file.name)
}
<\/script>
  `.trim()},{demo:t(()=>[e("div",null,[i(n,{action:"/api/upload",headers:x.value,onSuccess:S},{icon:t(()=>[...s[10]||(s[10]=[a("🔐",-1)])]),default:t(()=>[s[11]||(s[11]=a(" Upload with Authentication ",-1))]),_:1},8,["headers"]),f.value?(p(),h("div",T,[e("div",null,c(f.value),1)])):k("",!0)])]),_:1},8,["code"]),s[21]||(s[21]=e("h3",{id:"hide-file-list",tabindex:"-1"},[a("Hide File List "),e("a",{class:"header-anchor",href:"#hide-file-list","aria-label":"Permalink to “Hide File List”"},"​")],-1)),s[22]||(s[22]=e("p",null,[a("Use the "),e("code",null,"show-file-list"),a(" prop to control whether the file list is displayed.")],-1)),i(r,{title:"Code Demo",code:`
<template>
  <div style='display: flex; flex-direction: column; gap: 15px;'>
    <div>
      <label>Show File List:</label>
      <MYUpload 
        action='/api/upload'
        :show-file-list='true'
        @success='handleSuccess'
      />
    </div>
    <div>
      <label>Hide File List:</label>
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
  console.log('Upload successful:', file.name)
}
<\/script>
  `.trim()},{demo:t(()=>[e("div",R,[e("div",null,[s[12]||(s[12]=e("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"Show File List:",-1)),i(n,{action:"/api/upload","show-file-list":!0,onSuccess:b})]),e("div",null,[s[13]||(s[13]=e("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"Hide File List:",-1)),i(n,{action:"/api/upload","show-file-list":!1,onSuccess:b})]),m.value?(p(),h("div",_,[e("div",null,c(m.value),1)])):k("",!0)])]),_:1},8,["code"]),s[23]||(s[23]=v("",9))])}}});export{j as __pageData,N as default};

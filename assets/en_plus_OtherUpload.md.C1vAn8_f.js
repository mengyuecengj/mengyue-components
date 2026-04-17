import{_ as n}from"./chunks/upload.vue_vue_type_script_setup_true_lang.C7r1mw-K.js";import{I as C,o as p,c as h,a8 as v,J as i,w as t,j as e,a,t as c,e as k,A as d}from"./chunks/framework.DvHWw5tv.js";const F={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},P={style:{"margin-top":"10px",color:"#666","font-size":"12px"}},E={style:{display:"flex","flex-direction":"column",gap:"15px"}},w={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},T={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},R={style:{display:"flex","flex-direction":"column",gap:"15px"}},_={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},j=JSON.parse('{"title":"Upload","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/OtherUpload.md","filePath":"en/plus/OtherUpload.md"}'),Y={name:"en/plus/OtherUpload.md"},N=Object.assign(Y,{setup(L){const o=d(""),A=(l,s)=>{o.value=`Upload successful: ${s.name}`},U=(l,s)=>{o.value=`Upload failed: ${s.name} - ${l}`},D=(l,s)=>{o.value=`Upload progress: ${s.name} - ${l}%`},u=d(""),B=(l,s)=>{u.value=URL.createObjectURL(s)},g=d(""),y=(l,s)=>{g.value=`File upload successful: ${s.name}`},x=d({Authorization:"Bearer demo-token","X-Custom-Header":"custom-value"}),f=d(""),S=(l,s)=>{f.value=`Authenticated upload successful: ${s.name}`},m=d(""),b=(l,s)=>{m.value=`Upload successful: ${s.name}`};return(l,s)=>{const r=C("ShowCode");return p(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[14]||(s[14]=v('<h1 id="upload" tabindex="-1">Upload <a class="header-anchor" href="#upload" aria-label="Permalink to “Upload”">​</a></h1><h2 id="brief-introduction" tabindex="-1">Brief Introduction <a class="header-anchor" href="#brief-introduction" aria-label="Permalink to “Brief Introduction”">​</a></h2><p>The Upload component is used for file upload functionality, supporting both regular file upload and avatar upload modes. mengyue-components has encapsulated it and performed vitest testing. You can use <code>&lt;MYUpload&gt;&lt;/MYUpload&gt;</code> or <code>&lt;MYUpload /&gt;</code> to implement file upload functionality.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to “Basic Usage”">​</a></h2><h3 id="basic-file-upload" tabindex="-1">Basic File Upload <a class="header-anchor" href="#basic-file-upload" aria-label="Permalink to “Basic File Upload”">​</a></h3><p>Basic file upload functionality supporting single or multiple file selection.</p>',6)),i(r,{title:"Code Demo",code:`
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
  `.trim()},{demo:t(()=>[e("div",R,[e("div",null,[s[12]||(s[12]=e("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"Show File List:",-1)),i(n,{action:"/api/upload","show-file-list":!0,onSuccess:b})]),e("div",null,[s[13]||(s[13]=e("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"Hide File List:",-1)),i(n,{action:"/api/upload","show-file-list":!1,onSuccess:b})]),m.value?(p(),h("div",_,[e("div",null,c(m.value),1)])):k("",!0)])]),_:1},8,["code"]),s[23]||(s[23]=v(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to “API Reference”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Options</th><th>Default</th></tr></thead><tbody><tr><td>action</td><td>Upload URL</td><td>string</td><td>—</td><td><code>Required</code></td></tr><tr><td>headers</td><td>Request headers for upload</td><td>object</td><td>—</td><td><code>{}</code></td></tr><tr><td>accept</td><td>Accepted file types</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>multiple</td><td>Whether to support multiple file selection</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>avatar</td><td>Whether in avatar upload mode</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>src</td><td>Avatar URL</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>show-file-list</td><td>Whether to show uploaded file list</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>onSuccess</td><td>Callback function on successful upload</td><td>function</td><td>—</td><td><code>undefined</code></td></tr><tr><td>onError</td><td>Callback function on failed upload</td><td>function</td><td>—</td><td><code>undefined</code></td></tr><tr><td>onProgress</td><td>Callback function on upload progress</td><td>function</td><td>—</td><td><code>undefined</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to “Events”">​</a></h3><table tabindex="0"><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>success</td><td>Triggered when file upload is successful</td><td>res: any, file: File</td></tr><tr><td>error</td><td>Triggered when file upload fails</td><td>err: any, file: File</td></tr><tr><td>progress</td><td>Triggered on upload progress change</td><td>percent: number, file: File</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to “Slots”">​</a></h3><table tabindex="0"><thead><tr><th>Slot Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Text content of the upload button</td></tr><tr><td>icon</td><td>Icon of the upload button</td></tr></tbody></table><h3 id="type-definitions" tabindex="-1">Type Definitions <a class="header-anchor" href="#type-definitions" aria-label="Permalink to “Type Definitions”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UploadProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  action</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  headers</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Record</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  accept</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  multiple</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  avatar</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  src</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  showFileList</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  onSuccess</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">res</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">File</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  onError</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">err</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">any</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">File</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  onProgress</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">percent</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">file</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">File</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,9))])}}});export{j as __pageData,N as default};

import{_ as n}from"./chunks/upload.vue_vue_type_script_setup_true_lang.CF5nb7tN.js";import{I as P,o,c as h,ah as v,J as e,w as t,j as a,a as i,t as k,e as c,y as d}from"./chunks/framework.DmoDkOge.js";const E={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},F={style:{"margin-top":"10px",color:"#666","font-size":"12px"}},C={style:{display:"flex","flex-direction":"column",gap:"15px"}},w={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},_={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},M={style:{display:"flex","flex-direction":"column",gap:"15px"}},Y={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},$=JSON.parse('{"title":"Upload","description":"","frontmatter":{},"headers":[],"relativePath":"plus/OtherUpload.md","filePath":"plus/OtherUpload.md"}'),T={name:"plus/OtherUpload.md"},N=Object.assign(T,{setup(R){const r=d(""),A=(l,s)=>{r.value=`上传成功: ${s.name}`},x=(l,s)=>{r.value=`上传失败: ${s.name} - ${l}`},B=(l,s)=>{r.value=`上传进度: ${s.name} - ${l}%`},u=d(""),D=(l,s)=>{u.value=URL.createObjectURL(s)},g=d(""),b=(l,s)=>{g.value=`文件上传成功: ${s.name}`},U=d({Authorization:"Bearer demo-token","X-Custom-Header":"custom-value"}),y=d(""),S=(l,s)=>{y.value=`带认证上传成功: ${s.name}`},m=d(""),f=(l,s)=>{m.value=`上传成功: ${s.name}`};return(l,s)=>{const p=P("ShowCode");return o(),h("div",null,[s[14]||(s[14]=v('<h1 id="upload" tabindex="-1">Upload <a class="header-anchor" href="#upload" aria-label="Permalink to “Upload”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Upload 文件上传组件，支持普通文件上传和头像上传两种模式。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYUpload&gt;&lt;/MYUpload&gt;</code> 或者 <code>&lt;MYUpload /&gt;</code> 来实现文件上传功能。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础文件上传" tabindex="-1">基础文件上传 <a class="header-anchor" href="#基础文件上传" aria-label="Permalink to “基础文件上传”">​</a></h3><p>基础的文件上传功能，支持选择单个或多个文件。</p>',6)),e(p,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",M,[a("div",null,[s[12]||(s[12]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"显示文件列表:",-1)),e(n,{action:"/api/upload","show-file-list":!0,onSuccess:f})]),a("div",null,[s[13]||(s[13]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"隐藏文件列表:",-1)),e(n,{action:"/api/upload","show-file-list":!1,onSuccess:f})]),m.value?(o(),h("div",Y,[a("div",null,k(m.value),1)])):c("",!0)])]),_:1},8,["code"]),s[23]||(s[23]=v(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>action</td><td>上传的地址</td><td>string</td><td>—</td><td><code>必需</code></td></tr><tr><td>headers</td><td>设置上传的请求头部</td><td>object</td><td>—</td><td><code>{}</code></td></tr><tr><td>accept</td><td>接受上传的文件类型</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>avatar</td><td>是否为头像上传模式</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>src</td><td>头像地址</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>show-file-list</td><td>是否显示已上传文件列表</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>onSuccess</td><td>上传成功时的回调函数</td><td>function</td><td>—</td><td><code>undefined</code></td></tr><tr><td>onError</td><td>上传失败时的回调函数</td><td>function</td><td>—</td><td><code>undefined</code></td></tr><tr><td>onProgress</td><td>上传进度时的回调函数</td><td>function</td><td>—</td><td><code>undefined</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to “事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>success</td><td>文件上传成功时触发</td><td>res: any, file: File</td></tr><tr><td>error</td><td>文件上传失败时触发</td><td>err: any, file: File</td></tr><tr><td>progress</td><td>文件上传进度变化时触发</td><td>percent: number, file: File</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to “插槽”">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>上传按钮的文本内容</td></tr><tr><td>icon</td><td>上传按钮的图标</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UploadProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,9))])}}});export{$ as __pageData,N as default};

import{_ as d}from"./chunks/upload.vue_vue_type_script_setup_true_lang.C7r1mw-K.js";import{I as D,o as r,c as o,a8 as x,J as e,w as n,j as a,a as s,t as c,e as u,A as l}from"./chunks/framework.DvHWw5tv.js";const U={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},S={style:{"margin-top":"10px",color:"#666","font-size":"12px"}},P={style:{display:"flex","flex-direction":"column",gap:"15px"}},E={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},F={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},C={style:{display:"flex","flex-direction":"column",gap:"15px"}},q={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},R=JSON.parse('{"title":"Upload","description":"","frontmatter":{},"headers":[],"relativePath":"plus/OtherUpload.md","filePath":"plus/OtherUpload.md"}'),_={name:"plus/OtherUpload.md"},I=Object.assign(_,{setup(M){const h=l(""),j=(t,i)=>{h.value=`上传成功: ${i.name}`},v=(t,i)=>{h.value=`上传失败: ${i.name} - ${t}`},w=(t,i)=>{h.value=`上传进度: ${i.name} - ${t}%`},g=l(""),A=(t,i)=>{g.value=URL.createObjectURL(i)},k=l(""),b=(t,i)=>{k.value=`文件上传成功: ${i.name}`},z=l({Authorization:"Bearer demo-token","X-Custom-Header":"custom-value"}),y=l(""),B=(t,i)=>{y.value=`带认证上传成功: ${i.name}`},f=l(""),m=(t,i)=>{f.value=`上传成功: ${i.name}`};return(t,i)=>{const p=D("ShowCode");return r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[14]||(i[14]=x("",6)),e(p,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a("div",null,[e(d,{action:"/api/upload","show-file-list":!0,onSuccess:j,onError:v,onProgress:w},{icon:n(()=>[...i[0]||(i[0]=[s("📁",-1)])]),default:n(()=>[i[1]||(i[1]=s(" 点击上传文件 ",-1))]),_:1}),h.value?(r(),o("div",U,[a("div",null,c(h.value),1)])):u("",!0)])]),_:1},8,["code"]),i[15]||(i[15]=a("h3",{id:"头像上传",tabindex:"-1"},[s("头像上传 "),a("a",{class:"header-anchor",href:"#头像上传","aria-label":"Permalink to “头像上传”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"touxiangshangchuan tou xiang shang chuan txsc ")],-1)),i[16]||(i[16]=a("p",null,[s("使用 "),a("code",null,"avatar"),s(" 属性开启头像上传模式。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingkaiqitouxiangshangchuanmoshi。 shi yong shu xing kai qi tou xiang shang chuan mo shi 。 sy sxkqtxscms。")],-1)),e(p,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a("div",null,[e(d,{action:"/api/upload",avatar:!0,src:g.value,onSuccess:A},{icon:n(()=>[...i[2]||(i[2]=[s("👤",-1)])]),default:n(()=>[i[3]||(i[3]=s(" 点击上传头像 ",-1))]),_:1},8,["src"]),a("div",S," 当前头像: "+c(g.value?"已设置":"未设置"),1)])]),_:1},8,["code"]),i[17]||(i[17]=a("h3",{id:"文件类型限制",tabindex:"-1"},[s("文件类型限制 "),a("a",{class:"header-anchor",href:"#文件类型限制","aria-label":"Permalink to “文件类型限制”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"wenjianleixingxianzhi wen jian lei xing xian zhi wjlxxz ")],-1)),i[18]||(i[18]=a("p",null,[s("使用 "),a("code",null,"accept"),s(" 属性限制可上传的文件类型。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingxianzhikeshangchuandewenjianleixing。 shi yong shu xing xian zhi ke shang chuan de wen jian lei xing 。 sy sxxzkscdwjlx。")],-1)),e(p,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a("div",P,[a("div",null,[i[6]||(i[6]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"图片上传 (仅限 jpg, png):",-1)),e(d,{action:"/api/upload",accept:".jpg,.jpeg,.png",onSuccess:b},{icon:n(()=>[...i[4]||(i[4]=[s("🖼️",-1)])]),default:n(()=>[i[5]||(i[5]=s(" 上传图片 ",-1))]),_:1})]),a("div",null,[i[9]||(i[9]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"文档上传 (仅限 pdf, doc):",-1)),e(d,{action:"/api/upload",accept:".pdf,.doc,.docx",onSuccess:b},{icon:n(()=>[...i[7]||(i[7]=[s("📄",-1)])]),default:n(()=>[i[8]||(i[8]=s(" 上传文档 ",-1))]),_:1})]),k.value?(r(),o("div",E,[a("div",null,c(k.value),1)])):u("",!0)])]),_:1},8,["code"]),i[19]||(i[19]=a("h3",{id:"自定义请求头",tabindex:"-1"},[s("自定义请求头 "),a("a",{class:"header-anchor",href:"#自定义请求头","aria-label":"Permalink to “自定义请求头”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiqingqiutou zi ding yi qing qiu tou zdyqqt ")],-1)),i[20]||(i[20]=a("p",null,[s("使用 "),a("code",null,"headers"),s(" 属性设置上传请求的头部信息。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingshezhishangchuanqingqiudetoubuxinxi。 shi yong shu xing she zhi shang chuan qing qiu de tou bu xin xi 。 sy sxszscqqdtbxx。")],-1)),e(p,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a("div",null,[e(d,{action:"/api/upload",headers:z.value,onSuccess:B},{icon:n(()=>[...i[10]||(i[10]=[s("🔐",-1)])]),default:n(()=>[i[11]||(i[11]=s(" 带认证的上传 ",-1))]),_:1},8,["headers"]),y.value?(r(),o("div",F,[a("div",null,c(y.value),1)])):u("",!0)])]),_:1},8,["code"]),i[21]||(i[21]=a("h3",{id:"隐藏文件列表",tabindex:"-1"},[s("隐藏文件列表 "),a("a",{class:"header-anchor",href:"#隐藏文件列表","aria-label":"Permalink to “隐藏文件列表”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yincangwenjianliebiao yin cang wen jian lie biao ycwjlb ")],-1)),i[22]||(i[22]=a("p",null,[s("使用 "),a("code",null,"show-file-list"),s(" 属性控制是否显示文件列表。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingkongzhishifouxianshiwenjianliebiao。 shi yong shu xing kong zhi shi fou xian shi wen jian lie biao 。 sy sxkzsfxswjlb。")],-1)),e(p,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a("div",C,[a("div",null,[i[12]||(i[12]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"显示文件列表:",-1)),e(d,{action:"/api/upload","show-file-list":!0,onSuccess:m})]),a("div",null,[i[13]||(i[13]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"隐藏文件列表:",-1)),e(d,{action:"/api/upload","show-file-list":!1,onSuccess:m})]),f.value?(r(),o("div",q,[a("div",null,c(f.value),1)])):u("",!0)])]),_:1},8,["code"]),i[23]||(i[23]=x("",9))])}}});export{R as __pageData,I as default};

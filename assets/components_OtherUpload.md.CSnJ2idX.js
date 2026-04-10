import{_ as d}from"./chunks/upload.vue_vue_type_script_setup_true_lang.C7r1mw-K.js";import{I as D,o as r,c as o,a8 as x,J as e,w as n,j as a,a as s,t as c,e as u,A as l}from"./chunks/framework.DvHWw5tv.js";const U={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},S={style:{"margin-top":"10px",color:"#666","font-size":"12px"}},P={style:{display:"flex","flex-direction":"column",gap:"15px"}},E={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},F={key:0,style:{"margin-top":"10px",padding:"10px",background:"#f5f5f5","border-radius":"4px"}},C={style:{display:"flex","flex-direction":"column",gap:"15px"}},q={key:0,style:{padding:"10px",background:"#f5f5f5","border-radius":"4px"}},R=JSON.parse('{"title":"Upload","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherUpload.md","filePath":"components/OtherUpload.md"}'),_={name:"components/OtherUpload.md"},I=Object.assign(_,{setup(M){const h=l(""),j=(t,i)=>{h.value=`上传成功: ${i.name}`},v=(t,i)=>{h.value=`上传失败: ${i.name} - ${t}`},w=(t,i)=>{h.value=`上传进度: ${i.name} - ${t}%`},g=l(""),A=(t,i)=>{g.value=URL.createObjectURL(i)},k=l(""),b=(t,i)=>{k.value=`文件上传成功: ${i.name}`},z=l({Authorization:"Bearer demo-token","X-Custom-Header":"custom-value"}),y=l(""),B=(t,i)=>{y.value=`带认证上传成功: ${i.name}`},f=l(""),m=(t,i)=>{f.value=`上传成功: ${i.name}`};return(t,i)=>{const p=D("ShowCode");return r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[14]||(i[14]=x('<h1 id="upload" tabindex="-1">Upload <a class="header-anchor" href="#upload" aria-label="Permalink to “Upload”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>Upload 文件上传组件，支持普通文件上传和头像上传两种模式。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYUpload&gt;&lt;/MYUpload&gt;</code> 或者 <code>&lt;MYUpload /&gt;</code> 来实现文件上传功能。<span class="pagefind-pinyin" aria-hidden="true">Upload wenjianshangchuanzujian，zhichiputongwenjianshangchuanhetouxiangshangchuanliangzhongmoshi。mengyue-components jinhanglefengzhuangbingjinhangle vitest ceshi。keyishiyong huozhe laishixianwenjianshangchuangongneng。 Upload wen jian shang chuan zu jian ， zhi chi pu tong wen jian shang chuan he tou xiang shang chuan liang zhong mo shi 。mengyue-components jin hang le feng zhuang bing jin hang le vitest ce shi 。 ke yi shi yong huo zhe lai shi xian wen jian shang chuan gong neng 。 Uwjsczj，zcptwjschtxsclzms。jhlfzbjhl cs。kysy hz lsxwjscgn。</span></p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a><span class="pagefind-pinyin" aria-hidden="true">jibenyongfa ji ben yong fa jbyf </span></h2><h3 id="基础文件上传" tabindex="-1">基础文件上传 <a class="header-anchor" href="#基础文件上传" aria-label="Permalink to “基础文件上传”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichuwenjianshangchuan ji chu wen jian shang chuan jcwjsc </span></h3><p>基础的文件上传功能，支持选择单个或多个文件。<span class="pagefind-pinyin" aria-hidden="true">jichudewenjianshangchuangongneng，zhichixuanzedangehuoduogewenjian。 ji chu de wen jian shang chuan gong neng ， zhi chi xuan ze dan ge huo duo ge wen jian 。 jcdwjscgn，zcxzdghdgwj。</span></p>',6)),e(p,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[a("div",C,[a("div",null,[i[12]||(i[12]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"显示文件列表:",-1)),e(d,{action:"/api/upload","show-file-list":!0,onSuccess:m})]),a("div",null,[i[13]||(i[13]=a("label",{style:{display:"block","margin-bottom":"5px","font-weight":"bold"}},"隐藏文件列表:",-1)),e(d,{action:"/api/upload","show-file-list":!1,onSuccess:m})]),f.value?(r(),o("div",q,[a("div",null,c(f.value),1)])):u("",!0)])]),_:1},8,["code"]),i[23]||(i[23]=x(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>action</td><td>上传的地址<span class="pagefind-pinyin" aria-hidden="true">shangchuandedizhi shang chuan de di zhi scddz</span></td><td>string</td><td>—</td><td><code>必需</code></td></tr><tr><td>headers</td><td>设置上传的请求头部<span class="pagefind-pinyin" aria-hidden="true">shezhishangchuandeqingqiutoubu she zhi shang chuan de qing qiu tou bu szscdqqtb</span></td><td>object</td><td>—</td><td><code>{}</code></td></tr><tr><td>accept</td><td>接受上传的文件类型<span class="pagefind-pinyin" aria-hidden="true">jieshoushangchuandewenjianleixing jie shou shang chuan de wen jian lei xing jsscdwjlx</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>multiple</td><td>是否支持多选文件<span class="pagefind-pinyin" aria-hidden="true">shifouzhichiduoxuanwenjian shi fou zhi chi duo xuan wen jian sfzcdxwj</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>avatar</td><td>是否为头像上传模式<span class="pagefind-pinyin" aria-hidden="true">shifouweitouxiangshangchuanmoshi shi fou wei tou xiang shang chuan mo shi sfwtxscms</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>src</td><td>头像地址<span class="pagefind-pinyin" aria-hidden="true">touxiangdizhi tou xiang di zhi txdz</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>show-file-list</td><td>是否显示已上传文件列表<span class="pagefind-pinyin" aria-hidden="true">shifouxianshiyishangchuanwenjianliebiao shi fou xian shi yi shang chuan wen jian lie biao sfxsyscwjlb</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>onSuccess</td><td>上传成功时的回调函数<span class="pagefind-pinyin" aria-hidden="true">shangchuanchenggongshidehuitiaohanshu shang chuan cheng gong shi de hui tiao han shu sccgsdhths</span></td><td>function</td><td>—</td><td><code>undefined</code></td></tr><tr><td>onError</td><td>上传失败时的回调函数<span class="pagefind-pinyin" aria-hidden="true">shangchuanshibaishidehuitiaohanshu shang chuan shi bai shi de hui tiao han shu scsbsdhths</span></td><td>function</td><td>—</td><td><code>undefined</code></td></tr><tr><td>onProgress</td><td>上传进度时的回调函数<span class="pagefind-pinyin" aria-hidden="true">shangchuanjindushidehuitiaohanshu shang chuan jin du shi de hui tiao han shu scjdsdhths</span></td><td>function</td><td>—</td><td><code>undefined</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to “事件”">​</a><span class="pagefind-pinyin" aria-hidden="true">shijian shi jian sj </span></h3><table tabindex="0"><thead><tr><th>事件名<span class="pagefind-pinyin" aria-hidden="true">shijianming shi jian ming sjm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th></tr></thead><tbody><tr><td>success</td><td>文件上传成功时触发<span class="pagefind-pinyin" aria-hidden="true">wenjianshangchuanchenggongshichufa wen jian shang chuan cheng gong shi chu fa wjsccgscf</span></td><td>res: any, file: File</td></tr><tr><td>error</td><td>文件上传失败时触发<span class="pagefind-pinyin" aria-hidden="true">wenjianshangchuanshibaishichufa wen jian shang chuan shi bai shi chu fa wjscsbscf</span></td><td>err: any, file: File</td></tr><tr><td>progress</td><td>文件上传进度变化时触发<span class="pagefind-pinyin" aria-hidden="true">wenjianshangchuanjindubianhuashichufa wen jian shang chuan jin du bian hua shi chu fa wjscjdbhscf</span></td><td>percent: number, file: File</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to “插槽”">​</a><span class="pagefind-pinyin" aria-hidden="true">chacao cha cao cc </span></h3><table tabindex="0"><thead><tr><th>插槽名<span class="pagefind-pinyin" aria-hidden="true">chacaoming cha cao ming ccm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th></tr></thead><tbody><tr><td>default</td><td>上传按钮的文本内容<span class="pagefind-pinyin" aria-hidden="true">shangchuananniudewenbenneirong shang chuan an niu de wen ben nei rong scandwbnr</span></td></tr><tr><td>icon</td><td>上传按钮的图标<span class="pagefind-pinyin" aria-hidden="true">shangchuananniudetubiao shang chuan an niu de tu biao scandtb</span></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> UploadProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,9))])}}});export{R as __pageData,I as default};

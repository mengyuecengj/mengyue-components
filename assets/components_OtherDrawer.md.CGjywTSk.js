import{_ as d}from"./chunks/drawer.vue_vue_type_script_setup_true_lang.BGUQN6kG.js";import{I as S,o as T,c as $,ah as V,J as n,w as a,j as e,a as i,t as h,y as l}from"./chunks/framework.DmoDkOge.js";import"./chunks/useStyleComputed.CS9pThfp.js";const z={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},M={style:{display:"flex",gap:"10px"}},Y={style:{display:"flex",gap:"10px"}},I={style:{display:"flex",gap:"10px"}},N={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},R=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherDrawer.md","filePath":"components/OtherDrawer.md"}'),O={name:"components/OtherDrawer.md"},q=Object.assign(O,{setup(H){const u=l(!1),c=l(!1),b=l("rtl"),A=l(""),k=r=>{b.value=r,A.value=`${B(r)}抽屉`,c.value=!0},B=r=>({rtl:"右侧",ltr:"左侧",ttb:"顶部",btt:"底部"})[r]||r,g=l(!1),f=l("30%"),F=l(""),w=r=>{f.value=r,F.value=`${r} 尺寸抽屉`,g.value=!0},y=l(!1),m=l("#f0f9ff"),D=r=>{m.value=r,y.value=!0},v=l(!1),x=l(!0),C=l(!0),E=(r,t)=>{x.value=r,C.value=t,v.value=!0},p=l(!1),P=()=>{alert("确认操作"),p.value=!1};return(r,t)=>{const o=S("ShowCode");return T(),$("div",null,[t[28]||(t[28]=V('<h1 id="drawer" tabindex="-1">Drawer <a class="header-anchor" href="#drawer" aria-label="Permalink to “Drawer”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Drawer 抽屉组件，用于从页面边缘滑出的面板，常用于展示更多内容或操作。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYDrawer&gt;&lt;/MYDrawer&gt;</code> 或者 <code>&lt;MYDrawer /&gt;</code> 来实现抽屉功能。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础抽屉" tabindex="-1">基础抽屉 <a class="header-anchor" href="#基础抽屉" aria-label="Permalink to “基础抽屉”">​</a></h3><p>基础的抽屉组件，默认从右侧滑出。</p>',6)),n(o,{title:"代码演示",code:`
<template>
  <div>
    <button @click='showDrawer = true'>打开抽屉</button>
    <MYDrawer v-model='showDrawer' title='基础抽屉'>
      <p>这里是抽屉的内容</p>
      <p>可以放置任何内容</p>
    </MYDrawer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
<\/script>
  `.trim()},{demo:a(()=>[e("div",null,[e("button",{onClick:t[0]||(t[0]=s=>u.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 打开抽屉 "),n(d,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=s=>u.value=s),title:"基础抽屉"},{default:a(()=>[...t[21]||(t[21]=[e("p",null,"这里是抽屉的内容",-1),e("p",null,"可以放置任何内容",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t[29]||(t[29]=e("h3",{id:"不同方向",tabindex:"-1"},[i("不同方向 "),e("a",{class:"header-anchor",href:"#不同方向","aria-label":"Permalink to “不同方向”"},"​")],-1)),t[30]||(t[30]=e("p",null,[i("使用 "),e("code",null,"direction"),i(" 属性设置抽屉的弹出方向。")],-1)),n(o,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
    <button @click='openDrawer('rtl')'>从右侧打开</button>
    <button @click='openDrawer('ltr')'>从左侧打开</button>
    <button @click='openDrawer('ttb')'>从顶部打开</button>
    <button @click='openDrawer('btt')'>从底部打开</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :direction='currentDirection'
  >
    <p>当前方向: {{ currentDirection }}</p>
    <p>抽屉内容...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentDirection = ref('rtl')
const currentTitle = ref('')
const openDrawer = (direction) => {
  currentDirection.value = direction
  currentTitle.value = \`\${getDirectionText(direction)}抽屉\`
  showDrawer.value = true
}
const getDirectionText = (dir) => {
  const map = { rtl: '右侧', ltr: '左侧', ttb: '顶部', btt: '底部' }
  return map[dir] || dir
}
<\/script>
  `.trim()},{demo:a(()=>[e("div",z,[e("button",{onClick:t[2]||(t[2]=s=>k("rtl")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从右侧打开 "),e("button",{onClick:t[3]||(t[3]=s=>k("ltr")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从左侧打开 "),e("button",{onClick:t[4]||(t[4]=s=>k("ttb")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从顶部打开 "),e("button",{onClick:t[5]||(t[5]=s=>k("btt")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从底部打开 ")]),n(d,{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=s=>c.value=s),title:A.value,direction:b.value},{default:a(()=>[e("p",null,"当前方向: "+h(B(b.value)),1),t[22]||(t[22]=e("p",null,"抽屉内容...",-1))]),_:1},8,["modelValue","title","direction"])]),_:1},8,["code"]),t[31]||(t[31]=e("h3",{id:"自定义尺寸",tabindex:"-1"},[i("自定义尺寸 "),e("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),t[32]||(t[32]=e("p",null,[i("使用 "),e("code",null,"size"),i(" 属性设置抽屉的尺寸。")],-1)),n(o,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openSizeDrawer('30%'')'>30% 宽度</button>
    <button @click='openSizeDrawer('500px')'>500px 宽度</button>
    <button @click='openSizeDrawer('80%'')'>80% 宽度</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :size='currentSize'
  >
    <p>当前尺寸: {{ currentSize }}</p>
    <p>抽屉内容...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentSize = ref('30%')
const currentTitle = ref('')
const openSizeDrawer = (size) => {
  currentSize.value = size
  currentTitle.value = \`\${size} 尺寸抽屉\`
  showDrawer.value = true
}
<\/script>
  `.trim()},{demo:a(()=>[e("div",M,[e("button",{onClick:t[7]||(t[7]=s=>w("30%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 30% 宽度 "),e("button",{onClick:t[8]||(t[8]=s=>w("500px")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 500px 宽度 "),e("button",{onClick:t[9]||(t[9]=s=>w("80%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 80% 宽度 ")]),n(d,{modelValue:g.value,"onUpdate:modelValue":t[10]||(t[10]=s=>g.value=s),title:F.value,size:f.value},{default:a(()=>[e("p",null,"当前尺寸: "+h(f.value),1),t[23]||(t[23]=e("p",null,"抽屉内容...",-1))]),_:1},8,["modelValue","title","size"])]),_:1},8,["code"]),t[33]||(t[33]=e("h3",{id:"自定义背景色",tabindex:"-1"},[i("自定义背景色 "),e("a",{class:"header-anchor",href:"#自定义背景色","aria-label":"Permalink to “自定义背景色”"},"​")],-1)),t[34]||(t[34]=e("p",null,[i("使用 "),e("code",null,"backgroundColor"),i(" 属性自定义抽屉的背景颜色。")],-1)),n(o,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openColorDrawer('#f0f9ff')'>浅蓝色</button>
    <button @click='openColorDrawer('#fef2f2')'>浅红色</button>
    <button @click='openColorDrawer('#f0fdf4')'>浅绿色</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='自定义颜色'
    :background-color='currentColor'
  >
    <p>自定义背景颜色的抽屉</p>
    <p>当前颜色: {{ currentColor }}</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentColor = ref('#f0f9ff')
const openColorDrawer = (color) => {
  currentColor.value = color
  showDrawer.value = true
}
<\/script>
  `.trim()},{demo:a(()=>[e("div",Y,[e("button",{onClick:t[11]||(t[11]=s=>D("#f0f9ff")),style:{padding:"8px 16px",background:"#f0f9ff",color:"#0369a1",border:"1px solid #bae6fd","border-radius":"4px",cursor:"pointer"}}," 浅蓝色 "),e("button",{onClick:t[12]||(t[12]=s=>D("#fef2f2")),style:{padding:"8px 16px",background:"#fef2f2",color:"#dc2626",border:"1px solid #fecaca","border-radius":"4px",cursor:"pointer"}}," 浅红色 "),e("button",{onClick:t[13]||(t[13]=s=>D("#f0fdf4")),style:{padding:"8px 16px",background:"#f0fdf4",color:"#16a34a",border:"1px solid #bbf7d0","border-radius":"4px",cursor:"pointer"}}," 浅绿色 ")]),n(d,{modelValue:y.value,"onUpdate:modelValue":t[14]||(t[14]=s=>y.value=s),title:"自定义颜色","background-color":m.value},{default:a(()=>[t[24]||(t[24]=e("p",null,"自定义背景颜色的抽屉",-1)),e("p",null,"当前颜色: "+h(m.value),1)]),_:1},8,["modelValue","background-color"])]),_:1},8,["code"]),t[35]||(t[35]=e("h3",{id:"隐藏头部和关闭按钮",tabindex:"-1"},[i("隐藏头部和关闭按钮 "),e("a",{class:"header-anchor",href:"#隐藏头部和关闭按钮","aria-label":"Permalink to “隐藏头部和关闭按钮”"},"​")],-1)),t[36]||(t[36]=e("p",null,[i("使用 "),e("code",null,"with-header"),i(" 和 "),e("code",null,"show-close"),i(" 属性控制头部和关闭按钮的显示。")],-1)),n(o,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openCustomDrawer(true, true)'>显示头部和关闭按钮</button>
    <button @click='openCustomDrawer(false, false)'>隐藏头部和关闭按钮</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='自定义头部'
    :with-header='withHeader'
    :show-close='showClose'
  >
    <p>头部显示: {{ withHeader ? '是' : '否' }}</p>
    <p>关闭按钮: {{ showClose ? '是' : '否' }}</p>
    <p>点击遮罩层可以关闭</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const withHeader = ref(true)
const showClose = ref(true)
const openCustomDrawer = (header, close) => {
  withHeader.value = header
  showClose.value = close
  showDrawer.value = true
}
<\/script>
  `.trim()},{demo:a(()=>[e("div",I,[e("button",{onClick:t[15]||(t[15]=s=>E(!0,!0)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 显示头部和关闭按钮 "),e("button",{onClick:t[16]||(t[16]=s=>E(!1,!1)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 隐藏头部和关闭按钮 ")]),n(d,{modelValue:v.value,"onUpdate:modelValue":t[17]||(t[17]=s=>v.value=s),title:"自定义头部","with-header":x.value,"show-close":C.value},{default:a(()=>[e("p",null,"头部显示: "+h(x.value?"是":"否"),1),e("p",null,"关闭按钮: "+h(C.value?"是":"否"),1),t[25]||(t[25]=e("p",null,"点击遮罩层可以关闭",-1))]),_:1},8,["modelValue","with-header","show-close"])]),_:1},8,["code"]),t[37]||(t[37]=e("h3",{id:"带底部操作栏",tabindex:"-1"},[i("带底部操作栏 "),e("a",{class:"header-anchor",href:"#带底部操作栏","aria-label":"Permalink to “带底部操作栏”"},"​")],-1)),t[38]||(t[38]=e("p",null,"使用 footer 插槽添加底部操作栏。",-1)),n(o,{title:"代码演示",code:`
<template>
  <button @click='showDrawer = true'>打开带底部抽屉</button>
  <MYDrawer v-model='showDrawer' title='带底部操作栏'>
    <p>这里是抽屉的主要内容</p>
    <p>可以放置表单、列表等内容</p>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button @click='showDrawer = false'>取消</button>
        <button @click='handleConfirm' style='background: #409EFF; color: white;'>确认</button>
      </div>
    </template>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const handleConfirm = () => {
  alert('确认操作')
  showDrawer.value = false
}
<\/script>
  `.trim()},{demo:a(()=>[e("div",null,[e("button",{onClick:t[18]||(t[18]=s=>p.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 打开带底部抽屉 "),n(d,{modelValue:p.value,"onUpdate:modelValue":t[20]||(t[20]=s=>p.value=s),title:"带底部操作栏"},{footer:a(()=>[e("div",N,[e("button",{onClick:t[19]||(t[19]=s=>p.value=!1),style:{padding:"8px 16px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"取消"),e("button",{onClick:P,style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"确认")])]),default:a(()=>[t[26]||(t[26]=e("p",null,"这里是抽屉的主要内容",-1)),t[27]||(t[27]=e("p",null,"可以放置表单、列表等内容",-1))]),_:1},8,["modelValue"])])]),_:1},8,["code"]),t[39]||(t[39]=V(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>是否显示抽屉</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>title</td><td>抽屉标题</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>direction</td><td>抽屉打开方向</td><td>string</td><td><code>ltr</code>/<code>rtl</code>/<code>ttb</code>/<code>btt</code></td><td><code>rtl</code></td></tr><tr><td>size</td><td>抽屉尺寸</td><td>string | number</td><td>—</td><td><code>30%</code></td></tr><tr><td>with-header</td><td>是否显示头部</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>show-close</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>background-color</td><td>抽屉背景色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>close-on-click-modal</td><td>是否可以通过点击遮罩层关闭抽屉</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>close-on-press-escape</td><td>是否可以通过按下 ESC 关闭抽屉</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>lock-scroll</td><td>是否在抽屉显示时将 body 滚动锁定</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>before-close</td><td>关闭前的回调函数</td><td>function</td><td>—</td><td><code>undefined</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to “事件”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>抽屉显示状态变化时触发</td><td>value: boolean</td></tr><tr><td>open</td><td>抽屉打开时触发</td><td>—</td></tr><tr><td>close</td><td>抽屉关闭时触发</td><td>—</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to “插槽”">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>抽屉主体内容</td></tr><tr><td>title</td><td>抽屉标题内容</td></tr><tr><td>footer</td><td>抽屉底部内容</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DrawerProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  modelValue</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  direction</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ltr</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">rtl</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">ttb</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">btt</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  size</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  withHeader</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  showClose</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  closeOnClickModal</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  closeOnPressEscape</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  lockScroll</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">  beforeClose</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: (</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">done</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">) =&gt; </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,9))])}}});export{R as __pageData,q as default};

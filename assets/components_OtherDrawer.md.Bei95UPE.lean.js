import{d as N,x as l,z as H,h as I,p as U,b as j,o as k,c as w,e as C,J as n,T,w as i,a1 as _,a2 as J,j as t,O as M,k as R,n as L,r as $,a,t as g,aj as q,I as G,ah as Y}from"./chunks/framework.DHTvsukI.js";import{u as K}from"./chunks/useStyleComputed.BAeCZWeL.js";const Q={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},direction:{type:String,default:"rtl"},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},beforeClose:Function,lockScroll:{type:Boolean,default:!0}},W={key:0,class:"my-drawer__wrapper"},X={key:0,class:"my-drawer__header"},Z={class:"my-drawer__body"},ee={key:1,class:"my-drawer__footer"},y=N({name:"MYDrawer",__name:"drawer",props:Q,emits:["update:modelValue","open","close"],setup(z,{emit:m}){const r=z,h=m,p=l(r.modelValue),c=K(r,{propToStyleMap:{backgroundColor:"backgroundColor"}});H(()=>r.modelValue,o=>{p.value=o,o?D():u()});const B=I(()=>["rtl","ltr"].includes(r.direction)?{width:typeof r.size=="number"?`${r.size}px`:r.size}:{height:typeof r.size=="number"?`${r.size}px`:r.size}),D=()=>{h("open"),r.lockScroll&&(document.body.style.overflow="hidden")},u=()=>{h("close"),r.lockScroll&&(document.body.style.overflow=""),h("update:modelValue",!1)},b=()=>{r.beforeClose?r.beforeClose(u):u()},v=()=>{r.closeOnClickModal&&b()};return U(()=>{r.closeOnPressEscape&&window.addEventListener("keydown",o=>{o.key==="Escape"&&p.value&&b()})}),(o,A)=>(k(),j(q,{to:"body"},[p.value?(k(),w("div",W,[n(T,{name:"my-drawer-fade"},{default:i(()=>[_(t("div",{class:"my-drawer__mask",onClick:v},null,512),[[J,p.value]])]),_:1}),n(T,{name:"my-drawer-slide",style:M(R(c))},{default:i(()=>[p.value?(k(),w("div",{key:0,class:L(["my-drawer",`my-drawer--${r.direction}`]),style:M(B.value)},[r.withHeader?(k(),w("header",X,[$(o.$slots,"title",{},()=>[a(g(r.title),1)]),r.showClose?(k(),w("button",{key:0,class:"my-drawer__close",onClick:b}," × ")):C("",!0)])):C("",!0),t("section",Z,[$(o.$slots,"default")]),o.$slots.footer?(k(),w("footer",ee,[$(o.$slots,"footer")])):C("",!0)],6)):C("",!0)]),_:3},8,["style"])])):C("",!0)]))}}),te={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},se={style:{display:"flex",gap:"10px"}},re={style:{display:"flex",gap:"10px"}},ae={style:{display:"flex",gap:"10px"}},ie={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},de=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherDrawer.md","filePath":"components/OtherDrawer.md"}'),le={name:"components/OtherDrawer.md"},pe=Object.assign(le,{setup(z){const m=l(!1),r=l(!1),h=l("rtl"),p=l(""),c=d=>{h.value=d,p.value=`${B(d)}抽屉`,r.value=!0},B=d=>({rtl:"右侧",ltr:"左侧",ttb:"顶部",btt:"底部"})[d]||d,D=l(!1),u=l("30%"),b=l(""),v=d=>{u.value=d,b.value=`${d} 尺寸抽屉`,D.value=!0},o=l(!1),A=l("#f0f9ff"),F=d=>{A.value=d,o.value=!0},S=l(!1),E=l(!0),V=l(!0),P=(d,e)=>{E.value=d,V.value=e,S.value=!0},x=l(!1),O=()=>{alert("确认操作"),x.value=!1};return(d,e)=>{const f=G("ShowCode");return k(),w("div",null,[e[28]||(e[28]=Y("",6)),n(f,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",null,[t("button",{onClick:e[0]||(e[0]=s=>m.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 打开抽屉 "),n(y,{modelValue:m.value,"onUpdate:modelValue":e[1]||(e[1]=s=>m.value=s),title:"基础抽屉"},{default:i(()=>[...e[21]||(e[21]=[t("p",null,"这里是抽屉的内容",-1),t("p",null,"可以放置任何内容",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[29]||(e[29]=t("h3",{id:"不同方向",tabindex:"-1"},[a("不同方向 "),t("a",{class:"header-anchor",href:"#不同方向","aria-label":"Permalink to “不同方向”"},"​")],-1)),e[30]||(e[30]=t("p",null,[a("使用 "),t("code",null,"direction"),a(" 属性设置抽屉的弹出方向。")],-1)),n(f,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",te,[t("button",{onClick:e[2]||(e[2]=s=>c("rtl")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从右侧打开 "),t("button",{onClick:e[3]||(e[3]=s=>c("ltr")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从左侧打开 "),t("button",{onClick:e[4]||(e[4]=s=>c("ttb")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从顶部打开 "),t("button",{onClick:e[5]||(e[5]=s=>c("btt")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从底部打开 ")]),n(y,{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=s=>r.value=s),title:p.value,direction:h.value},{default:i(()=>[t("p",null,"当前方向: "+g(B(h.value)),1),e[22]||(e[22]=t("p",null,"抽屉内容...",-1))]),_:1},8,["modelValue","title","direction"])]),_:1},8,["code"]),e[31]||(e[31]=t("h3",{id:"自定义尺寸",tabindex:"-1"},[a("自定义尺寸 "),t("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[32]||(e[32]=t("p",null,[a("使用 "),t("code",null,"size"),a(" 属性设置抽屉的尺寸。")],-1)),n(f,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",se,[t("button",{onClick:e[7]||(e[7]=s=>v("30%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 30% 宽度 "),t("button",{onClick:e[8]||(e[8]=s=>v("500px")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 500px 宽度 "),t("button",{onClick:e[9]||(e[9]=s=>v("80%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 80% 宽度 ")]),n(y,{modelValue:D.value,"onUpdate:modelValue":e[10]||(e[10]=s=>D.value=s),title:b.value,size:u.value},{default:i(()=>[t("p",null,"当前尺寸: "+g(u.value),1),e[23]||(e[23]=t("p",null,"抽屉内容...",-1))]),_:1},8,["modelValue","title","size"])]),_:1},8,["code"]),e[33]||(e[33]=t("h3",{id:"自定义背景色",tabindex:"-1"},[a("自定义背景色 "),t("a",{class:"header-anchor",href:"#自定义背景色","aria-label":"Permalink to “自定义背景色”"},"​")],-1)),e[34]||(e[34]=t("p",null,[a("使用 "),t("code",null,"backgroundColor"),a(" 属性自定义抽屉的背景颜色。")],-1)),n(f,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",re,[t("button",{onClick:e[11]||(e[11]=s=>F("#f0f9ff")),style:{padding:"8px 16px",background:"#f0f9ff",color:"#0369a1",border:"1px solid #bae6fd","border-radius":"4px",cursor:"pointer"}}," 浅蓝色 "),t("button",{onClick:e[12]||(e[12]=s=>F("#fef2f2")),style:{padding:"8px 16px",background:"#fef2f2",color:"#dc2626",border:"1px solid #fecaca","border-radius":"4px",cursor:"pointer"}}," 浅红色 "),t("button",{onClick:e[13]||(e[13]=s=>F("#f0fdf4")),style:{padding:"8px 16px",background:"#f0fdf4",color:"#16a34a",border:"1px solid #bbf7d0","border-radius":"4px",cursor:"pointer"}}," 浅绿色 ")]),n(y,{modelValue:o.value,"onUpdate:modelValue":e[14]||(e[14]=s=>o.value=s),title:"自定义颜色","background-color":A.value},{default:i(()=>[e[24]||(e[24]=t("p",null,"自定义背景颜色的抽屉",-1)),t("p",null,"当前颜色: "+g(A.value),1)]),_:1},8,["modelValue","background-color"])]),_:1},8,["code"]),e[35]||(e[35]=t("h3",{id:"隐藏头部和关闭按钮",tabindex:"-1"},[a("隐藏头部和关闭按钮 "),t("a",{class:"header-anchor",href:"#隐藏头部和关闭按钮","aria-label":"Permalink to “隐藏头部和关闭按钮”"},"​")],-1)),e[36]||(e[36]=t("p",null,[a("使用 "),t("code",null,"with-header"),a(" 和 "),t("code",null,"show-close"),a(" 属性控制头部和关闭按钮的显示。")],-1)),n(f,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",ae,[t("button",{onClick:e[15]||(e[15]=s=>P(!0,!0)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 显示头部和关闭按钮 "),t("button",{onClick:e[16]||(e[16]=s=>P(!1,!1)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 隐藏头部和关闭按钮 ")]),n(y,{modelValue:S.value,"onUpdate:modelValue":e[17]||(e[17]=s=>S.value=s),title:"自定义头部","with-header":E.value,"show-close":V.value},{default:i(()=>[t("p",null,"头部显示: "+g(E.value?"是":"否"),1),t("p",null,"关闭按钮: "+g(V.value?"是":"否"),1),e[25]||(e[25]=t("p",null,"点击遮罩层可以关闭",-1))]),_:1},8,["modelValue","with-header","show-close"])]),_:1},8,["code"]),e[37]||(e[37]=t("h3",{id:"带底部操作栏",tabindex:"-1"},[a("带底部操作栏 "),t("a",{class:"header-anchor",href:"#带底部操作栏","aria-label":"Permalink to “带底部操作栏”"},"​")],-1)),e[38]||(e[38]=t("p",null,"使用 footer 插槽添加底部操作栏。",-1)),n(f,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",null,[t("button",{onClick:e[18]||(e[18]=s=>x.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 打开带底部抽屉 "),n(y,{modelValue:x.value,"onUpdate:modelValue":e[20]||(e[20]=s=>x.value=s),title:"带底部操作栏"},{footer:i(()=>[t("div",ie,[t("button",{onClick:e[19]||(e[19]=s=>x.value=!1),style:{padding:"8px 16px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"取消"),t("button",{onClick:O,style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"确认")])]),default:i(()=>[e[26]||(e[26]=t("p",null,"这里是抽屉的主要内容",-1)),e[27]||(e[27]=t("p",null,"可以放置表单、列表等内容",-1))]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[39]||(e[39]=Y("",9))])}}});export{de as __pageData,pe as default};

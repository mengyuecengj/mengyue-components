import{_ as d}from"./chunks/drawer.vue_vue_type_script_setup_true_lang.DR2H-smv.js";import{I as z,o as V,c as P,a8 as S,J as n,w as a,j as t,a as s,t as h,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const H={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},O={style:{display:"flex",gap:"10px"}},Y={style:{display:"flex",gap:"10px"}},$={style:{display:"flex",gap:"10px"}},M={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},I=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/OtherDrawer.md","filePath":"en/plus/OtherDrawer.md"}'),W={name:"en/plus/OtherDrawer.md"},j=Object.assign(W,{setup(N){const k=o(!1),c=o(!1),b=o("rtl"),B=o(""),u=i=>{b.value=i,B.value=`${A(i)} Drawer`,c.value=!0},A=i=>({rtl:"Right",ltr:"Left",ttb:"Top",btt:"Bottom"})[i]||i,w=o(!1),f=o("30%"),F=o(""),g=i=>{f.value=i,F.value=`${i} Size Drawer`,w.value=!0},m=o(!1),D=o("#f0f9ff"),y=i=>{D.value=i,m.value=!0},C=o(!1),v=o(!0),x=o(!0),T=(i,e)=>{v.value=i,x.value=e,C.value=!0},p=o(!1),E=()=>{alert("Confirmation action"),p.value=!1};return(i,e)=>{const l=z("ShowCode");return V(),P("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[28]||(e[28]=S("",6)),n(l,{title:"Code Demo",code:`
<template>
  <div>
    <button @click='showDrawer = true'>Open Drawer</button>
    <MYDrawer v-model='showDrawer' title='Basic Drawer'>
      <p>This is the content of the drawer</p>
      <p>Any content can be placed here</p>
    </MYDrawer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
<\/script>
  `.trim()},{demo:a(()=>[t("div",null,[t("button",{onClick:e[0]||(e[0]=r=>k.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Open Drawer "),n(d,{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=r=>k.value=r),title:"Basic Drawer"},{default:a(()=>[...e[21]||(e[21]=[t("p",null,"This is the content of the drawer",-1),t("p",null,"Any content can be placed here",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[29]||(e[29]=t("h3",{id:"different-directions",tabindex:"-1"},[s("Different Directions "),t("a",{class:"header-anchor",href:"#different-directions","aria-label":"Permalink to “Different Directions”"},"​")],-1)),e[30]||(e[30]=t("p",null,[s("Use the "),t("code",null,"direction"),s(" prop to set the drawer's slide-out direction.")],-1)),n(l,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
    <button @click='openDrawer('rtl')'>Open from Right</button>
    <button @click='openDrawer('ltr')'>Open from Left</button>
    <button @click='openDrawer('ttb')'>Open from Top</button>
    <button @click='openDrawer('btt')'>Open from Bottom</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :direction='currentDirection'
  >
    <p>Current direction: {{ currentDirection }}</p>
    <p>Drawer content...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentDirection = ref('rtl')
const currentTitle = ref('')
const openDrawer = (direction) => {
  currentDirection.value = direction
  currentTitle.value = \`\${getDirectionText(direction)} Drawer\`
  showDrawer.value = true
}
const getDirectionText = (dir) => {
  const map = { rtl: 'Right', ltr: 'Left', ttb: 'Top', btt: 'Bottom' }
  return map[dir] || dir
}
<\/script>
  `.trim()},{demo:a(()=>[t("div",H,[t("button",{onClick:e[2]||(e[2]=r=>u("rtl")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Open from Right "),t("button",{onClick:e[3]||(e[3]=r=>u("ltr")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Open from Left "),t("button",{onClick:e[4]||(e[4]=r=>u("ttb")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Open from Top "),t("button",{onClick:e[5]||(e[5]=r=>u("btt")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Open from Bottom ")]),n(d,{modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=r=>c.value=r),title:B.value,direction:b.value},{default:a(()=>[t("p",null,"Current direction: "+h(A(b.value)),1),e[22]||(e[22]=t("p",null,"Drawer content...",-1))]),_:1},8,["modelValue","title","direction"])]),_:1},8,["code"]),e[31]||(e[31]=t("h3",{id:"custom-size",tabindex:"-1"},[s("Custom Size "),t("a",{class:"header-anchor",href:"#custom-size","aria-label":"Permalink to “Custom Size”"},"​")],-1)),e[32]||(e[32]=t("p",null,[s("Use the "),t("code",null,"size"),s(" prop to set the drawer's size.")],-1)),n(l,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openSizeDrawer('30%'')'>30% Width</button>
    <button @click='openSizeDrawer('500px')'>500px Width</button>
    <button @click='openSizeDrawer('80%'')'>80% Width</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :size='currentSize'
  >
    <p>Current size: {{ currentSize }}</p>
    <p>Drawer content...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentSize = ref('30%')
const currentTitle = ref('')
const openSizeDrawer = (size) => {
  currentSize.value = size
  currentTitle.value = \`\${size} Size Drawer\`
  showDrawer.value = true
}
<\/script>
  `.trim()},{demo:a(()=>[t("div",O,[t("button",{onClick:e[7]||(e[7]=r=>g("30%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 30% Width "),t("button",{onClick:e[8]||(e[8]=r=>g("500px")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 500px Width "),t("button",{onClick:e[9]||(e[9]=r=>g("80%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 80% Width ")]),n(d,{modelValue:w.value,"onUpdate:modelValue":e[10]||(e[10]=r=>w.value=r),title:F.value,size:f.value},{default:a(()=>[t("p",null,"Current size: "+h(f.value),1),e[23]||(e[23]=t("p",null,"Drawer content...",-1))]),_:1},8,["modelValue","title","size"])]),_:1},8,["code"]),e[33]||(e[33]=t("h3",{id:"custom-background-color",tabindex:"-1"},[s("Custom Background Color "),t("a",{class:"header-anchor",href:"#custom-background-color","aria-label":"Permalink to “Custom Background Color”"},"​")],-1)),e[34]||(e[34]=t("p",null,[s("Use the "),t("code",null,"backgroundColor"),s(" prop to customize the drawer's background color.")],-1)),n(l,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openColorDrawer('#f0f9ff')'>Light Blue</button>
    <button @click='openColorDrawer('#fef2f2')'>Light Red</button>
    <button @click='openColorDrawer('#f0fdf4')'>Light Green</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='Custom Color'
    :background-color='currentColor'
  >
    <p>Drawer with custom background color</p>
    <p>Current color: {{ currentColor }}</p>
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
  `.trim()},{demo:a(()=>[t("div",Y,[t("button",{onClick:e[11]||(e[11]=r=>y("#f0f9ff")),style:{padding:"8px 16px",background:"#f0f9ff",color:"#0369a1",border:"1px solid #bae6fd","border-radius":"4px",cursor:"pointer"}}," Light Blue "),t("button",{onClick:e[12]||(e[12]=r=>y("#fef2f2")),style:{padding:"8px 16px",background:"#fef2f2",color:"#dc2626",border:"1px solid #fecaca","border-radius":"4px",cursor:"pointer"}}," Light Red "),t("button",{onClick:e[13]||(e[13]=r=>y("#f0fdf4")),style:{padding:"8px 16px",background:"#f0fdf4",color:"#16a34a",border:"1px solid #bbf7d0","border-radius":"4px",cursor:"pointer"}}," Light Green ")]),n(d,{modelValue:m.value,"onUpdate:modelValue":e[14]||(e[14]=r=>m.value=r),title:"Custom Color","background-color":D.value},{default:a(()=>[e[24]||(e[24]=t("p",null,"Drawer with custom background color",-1)),t("p",null,"Current color: "+h(D.value),1)]),_:1},8,["modelValue","background-color"])]),_:1},8,["code"]),e[35]||(e[35]=t("h3",{id:"hide-header-and-close-button",tabindex:"-1"},[s("Hide Header and Close Button "),t("a",{class:"header-anchor",href:"#hide-header-and-close-button","aria-label":"Permalink to “Hide Header and Close Button”"},"​")],-1)),e[36]||(e[36]=t("p",null,[s("Use the "),t("code",null,"with-header"),s(" and "),t("code",null,"show-close"),s(" props to control the display of the header and close button.")],-1)),n(l,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openCustomDrawer(true, true)'>Show Header and Close Button</button>
    <button @click='openCustomDrawer(false, false)'>Hide Header and Close Button</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='Custom Header'
    :with-header='withHeader'
    :show-close='showClose'
  >
    <p>Show Header: {{ withHeader ? 'Yes' : 'No' }}</p>
    <p>Show Close Button: {{ showClose ? 'Yes' : 'No' }}</p>
    <p>Click on the mask layer to close</p>
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
  `.trim()},{demo:a(()=>[t("div",$,[t("button",{onClick:e[15]||(e[15]=r=>T(!0,!0)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Show Header and Close Button "),t("button",{onClick:e[16]||(e[16]=r=>T(!1,!1)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Hide Header and Close Button ")]),n(d,{modelValue:C.value,"onUpdate:modelValue":e[17]||(e[17]=r=>C.value=r),title:"Custom Header","with-header":v.value,"show-close":x.value},{default:a(()=>[t("p",null,"Show Header: "+h(v.value?"Yes":"No"),1),t("p",null,"Show Close Button: "+h(x.value?"Yes":"No"),1),e[25]||(e[25]=t("p",null,"Click on the mask layer to close",-1))]),_:1},8,["modelValue","with-header","show-close"])]),_:1},8,["code"]),e[37]||(e[37]=t("h3",{id:"with-footer-action-bar",tabindex:"-1"},[s("With Footer Action Bar "),t("a",{class:"header-anchor",href:"#with-footer-action-bar","aria-label":"Permalink to “With Footer Action Bar”"},"​")],-1)),e[38]||(e[38]=t("p",null,"Use the footer slot to add a footer action bar.",-1)),n(l,{title:"Code Demo",code:`
<template>
  <button @click='showDrawer = true'>Open Drawer with Footer</button>
  <MYDrawer v-model='showDrawer' title='With Footer Action Bar'>
    <p>This is the main content of the drawer</p>
    <p>Forms, lists, etc. can be placed here</p>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button @click='showDrawer = false'>Cancel</button>
        <button @click='handleConfirm' style='background: #409EFF; color: white;'>Confirm</button>
      </div>
    </template>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const handleConfirm = () => {
  alert('Confirmation action')
  showDrawer.value = false
}
<\/script>
  `.trim()},{demo:a(()=>[t("div",null,[t("button",{onClick:e[18]||(e[18]=r=>p.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," Open Drawer with Footer "),n(d,{modelValue:p.value,"onUpdate:modelValue":e[20]||(e[20]=r=>p.value=r),title:"With Footer Action Bar"},{footer:a(()=>[t("div",M,[t("button",{onClick:e[19]||(e[19]=r=>p.value=!1),style:{padding:"8px 16px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"Cancel"),t("button",{onClick:E,style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"Confirm")])]),default:a(()=>[e[26]||(e[26]=t("p",null,"This is the main content of the drawer",-1)),e[27]||(e[27]=t("p",null,"Forms, lists, etc. can be placed here",-1))]),_:1},8,["modelValue"])])]),_:1},8,["code"]),e[39]||(e[39]=S("",9))])}}});export{I as __pageData,j as default};

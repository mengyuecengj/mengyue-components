import{_ as l}from"./chunks/drawer.vue_vue_type_script_setup_true_lang.DR2H-smv.js";import{I as V,o as P,c as S,a8 as F,J as d,w as t,j as a,a as e,t as h,A as r}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const T={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},$={style:{display:"flex",gap:"10px"}},M={style:{display:"flex",gap:"10px"}},Y={style:{display:"flex",gap:"10px"}},I={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},J=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherDrawer.md","filePath":"components/OtherDrawer.md"}'),N={name:"components/OtherDrawer.md"},R=Object.assign(N,{setup(O){const c=r(!1),g=r(!1),k=r("rtl"),C=r(""),u=s=>{k.value=s,C.value=`${A(s)}抽屉`,g.value=!0},A=s=>({rtl:"右侧",ltr:"左侧",ttb:"顶部",btt:"底部"})[s]||s,b=r(!1),y=r("30%"),B=r(""),f=s=>{y.value=s,B.value=`${s} 尺寸抽屉`,b.value=!0},m=r(!1),x=r("#f0f9ff"),w=s=>{x.value=s,m.value=!0},D=r(!1),v=r(!0),z=r(!0),j=(s,i)=>{v.value=s,z.value=i,D.value=!0},p=r(!1),E=()=>{alert("确认操作"),p.value=!1};return(s,i)=>{const o=V("ShowCode");return P(),S("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[28]||(i[28]=F("",6)),d(o,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",null,[a("button",{onClick:i[0]||(i[0]=n=>c.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 打开抽屉 "),d(l,{modelValue:c.value,"onUpdate:modelValue":i[1]||(i[1]=n=>c.value=n),title:"基础抽屉"},{default:t(()=>[...i[21]||(i[21]=[a("p",null,"这里是抽屉的内容",-1),a("p",null,"可以放置任何内容",-1)])]),_:1},8,["modelValue"])])]),_:1},8,["code"]),i[29]||(i[29]=a("h3",{id:"不同方向",tabindex:"-1"},[e("不同方向 "),a("a",{class:"header-anchor",href:"#不同方向","aria-label":"Permalink to “不同方向”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"butongfangxiang bu tong fang xiang btfx ")],-1)),i[30]||(i[30]=a("p",null,[e("使用 "),a("code",null,"direction"),e(" 属性设置抽屉的弹出方向。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingshezhichoutidedanchufangxiang。 shi yong shu xing she zhi chou ti de dan chu fang xiang 。 sy sxszctddcfx。")],-1)),d(o,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",T,[a("button",{onClick:i[2]||(i[2]=n=>u("rtl")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从右侧打开 "),a("button",{onClick:i[3]||(i[3]=n=>u("ltr")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从左侧打开 "),a("button",{onClick:i[4]||(i[4]=n=>u("ttb")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从顶部打开 "),a("button",{onClick:i[5]||(i[5]=n=>u("btt")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 从底部打开 ")]),d(l,{modelValue:g.value,"onUpdate:modelValue":i[6]||(i[6]=n=>g.value=n),title:C.value,direction:k.value},{default:t(()=>[a("p",null,"当前方向: "+h(A(k.value)),1),i[22]||(i[22]=a("p",null,"抽屉内容...",-1))]),_:1},8,["modelValue","title","direction"])]),_:1},8,["code"]),i[31]||(i[31]=a("h3",{id:"自定义尺寸",tabindex:"-1"},[e("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichicun zi ding yi chi cun zdycc ")],-1)),i[32]||(i[32]=a("p",null,[e("使用 "),a("code",null,"size"),e(" 属性设置抽屉的尺寸。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingshezhichoutidechicun。 shi yong shu xing she zhi chou ti de chi cun 。 sy sxszctdcc。")],-1)),d(o,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",$,[a("button",{onClick:i[7]||(i[7]=n=>f("30%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 30% 宽度 "),a("button",{onClick:i[8]||(i[8]=n=>f("500px")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 500px 宽度 "),a("button",{onClick:i[9]||(i[9]=n=>f("80%")),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 80% 宽度 ")]),d(l,{modelValue:b.value,"onUpdate:modelValue":i[10]||(i[10]=n=>b.value=n),title:B.value,size:y.value},{default:t(()=>[a("p",null,"当前尺寸: "+h(y.value),1),i[23]||(i[23]=a("p",null,"抽屉内容...",-1))]),_:1},8,["modelValue","title","size"])]),_:1},8,["code"]),i[33]||(i[33]=a("h3",{id:"自定义背景色",tabindex:"-1"},[e("自定义背景色 "),a("a",{class:"header-anchor",href:"#自定义背景色","aria-label":"Permalink to “自定义背景色”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyibeijingse zi ding yi bei jing se zdybjs ")],-1)),i[34]||(i[34]=a("p",null,[e("使用 "),a("code",null,"backgroundColor"),e(" 属性自定义抽屉的背景颜色。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingzidingyichoutidebeijingyanse。 shi yong shu xing zi ding yi chou ti de bei jing yan se 。 sy sxzdyctdbjys。")],-1)),d(o,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",M,[a("button",{onClick:i[11]||(i[11]=n=>w("#f0f9ff")),style:{padding:"8px 16px",background:"#f0f9ff",color:"#0369a1",border:"1px solid #bae6fd","border-radius":"4px",cursor:"pointer"}}," 浅蓝色 "),a("button",{onClick:i[12]||(i[12]=n=>w("#fef2f2")),style:{padding:"8px 16px",background:"#fef2f2",color:"#dc2626",border:"1px solid #fecaca","border-radius":"4px",cursor:"pointer"}}," 浅红色 "),a("button",{onClick:i[13]||(i[13]=n=>w("#f0fdf4")),style:{padding:"8px 16px",background:"#f0fdf4",color:"#16a34a",border:"1px solid #bbf7d0","border-radius":"4px",cursor:"pointer"}}," 浅绿色 ")]),d(l,{modelValue:m.value,"onUpdate:modelValue":i[14]||(i[14]=n=>m.value=n),title:"自定义颜色","background-color":x.value},{default:t(()=>[i[24]||(i[24]=a("p",null,"自定义背景颜色的抽屉",-1)),a("p",null,"当前颜色: "+h(x.value),1)]),_:1},8,["modelValue","background-color"])]),_:1},8,["code"]),i[35]||(i[35]=a("h3",{id:"隐藏头部和关闭按钮",tabindex:"-1"},[e("隐藏头部和关闭按钮 "),a("a",{class:"header-anchor",href:"#隐藏头部和关闭按钮","aria-label":"Permalink to “隐藏头部和关闭按钮”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yincangtoubuheguanbianniu yin cang tou bu he guan bi an niu yctbhgban ")],-1)),i[36]||(i[36]=a("p",null,[e("使用 "),a("code",null,"with-header"),e(" 和 "),a("code",null,"show-close"),e(" 属性控制头部和关闭按钮的显示。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong he shuxingkongzhitoubuheguanbianniudexianshi。 shi yong he shu xing kong zhi tou bu he guan bi an niu de xian shi 。 sy h sxkztbhgbandxs。")],-1)),d(o,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",Y,[a("button",{onClick:i[15]||(i[15]=n=>j(!0,!0)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 显示头部和关闭按钮 "),a("button",{onClick:i[16]||(i[16]=n=>j(!1,!1)),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 隐藏头部和关闭按钮 ")]),d(l,{modelValue:D.value,"onUpdate:modelValue":i[17]||(i[17]=n=>D.value=n),title:"自定义头部","with-header":v.value,"show-close":z.value},{default:t(()=>[a("p",null,"头部显示: "+h(v.value?"是":"否"),1),a("p",null,"关闭按钮: "+h(z.value?"是":"否"),1),i[25]||(i[25]=a("p",null,"点击遮罩层可以关闭",-1))]),_:1},8,["modelValue","with-header","show-close"])]),_:1},8,["code"]),i[37]||(i[37]=a("h3",{id:"带底部操作栏",tabindex:"-1"},[e("带底部操作栏 "),a("a",{class:"header-anchor",href:"#带底部操作栏","aria-label":"Permalink to “带底部操作栏”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"daidibucaozuolan dai di bu cao zuo lan ddbczl ")],-1)),i[38]||(i[38]=a("p",null,[e("使用 footer 插槽添加底部操作栏。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong footer chacaotianjiadibucaozuolan。 shi yong footer cha cao tian jia di bu cao zuo lan 。 sy cctjdbczl。")],-1)),d(o,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",null,[a("button",{onClick:i[18]||(i[18]=n=>p.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 打开带底部抽屉 "),d(l,{modelValue:p.value,"onUpdate:modelValue":i[20]||(i[20]=n=>p.value=n),title:"带底部操作栏"},{footer:t(()=>[a("div",I,[a("button",{onClick:i[19]||(i[19]=n=>p.value=!1),style:{padding:"8px 16px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"取消"),a("button",{onClick:E,style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"确认")])]),default:t(()=>[i[26]||(i[26]=a("p",null,"这里是抽屉的主要内容",-1)),i[27]||(i[27]=a("p",null,"可以放置表单、列表等内容",-1))]),_:1},8,["modelValue"])])]),_:1},8,["code"]),i[39]||(i[39]=F("",9))])}}});export{J as __pageData,R as default};

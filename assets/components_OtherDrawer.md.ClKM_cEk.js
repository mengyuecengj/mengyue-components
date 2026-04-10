import{_ as l}from"./chunks/drawer.vue_vue_type_script_setup_true_lang.DR2H-smv.js";import{I as V,o as P,c as S,a8 as F,J as d,w as t,j as a,a as e,t as h,A as r}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const T={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},$={style:{display:"flex",gap:"10px"}},M={style:{display:"flex",gap:"10px"}},Y={style:{display:"flex",gap:"10px"}},I={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},J=JSON.parse('{"title":"Drawer","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherDrawer.md","filePath":"components/OtherDrawer.md"}'),N={name:"components/OtherDrawer.md"},R=Object.assign(N,{setup(O){const c=r(!1),g=r(!1),k=r("rtl"),C=r(""),u=s=>{k.value=s,C.value=`${A(s)}抽屉`,g.value=!0},A=s=>({rtl:"右侧",ltr:"左侧",ttb:"顶部",btt:"底部"})[s]||s,b=r(!1),y=r("30%"),B=r(""),f=s=>{y.value=s,B.value=`${s} 尺寸抽屉`,b.value=!0},m=r(!1),x=r("#f0f9ff"),w=s=>{x.value=s,m.value=!0},D=r(!1),v=r(!0),z=r(!0),j=(s,i)=>{v.value=s,z.value=i,D.value=!0},p=r(!1),E=()=>{alert("确认操作"),p.value=!1};return(s,i)=>{const o=V("ShowCode");return P(),S("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[28]||(i[28]=F('<h1 id="drawer" tabindex="-1">Drawer <a class="header-anchor" href="#drawer" aria-label="Permalink to “Drawer”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>Drawer 抽屉组件，用于从页面边缘滑出的面板，常用于展示更多内容或操作。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYDrawer&gt;&lt;/MYDrawer&gt;</code> 或者 <code>&lt;MYDrawer /&gt;</code> 来实现抽屉功能。<span class="pagefind-pinyin" aria-hidden="true">Drawer choutizujian，yongyucongyemianbianyuanhuachudemianban，changyongyuzhanshigengduoneironghuocaozuo。mengyue-components jinhanglefengzhuangbingjinhangle vitest ceshi。keyishiyong huozhe laishixianchoutigongneng。 Drawer chou ti zu jian ， yong yu cong ye mian bian yuan hua chu de mian ban ， chang yong yu zhan shi geng duo nei rong huo cao zuo 。mengyue-components jin hang le feng zhuang bing jin hang le vitest ce shi 。 ke yi shi yong huo zhe lai shi xian chou ti gong neng 。 Dctzj，yycymbyhcdmb，cyyzsgdnrhcz。jhlfzbjhl cs。kysy hz lsxctgn。</span></p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a><span class="pagefind-pinyin" aria-hidden="true">jibenyongfa ji ben yong fa jbyf </span></h2><h3 id="基础抽屉" tabindex="-1">基础抽屉 <a class="header-anchor" href="#基础抽屉" aria-label="Permalink to “基础抽屉”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichuchouti ji chu chou ti jcct </span></h3><p>基础的抽屉组件，默认从右侧滑出。<span class="pagefind-pinyin" aria-hidden="true">jichudechoutizujian，morencongyoucehuachu。 ji chu de chou ti zu jian ， mo ren cong you ce hua chu 。 jcdctzj，mrcychc。</span></p>',6)),d(o,{title:"代码演示",code:`
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
  `.trim()},{demo:t(()=>[a("div",null,[a("button",{onClick:i[18]||(i[18]=n=>p.value=!0),style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}}," 打开带底部抽屉 "),d(l,{modelValue:p.value,"onUpdate:modelValue":i[20]||(i[20]=n=>p.value=n),title:"带底部操作栏"},{footer:t(()=>[a("div",I,[a("button",{onClick:i[19]||(i[19]=n=>p.value=!1),style:{padding:"8px 16px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"取消"),a("button",{onClick:E,style:{padding:"8px 16px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"确认")])]),default:t(()=>[i[26]||(i[26]=a("p",null,"这里是抽屉的主要内容",-1)),i[27]||(i[27]=a("p",null,"可以放置表单、列表等内容",-1))]),_:1},8,["modelValue"])])]),_:1},8,["code"]),i[39]||(i[39]=F(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>modelValue</td><td>是否显示抽屉<span class="pagefind-pinyin" aria-hidden="true">shifouxianshichouti shi fou xian shi chou ti sfxsct</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>title</td><td>抽屉标题<span class="pagefind-pinyin" aria-hidden="true">choutibiaoti chou ti biao ti ctbt</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>direction</td><td>抽屉打开方向<span class="pagefind-pinyin" aria-hidden="true">choutidakaifangxiang chou ti da kai fang xiang ctdkfx</span></td><td>string</td><td><code>ltr</code>/<code>rtl</code>/<code>ttb</code>/<code>btt</code></td><td><code>rtl</code></td></tr><tr><td>size</td><td>抽屉尺寸<span class="pagefind-pinyin" aria-hidden="true">choutichicun chou ti chi cun ctcc</span></td><td>string | number</td><td>—</td><td><code>30%</code></td></tr><tr><td>with-header</td><td>是否显示头部<span class="pagefind-pinyin" aria-hidden="true">shifouxianshitoubu shi fou xian shi tou bu sfxstb</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>show-close</td><td>是否显示关闭按钮<span class="pagefind-pinyin" aria-hidden="true">shifouxianshiguanbianniu shi fou xian shi guan bi an niu sfxsgban</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>background-color</td><td>抽屉背景色<span class="pagefind-pinyin" aria-hidden="true">choutibeijingse chou ti bei jing se ctbjs</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>close-on-click-modal</td><td>是否可以通过点击遮罩层关闭抽屉<span class="pagefind-pinyin" aria-hidden="true">shifoukeyitongguodianjizhezhaocengguanbichouti shi fou ke yi tong guo dian ji zhe zhao ceng guan bi chou ti sfkytgdjzzcgbct</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>close-on-press-escape</td><td>是否可以通过按下 ESC 关闭抽屉<span class="pagefind-pinyin" aria-hidden="true">shifoukeyitongguoanxia ESC guanbichouti shi fou ke yi tong guo an xia ESC guan bi chou ti sfkytgax gbct</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>lock-scroll</td><td>是否在抽屉显示时将 body 滚动锁定<span class="pagefind-pinyin" aria-hidden="true">shifouzaichoutixianshishijiang body gundongsuoding shi fou zai chou ti xian shi shi jiang body gun dong suo ding sfzctxssj gdsd</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>before-close</td><td>关闭前的回调函数<span class="pagefind-pinyin" aria-hidden="true">guanbiqiandehuitiaohanshu guan bi qian de hui tiao han shu gbqdhths</span></td><td>function</td><td>—</td><td><code>undefined</code></td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to “事件”">​</a><span class="pagefind-pinyin" aria-hidden="true">shijian shi jian sj </span></h3><table tabindex="0"><thead><tr><th>事件名<span class="pagefind-pinyin" aria-hidden="true">shijianming shi jian ming sjm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th></tr></thead><tbody><tr><td>update:modelValue</td><td>抽屉显示状态变化时触发<span class="pagefind-pinyin" aria-hidden="true">choutixianshizhuangtaibianhuashichufa chou ti xian shi zhuang tai bian hua shi chu fa ctxsztbhscf</span></td><td>value: boolean</td></tr><tr><td>open</td><td>抽屉打开时触发<span class="pagefind-pinyin" aria-hidden="true">choutidakaishichufa chou ti da kai shi chu fa ctdkscf</span></td><td>—</td></tr><tr><td>close</td><td>抽屉关闭时触发<span class="pagefind-pinyin" aria-hidden="true">choutiguanbishichufa chou ti guan bi shi chu fa ctgbscf</span></td><td>—</td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to “插槽”">​</a><span class="pagefind-pinyin" aria-hidden="true">chacao cha cao cc </span></h3><table tabindex="0"><thead><tr><th>插槽名<span class="pagefind-pinyin" aria-hidden="true">chacaoming cha cao ming ccm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th></tr></thead><tbody><tr><td>default</td><td>抽屉主体内容<span class="pagefind-pinyin" aria-hidden="true">choutizhutineirong chou ti zhu ti nei rong ctztnr</span></td></tr><tr><td>title</td><td>抽屉标题内容<span class="pagefind-pinyin" aria-hidden="true">choutibiaotineirong chou ti biao ti nei rong ctbtnr</span></td></tr><tr><td>footer</td><td>抽屉底部内容<span class="pagefind-pinyin" aria-hidden="true">choutidibuneirong chou ti di bu nei rong ctdbnr</span></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DrawerProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,9))])}}});export{J as __pageData,R as default};

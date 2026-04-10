import{_ as p}from"./chunks/dialog.vue_vue_type_script_setup_true_lang.BRVMNYI2.js";import{_ as l}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as C,o as x,c as v,a8 as z,J as t,w as n,a as s,j as a,G as B,H as w,t as A,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const j={style:{height:"600px"}},E={style:{display:"flex","justify-content":"space-between"}},M={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},U=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackDialog.md","filePath":"plus/FeedbackDialog.md"}'),Y={name:"plus/FeedbackDialog.md"},N=Object.assign(Y,{setup(V){const u=o(!1),k=o(!1),g=o(!1),y=o(!1),b=o(!1),m=o(!1),h=o(!1),f=o(!1),r=o(!1),c=()=>{console.log("对话框打开了")},D=()=>{console.log("对话框关闭了")};return(S,i)=>{const d=C("ShowCode");return x(),v("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[49]||(i[49]=z('<h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-label="Permalink to “Dialog”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>dialog对话框组件，用于在页面中显示模态对话框。<br> 可以使用<code>&lt;MYDialog&gt;&lt;/MYDialog&gt;</code>或者<code>&lt;MYDialog /&gt;</code>来实现一个对话框。<span class="pagefind-pinyin" aria-hidden="true">dialogduihuakuangzujian，yongyuzaiyemianzhongxianshimotaiduihuakuang。keyishiyonghuozhelaishixianyigeduihuakuang。 dialog dui hua kuang zu jian ， yong yu zai ye mian zhong xian shi mo tai dui hua kuang 。 ke yi shi yong huo zhe lai shi xian yi ge dui hua kuang 。 ddhkzj，yyzymzxsmtdhk。kysyhzlsxygdhk。</span></p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichuyongfa ji chu yong fa jcyf </span></h2><p>使用<code>v-model</code>控制对话框的显示与隐藏。<span class="pagefind-pinyin" aria-hidden="true">shiyongkongzhiduihuakuangdexianshiyuyincang。 shi yong kong zhi dui hua kuang de xian shi yu yin cang 。 sykzdhkdxsyyc。</span></p>',5)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog1 = true'>打开对话框</MYButton>
    <MYDialog v-model='showDialog1' title='基础对话框'>
        <p>这是一个基础对话框示例</p>
        <p>点击遮罩层或按ESC键可以关闭</p>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[0]||(i[0]=e=>u.value=!0)},{default:n(()=>[...i[22]||(i[22]=[s("打开对话框",-1)])]),_:1}),t(p,{modelValue:u.value,"onUpdate:modelValue":i[1]||(i[1]=e=>u.value=e),title:"基础对话框"},{default:n(()=>[...i[23]||(i[23]=[a("p",{style:{color:"black"}},"这是一个基础对话框示例",-1),a("p",{style:{color:"black"}},"点击遮罩层或按ESC键可以关闭",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[50]||(i[50]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[s("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichicun zi ding yi chi cun zdycc ")],-1)),i[51]||(i[51]=a("p",null,[s("使用"),a("code",null,"width"),s("和"),a("code",null,"height"),s("属性可以自定义对话框的尺寸。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongheshuxingkeyizidingyiduihuakuangdechicun。 shi yong he shu xing ke yi zi ding yi dui hua kuang de chi cun 。 syhsxkyzdydhkdcc。")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog2 = true'>自定义尺寸</MYButton>
    <MYDialog 
        v-model='showDialog2' 
        title='自定义尺寸'
        width='600px'
        height='400px'
    >
        <p>这是一个宽度600px，高度400px的对话框</p>
        <p>支持像素值、百分比等CSS单位</p>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[2]||(i[2]=e=>k.value=!0)},{default:n(()=>[...i[24]||(i[24]=[s("自定义尺寸",-1)])]),_:1}),t(p,{modelValue:k.value,"onUpdate:modelValue":i[3]||(i[3]=e=>k.value=e),title:"自定义尺寸",width:"600px",height:"400px"},{default:n(()=>[...i[25]||(i[25]=[a("p",{style:{color:"black"}},">这是一个宽度600px，高度400px的对话框",-1),a("p",{style:{color:"black"}},">支持像素值、百分比等CSS单位",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[52]||(i[52]=a("h2",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyanse zi ding yi yan se zdyys ")],-1)),i[53]||(i[53]=a("p",null,[s("使用"),a("code",null,"backgroundColor"),s("、"),a("code",null,"borderColor"),s("和"),a("code",null,"textColor"),s("属性可以自定义对话框的颜色。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong、heshuxingkeyizidingyiduihuakuangdeyanse。 shi yong 、 he shu xing ke yi zi ding yi dui hua kuang de yan se 。 sy、hsxkyzdydhkdys。")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog3 = true'>自定义颜色</MYButton>
    <MYDialog 
        v-model='showDialog3' 
        title='自定义颜色'
        backgroundColor='#f0f8ff'
        borderColor='#409EFF'
        textColor='#333'
    >
        <p>这是一个自定义颜色的对话框</p>
        <p>背景色、边框色、文字颜色都可以自定义</p>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[4]||(i[4]=e=>g.value=!0)},{default:n(()=>[...i[26]||(i[26]=[s("自定义颜色",-1)])]),_:1}),t(p,{modelValue:g.value,"onUpdate:modelValue":i[5]||(i[5]=e=>g.value=e),title:"自定义颜色",backgroundColor:"#f0f8ff",borderColor:"#409EFF",textColor:"#333"},{default:n(()=>[...i[27]||(i[27]=[a("p",null,"这是一个自定义颜色的对话框",-1),a("p",null,"背景色、边框色、文字颜色都可以自定义",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[54]||(i[54]=a("h2",{id:"禁用遮罩层关闭",tabindex:"-1"},[s("禁用遮罩层关闭 "),a("a",{class:"header-anchor",href:"#禁用遮罩层关闭","aria-label":"Permalink to “禁用遮罩层关闭”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongzhezhaocengguanbi jin yong zhe zhao ceng guan bi jyzzcgb ")],-1)),i[55]||(i[55]=a("p",null,[s("使用"),a("code",null,"closeOnClickModal"),s("属性可以禁用点击遮罩层关闭对话框。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyijinyongdianjizhezhaocengguanbiduihuakuang。 shi yong shu xing ke yi jin yong dian ji zhe zhao ceng guan bi dui hua kuang 。 sysxkyjydjzzcgbdhk。")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog4 = true'>禁用遮罩层关闭</MYButton>
    <MYDialog 
        v-model='showDialog4' 
        title='禁用遮罩层关闭'
        :closeOnClickModal='false'
    >
        <p>这个对话框不能通过点击遮罩层关闭</p>
        <p>只能通过关闭按钮或ESC键关闭</p>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[6]||(i[6]=e=>y.value=!0)},{default:n(()=>[...i[28]||(i[28]=[s("禁用遮罩层关闭",-1)])]),_:1}),t(p,{modelValue:y.value,"onUpdate:modelValue":i[7]||(i[7]=e=>y.value=e),title:"禁用遮罩层关闭",closeOnClickModal:!1},{default:n(()=>[...i[29]||(i[29]=[a("p",{style:{color:"black"}},">这个对话框不能通过点击遮罩层关闭",-1),a("p",{style:{color:"black"}},">只能通过关闭按钮或ESC键关闭",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[56]||(i[56]=a("h2",{id:"禁用esc关闭",tabindex:"-1"},[s("禁用ESC关闭 "),a("a",{class:"header-anchor",href:"#禁用esc关闭","aria-label":"Permalink to “禁用ESC关闭”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongESCguanbi jin yong ESC guan bi jyEgb ")],-1)),i[57]||(i[57]=a("p",null,[s("使用"),a("code",null,"closeOnPressEscape"),s("属性可以禁用ESC键关闭对话框。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyijinyongESCjianguanbiduihuakuang。 shi yong shu xing ke yi jin yong ESC jian guan bi dui hua kuang 。 sysxkyjyEjgbdhk。")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog5 = true'>禁用ESC关闭</MYButton>
    <MYDialog 
        v-model='showDialog5' 
        title='禁用ESC关闭'
        :closeOnPressEscape='false'
    >
        <p>这个对话框不能通过ESC键关闭</p>
        <p>只能通过关闭按钮或点击遮罩层关闭</p>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[8]||(i[8]=e=>b.value=!0)},{default:n(()=>[...i[30]||(i[30]=[s("禁用ESC关闭",-1)])]),_:1}),t(p,{modelValue:b.value,"onUpdate:modelValue":i[9]||(i[9]=e=>b.value=e),title:"禁用ESC关闭",closeOnPressEscape:!1},{default:n(()=>[...i[31]||(i[31]=[a("p",{style:{color:"black"}},">这个对话框不能通过ESC键关闭",-1),a("p",{style:{color:"black"}},">只能通过关闭按钮或点击遮罩层关闭",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[58]||(i[58]=a("h2",{id:"溢出控制",tabindex:"-1"},[s("溢出控制 "),a("a",{class:"header-anchor",href:"#溢出控制","aria-label":"Permalink to “溢出控制”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yichukongzhi yi chu kong zhi yckz ")],-1)),i[59]||(i[59]=a("p",null,[s("使用"),a("code",null,"overflow"),s("属性可以控制对话框内容的溢出行为。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyikongzhiduihuakuangneirongdeyichuhangwei。 shi yong shu xing ke yi kong zhi dui hua kuang nei rong de yi chu hang wei 。 sysxkykzdhknrdychw。")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog6 = true'>溢出控制</MYButton>
    <MYDialog 
        v-model='showDialog6' 
        title='溢出控制'
        :overflow='true'
        height='300px'
    >
        <div style='height: 600px;'>
            <p>这是一个高度超过对话框的内容</p>
            <p>当设置overflow为true时，内容会被隐藏</p>
            <p>当设置overflow为false时，会出现滚动条</p>
            <div v-for='i in 20' :key='i' style='padding: 10px; border-bottom: 1px solid #eee;'>
                内容项 {{ i }}
            </div>
        </div>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[10]||(i[10]=e=>m.value=!0)},{default:n(()=>[...i[32]||(i[32]=[s("溢出控制",-1)])]),_:1}),t(p,{modelValue:m.value,"onUpdate:modelValue":i[11]||(i[11]=e=>m.value=e),title:"溢出控制",overflow:!0,height:"300px"},{default:n(()=>[a("div",j,[i[33]||(i[33]=a("p",{style:{color:"black"}},">这是一个高度超过对话框的内容",-1)),i[34]||(i[34]=a("p",{style:{color:"black"}},">当设置overflow为true时，内容会被隐藏",-1)),i[35]||(i[35]=a("p",{style:{color:"black"}},">当设置overflow为false时，会出现滚动条",-1)),(x(),v(B,null,w(20,e=>a("div",{key:e,style:{padding:"10px","border-bottom":"1px solid #eee"}}," 内容项 "+A(e),1)),64))])]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[60]||(i[60]=a("h2",{id:"自定义头部和底部",tabindex:"-1"},[s("自定义头部和底部 "),a("a",{class:"header-anchor",href:"#自定义头部和底部","aria-label":"Permalink to “自定义头部和底部”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyitoubuhedibu zi ding yi tou bu he di bu zdytbhdb ")],-1)),i[61]||(i[61]=a("p",null,[s("使用"),a("code",null,"header"),s("和"),a("code",null,"footer"),s("插槽可以自定义对话框的头部和底部。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyonghechacaokeyizidingyiduihuakuangdetoubuhedibu。 shi yong he cha cao ke yi zi ding yi dui hua kuang de tou bu he di bu 。 syhcckyzdydhkdtbhdb。")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog7 = true'>自定义头部底部</MYButton>
    <MYDialog v-model='showDialog7'>
        <template #header>
            <div style='display: flex; align-items: center; gap: 10px;'>
                <span style='color: #409EFF;'>🔔</span>
                <span>自定义头部</span>
            </div>
        </template>
        <p>这是一个使用自定义头部和底部的对话框</p>
        <p>内容区域可以放置任意内容</p>
        <template #footer>
            <div style='display: flex; justify-content: space-between;'>
                <MYButton type='info' @click='showDialog7 = false'>取消</MYButton>
                <MYButton type='primary' @click='showDialog7 = false'>确认</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[12]||(i[12]=e=>h.value=!0)},{default:n(()=>[...i[36]||(i[36]=[s("自定义头部底部",-1)])]),_:1}),t(p,{modelValue:h.value,"onUpdate:modelValue":i[15]||(i[15]=e=>h.value=e)},{header:n(()=>[...i[37]||(i[37]=[a("div",{style:{display:"flex","align-items":"center",gap:"10px"}},[a("span",{style:{color:"#409EFF"}},"🔔"),a("span",null,"自定义头部")],-1)])]),footer:n(()=>[a("div",E,[t(l,{type:"info",onClick:i[13]||(i[13]=e=>h.value=!1)},{default:n(()=>[...i[38]||(i[38]=[s("取消",-1)])]),_:1}),t(l,{type:"primary",onClick:i[14]||(i[14]=e=>h.value=!1)},{default:n(()=>[...i[39]||(i[39]=[s("确认",-1)])]),_:1})])]),default:n(()=>[i[40]||(i[40]=a("p",{style:{color:"black"}},">这是一个使用自定义头部和底部的对话框",-1)),i[41]||(i[41]=a("p",{style:{color:"black"}},">内容区域可以放置任意内容",-1))]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[62]||(i[62]=a("h2",{id:"事件监听",tabindex:"-1"},[s("事件监听 "),a("a",{class:"header-anchor",href:"#事件监听","aria-label":"Permalink to “事件监听”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shijianjianting shi jian jian ting sjjt ")],-1)),i[63]||(i[63]=a("p",null,[s("对话框提供了"),a("code",null,"open"),s("和"),a("code",null,"close"),s("事件用于监听打开和关闭状态。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duihuakuangtigongleheshijianyongyujiantingdakaiheguanbizhuangtai。 dui hua kuang ti gong le he shi jian yong yu jian ting da kai he guan bi zhuang tai 。 dhktglhsjyyjtdkhgbzt。")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog8 = true'>事件监听</MYButton>
    <MYDialog 
        v-model='showDialog8' 
        title='事件监听'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>打开或关闭对话框时会触发相应的事件</p>
        <p>检查控制台查看事件触发情况</p>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[16]||(i[16]=e=>f.value=!0)},{default:n(()=>[...i[42]||(i[42]=[s("事件监听",-1)])]),_:1}),t(p,{modelValue:f.value,"onUpdate:modelValue":i[17]||(i[17]=e=>f.value=e),title:"事件监听",onOpen:c,onClose:D},{default:n(()=>[...i[43]||(i[43]=[a("p",{style:{color:"black"}},">打开或关闭对话框时会触发相应的事件",-1),a("p",{style:{color:"black"}},">检查控制台查看事件触发情况",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[64]||(i[64]=a("h2",{id:"组合使用",tabindex:"-1"},[s("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[65]||(i[65]=a("p",null,[s("最后，实现个多种api组合使用实现个完整的对话框："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangewanzhengdeduihuakuang： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge wan zheng de dui hua kuang ： zh，sxgdzazhsysxgwzddhk：")],-1)),t(d,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog9 = true'>组合使用</MYButton>
    <MYDialog 
        v-model='showDialog9' 
        title='组合使用示例'
        width='500px'
        height='350px'
        backgroundColor='#fff'
        borderColor='#8d4dd1'
        textColor='#333'
        :closeOnClickModal='false'
        :closeOnPressEscape='true'
        :overflow='false'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>这是一个组合使用的完整示例</p>
        <p>包含了所有可用的属性和功能</p>
        <template #footer>
            <div style='display: flex; gap: 10px; justify-content: flex-end;'>
                <MYButton type='info' @click='showDialog9 = false'>取消</MYButton>
                <MYButton type='primary' @click='showDialog9 = false'>确认</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()},{demo:n(()=>[t(l,{type:"primary",onClick:i[18]||(i[18]=e=>r.value=!0)},{default:n(()=>[...i[44]||(i[44]=[s("组合使用",-1)])]),_:1}),t(p,{modelValue:r.value,"onUpdate:modelValue":i[21]||(i[21]=e=>r.value=e),title:"组合使用示例",width:"500px",height:"350px",backgroundColor:"#fff",borderColor:"#8d4dd1",textColor:"#333",closeOnClickModal:!1,closeOnPressEscape:!0,overflow:!1,onOpen:c,onClose:D},{footer:n(()=>[a("div",M,[t(l,{type:"info",onClick:i[19]||(i[19]=e=>r.value=!1)},{default:n(()=>[...i[45]||(i[45]=[s("取消",-1)])]),_:1}),t(l,{type:"primary",onClick:i[20]||(i[20]=e=>r.value=!1)},{default:n(()=>[...i[46]||(i[46]=[s("确认",-1)])]),_:1})])]),default:n(()=>[i[47]||(i[47]=a("p",{style:{color:"black"}},">这是一个组合使用的完整示例",-1)),i[48]||(i[48]=a("p",{style:{color:"black"}},">包含了所有可用的属性和功能",-1))]),_:1},8,["modelValue"])]),_:1},8,["code"]),i[66]||(i[66]=z(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>modelValue</td><td>是否显示对话框<span class="pagefind-pinyin" aria-hidden="true">shifouxianshiduihuakuang shi fou xian shi dui hua kuang sfxsdhk</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>title</td><td>对话框标题<span class="pagefind-pinyin" aria-hidden="true">duihuakuangbiaoti dui hua kuang biao ti dhkbt</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>width</td><td>对话框宽度<span class="pagefind-pinyin" aria-hidden="true">duihuakuangkuandu dui hua kuang kuan du dhkkd</span></td><td>string | number</td><td>—</td><td><code>400</code></td></tr><tr><td>height</td><td>对话框高度<span class="pagefind-pinyin" aria-hidden="true">duihuakuanggaodu dui hua kuang gao du dhkgd</span></td><td>string | number</td><td>—</td><td><code>200</code></td></tr><tr><td>closeOnClickModal</td><td>点击遮罩层关闭<span class="pagefind-pinyin" aria-hidden="true">dianjizhezhaocengguanbi dian ji zhe zhao ceng guan bi djzzcgb</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>closeOnPressEscape</td><td>按ESC键关闭<span class="pagefind-pinyin" aria-hidden="true">anESCjianguanbi an ESC jian guan bi aEjgb</span></td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>backgroundColor</td><td>背景色<span class="pagefind-pinyin" aria-hidden="true">beijingse bei jing se bjs</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>borderColor</td><td>边框颜色<span class="pagefind-pinyin" aria-hidden="true">biankuangyanse bian kuang yan se bkys</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>textColor</td><td>文字颜色<span class="pagefind-pinyin" aria-hidden="true">wenziyanse wen zi yan se wzys</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>overflow</td><td>溢出控制<span class="pagefind-pinyin" aria-hidden="true">yichukongzhi yi chu kong zhi yckz</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to “Events”">​</a></h3><table tabindex="0"><thead><tr><th>事件名<span class="pagefind-pinyin" aria-hidden="true">shijianming shi jian ming sjm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th></tr></thead><tbody><tr><td>update:modelValue</td><td>对话框显示状态更新<span class="pagefind-pinyin" aria-hidden="true">duihuakuangxianshizhuangtaigengxin dui hua kuang xian shi zhuang tai geng xin dhkxsztgx</span></td><td><code>value: boolean</code></td></tr><tr><td>open</td><td>对话框打开时触发<span class="pagefind-pinyin" aria-hidden="true">duihuakuangdakaishichufa dui hua kuang da kai shi chu fa dhkdkscf</span></td><td>—</td></tr><tr><td>close</td><td>对话框关闭时触发<span class="pagefind-pinyin" aria-hidden="true">duihuakuangguanbishichufa dui hua kuang guan bi shi chu fa dhkgbscf</span></td><td>—</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to “Slots”">​</a></h3><table tabindex="0"><thead><tr><th>名称<span class="pagefind-pinyin" aria-hidden="true">mingcheng ming cheng mc</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th></tr></thead><tbody><tr><td>default</td><td>对话框主体内容<span class="pagefind-pinyin" aria-hidden="true">duihuakuangzhutineirong dui hua kuang zhu ti nei rong dhkztnr</span></td></tr><tr><td>header</td><td>自定义头部<span class="pagefind-pinyin" aria-hidden="true">zidingyitoubu zi ding yi tou bu zdytb</span></td></tr><tr><td>footer</td><td>自定义底部<span class="pagefind-pinyin" aria-hidden="true">zidingyidibu zi ding yi di bu zdydb</span></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DialogProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  modelValue</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  closeOnClickModal</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  closeOnPressEscape</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  borderColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  textColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  overflow</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DialogEmits</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">update:modelValue</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">open</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">e</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">close</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,9))])}}});export{U as __pageData,N as default};

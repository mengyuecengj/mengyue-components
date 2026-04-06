import{y as p,z as Y,p as V,Z as S,d as P,o as c,b as F,J as a,T as O,w as e,k as v,c as w,$,j as t,r as x,t as E,e as A,O as T,n as N,ao as U,I,ah as M,a as l,G as j,H as z}from"./chunks/framework.DoR57c7M.js";import{u as L}from"./chunks/useStyleComputed.DokJCVvp.js";import{u as J}from"./chunks/useClassComputed.DlyVcdbE.js";import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.CEidBzRJ.js";import"./chunks/useColorUtils.90VENGfc.js";const R={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:[String,Number],default:400},height:{type:[String,Number],default:200},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},borderColor:{type:String,default:""},textColor:{type:String,default:""},overflow:{type:Boolean,default:!1}};function G(k,h){const n=p(k.modelValue);Y(()=>k.modelValue,d=>{n.value=d,d&&h("open")});const u=()=>{n.value=!1,h("update:modelValue",!1),h("close")},D=()=>{k.closeOnClickModal&&u()},g=d=>{d.key==="Escape"&&k.closeOnPressEscape&&u()},b=J({baseClass:"my-dialog",flagClasses:{overflow:k.overflow}}),y=L(k,{propToStyleMap:{width:"width",height:"height",backgroundColor:"backgroundColor",textColor:"color"}});return V(()=>{document.addEventListener("keydown",g)}),S(()=>{document.removeEventListener("keydown",g)}),{visible:n,close:u,handleOverlayClick:D,dialogStyle:y,dialogClass:b}}const H={class:"my-dialog__header"},K={class:"my-dialog__title"},Z={class:"my-dialog__body"},q={key:0,class:"my-dialog__footer"},f=P({name:"MYDialog",inheritAttrs:!1,__name:"dialog",props:R,emits:["update:modelValue","open","close"],setup(k,{emit:h}){const n=k,u=h,{visible:D,close:g,handleOverlayClick:b,dialogStyle:y,dialogClass:d}=G(n,u);return(r,C)=>(c(),F(U,{to:"body"},[a(O,{name:"dialog-fade"},{default:e(()=>[v(D)?(c(),w("div",{key:0,class:"my-overlay",onClick:C[1]||(C[1]=$((...B)=>v(b)&&v(b)(...B),["self"]))},[t("div",{class:N(["my-dialog",v(d)]),role:"dialog","aria-modal":"true",style:T(v(y))},[t("header",H,[x(r.$slots,"header",{},()=>[t("span",K,E(n.title),1)]),t("button",{class:"my-dialog__close",onClick:C[0]||(C[0]=(...B)=>v(g)&&v(g)(...B))},"×")]),t("div",Z,[x(r.$slots,"default")]),r.$slots.footer?(c(),w("footer",q,[x(r.$slots,"footer")])):A("",!0)],6)])):A("",!0)]),_:3})]))}}),Q={style:{height:"600px"}},W={style:{display:"flex","justify-content":"space-between"}},X={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},os=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackDialog.md","filePath":"components/FeedbackDialog.md"}'),_={name:"components/FeedbackDialog.md"},ns=Object.assign(_,{setup(k){const h=p(!1),n=p(!1),u=p(!1),D=p(!1),g=p(!1),b=p(!1),y=p(!1),d=p(!1),r=p(!1),C=()=>{console.log("对话框打开了")},B=()=>{console.log("对话框关闭了")};return(ss,s)=>{const m=I("ShowCode");return c(),w("div",null,[s[49]||(s[49]=M('<h1 id="dialog" tabindex="-1">Dialog <a class="header-anchor" href="#dialog" aria-label="Permalink to “Dialog”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>dialog对话框组件，用于在页面中显示模态对话框。<br> 可以使用<code>&lt;MYDialog&gt;&lt;/MYDialog&gt;</code>或者<code>&lt;MYDialog /&gt;</code>来实现一个对话框。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a></h2><p>使用<code>v-model</code>控制对话框的显示与隐藏。</p>',5)),a(m,{title:"代码演示",code:`
<template>
    <MYButton type='primary' @click='showDialog1 = true'>打开对话框</MYButton>
    <MYDialog v-model='showDialog1' title='基础对话框'>
        <p>这是一个基础对话框示例</p>
        <p>点击遮罩层或按ESC键可以关闭</p>
    </MYDialog>
</template>
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[0]||(s[0]=i=>h.value=!0)},{default:e(()=>[...s[22]||(s[22]=[l("打开对话框",-1)])]),_:1}),a(f,{modelValue:h.value,"onUpdate:modelValue":s[1]||(s[1]=i=>h.value=i),title:"基础对话框"},{default:e(()=>[...s[23]||(s[23]=[t("p",{style:{color:"black"}},"这是一个基础对话框示例",-1),t("p",{style:{color:"black"}},"点击遮罩层或按ESC键可以关闭",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[50]||(s[50]=t("h2",{id:"自定义尺寸",tabindex:"-1"},[l("自定义尺寸 "),t("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),s[51]||(s[51]=t("p",null,[l("使用"),t("code",null,"width"),l("和"),t("code",null,"height"),l("属性可以自定义对话框的尺寸。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[2]||(s[2]=i=>n.value=!0)},{default:e(()=>[...s[24]||(s[24]=[l("自定义尺寸",-1)])]),_:1}),a(f,{modelValue:n.value,"onUpdate:modelValue":s[3]||(s[3]=i=>n.value=i),title:"自定义尺寸",width:"600px",height:"400px"},{default:e(()=>[...s[25]||(s[25]=[t("p",{style:{color:"black"}},">这是一个宽度600px，高度400px的对话框",-1),t("p",{style:{color:"black"}},">支持像素值、百分比等CSS单位",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[52]||(s[52]=t("h2",{id:"自定义颜色",tabindex:"-1"},[l("自定义颜色 "),t("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),s[53]||(s[53]=t("p",null,[l("使用"),t("code",null,"backgroundColor"),l("、"),t("code",null,"borderColor"),l("和"),t("code",null,"textColor"),l("属性可以自定义对话框的颜色。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[4]||(s[4]=i=>u.value=!0)},{default:e(()=>[...s[26]||(s[26]=[l("自定义颜色",-1)])]),_:1}),a(f,{modelValue:u.value,"onUpdate:modelValue":s[5]||(s[5]=i=>u.value=i),title:"自定义颜色",backgroundColor:"#f0f8ff",borderColor:"#409EFF",textColor:"#333"},{default:e(()=>[...s[27]||(s[27]=[t("p",null,"这是一个自定义颜色的对话框",-1),t("p",null,"背景色、边框色、文字颜色都可以自定义",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[54]||(s[54]=t("h2",{id:"禁用遮罩层关闭",tabindex:"-1"},[l("禁用遮罩层关闭 "),t("a",{class:"header-anchor",href:"#禁用遮罩层关闭","aria-label":"Permalink to “禁用遮罩层关闭”"},"​")],-1)),s[55]||(s[55]=t("p",null,[l("使用"),t("code",null,"closeOnClickModal"),l("属性可以禁用点击遮罩层关闭对话框。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[6]||(s[6]=i=>D.value=!0)},{default:e(()=>[...s[28]||(s[28]=[l("禁用遮罩层关闭",-1)])]),_:1}),a(f,{modelValue:D.value,"onUpdate:modelValue":s[7]||(s[7]=i=>D.value=i),title:"禁用遮罩层关闭",closeOnClickModal:!1},{default:e(()=>[...s[29]||(s[29]=[t("p",{style:{color:"black"}},">这个对话框不能通过点击遮罩层关闭",-1),t("p",{style:{color:"black"}},">只能通过关闭按钮或ESC键关闭",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[56]||(s[56]=t("h2",{id:"禁用esc关闭",tabindex:"-1"},[l("禁用ESC关闭 "),t("a",{class:"header-anchor",href:"#禁用esc关闭","aria-label":"Permalink to “禁用ESC关闭”"},"​")],-1)),s[57]||(s[57]=t("p",null,[l("使用"),t("code",null,"closeOnPressEscape"),l("属性可以禁用ESC键关闭对话框。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[8]||(s[8]=i=>g.value=!0)},{default:e(()=>[...s[30]||(s[30]=[l("禁用ESC关闭",-1)])]),_:1}),a(f,{modelValue:g.value,"onUpdate:modelValue":s[9]||(s[9]=i=>g.value=i),title:"禁用ESC关闭",closeOnPressEscape:!1},{default:e(()=>[...s[31]||(s[31]=[t("p",{style:{color:"black"}},">这个对话框不能通过ESC键关闭",-1),t("p",{style:{color:"black"}},">只能通过关闭按钮或点击遮罩层关闭",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[58]||(s[58]=t("h2",{id:"溢出控制",tabindex:"-1"},[l("溢出控制 "),t("a",{class:"header-anchor",href:"#溢出控制","aria-label":"Permalink to “溢出控制”"},"​")],-1)),s[59]||(s[59]=t("p",null,[l("使用"),t("code",null,"overflow"),l("属性可以控制对话框内容的溢出行为。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[10]||(s[10]=i=>b.value=!0)},{default:e(()=>[...s[32]||(s[32]=[l("溢出控制",-1)])]),_:1}),a(f,{modelValue:b.value,"onUpdate:modelValue":s[11]||(s[11]=i=>b.value=i),title:"溢出控制",overflow:!0,height:"300px"},{default:e(()=>[t("div",Q,[s[33]||(s[33]=t("p",{style:{color:"black"}},">这是一个高度超过对话框的内容",-1)),s[34]||(s[34]=t("p",{style:{color:"black"}},">当设置overflow为true时，内容会被隐藏",-1)),s[35]||(s[35]=t("p",{style:{color:"black"}},">当设置overflow为false时，会出现滚动条",-1)),(c(),w(j,null,z(20,i=>t("div",{key:i,style:{padding:"10px","border-bottom":"1px solid #eee"}}," 内容项 "+E(i),1)),64))])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[60]||(s[60]=t("h2",{id:"自定义头部和底部",tabindex:"-1"},[l("自定义头部和底部 "),t("a",{class:"header-anchor",href:"#自定义头部和底部","aria-label":"Permalink to “自定义头部和底部”"},"​")],-1)),s[61]||(s[61]=t("p",null,[l("使用"),t("code",null,"header"),l("和"),t("code",null,"footer"),l("插槽可以自定义对话框的头部和底部。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[12]||(s[12]=i=>y.value=!0)},{default:e(()=>[...s[36]||(s[36]=[l("自定义头部底部",-1)])]),_:1}),a(f,{modelValue:y.value,"onUpdate:modelValue":s[15]||(s[15]=i=>y.value=i)},{header:e(()=>[...s[37]||(s[37]=[t("div",{style:{display:"flex","align-items":"center",gap:"10px"}},[t("span",{style:{color:"#409EFF"}},"🔔"),t("span",null,"自定义头部")],-1)])]),footer:e(()=>[t("div",W,[a(o,{type:"info",onClick:s[13]||(s[13]=i=>y.value=!1)},{default:e(()=>[...s[38]||(s[38]=[l("取消",-1)])]),_:1}),a(o,{type:"primary",onClick:s[14]||(s[14]=i=>y.value=!1)},{default:e(()=>[...s[39]||(s[39]=[l("确认",-1)])]),_:1})])]),default:e(()=>[s[40]||(s[40]=t("p",{style:{color:"black"}},">这是一个使用自定义头部和底部的对话框",-1)),s[41]||(s[41]=t("p",{style:{color:"black"}},">内容区域可以放置任意内容",-1))]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[62]||(s[62]=t("h2",{id:"事件监听",tabindex:"-1"},[l("事件监听 "),t("a",{class:"header-anchor",href:"#事件监听","aria-label":"Permalink to “事件监听”"},"​")],-1)),s[63]||(s[63]=t("p",null,[l("对话框提供了"),t("code",null,"open"),l("和"),t("code",null,"close"),l("事件用于监听打开和关闭状态。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[16]||(s[16]=i=>d.value=!0)},{default:e(()=>[...s[42]||(s[42]=[l("事件监听",-1)])]),_:1}),a(f,{modelValue:d.value,"onUpdate:modelValue":s[17]||(s[17]=i=>d.value=i),title:"事件监听",onOpen:C,onClose:B},{default:e(()=>[...s[43]||(s[43]=[t("p",{style:{color:"black"}},">打开或关闭对话框时会触发相应的事件",-1),t("p",{style:{color:"black"}},">检查控制台查看事件触发情况",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[64]||(s[64]=t("h2",{id:"组合使用",tabindex:"-1"},[l("组合使用 "),t("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),s[65]||(s[65]=t("p",null,"最后，实现个多种api组合使用实现个完整的对话框：",-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[18]||(s[18]=i=>r.value=!0)},{default:e(()=>[...s[44]||(s[44]=[l("组合使用",-1)])]),_:1}),a(f,{modelValue:r.value,"onUpdate:modelValue":s[21]||(s[21]=i=>r.value=i),title:"组合使用示例",width:"500px",height:"350px",backgroundColor:"#fff",borderColor:"#8d4dd1",textColor:"#333",closeOnClickModal:!1,closeOnPressEscape:!0,overflow:!1,onOpen:C,onClose:B},{footer:e(()=>[t("div",X,[a(o,{type:"info",onClick:s[19]||(s[19]=i=>r.value=!1)},{default:e(()=>[...s[45]||(s[45]=[l("取消",-1)])]),_:1}),a(o,{type:"primary",onClick:s[20]||(s[20]=i=>r.value=!1)},{default:e(()=>[...s[46]||(s[46]=[l("确认",-1)])]),_:1})])]),default:e(()=>[s[47]||(s[47]=t("p",{style:{color:"black"}},">这是一个组合使用的完整示例",-1)),s[48]||(s[48]=t("p",{style:{color:"black"}},">包含了所有可用的属性和功能",-1))]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[66]||(s[66]=M(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>是否显示对话框</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>title</td><td>对话框标题</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>width</td><td>对话框宽度</td><td>string | number</td><td>—</td><td><code>400</code></td></tr><tr><td>height</td><td>对话框高度</td><td>string | number</td><td>—</td><td><code>200</code></td></tr><tr><td>closeOnClickModal</td><td>点击遮罩层关闭</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>closeOnPressEscape</td><td>按ESC键关闭</td><td>boolean</td><td>—</td><td><code>true</code></td></tr><tr><td>backgroundColor</td><td>背景色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>borderColor</td><td>边框颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>textColor</td><td>文字颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>overflow</td><td>溢出控制</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to “Events”">​</a></h3><table tabindex="0"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>update:modelValue</td><td>对话框显示状态更新</td><td><code>value: boolean</code></td></tr><tr><td>open</td><td>对话框打开时触发</td><td>—</td></tr><tr><td>close</td><td>对话框关闭时触发</td><td>—</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to “Slots”">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>对话框主体内容</td></tr><tr><td>header</td><td>自定义头部</td></tr><tr><td>footer</td><td>自定义底部</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> DialogProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,9))])}}});export{os as __pageData,ns as default};

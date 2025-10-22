import{x as p,z as Y,p as V,Z as S,d as P,b as F,o as c,J as a,T as O,w as e,c as w,e as A,k as v,$,j as t,r as x,t as E,O as T,n as N,aj as U,I as j,ah as M,a as l,G as I,H as z}from"./chunks/framework.BWIYv-lY.js";import{u as L}from"./chunks/useStyleComputed.DYexXzp7.js";import{u as J}from"./chunks/useClassComputed.D3OyU7_1.js";import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.Dqdzdh-x.js";import"./chunks/useColorUtils.OM-kkZVO.js";const R={modelValue:{type:Boolean,default:!1},title:{type:String,default:""},width:{type:[String,Number],default:400},height:{type:[String,Number],default:200},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},backgroundColor:{type:String,default:""},borderColor:{type:String,default:""},textColor:{type:String,default:""},overflow:{type:Boolean,default:!1}};function G(k,h){const n=p(k.modelValue);Y(()=>k.modelValue,d=>{n.value=d,d&&h("open")});const u=()=>{n.value=!1,h("update:modelValue",!1),h("close")},D=()=>{k.closeOnClickModal&&u()},g=d=>{d.key==="Escape"&&k.closeOnPressEscape&&u()},b=J({baseClass:"my-dialog",flagClasses:{overflow:k.overflow}}),y=L(k,{propToStyleMap:{width:"width",height:"height",backgroundColor:"backgroundColor",textColor:"color"}});return V(()=>{document.addEventListener("keydown",g)}),S(()=>{document.removeEventListener("keydown",g)}),{visible:n,close:u,handleOverlayClick:D,dialogStyle:y,dialogClass:b}}const H={class:"my-dialog__header"},K={class:"my-dialog__title"},Z={class:"my-dialog__body"},q={key:0,class:"my-dialog__footer"},f=P({name:"MYDialog",inheritAttrs:!1,__name:"dialog",props:R,emits:["update:modelValue","open","close"],setup(k,{emit:h}){const n=k,u=h,{visible:D,close:g,handleOverlayClick:b,dialogStyle:y,dialogClass:d}=G(n,u);return(r,C)=>(c(),F(U,{to:"body"},[a(O,{name:"dialog-fade"},{default:e(()=>[v(D)?(c(),w("div",{key:0,class:"my-overlay",onClick:C[1]||(C[1]=$((...B)=>v(b)&&v(b)(...B),["self"]))},[t("div",{class:N(["my-dialog",v(d)]),role:"dialog","aria-modal":"true",style:T(v(y))},[t("header",H,[x(r.$slots,"header",{},()=>[t("span",K,E(n.title),1)]),t("button",{class:"my-dialog__close",onClick:C[0]||(C[0]=(...B)=>v(g)&&v(g)(...B))},"×")]),t("div",Z,[x(r.$slots,"default")]),r.$slots.footer?(c(),w("footer",q,[x(r.$slots,"footer")])):A("",!0)],6)])):A("",!0)]),_:3})]))}}),Q={style:{height:"600px"}},W={style:{display:"flex","justify-content":"space-between"}},X={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},os=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackDialog.md","filePath":"components/FeedbackDialog.md"}'),_={name:"components/FeedbackDialog.md"},ns=Object.assign(_,{setup(k){const h=p(!1),n=p(!1),u=p(!1),D=p(!1),g=p(!1),b=p(!1),y=p(!1),d=p(!1),r=p(!1),C=()=>{console.log("对话框打开了")},B=()=>{console.log("对话框关闭了")};return(ss,s)=>{const m=j("ShowCode");return c(),w("div",null,[s[49]||(s[49]=M("",5)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[10]||(s[10]=i=>b.value=!0)},{default:e(()=>[...s[32]||(s[32]=[l("溢出控制",-1)])]),_:1}),a(f,{modelValue:b.value,"onUpdate:modelValue":s[11]||(s[11]=i=>b.value=i),title:"溢出控制",overflow:!0,height:"300px"},{default:e(()=>[t("div",Q,[s[33]||(s[33]=t("p",{style:{color:"black"}},">这是一个高度超过对话框的内容",-1)),s[34]||(s[34]=t("p",{style:{color:"black"}},">当设置overflow为true时，内容会被隐藏",-1)),s[35]||(s[35]=t("p",{style:{color:"black"}},">当设置overflow为false时，会出现滚动条",-1)),(c(),w(I,null,z(20,i=>t("div",{key:i,style:{padding:"10px","border-bottom":"1px solid #eee"}}," 内容项 "+E(i),1)),64))])]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[60]||(s[60]=t("h2",{id:"自定义头部和底部",tabindex:"-1"},[l("自定义头部和底部 "),t("a",{class:"header-anchor",href:"#自定义头部和底部","aria-label":"Permalink to “自定义头部和底部”"},"​")],-1)),s[61]||(s[61]=t("p",null,[l("使用"),t("code",null,"header"),l("和"),t("code",null,"footer"),l("插槽可以自定义对话框的头部和底部。")],-1)),a(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(o,{type:"primary",onClick:s[18]||(s[18]=i=>r.value=!0)},{default:e(()=>[...s[44]||(s[44]=[l("组合使用",-1)])]),_:1}),a(f,{modelValue:r.value,"onUpdate:modelValue":s[21]||(s[21]=i=>r.value=i),title:"组合使用示例",width:"500px",height:"350px",backgroundColor:"#fff",borderColor:"#8d4dd1",textColor:"#333",closeOnClickModal:!1,closeOnPressEscape:!0,overflow:!1,onOpen:C,onClose:B},{footer:e(()=>[t("div",X,[a(o,{type:"info",onClick:s[19]||(s[19]=i=>r.value=!1)},{default:e(()=>[...s[45]||(s[45]=[l("取消",-1)])]),_:1}),a(o,{type:"primary",onClick:s[20]||(s[20]=i=>r.value=!1)},{default:e(()=>[...s[46]||(s[46]=[l("确认",-1)])]),_:1})])]),default:e(()=>[s[47]||(s[47]=t("p",{style:{color:"black"}},">这是一个组合使用的完整示例",-1)),s[48]||(s[48]=t("p",{style:{color:"black"}},">包含了所有可用的属性和功能",-1))]),_:1},8,["modelValue"])]),_:1},8,["code"]),s[66]||(s[66]=M("",9))])}}});export{os as __pageData,ns as default};

import{u as B}from"./chunks/useStyleComputed.BVjmiXVX.js";import{h as y,d as c,o as g,c as m,O as u,k,r as f,n as M,t as Y,e as x,I as A,ah as b,J as e,w as a,a as i,j as s}from"./chunks/framework.BzrxsKI0.js";import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.BBsABRbJ.js";import"./chunks/useClassComputed.DNrZSa4y.js";import"./chunks/useColorUtils.BI8puWKr.js";const C={content:{type:[String,Number],default:""},dot:{type:Boolean,default:!1},color:{type:String,default:"#ff4d4f"},position:{type:String,default:"top-right",validator:n=>["top-right","top-left","bottom-right","bottom-left"].includes(n)},max:{type:Number,default:99,validator:n=>n>=0}};function D(n){const p=y(()=>n.dot?"":typeof n.content=="number"&&n.content>n.max?`${n.max}+`:n.content),t=B(n,{propToStyleMap:{color:"backgroundColor"},customStyleLogic:(h,r)=>{switch(h.position){case"top-right":Object.assign(r,{top:"-5px",right:"-5px"});break;case"top-left":Object.assign(r,{top:"-5px",left:"-5px"});break;case"bottom-right":Object.assign(r,{bottom:"-5px",right:"-5px"});break;case"bottom-left":Object.assign(r,{bottom:"-5px",left:"-5px"});break}}}),l=y(()=>({position:"relative",display:"inline-block"}));return{displayContent:p,badgeStyle:t,wrapperStyle:l}}const d=c({name:"MYBadge",__name:"badge",props:C,setup(n){const p=n,{displayContent:t,badgeStyle:l,wrapperStyle:h}=D(p);return(r,T)=>(g(),m("div",{class:"my-badge-wrapper",style:u(k(h))},[f(r.$slots,"default"),r.content!==null&&r.content!==""||r.dot?(g(),m("span",{key:0,class:M(["my-badge",{dot:r.dot}]),style:u(k(l))},Y(k(t)),7)):x("",!0)],4))}}),_={style:{display:"flex",gap:"20px"}},P={style:{display:"flex",gap:"20px"}},S={style:{display:"flex",gap:"20px","align-items":"center"}},I=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackBadge.md","filePath":"components/FeedbackBadge.md"}'),v={name:"components/FeedbackBadge.md"},O=Object.assign(v,{setup(n){return(p,t)=>{const l=A("ShowCode");return g(),m("div",null,[t[11]||(t[11]=b("",5)),e(l,{title:"代码演示",code:`
<template>
    <MYBadge :content='5'>
        <MYButton type='primary'>消息</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(d,{content:5},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[0]||(t[0]=[i("消息",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[12]||(t[12]=s("h2",{id:"小红点模式",tabindex:"-1"},[i("小红点模式 "),s("a",{class:"header-anchor",href:"#小红点模式","aria-label":"Permalink to “小红点模式”"},"​")],-1)),t[13]||(t[13]=s("p",null,[i("使用"),s("code",null,"dot"),i("属性可以显示小红点而不显示具体数字。")],-1)),e(l,{title:"代码演示",code:`
<template>
    <MYBadge dot>
        <MYButton type='primary'>通知</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(d,{dot:""},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[1]||(t[1]=[i("通知",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[14]||(t[14]=s("h2",{id:"自定义颜色",tabindex:"-1"},[i("自定义颜色 "),s("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),t[15]||(t[15]=s("p",null,[i("使用"),s("code",null,"color"),i("属性可以自定义徽章颜色。")],-1)),e(l,{title:"代码演示",code:`
<template>
    <MYBadge :content='8' color='#52c41a'>
        <MYButton type='primary'>绿色徽章</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(d,{content:8,color:"#52c41a"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[2]||(t[2]=[i("绿色徽章",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[16]||(t[16]=s("h2",{id:"位置调整",tabindex:"-1"},[i("位置调整 "),s("a",{class:"header-anchor",href:"#位置调整","aria-label":"Permalink to “位置调整”"},"​")],-1)),t[17]||(t[17]=s("p",null,[i("使用"),s("code",null,"position"),i("属性可以调整徽章的位置。")],-1)),e(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='3' position='top-left'>
            <MYButton type='primary'>左上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='top-right'>
            <MYButton type='primary'>右上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-left'>
            <MYButton type='primary'>左下</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-right'>
            <MYButton type='primary'>右下</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:a(()=>[s("div",_,[e(d,{content:3,position:"top-left"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[3]||(t[3]=[i("左上",-1)])]),_:1})]),_:1}),e(d,{content:3,position:"top-right"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[4]||(t[4]=[i("右上",-1)])]),_:1})]),_:1}),e(d,{content:3,position:"bottom-left"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[5]||(t[5]=[i("左下",-1)])]),_:1})]),_:1}),e(d,{content:3,position:"bottom-right"},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[6]||(t[6]=[i("右下",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[18]||(t[18]=s("h2",{id:"最大值限制",tabindex:"-1"},[i("最大值限制 "),s("a",{class:"header-anchor",href:"#最大值限制","aria-label":"Permalink to “最大值限制”"},"​")],-1)),t[19]||(t[19]=s("p",null,[i("使用"),s("code",null,"max"),i("属性可以限制徽章显示的最大数值。")],-1)),e(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='100' :max='99'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='100' :max='10'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='8' :max='5'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:a(()=>[s("div",P,[e(d,{content:100,max:99},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[7]||(t[7]=[i("消息",-1)])]),_:1})]),_:1}),e(d,{content:100,max:10},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[8]||(t[8]=[i("消息",-1)])]),_:1})]),_:1}),e(d,{content:8,max:5},{default:a(()=>[e(o,{type:"primary"},{default:a(()=>[...t[9]||(t[9]=[i("消息",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),t[20]||(t[20]=s("h2",{id:"独立使用",tabindex:"-1"},[i("独立使用 "),s("a",{class:"header-anchor",href:"#独立使用","aria-label":"Permalink to “独立使用”"},"​")],-1)),t[21]||(t[21]=s("p",null,"徽章也可以独立使用，不包裹任何内容。",-1)),e(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px; align-items: center;'>
        <MYBadge :content='5' />
        <MYBadge :content='新消息!' />
        <MYBadge dot />
    </div>
</template>
  `.trim()},{demo:a(()=>[s("div",S,[e(d,{content:5}),e(d,{content:"新消息!"}),e(d,{dot:""})])]),_:1},8,["code"]),t[22]||(t[22]=s("h2",{id:"组合使用",tabindex:"-1"},[i("组合使用 "),s("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),t[23]||(t[23]=s("p",null,"最后，实现个多种api组合使用实现个徽章：",-1)),e(l,{title:"代码演示",code:`
<template>
    <MYBadge 
        :content='25' 
        color='#8d4dd1'
        position='bottom-right'
        :max='20'
        dot
    >
        <MYButton 
            type='primary'
            size='large'
        >
            组合徽章
        </MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:a(()=>[e(d,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:a(()=>[e(o,{type:"primary",size:"large"},{default:a(()=>[...t[10]||(t[10]=[i(" 组合徽章 ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),t[24]||(t[24]=b("",5))])}}});export{I as __pageData,O as default};

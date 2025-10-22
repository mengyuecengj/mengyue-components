import{u as B}from"./chunks/useStyleComputed.DYexXzp7.js";import{d as S,c as k,o as p,O as c,n as A,k as v,r as g,G as D,H as C,b as _,x as y,I as P,ah as b,J as i,j as e,w as n,a as s}from"./chunks/framework.BWIYv-lY.js";import{_ as f}from"./chunks/button.vue_vue_type_script_setup_true_lang.Dqdzdh-x.js";import"./chunks/useClassComputed.D3OyU7_1.js";import"./chunks/useColorUtils.OM-kkZVO.js";const M={variant:{type:String,default:"text"},width:{type:[Number,String],default:"100%"},height:{type:[Number,String],default:16}},u=S({name:"MYSkeleton-item",__name:"skeletonItem",props:M,setup(m){const h=B(m,{propToStyleMap:{width:"width",height:"height"},customStyleLogic:(l,a)=>{l.variant==="text"?a.height=a.height==="auto"?"1.2em":a.height:l.variant==="circle"?(a.borderRadius="50%",a.height=a.width):l.variant==="image"?a.aspectRatio="1 / 1":l.variant==="rect"&&(a.borderRadius="4px")}});return(l,a)=>(p(),k("div",{class:A(["my-skeleton-item",`my-skeleton-item--${l.variant}`]),style:c(v(h))},null,6))}}),Y={loading:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},count:{type:Number,default:3},randomWidth:{type:[Boolean,String],default:!1},throttle:{type:Number,default:0},theme:{type:String,default:"light"}},w={key:0,class:"my-skeleton__wrapper"},F={key:1,class:"my-skeleton__default"},T={key:1,class:"my-skeleton__content"},d=S({name:"MYSkeleton",__name:"skeleton",props:Y,setup(m){const r=m,h=[60,70,80,90,100],l=B(r,{cssVariables:{"--skeleton-bg":r.theme==="light"?"#f2f2f2":"#333","--skeleton-animation-bg":r.theme==="light"?"#e6e6e6":"#444","--skeleton-animation-speed":"1.5s"}});return(a,x)=>(p(),k("div",{class:A(["my-skeleton",{"my-skeleton--animated":a.animated}]),style:c(v(l))},[a.loading?(p(),k("div",w,[a.$slots.template?g(a.$slots,"template",{key:0},()=>[g(a.$slots,"template")]):(p(),k("div",F,[(p(!0),k(D,null,C(a.count,t=>(p(),_(u,{key:t,variant:"text",style:c({width:a.randomWidth?`${h[t%h.length]}%`:"100%"})},null,8,["style"]))),128))]))])):(p(),k("div",T,[g(a.$slots,"default")]))],6))}}),E={style:{display:"flex","flex-direction":"column",gap:"20px"}},I={style:{background:"#333",padding:"20px","border-radius":"4px"}},O=JSON.parse('{"title":"Skeleton","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackSkeleton.md","filePath":"components/FeedbackSkeleton.md"}'),N={name:"components/FeedbackSkeleton.md"},j=Object.assign(N,{setup(m){const r=y(!0),h=y(!1),l=()=>{r.value=!r.value},a=()=>{h.value=!0,setTimeout(()=>{h.value=!1},3e3)};return(x,t)=>{const o=P("ShowCode");return p(),k("div",null,[t[3]||(t[3]=b("",5)),i(o,{title:"代码演示",code:`
<template>
    <MYSkeleton />
</template>
  `.trim()},{demo:n(()=>[i(d)]),_:1},8,["code"]),t[4]||(t[4]=e("h2",{id:"自定义行数",tabindex:"-1"},[s("自定义行数 "),e("a",{class:"header-anchor",href:"#自定义行数","aria-label":"Permalink to “自定义行数”"},"​")],-1)),t[5]||(t[5]=e("p",null,[s("使用"),e("code",null,"count"),s("属性可以设置骨架屏的行数。")],-1)),i(o,{title:"代码演示",code:`
<template>
    <MYSkeleton :count='5' />
</template>
  `.trim()},{demo:n(()=>[i(d,{count:5})]),_:1},8,["code"]),t[6]||(t[6]=e("h2",{id:"圆形骨架屏",tabindex:"-1"},[s("圆形骨架屏 "),e("a",{class:"header-anchor",href:"#圆形骨架屏","aria-label":"Permalink to “圆形骨架屏”"},"​")],-1)),t[7]||(t[7]=e("p",null,[s("使用"),e("code",null,"variant"),s("属性可以设置不同的骨架屏样式。")],-1)),i(o,{title:"代码演示",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='circle' style='width: 100px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:n(()=>[i(d,null,{template:n(()=>[i(u,{variant:"circle",style:{width:"100px",height:"100px"}})]),_:1})]),_:1},8,["code"]),t[8]||(t[8]=e("h2",{id:"矩形骨架屏",tabindex:"-1"},[s("矩形骨架屏 "),e("a",{class:"header-anchor",href:"#矩形骨架屏","aria-label":"Permalink to “矩形骨架屏”"},"​")],-1)),t[9]||(t[9]=e("p",null,[s("使用"),e("code",null,'variant="rect"'),s("可以创建矩形骨架屏。")],-1)),i(o,{title:"代码演示",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='rect' style='width: 200px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:n(()=>[i(d,null,{template:n(()=>[i(u,{variant:"rect",style:{width:"200px",height:"100px"}})]),_:1})]),_:1},8,["code"]),t[10]||(t[10]=e("h2",{id:"随机宽度",tabindex:"-1"},[s("随机宽度 "),e("a",{class:"header-anchor",href:"#随机宽度","aria-label":"Permalink to “随机宽度”"},"​")],-1)),t[11]||(t[11]=e("p",null,[s("使用"),e("code",null,"randomWidth"),s("属性可以让骨架屏的宽度随机变化。")],-1)),i(o,{title:"代码演示",code:`
<template>
    <MYSkeleton :randomWidth='true' :count='5' />
</template>
  `.trim()},{demo:n(()=>[i(d,{randomWidth:!0,count:5})]),_:1},8,["code"]),t[12]||(t[12]=e("h2",{id:"动态加载",tabindex:"-1"},[s("动态加载 "),e("a",{class:"header-anchor",href:"#动态加载","aria-label":"Permalink to “动态加载”"},"​")],-1)),t[13]||(t[13]=e("p",null,[s("使用"),e("code",null,"loading"),s("属性可以控制骨架屏的显示状态。")],-1)),i(o,{title:"代码演示",code:`
<template>
    <div>
        <MYButton @click='toggleLoading'>切换加载状态</MYButton>
        <MYSkeleton :loading='isLoading' style='margin-top: 20px'>
            <template #default>
                <div style='padding: 20px; background: #f5f5f5; border-radius: 4px;'>
                    <h3>实际内容标题</h3>
                    <p>这是实际加载完成后的内容...</p>
                </div>
            </template>
        </MYSkeleton>
    </div>
</template>
  `.trim()},{demo:n(()=>[e("div",null,[i(f,{onClick:l},{default:n(()=>[...t[0]||(t[0]=[s("切换加载状态",-1)])]),_:1}),i(d,{loading:r.value,style:{"margin-top":"20px"}},{default:n(()=>[...t[1]||(t[1]=[e("div",{style:{padding:"20px",background:"#f5f5f5","border-radius":"4px"}},[e("h3",null,"实际内容标题"),e("p",null,"这是实际加载完成后的内容...")],-1)])]),_:1},8,["loading"])])]),_:1},8,["code"]),t[14]||(t[14]=e("h2",{id:"延迟显示",tabindex:"-1"},[s("延迟显示 "),e("a",{class:"header-anchor",href:"#延迟显示","aria-label":"Permalink to “延迟显示”"},"​")],-1)),t[15]||(t[15]=e("p",null,[s("使用"),e("code",null,"throttle"),s("属性可以设置骨架屏显示的延迟时间。")],-1)),i(o,{title:"代码演示",code:`
<template>
    <MYSkeleton :throttle='1000' :loading='throttleLoading' />
</template>
  `.trim()},{demo:n(()=>[e("div",null,[i(f,{onClick:a},{default:n(()=>[...t[2]||(t[2]=[s("触发延迟加载 (1秒)",-1)])]),_:1}),i(d,{throttle:1e3,loading:h.value,style:{"margin-top":"20px"}},null,8,["loading"])])]),_:1},8,["code"]),t[16]||(t[16]=e("h2",{id:"主题样式",tabindex:"-1"},[s("主题样式 "),e("a",{class:"header-anchor",href:"#主题样式","aria-label":"Permalink to “主题样式”"},"​")],-1)),t[17]||(t[17]=e("p",null,[s("使用"),e("code",null,"theme"),s("属性可以设置骨架屏的主题。")],-1)),i(o,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYSkeleton theme='light' />
        <div style='background: #333; padding: 20px; border-radius: 4px;'>
            <MYSkeleton theme='dark' />
        </div>
    </div>
</template>
  `.trim()},{demo:n(()=>[e("div",E,[i(d,{theme:"light"}),e("div",I,[i(d,{theme:"dark"})])])]),_:1},8,["code"]),t[18]||(t[18]=b("",9))])}}});export{O as __pageData,j as default};

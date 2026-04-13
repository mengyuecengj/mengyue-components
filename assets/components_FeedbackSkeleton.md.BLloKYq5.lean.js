import{_ as n,a as r}from"./chunks/skeleton.vue_vue_type_script_setup_true_lang.DuDISWzz.js";import{_ as p}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as c,o as b,c as y,a8 as k,J as a,w as e,j as s,a as i,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const u={style:{display:"flex","flex-direction":"column",gap:"20px"}},B={style:{background:"#333",padding:"20px","border-radius":"4px"}},M=JSON.parse('{"title":"Skeleton","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackSkeleton.md","filePath":"components/FeedbackSkeleton.md"}'),f={name:"components/FeedbackSkeleton.md"},Y=Object.assign(f,{setup(A){const d=o(!0),h=o(!1),g=()=>{d.value=!d.value},m=()=>{h.value=!0,setTimeout(()=>{h.value=!1},3e3)};return(x,t)=>{const l=c("ShowCode");return b(),y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[t[3]||(t[3]=k("",5)),a(l,{title:"代码演示",code:`
<template>
    <MYSkeleton />
</template>
  `.trim()},{demo:e(()=>[a(n)]),_:1},8,["code"]),t[4]||(t[4]=s("h2",{id:"自定义行数",tabindex:"-1"},[i("自定义行数 "),s("a",{class:"header-anchor",href:"#自定义行数","aria-label":"Permalink to “自定义行数”"},"​")],-1)),t[5]||(t[5]=s("p",null,[i("使用"),s("code",null,"count"),i("属性可以设置骨架屏的行数。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <MYSkeleton :count='5' />
</template>
  `.trim()},{demo:e(()=>[a(n,{count:5})]),_:1},8,["code"]),t[6]||(t[6]=s("h2",{id:"圆形骨架屏",tabindex:"-1"},[i("圆形骨架屏 "),s("a",{class:"header-anchor",href:"#圆形骨架屏","aria-label":"Permalink to “圆形骨架屏”"},"​")],-1)),t[7]||(t[7]=s("p",null,[i("使用"),s("code",null,"variant"),i("属性可以设置不同的骨架屏样式。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='circle' style='width: 100px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:e(()=>[a(n,null,{template:e(()=>[a(r,{variant:"circle",style:{width:"100px",height:"100px"}})]),_:1})]),_:1},8,["code"]),t[8]||(t[8]=s("h2",{id:"矩形骨架屏",tabindex:"-1"},[i("矩形骨架屏 "),s("a",{class:"header-anchor",href:"#矩形骨架屏","aria-label":"Permalink to “矩形骨架屏”"},"​")],-1)),t[9]||(t[9]=s("p",null,[i("使用"),s("code",null,'variant="rect"'),i("可以创建矩形骨架屏。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='rect' style='width: 200px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:e(()=>[a(n,null,{template:e(()=>[a(r,{variant:"rect",style:{width:"200px",height:"100px"}})]),_:1})]),_:1},8,["code"]),t[10]||(t[10]=s("h2",{id:"随机宽度",tabindex:"-1"},[i("随机宽度 "),s("a",{class:"header-anchor",href:"#随机宽度","aria-label":"Permalink to “随机宽度”"},"​")],-1)),t[11]||(t[11]=s("p",null,[i("使用"),s("code",null,"randomWidth"),i("属性可以让骨架屏的宽度随机变化。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <MYSkeleton :randomWidth='true' :count='5' />
</template>
  `.trim()},{demo:e(()=>[a(n,{randomWidth:!0,count:5})]),_:1},8,["code"]),t[12]||(t[12]=s("h2",{id:"动态加载",tabindex:"-1"},[i("动态加载 "),s("a",{class:"header-anchor",href:"#动态加载","aria-label":"Permalink to “动态加载”"},"​")],-1)),t[13]||(t[13]=s("p",null,[i("使用"),s("code",null,"loading"),i("属性可以控制骨架屏的显示状态。")],-1)),a(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[s("div",null,[a(p,{onClick:g},{default:e(()=>[...t[0]||(t[0]=[i("切换加载状态",-1)])]),_:1}),a(n,{loading:d.value,style:{"margin-top":"20px"}},{default:e(()=>[...t[1]||(t[1]=[s("div",{style:{padding:"20px",background:"#f5f5f5","border-radius":"4px"}},[s("h3",null,"实际内容标题"),s("p",null,"这是实际加载完成后的内容...")],-1)])]),_:1},8,["loading"])])]),_:1},8,["code"]),t[14]||(t[14]=s("h2",{id:"延迟显示",tabindex:"-1"},[i("延迟显示 "),s("a",{class:"header-anchor",href:"#延迟显示","aria-label":"Permalink to “延迟显示”"},"​")],-1)),t[15]||(t[15]=s("p",null,[i("使用"),s("code",null,"throttle"),i("属性可以设置骨架屏显示的延迟时间。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <MYSkeleton :throttle='1000' :loading='throttleLoading' />
</template>
  `.trim()},{demo:e(()=>[s("div",null,[a(p,{onClick:m},{default:e(()=>[...t[2]||(t[2]=[i("触发延迟加载 (1秒)",-1)])]),_:1}),a(n,{throttle:1e3,loading:h.value,style:{"margin-top":"20px"}},null,8,["loading"])])]),_:1},8,["code"]),t[16]||(t[16]=s("h2",{id:"主题样式",tabindex:"-1"},[i("主题样式 "),s("a",{class:"header-anchor",href:"#主题样式","aria-label":"Permalink to “主题样式”"},"​")],-1)),t[17]||(t[17]=s("p",null,[i("使用"),s("code",null,"theme"),i("属性可以设置骨架屏的主题。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYSkeleton theme='light' />
        <div style='background: #333; padding: 20px; border-radius: 4px;'>
            <MYSkeleton theme='dark' />
        </div>
    </div>
</template>
  `.trim()},{demo:e(()=>[s("div",u,[a(n,{theme:"light"}),s("div",B,[a(n,{theme:"dark"})])])]),_:1},8,["code"]),t[18]||(t[18]=k("",9))])}}});export{M as __pageData,Y as default};

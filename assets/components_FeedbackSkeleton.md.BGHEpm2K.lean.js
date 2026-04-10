import{_ as t,a as p}from"./chunks/skeleton.vue_vue_type_script_setup_true_lang.DuDISWzz.js";import{_ as r}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as y,o as c,c as m,a8 as g,J as s,w as e,j as i,a as n,A as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const b={style:{display:"flex","flex-direction":"column",gap:"20px"}},x={style:{background:"#333",padding:"20px","border-radius":"4px"}},P=JSON.parse('{"title":"Skeleton","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackSkeleton.md","filePath":"components/FeedbackSkeleton.md"}'),f={name:"components/FeedbackSkeleton.md"},_=Object.assign(f,{setup(j){const h=o(!0),l=o(!1),k=()=>{h.value=!h.value},u=()=>{l.value=!0,setTimeout(()=>{l.value=!1},3e3)};return(z,a)=>{const d=y("ShowCode");return c(),m("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[3]||(a[3]=g("",5)),s(d,{title:"代码演示",code:`
<template>
    <MYSkeleton />
</template>
  `.trim()},{demo:e(()=>[s(t)]),_:1},8,["code"]),a[4]||(a[4]=i("h2",{id:"自定义行数",tabindex:"-1"},[n("自定义行数 "),i("a",{class:"header-anchor",href:"#自定义行数","aria-label":"Permalink to “自定义行数”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyihangshu zi ding yi hang shu zdyhs ")],-1)),a[5]||(a[5]=i("p",null,[n("使用"),i("code",null,"count"),n("属性可以设置骨架屏的行数。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhigujiapingdehangshu。 shi yong shu xing ke yi she zhi gu jia ping de hang shu 。 sysxkyszgjpdhs。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSkeleton :count='5' />
</template>
  `.trim()},{demo:e(()=>[s(t,{count:5})]),_:1},8,["code"]),a[6]||(a[6]=i("h2",{id:"圆形骨架屏",tabindex:"-1"},[n("圆形骨架屏 "),i("a",{class:"header-anchor",href:"#圆形骨架屏","aria-label":"Permalink to “圆形骨架屏”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yuanxinggujiaping yuan xing gu jia ping yxgjp ")],-1)),a[7]||(a[7]=i("p",null,[n("使用"),i("code",null,"variant"),n("属性可以设置不同的骨架屏样式。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhibutongdegujiapingyangshi。 shi yong shu xing ke yi she zhi bu tong de gu jia ping yang shi 。 sysxkyszbtdgjpys。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='circle' style='width: 100px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:e(()=>[s(t,null,{template:e(()=>[s(p,{variant:"circle",style:{width:"100px",height:"100px"}})]),_:1})]),_:1},8,["code"]),a[8]||(a[8]=i("h2",{id:"矩形骨架屏",tabindex:"-1"},[n("矩形骨架屏 "),i("a",{class:"header-anchor",href:"#矩形骨架屏","aria-label":"Permalink to “矩形骨架屏”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"juxinggujiaping ju xing gu jia ping jxgjp ")],-1)),a[9]||(a[9]=i("p",null,[n("使用"),i("code",null,'variant="rect"'),n("可以创建矩形骨架屏。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongkeyichuangjianjuxinggujiaping。 shi yong ke yi chuang jian ju xing gu jia ping 。 sykycjjxgjp。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='rect' style='width: 200px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:e(()=>[s(t,null,{template:e(()=>[s(p,{variant:"rect",style:{width:"200px",height:"100px"}})]),_:1})]),_:1},8,["code"]),a[10]||(a[10]=i("h2",{id:"随机宽度",tabindex:"-1"},[n("随机宽度 "),i("a",{class:"header-anchor",href:"#随机宽度","aria-label":"Permalink to “随机宽度”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"suijikuandu sui ji kuan du sjkd ")],-1)),a[11]||(a[11]=i("p",null,[n("使用"),i("code",null,"randomWidth"),n("属性可以让骨架屏的宽度随机变化。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyiranggujiapingdekuandusuijibianhua。 shi yong shu xing ke yi rang gu jia ping de kuan du sui ji bian hua 。 sysxkyrgjpdkdsjbh。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSkeleton :randomWidth='true' :count='5' />
</template>
  `.trim()},{demo:e(()=>[s(t,{randomWidth:!0,count:5})]),_:1},8,["code"]),a[12]||(a[12]=i("h2",{id:"动态加载",tabindex:"-1"},[n("动态加载 "),i("a",{class:"header-anchor",href:"#动态加载","aria-label":"Permalink to “动态加载”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"dongtaijiazai dong tai jia zai dtjz ")],-1)),a[13]||(a[13]=i("p",null,[n("使用"),i("code",null,"loading"),n("属性可以控制骨架屏的显示状态。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyikongzhigujiapingdexianshizhuangtai。 shi yong shu xing ke yi kong zhi gu jia ping de xian shi zhuang tai 。 sysxkykzgjpdxszt。")],-1)),s(d,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i("div",null,[s(r,{onClick:k},{default:e(()=>[...a[0]||(a[0]=[n("切换加载状态",-1)])]),_:1}),s(t,{loading:h.value,style:{"margin-top":"20px"}},{default:e(()=>[...a[1]||(a[1]=[i("div",{style:{padding:"20px",background:"#f5f5f5","border-radius":"4px"}},[i("h3",null,"实际内容标题"),i("p",null,"这是实际加载完成后的内容...")],-1)])]),_:1},8,["loading"])])]),_:1},8,["code"]),a[14]||(a[14]=i("h2",{id:"延迟显示",tabindex:"-1"},[n("延迟显示 "),i("a",{class:"header-anchor",href:"#延迟显示","aria-label":"Permalink to “延迟显示”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yanchixianshi yan chi xian shi ycxs ")],-1)),a[15]||(a[15]=i("p",null,[n("使用"),i("code",null,"throttle"),n("属性可以设置骨架屏显示的延迟时间。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhigujiapingxianshideyanchishijian。 shi yong shu xing ke yi she zhi gu jia ping xian shi de yan chi shi jian 。 sysxkyszgjpxsdycsj。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <MYSkeleton :throttle='1000' :loading='throttleLoading' />
</template>
  `.trim()},{demo:e(()=>[i("div",null,[s(r,{onClick:u},{default:e(()=>[...a[2]||(a[2]=[n("触发延迟加载 (1秒)",-1)])]),_:1}),s(t,{throttle:1e3,loading:l.value,style:{"margin-top":"20px"}},null,8,["loading"])])]),_:1},8,["code"]),a[16]||(a[16]=i("h2",{id:"主题样式",tabindex:"-1"},[n("主题样式 "),i("a",{class:"header-anchor",href:"#主题样式","aria-label":"Permalink to “主题样式”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zhutiyangshi zhu ti yang shi ztys ")],-1)),a[17]||(a[17]=i("p",null,[n("使用"),i("code",null,"theme"),n("属性可以设置骨架屏的主题。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhigujiapingdezhuti。 shi yong shu xing ke yi she zhi gu jia ping de zhu ti 。 sysxkyszgjpdzt。")],-1)),s(d,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYSkeleton theme='light' />
        <div style='background: #333; padding: 20px; border-radius: 4px;'>
            <MYSkeleton theme='dark' />
        </div>
    </div>
</template>
  `.trim()},{demo:e(()=>[i("div",b,[s(t,{theme:"light"}),i("div",x,[s(t,{theme:"dark"})])])]),_:1},8,["code"]),a[18]||(a[18]=g("",9))])}}});export{P as __pageData,_ as default};

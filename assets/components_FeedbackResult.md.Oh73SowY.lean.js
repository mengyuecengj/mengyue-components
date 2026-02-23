const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/primary.D5dYijJZ.js","assets/chunks/framework.BzrxsKI0.js","assets/chunks/success.DsyGxIRY.js","assets/chunks/warning.LLUG-bug.js","assets/chunks/error.mcD8UpWb.js","assets/chunks/info.D34L1GP2.js"])))=>i.map(i=>d[i]);
import{d as f,a0 as B,o as h,c as k,b as A,K as x,k as y,j as s,t as m,r as b,al as r,an as d,I as T,ah as g,J as i,w as e,a}from"./chunks/framework.BzrxsKI0.js";import{_ as p}from"./chunks/button.vue_vue_type_script_setup_true_lang.BBsABRbJ.js";import"./chunks/useClassComputed.DNrZSa4y.js";import"./chunks/useColorUtils.BI8puWKr.js";const v={class:"result"},D={class:"result-title"},C={class:"result-subtitle"},P={key:1},R={class:"result-extra"},l=f({name:"MYResult",__name:"result",props:{icon:{},title:{},subTitle:{}},setup(o){const c=o,n={primary:r(()=>d(()=>import("./chunks/primary.D5dYijJZ.js"),__vite__mapDeps([0,1]))),success:r(()=>d(()=>import("./chunks/success.DsyGxIRY.js"),__vite__mapDeps([2,1]))),warning:r(()=>d(()=>import("./chunks/warning.LLUG-bug.js"),__vite__mapDeps([3,1]))),error:r(()=>d(()=>import("./chunks/error.mcD8UpWb.js"),__vite__mapDeps([4,1]))),info:r(()=>d(()=>import("./chunks/info.D34L1GP2.js"),__vite__mapDeps([5,1])))}[c.icon||"info"],_=B();return(u,I)=>(h(),k("div",v,[(h(),A(x(y(n)),{class:"result-icon"})),s("div",D,m(o.title),1),s("div",C,[y(_)["sub-title"]?b(u.$slots,"sub-title",{key:0}):(h(),k("span",P,m(o.subTitle),1))]),s("div",R,[b(u.$slots,"extra")])]))}}),M={style:{display:"flex","flex-direction":"column",gap:"20px"}},Y={style:{display:"flex",gap:"10px","justify-content":"center"}},E={style:{display:"flex",gap:"10px","justify-content":"center"}},N=JSON.parse('{"title":"Result","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackResult.md","filePath":"components/FeedbackResult.md"}'),S={name:"components/FeedbackResult.md"},O=Object.assign(S,{setup(o){return(c,t)=>{const n=T("ShowCode");return h(),k("div",null,[t[6]||(t[6]=g("",5)),i(n,{title:"代码演示",code:`
<template>
    <MYResult title='操作成功' subTitle='您的操作已成功完成' />
</template>
  `.trim()},{demo:e(()=>[i(l,{title:"操作成功",subTitle:"您的操作已成功完成"})]),_:1},8,["code"]),t[7]||(t[7]=s("h2",{id:"图标类型",tabindex:"-1"},[a("图标类型 "),s("a",{class:"header-anchor",href:"#图标类型","aria-label":"Permalink to “图标类型”"},"​")],-1)),t[8]||(t[8]=s("p",null,[a("通过"),s("code",null,"icon"),a("属性可以设置结果图标。")],-1)),i(n,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYResult icon='primary' title='主要结果' subTitle='这是一个主要结果' />
        <MYResult icon='success' title='成功结果' subTitle='操作成功完成' />
        <MYResult icon='warning' title='警告结果' subTitle='请注意相关事项' />
        <MYResult icon='error' title='错误结果' subTitle='操作失败，请重试' />
        <MYResult icon='info' title='信息结果' subTitle='这是一条信息提示' />
    </div>
</template>
  `.trim()},{demo:e(()=>[s("div",M,[i(l,{icon:"primary",title:"主要结果",subTitle:"这是一个主要结果"}),i(l,{icon:"success",title:"成功结果",subTitle:"操作成功完成"}),i(l,{icon:"warning",title:"警告结果",subTitle:"请注意相关事项"}),i(l,{icon:"error",title:"错误结果",subTitle:"操作失败，请重试"}),i(l,{icon:"info",title:"信息结果",subTitle:"这是一条信息提示"})])]),_:1},8,["code"]),t[9]||(t[9]=s("h2",{id:"插槽使用",tabindex:"-1"},[a("插槽使用 "),s("a",{class:"header-anchor",href:"#插槽使用","aria-label":"Permalink to “插槽使用”"},"​")],-1)),t[10]||(t[10]=s("p",null,"使用插槽可以自定义副标题和额外内容。",-1)),i(n,{title:"代码演示",code:`
<template>
    <MYResult title='操作成功' icon='success'>
        <template #sub-title>
            <div style='color: #52c41a; font-weight: bold;'>
                自定义副标题内容，支持HTML
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary'>返回首页</MYButton>
                <MYButton type='info'>查看详情</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()},{demo:e(()=>[i(l,{title:"操作成功",icon:"success"},{"sub-title":e(()=>[...t[0]||(t[0]=[s("div",{style:{color:"#52c41a","font-weight":"bold"}}," 自定义副标题内容，支持HTML ",-1)])]),extra:e(()=>[s("div",Y,[i(p,{type:"primary"},{default:e(()=>[...t[1]||(t[1]=[a("返回首页",-1)])]),_:1}),i(p,{type:"info"},{default:e(()=>[...t[2]||(t[2]=[a("查看详情",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[11]||(t[11]=s("h2",{id:"组合使用",tabindex:"-1"},[a("组合使用 "),s("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),t[12]||(t[12]=s("p",null,"最后，实现个多种api组合使用实现个结果页面：",-1)),i(n,{title:"代码演示",code:`
<template>
    <MYResult 
        title='组合使用示例'
        icon='success'
    >
        <template #sub-title>
            <div style='color: #409EFF;'>
                这是一个组合使用的完整示例
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary' size='large'>主要操作</MYButton>
                <MYButton type='info' size='large' plain>次要操作</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()},{demo:e(()=>[i(l,{title:"组合使用示例",icon:"success"},{"sub-title":e(()=>[...t[3]||(t[3]=[s("div",{style:{color:"#409EFF"}}," 这是一个组合使用的完整示例 ",-1)])]),extra:e(()=>[s("div",E,[i(p,{type:"primary",size:"large"},{default:e(()=>[...t[4]||(t[4]=[a("主要操作",-1)])]),_:1}),i(p,{type:"info",size:"large",plain:""},{default:e(()=>[...t[5]||(t[5]=[a("次要操作",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[13]||(t[13]=g("",7))])}}});export{N as __pageData,O as default};

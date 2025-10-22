const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/primary.DBIZxpdK.js","assets/chunks/framework.DHTvsukI.js","assets/chunks/success.gAE_NgK5.js","assets/chunks/warning.m7W97I0W.js","assets/chunks/error.C52CZaVO.js","assets/chunks/info.D6A3IPDV.js"])))=>i.map(i=>d[i]);
import{d as f,am as r,a0 as B,c as k,o as h,b as A,j as s,K as x,k as y,t as m,r as b,an as d,I as T,ah as g,J as i,w as e,a}from"./chunks/framework.DHTvsukI.js";import{_ as p}from"./chunks/button.vue_vue_type_script_setup_true_lang.Dy4u7t3_.js";import"./chunks/useClassComputed.CEqmS9F9.js";import"./chunks/useColorUtils.XlKXkB4f.js";const v={class:"result"},D={class:"result-title"},C={class:"result-subtitle"},P={key:1},R={class:"result-extra"},l=f({name:"MYResult",__name:"result",props:{icon:{},title:{},subTitle:{}},setup(o){const c=o,n={primary:r(()=>d(()=>import("./chunks/primary.DBIZxpdK.js"),__vite__mapDeps([0,1]))),success:r(()=>d(()=>import("./chunks/success.gAE_NgK5.js"),__vite__mapDeps([2,1]))),warning:r(()=>d(()=>import("./chunks/warning.m7W97I0W.js"),__vite__mapDeps([3,1]))),error:r(()=>d(()=>import("./chunks/error.C52CZaVO.js"),__vite__mapDeps([4,1]))),info:r(()=>d(()=>import("./chunks/info.D6A3IPDV.js"),__vite__mapDeps([5,1])))}[c.icon||"info"],_=B();return(u,I)=>(h(),k("div",v,[(h(),A(x(y(n)),{class:"result-icon"})),s("div",D,m(o.title),1),s("div",C,[y(_)["sub-title"]?b(u.$slots,"sub-title",{key:0}):(h(),k("span",P,m(o.subTitle),1))]),s("div",R,[b(u.$slots,"extra")])]))}}),M={style:{display:"flex","flex-direction":"column",gap:"20px"}},Y={style:{display:"flex",gap:"10px","justify-content":"center"}},E={style:{display:"flex",gap:"10px","justify-content":"center"}},N=JSON.parse('{"title":"Result","description":"","frontmatter":{},"headers":[],"relativePath":"components/FeedbackResult.md","filePath":"components/FeedbackResult.md"}'),S={name:"components/FeedbackResult.md"},O=Object.assign(S,{setup(o){return(c,t)=>{const n=T("ShowCode");return h(),k("div",null,[t[6]||(t[6]=g('<h1 id="result" tabindex="-1">Result <a class="header-anchor" href="#result" aria-label="Permalink to “Result”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>result结果组件，用于展示操作结果的状态。<br> 可以使用<code>&lt;MYResult&gt;&lt;/MYResult&gt;</code>来实现一个结果展示。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to “基础用法”">​</a></h2><p>使用<code>title</code>属性设置主标题，<code>subTitle</code>属性设置副标题。</p>',5)),i(n,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(l,{title:"组合使用示例",icon:"success"},{"sub-title":e(()=>[...t[3]||(t[3]=[s("div",{style:{color:"#409EFF"}}," 这是一个组合使用的完整示例 ",-1)])]),extra:e(()=>[s("div",E,[i(p,{type:"primary",size:"large"},{default:e(()=>[...t[4]||(t[4]=[a("主要操作",-1)])]),_:1}),i(p,{type:"info",size:"large",plain:""},{default:e(()=>[...t[5]||(t[5]=[a("次要操作",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[13]||(t[13]=g(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>主标题</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>subTitle</td><td>副标题</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>icon</td><td>图标类型</td><td>string</td><td><code>primary</code>/<code>success</code>/<code>warning</code>/<code>error</code>/<code>info</code></td><td><code>&#39;info&#39;</code></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to “Slots”">​</a></h3><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>sub-title</td><td>自定义副标题内容</td></tr><tr><td>extra</td><td>额外内容区域</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> ResultProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  subTitle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  icon</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">primary</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">success</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">warning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">error</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">info</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7))])}}});export{N as __pageData,O as default};

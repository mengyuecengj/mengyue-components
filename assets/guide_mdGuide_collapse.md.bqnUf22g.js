import{p as c,C as r,c as u,o as m,af as p,G as l,w as n,j as s}from"./chunks/framework.D6WQP5md.js";const _=JSON.parse('{"title":"Collapse","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mdGuide/collapse.md","filePath":"guide/mdGuide/collapse.md"}'),C={name:"guide/mdGuide/collapse.md"},q=Object.assign(C,{setup(v){const o=c(["1"]),i=c("a");return(g,a)=>{const t=r("MYCollapse-item"),d=r("MYCollapse");return m(),u("div",null,[a[8]||(a[8]=p(`<h1 id="collapse" tabindex="-1">Collapse <a class="header-anchor" href="#collapse" aria-label="Permalink to &quot;Collapse&quot;">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to &quot;简易介绍&quot;">​</a></h2><p>collapse折叠面板组件，用于展示可折叠的内容区域。mengyue-components进行了封装并进行了vitest测试。<br> 可以使用<code>&lt;MYCollapse&gt;&lt;/MYCollapse&gt;</code>或者<code>&lt;MYCollapse /&gt;</code>和<code>&lt;MYCollapse-item&gt;&lt;/MYCollapse-item&gt;</code>或者<code>&lt;MYCollapse-item /&gt;</code>来实现折叠面板。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用<code>v-model</code>绑定当前激活的面板，并通过<code>accordion</code>属性设置是否为手风琴模式。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYCollapse v-model=&quot;activeNames&quot;&gt;</span></span>
<span class="line"><span>    &lt;MYCollapse-item title=&quot;功能特性&quot; name=&quot;1&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;支持多面板同时展开&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;通过 v-model 绑定展开的面板&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCollapse-item&gt;</span></span>
<span class="line"><span>    &lt;MYCollapse-item title=&quot;用户体验&quot; name=&quot;2&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;提供平滑的展开/收起动画&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;支持自定义内容&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCollapse-item&gt;</span></span>
<span class="line"><span>    &lt;MYCollapse-item title=&quot;可配置性&quot; name=&quot;3&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;可以通过 props 调整行为&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;支持手风琴模式和多面板模式&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCollapse-item&gt;</span></span>
<span class="line"><span>&lt;/MYCollapse&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>// 多面板模式的活跃面板</span></span>
<span class="line"><span>const activeNames = ref([&#39;1&#39;])</span></span>
<span class="line"><span>// 手风琴模式的活跃面板</span></span>
<span class="line"><span>const activeAccordionName = ref(&#39;a&#39;)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,6)),l(d,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=e=>o.value=e)},{default:n(()=>[l(t,{title:"功能特性",name:"1"},{default:n(()=>a[2]||(a[2]=[s("div",null,"支持多面板同时展开",-1),s("div",null,"通过 v-model 绑定展开的面板",-1)])),_:1,__:[2]}),l(t,{title:"用户体验",name:"2"},{default:n(()=>a[3]||(a[3]=[s("div",null,"提供平滑的展开/收起动画",-1),s("div",null,"支持自定义内容",-1)])),_:1,__:[3]}),l(t,{title:"可配置性",name:"3"},{default:n(()=>a[4]||(a[4]=[s("div",null,"可以通过 props 调整行为",-1),s("div",null,"支持手风琴模式和多面板模式",-1)])),_:1,__:[4]})]),_:1},8,["modelValue"]),a[9]||(a[9]=p(`<h2 id="手风琴模式" tabindex="-1">手风琴模式 <a class="header-anchor" href="#手风琴模式" aria-label="Permalink to &quot;手风琴模式&quot;">​</a></h2><p>使用<code>accordion</code>属性可以设置为手风琴模式，每次只能展开一个面板。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYCollapse v-model=&quot;activeAccordionName&quot; accordion&gt;</span></span>
<span class="line"><span>    &lt;MYCollapse-item title=&quot;简介&quot; name=&quot;a&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;手风琴模式一次只能展开一个面板&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCollapse-item&gt;</span></span>
<span class="line"><span>    &lt;MYCollapse-item title=&quot;细节&quot; name=&quot;b&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;点击一个面板会收起其他面板&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCollapse-item&gt;</span></span>
<span class="line"><span>    &lt;MYCollapse-item title=&quot;备注&quot; name=&quot;c&quot;&gt;</span></span>
<span class="line"><span>        &lt;div&gt;适合需要聚焦单一内容的场景&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCollapse-item&gt;</span></span>
<span class="line"><span>&lt;/MYCollapse&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),l(d,{modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=e=>i.value=e),accordion:""},{default:n(()=>[l(t,{title:"简介",name:"a"},{default:n(()=>a[5]||(a[5]=[s("div",null,"手风琴模式一次只能展开一个面板",-1)])),_:1,__:[5]}),l(t,{title:"细节",name:"b"},{default:n(()=>a[6]||(a[6]=[s("div",null,"点击一个面板会收起其他面板",-1)])),_:1,__:[6]}),l(t,{title:"备注",name:"c"},{default:n(()=>a[7]||(a[7]=[s("div",null,"适合需要聚焦单一内容的场景",-1)])),_:1,__:[7]})]),_:1},8,["modelValue"]),a[10]||(a[10]=p(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="collapse-props" tabindex="-1">Collapse Props <a class="header-anchor" href="#collapse-props" aria-label="Permalink to &quot;Collapse Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>accordion</td><td>是否为手风琴模式</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="collapseitem-props" tabindex="-1">CollapseItem Props <a class="header-anchor" href="#collapseitem-props" aria-label="Permalink to &quot;CollapseItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>唯一标识符</td><td>string</td><td>—</td><td>—</td></tr><tr><td>title</td><td>面板标题</td><td>string</td><td>—</td><td>—</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span style="color:#616E88;">// Collapse 类型定义</span></span>
<span class="line"><span style="color:#81A1C1;">type</span><span style="color:#8FBCBB;"> CollapseProps</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  accordion</span><span style="color:#81A1C1;">?:</span><span style="color:#8FBCBB;"> boolean</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;">// CollapseItem 类型定义</span></span>
<span class="line"><span style="color:#81A1C1;">type</span><span style="color:#8FBCBB;"> CollapseItemProps</span><span style="color:#81A1C1;"> =</span><span style="color:#ECEFF4;"> {</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  name</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> string</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">  title</span><span style="color:#81A1C1;">:</span><span style="color:#8FBCBB;"> string</span><span style="color:#81A1C1;">;</span></span>
<span class="line"><span style="color:#ECEFF4;">}</span><span style="color:#81A1C1;">;</span></span>
<span class="line"></span></code></pre></div>`,7))])}}});export{_ as __pageData,q as default};

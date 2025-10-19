import{_ as p,C as d,c as i,o as r,af as l,G as a,w as n,j as e}from"./chunks/framework.B2AMlDzG.js";const _=JSON.parse('{"title":"Layout","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mdGuide/layout.md","filePath":"guide/mdGuide/layout.md"}'),c={name:"guide/mdGuide/layout.md"};function u(g,s,b,v,q,f){const t=d("MYCol"),o=d("MYRow");return r(),i("div",null,[s[14]||(s[14]=l(`<h1 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Layout&quot;">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to &quot;简易介绍&quot;">​</a></h2><p>Layout 布局组件，用于快速构建页面布局结构。mengyue-components 提供了灵活的布局方案，支持栅格系统和多种对齐方式。可以使用 <code>&lt;MYRow&gt;&lt;/MYRow&gt;</code> 和 <code>&lt;MYCol&gt;&lt;/MYCol&gt;</code> 来实现布局。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><h3 id="基础网格布局" tabindex="-1">基础网格布局 <a class="header-anchor" href="#基础网格布局" aria-label="Permalink to &quot;基础网格布局&quot;">​</a></h3><p>使用<code>&lt;MYRow&gt;&lt;/MYRow&gt;</code>和<code>&lt;MYCol&gt;&lt;/MYCol&gt;</code>标签来构建基础的网格布局系统。如果使用 <code>&lt;MYRow&gt;&lt;/MYRow&gt;</code> 和 <code>&lt;MYCol&gt;&lt;/MYCol&gt;</code> 标签实现基本的栅格布局，将使用默认的 <code>24</code> 列模式。此处为了效果更直观加入了一定的样式。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYRow&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;6&quot;&gt;</span></span>
<span class="line"><span>        &lt;div style=&quot;background: red&quot;&gt;span=6&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;12&quot;&gt;</span></span>
<span class="line"><span>        &lt;div style=&quot;background: #2c2&quot;&gt;span=12&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;6&quot;&gt;</span></span>
<span class="line"><span>        &lt;div style=&quot;background: #2828&quot;&gt;span=6&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>&lt;/MYRow&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,7)),a(o,null,{default:n(()=>[a(t,{span:6},{default:n(()=>[...s[0]||(s[0]=[e("div",{style:{background:"red"}},"span=6",-1)])]),_:1}),a(t,{span:12},{default:n(()=>[...s[1]||(s[1]=[e("div",{style:{background:"#2c2"}},"span=12",-1)])]),_:1}),a(t,{span:6},{default:n(()=>[...s[2]||(s[2]=[e("div",{style:{background:"#2828"}},"span=6",-1)])]),_:1})]),_:1}),s[15]||(s[15]=l(`<h3 id="间距控制" tabindex="-1">间距控制 <a class="header-anchor" href="#间距控制" aria-label="Permalink to &quot;间距控制&quot;">​</a></h3><p>通过 <code>gutter</code> 属性可以设置栅格之间的间距。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>      &lt;MYRow :gutter=&quot;16&quot;&gt;</span></span>
<span class="line"><span>        &lt;MYCol :span=&quot;8&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;demo-box&quot;&gt;左侧&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/MYCol&gt;</span></span>
<span class="line"><span>        &lt;MYCol :span=&quot;8&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;demo-box&quot;&gt;中间&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/MYCol&gt;</span></span>
<span class="line"><span>        &lt;MYCol :span=&quot;8&quot;&gt;</span></span>
<span class="line"><span>          &lt;div class=&quot;demo-box&quot;&gt;右侧&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/MYCol&gt;</span></span>
<span class="line"><span>      &lt;/MYRow&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),a(o,{gutter:16},{default:n(()=>[a(t,{span:8},{default:n(()=>[...s[3]||(s[3]=[e("div",{style:{background:"red"}},"左侧",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...s[4]||(s[4]=[e("div",{style:{background:"#2c2"}},"中间",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...s[5]||(s[5]=[e("div",{style:{background:"#2828"}},"右侧",-1)])]),_:1})]),_:1}),s[16]||(s[16]=l(`<h3 id="两端对齐" tabindex="-1">两端对齐 <a class="header-anchor" href="#两端对齐" aria-label="Permalink to &quot;两端对齐&quot;">​</a></h3><p>通过 <code>justify</code> 属性可以设置水平对齐方式（<code>start</code>、<code>end</code>、<code>center</code>、<code>space-around</code>、<code>space-between</code>）。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYRow justify=&quot;space-between&quot;&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;6&quot;&gt;</span></span>
<span class="line"><span>        &lt;div style=&quot;background: red&quot;&gt;左侧&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;6&quot;&gt;</span></span>
<span class="line"><span>        &lt;div style=&quot;background: #2c2&quot;&gt;右侧&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>&lt;/MYRow&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),a(o,{justify:"space-between"},{default:n(()=>[a(t,{span:6},{default:n(()=>[...s[6]||(s[6]=[e("div",{style:{background:"red"}},"左侧",-1)])]),_:1}),a(t,{span:6},{default:n(()=>[...s[7]||(s[7]=[e("div",{style:{background:"#2c2"}},"右侧",-1)])]),_:1})]),_:1}),s[17]||(s[17]=l(`<h3 id="垂直居中" tabindex="-1">垂直居中 <a class="header-anchor" href="#垂直居中" aria-label="Permalink to &quot;垂直居中&quot;">​</a></h3><p>通过 <code>align</code> 属性可以设置垂直居中。 以及 <code>alignCenter</code> 开源设置水平垂直居中。</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYRow align&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;24&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;demo-box&quot;&gt;顶部&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;24&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;demo-box&quot;&gt;中部&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;24&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;demo-box&quot;&gt;底部&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>&lt;/MYRow&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),a(o,{align:""},{default:n(()=>[a(t,{span:24},{default:n(()=>[...s[8]||(s[8]=[e("div",{style:{background:"red"}},"顶部",-1)])]),_:1}),a(t,{span:24},{default:n(()=>[...s[9]||(s[9]=[e("div",{style:{background:"#2c2"}},"中部",-1)])]),_:1}),a(t,{span:24},{default:n(()=>[...s[10]||(s[10]=[e("div",{style:{background:"#2828"}},"底部",-1)])]),_:1})]),_:1}),s[18]||(s[18]=l(`<h3 id="方向反转" tabindex="-1">方向反转 <a class="header-anchor" href="#方向反转" aria-label="Permalink to &quot;方向反转&quot;">​</a></h3><p>通过 <code>direction</code> 属性可以设置布局方向（<code>row</code>、<code>column</code>、<code>row-reverse</code>、<code>column-reverse</code>）。默认值为: row</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYRow direction=&quot;row-reverse&quot;&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;8&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;demo-box&quot;&gt;1 (视觉在右)&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;8&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;demo-box&quot;&gt;2&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>    &lt;MYCol :span=&quot;8&quot;&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;demo-box&quot;&gt;3 (视觉在左)&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/MYCol&gt;</span></span>
<span class="line"><span>&lt;/MYRow&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),a(o,{direction:"row-reverse"},{default:n(()=>[a(t,{span:8},{default:n(()=>[...s[11]||(s[11]=[e("div",{style:{background:"red"}},"1 (视觉在右)",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...s[12]||(s[12]=[e("div",{style:{background:"#2c2"}},"2",-1)])]),_:1}),a(t,{span:8},{default:n(()=>[...s[13]||(s[13]=[e("div",{style:{background:"#2828"}},"3 (视觉在左)",-1)])]),_:1})]),_:1}),s[19]||(s[19]=l(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="myrow-props" tabindex="-1">MYRow Props <a class="header-anchor" href="#myrow-props" aria-label="Permalink to &quot;MYRow Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>gutter</td><td>栅格间距</td><td>number/string</td><td>0-24</td><td><code>0</code></td></tr><tr><td>justify</td><td>水平对齐方式</td><td>string</td><td><code>start</code>/<code>end</code>/<code>center</code>/<code>space-around</code>/<code>space-between</code></td><td>—</td></tr><tr><td>align</td><td>垂直对齐方式</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>alignCenter</td><td>垂直水平居中</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>direction</td><td>布局方向</td><td>string</td><td><code>row</code>/<code>column</code>/<code>row-reverse</code>/<code>column-reverse</code></td><td><code>row</code></td></tr><tr><td>tag</td><td>渲染标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>div</code></td></tr></tbody></table><h3 id="col-props" tabindex="-1">Col Props <a class="header-anchor" href="#col-props" aria-label="Permalink to &quot;Col Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>span</td><td>栅格宽度</td><td>number</td><td>1-24</td><td><code>24</code></td></tr><tr><td>offsetLeft</td><td>左侧偏移</td><td>number/string</td><td>0-24</td><td><code>0</code></td></tr><tr><td>offsetRight</td><td>右侧偏移</td><td>number/string</td><td>0-24</td><td><code>0</code></td></tr><tr><td>pull</td><td>向左移动</td><td>number/string</td><td>0-24</td><td><code>0</code></td></tr><tr><td>push</td><td>向右移动</td><td>number/string</td><td>0-24</td><td><code>0</code></td></tr><tr><td>tag</td><td>渲染标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>div</code></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>interface LayoutProps {</span></span>
<span class="line"><span>  gutter?: number | string;</span></span>
<span class="line"><span>  justify?: &#39;start&#39; | &#39;end&#39; | &#39;center&#39; | &#39;space-around&#39; | &#39;space-between&#39;;</span></span>
<span class="line"><span>  align?: boolean;</span></span>
<span class="line"><span>  alignCenter?: boolean;</span></span>
<span class="line"><span>  direction?: &#39;row&#39; | &#39;column&#39; | &#39;row-reverse&#39; | &#39;column-reverse&#39;;</span></span>
<span class="line"><span>  tag?: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface ColProps {</span></span>
<span class="line"><span>  span?: number;</span></span>
<span class="line"><span>  offsetLeft?: number | string;</span></span>
<span class="line"><span>  offsetRight?: number | string;</span></span>
<span class="line"><span>  pull?: number | string;</span></span>
<span class="line"><span>  push?: number | string;</span></span>
<span class="line"><span>  tag?: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div>`,7))])}const h=p(c,[["render",u]]);export{_ as __pageData,h as default};

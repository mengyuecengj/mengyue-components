import{_ as h,C as e,c as u,o as g,af as d,j as n,G as a,w as s,a as p}from"./chunks/framework.B2AMlDzG.js";const C=JSON.parse('{"title":"Container","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mdGuide/container.md","filePath":"guide/mdGuide/container.md"}'),b={name:"guide/mdGuide/container.md"},m={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},q={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},f={class:"test-case"};function x(M,t,_,Y,y,P){const r=e("MYContainer"),l=e("MYHeader"),i=e("MYAside"),o=e("MYMain"),c=e("MYFooter");return g(),u("div",null,[t[10]||(t[10]=d(`<h1 id="container" tabindex="-1">Container <a class="header-anchor" href="#container" aria-label="Permalink to &quot;Container&quot;">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to &quot;简易介绍&quot;">​</a></h2><p>Container 是一个容器组件，用于包裹其他内容并提供布局和样式控制。mengyue-components 对其进行了封装并进行了 vitest 测试。<br> 它的使用有五种标签：<br><code>&lt;MYContainer /&gt;</code>: 基础容器<br><code>&lt;MYHeader /&gt;</code>: 页面头部<br><code>&lt;MYAside /&gt;</code>: 侧边栏<br><code>&lt;MYMain /&gt;</code>: 主体内容<br><code>&lt;MYFooter /&gt;</code>: 页脚<br></p><h2 id="关于容器的使用" tabindex="-1">关于容器的使用 <a class="header-anchor" href="#关于容器的使用" aria-label="Permalink to &quot;关于容器的使用&quot;">​</a></h2><h3 id="基础容器" tabindex="-1">基础容器 <a class="header-anchor" href="#基础容器" aria-label="Permalink to &quot;基础容器&quot;">​</a></h3><p>使用 <code>&lt;MYContainer&gt;&lt;/MYContainer&gt;</code> 来实现一个容器。例如：</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;div style=&quot;border: 1px solid #2c2; padding: 15px; border-radius: 4px&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;基础容器&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;MYContainer class=&quot;basic-container&quot;&gt;</span></span>
<span class="line"><span>       &lt;p&gt;这是一个基础容器&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/MYContainer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,7)),n("div",m,[t[1]||(t[1]=n("h3",null,"基础容器",-1)),a(r,{class:"basic-container"},{default:s(()=>[...t[0]||(t[0]=[n("p",null,"这是一个基础容器",-1)])]),_:1})]),t[11]||(t[11]=d(`<h3 id="带着自定义样式的基础容器" tabindex="-1">带着自定义样式的基础容器 <a class="header-anchor" href="#带着自定义样式的基础容器" aria-label="Permalink to &quot;带着自定义样式的基础容器&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;div style=&quot;border: 1px solid #2c2; padding: 15px; border-radius: 4px&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;带自定义样式的容器&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;MYContainer </span></span>
<span class="line"><span>        height=&quot;300px&quot; </span></span>
<span class="line"><span>        width=&quot;80%&quot; </span></span>
<span class="line"><span>        background=&quot;#470303ff&quot; class=&quot;styled-container&quot;&gt;</span></span>
<span class="line"><span>        &lt;p&gt;自定义高度、宽度和背景色的容器&lt;/p&gt;</span></span>
<span class="line"><span>    &lt;/MYContainer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,2)),n("div",q,[t[3]||(t[3]=n("h3",null,"带自定义样式的容器",-1)),a(r,{height:"300px",width:"80%",background:"#470303ff",class:"styled-container"},{default:s(()=>[...t[2]||(t[2]=[n("p",null,"自定义高度、宽度和背景色的容器",-1)])]),_:1})]),t[12]||(t[12]=d(`<h3 id="完整布局" tabindex="-1">完整布局 <a class="header-anchor" href="#完整布局" aria-label="Permalink to &quot;完整布局&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;div class=&quot;test-case&quot;&gt;</span></span>
<span class="line"><span>    &lt;h3&gt;完整布局&lt;/h3&gt;</span></span>
<span class="line"><span>    &lt;MYContainer height=&quot;200px&quot; class=&quot;full-layout&quot;&gt;</span></span>
<span class="line"><span>        &lt;MYHeader class=&quot;header&quot; height=&quot;30px&quot;&gt;头部&lt;/MYHeader&gt;</span></span>
<span class="line"><span>        &lt;MYAside class=&quot;left-aside&quot;&gt;左侧边栏&lt;/MYAside&gt;</span></span>
<span class="line"><span>        &lt;MYMain class=&quot;main-content&quot;&gt;</span></span>
<span class="line"><span>          &lt;p&gt;主内容区域&lt;/p&gt;</span></span>
<span class="line"><span>          &lt;p&gt;可以放置各种内容&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;/MYMain&gt;</span></span>
<span class="line"><span>        &lt;MYAside position=&quot;right&quot; class=&quot;right-aside&quot;&gt;右侧边栏&lt;/MYAside&gt;</span></span>
<span class="line"><span>        &lt;MYFooter class=&quot;footer&quot; height=&quot;30px&quot;&gt;页脚区域&lt;/MYFooter&gt;</span></span>
<span class="line"><span>    &lt;/MYContainer&gt;</span></span>
<span class="line"><span>&lt;/div&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,2)),n("div",f,[t[9]||(t[9]=n("h3",null,"完整布局",-1)),a(r,{height:"200px",class:"full-layout"},{default:s(()=>[a(l,{class:"header",height:"30px"},{default:s(()=>[...t[4]||(t[4]=[p("头部",-1)])]),_:1}),a(i,{class:"left-aside"},{default:s(()=>[...t[5]||(t[5]=[p("左侧边栏",-1)])]),_:1}),a(o,{class:"main-content"},{default:s(()=>[...t[6]||(t[6]=[n("p",null,"主内容区域",-1),n("p",null,"可以放置各种内容",-1)])]),_:1}),a(i,{position:"right",class:"right-aside"},{default:s(()=>[...t[7]||(t[7]=[p("右侧边栏",-1)])]),_:1}),a(c,{class:"footer",height:"30px"},{default:s(()=>[...t[8]||(t[8]=[p("页脚区域",-1)])]),_:1})]),_:1})]),t[13]||(t[13]=d(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="mycontainer-props" tabindex="-1">MYContainer Props <a class="header-anchor" href="#mycontainer-props" aria-label="Permalink to &quot;MYContainer Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td>string/number</td><td>px/em/rem/动态</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>string/number</td><td>px/em/rem/动态/%</td><td>—</td></tr><tr><td>background</td><td>背景颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>tag</td><td>容器标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>div</code></td></tr></tbody></table><h3 id="myheader-props" tabindex="-1">MYHeader Props <a class="header-anchor" href="#myheader-props" aria-label="Permalink to &quot;MYHeader Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td>string/number</td><td>px/em/rem/动态</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>string/number</td><td>px/em/rem/动态/%</td><td>—</td></tr><tr><td>background</td><td>背景颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>fixed</td><td>固定头部导航</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>tag</td><td>容器标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>header</code></td></tr></tbody></table><h3 id="myaside-props" tabindex="-1">MYAside Props <a class="header-anchor" href="#myaside-props" aria-label="Permalink to &quot;MYAside Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td>string/number</td><td>px/em/rem/动态</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>string/number</td><td>px/em/rem/动态/%</td><td>—</td></tr><tr><td>background</td><td>背景颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>position</td><td>侧边栏位置位置</td><td>string</td><td><code>left</code>/<code>right</code></td><td><code>left</code></td></tr><tr><td>tag</td><td>容器标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>aside</code></td></tr></tbody></table><h3 id="mymain-props" tabindex="-1">MYMain Props <a class="header-anchor" href="#mymain-props" aria-label="Permalink to &quot;MYMain Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td>string/number</td><td>px/em/rem/动态</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>string/number</td><td>px/em/rem/动态/%</td><td>—</td></tr><tr><td>background</td><td>背景颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>tag</td><td>容器标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>main</code></td></tr></tbody></table><h3 id="myfooter-props" tabindex="-1">MYFooter Props <a class="header-anchor" href="#myfooter-props" aria-label="Permalink to &quot;MYFooter Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>高度</td><td>string/number</td><td>px/em/rem/动态</td><td>—</td></tr><tr><td>width</td><td>宽度</td><td>string/number</td><td>px/em/rem/动态/%</td><td>—</td></tr><tr><td>background</td><td>背景颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr><tr><td>tag</td><td>容器标签</td><td>string</td><td>支持所有 HTML 标签</td><td><code>footer</code></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>interface ContainerProps {</span></span>
<span class="line"><span>  height?: string | number;</span></span>
<span class="line"><span>  width?: string | number;</span></span>
<span class="line"><span>  background?: string;</span></span>
<span class="line"><span>  tag?: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface HeaderProps {</span></span>
<span class="line"><span>  height?: string | number;</span></span>
<span class="line"><span>  width?: string | number;</span></span>
<span class="line"><span>  background?: string;</span></span>
<span class="line"><span>  fixed?: boolean;</span></span>
<span class="line"><span>  tag?: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface AsideProps {</span></span>
<span class="line"><span>  height?: string | number;</span></span>
<span class="line"><span>  width?: string | number;</span></span>
<span class="line"><span>  background?: string;</span></span>
<span class="line"><span>  tag?: string;</span></span>
<span class="line"><span>  position?: &quot;left&quot; | &quot;right&quot;;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface MainProps {</span></span>
<span class="line"><span>  height?: string | number;</span></span>
<span class="line"><span>  width?: string | number;</span></span>
<span class="line"><span>  background?: string;</span></span>
<span class="line"><span>  tag?: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface FooterProps {</span></span>
<span class="line"><span>  height?: string | number;</span></span>
<span class="line"><span>  width?: string | number;</span></span>
<span class="line"><span>  background?: string;</span></span>
<span class="line"><span>  tag?: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div>`,13))])}const k=h(b,[["render",x]]);export{C as __pageData,k as default};

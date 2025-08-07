import{_ as n,c as a,o as s,af as o}from"./chunks/framework.Dg2MLihl.js";const h=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mdGuide/dropdown.md","filePath":"guide/mdGuide/dropdown.md"}'),e={name:"guide/mdGuide/dropdown.md"};function p(d,t,l,i,r,c){return s(),a("div",null,t[0]||(t[0]=[o(`<h1 id="dropdown" tabindex="-1">Dropdown <a class="header-anchor" href="#dropdown" aria-label="Permalink to &quot;Dropdown&quot;">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to &quot;简易介绍&quot;">​</a></h2><p>Dropdown 下拉菜单组件，用于展示一个下拉菜单。mengyue-components 进行了封装并进行了 vitest 测试。<br> 下拉菜单有三种标签<br><code>&lt;MYDropdown&gt;&lt;/MYDropdown&gt;</code>或者<code>&lt;MYDropdown /&gt;</code><br><code>&lt;MYDropdownMenu&gt;&lt;/MYDropdownMenu&gt;</code>或者<code>&lt;MYDropdownMenu /&gt;</code><br><code>&lt;MYDropdownItem&gt;&lt;/MYDropdownItem&gt;</code>或者<code>&lt;MYDropdownMenu /&gt;</code><br></p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYDropdown trigger=&quot;click&quot; placement=&quot;bottom-start&quot; class=&quot;a&quot;&gt;</span></span>
<span class="line"><span>    &lt;span class=&quot;el-dropdown-link&quot; style=&quot;cursor: pointer; display: flex; align-items: center;&quot;&gt;</span></span>
<span class="line"><span>      Dropdown List</span></span>
<span class="line"><span>      &lt;svg</span></span>
<span class="line"><span>        class=&quot;el-icon--right&quot;</span></span>
<span class="line"><span>        xmlns=&quot;http://www.w3.org/2000/svg&quot;</span></span>
<span class="line"><span>        fill=&quot;currentColor&quot;</span></span>
<span class="line"><span>        width=&quot;16&quot;</span></span>
<span class="line"><span>        height=&quot;16&quot;</span></span>
<span class="line"><span>        viewBox=&quot;0 0 1024 1024&quot;</span></span>
<span class="line"><span>        style=&quot;margin-left: 4px;&quot;</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        &lt;path d=&quot;M298 380l214 214 214-214z&quot;/&gt;</span></span>
<span class="line"><span>      &lt;/svg&gt;</span></span>
<span class="line"><span>    &lt;/span&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;template #dropdown&gt;</span></span>
<span class="line"><span>      &lt;MYDropdown-menu&gt;</span></span>
<span class="line"><span>        &lt;MYDropdown-item @click=&quot;onAction(&#39;Action 1&#39;)&quot;&gt;Action 1&lt;/MYDropdown-item&gt;</span></span>
<span class="line"><span>        &lt;MYDropdown-item @click=&quot;onAction(&#39;Action 2&#39;)&quot;&gt;Action 2&lt;/MYDropdown-item&gt;</span></span>
<span class="line"><span>        &lt;MYDropdown-item disabled&gt;Action 3 (disabled)&lt;/MYDropdown-item&gt;</span></span>
<span class="line"><span>        &lt;MYDropdown-item divided @click=&quot;onAction(&#39;Action 4&#39;)&quot;&gt;Action 4 (divided)&lt;/MYDropdown-item&gt;</span></span>
<span class="line"><span>      &lt;/MYDropdown-menu&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>&lt;/MYDropdown&gt;</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>trigger</td><td>触发方式</td><td>string</td><td><code>click</code>、<code>hover</code></td><td><code>click</code></td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td><code>bottom-end</code>、<code>bottom-start</code>、<code>bottom</code></td><td><code>bottom-start</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>下拉菜单内容</td></tr></tbody></table>`,10)]))}const g=n(e,[["render",p]]);export{h as __pageData,g as default};

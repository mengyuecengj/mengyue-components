import{_ as n,c as a,o as e,af as s}from"./chunks/framework.B2AMlDzG.js";const h=JSON.parse('{"title":"Menu","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mdGuide/menu.md","filePath":"guide/mdGuide/menu.md"}'),d={name:"guide/mdGuide/menu.md"};function p(l,t,o,i,u,r){return e(),a("div",null,[...t[0]||(t[0]=[s(`<h1 id="menu" tabindex="-1">Menu <a class="header-anchor" href="#menu" aria-label="Permalink to &quot;Menu&quot;">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to &quot;简易介绍&quot;">​</a></h2><p>Menu 菜单组件，用于展示导航菜单。mengyue-components 进行了封装并进行了 vitest 测试。<br> menu菜单有三种标签<br><code>&lt;MYMenu&gt;&lt;/MYMenu&gt;</code>或者<code>&lt;MYMenu /&gt;</code><br><code>&lt;MYMenu-submenu&gt;&lt;/MYMenu-submenu&gt;</code>或者<code>&lt;MYMenu-submenu /&gt;</code><br><code>&lt;MYMenu-item&gt;&lt;/MYMenu-item&gt;</code>或者<code>&lt;MYMenu-item /&gt;</code><br></p><h2 id="menu菜单使用方法" tabindex="-1">menu菜单使用方法 <a class="header-anchor" href="#menu菜单使用方法" aria-label="Permalink to &quot;menu菜单使用方法&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYMenu</span></span>
<span class="line"><span>    :default-active=&quot;activeIndex&quot;</span></span>
<span class="line"><span>    mode=&quot;horizontal&quot;</span></span>
<span class="line"><span>    background-color=&quot;#545c64&quot;</span></span>
<span class="line"><span>    text-color=&quot;#fff&quot;</span></span>
<span class="line"><span>    active-text-color=&quot;#ffd04b&quot;</span></span>
<span class="line"><span>    @select=&quot;handleSelect&quot;</span></span>
<span class="line"><span>&gt;</span></span>
<span class="line"><span>    &lt;MYMenu-item index=&quot;1&quot;&gt;首页&lt;/MYMenu-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;MYMenu-submenu index=&quot;2&quot;&gt;</span></span>
<span class="line"><span>      &lt;template #title&gt;工作区&lt;/template&gt;</span></span>
<span class="line"><span>      &lt;MYMenu-item index=&quot;2-1&quot;&gt;项目一&lt;/MYMenu-item&gt;</span></span>
<span class="line"><span>      &lt;MYMenu-item index=&quot;2-2&quot;&gt;项目二&lt;/MYMenu-item&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      &lt;MYMenu-submenu index=&quot;2-3&quot;&gt;</span></span>
<span class="line"><span>        &lt;template #title&gt;项目三&lt;/template&gt;</span></span>
<span class="line"><span>        &lt;MYMenu-item index=&quot;2-3-1&quot;&gt;子项一&lt;/MYMenu-item&gt;</span></span>
<span class="line"><span>        &lt;MYMenu-item index=&quot;2-3-2&quot;&gt;子项二&lt;/MYMenu-item&gt;</span></span>
<span class="line"><span>      &lt;/MYMenu-submenu&gt;</span></span>
<span class="line"><span>    &lt;/MYMenu-submenu&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;MYMenu-item index=&quot;3&quot; disabled&gt;禁用&lt;/MYMenu-item&gt;</span></span>
<span class="line"><span>    &lt;MYMenu-item index=&quot;4&quot;&gt;设置&lt;/MYMenu-item&gt;</span></span>
<span class="line"><span>&lt;/MYMenu&gt;</span></span>
<span class="line"><span></span></span></code></pre></div><h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="menu-props" tabindex="-1">Menu Props <a class="header-anchor" href="#menu-props" aria-label="Permalink to &quot;Menu Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>菜单模式</td><td>string</td><td><code>vertical</code>、<code>horizontal</code></td><td><code>vertical</code></td></tr><tr><td>defaultActive</td><td>默认激活的菜单项索引</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>backgroundColor</td><td>菜单背景色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>textColor</td><td>菜单文字颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>activeTextColor</td><td>激活菜单项文字颜色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="menuitem-props" tabindex="-1">MenuItem Props <a class="header-anchor" href="#menuitem-props" aria-label="Permalink to &quot;MenuItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>菜单项索引</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="submenu-props" tabindex="-1">SubMenu Props <a class="header-anchor" href="#submenu-props" aria-label="Permalink to &quot;SubMenu Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>子菜单索引</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>菜单项内容</td></tr><tr><td>title</td><td>子菜单标题</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>interface SubMenuProps {</span></span>
<span class="line"><span>  mode: string;</span></span>
<span class="line"><span>  defaultActive: string;</span></span>
<span class="line"><span>  backgroundColor: string;</span></span>
<span class="line"><span>  textColor: string;</span></span>
<span class="line"><span>  activeTextColor: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface MenuItemProps {</span></span>
<span class="line"><span>  index: string;</span></span>
<span class="line"><span>  disabled: boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface SubMenuProps {</span></span>
<span class="line"><span>  index: string;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div>`,16)])])}const m=n(d,[["render",p]]);export{h as __pageData,m as default};

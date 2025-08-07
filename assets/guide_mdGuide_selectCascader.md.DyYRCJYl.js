import{p as o,C as h,c as b,o as v,af as s,G as l}from"./chunks/framework.Dg2MLihl.js";const m=JSON.parse('{"title":"SelectCascader","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mdGuide/selectCascader.md","filePath":"guide/mdGuide/selectCascader.md"}'),_={name:"guide/mdGuide/selectCascader.md"},V=Object.assign(_,{setup(q){const d=o(""),t=o(""),p=o(""),r=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"},{value:"option3",label:"选项3"},{value:"option4",label:"选项4"}],i=[{value:"option1",label:"选项1"},{value:"option2",label:"选项2",disabled:!0}],c=[{value:"group1",label:"分组1",children:[{value:"option1-1",label:"选项1-1"},{value:"option1-2",label:"选项1-2"}]},{value:"group2",label:"分组2",children:[{value:"option2-1",label:"选项2-1"},{value:"option2-2",label:"选项2-2",children:[{value:"option2-2-1",label:"选项2-2-1"},{value:"option2-2-2",label:"选项2-2-2"}]}]}];return(u,a)=>{const n=h("MYSelect-cascader");return v(),b("div",null,[a[5]||(a[5]=s(`<h1 id="selectcascader" tabindex="-1">SelectCascader <a class="header-anchor" href="#selectcascader" aria-label="Permalink to &quot;SelectCascader&quot;">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to &quot;简易介绍&quot;">​</a></h2><p>selectCascader级联选择器组件，用于用户从多级下拉列表中选择一个或多个选项。mengyue-components进行了封装并进行了vitest测试。<br> 可以使用<code>&lt;MYSelect-cascader&gt;&lt;/MYSelect-cascader&gt;</code>或者<code>&lt;MYSelect-cascader /&gt;</code>来实现一个级联选择器</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用<code>v-model</code>绑定选中的值，并通过<code>options</code>属性传递级联数据。 例如<code>selectedValue1</code>已经定义了<code>const selectedValue1 = ref(&#39;&#39;)</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYSelect-cascader v-model=&quot;selectedValue1&quot; :options=&quot;options1&quot; placeholder=&quot;请选择&quot; @change=&quot;handleChange&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- selectValue1和options1需要定义个变量: 例如 --&gt;</span></span>
<span class="line"><span>const options1: Option[] = [</span></span>
<span class="line"><span>  { value: &#39;option1&#39;, label: &#39;选项1&#39; },</span></span>
<span class="line"><span>  { value: &#39;option2&#39;, label: &#39;选项2&#39; },</span></span>
<span class="line"><span>  { value: &#39;option3&#39;, label: &#39;选项3&#39; },</span></span>
<span class="line"><span>  { value: &#39;option4&#39;, label: &#39;选项4&#39; },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span></code></pre></div>`,6)),l(n,{modelValue:d.value,"onUpdate:modelValue":a[0]||(a[0]=e=>d.value=e),options:r,placeholder:"请选择",onChange:u.handleChange},null,8,["modelValue","onChange"]),a[6]||(a[6]=s(`<h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>使用<code>disabled</code>属性可以禁用选择器。 例如<code>selectedValue2</code>已经定义了<code>const selectedValue2 = ref(&#39;&#39;)</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYSelect-cascader v-model=&quot;selectedValue2&quot; :options=&quot;options2&quot; placeholder=&quot;禁用状态&quot; disabled /&gt;</span></span>
<span class="line"><span>&lt;!-- options2需要定义个变量: 例如--&gt;</span></span>
<span class="line"><span>const options2 = [</span></span>
<span class="line"><span>  { value: &#39;option1&#39;, label: &#39;选项1&#39; },</span></span>
<span class="line"><span>  { value: &#39;option2&#39;, label: &#39;选项2&#39; },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),l(n,{modelValue:t.value,"onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),options:i,placeholder:"禁用状态",disabled:""},null,8,["modelValue"]),a[7]||(a[7]=s(`<h3 id="禁用某一个选项" tabindex="-1">禁用某一个选项 <a class="header-anchor" href="#禁用某一个选项" aria-label="Permalink to &quot;禁用某一个选项&quot;">​</a></h3><p>例如<code>selectedValue2</code>已经定义了<code>const selectedValue2 = ref(&#39;&#39;)</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYSelect-cascader v-model=&quot;selectedValue2&quot; :options=&quot;options2&quot; placeholder=&quot;禁用状态&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- options2需要定义个变量: 例如--&gt;</span></span>
<span class="line"><span>const options2 = [</span></span>
<span class="line"><span>  { value: &#39;option1&#39;, label: &#39;选项1&#39; },</span></span>
<span class="line"><span>  { value: &#39;option2&#39;, label: &#39;选项2&#39; disabled: &quot;true&quot; },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),l(n,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value=e),options:i,placeholder:"禁用状态"},null,8,["modelValue"]),a[8]||(a[8]=s(`<h2 id="多级菜单" tabindex="-1">多级菜单 <a class="header-anchor" href="#多级菜单" aria-label="Permalink to &quot;多级菜单&quot;">​</a></h2><p>多级菜单，使用<code>options</code>属性传递多级数据。 例如<code>selectedValue3</code>已经定义了<code>const selectedValue3 = ref(&#39;&#39;)</code></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYSelect-cascader v-model=&quot;selectedValue3&quot; :options=&quot;options3&quot; placeholder=&quot;多级菜单&quot; /&gt;</span></span>
<span class="line"><span>&lt;!-- 这里需要定义个多级菜单的变量 --&gt;</span></span>
<span class="line"><span>const options3 = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    value: &#39;group1&#39;,</span></span>
<span class="line"><span>    label: &#39;分组1&#39;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      { value: &#39;option1-1&#39;, label: &#39;选项1-1&#39; },</span></span>
<span class="line"><span>      { value: &#39;option1-2&#39;, label: &#39;选项1-2&#39; },</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    value: &#39;group2&#39;,</span></span>
<span class="line"><span>    label: &#39;分组2&#39;,</span></span>
<span class="line"><span>    children: [</span></span>
<span class="line"><span>      { value: &#39;option2-1&#39;, label: &#39;选项2-1&#39; },</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        value: &#39;option2-2&#39;,</span></span>
<span class="line"><span>        label: &#39;选项2-2&#39;,</span></span>
<span class="line"><span>        children: [</span></span>
<span class="line"><span>          { value: &#39;option2-2-1&#39;, label: &#39;选项2-2-1&#39; },</span></span>
<span class="line"><span>          { value: &#39;option2-2-2&#39;, label: &#39;选项2-2-2&#39; },</span></span>
<span class="line"><span>        ]</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),l(n,{modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=e=>p.value=e),options:c,placeholder:"多级菜单"},null,8,["modelValue"]),a[9]||(a[9]=s(`<h2 id="自定义尺寸" tabindex="-1">自定义尺寸 <a class="header-anchor" href="#自定义尺寸" aria-label="Permalink to &quot;自定义尺寸&quot;">​</a></h2><p>使用<code>width</code>和<code>height</code>属性可以自定义选择器的宽度和高度。 定义了这个尺寸后，如果使用了多级菜单也会跟着变化。例如<code>selectedValue3</code>已经定义了<code>const selectedValue3 = ref(&#39;&#39;)</code><br> 这里定义了50px的高度和300px的宽度</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYSelect-cascader v-model=&quot;selectedValue3&quot; :options=&quot;options3&quot; placeholder=&quot;多级菜单&quot; height=&quot;50px&quot; width=&quot;500px&quot; /&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,3)),l(n,{modelValue:p.value,"onUpdate:modelValue":a[4]||(a[4]=e=>p.value=e),options:c,placeholder:"多级菜单",height:"50px",width:"500px"},null,8,["modelValue"]),a[10]||(a[10]=s(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="select-props" tabindex="-1">Select Props <a class="header-anchor" href="#select-props" aria-label="Permalink to &quot;Select Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>width</td><td>宽度</td><td>string | number</td><td>—</td><td><code>&#39;260px&#39;</code></td></tr><tr><td>height</td><td>高度</td><td>string | number</td><td>—</td><td><code>&#39;40px&#39;</code></td></tr><tr><td>options</td><td>级联数据</td><td>Array</td><td>—</td><td><code>[]</code></td></tr></tbody></table><h3 id="option-props" tabindex="-1">Option Props <a class="header-anchor" href="#option-props" aria-label="Permalink to &quot;Option Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>按钮内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>value</td><td>初始值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>children</td><td>子选项</td><td>Array</td><td>—</td><td>—</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>interface SelectCascaderProps = {</span></span>
<span class="line"><span>  disabled?: boolean;</span></span>
<span class="line"><span>  width?: string | number;</span></span>
<span class="line"><span>  height?: string | number;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface OptionCascaderProps = {</span></span>
<span class="line"><span>    label: string;</span></span>
<span class="line"><span>    value: string;</span></span>
<span class="line"><span>    disabled?: boolean;</span></span>
<span class="line"><span>    children?: Array;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div>`,7))])}}});export{m as __pageData,V as default};

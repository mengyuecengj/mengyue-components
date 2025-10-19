import{p as k,ag as F,C as l,c as V,o as x,af as m,G as n,w as e,a as p}from"./chunks/framework.B2AMlDzG.js";const R=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"guide/mdGuide/form.md","filePath":"guide/mdGuide/form.md"}'),C={name:"guide/mdGuide/form.md"},S=Object.assign(C,{setup(y){const r=k(),s=F({username:"",enabled:!1,gender:"1",hobbies:[]}),b={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}],hobbies:[{required:!0,message:"请选择至少一个兴趣爱好"}]};function g(){var o;s.username="",s.enabled=!1,s.gender="",s.hobbies=[],(o=r.value)==null||o.clearValidate()}function f(o){alert(o?"验证通过，可以提交！":"验证失败，请检查表单！")}function h(){r.value.validate().then(()=>{alert(`提交成功！
`+JSON.stringify(s,null,2))}).catch(()=>{alert("提交失败，请检查输入项！")})}return(o,a)=>{const q=l("MYInput"),d=l("MYForm-item"),u=l("MYButton"),M=l("MYSwitch"),c=l("MYRadio"),Y=l("MYRadio-group"),i=l("MYCheckbox"),v=l("MYCheckbox-group"),_=l("MYForm");return x(),V("div",null,[a[12]||(a[12]=m(`<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-label="Permalink to &quot;Form&quot;">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to &quot;简易介绍&quot;">​</a></h2><p>form表单组件，用于收集用户输入的数据并进行校验。mengyue-components进行了封装并进行了vitest测试。<br> form表单的实现标签有两种<code>&lt;MYForm&gt;&lt;/MYForm&gt;</code>或者<code>&lt;MYForm /&gt;</code>和<code>&lt;MYForm-item&gt;&lt;/MYForm-item&gt;</code>或者<code>&lt;MYForm-item /&gt;</code>。来实现表单</p><h2 id="表单使用" tabindex="-1">表单使用 <a class="header-anchor" href="#表单使用" aria-label="Permalink to &quot;表单使用&quot;">​</a></h2><p>例如在这里实现个带有常规表单组件的组合表单示例</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>&lt;MYForm ref=&quot;formRef&quot; v-model=&quot;formData&quot; :rules=&quot;rules&quot; @validate=&quot;onValidate&quot; style=&quot; color: red&quot;&gt;</span></span>
<span class="line"><span>    &lt;MYForm-item label=&quot;用户名&quot;prop=&quot;username&quot; :validateTrigger=&quot;&#39;blur&#39;&quot; style=&quot;color: red&quot;&gt;</span></span>
<span class="line"><span>        &lt;MYInput v-model=&quot;formData.username&quot; placeholder=&quot;请输入用户名&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/MYForm-item&gt;</span></span>
<span class="line"><span>        &lt;MYButton type=&quot;info&quot; @click=&quot;handleReset&quot;&gt;重置&lt;/MYButton&gt;</span></span>
<span class="line"><span>        &lt;MYButton type=&quot;button&quot; @click=&quot;handleSubmit&quot;&gt;提交&lt;/MYButton&gt;</span></span>
<span class="line"><span>    &lt;MYForm-item label=&quot;是否启用&quot; prop=&quot;enabled&quot;&gt;</span></span>
<span class="line"><span>        &lt;MYSwitch v-model=&quot;formData.enabled&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/MYForm-item&gt;</span></span>
<span class="line"><span>    &lt;!-- 单选框 --&gt;</span></span>
<span class="line"><span>    &lt;MYForm-item label=&quot;性别&quot; prop=&quot;gender&quot;&gt;</span></span>
<span class="line"><span>        &lt;MYRadio-group v-model=&quot;formData.gender&quot;&gt;</span></span>
<span class="line"><span>          &lt;MYRadio value=&quot;1&quot;&gt;男&lt;/MYRadio&gt;</span></span>
<span class="line"><span>          &lt;MYRadio value=&quot;2&quot;&gt;女&lt;/MYRadio&gt;</span></span>
<span class="line"><span>        &lt;/MYRadio-group&gt;</span></span>
<span class="line"><span>    &lt;/MYForm-item&gt;</span></span>
<span class="line"><span>    &lt;MYForm-item label=&quot;兴趣爱好&quot; prop=&quot;hobbies&quot;&gt;</span></span>
<span class="line"><span>        &lt;MYCheckbox-group v-model=&quot;formData.hobbies&quot;&gt;</span></span>
<span class="line"><span>          &lt;MYCheckbox value=&quot;reading&quot;&gt;阅读&lt;/MYCheckbox&gt;</span></span>
<span class="line"><span>          &lt;MYCheckbox value=&quot;gaming&quot;&gt;游戏&lt;/MYCheckbox&gt;</span></span>
<span class="line"><span>          &lt;MYCheckbox value=&quot;coding&quot;&gt;编程&lt;/MYCheckbox&gt;</span></span>
<span class="line"><span>        &lt;/MYCheckbox-group&gt;</span></span>
<span class="line"><span>    &lt;/MYForm-item&gt;</span></span>
<span class="line"><span>&lt;/MYForm&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { ref, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span>const formRef = ref()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const formData = reactive({</span></span>
<span class="line"><span>  username: &#39;&#39;,</span></span>
<span class="line"><span>  enabled: false,</span></span>
<span class="line"><span>  gender: &#39;1&#39;,</span></span>
<span class="line"><span>  hobbies: []</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const rules = {</span></span>
<span class="line"><span>  username: [</span></span>
<span class="line"><span>    { required: true, message: &#39;用户名不能为空&#39; },</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  gender: [</span></span>
<span class="line"><span>    { required: true, message: &#39;请选择性别&#39; }</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>  hobbies: [</span></span>
<span class="line"><span>    { required: true, message: &#39;请选择至少一个兴趣爱好&#39; }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleReset() {</span></span>
<span class="line"><span>  formData.username = &#39;&#39;</span></span>
<span class="line"><span>  formData.enabled = false</span></span>
<span class="line"><span>  formData.gender = &#39;&#39;</span></span>
<span class="line"><span>  formData.hobbies = []</span></span>
<span class="line"><span>  formRef.value?.clearValidate()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function onValidate(valid) {</span></span>
<span class="line"><span>  if (valid) {</span></span>
<span class="line"><span>    alert(&#39;验证通过，可以提交！&#39;)</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    alert(&#39;验证失败，请检查表单！&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function handleSubmit() {</span></span>
<span class="line"><span>  formRef.value.validate()</span></span>
<span class="line"><span>    .then(() =&gt; {</span></span>
<span class="line"><span>      alert(&#39;提交成功！\\n&#39; + JSON.stringify(formData, null, 2))</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .catch(() =&gt; {</span></span>
<span class="line"><span>      alert(&#39;提交失败，请检查输入项！&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span></code></pre></div>`,6)),n(_,{ref_key:"formRef",ref:r,modelValue:s,"onUpdate:modelValue":a[4]||(a[4]=t=>s=t),rules:b,onValidate:f,style:{"background-color":"#4fad65ff",color:"red"}},{default:e(()=>[n(d,{label:"用户名",prop:"username",validateTrigger:"blur",style:{color:"red"}},{default:e(()=>[n(q,{modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=t=>s.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),n(u,{type:"info",onClick:g},{default:e(()=>[...a[5]||(a[5]=[p("重置",-1)])]),_:1}),n(u,{type:"button",onClick:h},{default:e(()=>[...a[6]||(a[6]=[p("提交",-1)])]),_:1}),n(d,{label:"是否启用",prop:"enabled"},{default:e(()=>[n(M,{modelValue:s.enabled,"onUpdate:modelValue":a[1]||(a[1]=t=>s.enabled=t)},null,8,["modelValue"])]),_:1}),n(d,{label:"性别",prop:"gender"},{default:e(()=>[n(Y,{modelValue:s.gender,"onUpdate:modelValue":a[2]||(a[2]=t=>s.gender=t)},{default:e(()=>[n(c,{value:"1"},{default:e(()=>[...a[7]||(a[7]=[p("男",-1)])]),_:1}),n(c,{value:"2"},{default:e(()=>[...a[8]||(a[8]=[p("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),n(d,{label:"兴趣爱好",prop:"hobbies"},{default:e(()=>[n(v,{modelValue:s.hobbies,"onUpdate:modelValue":a[3]||(a[3]=t=>s.hobbies=t)},{default:e(()=>[n(i,{value:"reading"},{default:e(()=>[...a[9]||(a[9]=[p("阅读",-1)])]),_:1}),n(i,{value:"gaming"},{default:e(()=>[...a[10]||(a[10]=[p("游戏",-1)])]),_:1}),n(i,{value:"coding"},{default:e(()=>[...a[11]||(a[11]=[p("编程",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue"]),a[13]||(a[13]=m(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to &quot;API 参考&quot;">​</a></h2><h3 id="form-props" tabindex="-1">Form Props <a class="header-anchor" href="#form-props" aria-label="Permalink to &quot;Form Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>rules</td><td>校验规则</td><td>object</td><td>—</td><td><code>{}</code></td></tr><tr><td>labelWidth</td><td>标签宽度</td><td>string | number</td><td>支持像素值和<code>auto</code></td><td><code>&#39;auto&#39;</code></td></tr><tr><td>inline</td><td>是否行内布局</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>size</td><td>表单大小</td><td>string</td><td><code>large</code>/<code>medium</code>/<code>small</code>/<code>mini</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr></tbody></table><h3 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-label="Permalink to &quot;FormItem Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>标签名</td><td>string</td><td>—</td><td><code>{}</code></td></tr><tr><td>prop</td><td>规则名称</td><td>string | number</td><td>支持像素值和<code>auto</code></td><td><code>&#39;auto&#39;</code></td></tr><tr><td>inline</td><td>是否行内布局</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>size</td><td>表单大小</td><td>string</td><td><code>large</code>/<code>medium</code>/<code>small</code>/<code>mini</code></td><td><code>&#39;medium&#39;</code></td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>validateTrigger</td><td>验证触发器</td><td>string</td><td>—</td><td><code>blur</code></td></tr><tr><td>rules</td><td>校验规则</td><td>object</td><td>—</td><td><code>{}</code></td></tr><tr><td>labelWidth</td><td>标签宽度</td><td>string | number</td><td>支持像素值和<code>auto</code></td><td><code>&#39;auto&#39;</code></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to &quot;类型定义&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki nord" style="color:#d8dee9ff;" tabindex="0"><code><span class="line"><span>interface FormProps {</span></span>
<span class="line"><span>  rules: object;</span></span>
<span class="line"><span>  size: string;</span></span>
<span class="line"><span>  disabled: boolean;</span></span>
<span class="line"><span>  inline: boolean;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface FormItemProps {</span></span>
<span class="line"><span>    label: string;</span></span>
<span class="line"><span>    prop: string;</span></span>
<span class="line"><span>    inline: boolean;</span></span>
<span class="line"><span>    size: string;</span></span>
<span class="line"><span>    disabled: boolean;</span></span>
<span class="line"><span>    rules: object;</span></span>
<span class="line"><span>    labelWidth: string | number;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span></code></pre></div>`,7))])}}});export{R as __pageData,S as default};

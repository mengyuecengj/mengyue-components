import{_ as l}from"./chunks/card.vue_vue_type_script_setup_true_lang.DKRn-L6m.js";import{I as o,o as p,c as n,a8 as r,J as d,w as i,j as t,a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const h={style:{"max-width":"400px"}},f={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},x={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},g={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},y={style:{"max-width":"400px"}},b={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},C=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"plus/OtherCard.md","filePath":"plus/OtherCard.md"}'),m={name:"plus/OtherCard.md"},M=Object.assign(m,{setup(k){return(v,e)=>{const s=o("ShowCode");return p(),n("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[25]||(e[25]=r('<h1 id="card" tabindex="-1">Card <a class="header-anchor" href="#card" aria-label="Permalink to “Card”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Card 卡片组件，用于展示信息和内容块，支持自定义头部、主体和底部。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYCard&gt;&lt;/MYCard&gt;</code> 或者 <code>&lt;MYCard /&gt;</code> 来实现卡片布局。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a></h2><h3 id="基础卡片" tabindex="-1">基础卡片 <a class="header-anchor" href="#基础卡片" aria-label="Permalink to “基础卡片”">​</a></h3><p>基础的卡片组件，包含头部、主体和底部。</p>',6)),d(s,{title:"代码演示",code:`
<template>
  <MYCard>
    <template #header>
      <div style='font-weight: bold;'>卡片标题</div>
    </template>
    <template #body>
      <p>这里是卡片的主体内容</p>
      <p>可以放置任何类型的内容</p>
    </template>
    <template #footer>
      <div style='text-align: right; color: #666;'>卡片底部</div>
    </template>
  </MYCard>
</template>
  `.trim()},{demo:i(()=>[t("div",h,[d(l,null,{header:i(()=>[...e[0]||(e[0]=[t("div",{style:{"font-weight":"bold"}},"卡片标题",-1)])]),body:i(()=>[...e[1]||(e[1]=[t("p",null,"这里是卡片的主体内容",-1),t("p",null,"可以放置任何类型的内容",-1)])]),footer:i(()=>[...e[2]||(e[2]=[t("div",{style:{"text-align":"right",color:"#666"}},"卡片底部",-1)])]),_:1})])]),_:1},8,["code"]),e[26]||(e[26]=t("h3",{id:"自定义尺寸",tabindex:"-1"},[a("自定义尺寸 "),t("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[27]||(e[27]=t("p",null,[a("使用 "),t("code",null,"width"),a(" 和 "),t("code",null,"height"),a(" 属性自定义卡片的尺寸。")],-1)),d(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' height='150px'>
      <template #header>小卡片</template>
      <template #body>
        <p>200px × 150px</p>
      </template>
    </MYCard>
    <MYCard width='300px' height='200px'>
      <template #header>中等卡片</template>
      <template #body>
        <p>300px × 200px</p>
      </template>
    </MYCard>
    <MYCard width='400px' height='250px'>
      <template #header>大卡片</template>
      <template #body>
        <p>400px × 250px</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",f,[d(l,{width:"200px",height:"150px"},{header:i(()=>[...e[3]||(e[3]=[a("小卡片",-1)])]),body:i(()=>[...e[4]||(e[4]=[t("p",null,"200px × 150px",-1)])]),_:1}),d(l,{width:"300px",height:"200px"},{header:i(()=>[...e[5]||(e[5]=[a("中等卡片",-1)])]),body:i(()=>[...e[6]||(e[6]=[t("p",null,"300px × 200px",-1)])]),_:1}),d(l,{width:"400px",height:"250px"},{header:i(()=>[...e[7]||(e[7]=[a("大卡片",-1)])]),body:i(()=>[...e[8]||(e[8]=[t("p",null,"400px × 250px",-1)])]),_:1})])]),_:1},8,["code"]),e[28]||(e[28]=t("h3",{id:"自定义背景色",tabindex:"-1"},[a("自定义背景色 "),t("a",{class:"header-anchor",href:"#自定义背景色","aria-label":"Permalink to “自定义背景色”"},"​")],-1)),e[29]||(e[29]=t("p",null,[a("使用 "),t("code",null,"backgroundColor"),a(" 属性自定义卡片的背景颜色。")],-1)),d(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='250px' background-color='#f0f9ff'>
      <template #header style='color: #0369a1;'>浅蓝色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#f0f9ff</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#fef2f2'>
      <template #header style='color: #dc2626;'>浅红色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#fef2f2</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#f0fdf4'>
      <template #header style='color: #16a34a;'>浅绿色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#f0fdf4</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",x,[d(l,{width:"250px","background-color":"#f0f9ff"},{header:i(()=>[...e[9]||(e[9]=[t("div",{style:{color:"#0369a1"}},"浅蓝色卡片",-1)])]),body:i(()=>[...e[10]||(e[10]=[t("p",null,"自定义背景颜色",-1),t("p",null,"#f0f9ff",-1)])]),_:1}),d(l,{width:"250px","background-color":"#fef2f2"},{header:i(()=>[...e[11]||(e[11]=[t("div",{style:{color:"#dc2626"}},"浅红色卡片",-1)])]),body:i(()=>[...e[12]||(e[12]=[t("p",null,"自定义背景颜色",-1),t("p",null,"#fef2f2",-1)])]),_:1}),d(l,{width:"250px","background-color":"#f0fdf4"},{header:i(()=>[...e[13]||(e[13]=[t("div",{style:{color:"#16a34a"}},"浅绿色卡片",-1)])]),body:i(()=>[...e[14]||(e[14]=[t("p",null,"自定义背景颜色",-1),t("p",null,"#f0fdf4",-1)])]),_:1})])]),_:1},8,["code"]),e[30]||(e[30]=t("h3",{id:"产品展示卡片",tabindex:"-1"},[a("产品展示卡片 "),t("a",{class:"header-anchor",href:"#产品展示卡片","aria-label":"Permalink to “产品展示卡片”"},"​")],-1)),e[31]||(e[31]=t("p",null,"使用卡片展示产品信息。",-1)),d(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='280px'>
      <template #header>
        <div style='display: flex; justify-content: space-between; align-items: center;'>
          <span style='font-weight: bold;'>MacBook Pro</span>
          <span style='color: #409EFF;'>￥12999</span>
        </div>
      </template>
      <template #body>
        <div style='text-align: center; margin-bottom: 15px;'>
          <div style='width: 100%; height: 120px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px;'>
            💻
          </div>
        </div>
        <p>13英寸，M2芯片，8GB内存，256GB存储</p>
        <ul style='color: #666; font-size: 14px;'>
          <li>Retina 显示屏</li>
          <li>触控栏和触控 ID</li>
          <li>最长可达 20 小时电池续航</li>
        </ul>
      </template>
      <template #footer>
        <div style='display: flex; gap: 10px;'>
          <button style='flex: 1; padding: 8px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>立即购买</button>
          <button style='flex: 1; padding: 8px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;'>加入购物车</button>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",g,[d(l,{width:"280px"},{header:i(()=>[...e[15]||(e[15]=[t("div",{style:{display:"flex","justify-content":"space-between","align-items":"center"}},[t("span",{style:{"font-weight":"bold"}},"MacBook Pro"),t("span",{style:{color:"#409EFF"}},"￥12999")],-1)])]),body:i(()=>[...e[16]||(e[16]=[t("div",{style:{"text-align":"center","margin-bottom":"15px"}},[t("div",{style:{width:"100%",height:"120px",background:"#f5f5f5",display:"flex","align-items":"center","justify-content":"center","border-radius":"4px"}}," 💻 ")],-1),t("p",null,"13英寸，M2芯片，8GB内存，256GB存储",-1),t("ul",{style:{color:"#666","font-size":"14px"}},[t("li",null,"Retina 显示屏"),t("li",null,"触控栏和触控 ID"),t("li",null,"最长可达 20 小时电池续航")],-1)])]),footer:i(()=>[...e[17]||(e[17]=[t("div",{style:{display:"flex",gap:"10px"}},[t("button",{style:{flex:"1",padding:"8px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"立即购买"),t("button",{style:{flex:"1",padding:"8px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"加入购物车")],-1)])]),_:1})])]),_:1},8,["code"]),e[32]||(e[32]=t("h3",{id:"用户信息卡片",tabindex:"-1"},[a("用户信息卡片 "),t("a",{class:"header-anchor",href:"#用户信息卡片","aria-label":"Permalink to “用户信息卡片”"},"​")],-1)),e[33]||(e[33]=t("p",null,"使用卡片展示用户信息。",-1)),d(s,{title:"代码演示",code:`
<template>
  <MYCard width='320px' background-color='#f8fafc'>
    <template #header>
      <div style='display: flex; align-items: center; gap: 12px;'>
        <div style='width: 40px; height: 40px; background: #409EFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;'>
          U
        </div>
        <div>
          <div style='font-weight: bold;'>张三</div>
          <div style='color: #666; font-size: 14px;'>高级用户</div>
        </div>
      </div>
    </template>
    <template #body>
      <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 15px;'>
        <div>
          <div style='color: #666; font-size: 12px;'>邮箱</div>
          <div>zhangsan@example.com</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>电话</div>
          <div>138****1234</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>部门</div>
          <div>技术部</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>职位</div>
          <div>前端工程师</div>
        </div>
      </div>
    </template>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button style='padding: 6px 12px; border: 1px solid #409EFF; color: #409EFF; background: white; border-radius: 4px; cursor: pointer;'>编辑</button>
        <button style='padding: 6px 12px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>联系</button>
      </div>
    </template>
  </MYCard>
</template>
  `.trim()},{demo:i(()=>[t("div",y,[d(l,{width:"320px","background-color":"#f8fafc"},{header:i(()=>[...e[18]||(e[18]=[t("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[t("div",{style:{width:"40px",height:"40px",background:"#409EFF","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",color:"white","font-weight":"bold"}}," U "),t("div",null,[t("div",{style:{"font-weight":"bold"}},"张三"),t("div",{style:{color:"#666","font-size":"14px"}},"高级用户")])],-1)])]),body:i(()=>[...e[19]||(e[19]=[t("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"15px"}},[t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"邮箱"),t("div",null,"zhangsan@example.com")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"电话"),t("div",null,"138****1234")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"部门"),t("div",null,"技术部")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"职位"),t("div",null,"前端工程师")])],-1)])]),footer:i(()=>[...e[20]||(e[20]=[t("div",{style:{display:"flex",gap:"10px","justify-content":"flex-end"}},[t("button",{style:{padding:"6px 12px",border:"1px solid #409EFF",color:"#409EFF",background:"white","border-radius":"4px",cursor:"pointer"}},"编辑"),t("button",{style:{padding:"6px 12px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"联系")],-1)])]),_:1})])]),_:1},8,["code"]),e[34]||(e[34]=t("h3",{id:"数据统计卡片",tabindex:"-1"},[a("数据统计卡片 "),t("a",{class:"header-anchor",href:"#数据统计卡片","aria-label":"Permalink to “数据统计卡片”"},"​")],-1)),e[35]||(e[35]=t("p",null,"使用卡片展示数据统计信息。",-1)),d(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' background-color='#f0f9ff'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #0369a1;'>1,234</div>
          <div style='color: #666; margin-top: 8px;'>今日访问量</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fef2f2'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #dc2626;'>567</div>
          <div style='color: #666; margin-top: 8px;'>新增用户</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#f0fdf4'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #16a34a;'>89.5%</div>
          <div style='color: #666; margin-top: 8px;'>转化率</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fffbeb'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #d97706;'>¥12,345</div>
          <div style='color: #666; margin-top: 8px;'>今日收入</div>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",b,[d(l,{width:"200px","background-color":"#f0f9ff"},{body:i(()=>[...e[21]||(e[21]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#0369a1"}},"1,234"),t("div",{style:{color:"#666","margin-top":"8px"}},"今日访问量")],-1)])]),_:1}),d(l,{width:"200px","background-color":"#fef2f2"},{body:i(()=>[...e[22]||(e[22]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#dc2626"}},"567"),t("div",{style:{color:"#666","margin-top":"8px"}},"新增用户")],-1)])]),_:1}),d(l,{width:"200px","background-color":"#f0fdf4"},{body:i(()=>[...e[23]||(e[23]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#16a34a"}},"89.5%"),t("div",{style:{color:"#666","margin-top":"8px"}},"转化率")],-1)])]),_:1}),d(l,{width:"200px","background-color":"#fffbeb"},{body:i(()=>[...e[24]||(e[24]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#d97706"}},"¥12,345"),t("div",{style:{color:"#666","margin-top":"8px"}},"今日收入")],-1)])]),_:1})])]),_:1},8,["code"]),e[36]||(e[36]=r(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>卡片标题</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>width</td><td>卡片宽度</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>height</td><td>卡片高度</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>footer</td><td>卡片底部内容</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>background-color</td><td>卡片背景色</td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to “插槽”">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>header</td><td>卡片头部内容</td></tr><tr><td>body</td><td>卡片主体内容</td></tr><tr><td>footer</td><td>卡片底部内容</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CardProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  footer</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,7))])}}});export{C as __pageData,M as default};

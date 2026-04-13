import{_ as r,a}from"./chunks/timelineItem.vue_vue_type_script_setup_true_lang.Dvzc4bCH.js";import{I as p,o,c as m,a8 as d,J as s,w as e,j as i,a as l}from"./chunks/framework.DvHWw5tv.js";const h={style:{margin:"20px 0"}},y={style:{margin:"20px 0"}},g={style:{margin:"20px 0"}},k={style:{margin:"20px 0"}},T=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"plus/DataTimeline.md","filePath":"plus/DataTimeline.md"}'),c={name:"plus/DataTimeline.md"},v=Object.assign(c,{setup(b){return(f,t)=>{const n=p("ShowCode");return o(),m("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[t[18]||(t[18]=d('<h1 id="timeline" tabindex="-1">Timeline <a class="header-anchor" href="#timeline" aria-label="Permalink to “Timeline”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a></h2><p>Timeline 时间线组件，用于展示一系列事件的时间顺序。 可以使用 <code>&lt;MYTimeline&gt;&lt;/MYTimeline&gt;</code> 和 <code>&lt;MYTimelineItem&gt;&lt;/MYTimelineItem&gt;</code> 来实现一个时间线组件。</p><h2 id="基础时间线" tabindex="-1">基础时间线 <a class="header-anchor" href="#基础时间线" aria-label="Permalink to “基础时间线”">​</a></h2>',4)),s(n,{title:"基础时间线",description:"垂直方向的时间线，默认方向为 vertical",code:`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01'>
      事件一：项目启动
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15'>
      事件二：需求分析完成
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20'>
      事件三：开发阶段开始
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30'>
      事件四：测试阶段
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:e(()=>[i("div",h,[s(r,null,{default:e(()=>[s(a,{timestamp:"2024-01-01"},{default:e(()=>[...t[0]||(t[0]=[l(" 事件一：项目启动 ",-1)])]),_:1}),s(a,{timestamp:"2024-02-15"},{default:e(()=>[...t[1]||(t[1]=[l(" 事件二：需求分析完成 ",-1)])]),_:1}),s(a,{timestamp:"2024-03-20"},{default:e(()=>[...t[2]||(t[2]=[l(" 事件三：开发阶段开始 ",-1)])]),_:1}),s(a,{timestamp:"2024-04-30"},{default:e(()=>[...t[3]||(t[3]=[l(" 事件四：测试阶段 ",-1)])]),_:1})]),_:1})])]),_:1}),t[19]||(t[19]=i("h2",{id:"自定义节点颜色",tabindex:"-1"},[l("自定义节点颜色 "),i("a",{class:"header-anchor",href:"#自定义节点颜色","aria-label":"Permalink to “自定义节点颜色”"},"​")],-1)),s(n,{title:"自定义节点颜色",description:"使用 color 属性自定义时间线节点的颜色",code:`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01' color='#67C23A'>
      <strong>成功事件</strong>
      <div style='color: #666; font-size: 12px;'>项目成功启动，所有资源准备就绪</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15' color='#E6A23C'>
      <strong>警告事件</strong>
      <div style='color: #666; font-size: 12px;'>需求变更，需要重新评估时间</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20' color='#F56C6C'>
      <strong>错误事件</strong>
      <div style='color: #666; font-size: 12px;'>开发过程中发现重大技术问题</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30' color='#409EFF'>
      <strong>信息事件</strong>
      <div style='color: #666; font-size: 12px;'>测试完成，准备上线发布</div>
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:e(()=>[i("div",y,[s(r,null,{default:e(()=>[s(a,{timestamp:"2024-01-01",color:"#67C23A"},{default:e(()=>[...t[4]||(t[4]=[i("strong",null,"成功事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"项目成功启动，所有资源准备就绪",-1)])]),_:1}),s(a,{timestamp:"2024-02-15",color:"#E6A23C"},{default:e(()=>[...t[5]||(t[5]=[i("strong",null,"警告事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"需求变更，需要重新评估时间",-1)])]),_:1}),s(a,{timestamp:"2024-03-20",color:"#F56C6C"},{default:e(()=>[...t[6]||(t[6]=[i("strong",null,"错误事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"开发过程中发现重大技术问题",-1)])]),_:1}),s(a,{timestamp:"2024-04-30",color:"#409EFF"},{default:e(()=>[...t[7]||(t[7]=[i("strong",null,"信息事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"测试完成，准备上线发布",-1)])]),_:1})]),_:1})])]),_:1}),t[20]||(t[20]=i("h2",{id:"使用插槽自定义内容",tabindex:"-1"},[l("使用插槽自定义内容 "),i("a",{class:"header-anchor",href:"#使用插槽自定义内容","aria-label":"Permalink to “使用插槽自定义内容”"},"​")],-1)),s(n,{title:"使用插槽自定义内容",description:"使用 timestamp 插槽自定义时间显示，使用默认插槽自定义内容",code:`<template>
  <MYTimeline>
    <MYTimelineItem>
      <template #timestamp>
        <div style='display: flex; align-items: center; gap: 8px;'>
          <span style='color: #409EFF;'>📅</span>
          <span style='font-weight: bold;'>2024-01-01 09:00</span>
        </div>
      </template>
      <div style='background: #f0f9ff; padding: 12px; border-radius: 4px;'>
        <h4 style='margin: 0 0 8px 0; color: #409EFF;'>项目启动会议</h4>
        <p style='margin: 0; color: #666;'>讨论项目目标、时间安排和资源分配</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem>
      <template #timestamp>
        <div style='display: flex; align-items: center; gap: 8px;'>
          <span style='color: #67C23A;'>✅</span>
          <span style='font-weight: bold;'>2024-02-15 14:30</span>
        </div>
      </template>
      <div style='background: #f0f9e8; padding: 12px; border-radius: 4px;'>
        <h4 style='margin: 0 0 8px 0; color: #67C23A;'>需求分析完成</h4>
        <p style='margin: 0; color: #666;'>所有功能需求已确认，进入设计阶段</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem>
      <template #timestamp>
        <div style='display: flex; align-items: center; gap: 8px;'>
          <span style='color: #E6A23C;'>🚧</span>
          <span style='font-weight: bold;'>2024-03-20 10:00</span>
        </div>
      </template>
      <div style='background: #fdf6ec; padding: 12px; border-radius: 4px;'>
        <h4 style='margin: 0 0 8px 0; color: #E6A23C;'>开发阶段开始</h4>
        <p style='margin: 0; color: #666;'>前端和后端开发工作同时进行</p>
      </div>
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:e(()=>[i("div",g,[s(r,null,{default:e(()=>[s(a,null,{timestamp:e(()=>[...t[8]||(t[8]=[i("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[i("span",{style:{color:"#409EFF"}},"📅"),i("span",{style:{"font-weight":"bold"}},"2024-01-01 09:00")],-1)])]),default:e(()=>[t[9]||(t[9]=i("div",{style:{background:"#f0f9ff",padding:"12px","border-radius":"4px"}},[i("h4",{style:{margin:"0 0 8px 0",color:"#409EFF"}},"项目启动会议"),i("p",{style:{margin:"0",color:"#666"}},"讨论项目目标、时间安排和资源分配")],-1))]),_:1}),s(a,null,{timestamp:e(()=>[...t[10]||(t[10]=[i("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[i("span",{style:{color:"#67C23A"}},"✅"),i("span",{style:{"font-weight":"bold"}},"2024-02-15 14:30")],-1)])]),default:e(()=>[t[11]||(t[11]=i("div",{style:{background:"#f0f9e8",padding:"12px","border-radius":"4px"}},[i("h4",{style:{margin:"0 0 8px 0",color:"#67C23A"}},"需求分析完成"),i("p",{style:{margin:"0",color:"#666"}},"所有功能需求已确认，进入设计阶段")],-1))]),_:1}),s(a,null,{timestamp:e(()=>[...t[12]||(t[12]=[i("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[i("span",{style:{color:"#E6A23C"}},"🚧"),i("span",{style:{"font-weight":"bold"}},"2024-03-20 10:00")],-1)])]),default:e(()=>[t[13]||(t[13]=i("div",{style:{background:"#fdf6ec",padding:"12px","border-radius":"4px"}},[i("h4",{style:{margin:"0 0 8px 0",color:"#E6A23C"}},"开发阶段开始"),i("p",{style:{margin:"0",color:"#666"}},"前端和后端开发工作同时进行")],-1))]),_:1})]),_:1})])]),_:1}),t[21]||(t[21]=i("h2",{id:"自定义样式",tabindex:"-1"},[l("自定义样式 "),i("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),s(n,{title:"自定义样式",description:"使用 style 属性自定义时间线容器的样式",code:`<template>
  <MYTimeline :style='{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '8px' }'>
    <MYTimelineItem timestamp='第一阶段' color='#FF6B6B'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>概念设计</h3>
        <p style='margin: 0; opacity: 0.9;'>确定产品方向和核心功能</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='第二阶段' color='#4ECDC4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>原型开发</h3>
        <p style='margin: 0; opacity: 0.9;'>创建可交互的产品原型</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='第三阶段' color='#45B7D1'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>产品测试</h3>
        <p style='margin: 0; opacity: 0.9;'>进行用户测试和功能验证</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='第四阶段' color='#96CEB4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>正式发布</h3>
        <p style='margin: 0; opacity: 0.9;'>产品上线并提供支持</p>
      </div>
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:e(()=>[i("div",k,[s(r,{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",borderRadius:"8px"}},{default:e(()=>[s(a,{timestamp:"第一阶段",color:"#FF6B6B"},{default:e(()=>[...t[14]||(t[14]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"概念设计"),i("p",{style:{margin:"0",opacity:"0.9"}},"确定产品方向和核心功能")],-1)])]),_:1}),s(a,{timestamp:"第二阶段",color:"#4ECDC4"},{default:e(()=>[...t[15]||(t[15]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"原型开发"),i("p",{style:{margin:"0",opacity:"0.9"}},"创建可交互的产品原型")],-1)])]),_:1}),s(a,{timestamp:"第三阶段",color:"#45B7D1"},{default:e(()=>[...t[16]||(t[16]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"产品测试"),i("p",{style:{margin:"0",opacity:"0.9"}},"进行用户测试和功能验证")],-1)])]),_:1}),s(a,{timestamp:"第四阶段",color:"#96CEB4"},{default:e(()=>[...t[17]||(t[17]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"正式发布"),i("p",{style:{margin:"0",opacity:"0.9"}},"产品上线并提供支持")],-1)])]),_:1})]),_:1})])]),_:1}),t[22]||(t[22]=d(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a></h2><h3 id="timeline-props" tabindex="-1">Timeline Props <a class="header-anchor" href="#timeline-props" aria-label="Permalink to “Timeline Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>时间线方向</td><td>string</td><td><code>vertical</code>/<code>horizontal</code></td><td><code>vertical</code></td></tr><tr><td>style</td><td>自定义样式</td><td>StyleValue</td><td>—</td><td><code>{}</code></td></tr></tbody></table><h3 id="timelineitem-props" tabindex="-1">TimelineItem Props <a class="header-anchor" href="#timelineitem-props" aria-label="Permalink to “TimelineItem Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>timestamp</td><td>时间戳内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>color</td><td>节点颜色</td><td>string</td><td>支持16进制颜色或单词颜色</td><td>—</td></tr></tbody></table><h3 id="timelineitem-slots" tabindex="-1">TimelineItem Slots <a class="header-anchor" href="#timelineitem-slots" aria-label="Permalink to “TimelineItem Slots”">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>default</td><td>时间项内容</td><td>—</td></tr><tr><td>timestamp</td><td>时间戳内容</td><td>—</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TimelineProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  direction</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vertical</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">horizontal</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  style</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">StyleValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TimelineItemProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  timestamp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,9))])}}});export{T as __pageData,v as default};

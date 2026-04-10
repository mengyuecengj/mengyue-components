import{_ as d,a as n}from"./chunks/timelineItem.vue_vue_type_script_setup_true_lang.Dvzc4bCH.js";import{I as r,o,c as h,a8 as p,J as s,w as a,j as i,a as t}from"./chunks/framework.DvHWw5tv.js";const m={style:{margin:"20px 0"}},y={style:{margin:"20px 0"}},g={style:{margin:"20px 0"}},c={style:{margin:"20px 0"}},T=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"plus/DataTimeline.md","filePath":"plus/DataTimeline.md"}'),k={name:"plus/DataTimeline.md"},v=Object.assign(k,{setup(u){return(f,e)=>{const l=r("ShowCode");return o(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[e[18]||(e[18]=p('<h1 id="timeline" tabindex="-1">Timeline <a class="header-anchor" href="#timeline" aria-label="Permalink to “Timeline”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>Timeline 时间线组件，用于展示一系列事件的时间顺序。 可以使用 <code>&lt;MYTimeline&gt;&lt;/MYTimeline&gt;</code> 和 <code>&lt;MYTimelineItem&gt;&lt;/MYTimelineItem&gt;</code> 来实现一个时间线组件。<span class="pagefind-pinyin" aria-hidden="true">Timeline shijianxianzujian，yongyuzhanshiyixilieshijiandeshijianshunxu。keyishiyong he laishixianyigeshijianxianzujian。 Timeline shi jian xian zu jian ， yong yu zhan shi yi xi lie shi jian de shi jian shun xu 。 ke yi shi yong he lai shi xian yi ge shi jian xian zu jian 。 Tsjxzj，yyzsyxlsjdsjsx。kysy h lsxygsjxzj。</span></p><h2 id="基础时间线" tabindex="-1">基础时间线 <a class="header-anchor" href="#基础时间线" aria-label="Permalink to “基础时间线”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichushijianxian ji chu shi jian xian jcsjx </span></h2>',4)),s(l,{title:"基础时间线",description:"垂直方向的时间线，默认方向为 vertical",code:`<template>
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
</template>`},{demo:a(()=>[i("div",m,[s(d,null,{default:a(()=>[s(n,{timestamp:"2024-01-01"},{default:a(()=>[...e[0]||(e[0]=[t(" 事件一：项目启动 ",-1)])]),_:1}),s(n,{timestamp:"2024-02-15"},{default:a(()=>[...e[1]||(e[1]=[t(" 事件二：需求分析完成 ",-1)])]),_:1}),s(n,{timestamp:"2024-03-20"},{default:a(()=>[...e[2]||(e[2]=[t(" 事件三：开发阶段开始 ",-1)])]),_:1}),s(n,{timestamp:"2024-04-30"},{default:a(()=>[...e[3]||(e[3]=[t(" 事件四：测试阶段 ",-1)])]),_:1})]),_:1})])]),_:1}),e[19]||(e[19]=i("h2",{id:"自定义节点颜色",tabindex:"-1"},[t("自定义节点颜色 "),i("a",{class:"header-anchor",href:"#自定义节点颜色","aria-label":"Permalink to “自定义节点颜色”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyijiedianyanse zi ding yi jie dian yan se zdyjdys ")],-1)),s(l,{title:"自定义节点颜色",description:"使用 color 属性自定义时间线节点的颜色",code:`<template>
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
</template>`},{demo:a(()=>[i("div",y,[s(d,null,{default:a(()=>[s(n,{timestamp:"2024-01-01",color:"#67C23A"},{default:a(()=>[...e[4]||(e[4]=[i("strong",null,"成功事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"项目成功启动，所有资源准备就绪",-1)])]),_:1}),s(n,{timestamp:"2024-02-15",color:"#E6A23C"},{default:a(()=>[...e[5]||(e[5]=[i("strong",null,"警告事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"需求变更，需要重新评估时间",-1)])]),_:1}),s(n,{timestamp:"2024-03-20",color:"#F56C6C"},{default:a(()=>[...e[6]||(e[6]=[i("strong",null,"错误事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"开发过程中发现重大技术问题",-1)])]),_:1}),s(n,{timestamp:"2024-04-30",color:"#409EFF"},{default:a(()=>[...e[7]||(e[7]=[i("strong",null,"信息事件",-1),i("div",{style:{color:"#666","font-size":"12px"}},"测试完成，准备上线发布",-1)])]),_:1})]),_:1})])]),_:1}),e[20]||(e[20]=i("h2",{id:"使用插槽自定义内容",tabindex:"-1"},[t("使用插槽自定义内容 "),i("a",{class:"header-anchor",href:"#使用插槽自定义内容","aria-label":"Permalink to “使用插槽自定义内容”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongchacaozidingyineirong shi yong cha cao zi ding yi nei rong sycczdynr ")],-1)),s(l,{title:"使用插槽自定义内容",description:"使用 timestamp 插槽自定义时间显示，使用默认插槽自定义内容",code:`<template>
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
</template>`},{demo:a(()=>[i("div",g,[s(d,null,{default:a(()=>[s(n,null,{timestamp:a(()=>[...e[8]||(e[8]=[i("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[i("span",{style:{color:"#409EFF"}},"📅"),i("span",{style:{"font-weight":"bold"}},"2024-01-01 09:00")],-1)])]),default:a(()=>[e[9]||(e[9]=i("div",{style:{background:"#f0f9ff",padding:"12px","border-radius":"4px"}},[i("h4",{style:{margin:"0 0 8px 0",color:"#409EFF"}},"项目启动会议"),i("p",{style:{margin:"0",color:"#666"}},"讨论项目目标、时间安排和资源分配")],-1))]),_:1}),s(n,null,{timestamp:a(()=>[...e[10]||(e[10]=[i("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[i("span",{style:{color:"#67C23A"}},"✅"),i("span",{style:{"font-weight":"bold"}},"2024-02-15 14:30")],-1)])]),default:a(()=>[e[11]||(e[11]=i("div",{style:{background:"#f0f9e8",padding:"12px","border-radius":"4px"}},[i("h4",{style:{margin:"0 0 8px 0",color:"#67C23A"}},"需求分析完成"),i("p",{style:{margin:"0",color:"#666"}},"所有功能需求已确认，进入设计阶段")],-1))]),_:1}),s(n,null,{timestamp:a(()=>[...e[12]||(e[12]=[i("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[i("span",{style:{color:"#E6A23C"}},"🚧"),i("span",{style:{"font-weight":"bold"}},"2024-03-20 10:00")],-1)])]),default:a(()=>[e[13]||(e[13]=i("div",{style:{background:"#fdf6ec",padding:"12px","border-radius":"4px"}},[i("h4",{style:{margin:"0 0 8px 0",color:"#E6A23C"}},"开发阶段开始"),i("p",{style:{margin:"0",color:"#666"}},"前端和后端开发工作同时进行")],-1))]),_:1})]),_:1})])]),_:1}),e[21]||(e[21]=i("h2",{id:"自定义样式",tabindex:"-1"},[t("自定义样式 "),i("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyangshi zi ding yi yang shi zdyys ")],-1)),s(l,{title:"自定义样式",description:"使用 style 属性自定义时间线容器的样式",code:`<template>
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
</template>`},{demo:a(()=>[i("div",c,[s(d,{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",borderRadius:"8px"}},{default:a(()=>[s(n,{timestamp:"第一阶段",color:"#FF6B6B"},{default:a(()=>[...e[14]||(e[14]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"概念设计"),i("p",{style:{margin:"0",opacity:"0.9"}},"确定产品方向和核心功能")],-1)])]),_:1}),s(n,{timestamp:"第二阶段",color:"#4ECDC4"},{default:a(()=>[...e[15]||(e[15]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"原型开发"),i("p",{style:{margin:"0",opacity:"0.9"}},"创建可交互的产品原型")],-1)])]),_:1}),s(n,{timestamp:"第三阶段",color:"#45B7D1"},{default:a(()=>[...e[16]||(e[16]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"产品测试"),i("p",{style:{margin:"0",opacity:"0.9"}},"进行用户测试和功能验证")],-1)])]),_:1}),s(n,{timestamp:"第四阶段",color:"#96CEB4"},{default:a(()=>[...e[17]||(e[17]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"正式发布"),i("p",{style:{margin:"0",opacity:"0.9"}},"产品上线并提供支持")],-1)])]),_:1})]),_:1})])]),_:1}),e[22]||(e[22]=p(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="timeline-props" tabindex="-1">Timeline Props <a class="header-anchor" href="#timeline-props" aria-label="Permalink to “Timeline Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>direction</td><td>时间线方向<span class="pagefind-pinyin" aria-hidden="true">shijianxianfangxiang shi jian xian fang xiang sjxfx</span></td><td>string</td><td><code>vertical</code>/<code>horizontal</code></td><td><code>vertical</code></td></tr><tr><td>style</td><td>自定义样式<span class="pagefind-pinyin" aria-hidden="true">zidingyiyangshi zi ding yi yang shi zdyys</span></td><td>StyleValue</td><td>—</td><td><code>{}</code></td></tr></tbody></table><h3 id="timelineitem-props" tabindex="-1">TimelineItem Props <a class="header-anchor" href="#timelineitem-props" aria-label="Permalink to “TimelineItem Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>timestamp</td><td>时间戳内容<span class="pagefind-pinyin" aria-hidden="true">shijianchuoneirong shi jian chuo nei rong sjcnr</span></td><td>string</td><td>—</td><td>—</td></tr><tr><td>color</td><td>节点颜色<span class="pagefind-pinyin" aria-hidden="true">jiedianyanse jie dian yan se jdys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td>—</td></tr></tbody></table><h3 id="timelineitem-slots" tabindex="-1">TimelineItem Slots <a class="header-anchor" href="#timelineitem-slots" aria-label="Permalink to “TimelineItem Slots”">​</a></h3><table tabindex="0"><thead><tr><th>插槽名<span class="pagefind-pinyin" aria-hidden="true">chacaoming cha cao ming ccm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th></tr></thead><tbody><tr><td>default</td><td>时间项内容<span class="pagefind-pinyin" aria-hidden="true">shijianxiangneirong shi jian xiang nei rong sjxnr</span></td><td>—</td></tr><tr><td>timestamp</td><td>时间戳内容<span class="pagefind-pinyin" aria-hidden="true">shijianchuoneirong shi jian chuo nei rong sjcnr</span></td><td>—</td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TimelineProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  direction</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vertical</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">horizontal</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  style</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">StyleValue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> TimelineItemProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  timestamp</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,9))])}}});export{T as __pageData,v as default};

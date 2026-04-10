import{_ as d,a as n}from"./chunks/timelineItem.vue_vue_type_script_setup_true_lang.Dvzc4bCH.js";import{I as r,o,c as h,a8 as p,J as s,w as a,j as i,a as t}from"./chunks/framework.DvHWw5tv.js";const m={style:{margin:"20px 0"}},y={style:{margin:"20px 0"}},g={style:{margin:"20px 0"}},c={style:{margin:"20px 0"}},T=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"plus/DataTimeline.md","filePath":"plus/DataTimeline.md"}'),k={name:"plus/DataTimeline.md"},v=Object.assign(k,{setup(u){return(f,e)=>{const l=r("ShowCode");return o(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[e[18]||(e[18]=p("",4)),s(l,{title:"基础时间线",description:"垂直方向的时间线，默认方向为 vertical",code:`<template>
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
</template>`},{demo:a(()=>[i("div",c,[s(d,{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",borderRadius:"8px"}},{default:a(()=>[s(n,{timestamp:"第一阶段",color:"#FF6B6B"},{default:a(()=>[...e[14]||(e[14]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"概念设计"),i("p",{style:{margin:"0",opacity:"0.9"}},"确定产品方向和核心功能")],-1)])]),_:1}),s(n,{timestamp:"第二阶段",color:"#4ECDC4"},{default:a(()=>[...e[15]||(e[15]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"原型开发"),i("p",{style:{margin:"0",opacity:"0.9"}},"创建可交互的产品原型")],-1)])]),_:1}),s(n,{timestamp:"第三阶段",color:"#45B7D1"},{default:a(()=>[...e[16]||(e[16]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"产品测试"),i("p",{style:{margin:"0",opacity:"0.9"}},"进行用户测试和功能验证")],-1)])]),_:1}),s(n,{timestamp:"第四阶段",color:"#96CEB4"},{default:a(()=>[...e[17]||(e[17]=[i("div",{style:{color:"white"}},[i("h3",{style:{margin:"0 0 8px 0"}},"正式发布"),i("p",{style:{margin:"0",opacity:"0.9"}},"产品上线并提供支持")],-1)])]),_:1})]),_:1})])]),_:1}),e[22]||(e[22]=p("",9))])}}});export{T as __pageData,v as default};

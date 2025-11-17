import{d as g,c as m,o as h,O as k,n as c,r as o,j as e,a,t as b,I as f,ah as y,J as s,w as i}from"./chunks/framework.PAn8Jj8p.js";const p=g({name:"MYTimeline",__name:"timeline",props:{direction:{default:"vertical"},theme:{},style:{}},setup(n){return(r,t)=>(h(),m("div",{class:c(["my-timeline",[n.direction]]),style:k(n.style)},[o(r.$slots,"default")],6))}}),u={class:"my-timeline-item"},x={class:"timeline-timestamp"},T={class:"timeline-node"},v={class:"timeline-content"},l=g({name:"MYTimeline-item",__name:"timelineItem",props:{timestamp:{},color:{},icon:{}},setup(n){return(r,t)=>(h(),m("div",u,[e("div",x,[o(r.$slots,"timestamp",{},()=>[a(b(n.timestamp),1)])]),e("div",T,[e("div",{class:"timeline-dot",style:k({backgroundColor:n.color})},null,4),t[0]||(t[0]=e("div",{class:"timeline-line"},null,-1))]),e("div",v,[o(r.$slots,"default")])]))}}),C={style:{margin:"20px 0"}},I={style:{margin:"20px 0"}},M={style:{margin:"20px 0"}},Y={style:{margin:"20px 0"}},_=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataTimeline.md","filePath":"components/DataTimeline.md"}'),A={name:"components/DataTimeline.md"},D=Object.assign(A,{setup(n){return(r,t)=>{const d=f("ShowCode");return h(),m("div",null,[t[18]||(t[18]=y("",4)),s(d,{title:"基础时间线",description:"垂直方向的时间线，默认方向为 vertical",code:`<template>
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
</template>`},{demo:i(()=>[e("div",C,[s(p,null,{default:i(()=>[s(l,{timestamp:"2024-01-01"},{default:i(()=>[...t[0]||(t[0]=[a(" 事件一：项目启动 ",-1)])]),_:1}),s(l,{timestamp:"2024-02-15"},{default:i(()=>[...t[1]||(t[1]=[a(" 事件二：需求分析完成 ",-1)])]),_:1}),s(l,{timestamp:"2024-03-20"},{default:i(()=>[...t[2]||(t[2]=[a(" 事件三：开发阶段开始 ",-1)])]),_:1}),s(l,{timestamp:"2024-04-30"},{default:i(()=>[...t[3]||(t[3]=[a(" 事件四：测试阶段 ",-1)])]),_:1})]),_:1})])]),_:1}),t[19]||(t[19]=e("h2",{id:"自定义节点颜色",tabindex:"-1"},[a("自定义节点颜色 "),e("a",{class:"header-anchor",href:"#自定义节点颜色","aria-label":"Permalink to “自定义节点颜色”"},"​")],-1)),s(d,{title:"自定义节点颜色",description:"使用 color 属性自定义时间线节点的颜色",code:`<template>
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
</template>`},{demo:i(()=>[e("div",I,[s(p,null,{default:i(()=>[s(l,{timestamp:"2024-01-01",color:"#67C23A"},{default:i(()=>[...t[4]||(t[4]=[e("strong",null,"成功事件",-1),e("div",{style:{color:"#666","font-size":"12px"}},"项目成功启动，所有资源准备就绪",-1)])]),_:1}),s(l,{timestamp:"2024-02-15",color:"#E6A23C"},{default:i(()=>[...t[5]||(t[5]=[e("strong",null,"警告事件",-1),e("div",{style:{color:"#666","font-size":"12px"}},"需求变更，需要重新评估时间",-1)])]),_:1}),s(l,{timestamp:"2024-03-20",color:"#F56C6C"},{default:i(()=>[...t[6]||(t[6]=[e("strong",null,"错误事件",-1),e("div",{style:{color:"#666","font-size":"12px"}},"开发过程中发现重大技术问题",-1)])]),_:1}),s(l,{timestamp:"2024-04-30",color:"#409EFF"},{default:i(()=>[...t[7]||(t[7]=[e("strong",null,"信息事件",-1),e("div",{style:{color:"#666","font-size":"12px"}},"测试完成，准备上线发布",-1)])]),_:1})]),_:1})])]),_:1}),t[20]||(t[20]=e("h2",{id:"使用插槽自定义内容",tabindex:"-1"},[a("使用插槽自定义内容 "),e("a",{class:"header-anchor",href:"#使用插槽自定义内容","aria-label":"Permalink to “使用插槽自定义内容”"},"​")],-1)),s(d,{title:"使用插槽自定义内容",description:"使用 timestamp 插槽自定义时间显示，使用默认插槽自定义内容",code:`<template>
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
</template>`},{demo:i(()=>[e("div",M,[s(p,null,{default:i(()=>[s(l,null,{timestamp:i(()=>[...t[8]||(t[8]=[e("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[e("span",{style:{color:"#409EFF"}},"📅"),e("span",{style:{"font-weight":"bold"}},"2024-01-01 09:00")],-1)])]),default:i(()=>[t[9]||(t[9]=e("div",{style:{background:"#f0f9ff",padding:"12px","border-radius":"4px"}},[e("h4",{style:{margin:"0 0 8px 0",color:"#409EFF"}},"项目启动会议"),e("p",{style:{margin:"0",color:"#666"}},"讨论项目目标、时间安排和资源分配")],-1))]),_:1}),s(l,null,{timestamp:i(()=>[...t[10]||(t[10]=[e("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[e("span",{style:{color:"#67C23A"}},"✅"),e("span",{style:{"font-weight":"bold"}},"2024-02-15 14:30")],-1)])]),default:i(()=>[t[11]||(t[11]=e("div",{style:{background:"#f0f9e8",padding:"12px","border-radius":"4px"}},[e("h4",{style:{margin:"0 0 8px 0",color:"#67C23A"}},"需求分析完成"),e("p",{style:{margin:"0",color:"#666"}},"所有功能需求已确认，进入设计阶段")],-1))]),_:1}),s(l,null,{timestamp:i(()=>[...t[12]||(t[12]=[e("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[e("span",{style:{color:"#E6A23C"}},"🚧"),e("span",{style:{"font-weight":"bold"}},"2024-03-20 10:00")],-1)])]),default:i(()=>[t[13]||(t[13]=e("div",{style:{background:"#fdf6ec",padding:"12px","border-radius":"4px"}},[e("h4",{style:{margin:"0 0 8px 0",color:"#E6A23C"}},"开发阶段开始"),e("p",{style:{margin:"0",color:"#666"}},"前端和后端开发工作同时进行")],-1))]),_:1})]),_:1})])]),_:1}),t[21]||(t[21]=e("h2",{id:"自定义样式",tabindex:"-1"},[a("自定义样式 "),e("a",{class:"header-anchor",href:"#自定义样式","aria-label":"Permalink to “自定义样式”"},"​")],-1)),s(d,{title:"自定义样式",description:"使用 style 属性自定义时间线容器的样式",code:`<template>
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
</template>`},{demo:i(()=>[e("div",Y,[s(p,{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",borderRadius:"8px"}},{default:i(()=>[s(l,{timestamp:"第一阶段",color:"#FF6B6B"},{default:i(()=>[...t[14]||(t[14]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"概念设计"),e("p",{style:{margin:"0",opacity:"0.9"}},"确定产品方向和核心功能")],-1)])]),_:1}),s(l,{timestamp:"第二阶段",color:"#4ECDC4"},{default:i(()=>[...t[15]||(t[15]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"原型开发"),e("p",{style:{margin:"0",opacity:"0.9"}},"创建可交互的产品原型")],-1)])]),_:1}),s(l,{timestamp:"第三阶段",color:"#45B7D1"},{default:i(()=>[...t[16]||(t[16]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"产品测试"),e("p",{style:{margin:"0",opacity:"0.9"}},"进行用户测试和功能验证")],-1)])]),_:1}),s(l,{timestamp:"第四阶段",color:"#96CEB4"},{default:i(()=>[...t[17]||(t[17]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"正式发布"),e("p",{style:{margin:"0",opacity:"0.9"}},"产品上线并提供支持")],-1)])]),_:1})]),_:1})])]),_:1}),t[22]||(t[22]=y("",9))])}}});export{_ as __pageData,D as default};

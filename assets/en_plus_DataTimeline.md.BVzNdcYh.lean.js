import{_ as o,a as n}from"./chunks/timelineItem.vue_vue_type_script_setup_true_lang.Dvzc4bCH.js";import{I as d,o as p,c as m,a8 as r,J as s,w as i,j as e,a}from"./chunks/framework.DvHWw5tv.js";const h={style:{margin:"20px 0"}},c={style:{margin:"20px 0"}},g={style:{margin:"20px 0"}},y={style:{margin:"20px 0"}},T=JSON.parse('{"title":"Timeline","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/DataTimeline.md","filePath":"en/plus/DataTimeline.md"}'),u={name:"en/plus/DataTimeline.md"},x=Object.assign(u,{setup(k){return(f,t)=>{const l=d("ShowCode");return p(),m("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[18]||(t[18]=r("",4)),s(l,{title:"Basic Timeline",description:"Vertical timeline, default direction is vertical",code:`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01'>
      Event 1: Project Initiation
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15'>
      Event 2: Requirements Analysis Completed
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20'>
      Event 3: Development Phase Started
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30'>
      Event 4: Testing Phase
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:i(()=>[e("div",h,[s(o,null,{default:i(()=>[s(n,{timestamp:"2024-01-01"},{default:i(()=>[...t[0]||(t[0]=[a(" Event 1: Project Initiation ",-1)])]),_:1}),s(n,{timestamp:"2024-02-15"},{default:i(()=>[...t[1]||(t[1]=[a(" Event 2: Requirements Analysis Completed ",-1)])]),_:1}),s(n,{timestamp:"2024-03-20"},{default:i(()=>[...t[2]||(t[2]=[a(" Event 3: Development Phase Started ",-1)])]),_:1}),s(n,{timestamp:"2024-04-30"},{default:i(()=>[...t[3]||(t[3]=[a(" Event 4: Testing Phase ",-1)])]),_:1})]),_:1})])]),_:1}),t[19]||(t[19]=e("h2",{id:"custom-node-color",tabindex:"-1"},[a("Custom Node Color "),e("a",{class:"header-anchor",href:"#custom-node-color","aria-label":"Permalink to “Custom Node Color”"},"​")],-1)),s(l,{title:"Custom Node Color",description:"Use the color prop to customize the timeline node color",code:`<template>
  <MYTimeline>
    <MYTimelineItem timestamp='2024-01-01' color='#67C23A'>
      <strong>Success Event</strong>
      <div style='color: #666; font-size: 12px;'>Project successfully launched, all resources ready</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-02-15' color='#E6A23C'>
      <strong>Warning Event</strong>
      <div style='color: #666; font-size: 12px;'>Requirements changed, need to re-estimate timeline</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-03-20' color='#F56C6C'>
      <strong>Error Event</strong>
      <div style='color: #666; font-size: 12px;'>Major technical issue discovered during development</div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='2024-04-30' color='#409EFF'>
      <strong>Info Event</strong>
      <div style='color: #666; font-size: 12px;'>Testing completed, ready for launch</div>
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:i(()=>[e("div",c,[s(o,null,{default:i(()=>[s(n,{timestamp:"2024-01-01",color:"#67C23A"},{default:i(()=>[...t[4]||(t[4]=[e("strong",null,"Success Event",-1),e("div",{style:{color:"#666","font-size":"12px"}},"Project successfully launched, all resources ready",-1)])]),_:1}),s(n,{timestamp:"2024-02-15",color:"#E6A23C"},{default:i(()=>[...t[5]||(t[5]=[e("strong",null,"Warning Event",-1),e("div",{style:{color:"#666","font-size":"12px"}},"Requirements changed, need to re-estimate timeline",-1)])]),_:1}),s(n,{timestamp:"2024-03-20",color:"#F56C6C"},{default:i(()=>[...t[6]||(t[6]=[e("strong",null,"Error Event",-1),e("div",{style:{color:"#666","font-size":"12px"}},"Major technical issue discovered during development",-1)])]),_:1}),s(n,{timestamp:"2024-04-30",color:"#409EFF"},{default:i(()=>[...t[7]||(t[7]=[e("strong",null,"Info Event",-1),e("div",{style:{color:"#666","font-size":"12px"}},"Testing completed, ready for launch",-1)])]),_:1})]),_:1})])]),_:1}),t[20]||(t[20]=e("h2",{id:"custom-content-using-slots",tabindex:"-1"},[a("Custom Content Using Slots "),e("a",{class:"header-anchor",href:"#custom-content-using-slots","aria-label":"Permalink to “Custom Content Using Slots”"},"​")],-1)),s(l,{title:"Custom Content Using Slots",description:"Use the timestamp slot to customize timestamp display and the default slot for content",code:`<template>
  <MYTimeline>
    <MYTimelineItem>
      <template #timestamp>
        <div style='display: flex; align-items: center; gap: 8px;'>
          <span style='color: #409EFF;'>📅</span>
          <span style='font-weight: bold;'>2024-01-01 09:00</span>
        </div>
      </template>
      <div style='background: #f0f9ff; padding: 12px; border-radius: 4px;'>
        <h4 style='margin: 0 0 8px 0; color: #409EFF;'>Project Kickoff Meeting</h4>
        <p style='margin: 0; color: #666;'>Discuss project goals, timeline, and resource allocation</p>
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
        <h4 style='margin: 0 0 8px 0; color: #67C23A;'>Requirements Analysis Complete</h4>
        <p style='margin: 0; color: #666;'>All functional requirements confirmed, moving to design phase</p>
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
        <h4 style='margin: 0 0 8px 0; color: #E6A23C;'>Development Phase Begins</h4>
        <p style='margin: 0; color: #666;'>Frontend and backend development underway</p>
      </div>
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:i(()=>[e("div",g,[s(o,null,{default:i(()=>[s(n,null,{timestamp:i(()=>[...t[8]||(t[8]=[e("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[e("span",{style:{color:"#409EFF"}},"📅"),e("span",{style:{"font-weight":"bold"}},"2024-01-01 09:00")],-1)])]),default:i(()=>[t[9]||(t[9]=e("div",{style:{background:"#f0f9ff",padding:"12px","border-radius":"4px"}},[e("h4",{style:{margin:"0 0 8px 0",color:"#409EFF"}},"Project Kickoff Meeting"),e("p",{style:{margin:"0",color:"#666"}},"Discuss project goals, timeline, and resource allocation")],-1))]),_:1}),s(n,null,{timestamp:i(()=>[...t[10]||(t[10]=[e("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[e("span",{style:{color:"#67C23A"}},"✅"),e("span",{style:{"font-weight":"bold"}},"2024-02-15 14:30")],-1)])]),default:i(()=>[t[11]||(t[11]=e("div",{style:{background:"#f0f9e8",padding:"12px","border-radius":"4px"}},[e("h4",{style:{margin:"0 0 8px 0",color:"#67C23A"}},"Requirements Analysis Complete"),e("p",{style:{margin:"0",color:"#666"}},"All functional requirements confirmed, moving to design phase")],-1))]),_:1}),s(n,null,{timestamp:i(()=>[...t[12]||(t[12]=[e("div",{style:{display:"flex","align-items":"center",gap:"8px"}},[e("span",{style:{color:"#E6A23C"}},"🚧"),e("span",{style:{"font-weight":"bold"}},"2024-03-20 10:00")],-1)])]),default:i(()=>[t[13]||(t[13]=e("div",{style:{background:"#fdf6ec",padding:"12px","border-radius":"4px"}},[e("h4",{style:{margin:"0 0 8px 0",color:"#E6A23C"}},"Development Phase Begins"),e("p",{style:{margin:"0",color:"#666"}},"Frontend and backend development underway")],-1))]),_:1})]),_:1})])]),_:1}),t[21]||(t[21]=e("h2",{id:"custom-styling",tabindex:"-1"},[a("Custom Styling "),e("a",{class:"header-anchor",href:"#custom-styling","aria-label":"Permalink to “Custom Styling”"},"​")],-1)),s(l,{title:"Custom Styling",description:"Use the style prop to customize the timeline container's appearance",code:`<template>
  <MYTimeline :style='{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '20px', borderRadius: '8px' }'>
    <MYTimelineItem timestamp='Phase 1' color='#FF6B6B'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Concept Design</h3>
        <p style='margin: 0; opacity: 0.9;'>Define product direction and core features</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='Phase 2' color='#4ECDC4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Prototype Development</h3>
        <p style='margin: 0; opacity: 0.9;'>Create interactive product prototype</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='Phase 3' color='#45B7D1'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Product Testing</h3>
        <p style='margin: 0; opacity: 0.9;'>Conduct user testing and feature validation</p>
      </div>
    </MYTimelineItem>
    <MYTimelineItem timestamp='Phase 4' color='#96CEB4'>
      <div style='color: white;'>
        <h3 style='margin: 0 0 8px 0;'>Official Launch</h3>
        <p style='margin: 0; opacity: 0.9;'>Product goes live with support</p>
      </div>
    </MYTimelineItem>
  </MYTimeline>
</template>`},{demo:i(()=>[e("div",y,[s(o,{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",borderRadius:"8px"}},{default:i(()=>[s(n,{timestamp:"Phase 1",color:"#FF6B6B"},{default:i(()=>[...t[14]||(t[14]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"Concept Design"),e("p",{style:{margin:"0",opacity:"0.9"}},"Define product direction and core features")],-1)])]),_:1}),s(n,{timestamp:"Phase 2",color:"#4ECDC4"},{default:i(()=>[...t[15]||(t[15]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"Prototype Development"),e("p",{style:{margin:"0",opacity:"0.9"}},"Create interactive product prototype")],-1)])]),_:1}),s(n,{timestamp:"Phase 3",color:"#45B7D1"},{default:i(()=>[...t[16]||(t[16]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"Product Testing"),e("p",{style:{margin:"0",opacity:"0.9"}},"Conduct user testing and feature validation")],-1)])]),_:1}),s(n,{timestamp:"Phase 4",color:"#96CEB4"},{default:i(()=>[...t[17]||(t[17]=[e("div",{style:{color:"white"}},[e("h3",{style:{margin:"0 0 8px 0"}},"Official Launch"),e("p",{style:{margin:"0",opacity:"0.9"}},"Product goes live with support")],-1)])]),_:1})]),_:1})])]),_:1}),t[22]||(t[22]=r("",9))])}}});export{T as __pageData,x as default};

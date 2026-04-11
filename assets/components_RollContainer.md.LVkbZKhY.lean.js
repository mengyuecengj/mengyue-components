import{_ as h,a as r,b as l,c as p,d as k}from"./chunks/main.vue_vue_type_script_setup_true_lang.bM81B1go.js";import{I as g,o,c as y,a8 as d,J as a,w as t,j as i,a as n}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useOverallComputed.oY471y-F.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const b={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},c={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},m={class:"test-case"},F=JSON.parse('{"title":"Container","description":"","frontmatter":{},"headers":[],"relativePath":"components/RollContainer.md","filePath":"components/RollContainer.md"}'),u={name:"components/RollContainer.md"},Y=Object.assign(u,{setup(A){return(B,s)=>{const e=g("ShowCode");return o(),y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[s[10]||(s[10]=d("",6)),a(e,{title:"代码演示",code:`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>基础容器</h3>
    <MYContainer class='basic-container'>
      <p>这是一个基础容器</p>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:t(()=>[i("div",b,[s[1]||(s[1]=i("h3",null,"基础容器",-1)),a(h,{class:"basic-container"},{default:t(()=>[...s[0]||(s[0]=[i("p",null,"这是一个基础容器",-1)])]),_:1})])]),_:1},8,["code"]),s[11]||(s[11]=i("h3",{id:"自定义样式容器",tabindex:"-1"},[n("自定义样式容器 "),i("a",{class:"header-anchor",href:"#自定义样式容器","aria-label":"Permalink to “自定义样式容器”"},"​")],-1)),s[12]||(s[12]=i("p",null,"带着自定义样式的基础容器：",-1)),a(e,{title:"代码演示",code:`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>带自定义样式的容器</h3>
    <MYContainer 
      height='300px' 
      width='80%' 
      background='#470303ff' 
      class='styled-container'
    >
      <p>自定义高度、宽度和背景色的容器</p>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:t(()=>[i("div",c,[s[3]||(s[3]=i("h3",null,"带自定义样式的容器",-1)),a(h,{height:"300px",width:"80%",background:"#470303ff",class:"styled-container"},{default:t(()=>[...s[2]||(s[2]=[i("p",null,"自定义高度、宽度和背景色的容器",-1)])]),_:1})])]),_:1},8,["code"]),s[13]||(s[13]=i("h3",{id:"完整布局",tabindex:"-1"},[n("完整布局 "),i("a",{class:"header-anchor",href:"#完整布局","aria-label":"Permalink to “完整布局”"},"​")],-1)),s[14]||(s[14]=i("p",null,"完整布局示例(宽度高度颜色等可自由调节)：",-1)),a(e,{title:"代码演示",code:`
<template>
  <div class='test-case'>
    <h3>完整布局</h3>
    <MYContainer height='200px' class='full-layout'>
      <MYHeader class='header' height='30px'>头部</MYHeader>
      <MYAside class='left-aside'>左侧边栏</MYAside>
      <MYMain class='main-content'>
        <p>主内容区域</p>
        <p>可以放置各种内容</p>
      </MYMain>
      <MYAside position='right' class='right-aside'>右侧边栏</MYAside>
      <MYFooter class='footer' height='30px'>页脚区域</MYFooter>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:t(()=>[i("div",m,[s[9]||(s[9]=i("h3",null,"完整布局",-1)),a(h,{height:"200px",class:"full-layout"},{default:t(()=>[a(r,{class:"header",height:"30px"},{default:t(()=>[...s[4]||(s[4]=[n("头部",-1)])]),_:1}),a(l,{class:"left-aside"},{default:t(()=>[...s[5]||(s[5]=[n("左侧边栏",-1)])]),_:1}),a(p,{class:"main-content"},{default:t(()=>[...s[6]||(s[6]=[i("p",null,"主内容区域",-1),i("p",null,"可以放置各种内容",-1)])]),_:1}),a(l,{position:"right",class:"right-aside"},{default:t(()=>[...s[7]||(s[7]=[n("右侧边栏",-1)])]),_:1}),a(k,{class:"footer",height:"30px"},{default:t(()=>[...s[8]||(s[8]=[n("页脚区域",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),s[15]||(s[15]=d("",13))])}}});export{F as __pageData,Y as default};

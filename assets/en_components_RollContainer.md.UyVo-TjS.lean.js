import{_ as d,a as h,b as r,c as p,d as k}from"./chunks/main.vue_vue_type_script_setup_true_lang.bM81B1go.js";import{I as o,o as g,c,a8 as l,J as a,w as t,j as i,a as n}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useOverallComputed.oY471y-F.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const y={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},b={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},m={class:"test-case"},F=JSON.parse('{"title":"Container","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/RollContainer.md","filePath":"en/components/RollContainer.md"}'),u={name:"en/components/RollContainer.md"},Y=Object.assign(u,{setup(B){return(A,s)=>{const e=o("ShowCode");return g(),c("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[10]||(s[10]=l("",6)),a(e,{title:"Code Demo",code:`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>Basic Container</h3>
    <MYContainer class='basic-container'>
      <p>This is a basic container</p>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:t(()=>[i("div",y,[s[1]||(s[1]=i("h3",null,"Basic Container",-1)),a(d,{class:"basic-container"},{default:t(()=>[...s[0]||(s[0]=[i("p",null,"This is a basic container",-1)])]),_:1})])]),_:1},8,["code"]),s[11]||(s[11]=i("h3",{id:"custom-styled-container",tabindex:"-1"},[n("Custom Styled Container "),i("a",{class:"header-anchor",href:"#custom-styled-container","aria-label":"Permalink to “Custom Styled Container”"},"​")],-1)),s[12]||(s[12]=i("p",null,"Basic container with custom styles:",-1)),a(e,{title:"Code Demo",code:`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>Container with Custom Styles</h3>
    <MYContainer 
      height='300px' 
      width='80%' 
      background='#470303ff' 
      class='styled-container'
    >
      <p>Container with custom height, width, and background color</p>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:t(()=>[i("div",b,[s[3]||(s[3]=i("h3",null,"Container with Custom Styles",-1)),a(d,{height:"300px",width:"80%",background:"#470303ff",class:"styled-container"},{default:t(()=>[...s[2]||(s[2]=[i("p",null,"Container with custom height, width, and background color",-1)])]),_:1})])]),_:1},8,["code"]),s[13]||(s[13]=i("h3",{id:"complete-layout",tabindex:"-1"},[n("Complete Layout "),i("a",{class:"header-anchor",href:"#complete-layout","aria-label":"Permalink to “Complete Layout”"},"​")],-1)),s[14]||(s[14]=i("p",null,"Complete layout example (width, height, colors can be freely adjusted):",-1)),a(e,{title:"Code Demo",code:`
<template>
  <div class='test-case'>
    <h3>Complete Layout</h3>
    <MYContainer height='200px' class='full-layout'>
      <MYHeader class='header' height='30px'>Header</MYHeader>
      <MYAside class='left-aside'>Left Sidebar</MYAside>
      <MYMain class='main-content'>
        <p>Main Content Area</p>
        <p>Various content can be placed here</p>
      </MYMain>
      <MYAside position='right' class='right-aside'>Right Sidebar</MYAside>
      <MYFooter class='footer' height='30px'>Footer Area</MYFooter>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:t(()=>[i("div",m,[s[9]||(s[9]=i("h3",null,"Complete Layout",-1)),a(d,{height:"200px",class:"full-layout"},{default:t(()=>[a(h,{class:"header",height:"30px"},{default:t(()=>[...s[4]||(s[4]=[n("Header",-1)])]),_:1}),a(r,{class:"left-aside"},{default:t(()=>[...s[5]||(s[5]=[n("Left Sidebar",-1)])]),_:1}),a(p,{class:"main-content"},{default:t(()=>[...s[6]||(s[6]=[i("p",null,"Main Content Area",-1),i("p",null,"Various content can be placed here",-1)])]),_:1}),a(r,{position:"right",class:"right-aside"},{default:t(()=>[...s[7]||(s[7]=[n("Right Sidebar",-1)])]),_:1}),a(k,{class:"footer",height:"30px"},{default:t(()=>[...s[8]||(s[8]=[n("Footer Area",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),s[15]||(s[15]=l("",13))])}}});export{F as __pageData,Y as default};

import{_ as d,a as r,b as p,c as l,d as k}from"./chunks/main.vue_vue_type_script_setup_true_lang.bM81B1go.js";import{I as g,o,c as y,a8 as h,J as a,w as n,j as s,a as t}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useOverallComputed.oY471y-F.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";const u={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},c={style:{border:"1px solid #2c2",padding:"15px","border-radius":"4px"}},b={class:"test-case"},C=JSON.parse('{"title":"Container","description":"","frontmatter":{},"headers":[],"relativePath":"plus/RollContainer.md","filePath":"plus/RollContainer.md"}'),m={name:"plus/RollContainer.md"},M=Object.assign(m,{setup(f){return(A,i)=>{const e=g("ShowCode");return o(),y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[10]||(i[10]=h("",6)),a(e,{title:"代码演示",code:`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>基础容器</h3>
    <MYContainer class='basic-container'>
      <p>这是一个基础容器</p>
    </MYContainer>
  </div>
</template>
  `.trim()},{demo:n(()=>[s("div",u,[i[1]||(i[1]=s("h3",null,"基础容器",-1)),a(d,{class:"basic-container"},{default:n(()=>[...i[0]||(i[0]=[s("p",null,"这是一个基础容器",-1)])]),_:1})])]),_:1},8,["code"]),i[11]||(i[11]=s("h3",{id:"自定义样式容器",tabindex:"-1"},[t("自定义样式容器 "),s("a",{class:"header-anchor",href:"#自定义样式容器","aria-label":"Permalink to “自定义样式容器”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyangshirongqi zi ding yi yang shi rong qi zdyysrq ")],-1)),i[12]||(i[12]=s("p",null,[t("带着自定义样式的基础容器："),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"daizhaozidingyiyangshidejichurongqi： dai zhao zi ding yi yang shi de ji chu rong qi ： dzzdyysdjcrq：")],-1)),a(e,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[s("div",c,[i[3]||(i[3]=s("h3",null,"带自定义样式的容器",-1)),a(d,{height:"300px",width:"80%",background:"#470303ff",class:"styled-container"},{default:n(()=>[...i[2]||(i[2]=[s("p",null,"自定义高度、宽度和背景色的容器",-1)])]),_:1})])]),_:1},8,["code"]),i[13]||(i[13]=s("h3",{id:"完整布局",tabindex:"-1"},[t("完整布局 "),s("a",{class:"header-anchor",href:"#完整布局","aria-label":"Permalink to “完整布局”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"wanzhengbuju wan zheng bu ju wzbj ")],-1)),i[14]||(i[14]=s("p",null,[t("完整布局示例(宽度高度颜色等可自由调节)："),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"wanzhengbujushili(kuandugaoduyansedengkeziyoutiaojie)： wan zheng bu ju shi li ( kuan du gao du yan se deng ke zi you tiao jie )： wzbjsl(kdgdysdkzytj)")],-1)),a(e,{title:"代码演示",code:`
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
  `.trim()},{demo:n(()=>[s("div",b,[i[9]||(i[9]=s("h3",null,"完整布局",-1)),a(d,{height:"200px",class:"full-layout"},{default:n(()=>[a(r,{class:"header",height:"30px"},{default:n(()=>[...i[4]||(i[4]=[t("头部",-1)])]),_:1}),a(p,{class:"left-aside"},{default:n(()=>[...i[5]||(i[5]=[t("左侧边栏",-1)])]),_:1}),a(l,{class:"main-content"},{default:n(()=>[...i[6]||(i[6]=[s("p",null,"主内容区域",-1),s("p",null,"可以放置各种内容",-1)])]),_:1}),a(p,{position:"right",class:"right-aside"},{default:n(()=>[...i[7]||(i[7]=[t("右侧边栏",-1)])]),_:1}),a(k,{class:"footer",height:"30px"},{default:n(()=>[...i[8]||(i[8]=[t("页脚区域",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[15]||(i[15]=h("",13))])}}});export{C as __pageData,M as default};

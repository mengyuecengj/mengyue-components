import{_ as l}from"./chunks/a.vue_vue_type_script_setup_true_lang.D8TquksN.js";import{I as r,o,c as p,ah as n,J as s,w as t,j as i,a as e}from"./chunks/framework.BzrxsKI0.js";import"./chunks/useClassComputed.DNrZSa4y.js";import"./chunks/useStyleComputed.BVjmiXVX.js";const h={style:{display:"flex","flex-direction":"column",gap:"10px"}},k={style:{display:"flex","flex-direction":"column",gap:"10px"}},m={style:{display:"flex","flex-direction":"column",gap:"10px"}},g={style:{display:"flex","flex-direction":"column",gap:"10px"}},Y=JSON.parse('{"title":"A","description":"","frontmatter":{},"headers":[],"relativePath":"components/BasicA.md","filePath":"components/BasicA.md"}'),u={name:"components/BasicA.md"},x=Object.assign(u,{setup(y){return(b,a)=>{const d=r("ShowCode");return o(),p("div",null,[a[16]||(a[16]=n("",6)),s(d,{title:"代码演示",code:`
<template>
  <MYa type='primary'>primary 类型</MYa>
  <MYa type='success'>success 类型</MYa>
  <MYa type='warning'>warning 类型</MYa>
  <MYa type='danger'>danger 类型</MYa>
  <MYa type='info'>info 类型</MYa>
  <MYa>默认类型</MYa>
</template>
  `.trim()},{demo:t(()=>[i("div",h,[s(l,{type:"primary"},{default:t(()=>[...a[0]||(a[0]=[e("primary 类型",-1)])]),_:1}),s(l,{type:"success"},{default:t(()=>[...a[1]||(a[1]=[e("success 类型",-1)])]),_:1}),s(l,{type:"warning"},{default:t(()=>[...a[2]||(a[2]=[e("warning 类型",-1)])]),_:1}),s(l,{type:"danger"},{default:t(()=>[...a[3]||(a[3]=[e("danger 类型",-1)])]),_:1}),s(l,{type:"info"},{default:t(()=>[...a[4]||(a[4]=[e("info 类型",-1)])]),_:1}),s(l,null,{default:t(()=>[...a[5]||(a[5]=[e("默认类型",-1)])]),_:1})])]),_:1},8,["code"]),a[17]||(a[17]=i("h3",{id:"自定义颜色",tabindex:"-1"},[e("自定义颜色 "),i("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​")],-1)),a[18]||(a[18]=i("p",null,[e("如果默认颜色不满足需求，还可以自定义颜色，使用 "),i("code",null,"color"),e(" 属性自定义链接颜色。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYa color='#ff0000'>自定义红色链接</MYa>
  <MYa color='red'>自定义红色链接</MYa>
</template>
  `.trim()},{demo:t(()=>[i("div",k,[s(l,{color:"#ff0000"},{default:t(()=>[...a[6]||(a[6]=[e("自定义红色链接",-1)])]),_:1}),s(l,{color:"red"},{default:t(()=>[...a[7]||(a[7]=[e("自定义红色链接",-1)])]),_:1})])]),_:1},8,["code"]),a[19]||(a[19]=i("h2",{id:"关于交互行为",tabindex:"-1"},[e("关于交互行为 "),i("a",{class:"header-anchor",href:"#关于交互行为","aria-label":"Permalink to “关于交互行为”"},"​")],-1)),a[20]||(a[20]=i("h3",{id:"disabled",tabindex:"-1"},[e("disabled "),i("a",{class:"header-anchor",href:"#disabled","aria-label":"Permalink to “disabled”"},"​")],-1)),a[21]||(a[21]=i("p",null,[e("使用 "),i("code",null,"disabled"),e(" 属性可以禁用链接。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYa disabled>禁用链接</MYa>
</template>
  `.trim()},{demo:t(()=>[s(l,{disabled:""},{default:t(()=>[...a[8]||(a[8]=[e("禁用链接",-1)])]),_:1})]),_:1},8,["code"]),a[22]||(a[22]=i("h3",{id:"underline",tabindex:"-1"},[e("underline "),i("a",{class:"header-anchor",href:"#underline","aria-label":"Permalink to “underline”"},"​")],-1)),a[23]||(a[23]=i("p",null,[e("使用 "),i("code",null,"underline"),e(" 属性可以控制链接下划线的显示。")],-1)),s(d,{title:"代码演示",code:`
<template>
      <MYa underline>不带下划线的链接</MYa>
      <MYa :underline='false'>带下划线的链接</MYa>
</template>
  `.trim()},{demo:t(()=>[i("div",m,[s(l,{underline:""},{default:t(()=>[...a[9]||(a[9]=[e("不带下划线的链接",-1)])]),_:1}),s(l,{underline:!1},{default:t(()=>[...a[10]||(a[10]=[e("带下划线的链接",-1)])]),_:1})])]),_:1},8,["code"]),a[24]||(a[24]=i("h2",{id:"关于尺寸",tabindex:"-1"},[e("关于尺寸 "),i("a",{class:"header-anchor",href:"#关于尺寸","aria-label":"Permalink to “关于尺寸”"},"​")],-1)),a[25]||(a[25]=i("h3",{id:"size",tabindex:"-1"},[e("size "),i("a",{class:"header-anchor",href:"#size","aria-label":"Permalink to “size”"},"​")],-1)),a[26]||(a[26]=i("p",null,[e("使用 "),i("code",null,"size"),e(" 属性可以调整链接大小。")],-1)),s(d,{title:"代码演示",code:`
<template>
  <MYa size='large'>large 尺寸</MYa>
  <MYa size='medium'>medium 尺寸</MYa>
  <MYa size='small'>small 尺寸</MYa>
  <MYa size='mini'>mini 尺寸</MYa>
</template>
  `.trim()},{demo:t(()=>[i("div",g,[s(l,{size:"large"},{default:t(()=>[...a[11]||(a[11]=[e("large 尺寸",-1)])]),_:1}),s(l,{size:"medium"},{default:t(()=>[...a[12]||(a[12]=[e("medium 尺寸",-1)])]),_:1}),s(l,{size:"small"},{default:t(()=>[...a[13]||(a[13]=[e("small 尺寸",-1)])]),_:1}),s(l,{size:"mini"},{default:t(()=>[...a[14]||(a[14]=[e("mini 尺寸",-1)])]),_:1})])]),_:1},8,["code"]),a[27]||(a[27]=i("h3",{id:"组合使用",tabindex:"-1"},[e("组合使用 "),i("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),a[28]||(a[28]=i("p",null,"最后，实现多种 API 组合使用：",-1)),s(d,{title:"代码演示",code:`
<template>
  <MYa 
    size='large' 
    color='#ff0000' 
    underline
  >
    组合: large + 红色 + 下划线
  </MYa>
</template>
  `.trim()},{demo:t(()=>[s(l,{size:"large",color:"#ff0000",underline:""},{default:t(()=>[...a[15]||(a[15]=[e(" 组合: large + 红色 + 下划线 ",-1)])]),_:1})]),_:1},8,["code"]),a[29]||(a[29]=n("",6))])}}});export{Y as __pageData,x as default};

import{_ as d,a as i}from"./chunks/breadcrumbItem.vue_vue_type_script_setup_true_lang.DaHw-K1J.js";import{I as p,o as h,c as o,a8 as l,J as t,w as s,a as e,j as r}from"./chunks/framework.DvHWw5tv.js";const B=JSON.parse('{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationBreadcrumb.md","filePath":"components/NavigationBreadcrumb.md"}'),m={name:"components/NavigationBreadcrumb.md"},g=Object.assign(m,{setup(b){return(k,a)=>{const n=p("ShowCode");return h(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775893163000"},[a[8]||(a[8]=l("",6)),t(n,{title:"代码演示",code:`
<template>
  <MYBreadcrumb separator='/'>
    <MYBreadcrumb-item :to='{ path: '/' }'>Homepage</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
  </MYBreadcrumb>
</template>
  `.trim()},{demo:s(()=>[t(d,{separator:"/"},{default:s(()=>[t(i,{to:{path:"/"}},{default:s(()=>[...a[0]||(a[0]=[e("Homepage",-1)])]),_:1}),t(i,null,{default:s(()=>[...a[1]||(a[1]=[e("Promotion Management",-1)])]),_:1}),t(i,null,{default:s(()=>[...a[2]||(a[2]=[e("Promotion List",-1)])]),_:1}),t(i,null,{default:s(()=>[...a[3]||(a[3]=[e("Promotion Detail",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),a[9]||(a[9]=r("h3",{id:"自定义分隔符",tabindex:"-1"},[e("自定义分隔符 "),r("a",{class:"header-anchor",href:"#自定义分隔符","aria-label":"Permalink to “自定义分隔符”"},"​")],-1)),a[10]||(a[10]=r("p",null,"可以使用任意字符作为分隔符。",-1)),t(n,{title:"代码演示",code:`
<template>
  <MYBreadcrumb separator='>'>
    <MYBreadcrumb-item :to='{ path: '/' }'>首页</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户管理</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户列表</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户详情</MYBreadcrumb-item>
  </MYBreadcrumb>
</template>
  `.trim()},{demo:s(()=>[t(d,{separator:">"},{default:s(()=>[t(i,{to:{path:"/"}},{default:s(()=>[...a[4]||(a[4]=[e("首页",-1)])]),_:1}),t(i,null,{default:s(()=>[...a[5]||(a[5]=[e("用户管理",-1)])]),_:1}),t(i,null,{default:s(()=>[...a[6]||(a[6]=[e("用户列表",-1)])]),_:1}),t(i,null,{default:s(()=>[...a[7]||(a[7]=[e("用户详情",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),a[11]||(a[11]=l("",7))])}}});export{B as __pageData,g as default};

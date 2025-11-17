import{d as D,W as P,h as g,c as o,o as l,r as f,e as m,N as _,ai as S,b as M,w as e,K as A,k as y,G as v,a as r,t as T,I as x,ah as Y,J as t,j as B}from"./chunks/framework.PAn8Jj8p.js";const N={class:"my-breadcrumb","aria-label":"Breadcrumb"},C=D({name:"MYBreadcrumb",__name:"breadcrumb",props:{separator:{type:String,default:"/"},separatorIcon:{type:[Object,Function],default:null}},setup(s){const p=s;return P("breadcrumbSeparator",g(()=>p.separator)),P("breadcrumbSeparatorIcon",g(()=>p.separatorIcon)),(a,d)=>(l(),o("nav",N,[a.$slots.default?f(a.$slots,"default",{key:0}):m("",!0)]))}}),j={class:"my-breadcrumb-item"},E={key:1,class:"my-breadcrumb-link"},F={key:2,class:"my-breadcrumb-separator"},n=D({name:"MYBreadcrumb-item",__name:"breadcrumbItem",props:{to:{type:[String,Object],default:""},replace:{type:Boolean,default:!1}},setup(s){const p=s,a=_("breadcrumbSeparator","/"),d=_("breadcrumbSeparatorIcon",null),b=S(),u=!!b?.appContext.config.globalProperties.$router,I=g(()=>{const i=b?.parent?.subTree;if(!i)return!1;const k=Array.isArray(i.children)?i.children.filter(c=>typeof c=="object"&&c!==null&&"type"in c&&c.type?.name==="MYBreadcrumbItem"):[],h=k?.[k.length-1];return h&&typeof h=="object"&&"props"in h?h.props?.to===p.to&&b?.vnode===h:!1});return(i,k)=>(l(),o("span",j,[s.to?(l(),M(A(u?"router-link":"a"),{key:0,to:u?s.to:void 0,href:u?void 0:typeof s.to=="string"?s.to:s.to.path,replace:s.replace,class:"my-breadcrumb-link"},{default:e(()=>[i.$slots.default?f(i.$slots,"default",{key:0}):m("",!0)]),_:3},8,["to","href","replace"])):(l(),o("span",E,[i.$slots.default?f(i.$slots,"default",{key:0}):m("",!0)])),I.value?m("",!0):(l(),o("span",F,[y(d)?(l(),M(A(y(d)),{key:0})):(l(),o(v,{key:1},[r(T(y(a)),1)],64))]))]))}}),O=JSON.parse('{"title":"Breadcrumb","description":"","frontmatter":{},"headers":[],"relativePath":"components/NavigationBreadcrumb.md","filePath":"components/NavigationBreadcrumb.md"}'),$={name:"components/NavigationBreadcrumb.md"},w=Object.assign($,{setup(s){return(p,a)=>{const d=x("ShowCode");return l(),o("div",null,[a[8]||(a[8]=Y("",6)),t(d,{title:"代码演示",code:`
<template>
  <MYBreadcrumb separator='/'>
    <MYBreadcrumb-item :to='{ path: '/' }'>Homepage</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Management</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion List</MYBreadcrumb-item>
    <MYBreadcrumb-item>Promotion Detail</MYBreadcrumb-item>
  </MYBreadcrumb>
</template>
  `.trim()},{demo:e(()=>[t(C,{separator:"/"},{default:e(()=>[t(n,{to:{path:"/"}},{default:e(()=>[...a[0]||(a[0]=[r("Homepage",-1)])]),_:1}),t(n,null,{default:e(()=>[...a[1]||(a[1]=[r("Promotion Management",-1)])]),_:1}),t(n,null,{default:e(()=>[...a[2]||(a[2]=[r("Promotion List",-1)])]),_:1}),t(n,null,{default:e(()=>[...a[3]||(a[3]=[r("Promotion Detail",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),a[9]||(a[9]=B("h3",{id:"自定义分隔符",tabindex:"-1"},[r("自定义分隔符 "),B("a",{class:"header-anchor",href:"#自定义分隔符","aria-label":"Permalink to “自定义分隔符”"},"​")],-1)),a[10]||(a[10]=B("p",null,"可以使用任意字符作为分隔符。",-1)),t(d,{title:"代码演示",code:`
<template>
  <MYBreadcrumb separator='>'>
    <MYBreadcrumb-item :to='{ path: '/' }'>首页</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户管理</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户列表</MYBreadcrumb-item>
    <MYBreadcrumb-item>用户详情</MYBreadcrumb-item>
  </MYBreadcrumb>
</template>
  `.trim()},{demo:e(()=>[t(C,{separator:">"},{default:e(()=>[t(n,{to:{path:"/"}},{default:e(()=>[...a[4]||(a[4]=[r("首页",-1)])]),_:1}),t(n,null,{default:e(()=>[...a[5]||(a[5]=[r("用户管理",-1)])]),_:1}),t(n,null,{default:e(()=>[...a[6]||(a[6]=[r("用户列表",-1)])]),_:1}),t(n,null,{default:e(()=>[...a[7]||(a[7]=[r("用户详情",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),a[11]||(a[11]=Y("",7))])}}});export{O as __pageData,w as default};

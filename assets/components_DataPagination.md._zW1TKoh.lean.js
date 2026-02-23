import{_ as h}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.CMfhfC8e.js";import{I as g,o as c,c as y,ah as k,J as a,w as o,j as t,a as m,y as e}from"./chunks/framework.BzrxsKI0.js";const b={style:{margin:"20px 0"}},u={style:{margin:"20px 0"}},P=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataPagination.md","filePath":"components/DataPagination.md"}'),B={name:"components/DataPagination.md"},v=Object.assign(B,{setup(A){const n=e(1),l=e(10),d=e(5),r=e(10);return(D,s)=>{const p=g("ShowCode");return c(),y("div",null,[s[4]||(s[4]=k("",4)),a(p,{title:"基础分页器",code:`
<template>
  <MYPagination 
    v-model:current-page='currentPage'
    v-model:page-size='pageSize'
    layout='prev, pager, next' 
    :total='50' 
  />
</template>
<script setup>
import { ref } from 'vue';
const currentPage = ref(1);
const pageSize = ref(10);
<\/script>
  `.trim()},{demo:o(()=>[t("div",b,[a(h,{"current-page":n.value,"onUpdate:currentPage":s[0]||(s[0]=i=>n.value=i),"page-size":l.value,"onUpdate:pageSize":s[1]||(s[1]=i=>l.value=i),layout:"prev, pager, next",total:50},null,8,["current-page","page-size"])])]),_:1},8,["code"]),s[5]||(s[5]=t("h3",{id:"完整颜色定制",tabindex:"-1"},[m("完整颜色定制 "),t("a",{class:"header-anchor",href:"#完整颜色定制","aria-label":"Permalink to “完整颜色定制”"},"​")],-1)),a(p,{title:"完整颜色定制",description:"组合使用所有颜色定制属性实现完整自定义样式",code:`
<template>
  <MYPagination 
    v-model:current-page='currentPage9'
    v-model:page-size='pageSize9'
    :total='200'
    layout='prev, pager, next, jumper'
    prne-color='#6A5ACD'
    prne-text-color='#FFFFFF'
    item-color='#F8F9FA'
    item-text-color='#495057'
    active-item-color='#6A5ACD'
    active-item-text-color='#FFFFFF'
    background
  />
</template>
<script setup>
import { ref } from 'vue';
const currentPage9 = ref(5);
const pageSize9 = ref(10);
<\/script>
  `.trim()},{demo:o(()=>[t("div",u,[a(h,{"current-page":d.value,"onUpdate:currentPage":s[2]||(s[2]=i=>d.value=i),"page-size":r.value,"onUpdate:pageSize":s[3]||(s[3]=i=>r.value=i),total:200,layout:"prev, pager, next, jumper","prne-color":"#6A5ACD","prne-text-color":"#FFFFFF","item-color":"#F8F9FA","item-text-color":"#495057","active-item-color":"#6A5ACD","active-item-text-color":"#FFFFFF",background:""},null,8,["current-page","page-size"])])]),_:1},8,["code"]),s[6]||(s[6]=k("",5))])}}});export{P as __pageData,v as default};

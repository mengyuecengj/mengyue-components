import{_ as h}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.Iv_XFD8t.js";import{I as g,o as c,c as y,a8 as k,J as a,w as o,j as t,a as m,A as e}from"./chunks/framework.DvHWw5tv.js";const b={style:{margin:"20px 0"}},u={style:{margin:"20px 0"}},v=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataPagination.md","filePath":"components/DataPagination.md"}'),A={name:"components/DataPagination.md"},P=Object.assign(A,{setup(B){const n=e(1),l=e(10),d=e(5),r=e(10);return(D,s)=>{const p=g("ShowCode");return c(),y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[4]||(s[4]=k("",4)),a(p,{title:"基础分页器",code:`
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
    prevColor='#6A5ACD'
    prevTextColor='#FFFFFF'
    itemColor='#F8F9FA'
    itemTextColor='#495057'
    activeItemColor='#6A5ACD'
    activeItemTextColor='#FFFFFF'
    background
  />
</template>
<script setup>
import { ref } from 'vue';
const currentPage9 = ref(5);
const pageSize9 = ref(10);
<\/script>
  `.trim()},{demo:o(()=>[t("div",u,[a(h,{"current-page":d.value,"onUpdate:currentPage":s[2]||(s[2]=i=>d.value=i),"page-size":r.value,"onUpdate:pageSize":s[3]||(s[3]=i=>r.value=i),total:200,layout:"prev, pager, next, jumper",prevColor:"#6A5ACD",prevTextColor:"#FFFFFF","item-color":"#F8F9FA","item-text-color":"#495057","active-item-color":"#6A5ACD","active-item-text-color":"#FFFFFF",background:""},null,8,["current-page","page-size"])])]),_:1},8,["code"]),s[6]||(s[6]=k("",5))])}}});export{v as __pageData,P as default};

import{_ as o}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.Iv_XFD8t.js";import{I as g,o as c,c as u,a8 as h,J as t,w as k,j as a,a as m,A as e}from"./chunks/framework.DvHWw5tv.js";const y={style:{margin:"20px 0"}},b={style:{margin:"20px 0"}},F=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/DataPagination.md","filePath":"en/plus/DataPagination.md"}'),B={name:"en/plus/DataPagination.md"},P=Object.assign(B,{setup(A){const n=e(1),r=e(10),l=e(5),d=e(10);return(f,s)=>{const p=g("ShowCode");return c(),u("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[4]||(s[4]=h("",4)),t(p,{title:"Basic Paginator",code:`
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
  `.trim()},{demo:k(()=>[a("div",y,[t(o,{"current-page":n.value,"onUpdate:currentPage":s[0]||(s[0]=i=>n.value=i),"page-size":r.value,"onUpdate:pageSize":s[1]||(s[1]=i=>r.value=i),layout:"prev, pager, next",total:50},null,8,["current-page","page-size"])])]),_:1},8,["code"]),s[5]||(s[5]=a("h3",{id:"full-color-customization",tabindex:"-1"},[m("Full Color Customization "),a("a",{class:"header-anchor",href:"#full-color-customization","aria-label":"Permalink to “Full Color Customization”"},"​")],-1)),t(p,{title:"Full Color Customization",description:"Combine all color customization props to achieve a fully custom look",code:`
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
  `.trim()},{demo:k(()=>[a("div",b,[t(o,{"current-page":l.value,"onUpdate:currentPage":s[2]||(s[2]=i=>l.value=i),"page-size":d.value,"onUpdate:pageSize":s[3]||(s[3]=i=>d.value=i),total:200,layout:"prev, pager, next, jumper","prne-color":"#6A5ACD","prne-text-color":"#FFFFFF","item-color":"#F8F9FA","item-text-color":"#495057","active-item-color":"#6A5ACD","active-item-text-color":"#FFFFFF",background:""},null,8,["current-page","page-size"])])]),_:1},8,["code"]),s[6]||(s[6]=h("",5))])}}});export{F as __pageData,P as default};

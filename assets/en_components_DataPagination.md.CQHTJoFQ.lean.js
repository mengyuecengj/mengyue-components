import{_ as o}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.Iv_XFD8t.js";import{I as g,o as c,c as m,a8 as h,J as i,w as k,j as a,a as u,A as e}from"./chunks/framework.DvHWw5tv.js";const y={style:{margin:"20px 0"}},b={style:{margin:"20px 0"}},v=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/DataPagination.md","filePath":"en/components/DataPagination.md"}'),B={name:"en/components/DataPagination.md"},f=Object.assign(B,{setup(A){const n=e(1),r=e(10),l=e(5),p=e(10);return(C,s)=>{const d=g("ShowCode");return c(),m("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[4]||(s[4]=h("",4)),i(d,{title:"Basic Pagination",code:`
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
  `.trim()},{demo:k(()=>[a("div",y,[i(o,{"current-page":n.value,"onUpdate:currentPage":s[0]||(s[0]=t=>n.value=t),"page-size":r.value,"onUpdate:pageSize":s[1]||(s[1]=t=>r.value=t),layout:"prev, pager, next",total:50},null,8,["current-page","page-size"])])]),_:1},8,["code"]),s[5]||(s[5]=a("h2",{id:"complete-color-customization",tabindex:"-1"},[u("Complete Color Customization "),a("a",{class:"header-anchor",href:"#complete-color-customization","aria-label":"Permalink to “Complete Color Customization”"},"​")],-1)),i(d,{title:"Complete Color Customization",description:"Combine all color customization properties to achieve fully custom styles",code:`
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
  `.trim()},{demo:k(()=>[a("div",b,[i(o,{"current-page":l.value,"onUpdate:currentPage":s[2]||(s[2]=t=>l.value=t),"page-size":p.value,"onUpdate:pageSize":s[3]||(s[3]=t=>p.value=t),total:200,layout:"prev, pager, next, jumper",prevColor:"#6A5ACD",prevTextColor:"#FFFFFF","item-color":"#F8F9FA","item-text-color":"#495057","active-item-color":"#6A5ACD","active-item-text-color":"#FFFFFF",background:""},null,8,["current-page","page-size"])])]),_:1},8,["code"]),s[6]||(s[6]=h("",5))])}}});export{v as __pageData,f as default};

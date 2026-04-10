import{_ as l}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.Iv_XFD8t.js";import{I as o,o as g,c,a8 as y,J as n,w as k,j as s,a as u,A as e}from"./chunks/framework.DvHWw5tv.js";const m={style:{margin:"20px 0"}},z={style:{margin:"20px 0"}},B=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"plus/DataPagination.md","filePath":"plus/DataPagination.md"}'),f={name:"plus/DataPagination.md"},D=Object.assign(f,{setup(b){const t=e(1),d=e(10),p=e(5),h=e(10);return(j,i)=>{const r=o("ShowCode");return g(),c("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[4]||(i[4]=y("",4)),n(r,{title:"基础分页器",code:`
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
  `.trim()},{demo:k(()=>[s("div",m,[n(l,{"current-page":t.value,"onUpdate:currentPage":i[0]||(i[0]=a=>t.value=a),"page-size":d.value,"onUpdate:pageSize":i[1]||(i[1]=a=>d.value=a),layout:"prev, pager, next",total:50},null,8,["current-page","page-size"])])]),_:1},8,["code"]),i[5]||(i[5]=s("h3",{id:"完整颜色定制",tabindex:"-1"},[u("完整颜色定制 "),s("a",{class:"header-anchor",href:"#完整颜色定制","aria-label":"Permalink to “完整颜色定制”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"wanzhengyansedingzhi wan zheng yan se ding zhi wzysdz ")],-1)),n(r,{title:"完整颜色定制",description:"组合使用所有颜色定制属性实现完整自定义样式",code:`
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
  `.trim()},{demo:k(()=>[s("div",z,[n(l,{"current-page":p.value,"onUpdate:currentPage":i[2]||(i[2]=a=>p.value=a),"page-size":h.value,"onUpdate:pageSize":i[3]||(i[3]=a=>h.value=a),total:200,layout:"prev, pager, next, jumper","prne-color":"#6A5ACD","prne-text-color":"#FFFFFF","item-color":"#F8F9FA","item-text-color":"#495057","active-item-color":"#6A5ACD","active-item-text-color":"#FFFFFF",background:""},null,8,["current-page","page-size"])])]),_:1},8,["code"]),i[6]||(i[6]=y("",5))])}}});export{B as __pageData,D as default};

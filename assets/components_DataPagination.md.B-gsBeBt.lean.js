import{_ as h}from"./chunks/pagination.vue_vue_type_script_setup_true_lang.CIg4H4kc.js";import{x as s,I as g,c,o as y,ah as k,J as t,j as e,w as o,a as m}from"./chunks/framework.PAn8Jj8p.js";const b={style:{margin:"20px 0"}},u={style:{margin:"20px 0"}},P=JSON.parse('{"title":"Pagination","description":"","frontmatter":{},"headers":[],"relativePath":"components/DataPagination.md","filePath":"components/DataPagination.md"}'),B={name:"components/DataPagination.md"},v=Object.assign(B,{setup(A){const n=s(1),l=s(10);s(1),s(10),s(1),s(10),s(1),s(10),s(1),s(10),s(1),s(10),s(1),s(10),s(3),s(10);const d=s(5),r=s(10);return(D,i)=>{const p=g("ShowCode");return y(),c("div",null,[i[4]||(i[4]=k("",4)),t(p,{title:"基础分页器",code:`
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
  `.trim()},{demo:o(()=>[e("div",b,[t(h,{"current-page":n.value,"onUpdate:currentPage":i[0]||(i[0]=a=>n.value=a),"page-size":l.value,"onUpdate:pageSize":i[1]||(i[1]=a=>l.value=a),layout:"prev, pager, next",total:50},null,8,["current-page","page-size"])])]),_:1},8,["code"]),i[5]||(i[5]=e("h3",{id:"完整颜色定制",tabindex:"-1"},[m("完整颜色定制 "),e("a",{class:"header-anchor",href:"#完整颜色定制","aria-label":"Permalink to “完整颜色定制”"},"​")],-1)),t(p,{title:"完整颜色定制",description:"组合使用所有颜色定制属性实现完整自定义样式",code:`
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
  `.trim()},{demo:o(()=>[e("div",u,[t(h,{"current-page":d.value,"onUpdate:currentPage":i[2]||(i[2]=a=>d.value=a),"page-size":r.value,"onUpdate:pageSize":i[3]||(i[3]=a=>r.value=a),total:200,layout:"prev, pager, next, jumper","prne-color":"#6A5ACD","prne-text-color":"#FFFFFF","item-color":"#F8F9FA","item-text-color":"#495057","active-item-color":"#6A5ACD","active-item-text-color":"#FFFFFF",background:""},null,8,["current-page","page-size"])])]),_:1},8,["code"]),i[6]||(i[6]=k("",5))])}}});export{P as __pageData,v as default};

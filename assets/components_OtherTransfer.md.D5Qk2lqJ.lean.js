import{_ as d}from"./chunks/transfer.vue_vue_type_script_setup_true_lang.CZvSIjrN.js";import{I as A,o as D,c as T,a8 as f,J as i,w as r,j as e,a as s,t as B,A as n,h as V}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const P={style:{"margin-top":"16px"}},F=JSON.parse('{"title":"Transfer","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherTransfer.md","filePath":"components/OtherTransfer.md"}'),C={name:"components/OtherTransfer.md"},S=Object.assign(C,{setup(E){const o=n([1,2]),c=n([{key:1,label:"选项一",disabled:!1},{key:2,label:"选项二",disabled:!1},{key:3,label:"选项三",disabled:!1},{key:4,label:"选项四",disabled:!1},{key:5,label:"禁用选项",disabled:!0}]),u=n([2,4]),m=n([{key:1,label:"苹果",disabled:!1},{key:2,label:"香蕉",disabled:!1},{key:3,label:"橙子",disabled:!1},{key:4,label:"葡萄",disabled:!1},{key:5,label:"芒果",disabled:!1}]),k=n([1,3]),x=n([{key:1,label:"选项一",disabled:!1},{key:2,label:"选项二",disabled:!1},{key:3,label:"选项三",disabled:!1},{key:4,label:"选项四",disabled:!1}]),y=n([2,5]),j=n([{key:1,label:"项目一",disabled:!1},{key:2,label:"项目二",disabled:!1},{key:3,label:"项目三",disabled:!1},{key:4,label:"项目四",disabled:!1},{key:5,label:"项目五",disabled:!1}]),b=n([2]),z=n([{key:1,label:"可选项一",disabled:!1},{key:2,label:"可选项二",disabled:!1},{key:3,label:"禁用选项一",disabled:!0},{key:4,label:"可选项三",disabled:!1},{key:5,label:"禁用选项二",disabled:!0},{key:6,label:"可选项四",disabled:!1}]),h=n([101,103]),g=n([{key:101,label:"张三",disabled:!1},{key:102,label:"李四",disabled:!1},{key:103,label:"王五",disabled:!1},{key:104,label:"赵六",disabled:!1},{key:105,label:"钱七",disabled:!1}]),v=V(()=>g.value.filter(p=>h.value.includes(p.key)).map(p=>p.label).join(", "));return(p,a)=>{const t=A("ShowCode");return D(),T("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[6]||(a[6]=f("",6)),i(t,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['列表一', '列表二']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 2])
const data = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false },
  { key: 5, label: '禁用选项', disabled: true }
])
<\/script>
  `.trim()},{demo:r(()=>[i(d,{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value=l),data:c.value,titles:["列表一","列表二"]},null,8,["modelValue","data"])]),_:1},8,["code"]),a[7]||(a[7]=e("h3",{id:"自定义标题",tabindex:"-1"},[s("自定义标题 "),e("a",{class:"header-anchor",href:"#自定义标题","aria-label":"Permalink to “自定义标题”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyibiaoti zi ding yi biao ti zdybt ")],-1)),a[8]||(a[8]=e("p",null,[s("使用 "),e("code",null,"titles"),s(" 属性自定义左右两栏的标题。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingzidingyizuoyoulianglandebiaoti。 shi yong shu xing zi ding yi zuo you liang lan de biao ti 。 sy sxzdyzylldbt。")],-1)),i(t,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['源列表', '目标列表']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 4])
const data = ref([
  { key: 1, label: '苹果', disabled: false },
  { key: 2, label: '香蕉', disabled: false },
  { key: 3, label: '橙子', disabled: false },
  { key: 4, label: '葡萄', disabled: false },
  { key: 5, label: '芒果', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[i(d,{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=l=>u.value=l),data:m.value,titles:["源列表","目标列表"]},null,8,["modelValue","data"])]),_:1},8,["code"]),a[9]||(a[9]=e("h3",{id:"自定义颜色",tabindex:"-1"},[s("自定义颜色 "),e("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyanse zi ding yi yan se zdyys ")],-1)),a[10]||(a[10]=e("p",null,[s("使用 "),e("code",null,"backgroundColor"),s("、"),e("code",null,"colorText"),s(" 和 "),e("code",null,"hoverBackground"),s(" 属性自定义穿梭框的颜色。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong 、 he shuxingzidingyichuansuokuangdeyanse。 shi yong 、 he shu xing zi ding yi chuan suo kuang de yan se 。 sy h sxzdycskdys。")],-1)),i(t,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#f0f9ff'
    color-text='#0369a1'
    hover-background='#e0f2fe'
    :titles='['浅色主题', '浅色主题']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([1, 3])
const data = ref([
  { key: 1, label: '选项一', disabled: false },
  { key: 2, label: '选项二', disabled: false },
  { key: 3, label: '选项三', disabled: false },
  { key: 4, label: '选项四', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[i(d,{modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=l=>k.value=l),data:x.value,"background-color":"#f0f9ff","color-text":"#0369a1","hover-background":"#e0f2fe",titles:["浅色主题","浅色主题"]},null,8,["modelValue","data"])]),_:1},8,["code"]),a[11]||(a[11]=e("h3",{id:"深色主题",tabindex:"-1"},[s("深色主题 "),e("a",{class:"header-anchor",href:"#深色主题","aria-label":"Permalink to “深色主题”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shensezhuti shen se zhu ti sszt ")],-1)),a[12]||(a[12]=e("p",null,[s("使用深色背景创建深色主题的穿梭框。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshensebeijingchuangjianshensezhutidechuansuokuang。 shi yong shen se bei jing chuang jian shen se zhu ti de chuan suo kuang 。 syssbjcjssztdcsk。")],-1)),i(t,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    background-color='#1e293b'
    color-text='#f1f5f9'
    hover-background='#334155'
    :titles='['深色主题', '深色主题']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2, 5])
const data = ref([
  { key: 1, label: '项目一', disabled: false },
  { key: 2, label: '项目二', disabled: false },
  { key: 3, label: '项目三', disabled: false },
  { key: 4, label: '项目四', disabled: false },
  { key: 5, label: '项目五', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[i(d,{modelValue:y.value,"onUpdate:modelValue":a[3]||(a[3]=l=>y.value=l),data:j.value,"background-color":"#1e293b","color-text":"#f1f5f9","hover-background":"#334155",titles:["深色主题","深色主题"]},null,8,["modelValue","data"])]),_:1},8,["code"]),a[13]||(a[13]=e("h3",{id:"禁用选项",tabindex:"-1"},[s("禁用选项 "),e("a",{class:"header-anchor",href:"#禁用选项","aria-label":"Permalink to “禁用选项”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongxuanxiang jin yong xuan xiang jyxx ")],-1)),a[14]||(a[14]=e("p",null,[s("数据中包含禁用选项，用户无法选择或移动这些选项。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shujuzhongbaohanjinyongxuanxiang，yonghuwufaxuanzehuoyidongzhexiexuanxiang。 shu ju zhong bao han jin yong xuan xiang ， yong hu wu fa xuan ze huo yi dong zhe xie xuan xiang 。 sjzbhjyxx，yhwfxzhydzxxx。")],-1)),i(t,{title:"代码演示",code:`
<template>
  <MYTransfer 
    v-model='value'
    :data='data'
    :titles='['可选列表', '已选列表']'
  />
</template>
<script setup>
import { ref } from 'vue'
const value = ref([2])
const data = ref([
  { key: 1, label: '可选项一', disabled: false },
  { key: 2, label: '可选项二', disabled: false },
  { key: 3, label: '禁用选项一', disabled: true },
  { key: 4, label: '可选项三', disabled: false },
  { key: 5, label: '禁用选项二', disabled: true },
  { key: 6, label: '可选项四', disabled: false }
])
<\/script>
  `.trim()},{demo:r(()=>[i(d,{modelValue:b.value,"onUpdate:modelValue":a[4]||(a[4]=l=>b.value=l),data:z.value,titles:["可选列表","已选列表"]},null,8,["modelValue","data"])]),_:1},8,["code"]),a[15]||(a[15]=e("h3",{id:"动态数据",tabindex:"-1"},[s("动态数据 "),e("a",{class:"header-anchor",href:"#动态数据","aria-label":"Permalink to “动态数据”"},"​"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"dongtaishuju dong tai shu ju dtsj ")],-1)),a[16]||(a[16]=e("p",null,[s("结合动态数据源创建穿梭框。"),e("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jiehedongtaishujuyuanchuangjianchuansuokuang。 jie he dong tai shu ju yuan chuang jian chuan suo kuang 。 jhdtsjycjcsk。")],-1)),i(t,{title:"代码演示",code:`
<template>
  <div>
    <MYTransfer 
      v-model='selectedUsers'
      :data='users'
      :titles='['所有用户', '已选用户']'
    />
    <div style='margin-top: 16px;'>
      <p>已选择用户: {{ selectedUsersLabels }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
const selectedUsers = ref([101, 103])
const users = ref([
  { key: 101, label: '张三', disabled: false },
  { key: 102, label: '李四', disabled: false },
  { key: 103, label: '王五', disabled: false },
  { key: 104, label: '赵六', disabled: false },
  { key: 105, label: '钱七', disabled: false }
])
const selectedUsersLabels = computed(() => {
  return users.value
    .filter(user => selectedUsers.value.includes(user.key))
    .map(user => user.label)
    .join(', ')
})
<\/script>
  `.trim()},{demo:r(()=>[e("div",null,[i(d,{modelValue:h.value,"onUpdate:modelValue":a[5]||(a[5]=l=>h.value=l),data:g.value,titles:["所有用户","已选用户"]},null,8,["modelValue","data"]),e("div",P,[e("p",null,"已选择用户: "+B(v.value),1)])])]),_:1},8,["code"]),a[17]||(a[17]=f("",5))])}}});export{F as __pageData,S as default};

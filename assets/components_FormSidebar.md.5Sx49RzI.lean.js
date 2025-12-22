import{x as o,h as P,d as M,p as N,s as w,c as S,o as B,O as C,n as z,k,j as a,$ as E,e as T,t as F,I as Y,ah as D,J as d,w as b,a as s}from"./chunks/framework.D3tsReks.js";const U={size:{type:String},thumbColor:{type:String},trackColor:{type:String},disabled:{type:Boolean,default:!1},noNum:{type:Boolean,default:!1},modelValue:{type:[String,Number],default:""}};function I(t,c){const n=o(1),u=o(0),h=o(null);let p=!1;(()=>{if(t.modelValue!==""&&t.modelValue!==void 0){const i=typeof t.modelValue=="string"?parseFloat(t.modelValue):t.modelValue;isNaN(i)||(n.value=i,u.value=i)}})();const f=P(()=>({width:t.size||"100%",maxWidth:t.size?"none":"320px"})),m=i=>{if(!h.value||t.disabled)return;const y=h.value.getBoundingClientRect();let v=(i-y.left)/y.width*100;v=Math.max(0,Math.min(100,v)),u.value=v,n.value=Math.round(v);const x=typeof t.modelValue=="string"?String(n.value):n.value;c("update:modelValue",x)};return{num:n,progressWidth:u,track:h,containerStyle:f,startDrag:i=>{t.disabled||(p=!0,m(i.clientX))},onMouseMove:i=>{!p||t.disabled||m(i.clientX)},stopDrag:()=>{p=!1}}}const _={key:0,class:"slider-value"},L="#e0e0e0",A="#42b983",g=M({name:"MYSlidebar",__name:"slidebar",props:U,emits:["update:modelValue"],setup(t,{emit:c}){const n=t,u=c,{num:h,progressWidth:p,track:V,containerStyle:f,startDrag:m,onMouseMove:e,stopDrag:r}=I(n,u);return N(()=>{window.addEventListener("mousemove",e),window.addEventListener("mouseup",r)}),w(()=>{window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",r)}),(l,i)=>(B(),S("div",{class:z(["slider-container",{disabled:l.disabled}]),style:C(k(f))},[a("div",{ref_key:"track",ref:V,class:"slider-track",style:C({background:n.trackColor||L}),onMousedown:i[1]||(i[1]=(...y)=>k(m)&&k(m)(...y))},[a("div",{class:"slider-progress",style:C({width:k(p)+"%",background:n.thumbColor||A})},null,4),a("div",{class:"slider-thumb",style:C({left:k(p)+"%",borderColor:n.thumbColor||A}),onMousedown:i[0]||(i[0]=E((...y)=>k(m)&&k(m)(...y),["stop"]))},[l.noNum?T("",!0):(B(),S("span",_,F(k(h)),1))],36)],36)],6))}}),W=JSON.parse('{"title":"Slidebar","description":"","frontmatter":{},"headers":[],"relativePath":"components/FormSidebar.md","filePath":"components/FormSidebar.md"}'),O={name:"components/FormSidebar.md"},j=Object.assign(O,{setup(t){const c=o(0),n=o(0),u=o(0),h=o(0),p=o(0),V=o(0),f=o(0);return(m,e)=>{const r=Y("ShowCode");return B(),S("div",null,[e[7]||(e[7]=D("",5)),d(r,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue1' />
</template>
  `.trim()},{demo:b(()=>[d(g,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l)},null,8,["modelValue"])]),_:1},8,["code"]),e[8]||(e[8]=a("h2",{id:"自定义滑块颜色",tabindex:"-1"},[s("自定义滑块颜色 "),a("a",{class:"header-anchor",href:"#自定义滑块颜色","aria-label":"Permalink to “自定义滑块颜色”"},"​")],-1)),e[9]||(e[9]=a("p",null,[s("使用"),a("code",null,"thumbColor"),s("属性可以自定义滑块的颜色。")],-1)),d(r,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue2' thumbColor='#ff0000' />
</template>
  `.trim()},{demo:b(()=>[d(g,{modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value=l),thumbColor:"#ff0000"},null,8,["modelValue"])]),_:1},8,["code"]),e[10]||(e[10]=a("h2",{id:"自定义轨道颜色",tabindex:"-1"},[s("自定义轨道颜色 "),a("a",{class:"header-anchor",href:"#自定义轨道颜色","aria-label":"Permalink to “自定义轨道颜色”"},"​")],-1)),e[11]||(e[11]=a("p",null,[s("使用"),a("code",null,"trackColor"),s("属性可以自定义轨道的颜色。")],-1)),d(r,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue3' trackColor='#00ff00' />
</template>
  `.trim()},{demo:b(()=>[d(g,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=l=>u.value=l),trackColor:"#00ff00"},null,8,["modelValue"])]),_:1},8,["code"]),e[12]||(e[12]=a("h2",{id:"禁用状态",tabindex:"-1"},[s("禁用状态 "),a("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[13]||(e[13]=a("p",null,[s("使用"),a("code",null,"disabled"),s("属性可以禁用滑动条。")],-1)),d(r,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue4' disabled />
</template>
  `.trim()},{demo:b(()=>[d(g,{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=l=>h.value=l),disabled:""},null,8,["modelValue"])]),_:1},8,["code"]),e[14]||(e[14]=a("h2",{id:"隐藏数值",tabindex:"-1"},[s("隐藏数值 "),a("a",{class:"header-anchor",href:"#隐藏数值","aria-label":"Permalink to “隐藏数值”"},"​")],-1)),e[15]||(e[15]=a("p",null,[s("使用"),a("code",null,"noNum"),s("属性可以隐藏滑动条的数值显示。")],-1)),d(r,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue5' noNum />
</template>
  `.trim()},{demo:b(()=>[d(g,{modelValue:p.value,"onUpdate:modelValue":e[4]||(e[4]=l=>p.value=l),noNum:""},null,8,["modelValue"])]),_:1},8,["code"]),e[16]||(e[16]=a("h2",{id:"自定义尺寸",tabindex:"-1"},[s("自定义尺寸 "),a("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[17]||(e[17]=a("p",null,[s("使用"),a("code",null,"size"),s("属性可以自定义滑动条的尺寸。")],-1)),d(r,{title:"代码演示",code:`
<template>
    <MYSlidebar v-model='sliderValue6' size='500px' />
</template>
  `.trim()},{demo:b(()=>[d(g,{modelValue:V.value,"onUpdate:modelValue":e[5]||(e[5]=l=>V.value=l),size:"500px"},null,8,["modelValue"])]),_:1},8,["code"]),e[18]||(e[18]=a("h2",{id:"组合使用",tabindex:"-1"},[s("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),e[19]||(e[19]=a("p",null,"最后，实现个多种api组合使用实现个滑动条：",-1)),d(r,{title:"代码演示",code:`
<template>
    <MYSlidebar 
        v-model='sliderValue7' 
        size='400px'
        thumbColor='#8d4dd1'
        trackColor='#e6f3ff'
        noNum
    />
</template>
  `.trim()},{demo:b(()=>[d(g,{modelValue:f.value,"onUpdate:modelValue":e[6]||(e[6]=l=>f.value=l),size:"400px",thumbColor:"#8d4dd1",trackColor:"#e6f3ff",noNum:""},null,8,["modelValue"])]),_:1},8,["code"]),e[20]||(e[20]=D("",5))])}}});export{W as __pageData,j as default};

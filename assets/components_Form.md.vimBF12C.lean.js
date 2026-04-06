import{h as O,y as D,d as N,W as ae,aq as M,ar as se,o as T,c as _,$ as ie,k as R,O as le,n as J,r as L,p as te,Z as re,N as ne,t as $,e as W,j as p,I as de,ah as j,J as a,w as s,a as l}from"./chunks/framework.DoR57c7M.js";import{u as oe}from"./chunks/useClassComputed.DlyVcdbE.js";import{_ as y}from"./chunks/input.vue_vue_type_script_setup_true_lang.nIyxLZrC.js";import{_ as C}from"./chunks/button.vue_vue_type_script_setup_true_lang.CEidBzRJ.js";import{_ as pe}from"./chunks/switch.vue_vue_type_script_setup_true_lang.G63e0_GB.js";import{_ as x,a as I}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.Y6z3EImt.js";import{a as me,_ as w}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.QLhDnxin.js";import"./chunks/useStyleComputed.DokJCVvp.js";import"./chunks/useColorUtils.90VENGfc.js";function he(r){return{all:r=r||new Map,on:function(n,d){var t=r.get(n);t?t.push(d):r.set(n,[d])},off:function(n,d){var t=r.get(n);t&&(d?t.splice(t.indexOf(d)>>>0,1):r.set(n,[]))},emit:function(n,d){var t=r.get(n);t&&t.slice().map(function(f){f(d)}),(t=r.get("*"))&&t.slice().map(function(f){f(n,d)})}}}function ke(r,n){const d=D(),t=he(),f=O(()=>r.labelWidth==="auto"?"auto":`${r.labelWidth}`);async function u(o,h,F){if(o.required&&(h===""||h===void 0||h===null))throw new Error(o.message||`${F} is required`);if(o.len!==void 0&&(typeof h=="string"||Array.isArray(h))&&h.length!==o.len)throw new Error(o.message||`${F} length must be ${o.len}`);if(o.validator&&!await o.validator(o,h))throw new Error(o.message||`${F} validate failed`)}async function c(o,h="submit"){const F=r.rules?.[o];if(!F)return!0;const U=r.modelValue[o];for(const B of F)(B.trigger?Array.isArray(B.trigger)?B.trigger:[B.trigger]:["blur","change","submit"]).includes(h)&&await u(B,U,o);return!0}async function k(){const o=Object.keys(r.rules||{});for(const h of o)await c(h,"submit");return n("validate",!0),!0}function b(){const o={};Object.keys(r.modelValue).forEach(h=>o[h]=""),n("update:modelValue",o),V(),n("reset-fields")}function V(o){t.emit("clear-validate",o),n("clear-validate",o)}return{formRef:d,labelWidth:f,validateField:c,validate:k,resetFields:b,clearValidate:V,emitter:t}}const Z={modelValue:{type:Object,required:!0,default:()=>({})},rules:{type:Object,default:()=>({})},labelWidth:{type:[String,Number],default:"auto"},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},Y=N({name:"MYForm",__name:"form",props:Z,emits:["update:modelValue","validate","reset-fields","clear-validate"],setup(r,{expose:n,emit:d}){const t=r,f=d,{formRef:u,labelWidth:c,validate:k,validateField:b,resetFields:V,clearValidate:o,emitter:h}=ke(t,f),F=oe({baseClass:"my-form",propClasses:{size:t.size,inline:String(t.inline)},flagClasses:{disabled:t.disabled}});return ae("form",M({...se(t),validate:k,validateField:b,resetFields:V,clearValidate:o,emitter:h})),n({validate:k,resetFields:V,clearValidate:o}),(U,B)=>(T(),_("form",{ref_key:"formRef",ref:u,class:J(R(F)),style:le({"--label-width":R(c)}),onSubmit:B[0]||(B[0]=ie((...E)=>R(k)&&R(k)(...E),["prevent"]))},[L(U.$slots,"default")],38))}}),ue=()=>({}),ge=()=>({}),fe=r=>r?Object.values(r).every(n=>Array.isArray(n)?n.length>0&&n.every(d=>typeof d=="object"&&d!==null&&("required"in d||"validator"in d||"message"in d)):!1):!0,be={...Z,label:{type:String,default:""},prop:{type:String,default:""},validateTrigger:{type:String,default:"blur"},modelValue:{type:Object,default:ue},rules:{type:Object,default:ge,validator:fe},labelWidth:{type:String,default:""},size:{type:String,default:"medium"},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}};function ye(r,n){const d=D(),t=D("");async function f(k){if(r.prop)try{await n.validateField(r.prop,k),t.value=""}catch(b){b instanceof Error?t.value=b.message:typeof b=="string"?t.value=b:t.value="Validation failed"}}function u(){const k=d.value?.querySelector("input, textarea, select");k&&(r.validateTrigger==="blur"&&k.addEventListener("blur",()=>f("blur")),r.validateTrigger==="change"&&k.addEventListener("change",()=>f("change")))}te(()=>{u(),n.emitter.on("clear-validate",k=>{(!k||k===r.prop)&&(t.value="")})}),re(()=>{n.emitter.off("clear-validate")});const c=O(()=>["my-form-item",t.value&&"error"].filter(Boolean).join(" "));return{formItemRef:d,errorMessage:t,formItemClass:c}}const ce={key:0,class:"my-form-item__label"},De={class:"my-form-item__control"},Fe={key:0,class:"my-form-item__error"},m=N({name:"MYFormItem",__name:"formItem",props:be,setup(r){const n=ne("form"),d=r,{formItemRef:t,errorMessage:f,formItemClass:u}=ye(d,n);return(c,k)=>(T(),_("div",{ref_key:"formItemRef",ref:t,class:J(R(u))},[c.label?(T(),_("label",ce,$(c.label),1)):W("",!0),p("div",De,[L(c.$slots,"default"),R(f)?(T(),_("div",Fe,$(R(f)),1)):W("",!0)])],2))}}),Ie=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/Form.md","filePath":"components/Form.md"}'),Be={name:"components/Form.md"},Pe=Object.assign(Be,{setup(r){const n=D(),d=M({username:""}),t={username:[{required:!0,message:"用户名不能为空"}]},f=D(),u=M({username:"",enabled:!1,gender:"1",hobbies:[]}),c={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}],hobbies:[{required:!0,message:"请选择至少一个兴趣爱好"}]},k=D(),b=M({username:"",email:""}),V={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},o=D(),h=M({username:"",email:""}),F={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},U=D(),B=D(),E=M({username:""}),q=M({username:""}),z={username:[{required:!0,message:"用户名不能为空"}]},G=D(),P=M({username:"",email:""}),H={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},K=D(),S=M({username:"",gender:""}),Q={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}]},X=D(),v=M({username:"",email:"",gender:""}),ee={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}],gender:[{required:!0,message:"请选择性别"}]};return(g,e)=>{const A=de("ShowCode");return T(),_("div",null,[e[34]||(e[34]=j("",5)),a(A,{title:"代码演示",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>重置</MYButton>
            <MYButton type='primary' @click='handleSubmit'>提交</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef1",ref:n,modelValue:d,rules:t,"onUpdate:modelValue":g.handleFormUpdate1},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(y,{modelValue:d.username,"onUpdate:modelValue":e[0]||(e[0]=i=>d.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(C,{type:"info",onClick:g.handleReset1},{default:s(()=>[...e[18]||(e[18]=[l("重置",-1)])]),_:1},8,["onClick"]),a(C,{type:"primary",onClick:g.handleSubmit1},{default:s(()=>[...e[19]||(e[19]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[35]||(e[35]=p("h2",{id:"多种表单控件",tabindex:"-1"},[l("多种表单控件 "),p("a",{class:"header-anchor",href:"#多种表单控件","aria-label":"Permalink to “多种表单控件”"},"​")],-1)),e[36]||(e[36]=p("p",null,"表单支持多种控件类型，包括输入框、开关、单选框、复选框等。",-1)),a(A,{title:"代码演示",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item label='是否启用' prop='enabled'>
            <MYSwitch v-model='formData.enabled' />
        </MYForm-item>
        <MYForm-item label='性别' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>男</MYRadio>
                <MYRadio value='2'>女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item label='兴趣爱好' prop='hobbies'>
            <MYCheckbox-group v-model='formData.hobbies'>
                <MYCheckbox value='reading'>阅读</MYCheckbox>
                <MYCheckbox value='gaming'>游戏</MYCheckbox>
                <MYCheckbox value='coding'>编程</MYCheckbox>
            </MYCheckbox-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>重置</MYButton>
            <MYButton type='primary' @click='handleSubmit'>提交</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef2",ref:f,modelValue:u,rules:c,"onUpdate:modelValue":g.handleFormUpdate2},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(y,{modelValue:u.username,"onUpdate:modelValue":e[1]||(e[1]=i=>u.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"是否启用",prop:"enabled"},{default:s(()=>[a(pe,{modelValue:u.enabled,"onUpdate:modelValue":e[2]||(e[2]=i=>u.enabled=i)},null,8,["modelValue"])]),_:1}),a(m,{label:"性别",prop:"gender"},{default:s(()=>[a(x,{modelValue:u.gender,"onUpdate:modelValue":e[3]||(e[3]=i=>u.gender=i)},{default:s(()=>[a(I,{value:"1"},{default:s(()=>[...e[20]||(e[20]=[l("男",-1)])]),_:1}),a(I,{value:"2"},{default:s(()=>[...e[21]||(e[21]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"兴趣爱好",prop:"hobbies"},{default:s(()=>[a(me,{modelValue:u.hobbies,"onUpdate:modelValue":e[4]||(e[4]=i=>u.hobbies=i)},{default:s(()=>[a(w,{value:"reading"},{default:s(()=>[...e[22]||(e[22]=[l("阅读",-1)])]),_:1}),a(w,{value:"gaming"},{default:s(()=>[...e[23]||(e[23]=[l("游戏",-1)])]),_:1}),a(w,{value:"coding"},{default:s(()=>[...e[24]||(e[24]=[l("编程",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(C,{type:"info",onClick:g.handleReset2},{default:s(()=>[...e[25]||(e[25]=[l("重置",-1)])]),_:1},8,["onClick"]),a(C,{type:"primary",onClick:g.handleSubmit2},{default:s(()=>[...e[26]||(e[26]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[37]||(e[37]=p("h2",{id:"行内布局",tabindex:"-1"},[l("行内布局 "),p("a",{class:"header-anchor",href:"#行内布局","aria-label":"Permalink to “行内布局”"},"​")],-1)),e[38]||(e[38]=p("p",null,[l("使用"),p("code",null,"inline"),l("属性可以设置表单为行内布局。")],-1)),a(A,{title:"代码演示",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' inline>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='用户名' />
        </MYForm-item>
        <MYForm-item label='邮箱' prop='email'>
            <MYInput v-model='formData.email' placeholder='邮箱' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='primary' @click='handleSubmit'>查询</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef3",ref:k,modelValue:b,rules:V,inline:"","onUpdate:modelValue":g.handleFormUpdate3},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(y,{modelValue:b.username,"onUpdate:modelValue":e[5]||(e[5]=i=>b.username=i),placeholder:"用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"邮箱",prop:"email"},{default:s(()=>[a(y,{modelValue:b.email,"onUpdate:modelValue":e[6]||(e[6]=i=>b.email=i),placeholder:"邮箱"},null,8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(C,{type:"primary",onClick:g.handleSubmit3},{default:s(()=>[...e[27]||(e[27]=[l("查询",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[39]||(e[39]=p("h2",{id:"自定义标签宽度",tabindex:"-1"},[l("自定义标签宽度 "),p("a",{class:"header-anchor",href:"#自定义标签宽度","aria-label":"Permalink to “自定义标签宽度”"},"​")],-1)),e[40]||(e[40]=p("p",null,[l("使用"),p("code",null,"labelWidth"),l("属性可以自定义标签的宽度。")],-1)),a(A,{title:"代码演示",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' labelWidth='120px'>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item label='邮箱地址' prop='email'>
            <MYInput v-model='formData.email' placeholder='请输入邮箱' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef4",ref:o,modelValue:h,rules:F,labelWidth:"120px","onUpdate:modelValue":g.handleFormUpdate4},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(y,{modelValue:h.username,"onUpdate:modelValue":e[7]||(e[7]=i=>h.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"邮箱地址",prop:"email"},{default:s(()=>[a(y,{modelValue:h.email,"onUpdate:modelValue":e[8]||(e[8]=i=>h.email=i),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[41]||(e[41]=p("h2",{id:"不同尺寸",tabindex:"-1"},[l("不同尺寸 "),p("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),e[42]||(e[42]=p("p",null,[l("使用"),p("code",null,"size"),l("属性可以设置表单的尺寸。")],-1)),a(A,{title:"代码演示",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='small'>
        <MYForm-item label='小尺寸表单' prop='username'>
            <MYInput v-model='formData.username' placeholder='小尺寸' />
        </MYForm-item>
    </MYForm>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='large' style='margin-top: 20px'>
        <MYForm-item label='大尺寸表单' prop='username'>
            <MYInput v-model='formData.username' placeholder='大尺寸' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef5",ref:U,modelValue:E,rules:z,size:"small","onUpdate:modelValue":g.handleFormUpdate5},{default:s(()=>[a(m,{label:"小尺寸表单",prop:"username"},{default:s(()=>[a(y,{modelValue:E.username,"onUpdate:modelValue":e[9]||(e[9]=i=>E.username=i),placeholder:"小尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),a(Y,{ref_key:"formRef6",ref:B,modelValue:q,rules:z,size:"large",style:{"margin-top":"20px"},"onUpdate:modelValue":g.handleFormUpdate6},{default:s(()=>[a(m,{label:"大尺寸表单",prop:"username"},{default:s(()=>[a(y,{modelValue:q.username,"onUpdate:modelValue":e[10]||(e[10]=i=>q.username=i),placeholder:"大尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[43]||(e[43]=p("h2",{id:"验证触发器",tabindex:"-1"},[l("验证触发器 "),p("a",{class:"header-anchor",href:"#验证触发器","aria-label":"Permalink to “验证触发器”"},"​")],-1)),e[44]||(e[44]=p("p",null,[l("使用"),p("code",null,"validateTrigger"),l("属性可以设置验证触发的时机。")],-1)),a(A,{title:"代码演示",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='实时验证' prop='username' validateTrigger='change'>
            <MYInput v-model='formData.username' placeholder='输入时实时验证' />
        </MYForm-item>
        <MYForm-item label='失焦验证' prop='email' validateTrigger='blur'>
            <MYInput v-model='formData.email' placeholder='失焦时验证' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef7",ref:G,modelValue:P,rules:H,"onUpdate:modelValue":g.handleFormUpdate7},{default:s(()=>[a(m,{label:"实时验证",prop:"username",validateTrigger:"change"},{default:s(()=>[a(y,{modelValue:P.username,"onUpdate:modelValue":e[11]||(e[11]=i=>P.username=i),placeholder:"输入时实时验证"},null,8,["modelValue"])]),_:1}),a(m,{label:"失焦验证",prop:"email",validateTrigger:"blur"},{default:s(()=>[a(y,{modelValue:P.email,"onUpdate:modelValue":e[12]||(e[12]=i=>P.email=i),placeholder:"失焦时验证"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[45]||(e[45]=p("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),p("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[46]||(e[46]=p("p",null,[l("使用"),p("code",null,"disabled"),l("属性可以禁用整个表单。")],-1)),a(A,{title:"代码演示",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' disabled>
        <MYForm-item label='用户名' prop='username'>
            <MYInput v-model='formData.username' placeholder='禁用状态' />
        </MYForm-item>
        <MYForm-item label='性别' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>男</MYRadio>
                <MYRadio value='2'>女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef8",ref:K,modelValue:S,rules:Q,disabled:"","onUpdate:modelValue":g.handleFormUpdate8},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(y,{modelValue:S.username,"onUpdate:modelValue":e[13]||(e[13]=i=>S.username=i),placeholder:"禁用状态"},null,8,["modelValue"])]),_:1}),a(m,{label:"性别",prop:"gender"},{default:s(()=>[a(x,{modelValue:S.gender,"onUpdate:modelValue":e[14]||(e[14]=i=>S.gender=i)},{default:s(()=>[a(I,{value:"1"},{default:s(()=>[...e[28]||(e[28]=[l("男",-1)])]),_:1}),a(I,{value:"2"},{default:s(()=>[...e[29]||(e[29]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[47]||(e[47]=p("h2",{id:"组合使用",tabindex:"-1"},[l("组合使用 "),p("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),e[48]||(e[48]=p("p",null,"最后，实现个多种api组合使用实现个完整表单：",-1)),a(A,{title:"代码演示",code:`
<template>
    <MYForm 
        ref='formRef' 
        v-model='formData' 
        :rules='rules'
        labelWidth='100px'
        size='medium'
        inline
    >
        <MYForm-item label='用户名' prop='username' validateTrigger='blur'>
            <MYInput v-model='formData.username' placeholder='请输入用户名' />
        </MYForm-item>
        <MYForm-item label='邮箱' prop='email' validateTrigger='change'>
            <MYInput v-model='formData.email' placeholder='请输入邮箱' />
        </MYForm-item>
        <MYForm-item label='性别' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>男</MYRadio>
                <MYRadio value='2'>女</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>重置</MYButton>
            <MYButton type='primary' @click='handleSubmit'>提交</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(Y,{ref_key:"formRef9",ref:X,modelValue:v,rules:ee,labelWidth:"100px",size:"medium",inline:"","onUpdate:modelValue":g.handleFormUpdate9},{default:s(()=>[a(m,{label:"用户名",prop:"username",validateTrigger:"blur"},{default:s(()=>[a(y,{modelValue:v.username,"onUpdate:modelValue":e[15]||(e[15]=i=>v.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"邮箱",prop:"email",validateTrigger:"change"},{default:s(()=>[a(y,{modelValue:v.email,"onUpdate:modelValue":e[16]||(e[16]=i=>v.email=i),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),a(m,{label:"性别",prop:"gender"},{default:s(()=>[a(x,{modelValue:v.gender,"onUpdate:modelValue":e[17]||(e[17]=i=>v.gender=i)},{default:s(()=>[a(I,{value:"1"},{default:s(()=>[...e[30]||(e[30]=[l("男",-1)])]),_:1}),a(I,{value:"2"},{default:s(()=>[...e[31]||(e[31]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(C,{type:"info",onClick:g.handleReset9},{default:s(()=>[...e[32]||(e[32]=[l("重置",-1)])]),_:1},8,["onClick"]),a(C,{type:"primary",onClick:g.handleSubmit9},{default:s(()=>[...e[33]||(e[33]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[49]||(e[49]=j("",9))])}}});export{Ie as __pageData,Pe as default};

import{u as J}from"./chunks/useClassComputed.DNrZSa4y.js";import{h as j,y as F,d as Z,W as $,aq as v,ar as le,o as q,c as w,O as G,k as T,n as H,r as K,p as te,Z as re,R as ne,N as de,t as N,e as O,j as o,I as oe,ah as L,J as a,w as s,a as d}from"./chunks/framework.BzrxsKI0.js";import{_ as c}from"./chunks/input.vue_vue_type_script_setup_true_lang.CSPT8jcK.js";import{_ as I}from"./chunks/button.vue_vue_type_script_setup_true_lang.BBsABRbJ.js";import{_ as pe}from"./chunks/switch.vue_vue_type_script_setup_true_lang.CRArmk8g.js";import{_ as z,a as S}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.B_bTGj6k.js";import{a as me,_ as W}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.C5M3o0l5.js";import"./chunks/useStyleComputed.BVjmiXVX.js";import"./chunks/useColorUtils.BI8puWKr.js";function he(i){return{all:i=i||new Map,on:function(l,r){var n=i.get(l);n?n.push(r):i.set(l,[r])},off:function(l,r){var n=i.get(l);n&&(r?n.splice(n.indexOf(r)>>>0,1):i.set(l,[]))},emit:function(l,r){var n=i.get(l);n&&n.slice().map(function(u){u(r)}),(n=i.get("*"))&&n.slice().map(function(u){u(l,r)})}}}function ue(i,l){const r=F(),n=j(()=>i.labelWidth==="auto"?"auto":i.labelWidth?.toString()||"auto");async function u(p){if(!i.rules||!i.rules[p])return!0;const b=i.rules[p],k=i.modelValue[p];for(const C of b)if(typeof C=="object"){const{required:Y,message:B,validator:U,len:_}=C;if(Y&&(k==null||k===""))throw new Error(B||`${p} is required`);if(_!==void 0&&k!==void 0&&k!==null&&typeof k=="string"&&k.length!==_)throw new Error(B||`${p} length must be ${_}`);if(U&&!await U(C,k))throw new Error(B||`${p} validation failed`)}return!0}async function h(){const p=Object.keys(i.rules||{}).map(b=>u(b));return await Promise.all(p),l("validate",!0),!0}function M(){const b={...i.modelValue};Object.keys(b).forEach(A=>{b[A]=""}),l("update:modelValue",b),f(),l("reset-fields")}const D=he();function f(p){D.emit("clear-validate",p),l("clear-validate",p)}return{formRef:r,labelWidth:n,validateField:u,validate:h,resetFields:M,clearValidate:f,formContext:{validate:h,resetFields:M,clearValidate:f},emitter:D}}const ke=()=>({}),fe=()=>({}),ge=i=>i?Object.values(i).every(l=>Array.isArray(l)&&l.every(r=>typeof r=="object")):!0,be=i=>typeof i=="string"?i==="auto"||!isNaN(Number(i)):!0,Q={modelValue:{type:Object,default:ke,required:!0},rules:{type:Object,default:fe,validator:ge},labelWidth:{type:[String,Number],default:"auto",validator:be},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},V=Z({name:"MYForm",__name:"form",props:Q,emits:["update:modelValue","validate","validate-field","reset-fields","clear-validate"],setup(i,{expose:l,emit:r}){const n=i,u=r,{formRef:h,labelWidth:M,validateField:D,validate:f,resetFields:g,clearValidate:p,formContext:b,emitter:A}=ue(n,u),k=(Y,B)=>{const U={...n.modelValue,[Y]:B};u("update:modelValue",U)},C=J({baseClass:"my-form",propClasses:{size:n.size&&["large","medium","small","mini"].includes(n.size)?n.size:void 0,inline:String(n.inline)},flagClasses:{disabled:n.disabled}});return $("myFormContext",b),l({validate:f,resetFields:g,clearValidate:p}),$("form",v({...le(n),emit:u,formRef:h,validate:f,validateField:D,resetFields:g,clearValidate:p,emitter:A,formClass:C,updateFieldValue:k})),(Y,B)=>(q(),w("form",{ref_key:"formRef",ref:h,class:H(T(C)),style:G({"--label-width":T(M)})},[K(Y.$slots,"default")],6))}}),ye=()=>({}),ce=()=>({}),Fe=i=>i?Object.values(i).every(l=>Array.isArray(l)?l.length>0&&l.every(r=>typeof r=="object"&&r!==null&&("required"in r||"validator"in r||"message"in r)):!1):!0,De={...Q,label:{type:String,default:""},prop:{type:String,default:""},validateTrigger:{type:String,default:"blur"},modelValue:{type:Object,default:ye},rules:{type:Object,default:ce,validator:Fe},labelWidth:{type:String,default:""},size:{type:String,default:"medium"},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}};function Me(i,l){const r=F(),n=F(""),u=j(()=>l?.labelWidth==="auto"?"auto":`${l?.labelWidth}px`);async function h(){if(!i.prop)return;const p=(l.modelValue||{})[i.prop],A=(l.rules?.[i.prop]||[]).some(k=>k.required);if((p==null||p==="")&&!A)return n.value="",!0;try{return await l?.validateField?.(i.prop),n.value="",!0}catch(k){return k instanceof Error&&(n.value=k.message||"Validation error"),!1}}function M(){ne(()=>{const g=r.value?.querySelector("input, select, textarea, .my-input");g&&(i.validateTrigger==="blur"||i.validateTrigger==="change")&&g.addEventListener(i.validateTrigger,h)})}const D=J({baseClass:"my-form-item",propClasses:{size:i.size,inline:l.inline?"true":void 0},flagClasses:{disabled:i.disabled,error:!!n.value}}),f=j(()=>D.value.join(" "));return te(()=>{l?.emitter?.on("clear-validate",g=>{(!g||g===i.prop)&&(n.value="")})}),re(()=>{const g=r.value?.querySelector("input, select, textarea, .my-input");if(g){const p=i.validateTrigger==="blur"?"blur":"change";g.removeEventListener(p,h)}l?.emitter?.off("clear-validate")}),{formItemRef:r,errorMessage:n,labelWidth:u,validateField:h,attachTrigger:M,formItemClass:f}}const Be=["for"],ve={class:"my-form-item__control"},Ye={key:0,class:"my-form-item__error"},m=Z({name:"MYForm-item",__name:"formItem",props:De,setup(i){const l=de("form");if(!l)throw new Error("FormItem must be used inside Form component");const r=i,{formItemRef:n,errorMessage:u,labelWidth:h,formItemClass:M,attachTrigger:D}=Me(r,l);return D(),D(),(f,g)=>(q(),w("div",{ref_key:"formItemRef",ref:n,class:H(T(M))},[r.label?(q(),w("label",{key:0,for:r.prop,class:"my-form-item__label",style:G({width:T(h)})},N(r.label),13,Be)):O("",!0),o("div",ve,[K(f.$slots,"default"),T(u)?(q(),w("div",Ye,N(T(u)),1)):O("",!0)])],2))}}),_e=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/Form.md","filePath":"components/Form.md"}'),Ve={name:"components/Form.md"},xe=Object.assign(Ve,{setup(i){const l=F(),r=v({username:""}),n={username:[{required:!0,message:"用户名不能为空"}]},u=F(),h=v({username:"",enabled:!1,gender:"1",hobbies:[]}),M={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}],hobbies:[{required:!0,message:"请选择至少一个兴趣爱好"}]},D=F(),f=v({username:"",email:""}),g={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},p=F(),b=v({username:"",email:""}),A={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},k=F(),C=F(),Y=v({username:""}),B=v({username:""}),U={username:[{required:!0,message:"用户名不能为空"}]},_=F(),P=v({username:"",email:""}),X={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},ee=F(),x=v({username:"",gender:""}),ae={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}]},se=F(),E=v({username:"",email:"",gender:""}),ie={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}],gender:[{required:!0,message:"请选择性别"}]};return(y,e)=>{const R=oe("ShowCode");return q(),w("div",null,[e[34]||(e[34]=L("",5)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef1",ref:l,modelValue:r,rules:n,"onUpdate:modelValue":y.handleFormUpdate1},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(c,{modelValue:r.username,"onUpdate:modelValue":e[0]||(e[0]=t=>r.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(I,{type:"info",onClick:y.handleReset1},{default:s(()=>[...e[18]||(e[18]=[d("重置",-1)])]),_:1},8,["onClick"]),a(I,{type:"primary",onClick:y.handleSubmit1},{default:s(()=>[...e[19]||(e[19]=[d("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[35]||(e[35]=o("h2",{id:"多种表单控件",tabindex:"-1"},[d("多种表单控件 "),o("a",{class:"header-anchor",href:"#多种表单控件","aria-label":"Permalink to “多种表单控件”"},"​")],-1)),e[36]||(e[36]=o("p",null,"表单支持多种控件类型，包括输入框、开关、单选框、复选框等。",-1)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef2",ref:u,modelValue:h,rules:M,"onUpdate:modelValue":y.handleFormUpdate2},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(c,{modelValue:h.username,"onUpdate:modelValue":e[1]||(e[1]=t=>h.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"是否启用",prop:"enabled"},{default:s(()=>[a(pe,{modelValue:h.enabled,"onUpdate:modelValue":e[2]||(e[2]=t=>h.enabled=t)},null,8,["modelValue"])]),_:1}),a(m,{label:"性别",prop:"gender"},{default:s(()=>[a(z,{modelValue:h.gender,"onUpdate:modelValue":e[3]||(e[3]=t=>h.gender=t)},{default:s(()=>[a(S,{value:"1"},{default:s(()=>[...e[20]||(e[20]=[d("男",-1)])]),_:1}),a(S,{value:"2"},{default:s(()=>[...e[21]||(e[21]=[d("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,{label:"兴趣爱好",prop:"hobbies"},{default:s(()=>[a(me,{modelValue:h.hobbies,"onUpdate:modelValue":e[4]||(e[4]=t=>h.hobbies=t)},{default:s(()=>[a(W,{value:"reading"},{default:s(()=>[...e[22]||(e[22]=[d("阅读",-1)])]),_:1}),a(W,{value:"gaming"},{default:s(()=>[...e[23]||(e[23]=[d("游戏",-1)])]),_:1}),a(W,{value:"coding"},{default:s(()=>[...e[24]||(e[24]=[d("编程",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(I,{type:"info",onClick:y.handleReset2},{default:s(()=>[...e[25]||(e[25]=[d("重置",-1)])]),_:1},8,["onClick"]),a(I,{type:"primary",onClick:y.handleSubmit2},{default:s(()=>[...e[26]||(e[26]=[d("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[37]||(e[37]=o("h2",{id:"行内布局",tabindex:"-1"},[d("行内布局 "),o("a",{class:"header-anchor",href:"#行内布局","aria-label":"Permalink to “行内布局”"},"​")],-1)),e[38]||(e[38]=o("p",null,[d("使用"),o("code",null,"inline"),d("属性可以设置表单为行内布局。")],-1)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef3",ref:D,modelValue:f,rules:g,inline:"","onUpdate:modelValue":y.handleFormUpdate3},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(c,{modelValue:f.username,"onUpdate:modelValue":e[5]||(e[5]=t=>f.username=t),placeholder:"用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"邮箱",prop:"email"},{default:s(()=>[a(c,{modelValue:f.email,"onUpdate:modelValue":e[6]||(e[6]=t=>f.email=t),placeholder:"邮箱"},null,8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(I,{type:"primary",onClick:y.handleSubmit3},{default:s(()=>[...e[27]||(e[27]=[d("查询",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[39]||(e[39]=o("h2",{id:"自定义标签宽度",tabindex:"-1"},[d("自定义标签宽度 "),o("a",{class:"header-anchor",href:"#自定义标签宽度","aria-label":"Permalink to “自定义标签宽度”"},"​")],-1)),e[40]||(e[40]=o("p",null,[d("使用"),o("code",null,"labelWidth"),d("属性可以自定义标签的宽度。")],-1)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef4",ref:p,modelValue:b,rules:A,labelWidth:"120px","onUpdate:modelValue":y.handleFormUpdate4},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(c,{modelValue:b.username,"onUpdate:modelValue":e[7]||(e[7]=t=>b.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"邮箱地址",prop:"email"},{default:s(()=>[a(c,{modelValue:b.email,"onUpdate:modelValue":e[8]||(e[8]=t=>b.email=t),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[41]||(e[41]=o("h2",{id:"不同尺寸",tabindex:"-1"},[d("不同尺寸 "),o("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),e[42]||(e[42]=o("p",null,[d("使用"),o("code",null,"size"),d("属性可以设置表单的尺寸。")],-1)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef5",ref:k,modelValue:Y,rules:U,size:"small","onUpdate:modelValue":y.handleFormUpdate5},{default:s(()=>[a(m,{label:"小尺寸表单",prop:"username"},{default:s(()=>[a(c,{modelValue:Y.username,"onUpdate:modelValue":e[9]||(e[9]=t=>Y.username=t),placeholder:"小尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),a(V,{ref_key:"formRef6",ref:C,modelValue:B,rules:U,size:"large",style:{"margin-top":"20px"},"onUpdate:modelValue":y.handleFormUpdate6},{default:s(()=>[a(m,{label:"大尺寸表单",prop:"username"},{default:s(()=>[a(c,{modelValue:B.username,"onUpdate:modelValue":e[10]||(e[10]=t=>B.username=t),placeholder:"大尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[43]||(e[43]=o("h2",{id:"验证触发器",tabindex:"-1"},[d("验证触发器 "),o("a",{class:"header-anchor",href:"#验证触发器","aria-label":"Permalink to “验证触发器”"},"​")],-1)),e[44]||(e[44]=o("p",null,[d("使用"),o("code",null,"validateTrigger"),d("属性可以设置验证触发的时机。")],-1)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef7",ref:_,modelValue:P,rules:X,"onUpdate:modelValue":y.handleFormUpdate7},{default:s(()=>[a(m,{label:"实时验证",prop:"username",validateTrigger:"change"},{default:s(()=>[a(c,{modelValue:P.username,"onUpdate:modelValue":e[11]||(e[11]=t=>P.username=t),placeholder:"输入时实时验证"},null,8,["modelValue"])]),_:1}),a(m,{label:"失焦验证",prop:"email",validateTrigger:"blur"},{default:s(()=>[a(c,{modelValue:P.email,"onUpdate:modelValue":e[12]||(e[12]=t=>P.email=t),placeholder:"失焦时验证"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[45]||(e[45]=o("h2",{id:"禁用状态",tabindex:"-1"},[d("禁用状态 "),o("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[46]||(e[46]=o("p",null,[d("使用"),o("code",null,"disabled"),d("属性可以禁用整个表单。")],-1)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef8",ref:ee,modelValue:x,rules:ae,disabled:"","onUpdate:modelValue":y.handleFormUpdate8},{default:s(()=>[a(m,{label:"用户名",prop:"username"},{default:s(()=>[a(c,{modelValue:x.username,"onUpdate:modelValue":e[13]||(e[13]=t=>x.username=t),placeholder:"禁用状态"},null,8,["modelValue"])]),_:1}),a(m,{label:"性别",prop:"gender"},{default:s(()=>[a(z,{modelValue:x.gender,"onUpdate:modelValue":e[14]||(e[14]=t=>x.gender=t)},{default:s(()=>[a(S,{value:"1"},{default:s(()=>[...e[28]||(e[28]=[d("男",-1)])]),_:1}),a(S,{value:"2"},{default:s(()=>[...e[29]||(e[29]=[d("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[47]||(e[47]=o("h2",{id:"组合使用",tabindex:"-1"},[d("组合使用 "),o("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),e[48]||(e[48]=o("p",null,"最后，实现个多种api组合使用实现个完整表单：",-1)),a(R,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(V,{ref_key:"formRef9",ref:se,modelValue:E,rules:ie,labelWidth:"100px",size:"medium",inline:"","onUpdate:modelValue":y.handleFormUpdate9},{default:s(()=>[a(m,{label:"用户名",prop:"username",validateTrigger:"blur"},{default:s(()=>[a(c,{modelValue:E.username,"onUpdate:modelValue":e[15]||(e[15]=t=>E.username=t),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(m,{label:"邮箱",prop:"email",validateTrigger:"change"},{default:s(()=>[a(c,{modelValue:E.email,"onUpdate:modelValue":e[16]||(e[16]=t=>E.email=t),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),a(m,{label:"性别",prop:"gender"},{default:s(()=>[a(z,{modelValue:E.gender,"onUpdate:modelValue":e[17]||(e[17]=t=>E.gender=t)},{default:s(()=>[a(S,{value:"1"},{default:s(()=>[...e[30]||(e[30]=[d("男",-1)])]),_:1}),a(S,{value:"2"},{default:s(()=>[...e[31]||(e[31]=[d("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(m,null,{default:s(()=>[a(I,{type:"info",onClick:y.handleReset9},{default:s(()=>[...e[32]||(e[32]=[d("重置",-1)])]),_:1},8,["onClick"]),a(I,{type:"primary",onClick:y.handleSubmit9},{default:s(()=>[...e[33]||(e[33]=[d("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[49]||(e[49]=L("",9))])}}});export{_e as __pageData,xe as default};

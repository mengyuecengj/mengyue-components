import{_ as p,a as n}from"./chunks/formItem.vue_vue_type_script_setup_true_lang.wOVsQ91t.js";import{_ as d}from"./chunks/input.vue_vue_type_script_setup_true_lang.Qz_sZHj_.js";import{_ as g}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{_ as j}from"./chunks/switch.vue_vue_type_script_setup_true_lang.BErpIv_-.js";import{_ as A,a as f}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.Zb_JEi3Z.js";import{_ as J,a as c}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import{I as O,o as G,c as H,a8 as C,J as a,w as s,a as l,j as t,a1 as m,A as h}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useColorUtils.Cv3Q488p.js";const re=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"components/Form.md","filePath":"components/Form.md"}'),K={name:"components/Form.md"},de=Object.assign(K,{setup(L){const v=h(),F=m({username:""}),R={username:[{required:!0,message:"用户名不能为空"}]},U=h(),o=m({username:"",enabled:!1,gender:"1",hobbies:[]}),E={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}],hobbies:[{required:!0,message:"请选择至少一个兴趣爱好"}]},P=h(),b=m({username:"",email:""}),T={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},I=h(),y=m({username:"",email:""}),x={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},S=h(),q=h(),M=m({username:""}),Y=m({username:""}),V={username:[{required:!0,message:"用户名不能为空"}]},_=h(),D=m({username:"",email:""}),z={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},W=h(),B=m({username:"",gender:""}),$={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}]},N=h(),u=m({username:"",email:"",gender:""}),w={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}],gender:[{required:!0,message:"请选择性别"}]};return(r,e)=>{const k=O("ShowCode");return G(),H("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[34]||(e[34]=C("",5)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef1",ref:v,modelValue:F,rules:R,"onUpdate:modelValue":r.handleFormUpdate1},{default:s(()=>[a(n,{label:"用户名",prop:"username"},{default:s(()=>[a(d,{modelValue:F.username,"onUpdate:modelValue":e[0]||(e[0]=i=>F.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(n,null,{default:s(()=>[a(g,{type:"info",onClick:r.handleReset1},{default:s(()=>[...e[18]||(e[18]=[l("重置",-1)])]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:r.handleSubmit1},{default:s(()=>[...e[19]||(e[19]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[35]||(e[35]=t("h2",{id:"多种表单控件",tabindex:"-1"},[l("多种表单控件 "),t("a",{class:"header-anchor",href:"#多种表单控件","aria-label":"Permalink to “多种表单控件”"},"​")],-1)),e[36]||(e[36]=t("p",null,"表单支持多种控件类型，包括输入框、开关、单选框、复选框等。",-1)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef2",ref:U,modelValue:o,rules:E,"onUpdate:modelValue":r.handleFormUpdate2},{default:s(()=>[a(n,{label:"用户名",prop:"username"},{default:s(()=>[a(d,{modelValue:o.username,"onUpdate:modelValue":e[1]||(e[1]=i=>o.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(n,{label:"是否启用",prop:"enabled"},{default:s(()=>[a(j,{modelValue:o.enabled,"onUpdate:modelValue":e[2]||(e[2]=i=>o.enabled=i)},null,8,["modelValue"])]),_:1}),a(n,{label:"性别",prop:"gender"},{default:s(()=>[a(A,{modelValue:o.gender,"onUpdate:modelValue":e[3]||(e[3]=i=>o.gender=i)},{default:s(()=>[a(f,{value:"1"},{default:s(()=>[...e[20]||(e[20]=[l("男",-1)])]),_:1}),a(f,{value:"2"},{default:s(()=>[...e[21]||(e[21]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"兴趣爱好",prop:"hobbies"},{default:s(()=>[a(J,{modelValue:o.hobbies,"onUpdate:modelValue":e[4]||(e[4]=i=>o.hobbies=i)},{default:s(()=>[a(c,{value:"reading"},{default:s(()=>[...e[22]||(e[22]=[l("阅读",-1)])]),_:1}),a(c,{value:"gaming"},{default:s(()=>[...e[23]||(e[23]=[l("游戏",-1)])]),_:1}),a(c,{value:"coding"},{default:s(()=>[...e[24]||(e[24]=[l("编程",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(n,null,{default:s(()=>[a(g,{type:"info",onClick:r.handleReset2},{default:s(()=>[...e[25]||(e[25]=[l("重置",-1)])]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:r.handleSubmit2},{default:s(()=>[...e[26]||(e[26]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[37]||(e[37]=t("h2",{id:"行内布局",tabindex:"-1"},[l("行内布局 "),t("a",{class:"header-anchor",href:"#行内布局","aria-label":"Permalink to “行内布局”"},"​")],-1)),e[38]||(e[38]=t("p",null,[l("使用"),t("code",null,"inline"),l("属性可以设置表单为行内布局。")],-1)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef3",ref:P,modelValue:b,rules:T,inline:"","onUpdate:modelValue":r.handleFormUpdate3},{default:s(()=>[a(n,{label:"用户名",prop:"username"},{default:s(()=>[a(d,{modelValue:b.username,"onUpdate:modelValue":e[5]||(e[5]=i=>b.username=i),placeholder:"用户名"},null,8,["modelValue"])]),_:1}),a(n,{label:"邮箱",prop:"email"},{default:s(()=>[a(d,{modelValue:b.email,"onUpdate:modelValue":e[6]||(e[6]=i=>b.email=i),placeholder:"邮箱"},null,8,["modelValue"])]),_:1}),a(n,null,{default:s(()=>[a(g,{type:"primary",onClick:r.handleSubmit3},{default:s(()=>[...e[27]||(e[27]=[l("查询",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[39]||(e[39]=t("h2",{id:"自定义标签宽度",tabindex:"-1"},[l("自定义标签宽度 "),t("a",{class:"header-anchor",href:"#自定义标签宽度","aria-label":"Permalink to “自定义标签宽度”"},"​")],-1)),e[40]||(e[40]=t("p",null,[l("使用"),t("code",null,"labelWidth"),l("属性可以自定义标签的宽度。")],-1)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef4",ref:I,modelValue:y,rules:x,labelWidth:"120px","onUpdate:modelValue":r.handleFormUpdate4},{default:s(()=>[a(n,{label:"用户名",prop:"username"},{default:s(()=>[a(d,{modelValue:y.username,"onUpdate:modelValue":e[7]||(e[7]=i=>y.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(n,{label:"邮箱地址",prop:"email"},{default:s(()=>[a(d,{modelValue:y.email,"onUpdate:modelValue":e[8]||(e[8]=i=>y.email=i),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[41]||(e[41]=t("h2",{id:"不同尺寸",tabindex:"-1"},[l("不同尺寸 "),t("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​")],-1)),e[42]||(e[42]=t("p",null,[l("使用"),t("code",null,"size"),l("属性可以设置表单的尺寸。")],-1)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef5",ref:S,modelValue:M,rules:V,size:"small","onUpdate:modelValue":r.handleFormUpdate5},{default:s(()=>[a(n,{label:"小尺寸表单",prop:"username"},{default:s(()=>[a(d,{modelValue:M.username,"onUpdate:modelValue":e[9]||(e[9]=i=>M.username=i),placeholder:"小尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),a(p,{ref_key:"formRef6",ref:q,modelValue:Y,rules:V,size:"large",style:{"margin-top":"20px"},"onUpdate:modelValue":r.handleFormUpdate6},{default:s(()=>[a(n,{label:"大尺寸表单",prop:"username"},{default:s(()=>[a(d,{modelValue:Y.username,"onUpdate:modelValue":e[10]||(e[10]=i=>Y.username=i),placeholder:"大尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[43]||(e[43]=t("h2",{id:"验证触发器",tabindex:"-1"},[l("验证触发器 "),t("a",{class:"header-anchor",href:"#验证触发器","aria-label":"Permalink to “验证触发器”"},"​")],-1)),e[44]||(e[44]=t("p",null,[l("使用"),t("code",null,"validateTrigger"),l("属性可以设置验证触发的时机。")],-1)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef7",ref:_,modelValue:D,rules:z,"onUpdate:modelValue":r.handleFormUpdate7},{default:s(()=>[a(n,{label:"实时验证",prop:"username",validateTrigger:"change"},{default:s(()=>[a(d,{modelValue:D.username,"onUpdate:modelValue":e[11]||(e[11]=i=>D.username=i),placeholder:"输入时实时验证"},null,8,["modelValue"])]),_:1}),a(n,{label:"失焦验证",prop:"email",validateTrigger:"blur"},{default:s(()=>[a(d,{modelValue:D.email,"onUpdate:modelValue":e[12]||(e[12]=i=>D.email=i),placeholder:"失焦时验证"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[45]||(e[45]=t("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​")],-1)),e[46]||(e[46]=t("p",null,[l("使用"),t("code",null,"disabled"),l("属性可以禁用整个表单。")],-1)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef8",ref:W,modelValue:B,rules:$,disabled:"","onUpdate:modelValue":r.handleFormUpdate8},{default:s(()=>[a(n,{label:"用户名",prop:"username"},{default:s(()=>[a(d,{modelValue:B.username,"onUpdate:modelValue":e[13]||(e[13]=i=>B.username=i),placeholder:"禁用状态"},null,8,["modelValue"])]),_:1}),a(n,{label:"性别",prop:"gender"},{default:s(()=>[a(A,{modelValue:B.gender,"onUpdate:modelValue":e[14]||(e[14]=i=>B.gender=i)},{default:s(()=>[a(f,{value:"1"},{default:s(()=>[...e[28]||(e[28]=[l("男",-1)])]),_:1}),a(f,{value:"2"},{default:s(()=>[...e[29]||(e[29]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[47]||(e[47]=t("h2",{id:"组合使用",tabindex:"-1"},[l("组合使用 "),t("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),e[48]||(e[48]=t("p",null,"最后，实现个多种api组合使用实现个完整表单：",-1)),a(k,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef9",ref:N,modelValue:u,rules:w,labelWidth:"100px",size:"medium",inline:"","onUpdate:modelValue":r.handleFormUpdate9},{default:s(()=>[a(n,{label:"用户名",prop:"username",validateTrigger:"blur"},{default:s(()=>[a(d,{modelValue:u.username,"onUpdate:modelValue":e[15]||(e[15]=i=>u.username=i),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),a(n,{label:"邮箱",prop:"email",validateTrigger:"change"},{default:s(()=>[a(d,{modelValue:u.email,"onUpdate:modelValue":e[16]||(e[16]=i=>u.email=i),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),a(n,{label:"性别",prop:"gender"},{default:s(()=>[a(A,{modelValue:u.gender,"onUpdate:modelValue":e[17]||(e[17]=i=>u.gender=i)},{default:s(()=>[a(f,{value:"1"},{default:s(()=>[...e[30]||(e[30]=[l("男",-1)])]),_:1}),a(f,{value:"2"},{default:s(()=>[...e[31]||(e[31]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(n,null,{default:s(()=>[a(g,{type:"info",onClick:r.handleReset9},{default:s(()=>[...e[32]||(e[32]=[l("重置",-1)])]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:r.handleSubmit9},{default:s(()=>[...e[33]||(e[33]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[49]||(e[49]=C("",9))])}}});export{re as __pageData,de as default};

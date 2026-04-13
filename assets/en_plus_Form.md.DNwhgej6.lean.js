import{_ as p,a as r}from"./chunks/formItem.vue_vue_type_script_setup_true_lang.wOVsQ91t.js";import{_ as d}from"./chunks/input.vue_vue_type_script_setup_true_lang.Qz_sZHj_.js";import{_ as g}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{_ as G}from"./chunks/switch.vue_vue_type_script_setup_true_lang.BErpIv_-.js";import{_ as Y,a as f}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.Zb_JEi3Z.js";import{_ as N,a as V}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import{I as O,o as j,c as H,a8 as C,J as a,w as s,a as l,j as t,a1 as m,A as h}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useColorUtils.Cv3Q488p.js";const ne=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/Form.md","filePath":"en/plus/Form.md"}'),J={name:"en/plus/Form.md"},de=Object.assign(J,{setup(K){const v=h(),c=m({username:""}),U={username:[{required:!0,message:"Username is required"}]},R=h(),o=m({username:"",enabled:!1,gender:"1",hobbies:[]}),P={username:[{required:!0,message:"Username is required"}],gender:[{required:!0,message:"Please select gender"}],hobbies:[{required:!0,message:"Please select at least one hobby"}]},E=h(),b=m({username:"",email:""}),S={username:[{required:!0,message:"Username is required"}],email:[{required:!0,message:"Email is required"}]},T=h(),y=m({username:"",email:""}),q={username:[{required:!0,message:"Username is required"}],email:[{required:!0,message:"Email is required"}]},I=h(),x=h(),M=m({username:""}),B=m({username:""}),A={username:[{required:!0,message:"Username is required"}]},z=h(),D=m({username:"",email:""}),w={username:[{required:!0,message:"Username is required"}],email:[{required:!0,message:"Email is required"}]},W=h(),F=m({username:"",gender:""}),_={username:[{required:!0,message:"Username is required"}],gender:[{required:!0,message:"Please select gender"}]},L=h(),u=m({username:"",email:"",gender:""}),$={username:[{required:!0,message:"Username is required"}],email:[{required:!0,message:"Email is required"}],gender:[{required:!0,message:"Please select gender"}]};return(n,e)=>{const k=O("ShowCode");return j(),H("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776104037000"},[e[34]||(e[34]=C("",5)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>Reset</MYButton>
            <MYButton type='primary' @click='handleSubmit'>Submit</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef1",ref:v,modelValue:c,rules:U,"onUpdate:modelValue":n.handleFormUpdate1},{default:s(()=>[a(r,{label:"Username",prop:"username"},{default:s(()=>[a(d,{modelValue:c.username,"onUpdate:modelValue":e[0]||(e[0]=i=>c.username=i),placeholder:"Please enter username"},null,8,["modelValue"])]),_:1}),a(r,null,{default:s(()=>[a(g,{type:"info",onClick:n.handleReset1},{default:s(()=>[...e[18]||(e[18]=[l("Reset",-1)])]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:n.handleSubmit1},{default:s(()=>[...e[19]||(e[19]=[l("Submit",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[35]||(e[35]=t("h2",{id:"multiple-form-controls",tabindex:"-1"},[l("Multiple Form Controls "),t("a",{class:"header-anchor",href:"#multiple-form-controls","aria-label":"Permalink to “Multiple Form Controls”"},"​")],-1)),e[36]||(e[36]=t("p",null,"The form supports various control types including input, switch, radio, checkbox, etc.",-1)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item label='Enabled' prop='enabled'>
            <MYSwitch v-model='formData.enabled' />
        </MYForm-item>
        <MYForm-item label='Gender' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>Male</MYRadio>
                <MYRadio value='2'>Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item label='Hobbies' prop='hobbies'>
            <MYCheckbox-group v-model='formData.hobbies'>
                <MYCheckbox value='reading'>Reading</MYCheckbox>
                <MYCheckbox value='gaming'>Gaming</MYCheckbox>
                <MYCheckbox value='coding'>Coding</MYCheckbox>
            </MYCheckbox-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>Reset</MYButton>
            <MYButton type='primary' @click='handleSubmit'>Submit</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef2",ref:R,modelValue:o,rules:P,"onUpdate:modelValue":n.handleFormUpdate2},{default:s(()=>[a(r,{label:"Username",prop:"username"},{default:s(()=>[a(d,{modelValue:o.username,"onUpdate:modelValue":e[1]||(e[1]=i=>o.username=i),placeholder:"Please enter username"},null,8,["modelValue"])]),_:1}),a(r,{label:"Enabled",prop:"enabled"},{default:s(()=>[a(G,{modelValue:o.enabled,"onUpdate:modelValue":e[2]||(e[2]=i=>o.enabled=i)},null,8,["modelValue"])]),_:1}),a(r,{label:"Gender",prop:"gender"},{default:s(()=>[a(Y,{modelValue:o.gender,"onUpdate:modelValue":e[3]||(e[3]=i=>o.gender=i)},{default:s(()=>[a(f,{value:"1"},{default:s(()=>[...e[20]||(e[20]=[l("Male",-1)])]),_:1}),a(f,{value:"2"},{default:s(()=>[...e[21]||(e[21]=[l("Female",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,{label:"Hobbies",prop:"hobbies"},{default:s(()=>[a(N,{modelValue:o.hobbies,"onUpdate:modelValue":e[4]||(e[4]=i=>o.hobbies=i)},{default:s(()=>[a(V,{value:"reading"},{default:s(()=>[...e[22]||(e[22]=[l("Reading",-1)])]),_:1}),a(V,{value:"gaming"},{default:s(()=>[...e[23]||(e[23]=[l("Gaming",-1)])]),_:1}),a(V,{value:"coding"},{default:s(()=>[...e[24]||(e[24]=[l("Coding",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,null,{default:s(()=>[a(g,{type:"info",onClick:n.handleReset2},{default:s(()=>[...e[25]||(e[25]=[l("Reset",-1)])]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:n.handleSubmit2},{default:s(()=>[...e[26]||(e[26]=[l("Submit",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[37]||(e[37]=t("h2",{id:"inline-layout",tabindex:"-1"},[l("Inline Layout "),t("a",{class:"header-anchor",href:"#inline-layout","aria-label":"Permalink to “Inline Layout”"},"​")],-1)),e[38]||(e[38]=t("p",null,[l("Use the "),t("code",null,"inline"),l(" prop to set the form to an inline layout.")],-1)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' inline>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Username' />
        </MYForm-item>
        <MYForm-item label='Email' prop='email'>
            <MYInput v-model='formData.email' placeholder='Email' />
        </MYForm-item>
        <MYForm-item>
            <MYButton type='primary' @click='handleSubmit'>Search</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef3",ref:E,modelValue:b,rules:S,inline:"","onUpdate:modelValue":n.handleFormUpdate3},{default:s(()=>[a(r,{label:"Username",prop:"username"},{default:s(()=>[a(d,{modelValue:b.username,"onUpdate:modelValue":e[5]||(e[5]=i=>b.username=i),placeholder:"Username"},null,8,["modelValue"])]),_:1}),a(r,{label:"Email",prop:"email"},{default:s(()=>[a(d,{modelValue:b.email,"onUpdate:modelValue":e[6]||(e[6]=i=>b.email=i),placeholder:"Email"},null,8,["modelValue"])]),_:1}),a(r,null,{default:s(()=>[a(g,{type:"primary",onClick:n.handleSubmit3},{default:s(()=>[...e[27]||(e[27]=[l("Search",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[39]||(e[39]=t("h2",{id:"custom-label-width",tabindex:"-1"},[l("Custom Label Width "),t("a",{class:"header-anchor",href:"#custom-label-width","aria-label":"Permalink to “Custom Label Width”"},"​")],-1)),e[40]||(e[40]=t("p",null,[l("Use the "),t("code",null,"labelWidth"),l(" prop to customize the width of labels.")],-1)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' labelWidth='120px'>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item label='Email Address' prop='email'>
            <MYInput v-model='formData.email' placeholder='Please enter email' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef4",ref:T,modelValue:y,rules:q,labelWidth:"120px","onUpdate:modelValue":n.handleFormUpdate4},{default:s(()=>[a(r,{label:"Username",prop:"username"},{default:s(()=>[a(d,{modelValue:y.username,"onUpdate:modelValue":e[7]||(e[7]=i=>y.username=i),placeholder:"Please enter username"},null,8,["modelValue"])]),_:1}),a(r,{label:"Email Address",prop:"email"},{default:s(()=>[a(d,{modelValue:y.email,"onUpdate:modelValue":e[8]||(e[8]=i=>y.email=i),placeholder:"Please enter email"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[41]||(e[41]=t("h2",{id:"different-sizes",tabindex:"-1"},[l("Different Sizes "),t("a",{class:"header-anchor",href:"#different-sizes","aria-label":"Permalink to “Different Sizes”"},"​")],-1)),e[42]||(e[42]=t("p",null,[l("Use the "),t("code",null,"size"),l(" prop to set the form size.")],-1)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='small'>
        <MYForm-item label='Small Form' prop='username'>
            <MYInput v-model='formData.username' placeholder='Small size' />
        </MYForm-item>
    </MYForm>
    <MYForm ref='formRef' v-model='formData' :rules='rules' size='large' style='margin-top: 20px'>
        <MYForm-item label='Large Form' prop='username'>
            <MYInput v-model='formData.username' placeholder='Large size' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef5",ref:I,modelValue:M,rules:A,size:"small","onUpdate:modelValue":n.handleFormUpdate5},{default:s(()=>[a(r,{label:"Small Form",prop:"username"},{default:s(()=>[a(d,{modelValue:M.username,"onUpdate:modelValue":e[9]||(e[9]=i=>M.username=i),placeholder:"Small size"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),a(p,{ref_key:"formRef6",ref:x,modelValue:B,rules:A,size:"large",style:{"margin-top":"20px"},"onUpdate:modelValue":n.handleFormUpdate6},{default:s(()=>[a(r,{label:"Large Form",prop:"username"},{default:s(()=>[a(d,{modelValue:B.username,"onUpdate:modelValue":e[10]||(e[10]=i=>B.username=i),placeholder:"Large size"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[43]||(e[43]=t("h2",{id:"validation-trigger",tabindex:"-1"},[l("Validation Trigger "),t("a",{class:"header-anchor",href:"#validation-trigger","aria-label":"Permalink to “Validation Trigger”"},"​")],-1)),e[44]||(e[44]=t("p",null,[l("Use the "),t("code",null,"validateTrigger"),l(" prop to set when validation should be triggered.")],-1)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules'>
        <MYForm-item label='Real-time Validation' prop='username' validateTrigger='change'>
            <MYInput v-model='formData.username' placeholder='Validates on input' />
        </MYForm-item>
        <MYForm-item label='On-blur Validation' prop='email' validateTrigger='blur'>
            <MYInput v-model='formData.email' placeholder='Validates on blur' />
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef7",ref:z,modelValue:D,rules:w,"onUpdate:modelValue":n.handleFormUpdate7},{default:s(()=>[a(r,{label:"Real-time Validation",prop:"username",validateTrigger:"change"},{default:s(()=>[a(d,{modelValue:D.username,"onUpdate:modelValue":e[11]||(e[11]=i=>D.username=i),placeholder:"Validates on input"},null,8,["modelValue"])]),_:1}),a(r,{label:"On-blur Validation",prop:"email",validateTrigger:"blur"},{default:s(()=>[a(d,{modelValue:D.email,"onUpdate:modelValue":e[12]||(e[12]=i=>D.email=i),placeholder:"Validates on blur"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[45]||(e[45]=t("h2",{id:"disabled-state",tabindex:"-1"},[l("Disabled State "),t("a",{class:"header-anchor",href:"#disabled-state","aria-label":"Permalink to “Disabled State”"},"​")],-1)),e[46]||(e[46]=t("p",null,[l("Use the "),t("code",null,"disabled"),l(" prop to disable the entire form.")],-1)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm ref='formRef' v-model='formData' :rules='rules' disabled>
        <MYForm-item label='Username' prop='username'>
            <MYInput v-model='formData.username' placeholder='Disabled state' />
        </MYForm-item>
        <MYForm-item label='Gender' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>Male</MYRadio>
                <MYRadio value='2'>Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef8",ref:W,modelValue:F,rules:_,disabled:"","onUpdate:modelValue":n.handleFormUpdate8},{default:s(()=>[a(r,{label:"Username",prop:"username"},{default:s(()=>[a(d,{modelValue:F.username,"onUpdate:modelValue":e[13]||(e[13]=i=>F.username=i),placeholder:"Disabled state"},null,8,["modelValue"])]),_:1}),a(r,{label:"Gender",prop:"gender"},{default:s(()=>[a(Y,{modelValue:F.gender,"onUpdate:modelValue":e[14]||(e[14]=i=>F.gender=i)},{default:s(()=>[a(f,{value:"1"},{default:s(()=>[...e[28]||(e[28]=[l("Male",-1)])]),_:1}),a(f,{value:"2"},{default:s(()=>[...e[29]||(e[29]=[l("Female",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[47]||(e[47]=t("h2",{id:"combined-usage",tabindex:"-1"},[l("Combined Usage "),t("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[48]||(e[48]=t("p",null,"Finally, here is a combination of multiple APIs to create a complete form:",-1)),a(k,{title:"Code Demo",code:`
<template>
    <MYForm 
        ref='formRef' 
        v-model='formData' 
        :rules='rules'
        labelWidth='100px'
        size='medium'
        inline
    >
        <MYForm-item label='Username' prop='username' validateTrigger='blur'>
            <MYInput v-model='formData.username' placeholder='Please enter username' />
        </MYForm-item>
        <MYForm-item label='Email' prop='email' validateTrigger='change'>
            <MYInput v-model='formData.email' placeholder='Please enter email' />
        </MYForm-item>
        <MYForm-item label='Gender' prop='gender'>
            <MYRadio-group v-model='formData.gender'>
                <MYRadio value='1'>Male</MYRadio>
                <MYRadio value='2'>Female</MYRadio>
            </MYRadio-group>
        </MYForm-item>
        <MYForm-item>
            <MYButton type='info' @click='handleReset'>Reset</MYButton>
            <MYButton type='primary' @click='handleSubmit'>Submit</MYButton>
        </MYForm-item>
    </MYForm>
</template>
  `.trim()},{demo:s(()=>[a(p,{ref_key:"formRef9",ref:L,modelValue:u,rules:$,labelWidth:"100px",size:"medium",inline:"","onUpdate:modelValue":n.handleFormUpdate9},{default:s(()=>[a(r,{label:"Username",prop:"username",validateTrigger:"blur"},{default:s(()=>[a(d,{modelValue:u.username,"onUpdate:modelValue":e[15]||(e[15]=i=>u.username=i),placeholder:"Please enter username"},null,8,["modelValue"])]),_:1}),a(r,{label:"Email",prop:"email",validateTrigger:"change"},{default:s(()=>[a(d,{modelValue:u.email,"onUpdate:modelValue":e[16]||(e[16]=i=>u.email=i),placeholder:"Please enter email"},null,8,["modelValue"])]),_:1}),a(r,{label:"Gender",prop:"gender"},{default:s(()=>[a(Y,{modelValue:u.gender,"onUpdate:modelValue":e[17]||(e[17]=i=>u.gender=i)},{default:s(()=>[a(f,{value:"1"},{default:s(()=>[...e[30]||(e[30]=[l("Male",-1)])]),_:1}),a(f,{value:"2"},{default:s(()=>[...e[31]||(e[31]=[l("Female",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),a(r,null,{default:s(()=>[a(g,{type:"info",onClick:n.handleReset9},{default:s(()=>[...e[32]||(e[32]=[l("Reset",-1)])]),_:1},8,["onClick"]),a(g,{type:"primary",onClick:n.handleSubmit9},{default:s(()=>[...e[33]||(e[33]=[l("Submit",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),e[49]||(e[49]=C("",9))])}}});export{ne as __pageData,de as default};

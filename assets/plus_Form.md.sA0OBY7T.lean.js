import{_ as o,a as d}from"./chunks/formItem.vue_vue_type_script_setup_true_lang.wOVsQ91t.js";import{_ as r}from"./chunks/input.vue_vue_type_script_setup_true_lang.Qz_sZHj_.js";import{_ as g}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{_ as N}from"./chunks/switch.vue_vue_type_script_setup_true_lang.BErpIv_-.js";import{_ as M,a as y}from"./chunks/radio-group.vue_vue_type_script_setup_true_lang.Zb_JEi3Z.js";import{_ as J,a as Y}from"./chunks/checkbox-group.vue_vue_type_script_setup_true_lang.D38PW01g.js";import{I as O,o as G,c as H,a8 as V,J as i,w as e,a as l,j as s,a1 as h,A as u}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useColorUtils.Cv3Q488p.js";const ta=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"plus/Form.md","filePath":"plus/Form.md"}'),K={name:"plus/Form.md"},ra=Object.assign(K,{setup(L){const x=u(),D=h({username:""}),C={username:[{required:!0,message:"用户名不能为空"}]},v=u(),p=h({username:"",enabled:!1,gender:"1",hobbies:[]}),j={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}],hobbies:[{required:!0,message:"请选择至少一个兴趣爱好"}]},R=u(),f=h({username:"",email:""}),U={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},q=u(),b=h({username:"",email:""}),E={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},P=u(),I=u(),B=h({username:""}),F=h({username:""}),A={username:[{required:!0,message:"用户名不能为空"}]},T=u(),c=h({username:"",email:""}),S={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}]},_=u(),z=h({username:"",gender:""}),w={username:[{required:!0,message:"用户名不能为空"}],gender:[{required:!0,message:"请选择性别"}]},W=u(),k=h({username:"",email:"",gender:""}),$={username:[{required:!0,message:"用户名不能为空"}],email:[{required:!0,message:"邮箱不能为空"}],gender:[{required:!0,message:"请选择性别"}]};return(t,a)=>{const m=O("ShowCode");return G(),H("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[34]||(a[34]=V("",5)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef1",ref:x,modelValue:D,rules:C,"onUpdate:modelValue":t.handleFormUpdate1},{default:e(()=>[i(d,{label:"用户名",prop:"username"},{default:e(()=>[i(r,{modelValue:D.username,"onUpdate:modelValue":a[0]||(a[0]=n=>D.username=n),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),i(d,null,{default:e(()=>[i(g,{type:"info",onClick:t.handleReset1},{default:e(()=>[...a[18]||(a[18]=[l("重置",-1)])]),_:1},8,["onClick"]),i(g,{type:"primary",onClick:t.handleSubmit1},{default:e(()=>[...a[19]||(a[19]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[35]||(a[35]=s("h2",{id:"多种表单控件",tabindex:"-1"},[l("多种表单控件 "),s("a",{class:"header-anchor",href:"#多种表单控件","aria-label":"Permalink to “多种表单控件”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"duozhongbiaodankongjian duo zhong biao dan kong jian dzbdkj ")],-1)),a[36]||(a[36]=s("p",null,[l("表单支持多种控件类型，包括输入框、开关、单选框、复选框等。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"biaodanzhichiduozhongkongjianleixing，baokuoshurukuang、kaiguan、danxuankuang、fuxuankuangdeng。 biao dan zhi chi duo zhong kong jian lei xing ， bao kuo shu ru kuang 、 kai guan 、 dan xuan kuang 、 fu xuan kuang deng 。 bdzcdzkjlx，bksrk、kg、dxk、fxkd。")],-1)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef2",ref:v,modelValue:p,rules:j,"onUpdate:modelValue":t.handleFormUpdate2},{default:e(()=>[i(d,{label:"用户名",prop:"username"},{default:e(()=>[i(r,{modelValue:p.username,"onUpdate:modelValue":a[1]||(a[1]=n=>p.username=n),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),i(d,{label:"是否启用",prop:"enabled"},{default:e(()=>[i(N,{modelValue:p.enabled,"onUpdate:modelValue":a[2]||(a[2]=n=>p.enabled=n)},null,8,["modelValue"])]),_:1}),i(d,{label:"性别",prop:"gender"},{default:e(()=>[i(M,{modelValue:p.gender,"onUpdate:modelValue":a[3]||(a[3]=n=>p.gender=n)},{default:e(()=>[i(y,{value:"1"},{default:e(()=>[...a[20]||(a[20]=[l("男",-1)])]),_:1}),i(y,{value:"2"},{default:e(()=>[...a[21]||(a[21]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(d,{label:"兴趣爱好",prop:"hobbies"},{default:e(()=>[i(J,{modelValue:p.hobbies,"onUpdate:modelValue":a[4]||(a[4]=n=>p.hobbies=n)},{default:e(()=>[i(Y,{value:"reading"},{default:e(()=>[...a[22]||(a[22]=[l("阅读",-1)])]),_:1}),i(Y,{value:"gaming"},{default:e(()=>[...a[23]||(a[23]=[l("游戏",-1)])]),_:1}),i(Y,{value:"coding"},{default:e(()=>[...a[24]||(a[24]=[l("编程",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(d,null,{default:e(()=>[i(g,{type:"info",onClick:t.handleReset2},{default:e(()=>[...a[25]||(a[25]=[l("重置",-1)])]),_:1},8,["onClick"]),i(g,{type:"primary",onClick:t.handleSubmit2},{default:e(()=>[...a[26]||(a[26]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[37]||(a[37]=s("h2",{id:"行内布局",tabindex:"-1"},[l("行内布局 "),s("a",{class:"header-anchor",href:"#行内布局","aria-label":"Permalink to “行内布局”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"hangneibuju hang nei bu ju hnbj ")],-1)),a[38]||(a[38]=s("p",null,[l("使用"),s("code",null,"inline"),l("属性可以设置表单为行内布局。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhibiaodanweihangneibuju。 shi yong shu xing ke yi she zhi biao dan wei hang nei bu ju 。 sysxkyszbdwhnbj。")],-1)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef3",ref:R,modelValue:f,rules:U,inline:"","onUpdate:modelValue":t.handleFormUpdate3},{default:e(()=>[i(d,{label:"用户名",prop:"username"},{default:e(()=>[i(r,{modelValue:f.username,"onUpdate:modelValue":a[5]||(a[5]=n=>f.username=n),placeholder:"用户名"},null,8,["modelValue"])]),_:1}),i(d,{label:"邮箱",prop:"email"},{default:e(()=>[i(r,{modelValue:f.email,"onUpdate:modelValue":a[6]||(a[6]=n=>f.email=n),placeholder:"邮箱"},null,8,["modelValue"])]),_:1}),i(d,null,{default:e(()=>[i(g,{type:"primary",onClick:t.handleSubmit3},{default:e(()=>[...a[27]||(a[27]=[l("查询",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[39]||(a[39]=s("h2",{id:"自定义标签宽度",tabindex:"-1"},[l("自定义标签宽度 "),s("a",{class:"header-anchor",href:"#自定义标签宽度","aria-label":"Permalink to “自定义标签宽度”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyibiaoqiankuandu zi ding yi biao qian kuan du zdybqkd ")],-1)),a[40]||(a[40]=s("p",null,[l("使用"),s("code",null,"labelWidth"),l("属性可以自定义标签的宽度。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyibiaoqiandekuandu。 shi yong shu xing ke yi zi ding yi biao qian de kuan du 。 sysxkyzdybqdkd。")],-1)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef4",ref:q,modelValue:b,rules:E,labelWidth:"120px","onUpdate:modelValue":t.handleFormUpdate4},{default:e(()=>[i(d,{label:"用户名",prop:"username"},{default:e(()=>[i(r,{modelValue:b.username,"onUpdate:modelValue":a[7]||(a[7]=n=>b.username=n),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),i(d,{label:"邮箱地址",prop:"email"},{default:e(()=>[i(r,{modelValue:b.email,"onUpdate:modelValue":a[8]||(a[8]=n=>b.email=n),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[41]||(a[41]=s("h2",{id:"不同尺寸",tabindex:"-1"},[l("不同尺寸 "),s("a",{class:"header-anchor",href:"#不同尺寸","aria-label":"Permalink to “不同尺寸”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"butongchicun bu tong chi cun btcc ")],-1)),a[42]||(a[42]=s("p",null,[l("使用"),s("code",null,"size"),l("属性可以设置表单的尺寸。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhibiaodandechicun。 shi yong shu xing ke yi she zhi biao dan de chi cun 。 sysxkyszbddcc。")],-1)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef5",ref:P,modelValue:B,rules:A,size:"small","onUpdate:modelValue":t.handleFormUpdate5},{default:e(()=>[i(d,{label:"小尺寸表单",prop:"username"},{default:e(()=>[i(r,{modelValue:B.username,"onUpdate:modelValue":a[9]||(a[9]=n=>B.username=n),placeholder:"小尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"]),i(o,{ref_key:"formRef6",ref:I,modelValue:F,rules:A,size:"large",style:{"margin-top":"20px"},"onUpdate:modelValue":t.handleFormUpdate6},{default:e(()=>[i(d,{label:"大尺寸表单",prop:"username"},{default:e(()=>[i(r,{modelValue:F.username,"onUpdate:modelValue":a[10]||(a[10]=n=>F.username=n),placeholder:"大尺寸"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[43]||(a[43]=s("h2",{id:"验证触发器",tabindex:"-1"},[l("验证触发器 "),s("a",{class:"header-anchor",href:"#验证触发器","aria-label":"Permalink to “验证触发器”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yanzhengchufaqi yan zheng chu fa qi yzcfq ")],-1)),a[44]||(a[44]=s("p",null,[l("使用"),s("code",null,"validateTrigger"),l("属性可以设置验证触发的时机。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhiyanzhengchufadeshiji。 shi yong shu xing ke yi she zhi yan zheng chu fa de shi ji 。 sysxkyszyzcfdsj。")],-1)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef7",ref:T,modelValue:c,rules:S,"onUpdate:modelValue":t.handleFormUpdate7},{default:e(()=>[i(d,{label:"实时验证",prop:"username",validateTrigger:"change"},{default:e(()=>[i(r,{modelValue:c.username,"onUpdate:modelValue":a[11]||(a[11]=n=>c.username=n),placeholder:"输入时实时验证"},null,8,["modelValue"])]),_:1}),i(d,{label:"失焦验证",prop:"email",validateTrigger:"blur"},{default:e(()=>[i(r,{modelValue:c.email,"onUpdate:modelValue":a[12]||(a[12]=n=>c.email=n),placeholder:"失焦时验证"},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[45]||(a[45]=s("h2",{id:"禁用状态",tabindex:"-1"},[l("禁用状态 "),s("a",{class:"header-anchor",href:"#禁用状态","aria-label":"Permalink to “禁用状态”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"jinyongzhuangtai jin yong zhuang tai jyzt ")],-1)),a[46]||(a[46]=s("p",null,[l("使用"),s("code",null,"disabled"),l("属性可以禁用整个表单。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyijinyongzhenggebiaodan。 shi yong shu xing ke yi jin yong zheng ge biao dan 。 sysxkyjyzgbd。")],-1)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef8",ref:_,modelValue:z,rules:w,disabled:"","onUpdate:modelValue":t.handleFormUpdate8},{default:e(()=>[i(d,{label:"用户名",prop:"username"},{default:e(()=>[i(r,{modelValue:z.username,"onUpdate:modelValue":a[13]||(a[13]=n=>z.username=n),placeholder:"禁用状态"},null,8,["modelValue"])]),_:1}),i(d,{label:"性别",prop:"gender"},{default:e(()=>[i(M,{modelValue:z.gender,"onUpdate:modelValue":a[14]||(a[14]=n=>z.gender=n)},{default:e(()=>[i(y,{value:"1"},{default:e(()=>[...a[28]||(a[28]=[l("男",-1)])]),_:1}),i(y,{value:"2"},{default:e(()=>[...a[29]||(a[29]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[47]||(a[47]=s("h2",{id:"组合使用",tabindex:"-1"},[l("组合使用 "),s("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),a[48]||(a[48]=s("p",null,[l("最后，实现个多种api组合使用实现个完整表单："),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangewanzhengbiaodan： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge wan zheng biao dan ： zh，sxgdzazhsysxgwzbd：")],-1)),i(m,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i(o,{ref_key:"formRef9",ref:W,modelValue:k,rules:$,labelWidth:"100px",size:"medium",inline:"","onUpdate:modelValue":t.handleFormUpdate9},{default:e(()=>[i(d,{label:"用户名",prop:"username",validateTrigger:"blur"},{default:e(()=>[i(r,{modelValue:k.username,"onUpdate:modelValue":a[15]||(a[15]=n=>k.username=n),placeholder:"请输入用户名"},null,8,["modelValue"])]),_:1}),i(d,{label:"邮箱",prop:"email",validateTrigger:"change"},{default:e(()=>[i(r,{modelValue:k.email,"onUpdate:modelValue":a[16]||(a[16]=n=>k.email=n),placeholder:"请输入邮箱"},null,8,["modelValue"])]),_:1}),i(d,{label:"性别",prop:"gender"},{default:e(()=>[i(M,{modelValue:k.gender,"onUpdate:modelValue":a[17]||(a[17]=n=>k.gender=n)},{default:e(()=>[i(y,{value:"1"},{default:e(()=>[...a[30]||(a[30]=[l("男",-1)])]),_:1}),i(y,{value:"2"},{default:e(()=>[...a[31]||(a[31]=[l("女",-1)])]),_:1})]),_:1},8,["modelValue"])]),_:1}),i(d,null,{default:e(()=>[i(g,{type:"info",onClick:t.handleReset9},{default:e(()=>[...a[32]||(a[32]=[l("重置",-1)])]),_:1},8,["onClick"]),i(g,{type:"primary",onClick:t.handleSubmit9},{default:e(()=>[...a[33]||(a[33]=[l("提交",-1)])]),_:1},8,["onClick"])]),_:1})]),_:1},8,["modelValue","onUpdate:modelValue"])]),_:1},8,["code"]),a[49]||(a[49]=V("",9))])}}});export{ta as __pageData,ra as default};

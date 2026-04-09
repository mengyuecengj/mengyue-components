import{_ as l}from"./chunks/result.vue_vue_type_script_setup_true_lang.DHPk0mBK.js";import{_ as r}from"./chunks/button.vue_vue_type_script_setup_true_lang.BZH5oCUC.js";import{I as p,o,c as h,ah as d,J as i,w as e,j as s,a}from"./chunks/framework.DmoDkOge.js";import"./chunks/useClassComputed.Wc7vThmZ.js";import"./chunks/useColorUtils.Cc58FlZ9.js";const k={style:{display:"flex","flex-direction":"column",gap:"20px"}},c={style:{display:"flex",gap:"10px","justify-content":"center"}},u={style:{display:"flex",gap:"10px","justify-content":"center"}},_=JSON.parse('{"title":"Result","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackResult.md","filePath":"plus/FeedbackResult.md"}'),y={name:"plus/FeedbackResult.md"},T=Object.assign(y,{setup(b){return(m,t)=>{const n=p("ShowCode");return o(),h("div",null,[t[6]||(t[6]=d("",5)),i(n,{title:"代码演示",code:`
<template>
    <MYResult title='操作成功' subTitle='您的操作已成功完成' />
</template>
  `.trim()},{demo:e(()=>[i(l,{title:"操作成功",subTitle:"您的操作已成功完成"})]),_:1},8,["code"]),t[7]||(t[7]=s("h2",{id:"图标类型",tabindex:"-1"},[a("图标类型 "),s("a",{class:"header-anchor",href:"#图标类型","aria-label":"Permalink to “图标类型”"},"​")],-1)),t[8]||(t[8]=s("p",null,[a("通过"),s("code",null,"icon"),a("属性可以设置结果图标。")],-1)),i(n,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYResult icon='primary' title='主要结果' subTitle='这是一个主要结果' />
        <MYResult icon='success' title='成功结果' subTitle='操作成功完成' />
        <MYResult icon='warning' title='警告结果' subTitle='请注意相关事项' />
        <MYResult icon='error' title='错误结果' subTitle='操作失败，请重试' />
        <MYResult icon='info' title='信息结果' subTitle='这是一条信息提示' />
    </div>
</template>
  `.trim()},{demo:e(()=>[s("div",k,[i(l,{icon:"primary",title:"主要结果",subTitle:"这是一个主要结果"}),i(l,{icon:"success",title:"成功结果",subTitle:"操作成功完成"}),i(l,{icon:"warning",title:"警告结果",subTitle:"请注意相关事项"}),i(l,{icon:"error",title:"错误结果",subTitle:"操作失败，请重试"}),i(l,{icon:"info",title:"信息结果",subTitle:"这是一条信息提示"})])]),_:1},8,["code"]),t[9]||(t[9]=s("h2",{id:"插槽使用",tabindex:"-1"},[a("插槽使用 "),s("a",{class:"header-anchor",href:"#插槽使用","aria-label":"Permalink to “插槽使用”"},"​")],-1)),t[10]||(t[10]=s("p",null,"使用插槽可以自定义副标题和额外内容。",-1)),i(n,{title:"代码演示",code:`
<template>
    <MYResult title='操作成功' icon='success'>
        <template #sub-title>
            <div style='color: #52c41a; font-weight: bold;'>
                自定义副标题内容，支持HTML
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary'>返回首页</MYButton>
                <MYButton type='info'>查看详情</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()},{demo:e(()=>[i(l,{title:"操作成功",icon:"success"},{"sub-title":e(()=>[...t[0]||(t[0]=[s("div",{style:{color:"#52c41a","font-weight":"bold"}}," 自定义副标题内容，支持HTML ",-1)])]),extra:e(()=>[s("div",c,[i(r,{type:"primary"},{default:e(()=>[...t[1]||(t[1]=[a("返回首页",-1)])]),_:1}),i(r,{type:"info"},{default:e(()=>[...t[2]||(t[2]=[a("查看详情",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[11]||(t[11]=s("h2",{id:"组合使用",tabindex:"-1"},[a("组合使用 "),s("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​")],-1)),t[12]||(t[12]=s("p",null,"最后，实现个多种api组合使用实现个结果页面：",-1)),i(n,{title:"代码演示",code:`
<template>
    <MYResult 
        title='组合使用示例'
        icon='success'
    >
        <template #sub-title>
            <div style='color: #409EFF;'>
                这是一个组合使用的完整示例
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary' size='large'>主要操作</MYButton>
                <MYButton type='info' size='large' plain>次要操作</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()},{demo:e(()=>[i(l,{title:"组合使用示例",icon:"success"},{"sub-title":e(()=>[...t[3]||(t[3]=[s("div",{style:{color:"#409EFF"}}," 这是一个组合使用的完整示例 ",-1)])]),extra:e(()=>[s("div",u,[i(r,{type:"primary",size:"large"},{default:e(()=>[...t[4]||(t[4]=[a("主要操作",-1)])]),_:1}),i(r,{type:"info",size:"large",plain:""},{default:e(()=>[...t[5]||(t[5]=[a("次要操作",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[13]||(t[13]=d("",7))])}}});export{_ as __pageData,T as default};

import{_ as n}from"./chunks/result.vue_vue_type_script_setup_true_lang.BToKtu14.js";import{_ as d}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as r,o as h,c as o,a8 as p,J as a,w as e,j as s,a as t}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const u={style:{display:"flex","flex-direction":"column",gap:"20px"}},g={style:{display:"flex",gap:"10px","justify-content":"center"}},y={style:{display:"flex",gap:"10px","justify-content":"center"}},A=JSON.parse('{"title":"Result","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackResult.md","filePath":"plus/FeedbackResult.md"}'),k={name:"plus/FeedbackResult.md"},j=Object.assign(k,{setup(c){return(b,i)=>{const l=r("ShowCode");return h(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[6]||(i[6]=p("",5)),a(l,{title:"代码演示",code:`
<template>
    <MYResult title='操作成功' subTitle='您的操作已成功完成' />
</template>
  `.trim()},{demo:e(()=>[a(n,{title:"操作成功",subTitle:"您的操作已成功完成"})]),_:1},8,["code"]),i[7]||(i[7]=s("h2",{id:"图标类型",tabindex:"-1"},[t("图标类型 "),s("a",{class:"header-anchor",href:"#图标类型","aria-label":"Permalink to “图标类型”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tubiaoleixing tu biao lei xing tblx ")],-1)),i[8]||(i[8]=s("p",null,[t("通过"),s("code",null,"icon"),t("属性可以设置结果图标。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"tongguoshuxingkeyishezhijieguotubiao。 tong guo shu xing ke yi she zhi jie guo tu biao 。 tgsxkyszjgtb。")],-1)),a(l,{title:"代码演示",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYResult icon='primary' title='主要结果' subTitle='这是一个主要结果' />
        <MYResult icon='success' title='成功结果' subTitle='操作成功完成' />
        <MYResult icon='warning' title='警告结果' subTitle='请注意相关事项' />
        <MYResult icon='error' title='错误结果' subTitle='操作失败，请重试' />
        <MYResult icon='info' title='信息结果' subTitle='这是一条信息提示' />
    </div>
</template>
  `.trim()},{demo:e(()=>[s("div",u,[a(n,{icon:"primary",title:"主要结果",subTitle:"这是一个主要结果"}),a(n,{icon:"success",title:"成功结果",subTitle:"操作成功完成"}),a(n,{icon:"warning",title:"警告结果",subTitle:"请注意相关事项"}),a(n,{icon:"error",title:"错误结果",subTitle:"操作失败，请重试"}),a(n,{icon:"info",title:"信息结果",subTitle:"这是一条信息提示"})])]),_:1},8,["code"]),i[9]||(i[9]=s("h2",{id:"插槽使用",tabindex:"-1"},[t("插槽使用 "),s("a",{class:"header-anchor",href:"#插槽使用","aria-label":"Permalink to “插槽使用”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"chacaoshiyong cha cao shi yong ccsy ")],-1)),i[10]||(i[10]=s("p",null,[t("使用插槽可以自定义副标题和额外内容。"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongchacaokeyizidingyifubiaotiheewaineirong。 shi yong cha cao ke yi zi ding yi fu biao ti he e wai nei rong 。 sycckyzdyfbthewnr。")],-1)),a(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(n,{title:"操作成功",icon:"success"},{"sub-title":e(()=>[...i[0]||(i[0]=[s("div",{style:{color:"#52c41a","font-weight":"bold"}}," 自定义副标题内容，支持HTML ",-1)])]),extra:e(()=>[s("div",g,[a(d,{type:"primary"},{default:e(()=>[...i[1]||(i[1]=[t("返回首页",-1)])]),_:1}),a(d,{type:"info"},{default:e(()=>[...i[2]||(i[2]=[t("查看详情",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),i[11]||(i[11]=s("h2",{id:"组合使用",tabindex:"-1"},[t("组合使用 "),s("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[12]||(i[12]=s("p",null,[t("最后，实现个多种api组合使用实现个结果页面："),s("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangejieguoyemian： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge jie guo ye mian ： zh，sxgdzazhsysxgjgym：")],-1)),a(l,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[a(n,{title:"组合使用示例",icon:"success"},{"sub-title":e(()=>[...i[3]||(i[3]=[s("div",{style:{color:"#409EFF"}}," 这是一个组合使用的完整示例 ",-1)])]),extra:e(()=>[s("div",y,[a(d,{type:"primary",size:"large"},{default:e(()=>[...i[4]||(i[4]=[t("主要操作",-1)])]),_:1}),a(d,{type:"info",size:"large",plain:""},{default:e(()=>[...i[5]||(i[5]=[t("次要操作",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),i[13]||(i[13]=p("",7))])}}});export{A as __pageData,j as default};

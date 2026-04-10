import{_ as l}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{m as e}from"./chunks/messageManager.DFctwySm.js";import{I as T,o as H,c as P,a8 as k,J as n,w as t,j as i,a,A as F}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const j={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},L={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},S={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},I={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},O={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},J=JSON.parse('{"title":"Message","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackMessage.md","filePath":"plus/FeedbackMessage.md"}'),V={name:"plus/FeedbackMessage.md"},G=Object.assign(V,{setup(N){const p=F(null),d=()=>{e.info("这是一条信息提示"),console.log("显示信息提示")},r=()=>{e.success("操作成功！"),console.log("显示成功提示")},o=()=>{e.warning("请注意操作风险"),console.log("显示警告提示")},g=()=>{e.error("操作失败，请重试"),console.log("显示错误提示")},y=()=>{e({content:"这条消息可以手动关闭",type:"info",showClose:!0}),console.log("显示带关闭按钮的消息")},u=()=>{e({content:"这条消息只显示1秒",type:"success",duration:1e3}),console.log("显示短时间消息")},c=()=>{e({content:"这条消息显示10秒",type:"warning",duration:1e4}),console.log("显示长时间消息")},B=()=>{e({content:"这条消息不会自动关闭",type:"info",duration:0,showClose:!0}),console.log("显示永久消息")},b=()=>{e({content:"左上角消息",position:"top-left"}),console.log("显示左上角消息")},x=()=>{e({content:"右上角消息",position:"top-right"}),console.log("显示右上角消息")},A=()=>{e({content:"顶部居中消息",position:"top-center"}),console.log("显示顶部居中消息")},f=()=>{e({content:"左下角消息",position:"bottom-left"}),console.log("显示左下角消息")},D=()=>{e({content:"右下角消息",position:"bottom-right"}),console.log("显示右下角消息")},m=()=>{e({content:"底部居中消息",position:"bottom-center"}),console.log("显示底部居中消息")},M=()=>{e({content:'<strong>加粗文本</strong> 和 <span style="color: red;">红色文本</span>',dangerouslyUseHTMLString:!0}),console.log("显示HTML内容消息")},C=()=>{p.value=e({content:"这条消息需要通过按钮关闭",type:"info",duration:0}),console.log("显示手动关闭消息")},z=()=>{p.value&&(p.value.close(),p.value=null),console.log("手动关闭消息")},w=()=>{e({content:"关闭时会触发回调",type:"success",onClose:()=>{console.log("消息已关闭")}}),console.log("显示带回调的消息")},E=()=>{e({content:"这条消息有自定义偏移量",type:"info",offset:100}),console.log("显示带偏移量的消息")},Y=()=>{e({content:"消息1",offset:20}),e({content:"消息2",offset:80}),e({content:"消息3",offset:140}),console.log("显示多个偏移消息")},v=()=>{e({content:"组合使用示例消息",type:"success",duration:5e3,showClose:!0,position:"top-center",offset:50,zIndex:1e4,onClose:()=>{console.log("组合消息已关闭")}}),console.log("显示组合使用消息")};return(q,s)=>{const h=T("ShowCode");return H(),P("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[s[21]||(s[21]=k("",5)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showInfo'>信息提示</MYButton>
        <MYButton @click='showSuccess'>成功提示</MYButton>
        <MYButton @click='showWarning'>警告提示</MYButton>
        <MYButton @click='showError'>错误提示</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[i("div",j,[n(l,{onClick:d},{default:t(()=>[...s[0]||(s[0]=[a("信息提示",-1)])]),_:1}),n(l,{onClick:r},{default:t(()=>[...s[1]||(s[1]=[a("成功提示",-1)])]),_:1}),n(l,{onClick:o},{default:t(()=>[...s[2]||(s[2]=[a("警告提示",-1)])]),_:1}),n(l,{onClick:g},{default:t(()=>[...s[3]||(s[3]=[a("错误提示",-1)])]),_:1})])]),_:1},8,["code"]),s[22]||(s[22]=i("h2",{id:"显示关闭按钮",tabindex:"-1"},[a("显示关闭按钮 "),i("a",{class:"header-anchor",href:"#显示关闭按钮","aria-label":"Permalink to “显示关闭按钮”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xianshiguanbianniu xian shi guan bi an niu xsgban ")],-1)),s[23]||(s[23]=i("p",null,[a("使用"),i("code",null,"showClose"),a("属性可以显示关闭按钮。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyixianshiguanbianniu。 shi yong shu xing ke yi xian shi guan bi an niu 。 sysxkyxsgban。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <MYButton @click='showClosableMessage'>显示关闭按钮</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:y},{default:t(()=>[...s[4]||(s[4]=[a("显示关闭按钮",-1)])]),_:1})]),_:1},8,["code"]),s[24]||(s[24]=i("h2",{id:"自定义持续时间",tabindex:"-1"},[a("自定义持续时间 "),i("a",{class:"header-anchor",href:"#自定义持续时间","aria-label":"Permalink to “自定义持续时间”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichixushijian zi ding yi chi xu shi jian zdycxsj ")],-1)),s[25]||(s[25]=i("p",null,[a("使用"),i("code",null,"duration"),a("属性可以自定义消息显示的持续时间。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyixiaoxixianshidechixushijian。 shi yong shu xing ke yi zi ding yi xiao xi xian shi de chi xu shi jian 。 sysxkyzdyxxxsdcxsj。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showShortMessage'>短时间 (1秒)</MYButton>
        <MYButton @click='showLongMessage'>长时间 (10秒)</MYButton>
        <MYButton @click='showPermanentMessage'>永久显示</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[i("div",L,[n(l,{onClick:u},{default:t(()=>[...s[5]||(s[5]=[a("短时间 (1秒)",-1)])]),_:1}),n(l,{onClick:c},{default:t(()=>[...s[6]||(s[6]=[a("长时间 (10秒)",-1)])]),_:1}),n(l,{onClick:B},{default:t(()=>[...s[7]||(s[7]=[a("永久显示",-1)])]),_:1})])]),_:1},8,["code"]),s[26]||(s[26]=i("h2",{id:"自定义位置",tabindex:"-1"},[a("自定义位置 "),i("a",{class:"header-anchor",href:"#自定义位置","aria-label":"Permalink to “自定义位置”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiweizhi zi ding yi wei zhi zdywz ")],-1)),s[27]||(s[27]=i("p",null,[a("使用"),i("code",null,"position"),a("属性可以设置消息显示的位置。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhixiaoxixianshideweizhi。 shi yong shu xing ke yi she zhi xiao xi xian shi de wei zhi 。 sysxkyszxxxsdwz。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showTopLeft'>左上角</MYButton>
        <MYButton @click='showTopRight'>右上角</MYButton>
        <MYButton @click='showTopCenter'>顶部居中</MYButton>
        <MYButton @click='showBottomLeft'>左下角</MYButton>
        <MYButton @click='showBottomRight'>右下角</MYButton>
        <MYButton @click='showBottomCenter'>底部居中</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[i("div",S,[n(l,{onClick:b},{default:t(()=>[...s[8]||(s[8]=[a("左上角",-1)])]),_:1}),n(l,{onClick:x},{default:t(()=>[...s[9]||(s[9]=[a("右上角",-1)])]),_:1}),n(l,{onClick:A},{default:t(()=>[...s[10]||(s[10]=[a("顶部居中",-1)])]),_:1}),n(l,{onClick:f},{default:t(()=>[...s[11]||(s[11]=[a("左下角",-1)])]),_:1}),n(l,{onClick:D},{default:t(()=>[...s[12]||(s[12]=[a("右下角",-1)])]),_:1}),n(l,{onClick:m},{default:t(()=>[...s[13]||(s[13]=[a("底部居中",-1)])]),_:1})])]),_:1},8,["code"]),s[28]||(s[28]=i("h2",{id:"html内容支持",tabindex:"-1"},[a("HTML内容支持 "),i("a",{class:"header-anchor",href:"#html内容支持","aria-label":"Permalink to “HTML内容支持”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"HTMLneirongzhichi HTML nei rong zhi chi Hnrzc ")],-1)),s[29]||(s[29]=i("p",null,[a("使用"),i("code",null,"dangerouslyUseHTMLString"),a("属性可以支持HTML内容（注意XSS风险）。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizhichiHTMLneirong（zhuyiXSSfengxian）。 shi yong shu xing ke yi zhi chi HTML nei rong （ zhu yi XSS feng xian ）。 sysxkyzcHnr（zyXfx）")],-1)),n(h,{title:"代码演示",code:`
<template>
    <MYButton @click='showHTMLMessage'>显示HTML内容</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:M},{default:t(()=>[...s[14]||(s[14]=[a("显示HTML内容",-1)])]),_:1})]),_:1},8,["code"]),s[30]||(s[30]=i("h2",{id:"手动关闭控制",tabindex:"-1"},[a("手动关闭控制 "),i("a",{class:"header-anchor",href:"#手动关闭控制","aria-label":"Permalink to “手动关闭控制”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shoudongguanbikongzhi shou dong guan bi kong zhi sdgbkz ")],-1)),s[31]||(s[31]=i("p",null,[a("可以通过返回值手动控制消息的关闭。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"keyitongguofanhuizhishoudongkongzhixiaoxideguanbi。 ke yi tong guo fan hui zhi shou dong kong zhi xiao xi de guan bi 。 kytgfhzsdkzxxdgb。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showManualMessage'>显示可手动关闭的消息</MYButton>
        <MYButton @click='closeManualMessage' :disabled='!manualMessageHandle'>
            手动关闭
        </MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[i("div",I,[n(l,{onClick:C},{default:t(()=>[...s[15]||(s[15]=[a("显示可手动关闭的消息",-1)])]),_:1}),n(l,{onClick:z,disabled:!p.value},{default:t(()=>[...s[16]||(s[16]=[a(" 手动关闭 ",-1)])]),_:1},8,["disabled"])])]),_:1},8,["code"]),s[32]||(s[32]=i("h2",{id:"关闭回调",tabindex:"-1"},[a("关闭回调 "),i("a",{class:"header-anchor",href:"#关闭回调","aria-label":"Permalink to “关闭回调”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"guanbihuitiao guan bi hui tiao gbht ")],-1)),s[33]||(s[33]=i("p",null,[a("使用"),i("code",null,"onClose"),a("属性可以在消息关闭时执行回调函数。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizaixiaoxiguanbishizhihanghuitiaohanshu。 shi yong shu xing ke yi zai xiao xi guan bi shi zhi hang hui tiao han shu 。 sysxkyzxxgbszhhths。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <MYButton @click='showMessageWithCallback'>显示带回调的消息</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:w},{default:t(()=>[...s[17]||(s[17]=[a("显示带回调的消息",-1)])]),_:1})]),_:1},8,["code"]),s[34]||(s[34]=i("h2",{id:"偏移量设置",tabindex:"-1"},[a("偏移量设置 "),i("a",{class:"header-anchor",href:"#偏移量设置","aria-label":"Permalink to “偏移量设置”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"pianyiliangshezhi pian yi liang she zhi pylsz ")],-1)),s[35]||(s[35]=i("p",null,[a("使用"),i("code",null,"offset"),a("属性可以设置消息容器的偏移量。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyishezhixiaoxirongqidepianyiliang。 shi yong shu xing ke yi she zhi xiao xi rong qi de pian yi liang 。 sysxkyszxxrqdpyl。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showMessageWithOffset'>带偏移量的消息</MYButton>
        <MYButton @click='showMultipleOffsetMessages'>多个偏移消息</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[i("div",O,[n(l,{onClick:E},{default:t(()=>[...s[18]||(s[18]=[a("带偏移量的消息",-1)])]),_:1}),n(l,{onClick:Y},{default:t(()=>[...s[19]||(s[19]=[a("多个偏移消息",-1)])]),_:1})])]),_:1},8,["code"]),s[36]||(s[36]=i("h2",{id:"组合使用",tabindex:"-1"},[a("组合使用 "),i("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),s[37]||(s[37]=i("p",null,[a("最后，实现个多种api组合使用实现个完整的消息提示："),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangewanzhengdexiaoxitishi： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge wan zheng de xiao xi ti shi ： zh，sxgdzazhsysxgwzdxxts：")],-1)),n(h,{title:"代码演示",code:`
<template>
    <MYButton @click='showComplexMessage'>组合使用示例</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:v},{default:t(()=>[...s[20]||(s[20]=[a("组合使用示例",-1)])]),_:1})]),_:1},8,["code"]),s[38]||(s[38]=k("",11))])}}});export{J as __pageData,G as default};

import{_ as e}from"./chunks/badge.vue_vue_type_script_setup_true_lang.uU3XICJV.js";import{_ as d}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as l,o,c as r,a8 as p,J as n,w as s,a as t,j as a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const g={style:{display:"flex",gap:"20px"}},y={style:{display:"flex",gap:"20px"}},u={style:{display:"flex",gap:"20px","align-items":"center"}},Y=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackBadge.md","filePath":"plus/FeedbackBadge.md"}'),k={name:"plus/FeedbackBadge.md"},A=Object.assign(k,{setup(z){return(m,i)=>{const h=l("ShowCode");return o(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[11]||(i[11]=p("",5)),n(h,{title:"代码演示",code:`
<template>
    <MYBadge :content='5'>
        <MYButton type='primary'>消息</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:s(()=>[n(e,{content:5},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[0]||(i[0]=[t("消息",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[12]||(i[12]=a("h2",{id:"小红点模式",tabindex:"-1"},[t("小红点模式 "),a("a",{class:"header-anchor",href:"#小红点模式","aria-label":"Permalink to “小红点模式”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"xiaohongdianmoshi xiao hong dian mo shi xhdms ")],-1)),i[13]||(i[13]=a("p",null,[t("使用"),a("code",null,"dot"),t("属性可以显示小红点而不显示具体数字。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyixianshixiaohongdianerbuxianshijutishuzi。 shi yong shu xing ke yi xian shi xiao hong dian er bu xian shi ju ti shu zi 。 sysxkyxsxhdebxsjtsz。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <MYBadge dot>
        <MYButton type='primary'>通知</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:s(()=>[n(e,{dot:""},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[1]||(i[1]=[t("通知",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[14]||(i[14]=a("h2",{id:"自定义颜色",tabindex:"-1"},[t("自定义颜色 "),a("a",{class:"header-anchor",href:"#自定义颜色","aria-label":"Permalink to “自定义颜色”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyiyanse zi ding yi yan se zdyys ")],-1)),i[15]||(i[15]=a("p",null,[t("使用"),a("code",null,"color"),t("属性可以自定义徽章颜色。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyizidingyihuizhangyanse。 shi yong shu xing ke yi zi ding yi hui zhang yan se 。 sysxkyzdyhzys。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <MYBadge :content='8' color='#52c41a'>
        <MYButton type='primary'>绿色徽章</MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:s(()=>[n(e,{content:8,color:"#52c41a"},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[2]||(i[2]=[t("绿色徽章",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[16]||(i[16]=a("h2",{id:"位置调整",tabindex:"-1"},[t("位置调整 "),a("a",{class:"header-anchor",href:"#位置调整","aria-label":"Permalink to “位置调整”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"weizhitiaozheng wei zhi tiao zheng wztz ")],-1)),i[17]||(i[17]=a("p",null,[t("使用"),a("code",null,"position"),t("属性可以调整徽章的位置。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyitiaozhenghuizhangdeweizhi。 shi yong shu xing ke yi tiao zheng hui zhang de wei zhi 。 sysxkytzhzdwz。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='3' position='top-left'>
            <MYButton type='primary'>左上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='top-right'>
            <MYButton type='primary'>右上</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-left'>
            <MYButton type='primary'>左下</MYButton>
        </MYBadge>
        <MYBadge :content='3' position='bottom-right'>
            <MYButton type='primary'>右下</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:s(()=>[a("div",g,[n(e,{content:3,position:"top-left"},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[3]||(i[3]=[t("左上",-1)])]),_:1})]),_:1}),n(e,{content:3,position:"top-right"},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[4]||(i[4]=[t("右上",-1)])]),_:1})]),_:1}),n(e,{content:3,position:"bottom-left"},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[5]||(i[5]=[t("左下",-1)])]),_:1})]),_:1}),n(e,{content:3,position:"bottom-right"},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[6]||(i[6]=[t("右下",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[18]||(i[18]=a("h2",{id:"最大值限制",tabindex:"-1"},[t("最大值限制 "),a("a",{class:"header-anchor",href:"#最大值限制","aria-label":"Permalink to “最大值限制”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuidazhixianzhi zui da zhi xian zhi zdzxz ")],-1)),i[19]||(i[19]=a("p",null,[t("使用"),a("code",null,"max"),t("属性可以限制徽章显示的最大数值。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongshuxingkeyixianzhihuizhangxianshidezuidashuzhi。 shi yong shu xing ke yi xian zhi hui zhang xian shi de zui da shu zhi 。 sysxkyxzhzxsdzdsz。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px;'>
        <MYBadge :content='100' :max='99'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='100' :max='10'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
        <MYBadge :content='8' :max='5'>
            <MYButton type='primary'>消息</MYButton>
        </MYBadge>
    </div>
</template>
  `.trim()},{demo:s(()=>[a("div",y,[n(e,{content:100,max:99},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[7]||(i[7]=[t("消息",-1)])]),_:1})]),_:1}),n(e,{content:100,max:10},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[8]||(i[8]=[t("消息",-1)])]),_:1})]),_:1}),n(e,{content:8,max:5},{default:s(()=>[n(d,{type:"primary"},{default:s(()=>[...i[9]||(i[9]=[t("消息",-1)])]),_:1})]),_:1})])]),_:1},8,["code"]),i[20]||(i[20]=a("h2",{id:"独立使用",tabindex:"-1"},[t("独立使用 "),a("a",{class:"header-anchor",href:"#独立使用","aria-label":"Permalink to “独立使用”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"dulishiyong du li shi yong dlsy ")],-1)),i[21]||(i[21]=a("p",null,[t("徽章也可以独立使用，不包裹任何内容。"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"huizhangyekeyidulishiyong，bubaoguorenheneirong。 hui zhang ye ke yi du li shi yong ， bu bao guo ren he nei rong 。 hzykydlsy，bbgrhnr。")],-1)),n(h,{title:"代码演示",code:`
<template>
    <div style='display: flex; gap: 20px; align-items: center;'>
        <MYBadge :content='5' />
        <MYBadge :content='新消息!' />
        <MYBadge dot />
    </div>
</template>
  `.trim()},{demo:s(()=>[a("div",u,[n(e,{content:5}),n(e,{content:"新消息!"}),n(e,{dot:""})])]),_:1},8,["code"]),i[22]||(i[22]=a("h2",{id:"组合使用",tabindex:"-1"},[t("组合使用 "),a("a",{class:"header-anchor",href:"#组合使用","aria-label":"Permalink to “组合使用”"},"​"),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuheshiyong zu he shi yong zhsy ")],-1)),i[23]||(i[23]=a("p",null,[t("最后，实现个多种api组合使用实现个徽章："),a("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zuihou，shixiangeduozhongapizuheshiyongshixiangehuizhang： zui hou ， shi xian ge duo zhong api zu he shi yong shi xian ge hui zhang ： zh，sxgdzazhsysxghz：")],-1)),n(h,{title:"代码演示",code:`
<template>
    <MYBadge 
        :content='25' 
        color='#8d4dd1'
        position='bottom-right'
        :max='20'
        dot
    >
        <MYButton 
            type='primary'
            size='large'
        >
            组合徽章
        </MYButton>
    </MYBadge>
</template>
  `.trim()},{demo:s(()=>[n(e,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:s(()=>[n(d,{type:"primary",size:"large"},{default:s(()=>[...i[10]||(i[10]=[t(" 组合徽章 ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[24]||(i[24]=p("",5))])}}});export{Y as __pageData,A as default};

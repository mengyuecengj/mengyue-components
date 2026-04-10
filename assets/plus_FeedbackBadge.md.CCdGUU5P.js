import{_ as e}from"./chunks/badge.vue_vue_type_script_setup_true_lang.uU3XICJV.js";import{_ as d}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as l,o,c as r,a8 as p,J as n,w as s,a as t,j as a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const g={style:{display:"flex",gap:"20px"}},y={style:{display:"flex",gap:"20px"}},u={style:{display:"flex",gap:"20px","align-items":"center"}},Y=JSON.parse('{"title":"Badge","description":"","frontmatter":{},"headers":[],"relativePath":"plus/FeedbackBadge.md","filePath":"plus/FeedbackBadge.md"}'),k={name:"plus/FeedbackBadge.md"},A=Object.assign(k,{setup(z){return(m,i)=>{const h=l("ShowCode");return o(),r("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[i[11]||(i[11]=p('<h1 id="badge" tabindex="-1">Badge <a class="header-anchor" href="#badge" aria-label="Permalink to “Badge”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>badge徽章组件，用于在图标或文字旁显示未读消息数或状态标记。。<br> 可以使用<code>&lt;MYBadge&gt;&lt;/MYBadge&gt;</code>或者<code>&lt;MYBadge /&gt;</code>来实现一个徽章<span class="pagefind-pinyin" aria-hidden="true">badgehuizhangzujian，yongyuzaitubiaohuowenzipangxianshiweiduxiaoxishuhuozhuangtaibiaoji。。keyishiyonghuozhelaishixianyigehuizhang badge hui zhang zu jian ， yong yu zai tu biao huo wen zi pang xian shi wei du xiao xi shu huo zhuang tai biao ji 。。 ke yi shi yong huo zhe lai shi xian yi ge hui zhang bhzzj，yyztbhwzpxswdxxshztbj。kysyhzlsxyghz</span></p><h2 id="数字内容" tabindex="-1">数字内容 <a class="header-anchor" href="#数字内容" aria-label="Permalink to “数字内容”">​</a><span class="pagefind-pinyin" aria-hidden="true">shuzineirong shu zi nei rong sznr </span></h2><p>使用<code>content</code>属性设置徽章内容。<span class="pagefind-pinyin" aria-hidden="true">shiyongshuxingshezhihuizhangneirong。 shi yong shu xing she zhi hui zhang nei rong 。 sysxszhznr。</span></p>',5)),n(h,{title:"代码演示",code:`
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
  `.trim()},{demo:s(()=>[n(e,{content:25,color:"#8d4dd1",position:"bottom-right",max:20,dot:""},{default:s(()=>[n(d,{type:"primary",size:"large"},{default:s(()=>[...i[10]||(i[10]=[t(" 组合徽章 ",-1)])]),_:1})]),_:1})]),_:1},8,["code"]),i[24]||(i[24]=p(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>content</td><td>徽章内容<span class="pagefind-pinyin" aria-hidden="true">huizhangneirong hui zhang nei rong hznr</span></td><td>string | number</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>dot</td><td>是否显示小红点<span class="pagefind-pinyin" aria-hidden="true">shifouxianshixiaohongdian shi fou xian shi xiao hong dian sfxsxhd</span></td><td>boolean</td><td>—</td><td><code>false</code></td></tr><tr><td>color</td><td>徽章颜色<span class="pagefind-pinyin" aria-hidden="true">huizhangyanse hui zhang yan se hzys</span></td><td>string</td><td>支持16进制颜色或单词颜色<span class="pagefind-pinyin" aria-hidden="true">zhichi16jinzhiyansehuodanciyanse zhi chi 16 jin zhi yan se huo dan ci yan se zc1jzyshdcys</span></td><td><code>&#39;#ff4d4f&#39;</code></td></tr><tr><td>position</td><td>徽章位置<span class="pagefind-pinyin" aria-hidden="true">huizhangweizhi hui zhang wei zhi hzwz</span></td><td>string</td><td><code>top-right</code>/<code>top-left</code>/<code>bottom-right</code>/<code>bottom-left</code></td><td><code>&#39;top-right&#39;</code></td></tr><tr><td>max</td><td>最大值限制<span class="pagefind-pinyin" aria-hidden="true">zuidazhixianzhi zui da zhi xian zhi zdzxz</span></td><td>number</td><td>—</td><td><code>99</code></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> BadgeProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  content</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  dot</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">boolean</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  position</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">top-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bottom-right</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> | </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">bottom-left</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  max</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">number</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5))])}}});export{Y as __pageData,A as default};

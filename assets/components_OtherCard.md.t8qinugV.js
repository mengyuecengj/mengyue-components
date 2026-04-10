import{_ as d}from"./chunks/card.vue_vue_type_script_setup_true_lang.DKRn-L6m.js";import{I as l,o as r,c as o,a8 as p,J as t,w as e,j as i,a as n}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const h={style:{"max-width":"400px"}},g={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},y={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},x={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},u={style:{"max-width":"400px"}},f={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},z=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherCard.md","filePath":"components/OtherCard.md"}'),b={name:"components/OtherCard.md"},j=Object.assign(b,{setup(k){return(c,a)=>{const s=l("ShowCode");return r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[25]||(a[25]=p('<h1 id="card" tabindex="-1">Card <a class="header-anchor" href="#card" aria-label="Permalink to “Card”">​</a></h1><h2 id="简易介绍" tabindex="-1">简易介绍 <a class="header-anchor" href="#简易介绍" aria-label="Permalink to “简易介绍”">​</a><span class="pagefind-pinyin" aria-hidden="true">jianyijieshao jian yi jie shao jyjs </span></h2><p>Card 卡片组件，用于展示信息和内容块，支持自定义头部、主体和底部。mengyue-components 进行了封装并进行了 vitest 测试。 可以使用 <code>&lt;MYCard&gt;&lt;/MYCard&gt;</code> 或者 <code>&lt;MYCard /&gt;</code> 来实现卡片布局。<span class="pagefind-pinyin" aria-hidden="true">Card kapianzujian，yongyuzhanshixinxiheneirongkuai，zhichizidingyitoubu、zhutihedibu。mengyue-components jinhanglefengzhuangbingjinhangle vitest ceshi。keyishiyong huozhe laishixiankapianbuju。 Card ka pian zu jian ， yong yu zhan shi xin xi he nei rong kuai ， zhi chi zi ding yi tou bu 、 zhu ti he di bu 。mengyue-components jin hang le feng zhuang bing jin hang le vitest ce shi 。 ke yi shi yong huo zhe lai shi xian ka pian bu ju 。 Ckpzj，yyzsxxhnrk，zczdytb、zthdb。jhlfzbjhl cs。kysy hz lsxkpbj。</span></p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to “基本用法”">​</a><span class="pagefind-pinyin" aria-hidden="true">jibenyongfa ji ben yong fa jbyf </span></h2><h3 id="基础卡片" tabindex="-1">基础卡片 <a class="header-anchor" href="#基础卡片" aria-label="Permalink to “基础卡片”">​</a><span class="pagefind-pinyin" aria-hidden="true">jichukapian ji chu ka pian jckp </span></h3><p>基础的卡片组件，包含头部、主体和底部。<span class="pagefind-pinyin" aria-hidden="true">jichudekapianzujian，baohantoubu、zhutihedibu。 ji chu de ka pian zu jian ， bao han tou bu 、 zhu ti he di bu 。 jcdkpzj，bhtb、zthdb。</span></p>',6)),t(s,{title:"代码演示",code:`
<template>
  <MYCard>
    <template #header>
      <div style='font-weight: bold;'>卡片标题</div>
    </template>
    <template #body>
      <p>这里是卡片的主体内容</p>
      <p>可以放置任何类型的内容</p>
    </template>
    <template #footer>
      <div style='text-align: right; color: #666;'>卡片底部</div>
    </template>
  </MYCard>
</template>
  `.trim()},{demo:e(()=>[i("div",h,[t(d,null,{header:e(()=>[...a[0]||(a[0]=[i("div",{style:{"font-weight":"bold"}},"卡片标题",-1)])]),body:e(()=>[...a[1]||(a[1]=[i("p",null,"这里是卡片的主体内容",-1),i("p",null,"可以放置任何类型的内容",-1)])]),footer:e(()=>[...a[2]||(a[2]=[i("div",{style:{"text-align":"right",color:"#666"}},"卡片底部",-1)])]),_:1})])]),_:1},8,["code"]),a[26]||(a[26]=i("h3",{id:"自定义尺寸",tabindex:"-1"},[n("自定义尺寸 "),i("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyichicun zi ding yi chi cun zdycc ")],-1)),a[27]||(a[27]=i("p",null,[n("使用 "),i("code",null,"width"),n(" 和 "),i("code",null,"height"),n(" 属性自定义卡片的尺寸。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong he shuxingzidingyikapiandechicun。 shi yong he shu xing zi ding yi ka pian de chi cun 。 sy h sxzdykpdcc。")],-1)),t(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' height='150px'>
      <template #header>小卡片</template>
      <template #body>
        <p>200px × 150px</p>
      </template>
    </MYCard>
    <MYCard width='300px' height='200px'>
      <template #header>中等卡片</template>
      <template #body>
        <p>300px × 200px</p>
      </template>
    </MYCard>
    <MYCard width='400px' height='250px'>
      <template #header>大卡片</template>
      <template #body>
        <p>400px × 250px</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:e(()=>[i("div",g,[t(d,{width:"200px",height:"150px"},{header:e(()=>[...a[3]||(a[3]=[n("小卡片",-1)])]),body:e(()=>[...a[4]||(a[4]=[i("p",null,"200px × 150px",-1)])]),_:1}),t(d,{width:"300px",height:"200px"},{header:e(()=>[...a[5]||(a[5]=[n("中等卡片",-1)])]),body:e(()=>[...a[6]||(a[6]=[i("p",null,"300px × 200px",-1)])]),_:1}),t(d,{width:"400px",height:"250px"},{header:e(()=>[...a[7]||(a[7]=[n("大卡片",-1)])]),body:e(()=>[...a[8]||(a[8]=[i("p",null,"400px × 250px",-1)])]),_:1})])]),_:1},8,["code"]),a[28]||(a[28]=i("h3",{id:"自定义背景色",tabindex:"-1"},[n("自定义背景色 "),i("a",{class:"header-anchor",href:"#自定义背景色","aria-label":"Permalink to “自定义背景色”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"zidingyibeijingse zi ding yi bei jing se zdybjs ")],-1)),a[29]||(a[29]=i("p",null,[n("使用 "),i("code",null,"backgroundColor"),n(" 属性自定义卡片的背景颜色。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyong shuxingzidingyikapiandebeijingyanse。 shi yong shu xing zi ding yi ka pian de bei jing yan se 。 sy sxzdykpdbjys。")],-1)),t(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='250px' background-color='#f0f9ff'>
      <template #header style='color: #0369a1;'>浅蓝色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#f0f9ff</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#fef2f2'>
      <template #header style='color: #dc2626;'>浅红色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#fef2f2</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#f0fdf4'>
      <template #header style='color: #16a34a;'>浅绿色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#f0fdf4</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:e(()=>[i("div",y,[t(d,{width:"250px","background-color":"#f0f9ff"},{header:e(()=>[...a[9]||(a[9]=[i("div",{style:{color:"#0369a1"}},"浅蓝色卡片",-1)])]),body:e(()=>[...a[10]||(a[10]=[i("p",null,"自定义背景颜色",-1),i("p",null,"#f0f9ff",-1)])]),_:1}),t(d,{width:"250px","background-color":"#fef2f2"},{header:e(()=>[...a[11]||(a[11]=[i("div",{style:{color:"#dc2626"}},"浅红色卡片",-1)])]),body:e(()=>[...a[12]||(a[12]=[i("p",null,"自定义背景颜色",-1),i("p",null,"#fef2f2",-1)])]),_:1}),t(d,{width:"250px","background-color":"#f0fdf4"},{header:e(()=>[...a[13]||(a[13]=[i("div",{style:{color:"#16a34a"}},"浅绿色卡片",-1)])]),body:e(()=>[...a[14]||(a[14]=[i("p",null,"自定义背景颜色",-1),i("p",null,"#f0fdf4",-1)])]),_:1})])]),_:1},8,["code"]),a[30]||(a[30]=i("h3",{id:"产品展示卡片",tabindex:"-1"},[n("产品展示卡片 "),i("a",{class:"header-anchor",href:"#产品展示卡片","aria-label":"Permalink to “产品展示卡片”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"chanpinzhanshikapian chan pin zhan shi ka pian cpzskp ")],-1)),a[31]||(a[31]=i("p",null,[n("使用卡片展示产品信息。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongkapianzhanshichanpinxinxi。 shi yong ka pian zhan shi chan pin xin xi 。 sykpzscpxx。")],-1)),t(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='280px'>
      <template #header>
        <div style='display: flex; justify-content: space-between; align-items: center;'>
          <span style='font-weight: bold;'>MacBook Pro</span>
          <span style='color: #409EFF;'>￥12999</span>
        </div>
      </template>
      <template #body>
        <div style='text-align: center; margin-bottom: 15px;'>
          <div style='width: 100%; height: 120px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px;'>
            💻
          </div>
        </div>
        <p>13英寸，M2芯片，8GB内存，256GB存储</p>
        <ul style='color: #666; font-size: 14px;'>
          <li>Retina 显示屏</li>
          <li>触控栏和触控 ID</li>
          <li>最长可达 20 小时电池续航</li>
        </ul>
      </template>
      <template #footer>
        <div style='display: flex; gap: 10px;'>
          <button style='flex: 1; padding: 8px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>立即购买</button>
          <button style='flex: 1; padding: 8px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;'>加入购物车</button>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:e(()=>[i("div",x,[t(d,{width:"280px"},{header:e(()=>[...a[15]||(a[15]=[i("div",{style:{display:"flex","justify-content":"space-between","align-items":"center"}},[i("span",{style:{"font-weight":"bold"}},"MacBook Pro"),i("span",{style:{color:"#409EFF"}},"￥12999")],-1)])]),body:e(()=>[...a[16]||(a[16]=[i("div",{style:{"text-align":"center","margin-bottom":"15px"}},[i("div",{style:{width:"100%",height:"120px",background:"#f5f5f5",display:"flex","align-items":"center","justify-content":"center","border-radius":"4px"}}," 💻 ")],-1),i("p",null,"13英寸，M2芯片，8GB内存，256GB存储",-1),i("ul",{style:{color:"#666","font-size":"14px"}},[i("li",null,"Retina 显示屏"),i("li",null,"触控栏和触控 ID"),i("li",null,"最长可达 20 小时电池续航")],-1)])]),footer:e(()=>[...a[17]||(a[17]=[i("div",{style:{display:"flex",gap:"10px"}},[i("button",{style:{flex:"1",padding:"8px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"立即购买"),i("button",{style:{flex:"1",padding:"8px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"加入购物车")],-1)])]),_:1})])]),_:1},8,["code"]),a[32]||(a[32]=i("h3",{id:"用户信息卡片",tabindex:"-1"},[n("用户信息卡片 "),i("a",{class:"header-anchor",href:"#用户信息卡片","aria-label":"Permalink to “用户信息卡片”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"yonghuxinxikapian yong hu xin xi ka pian yhxxkp ")],-1)),a[33]||(a[33]=i("p",null,[n("使用卡片展示用户信息。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongkapianzhanshiyonghuxinxi。 shi yong ka pian zhan shi yong hu xin xi 。 sykpzsyhxx。")],-1)),t(s,{title:"代码演示",code:`
<template>
  <MYCard width='320px' background-color='#f8fafc'>
    <template #header>
      <div style='display: flex; align-items: center; gap: 12px;'>
        <div style='width: 40px; height: 40px; background: #409EFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;'>
          U
        </div>
        <div>
          <div style='font-weight: bold;'>张三</div>
          <div style='color: #666; font-size: 14px;'>高级用户</div>
        </div>
      </div>
    </template>
    <template #body>
      <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 15px;'>
        <div>
          <div style='color: #666; font-size: 12px;'>邮箱</div>
          <div>zhangsan@example.com</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>电话</div>
          <div>138****1234</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>部门</div>
          <div>技术部</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>职位</div>
          <div>前端工程师</div>
        </div>
      </div>
    </template>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button style='padding: 6px 12px; border: 1px solid #409EFF; color: #409EFF; background: white; border-radius: 4px; cursor: pointer;'>编辑</button>
        <button style='padding: 6px 12px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>联系</button>
      </div>
    </template>
  </MYCard>
</template>
  `.trim()},{demo:e(()=>[i("div",u,[t(d,{width:"320px","background-color":"#f8fafc"},{header:e(()=>[...a[18]||(a[18]=[i("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[i("div",{style:{width:"40px",height:"40px",background:"#409EFF","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",color:"white","font-weight":"bold"}}," U "),i("div",null,[i("div",{style:{"font-weight":"bold"}},"张三"),i("div",{style:{color:"#666","font-size":"14px"}},"高级用户")])],-1)])]),body:e(()=>[...a[19]||(a[19]=[i("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"15px"}},[i("div",null,[i("div",{style:{color:"#666","font-size":"12px"}},"邮箱"),i("div",null,"zhangsan@example.com")]),i("div",null,[i("div",{style:{color:"#666","font-size":"12px"}},"电话"),i("div",null,"138****1234")]),i("div",null,[i("div",{style:{color:"#666","font-size":"12px"}},"部门"),i("div",null,"技术部")]),i("div",null,[i("div",{style:{color:"#666","font-size":"12px"}},"职位"),i("div",null,"前端工程师")])],-1)])]),footer:e(()=>[...a[20]||(a[20]=[i("div",{style:{display:"flex",gap:"10px","justify-content":"flex-end"}},[i("button",{style:{padding:"6px 12px",border:"1px solid #409EFF",color:"#409EFF",background:"white","border-radius":"4px",cursor:"pointer"}},"编辑"),i("button",{style:{padding:"6px 12px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"联系")],-1)])]),_:1})])]),_:1},8,["code"]),a[34]||(a[34]=i("h3",{id:"数据统计卡片",tabindex:"-1"},[n("数据统计卡片 "),i("a",{class:"header-anchor",href:"#数据统计卡片","aria-label":"Permalink to “数据统计卡片”"},"​"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shujutongjikapian shu ju tong ji ka pian sjtjkp ")],-1)),a[35]||(a[35]=i("p",null,[n("使用卡片展示数据统计信息。"),i("span",{class:"pagefind-pinyin","aria-hidden":"true"},"shiyongkapianzhanshishujutongjixinxi。 shi yong ka pian zhan shi shu ju tong ji xin xi 。 sykpzssjtjxx。")],-1)),t(s,{title:"代码演示",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' background-color='#f0f9ff'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #0369a1;'>1,234</div>
          <div style='color: #666; margin-top: 8px;'>今日访问量</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fef2f2'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #dc2626;'>567</div>
          <div style='color: #666; margin-top: 8px;'>新增用户</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#f0fdf4'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #16a34a;'>89.5%</div>
          <div style='color: #666; margin-top: 8px;'>转化率</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fffbeb'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #d97706;'>¥12,345</div>
          <div style='color: #666; margin-top: 8px;'>今日收入</div>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:e(()=>[i("div",f,[t(d,{width:"200px","background-color":"#f0f9ff"},{body:e(()=>[...a[21]||(a[21]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#0369a1"}},"1,234"),i("div",{style:{color:"#666","margin-top":"8px"}},"今日访问量")],-1)])]),_:1}),t(d,{width:"200px","background-color":"#fef2f2"},{body:e(()=>[...a[22]||(a[22]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#dc2626"}},"567"),i("div",{style:{color:"#666","margin-top":"8px"}},"新增用户")],-1)])]),_:1}),t(d,{width:"200px","background-color":"#f0fdf4"},{body:e(()=>[...a[23]||(a[23]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#16a34a"}},"89.5%"),i("div",{style:{color:"#666","margin-top":"8px"}},"转化率")],-1)])]),_:1}),t(d,{width:"200px","background-color":"#fffbeb"},{body:e(()=>[...a[24]||(a[24]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#d97706"}},"¥12,345"),i("div",{style:{color:"#666","margin-top":"8px"}},"今日收入")],-1)])]),_:1})])]),_:1},8,["code"]),a[36]||(a[36]=p(`<h2 id="api-参考" tabindex="-1">API 参考 <a class="header-anchor" href="#api-参考" aria-label="Permalink to “API 参考”">​</a><span class="pagefind-pinyin" aria-hidden="true">API cankao API can kao Ack </span></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to “Props”">​</a></h3><table tabindex="0"><thead><tr><th>参数<span class="pagefind-pinyin" aria-hidden="true">canshu can shu cs</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th><th>类型<span class="pagefind-pinyin" aria-hidden="true">leixing lei xing lx</span></th><th>可选值<span class="pagefind-pinyin" aria-hidden="true">kexuanzhi ke xuan zhi kxz</span></th><th>默认值<span class="pagefind-pinyin" aria-hidden="true">morenzhi mo ren zhi mrz</span></th></tr></thead><tbody><tr><td>title</td><td>卡片标题<span class="pagefind-pinyin" aria-hidden="true">kapianbiaoti ka pian biao ti kpbt</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>width</td><td>卡片宽度<span class="pagefind-pinyin" aria-hidden="true">kapiankuandu ka pian kuan du kpkd</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>height</td><td>卡片高度<span class="pagefind-pinyin" aria-hidden="true">kapiangaodu ka pian gao du kpgd</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>footer</td><td>卡片底部内容<span class="pagefind-pinyin" aria-hidden="true">kapiandibuneirong ka pian di bu nei rong kpdbnr</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr><tr><td>background-color</td><td>卡片背景色<span class="pagefind-pinyin" aria-hidden="true">kapianbeijingse ka pian bei jing se kpbjs</span></td><td>string</td><td>—</td><td><code>&#39;&#39;</code></td></tr></tbody></table><h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to “插槽”">​</a><span class="pagefind-pinyin" aria-hidden="true">chacao cha cao cc </span></h3><table tabindex="0"><thead><tr><th>插槽名<span class="pagefind-pinyin" aria-hidden="true">chacaoming cha cao ming ccm</span></th><th>说明<span class="pagefind-pinyin" aria-hidden="true">shuoming shuo ming sm</span></th></tr></thead><tbody><tr><td>header</td><td>卡片头部内容<span class="pagefind-pinyin" aria-hidden="true">kapiantoubuneirong ka pian tou bu nei rong kptbnr</span></td></tr><tr><td>body</td><td>卡片主体内容<span class="pagefind-pinyin" aria-hidden="true">kapianzhutineirong ka pian zhu ti nei rong kpztnr</span></td></tr><tr><td>footer</td><td>卡片底部内容<span class="pagefind-pinyin" aria-hidden="true">kapiandibuneirong ka pian di bu nei rong kpdbnr</span></td></tr></tbody></table><h3 id="类型定义" tabindex="-1">类型定义 <a class="header-anchor" href="#类型定义" aria-label="Permalink to “类型定义”">​</a><span class="pagefind-pinyin" aria-hidden="true">leixingdingyi lei xing ding yi lxdy </span></h3><div class="language-typescript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes vitesse-light vitesse-dark" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">interface</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> CardProps</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  title</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  width</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  height</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  footer</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">  backgroundColor</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,7))])}}});export{z as __pageData,j as default};

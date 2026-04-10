import{_ as d}from"./chunks/card.vue_vue_type_script_setup_true_lang.DKRn-L6m.js";import{I as l,o as r,c as o,a8 as p,J as t,w as e,j as i,a as n}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const h={style:{"max-width":"400px"}},g={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},y={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},x={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},u={style:{"max-width":"400px"}},f={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},z=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherCard.md","filePath":"components/OtherCard.md"}'),b={name:"components/OtherCard.md"},j=Object.assign(b,{setup(k){return(c,a)=>{const s=l("ShowCode");return r(),o("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1775839268000"},[a[25]||(a[25]=p("",6)),t(s,{title:"代码演示",code:`
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
  `.trim()},{demo:e(()=>[i("div",f,[t(d,{width:"200px","background-color":"#f0f9ff"},{body:e(()=>[...a[21]||(a[21]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#0369a1"}},"1,234"),i("div",{style:{color:"#666","margin-top":"8px"}},"今日访问量")],-1)])]),_:1}),t(d,{width:"200px","background-color":"#fef2f2"},{body:e(()=>[...a[22]||(a[22]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#dc2626"}},"567"),i("div",{style:{color:"#666","margin-top":"8px"}},"新增用户")],-1)])]),_:1}),t(d,{width:"200px","background-color":"#f0fdf4"},{body:e(()=>[...a[23]||(a[23]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#16a34a"}},"89.5%"),i("div",{style:{color:"#666","margin-top":"8px"}},"转化率")],-1)])]),_:1}),t(d,{width:"200px","background-color":"#fffbeb"},{body:e(()=>[...a[24]||(a[24]=[i("div",{style:{"text-align":"center",padding:"20px 0"}},[i("div",{style:{"font-size":"32px","font-weight":"bold",color:"#d97706"}},"¥12,345"),i("div",{style:{color:"#666","margin-top":"8px"}},"今日收入")],-1)])]),_:1})])]),_:1},8,["code"]),a[36]||(a[36]=p("",7))])}}});export{z as __pageData,j as default};

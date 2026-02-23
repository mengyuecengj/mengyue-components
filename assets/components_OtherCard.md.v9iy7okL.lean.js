import{u as y}from"./chunks/useStyleComputed.BVjmiXVX.js";import{d as g,o as h,c as f,O as b,k as m,j as t,r as o,I as k,ah as n,J as d,w as i,a as l}from"./chunks/framework.BzrxsKI0.js";const u={title:{type:String,default:""},width:{type:String,default:""},height:{type:String,default:""},footer:{type:String,default:""},backgroundColor:{type:String,default:""}},v={class:"my-card__header"},c={class:"my-card__body"},w={class:"my-card__footer"},a=g({name:"MYCard",__name:"card",props:u,emits:["close"],setup(p,{emit:x}){const s=y(p,{propToStyleMap:{backgroundColor:"backgroundColor",width:"width",height:"height"}});return(r,z)=>(h(),f("div",{class:"my-card",style:b(m(s))},[t("div",v,[o(r.$slots,"header")]),t("div",c,[o(r.$slots,"body")]),t("div",w,[o(r.$slots,"footer")])],4))}}),C={style:{"max-width":"400px"}},M={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},B={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},F={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},Y={style:{"max-width":"400px"}},P={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},S=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"components/OtherCard.md","filePath":"components/OtherCard.md"}'),A={name:"components/OtherCard.md"},T=Object.assign(A,{setup(p){return(x,e)=>{const s=k("ShowCode");return h(),f("div",null,[e[25]||(e[25]=n("",6)),d(s,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",C,[d(a,null,{header:i(()=>[...e[0]||(e[0]=[t("div",{style:{"font-weight":"bold"}},"卡片标题",-1)])]),body:i(()=>[...e[1]||(e[1]=[t("p",null,"这里是卡片的主体内容",-1),t("p",null,"可以放置任何类型的内容",-1)])]),footer:i(()=>[...e[2]||(e[2]=[t("div",{style:{"text-align":"right",color:"#666"}},"卡片底部",-1)])]),_:1})])]),_:1},8,["code"]),e[26]||(e[26]=t("h3",{id:"自定义尺寸",tabindex:"-1"},[l("自定义尺寸 "),t("a",{class:"header-anchor",href:"#自定义尺寸","aria-label":"Permalink to “自定义尺寸”"},"​")],-1)),e[27]||(e[27]=t("p",null,[l("使用 "),t("code",null,"width"),l(" 和 "),t("code",null,"height"),l(" 属性自定义卡片的尺寸。")],-1)),d(s,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",M,[d(a,{width:"200px",height:"150px"},{header:i(()=>[...e[3]||(e[3]=[l("小卡片",-1)])]),body:i(()=>[...e[4]||(e[4]=[t("p",null,"200px × 150px",-1)])]),_:1}),d(a,{width:"300px",height:"200px"},{header:i(()=>[...e[5]||(e[5]=[l("中等卡片",-1)])]),body:i(()=>[...e[6]||(e[6]=[t("p",null,"300px × 200px",-1)])]),_:1}),d(a,{width:"400px",height:"250px"},{header:i(()=>[...e[7]||(e[7]=[l("大卡片",-1)])]),body:i(()=>[...e[8]||(e[8]=[t("p",null,"400px × 250px",-1)])]),_:1})])]),_:1},8,["code"]),e[28]||(e[28]=t("h3",{id:"自定义背景色",tabindex:"-1"},[l("自定义背景色 "),t("a",{class:"header-anchor",href:"#自定义背景色","aria-label":"Permalink to “自定义背景色”"},"​")],-1)),e[29]||(e[29]=t("p",null,[l("使用 "),t("code",null,"backgroundColor"),l(" 属性自定义卡片的背景颜色。")],-1)),d(s,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",B,[d(a,{width:"250px","background-color":"#f0f9ff"},{header:i(()=>[...e[9]||(e[9]=[t("div",{style:{color:"#0369a1"}},"浅蓝色卡片",-1)])]),body:i(()=>[...e[10]||(e[10]=[t("p",null,"自定义背景颜色",-1),t("p",null,"#f0f9ff",-1)])]),_:1}),d(a,{width:"250px","background-color":"#fef2f2"},{header:i(()=>[...e[11]||(e[11]=[t("div",{style:{color:"#dc2626"}},"浅红色卡片",-1)])]),body:i(()=>[...e[12]||(e[12]=[t("p",null,"自定义背景颜色",-1),t("p",null,"#fef2f2",-1)])]),_:1}),d(a,{width:"250px","background-color":"#f0fdf4"},{header:i(()=>[...e[13]||(e[13]=[t("div",{style:{color:"#16a34a"}},"浅绿色卡片",-1)])]),body:i(()=>[...e[14]||(e[14]=[t("p",null,"自定义背景颜色",-1),t("p",null,"#f0fdf4",-1)])]),_:1})])]),_:1},8,["code"]),e[30]||(e[30]=t("h3",{id:"产品展示卡片",tabindex:"-1"},[l("产品展示卡片 "),t("a",{class:"header-anchor",href:"#产品展示卡片","aria-label":"Permalink to “产品展示卡片”"},"​")],-1)),e[31]||(e[31]=t("p",null,"使用卡片展示产品信息。",-1)),d(s,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",F,[d(a,{width:"280px"},{header:i(()=>[...e[15]||(e[15]=[t("div",{style:{display:"flex","justify-content":"space-between","align-items":"center"}},[t("span",{style:{"font-weight":"bold"}},"MacBook Pro"),t("span",{style:{color:"#409EFF"}},"￥12999")],-1)])]),body:i(()=>[...e[16]||(e[16]=[t("div",{style:{"text-align":"center","margin-bottom":"15px"}},[t("div",{style:{width:"100%",height:"120px",background:"#f5f5f5",display:"flex","align-items":"center","justify-content":"center","border-radius":"4px"}}," 💻 ")],-1),t("p",null,"13英寸，M2芯片，8GB内存，256GB存储",-1),t("ul",{style:{color:"#666","font-size":"14px"}},[t("li",null,"Retina 显示屏"),t("li",null,"触控栏和触控 ID"),t("li",null,"最长可达 20 小时电池续航")],-1)])]),footer:i(()=>[...e[17]||(e[17]=[t("div",{style:{display:"flex",gap:"10px"}},[t("button",{style:{flex:"1",padding:"8px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"立即购买"),t("button",{style:{flex:"1",padding:"8px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"加入购物车")],-1)])]),_:1})])]),_:1},8,["code"]),e[32]||(e[32]=t("h3",{id:"用户信息卡片",tabindex:"-1"},[l("用户信息卡片 "),t("a",{class:"header-anchor",href:"#用户信息卡片","aria-label":"Permalink to “用户信息卡片”"},"​")],-1)),e[33]||(e[33]=t("p",null,"使用卡片展示用户信息。",-1)),d(s,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",Y,[d(a,{width:"320px","background-color":"#f8fafc"},{header:i(()=>[...e[18]||(e[18]=[t("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[t("div",{style:{width:"40px",height:"40px",background:"#409EFF","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",color:"white","font-weight":"bold"}}," U "),t("div",null,[t("div",{style:{"font-weight":"bold"}},"张三"),t("div",{style:{color:"#666","font-size":"14px"}},"高级用户")])],-1)])]),body:i(()=>[...e[19]||(e[19]=[t("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"15px"}},[t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"邮箱"),t("div",null,"zhangsan@example.com")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"电话"),t("div",null,"138****1234")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"部门"),t("div",null,"技术部")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"职位"),t("div",null,"前端工程师")])],-1)])]),footer:i(()=>[...e[20]||(e[20]=[t("div",{style:{display:"flex",gap:"10px","justify-content":"flex-end"}},[t("button",{style:{padding:"6px 12px",border:"1px solid #409EFF",color:"#409EFF",background:"white","border-radius":"4px",cursor:"pointer"}},"编辑"),t("button",{style:{padding:"6px 12px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"联系")],-1)])]),_:1})])]),_:1},8,["code"]),e[34]||(e[34]=t("h3",{id:"数据统计卡片",tabindex:"-1"},[l("数据统计卡片 "),t("a",{class:"header-anchor",href:"#数据统计卡片","aria-label":"Permalink to “数据统计卡片”"},"​")],-1)),e[35]||(e[35]=t("p",null,"使用卡片展示数据统计信息。",-1)),d(s,{title:"代码演示",code:`
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
  `.trim()},{demo:i(()=>[t("div",P,[d(a,{width:"200px","background-color":"#f0f9ff"},{body:i(()=>[...e[21]||(e[21]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#0369a1"}},"1,234"),t("div",{style:{color:"#666","margin-top":"8px"}},"今日访问量")],-1)])]),_:1}),d(a,{width:"200px","background-color":"#fef2f2"},{body:i(()=>[...e[22]||(e[22]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#dc2626"}},"567"),t("div",{style:{color:"#666","margin-top":"8px"}},"新增用户")],-1)])]),_:1}),d(a,{width:"200px","background-color":"#f0fdf4"},{body:i(()=>[...e[23]||(e[23]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#16a34a"}},"89.5%"),t("div",{style:{color:"#666","margin-top":"8px"}},"转化率")],-1)])]),_:1}),d(a,{width:"200px","background-color":"#fffbeb"},{body:i(()=>[...e[24]||(e[24]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#d97706"}},"¥12,345"),t("div",{style:{color:"#666","margin-top":"8px"}},"今日收入")],-1)])]),_:1})])]),_:1},8,["code"]),e[36]||(e[36]=n("",7))])}}});export{S as __pageData,T as default};

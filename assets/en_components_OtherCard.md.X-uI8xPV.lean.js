import{_ as a}from"./chunks/card.vue_vue_type_script_setup_true_lang.DKRn-L6m.js";import{I as s,o as n,c as p,a8 as l,J as d,w as i,j as t,a as o}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";const h={style:{"max-width":"400px"}},f={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},g={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},c={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},y={style:{"max-width":"400px"}},m={style:{display:"flex",gap:"20px","flex-wrap":"wrap"}},w=JSON.parse('{"title":"Card","description":"","frontmatter":{},"headers":[],"relativePath":"en/components/OtherCard.md","filePath":"en/components/OtherCard.md"}'),x={name:"en/components/OtherCard.md"},B=Object.assign(x,{setup(b){return(u,e)=>{const r=s("ShowCode");return n(),p("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[25]||(e[25]=l("",6)),d(r,{title:"Code Demo",code:`
<template>
  <MYCard>
    <template #header>
      <div style='font-weight: bold;'>Card Title</div>
    </template>
    <template #body>
      <p>This is the main content of the card</p>
      <p>Any type of content can be placed here</p>
    </template>
    <template #footer>
      <div style='text-align: right; color: #666;'>Card Footer</div>
    </template>
  </MYCard>
</template>
  `.trim()},{demo:i(()=>[t("div",h,[d(a,null,{header:i(()=>[...e[0]||(e[0]=[t("div",{style:{"font-weight":"bold"}},"Card Title",-1)])]),body:i(()=>[...e[1]||(e[1]=[t("p",null,"This is the main content of the card",-1),t("p",null,"Any type of content can be placed here",-1)])]),footer:i(()=>[...e[2]||(e[2]=[t("div",{style:{"text-align":"right",color:"#666"}},"Card Footer",-1)])]),_:1})])]),_:1},8,["code"]),e[26]||(e[26]=t("h3",{id:"custom-size",tabindex:"-1"},[o("Custom Size "),t("a",{class:"header-anchor",href:"#custom-size","aria-label":"Permalink to “Custom Size”"},"​")],-1)),e[27]||(e[27]=t("p",null,[o("Use the "),t("code",null,"width"),o(" and "),t("code",null,"height"),o(" props to customize the card size.")],-1)),d(r,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' height='150px'>
      <template #header>Small Card</template>
      <template #body>
        <p>200px × 150px</p>
      </template>
    </MYCard>
    <MYCard width='300px' height='200px'>
      <template #header>Medium Card</template>
      <template #body>
        <p>300px × 200px</p>
      </template>
    </MYCard>
    <MYCard width='400px' height='250px'>
      <template #header>Large Card</template>
      <template #body>
        <p>400px × 250px</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",f,[d(a,{width:"200px",height:"150px"},{header:i(()=>[...e[3]||(e[3]=[o("Small Card",-1)])]),body:i(()=>[...e[4]||(e[4]=[t("p",null,"200px × 150px",-1)])]),_:1}),d(a,{width:"300px",height:"200px"},{header:i(()=>[...e[5]||(e[5]=[o("Medium Card",-1)])]),body:i(()=>[...e[6]||(e[6]=[t("p",null,"300px × 200px",-1)])]),_:1}),d(a,{width:"400px",height:"250px"},{header:i(()=>[...e[7]||(e[7]=[o("Large Card",-1)])]),body:i(()=>[...e[8]||(e[8]=[t("p",null,"400px × 250px",-1)])]),_:1})])]),_:1},8,["code"]),e[28]||(e[28]=t("h3",{id:"custom-background-color",tabindex:"-1"},[o("Custom Background Color "),t("a",{class:"header-anchor",href:"#custom-background-color","aria-label":"Permalink to “Custom Background Color”"},"​")],-1)),e[29]||(e[29]=t("p",null,[o("Use the "),t("code",null,"backgroundColor"),o(" prop to customize the card's background color.")],-1)),d(r,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='250px' background-color='#f0f9ff'>
      <template #header style='color: #0369a1;'>Light Blue Card</template>
      <template #body>
        <p>Custom background color</p>
        <p>#f0f9ff</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#fef2f2'>
      <template #header style='color: #dc2626;'>Light Red Card</template>
      <template #body>
        <p>Custom background color</p>
        <p>#fef2f2</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#f0fdf4'>
      <template #header style='color: #16a34a;'>Light Green Card</template>
      <template #body>
        <p>Custom background color</p>
        <p>#f0fdf4</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",g,[d(a,{width:"250px","background-color":"#f0f9ff"},{header:i(()=>[...e[9]||(e[9]=[t("div",{style:{color:"#0369a1"}},"Light Blue Card",-1)])]),body:i(()=>[...e[10]||(e[10]=[t("p",null,"Custom background color",-1),t("p",null,"#f0f9ff",-1)])]),_:1}),d(a,{width:"250px","background-color":"#fef2f2"},{header:i(()=>[...e[11]||(e[11]=[t("div",{style:{color:"#dc2626"}},"Light Red Card",-1)])]),body:i(()=>[...e[12]||(e[12]=[t("p",null,"Custom background color",-1),t("p",null,"#fef2f2",-1)])]),_:1}),d(a,{width:"250px","background-color":"#f0fdf4"},{header:i(()=>[...e[13]||(e[13]=[t("div",{style:{color:"#16a34a"}},"Light Green Card",-1)])]),body:i(()=>[...e[14]||(e[14]=[t("p",null,"Custom background color",-1),t("p",null,"#f0fdf4",-1)])]),_:1})])]),_:1},8,["code"]),e[30]||(e[30]=t("h3",{id:"product-display-card",tabindex:"-1"},[o("Product Display Card "),t("a",{class:"header-anchor",href:"#product-display-card","aria-label":"Permalink to “Product Display Card”"},"​")],-1)),e[31]||(e[31]=t("p",null,"Use cards to display product information.",-1)),d(r,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='280px'>
      <template #header>
        <div style='display: flex; justify-content: space-between; align-items: center;'>
          <span style='font-weight: bold;'>MacBook Pro</span>
          <span style='color: #409EFF;'>¥12999</span>
        </div>
      </template>
      <template #body>
        <div style='text-align: center; margin-bottom: 15px;'>
          <div style='width: 100%; height: 120px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px;'>
            💻
          </div>
        </div>
        <p>13-inch, M2 chip, 8GB memory, 256GB storage</p>
        <ul style='color: #666; font-size: 14px;'>
          <li>Retina display</li>
          <li>Touch Bar and Touch ID</li>
          <li>Up to 20 hours battery life</li>
        </ul>
      </template>
      <template #footer>
        <div style='display: flex; gap: 10px;'>
          <button style='flex: 1; padding: 8px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>Buy Now</button>
          <button style='flex: 1; padding: 8px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;'>Add to Cart</button>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",c,[d(a,{width:"280px"},{header:i(()=>[...e[15]||(e[15]=[t("div",{style:{display:"flex","justify-content":"space-between","align-items":"center"}},[t("span",{style:{"font-weight":"bold"}},"MacBook Pro"),t("span",{style:{color:"#409EFF"}},"¥12999")],-1)])]),body:i(()=>[...e[16]||(e[16]=[t("div",{style:{"text-align":"center","margin-bottom":"15px"}},[t("div",{style:{width:"100%",height:"120px",background:"#f5f5f5",display:"flex","align-items":"center","justify-content":"center","border-radius":"4px"}}," 💻 ")],-1),t("p",null,"13-inch, M2 chip, 8GB memory, 256GB storage",-1),t("ul",{style:{color:"#666","font-size":"14px"}},[t("li",null,"Retina display"),t("li",null,"Touch Bar and Touch ID"),t("li",null,"Up to 20 hours battery life")],-1)])]),footer:i(()=>[...e[17]||(e[17]=[t("div",{style:{display:"flex",gap:"10px"}},[t("button",{style:{flex:"1",padding:"8px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"Buy Now"),t("button",{style:{flex:"1",padding:"8px",border:"1px solid #dcdfe6",background:"white","border-radius":"4px",cursor:"pointer"}},"Add to Cart")],-1)])]),_:1})])]),_:1},8,["code"]),e[32]||(e[32]=t("h3",{id:"user-information-card",tabindex:"-1"},[o("User Information Card "),t("a",{class:"header-anchor",href:"#user-information-card","aria-label":"Permalink to “User Information Card”"},"​")],-1)),e[33]||(e[33]=t("p",null,"Use cards to display user information.",-1)),d(r,{title:"Code Demo",code:`
<template>
  <MYCard width='320px' background-color='#f8fafc'>
    <template #header>
      <div style='display: flex; align-items: center; gap: 12px;'>
        <div style='width: 40px; height: 40px; background: #409EFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;'>
          U
        </div>
        <div>
          <div style='font-weight: bold;'>Zhang San</div>
          <div style='color: #666; font-size: 14px;'>Premium User</div>
        </div>
      </div>
    </template>
    <template #body>
      <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 15px;'>
        <div>
          <div style='color: #666; font-size: 12px;'>Email</div>
          <div>zhangsan@example.com</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>Phone</div>
          <div>138****1234</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>Department</div>
          <div>Technology</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>Position</div>
          <div>Frontend Engineer</div>
        </div>
      </div>
    </template>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button style='padding: 6px 12px; border: 1px solid #409EFF; color: #409EFF; background: white; border-radius: 4px; cursor: pointer;'>Edit</button>
        <button style='padding: 6px 12px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>Contact</button>
      </div>
    </template>
  </MYCard>
</template>
  `.trim()},{demo:i(()=>[t("div",y,[d(a,{width:"320px","background-color":"#f8fafc"},{header:i(()=>[...e[18]||(e[18]=[t("div",{style:{display:"flex","align-items":"center",gap:"12px"}},[t("div",{style:{width:"40px",height:"40px",background:"#409EFF","border-radius":"50%",display:"flex","align-items":"center","justify-content":"center",color:"white","font-weight":"bold"}}," U "),t("div",null,[t("div",{style:{"font-weight":"bold"}},"Zhang San"),t("div",{style:{color:"#666","font-size":"14px"}},"Premium User")])],-1)])]),body:i(()=>[...e[19]||(e[19]=[t("div",{style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"15px"}},[t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"Email"),t("div",null,"zhangsan@example.com")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"Phone"),t("div",null,"138****1234")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"Department"),t("div",null,"Technology")]),t("div",null,[t("div",{style:{color:"#666","font-size":"12px"}},"Position"),t("div",null,"Frontend Engineer")])],-1)])]),footer:i(()=>[...e[20]||(e[20]=[t("div",{style:{display:"flex",gap:"10px","justify-content":"flex-end"}},[t("button",{style:{padding:"6px 12px",border:"1px solid #409EFF",color:"#409EFF",background:"white","border-radius":"4px",cursor:"pointer"}},"Edit"),t("button",{style:{padding:"6px 12px",background:"#409EFF",color:"white",border:"none","border-radius":"4px",cursor:"pointer"}},"Contact")],-1)])]),_:1})])]),_:1},8,["code"]),e[34]||(e[34]=t("h3",{id:"data-statistics-card",tabindex:"-1"},[o("Data Statistics Card "),t("a",{class:"header-anchor",href:"#data-statistics-card","aria-label":"Permalink to “Data Statistics Card”"},"​")],-1)),e[35]||(e[35]=t("p",null,"Use cards to display data statistics.",-1)),d(r,{title:"Code Demo",code:`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' background-color='#f0f9ff'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #0369a1;'>1,234</div>
          <div style='color: #666; margin-top: 8px;'>Daily Visits</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fef2f2'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #dc2626;'>567</div>
          <div style='color: #666; margin-top: 8px;'>New Users</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#f0fdf4'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #16a34a;'>89.5%</div>
          <div style='color: #666; margin-top: 8px;'>Conversion Rate</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fffbeb'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #d97706;'>¥12,345</div>
          <div style='color: #666; margin-top: 8px;'>Daily Revenue</div>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()},{demo:i(()=>[t("div",m,[d(a,{width:"200px","background-color":"#f0f9ff"},{body:i(()=>[...e[21]||(e[21]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#0369a1"}},"1,234"),t("div",{style:{color:"#666","margin-top":"8px"}},"Daily Visits")],-1)])]),_:1}),d(a,{width:"200px","background-color":"#fef2f2"},{body:i(()=>[...e[22]||(e[22]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#dc2626"}},"567"),t("div",{style:{color:"#666","margin-top":"8px"}},"New Users")],-1)])]),_:1}),d(a,{width:"200px","background-color":"#f0fdf4"},{body:i(()=>[...e[23]||(e[23]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#16a34a"}},"89.5%"),t("div",{style:{color:"#666","margin-top":"8px"}},"Conversion Rate")],-1)])]),_:1}),d(a,{width:"200px","background-color":"#fffbeb"},{body:i(()=>[...e[24]||(e[24]=[t("div",{style:{"text-align":"center",padding:"20px 0"}},[t("div",{style:{"font-size":"32px","font-weight":"bold",color:"#d97706"}},"¥12,345"),t("div",{style:{color:"#666","margin-top":"8px"}},"Daily Revenue")],-1)])]),_:1})])]),_:1},8,["code"]),e[36]||(e[36]=l("",7))])}}});export{w as __pageData,B as default};

import{_ as l}from"./chunks/result.vue_vue_type_script_setup_true_lang.BToKtu14.js";import{_ as r}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as d,o as p,c as h,a8 as o,J as e,w as i,j as s,a}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const c={style:{display:"flex","flex-direction":"column",gap:"20px"}},u={style:{display:"flex",gap:"10px","justify-content":"center"}},k={style:{display:"flex",gap:"10px","justify-content":"center"}},C=JSON.parse('{"title":"Result","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/FeedbackResult.md","filePath":"en/plus/FeedbackResult.md"}'),m={name:"en/plus/FeedbackResult.md"},A=Object.assign(m,{setup(y){return(b,t)=>{const n=d("ShowCode");return p(),h("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[6]||(t[6]=o("",5)),e(n,{title:"Code Demo",code:`
<template>
    <MYResult title='Operation Successful' subTitle='Your operation has been completed successfully' />
</template>
  `.trim()},{demo:i(()=>[e(l,{title:"Operation Successful",subTitle:"Your operation has been completed successfully"})]),_:1},8,["code"]),t[7]||(t[7]=s("h2",{id:"icon-types",tabindex:"-1"},[a("Icon Types "),s("a",{class:"header-anchor",href:"#icon-types","aria-label":"Permalink to “Icon Types”"},"​")],-1)),t[8]||(t[8]=s("p",null,[a("Use the "),s("code",null,"icon"),a(" prop to set the result icon.")],-1)),e(n,{title:"Code Demo",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYResult icon='primary' title='Primary Result' subTitle='This is a primary result' />
        <MYResult icon='success' title='Success Result' subTitle='Operation completed successfully' />
        <MYResult icon='warning' title='Warning Result' subTitle='Please pay attention to related matters' />
        <MYResult icon='error' title='Error Result' subTitle='Operation failed, please try again' />
        <MYResult icon='info' title='Info Result' subTitle='This is an information message' />
    </div>
</template>
  `.trim()},{demo:i(()=>[s("div",c,[e(l,{icon:"primary",title:"Primary Result",subTitle:"This is a primary result"}),e(l,{icon:"success",title:"Success Result",subTitle:"Operation completed successfully"}),e(l,{icon:"warning",title:"Warning Result",subTitle:"Please pay attention to related matters"}),e(l,{icon:"error",title:"Error Result",subTitle:"Operation failed, please try again"}),e(l,{icon:"info",title:"Info Result",subTitle:"This is an information message"})])]),_:1},8,["code"]),t[9]||(t[9]=s("h2",{id:"slot-usage",tabindex:"-1"},[a("Slot Usage "),s("a",{class:"header-anchor",href:"#slot-usage","aria-label":"Permalink to “Slot Usage”"},"​")],-1)),t[10]||(t[10]=s("p",null,"Use slots to customize the subtitle and extra content.",-1)),e(n,{title:"Code Demo",code:`
<template>
    <MYResult title='Operation Successful' icon='success'>
        <template #sub-title>
            <div style='color: #52c41a; font-weight: bold;'>
                Custom subtitle content with HTML support
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary'>Back to Home</MYButton>
                <MYButton type='info'>View Details</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()},{demo:i(()=>[e(l,{title:"Operation Successful",icon:"success"},{"sub-title":i(()=>[...t[0]||(t[0]=[s("div",{style:{color:"#52c41a","font-weight":"bold"}}," Custom subtitle content with HTML support ",-1)])]),extra:i(()=>[s("div",u,[e(r,{type:"primary"},{default:i(()=>[...t[1]||(t[1]=[a("Back to Home",-1)])]),_:1}),e(r,{type:"info"},{default:i(()=>[...t[2]||(t[2]=[a("View Details",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[11]||(t[11]=s("h2",{id:"combined-usage",tabindex:"-1"},[a("Combined Usage "),s("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),t[12]||(t[12]=s("p",null,"Finally, here is a combination of multiple APIs to create a result page:",-1)),e(n,{title:"Code Demo",code:`
<template>
    <MYResult 
        title='Combined Usage Example'
        icon='success'
    >
        <template #sub-title>
            <div style='color: #409EFF;'>
                This is a complete example of combined usage
            </div>
        </template>
        <template #extra>
            <div style='display: flex; gap: 10px; justify-content: center;'>
                <MYButton type='primary' size='large'>Primary Action</MYButton>
                <MYButton type='info' size='large' plain>Secondary Action</MYButton>
            </div>
        </template>
    </MYResult>
</template>
  `.trim()},{demo:i(()=>[e(l,{title:"Combined Usage Example",icon:"success"},{"sub-title":i(()=>[...t[3]||(t[3]=[s("div",{style:{color:"#409EFF"}}," This is a complete example of combined usage ",-1)])]),extra:i(()=>[s("div",k,[e(r,{type:"primary",size:"large"},{default:i(()=>[...t[4]||(t[4]=[a("Primary Action",-1)])]),_:1}),e(r,{type:"info",size:"large",plain:""},{default:i(()=>[...t[5]||(t[5]=[a("Secondary Action",-1)])]),_:1})])]),_:1})]),_:1},8,["code"]),t[13]||(t[13]=o("",7))])}}});export{C as __pageData,A as default};

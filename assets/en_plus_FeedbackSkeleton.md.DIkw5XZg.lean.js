import{_ as n,a as o}from"./chunks/skeleton.vue_vue_type_script_setup_true_lang.DuDISWzz.js";import{_ as h}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as g,o as u,c as y,a8 as p,J as i,w as a,j as e,a as s,A as k}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const b={style:{display:"flex","flex-direction":"column",gap:"20px"}},f={style:{background:"#333",padding:"20px","border-radius":"4px"}},_=JSON.parse('{"title":"Skeleton","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/FeedbackSkeleton.md","filePath":"en/plus/FeedbackSkeleton.md"}'),D={name:"en/plus/FeedbackSkeleton.md"},w=Object.assign(D,{setup(B){const d=k(!0),r=k(!1),m=()=>{d.value=!d.value},c=()=>{r.value=!0,setTimeout(()=>{r.value=!1},3e3)};return(A,t)=>{const l=g("ShowCode");return u(),y("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[t[3]||(t[3]=p("",5)),i(l,{title:"Code Demo",code:`
<template>
    <MYSkeleton />
</template>
  `.trim()},{demo:a(()=>[i(n)]),_:1},8,["code"]),t[4]||(t[4]=e("h2",{id:"custom-row-count",tabindex:"-1"},[s("Custom Row Count "),e("a",{class:"header-anchor",href:"#custom-row-count","aria-label":"Permalink to “Custom Row Count”"},"​")],-1)),t[5]||(t[5]=e("p",null,[s("Use the "),e("code",null,"count"),s(" prop to set the number of skeleton rows.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSkeleton :count='5' />
</template>
  `.trim()},{demo:a(()=>[i(n,{count:5})]),_:1},8,["code"]),t[6]||(t[6]=e("h2",{id:"circular-skeleton",tabindex:"-1"},[s("Circular Skeleton "),e("a",{class:"header-anchor",href:"#circular-skeleton","aria-label":"Permalink to “Circular Skeleton”"},"​")],-1)),t[7]||(t[7]=e("p",null,[s("Use the "),e("code",null,"variant"),s(" prop to set different skeleton styles.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='circle' style='width: 100px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:a(()=>[i(n,null,{template:a(()=>[i(o,{variant:"circle",style:{width:"100px",height:"100px"}})]),_:1})]),_:1},8,["code"]),t[8]||(t[8]=e("h2",{id:"rectangular-skeleton",tabindex:"-1"},[s("Rectangular Skeleton "),e("a",{class:"header-anchor",href:"#rectangular-skeleton","aria-label":"Permalink to “Rectangular Skeleton”"},"​")],-1)),t[9]||(t[9]=e("p",null,[s("Use "),e("code",null,'variant="rect"'),s(" to create a rectangular skeleton.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSkeleton>
        <template #template>
            <MYSkeleton-item variant='rect' style='width: 200px; height: 100px' />
        </template>
    </MYSkeleton>
</template>
  `.trim()},{demo:a(()=>[i(n,null,{template:a(()=>[i(o,{variant:"rect",style:{width:"200px",height:"100px"}})]),_:1})]),_:1},8,["code"]),t[10]||(t[10]=e("h2",{id:"random-width",tabindex:"-1"},[s("Random Width "),e("a",{class:"header-anchor",href:"#random-width","aria-label":"Permalink to “Random Width”"},"​")],-1)),t[11]||(t[11]=e("p",null,[s("Use the "),e("code",null,"randomWidth"),s(" prop to make skeleton widths vary randomly.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSkeleton :randomWidth='true' :count='5' />
</template>
  `.trim()},{demo:a(()=>[i(n,{randomWidth:!0,count:5})]),_:1},8,["code"]),t[12]||(t[12]=e("h2",{id:"dynamic-loading",tabindex:"-1"},[s("Dynamic Loading "),e("a",{class:"header-anchor",href:"#dynamic-loading","aria-label":"Permalink to “Dynamic Loading”"},"​")],-1)),t[13]||(t[13]=e("p",null,[s("Use the "),e("code",null,"loading"),s(" prop to control the display state of the skeleton screen.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <div>
        <MYButton @click='toggleLoading'>Toggle Loading State</MYButton>
        <MYSkeleton :loading='isLoading' style='margin-top: 20px'>
            <template #default>
                <div style='padding: 20px; background: #f5f5f5; border-radius: 4px;'>
                    <h3>Actual Content Title</h3>
                    <p>This is the actual content after loading...</p>
                </div>
            </template>
        </MYSkeleton>
    </div>
</template>
  `.trim()},{demo:a(()=>[e("div",null,[i(h,{onClick:m},{default:a(()=>[...t[0]||(t[0]=[s("Toggle Loading State",-1)])]),_:1}),i(n,{loading:d.value,style:{"margin-top":"20px"}},{default:a(()=>[...t[1]||(t[1]=[e("div",{style:{padding:"20px",background:"#f5f5f5","border-radius":"4px"}},[e("h3",null,"Actual Content Title"),e("p",null,"This is the actual content after loading...")],-1)])]),_:1},8,["loading"])])]),_:1},8,["code"]),t[14]||(t[14]=e("h2",{id:"delayed-display",tabindex:"-1"},[s("Delayed Display "),e("a",{class:"header-anchor",href:"#delayed-display","aria-label":"Permalink to “Delayed Display”"},"​")],-1)),t[15]||(t[15]=e("p",null,[s("Use the "),e("code",null,"throttle"),s(" prop to set a delay time for displaying the skeleton screen.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <MYSkeleton :throttle='1000' :loading='throttleLoading' />
</template>
  `.trim()},{demo:a(()=>[e("div",null,[i(h,{onClick:c},{default:a(()=>[...t[2]||(t[2]=[s("Trigger Delayed Loading (1s)",-1)])]),_:1}),i(n,{throttle:1e3,loading:r.value,style:{"margin-top":"20px"}},null,8,["loading"])])]),_:1},8,["code"]),t[16]||(t[16]=e("h2",{id:"theme-styles",tabindex:"-1"},[s("Theme Styles "),e("a",{class:"header-anchor",href:"#theme-styles","aria-label":"Permalink to “Theme Styles”"},"​")],-1)),t[17]||(t[17]=e("p",null,[s("Use the "),e("code",null,"theme"),s(" prop to set the skeleton screen theme.")],-1)),i(l,{title:"Code Demo",code:`
<template>
    <div style='display: flex; flex-direction: column; gap: 20px;'>
        <MYSkeleton theme='light' />
        <div style='background: #333; padding: 20px; border-radius: 4px;'>
            <MYSkeleton theme='dark' />
        </div>
    </div>
</template>
  `.trim()},{demo:a(()=>[e("div",b,[i(n,{theme:"light"}),e("div",f,[i(n,{theme:"dark"})])])]),_:1},8,["code"]),t[18]||(t[18]=p("",9))])}}});export{_ as __pageData,w as default};

import{_ as l}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{m as e}from"./chunks/messageManager.DFctwySm.js";import{I as v,o as P,c as F,a8 as o,J as n,w as t,j as a,a as i,A as H}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const L={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},O={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},I={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},U={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},R={style:{display:"flex",gap:"10px","flex-wrap":"wrap"}},X=JSON.parse('{"title":"Message","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/FeedbackMessage.md","filePath":"en/plus/FeedbackMessage.md"}'),V={name:"en/plus/FeedbackMessage.md"},$=Object.assign(V,{setup(N){const h=H(null),k=()=>{e.info("This is an info message"),console.log("Showing info message")},r=()=>{e.success("Operation successful!"),console.log("Showing success message")},d=()=>{e.warning("Please be aware of operational risks"),console.log("Showing warning message")},g=()=>{e.error("Operation failed, please try again"),console.log("Showing error message")},c=()=>{e({content:"This message can be manually closed",type:"info",showClose:!0}),console.log("Showing closable message")},y=()=>{e({content:"This message will display for 1 second",type:"success",duration:1e3}),console.log("Showing short duration message")},u=()=>{e({content:"This message will display for 10 seconds",type:"warning",duration:1e4}),console.log("Showing long duration message")},m=()=>{e({content:"This message will not auto-close",type:"info",duration:0,showClose:!0}),console.log("Showing permanent message")},B=()=>{e({content:"Top left message",position:"top-left"}),console.log("Showing top left message")},b=()=>{e({content:"Top right message",position:"top-right"}),console.log("Showing top right message")},f=()=>{e({content:"Top center message",position:"top-center"}),console.log("Showing top center message")},D=()=>{e({content:"Bottom left message",position:"bottom-left"}),console.log("Showing bottom left message")},A=()=>{e({content:"Bottom right message",position:"bottom-right"}),console.log("Showing bottom right message")},C=()=>{e({content:"Bottom center message",position:"bottom-center"}),console.log("Showing bottom center message")},M=()=>{e({content:'<strong>Bold text</strong> and <span style="color: red;">red text</span>',dangerouslyUseHTMLString:!0}),console.log("Showing HTML content message")},w=()=>{h.value=e({content:"This message needs to be closed via button",type:"info",duration:0}),console.log("Showing manually closable message")},x=()=>{h.value&&(h.value.close(),h.value=null),console.log("Manually closing message")},E=()=>{e({content:"Callback will be triggered when closed",type:"success",onClose:()=>{console.log("Message closed")}}),console.log("Showing message with callback")},S=()=>{e({content:"This message has a custom offset",type:"info",offset:100}),console.log("Showing message with offset")},T=()=>{e({content:"Message 1",offset:20}),e({content:"Message 2",offset:80}),e({content:"Message 3",offset:140}),console.log("Showing multiple offset messages")},Y=()=>{e({content:"Combined usage example message",type:"success",duration:5e3,showClose:!0,position:"top-center",offset:50,zIndex:1e4,onClose:()=>{console.log("Combined message closed")}}),console.log("Showing combined usage message")};return(W,s)=>{const p=v("ShowCode");return P(),F("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[s[21]||(s[21]=o("",5)),n(p,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showInfo'>Info</MYButton>
        <MYButton @click='showSuccess'>Success</MYButton>
        <MYButton @click='showWarning'>Warning</MYButton>
        <MYButton @click='showError'>Error</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[a("div",L,[n(l,{onClick:k},{default:t(()=>[...s[0]||(s[0]=[i("Info",-1)])]),_:1}),n(l,{onClick:r},{default:t(()=>[...s[1]||(s[1]=[i("Success",-1)])]),_:1}),n(l,{onClick:d},{default:t(()=>[...s[2]||(s[2]=[i("Warning",-1)])]),_:1}),n(l,{onClick:g},{default:t(()=>[...s[3]||(s[3]=[i("Error",-1)])]),_:1})])]),_:1},8,["code"]),s[22]||(s[22]=a("h2",{id:"show-close-button",tabindex:"-1"},[i("Show Close Button "),a("a",{class:"header-anchor",href:"#show-close-button","aria-label":"Permalink to “Show Close Button”"},"​")],-1)),s[23]||(s[23]=a("p",null,[i("Use the "),a("code",null,"showClose"),i(" prop to display a close button.")],-1)),n(p,{title:"Code Demo",code:`
<template>
    <MYButton @click='showClosableMessage'>Show Close Button</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:c},{default:t(()=>[...s[4]||(s[4]=[i("Show Close Button",-1)])]),_:1})]),_:1},8,["code"]),s[24]||(s[24]=a("h2",{id:"custom-duration",tabindex:"-1"},[i("Custom Duration "),a("a",{class:"header-anchor",href:"#custom-duration","aria-label":"Permalink to “Custom Duration”"},"​")],-1)),s[25]||(s[25]=a("p",null,[i("Use the "),a("code",null,"duration"),i(" prop to customize how long the message is displayed.")],-1)),n(p,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showShortMessage'>Short (1s)</MYButton>
        <MYButton @click='showLongMessage'>Long (10s)</MYButton>
        <MYButton @click='showPermanentMessage'>Permanent</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[a("div",O,[n(l,{onClick:y},{default:t(()=>[...s[5]||(s[5]=[i("Short (1s)",-1)])]),_:1}),n(l,{onClick:u},{default:t(()=>[...s[6]||(s[6]=[i("Long (10s)",-1)])]),_:1}),n(l,{onClick:m},{default:t(()=>[...s[7]||(s[7]=[i("Permanent",-1)])]),_:1})])]),_:1},8,["code"]),s[26]||(s[26]=a("h2",{id:"custom-position",tabindex:"-1"},[i("Custom Position "),a("a",{class:"header-anchor",href:"#custom-position","aria-label":"Permalink to “Custom Position”"},"​")],-1)),s[27]||(s[27]=a("p",null,[i("Use the "),a("code",null,"position"),i(" prop to set the display position of the message.")],-1)),n(p,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showTopLeft'>Top Left</MYButton>
        <MYButton @click='showTopRight'>Top Right</MYButton>
        <MYButton @click='showTopCenter'>Top Center</MYButton>
        <MYButton @click='showBottomLeft'>Bottom Left</MYButton>
        <MYButton @click='showBottomRight'>Bottom Right</MYButton>
        <MYButton @click='showBottomCenter'>Bottom Center</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[a("div",I,[n(l,{onClick:B},{default:t(()=>[...s[8]||(s[8]=[i("Top Left",-1)])]),_:1}),n(l,{onClick:b},{default:t(()=>[...s[9]||(s[9]=[i("Top Right",-1)])]),_:1}),n(l,{onClick:f},{default:t(()=>[...s[10]||(s[10]=[i("Top Center",-1)])]),_:1}),n(l,{onClick:D},{default:t(()=>[...s[11]||(s[11]=[i("Bottom Left",-1)])]),_:1}),n(l,{onClick:A},{default:t(()=>[...s[12]||(s[12]=[i("Bottom Right",-1)])]),_:1}),n(l,{onClick:C},{default:t(()=>[...s[13]||(s[13]=[i("Bottom Center",-1)])]),_:1})])]),_:1},8,["code"]),s[28]||(s[28]=a("h2",{id:"html-content-support",tabindex:"-1"},[i("HTML Content Support "),a("a",{class:"header-anchor",href:"#html-content-support","aria-label":"Permalink to “HTML Content Support”"},"​")],-1)),s[29]||(s[29]=a("p",null,[i("Use the "),a("code",null,"dangerouslyUseHTMLString"),i(" prop to support HTML content (be aware of XSS risks).")],-1)),n(p,{title:"Code Demo",code:`
<template>
    <MYButton @click='showHTMLMessage'>Show HTML Content</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:M},{default:t(()=>[...s[14]||(s[14]=[i("Show HTML Content",-1)])]),_:1})]),_:1},8,["code"]),s[30]||(s[30]=a("h2",{id:"manual-close-control",tabindex:"-1"},[i("Manual Close Control "),a("a",{class:"header-anchor",href:"#manual-close-control","aria-label":"Permalink to “Manual Close Control”"},"​")],-1)),s[31]||(s[31]=a("p",null,"You can manually control the closing of a message via the return value.",-1)),n(p,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showManualMessage'>Show Manually Closable Message</MYButton>
        <MYButton @click='closeManualMessage' :disabled='!manualMessageHandle'>
            Manual Close
        </MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[a("div",U,[n(l,{onClick:w},{default:t(()=>[...s[15]||(s[15]=[i("Show Manually Closable Message",-1)])]),_:1}),n(l,{onClick:x,disabled:!h.value},{default:t(()=>[...s[16]||(s[16]=[i(" Manual Close ",-1)])]),_:1},8,["disabled"])])]),_:1},8,["code"]),s[32]||(s[32]=a("h2",{id:"close-callback",tabindex:"-1"},[i("Close Callback "),a("a",{class:"header-anchor",href:"#close-callback","aria-label":"Permalink to “Close Callback”"},"​")],-1)),s[33]||(s[33]=a("p",null,[i("Use the "),a("code",null,"onClose"),i(" prop to execute a callback function when the message is closed.")],-1)),n(p,{title:"Code Demo",code:`
<template>
    <MYButton @click='showMessageWithCallback'>Show Message with Callback</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:E},{default:t(()=>[...s[17]||(s[17]=[i("Show Message with Callback",-1)])]),_:1})]),_:1},8,["code"]),s[34]||(s[34]=a("h2",{id:"offset-setting",tabindex:"-1"},[i("Offset Setting "),a("a",{class:"header-anchor",href:"#offset-setting","aria-label":"Permalink to “Offset Setting”"},"​")],-1)),s[35]||(s[35]=a("p",null,[i("Use the "),a("code",null,"offset"),i(" prop to set the offset of the message container.")],-1)),n(p,{title:"Code Demo",code:`
<template>
    <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
        <MYButton @click='showMessageWithOffset'>Message with Offset</MYButton>
        <MYButton @click='showMultipleOffsetMessages'>Multiple Offset Messages</MYButton>
    </div>
</template>
  `.trim()},{demo:t(()=>[a("div",R,[n(l,{onClick:S},{default:t(()=>[...s[18]||(s[18]=[i("Message with Offset",-1)])]),_:1}),n(l,{onClick:T},{default:t(()=>[...s[19]||(s[19]=[i("Multiple Offset Messages",-1)])]),_:1})])]),_:1},8,["code"]),s[36]||(s[36]=a("h2",{id:"combined-usage",tabindex:"-1"},[i("Combined Usage "),a("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),s[37]||(s[37]=a("p",null,"Finally, here's an example combining multiple APIs for a complete message prompt:",-1)),n(p,{title:"Code Demo",code:`
<template>
    <MYButton @click='showComplexMessage'>Combined Usage Example</MYButton>
</template>
  `.trim()},{demo:t(()=>[n(l,{onClick:Y},{default:t(()=>[...s[20]||(s[20]=[i("Combined Usage Example",-1)])]),_:1})]),_:1},8,["code"]),s[38]||(s[38]=o("",11))])}}});export{X as __pageData,$ as default};

import{_ as d}from"./chunks/dialog.vue_vue_type_script_setup_true_lang.BRVMNYI2.js";import{_ as o}from"./chunks/button.vue_vue_type_script_setup_true_lang.DRTmpM5H.js";import{I as w,o as D,c as v,a8 as B,J as a,w as l,a as t,j as s,G as x,H as A,t as E,A as r}from"./chunks/framework.DvHWw5tv.js";import"./chunks/useStyleComputed.CediP0a2.js";import"./chunks/useClassComputed.B59PvPGn.js";import"./chunks/useColorUtils.Cv3Q488p.js";const M={style:{height:"600px"}},Y={style:{display:"flex","justify-content":"space-between"}},S={style:{display:"flex",gap:"10px","justify-content":"flex-end"}},N=JSON.parse('{"title":"Dialog","description":"","frontmatter":{},"headers":[],"relativePath":"en/plus/FeedbackDialog.md","filePath":"en/plus/FeedbackDialog.md"}'),T={name:"en/plus/FeedbackDialog.md"},H=Object.assign(T,{setup(V){const k=r(!1),g=r(!1),u=r(!1),m=r(!1),y=r(!1),b=r(!1),p=r(!1),c=r(!1),h=r(!1),f=()=>{console.log("Dialog opened")},C=()=>{console.log("Dialog closed")};return(O,e)=>{const n=w("ShowCode");return D(),v("div",{"data-pagefind-body":!0,"data-pagefind-meta":"date:1776410922000"},[e[49]||(e[49]=B("",5)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog1 = true'>Open Dialog</MYButton>
    <MYDialog v-model='showDialog1' title='Basic Dialog'>
        <p>This is a basic dialog example</p>
        <p>Click the overlay or press ESC to close</p>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[0]||(e[0]=i=>k.value=!0)},{default:l(()=>[...e[22]||(e[22]=[t("Open Dialog",-1)])]),_:1}),a(d,{modelValue:k.value,"onUpdate:modelValue":e[1]||(e[1]=i=>k.value=i),title:"Basic Dialog"},{default:l(()=>[...e[23]||(e[23]=[s("p",{style:{color:"black"}},"This is a basic dialog example",-1),s("p",{style:{color:"black"}},"Click the overlay or press ESC to close",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[50]||(e[50]=s("h2",{id:"custom-size",tabindex:"-1"},[t("Custom Size "),s("a",{class:"header-anchor",href:"#custom-size","aria-label":"Permalink to “Custom Size”"},"​")],-1)),e[51]||(e[51]=s("p",null,[t("Use the "),s("code",null,"width"),t(" and "),s("code",null,"height"),t(" properties to customize the dialog size.")],-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog2 = true'>Custom Size</MYButton>
    <MYDialog 
        v-model='showDialog2' 
        title='Custom Size'
        width='600px'
        height='400px'
    >
        <p>This is a dialog with width 600px and height 400px</p>
        <p>Supports pixel values, percentages, and other CSS units</p>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[2]||(e[2]=i=>g.value=!0)},{default:l(()=>[...e[24]||(e[24]=[t("Custom Size",-1)])]),_:1}),a(d,{modelValue:g.value,"onUpdate:modelValue":e[3]||(e[3]=i=>g.value=i),title:"Custom Size",width:"600px",height:"400px"},{default:l(()=>[...e[25]||(e[25]=[s("p",{style:{color:"black"}},"This is a dialog with width 600px and height 400px",-1),s("p",{style:{color:"black"}},"Supports pixel values, percentages, and other CSS units",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[52]||(e[52]=s("h2",{id:"custom-colors",tabindex:"-1"},[t("Custom Colors "),s("a",{class:"header-anchor",href:"#custom-colors","aria-label":"Permalink to “Custom Colors”"},"​")],-1)),e[53]||(e[53]=s("p",null,[t("Use the "),s("code",null,"backgroundColor"),t(", "),s("code",null,"borderColor"),t(", and "),s("code",null,"textColor"),t(" properties to customize the dialog colors.")],-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog3 = true'>Custom Colors</MYButton>
    <MYDialog 
        v-model='showDialog3' 
        title='Custom Colors'
        backgroundColor='#f0f8ff'
        borderColor='#409EFF'
        textColor='#333'
    >
        <p>This is a dialog with custom colors</p>
        <p>Background color, border color, and text color can all be customized</p>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[4]||(e[4]=i=>u.value=!0)},{default:l(()=>[...e[26]||(e[26]=[t("Custom Colors",-1)])]),_:1}),a(d,{modelValue:u.value,"onUpdate:modelValue":e[5]||(e[5]=i=>u.value=i),title:"Custom Colors",backgroundColor:"#f0f8ff",borderColor:"#409EFF",textColor:"#333"},{default:l(()=>[...e[27]||(e[27]=[s("p",{style:{color:"black"}},"This is a dialog with custom colors",-1),s("p",{style:{color:"black"}},"Background color, border color, and text color can all be customized",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[54]||(e[54]=s("h2",{id:"disable-overlay-close",tabindex:"-1"},[t("Disable Overlay Close "),s("a",{class:"header-anchor",href:"#disable-overlay-close","aria-label":"Permalink to “Disable Overlay Close”"},"​")],-1)),e[55]||(e[55]=s("p",null,[t("Use the "),s("code",null,"closeOnClickModal"),t(" property to disable closing the dialog by clicking the overlay.")],-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog4 = true'>Disable Overlay Close</MYButton>
    <MYDialog 
        v-model='showDialog4' 
        title='Disable Overlay Close'
        :closeOnClickModal='false'
    >
        <p>This dialog cannot be closed by clicking the overlay</p>
        <p>It can only be closed via the close button or ESC key</p>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[6]||(e[6]=i=>m.value=!0)},{default:l(()=>[...e[28]||(e[28]=[t("Disable Overlay Close",-1)])]),_:1}),a(d,{modelValue:m.value,"onUpdate:modelValue":e[7]||(e[7]=i=>m.value=i),title:"Disable Overlay Close",closeOnClickModal:!1},{default:l(()=>[...e[29]||(e[29]=[s("p",{style:{color:"black"}},"This dialog cannot be closed by clicking the overlay",-1),s("p",{style:{color:"black"}},"It can only be closed via the close button or ESC key",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[56]||(e[56]=s("h2",{id:"disable-esc-close",tabindex:"-1"},[t("Disable ESC Close "),s("a",{class:"header-anchor",href:"#disable-esc-close","aria-label":"Permalink to “Disable ESC Close”"},"​")],-1)),e[57]||(e[57]=s("p",null,[t("Use the "),s("code",null,"closeOnPressEscape"),t(" property to disable closing the dialog with the ESC key.")],-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog5 = true'>Disable ESC Close</MYButton>
    <MYDialog 
        v-model='showDialog5' 
        title='Disable ESC Close'
        :closeOnPressEscape='false'
    >
        <p>This dialog cannot be closed with the ESC key</p>
        <p>It can only be closed via the close button or clicking the overlay</p>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[8]||(e[8]=i=>y.value=!0)},{default:l(()=>[...e[30]||(e[30]=[t("Disable ESC Close",-1)])]),_:1}),a(d,{modelValue:y.value,"onUpdate:modelValue":e[9]||(e[9]=i=>y.value=i),title:"Disable ESC Close",closeOnPressEscape:!1},{default:l(()=>[...e[31]||(e[31]=[s("p",{style:{color:"black"}},"This dialog cannot be closed with the ESC key",-1),s("p",{style:{color:"black"}},"It can only be closed via the close button or clicking the overlay",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[58]||(e[58]=s("h2",{id:"overflow-control",tabindex:"-1"},[t("Overflow Control "),s("a",{class:"header-anchor",href:"#overflow-control","aria-label":"Permalink to “Overflow Control”"},"​")],-1)),e[59]||(e[59]=s("p",null,[t("Use the "),s("code",null,"overflow"),t(" property to control the overflow behavior of the dialog content.")],-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog6 = true'>Overflow Control</MYButton>
    <MYDialog 
        v-model='showDialog6' 
        title='Overflow Control'
        :overflow='true'
        height='300px'
    >
        <div style='height: 600px;'>
            <p>This content exceeds the dialog height</p>
            <p>When overflow is true, content is hidden</p>
            <p>When overflow is false, a scrollbar appears</p>
            <div v-for='i in 20' :key='i' style='padding: 10px; border-bottom: 1px solid #eee;'>
                Content Item {{ i }}
            </div>
        </div>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[10]||(e[10]=i=>b.value=!0)},{default:l(()=>[...e[32]||(e[32]=[t("Overflow Control",-1)])]),_:1}),a(d,{modelValue:b.value,"onUpdate:modelValue":e[11]||(e[11]=i=>b.value=i),title:"Overflow Control",overflow:!0,height:"300px"},{default:l(()=>[s("div",M,[e[33]||(e[33]=s("p",{style:{color:"black"}},"This content exceeds the dialog height",-1)),e[34]||(e[34]=s("p",{style:{color:"black"}},"When overflow is true, content is hidden",-1)),e[35]||(e[35]=s("p",{style:{color:"black"}},"When overflow is false, a scrollbar appears",-1)),(D(),v(x,null,A(20,i=>s("div",{key:i,style:{padding:"10px","border-bottom":"1px solid #eee"}}," Content Item "+E(i),1)),64))])]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[60]||(e[60]=s("h2",{id:"custom-header-and-footer",tabindex:"-1"},[t("Custom Header and Footer "),s("a",{class:"header-anchor",href:"#custom-header-and-footer","aria-label":"Permalink to “Custom Header and Footer”"},"​")],-1)),e[61]||(e[61]=s("p",null,[t("Use the "),s("code",null,"header"),t(" and "),s("code",null,"footer"),t(" slots to customize the dialog's header and footer.")],-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog7 = true'>Custom Header & Footer</MYButton>
    <MYDialog v-model='showDialog7'>
        <template #header>
            <div style='display: flex; align-items: center; gap: 10px;'>
                <span style='color: #409EFF;'>🔔</span>
                <span>Custom Header</span>
            </div>
        </template>
        <p>This dialog uses custom header and footer</p>
        <p>The content area can hold any content</p>
        <template #footer>
            <div style='display: flex; justify-content: space-between;'>
                <MYButton type='info' @click='showDialog7 = false'>Cancel</MYButton>
                <MYButton type='primary' @click='showDialog7 = false'>Confirm</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[12]||(e[12]=i=>p.value=!0)},{default:l(()=>[...e[36]||(e[36]=[t("Custom Header & Footer",-1)])]),_:1}),a(d,{modelValue:p.value,"onUpdate:modelValue":e[15]||(e[15]=i=>p.value=i)},{header:l(()=>[...e[37]||(e[37]=[s("div",{style:{display:"flex","align-items":"center",gap:"10px"}},[s("span",{style:{color:"#409EFF"}},"🔔"),s("span",null,"Custom Header")],-1)])]),footer:l(()=>[s("div",Y,[a(o,{type:"info",onClick:e[13]||(e[13]=i=>p.value=!1)},{default:l(()=>[...e[38]||(e[38]=[t("Cancel",-1)])]),_:1}),a(o,{type:"primary",onClick:e[14]||(e[14]=i=>p.value=!1)},{default:l(()=>[...e[39]||(e[39]=[t("Confirm",-1)])]),_:1})])]),default:l(()=>[e[40]||(e[40]=s("p",{style:{color:"black"}},"This dialog uses custom header and footer",-1)),e[41]||(e[41]=s("p",{style:{color:"black"}},"The content area can hold any content",-1))]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[62]||(e[62]=s("h2",{id:"event-listening",tabindex:"-1"},[t("Event Listening "),s("a",{class:"header-anchor",href:"#event-listening","aria-label":"Permalink to “Event Listening”"},"​")],-1)),e[63]||(e[63]=s("p",null,[t("The dialog provides "),s("code",null,"open"),t(" and "),s("code",null,"close"),t(" events to listen for open and close states.")],-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog8 = true'>Event Listening</MYButton>
    <MYDialog 
        v-model='showDialog8' 
        title='Event Listening'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>Corresponding events are triggered when the dialog opens or closes</p>
        <p>Check the console to see event triggers</p>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[16]||(e[16]=i=>c.value=!0)},{default:l(()=>[...e[42]||(e[42]=[t("Event Listening",-1)])]),_:1}),a(d,{modelValue:c.value,"onUpdate:modelValue":e[17]||(e[17]=i=>c.value=i),title:"Event Listening",onOpen:f,onClose:C},{default:l(()=>[...e[43]||(e[43]=[s("p",{style:{color:"black"}},"Corresponding events are triggered when the dialog opens or closes",-1),s("p",{style:{color:"black"}},"Check the console to see event triggers",-1)])]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[64]||(e[64]=s("h2",{id:"combined-usage",tabindex:"-1"},[t("Combined Usage "),s("a",{class:"header-anchor",href:"#combined-usage","aria-label":"Permalink to “Combined Usage”"},"​")],-1)),e[65]||(e[65]=s("p",null,"Finally, combine multiple APIs to create a complete dialog:",-1)),a(n,{title:"Code Demo",code:`
<template>
    <MYButton type='primary' @click='showDialog9 = true'>Combined Usage</MYButton>
    <MYDialog 
        v-model='showDialog9' 
        title='Combined Usage Example'
        width='500px'
        height='350px'
        backgroundColor='#fff'
        borderColor='#8d4dd1'
        textColor='#333'
        :closeOnClickModal='false'
        :closeOnPressEscape='true'
        :overflow='false'
        @open='handleOpen'
        @close='handleClose'
    >
        <p>This is a complete example of combined usage</p>
        <p>It includes all available properties and features</p>
        <template #footer>
            <div style='display: flex; gap: 10px; justify-content: flex-end;'>
                <MYButton type='info' @click='showDialog9 = false'>Cancel</MYButton>
                <MYButton type='primary' @click='showDialog9 = false'>Confirm</MYButton>
            </div>
        </template>
    </MYDialog>
</template>
  `.trim()},{demo:l(()=>[a(o,{type:"primary",onClick:e[18]||(e[18]=i=>h.value=!0)},{default:l(()=>[...e[44]||(e[44]=[t("Combined Usage",-1)])]),_:1}),a(d,{modelValue:h.value,"onUpdate:modelValue":e[21]||(e[21]=i=>h.value=i),title:"Combined Usage Example",width:"500px",height:"350px",backgroundColor:"#fff",borderColor:"#8d4dd1",textColor:"#333",closeOnClickModal:!1,closeOnPressEscape:!0,overflow:!1,onOpen:f,onClose:C},{footer:l(()=>[s("div",S,[a(o,{type:"info",onClick:e[19]||(e[19]=i=>h.value=!1)},{default:l(()=>[...e[45]||(e[45]=[t("Cancel",-1)])]),_:1}),a(o,{type:"primary",onClick:e[20]||(e[20]=i=>h.value=!1)},{default:l(()=>[...e[46]||(e[46]=[t("Confirm",-1)])]),_:1})])]),default:l(()=>[e[47]||(e[47]=s("p",{style:{color:"black"}},"This is a complete example of combined usage",-1)),e[48]||(e[48]=s("p",{style:{color:"black"}},"It includes all available properties and features",-1))]),_:1},8,["modelValue"])]),_:1},8,["code"]),e[66]||(e[66]=B("",9))])}}});export{N as __pageData,H as default};

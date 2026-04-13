# Quick Start

## Prerequisites
<ul>
    <li style="margin-top: 10px"><MYa href="https://www.nodejs.org" target="_blank">Node.js</MYa> recommended version 18 or above</li>
</ul>

## How to Install
:::code-group
```bash [npm]
$ npm install mengyue-plus
```
```bash [pnpm]
$ pnpm install mengyue-plus
```
```bash [yarn]
$ yarn add mengyue-plus
```
:::

### Installation Process
Using pnpm as an example
:::code-group
```bash[npm]
$ npm install mengyue-plus

added 28 packages in 18s

3 packages are looking for funding
  run `npm fund` for details
```
```bash[pnpm]
$ pnpm install mengyue-plus
Packages: +24
++++++++++++++++++++++++
Progress: resolved 24, reused 23, downloaded 1, added 24, done

dependencies:
+ mengyue-plus 0.0.62

Done in 10.8s using pnpm v10.12.1
```
```bash[yarn]
$ yarn add mengyue-plus
yarn add v1.22.22
[1/28] Resolving packages...
[2/28] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[28/28] Linking dependencies...
success Saved lockfile.
success Saved 13 new dependencies.
info Direct dependencies
└─ mengyue-plus@0.0.62
info All dependencies
├─ mengyue-plus@0.0.62
├─ [other dependencies...]
└─ [other dependencies...]
Done in 8.2s.
```
:::

## How to Use
### Global Registration of mengyue-plus
:::code-group
```bash[vue]
// In main.js/ts file of Vue project
import MengyuePlus from 'mengyue-plus'
import 'mengyue-plus/style.css'

const app = createApp(App)
app.use(MengyuePlus)
app.mount('#app')
```
:::
When using, you can directly write the tag as shown in the documentation examples. For example, if I want to implement a button with #409EFF color, I can write the following in a Vue file:<br />
```vue
<template>
    <MYButton type="primary">Primary Button</MYButton>
</template>
```
Here is the result after running
<DemoClient title="Button Demo">
  <MYButton type="primary">Primary Button</MYButton>
</DemoClient>

### Local Registration
Of course, in some projects, a component library that takes up too much space can have negative effects, so mengyue-plus also supports on-demand component loading, which reduces code redundancy.
:::code-group
```vue[vue]
<template>
    <MYButton type="primary">Primary Button</MYButton>
</template>
<script>
import { MYButton } from 'mengyue-plus'
import 'mengyue-plus/index.css'
</script>
```
:::
Here is the result after running
<DemoClient title="Button Demo">
  <MYButton type="primary">Primary Button</MYButton>
</DemoClient>

## Learn More
<ul>
    <li>Node.js official website: <MYa href="https://nodejs.org/" target="_blank">https://nodejs.org</MYa></li>
    <li>mengyue-plus npm address: <MYa href="https://www.npmjs.com/package/mengyue-plus" target="_blank">https://www.npmjs.com/package/mengyue-plus</MYa></li>
    <li>mengyue-plus GitHub address: <MYa href="https://github.com/mengyuecengj/mengyue-components" target="_blank">https://github.com/mengyuecengj/mengyue-components</MYa></li>
    <li>To learn more components, please continue reading this guide.</li>
</ul>

<script setup>
import MYButton from '../../../packages/components/button/src/button.vue'
import MYa from '../../../packages/components/a/src/a.vue'
</script>
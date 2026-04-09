# 快速上手

## 前置准备
<ul>
    <li style="margin-top: 10px"><MYa href="https://www.nodejs.org" target="_blank">Node.js</MYa>建议在18版本或者18版本以上</li>
</ul>

## 如何安装
:::code-group
```bash [npm]
$ npm install mengyue-components
```
```bash [pnpm]
$ pnpm install mengyue-components
```
```bash [yarn]
$ yarn add mengyue-components
```
:::

### 安装过程
:::code-group
```bash[npm]
$ npm install mengyue-components

added 28 packages in 18s

3 packages are looking for funding
  run `npm fund` for details
```
```bash[pnpm]
$ pnpm install mengyue-components
Packages: +24
++++++++++++++++++++++++
Progress: resolved 24, reused 23, downloaded 1, added 24, done

dependencies:
+ mengyue-components 0.1.1

Done in 10.8s using pnpm v10.12.1
```
```bash[yarn]
$ yarn add mengyue-components
yarn add v1.22.22
[1/28] Resolving packages...
[2/28] Fetching packages...
info fsevents@2.3.2: The platform "linux" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
[28/28] Linking dependencies...
success Saved lockfile.
success Saved 13 new dependencies.
info Direct dependencies
└─ mengyue-components@0.1.1
info All dependencies
├─ mengyue-components@0.1.1
├─ [other dependencies...]
└─ [other dependencies...]
Done in 8.2s.
```
:::

## 如何使用
### 全局注册mengyue-components
:::code-group
```bash[vue]
// vue项目中main.js/ts文件
import MengyueComponents from 'mengyue-components'
import 'mengyue-components/style.css'

const app = createApp(App)
app.use(MengyueComponents)
app.mount('#app')
```
:::
使用时可以按照文档中的示例直接写入标签，例如我要实现一个#409EFF颜色的按钮,那么就可以在vue文件中这样写<br />
```vue
<template>
    <MYButton type="primary">主要按钮</MYButton>
</template>
```
下面是运行后的效果
<DemoClient title="按钮演示">
  <MYButton type="primary">主要按钮</MYButton>
</DemoClient>

### 局部注册
当然，在一些项目中组件库占用面积过大会带来一些负面效果，所以`mengyue-components`也支持组件按需加载，这样可以减少代码的冗余。
:::code-group
```vue[vue]
<template>
    <MYButton type="primary">主要按钮</MYButton>
</template>
<script>
import { MYButton } from 'mengyue-components'
import 'mengyue-components/index.css'
</script>
```
:::
下面是运行后的结果
<DemoClient title="按钮演示">
  <MYButton type="primary">主要按钮</MYButton>
</DemoClient>

## 了解更多
<ul>
    <li>node官网: <MYa href="https://nodejs.org/" target="_blank">https://nodejs.org</MYa></li>
    <li>mengyue-plus的npm地址: <MYa href="https://www.npmjs.com/package/mengyue-components" target="_blank">https://www.npmjs.com/package/mengyue-components</MYa></li>
    <li>mengyue-plus的Github地址: <MYa href="https://github.com/mengyuecengj/mengyue-components" target="_blank">https://github.com/mengyuecengj/mengyue-components</MYa></li>
    <li>想要了解更多组件, 请继续阅读该指南</li>
</ul>

<script setup>
import MYButton from '../../packages/components/button/src/button.vue'
import MYa from '../../packages/components/a/src/a.vue'
</script>

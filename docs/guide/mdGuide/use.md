# 快速上手

## 前置准备
<ul>
    <li style="margin-top: 10px"><MYa href="https://www.nodejs.org" target="_blank">Node.js</MYa>建议在18版本或者18版本以上</li>
</ul>

## 如何安装

使用npm安装
```npm
npm install mengyue-plus
```
或者也可以使用pnpm来安装
```pnpm
pnpm install mengyue-plus
```
也可以使用yarn来安装mengyue-plus
```yarn
yarn add mengyue-plus
```

## 安装结果
以pnpm为例
```bash
# pnpm install mengyue-plus
Packages: +24
++++++++++++++++++++++++
Progress: resolved 24, reused 23, downloaded 1, added 24, done

dependencies:
+ mengyue-plus 0.0.43

Done in 10.8s using pnpm v10.12.1
```

## 如何使用
### 全局注册mengyue-plus
例如在vue项目，在项目的main.ts/js文件中
如下方式全局引入mengyue-plus
```js
import MengyuePlus from 'mengyue-plus'
import 'mengyue-plus/style.css'

const app = createApp(App)
app.use(MengyuePlus)
app.mount('#app')
```
使用时可以按照文档中的示例直接写入标签，例如使用按钮，例如:<br />
`<MYButton type="primary">主要按钮</MYButton>`<br />
下面是运行后的效果
<demo>
    <template #source>
        <MYButton type="primary">全局注册按钮</MYButton>
    </template>
</demo>

### 局部注册
当然，mengyue-plus也支持组件按需加载，这样可以减少代码的冗余。
如下方式局部引入mengyue-plus
例如这是在某个.vue文件中
```html
<template>
    <MYButton type="primary">主要按钮</MYButton>
</template>
<script>
import {MYButton} from 'mengyue-plus'
import 'mengyue-plus/index.css'
</script>
```
下面是运行后的结果
<demo>
    <template #source>
        <MYButton type="primary">局部注册按钮</MYButton>
    </template>
</demo>

## 了解更多
<ul>
    <li>node官网: <MYa href="https://nodejs.org/" target="_blank">https://nodejs.org</MYa></li>
    <li>mengyue-plus的npm地址: <MYa href="https://www.npmjs.com/package/mengyue-plus" target="_blank">https://www.npmjs.com/package/mengyue-plus</MYa></li>
    <li>mengyue-plus的Github地址: <MYa href="https://github.com/mengyuecengj/mengyue-components" target="_blank">https://github.com/mengyuecengj/mengyue-components</MYa></li>
    <li>想要了解更多组件, 请继续阅读该指南</li>
</ul>

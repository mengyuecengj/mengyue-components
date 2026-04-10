# 从 mengyue-plus 迁移至 mengyue-components
> 该指南为切换与代码的调整步骤，组件API变更请[阅读文档](../components/FastStart.md)

## 1. 卸载旧版本
:::code-group
```bash[npm]
npm remove mengyue-plus
```
```bash[pnpm]
pnpm remove mengyue-plus
```
```bash[yarn]
yarn remove mengyue-plus
```
:::

### package.json删除
也可以在pakage.json中删除mengyue-plus
```json
{
  "dependencies": {
    "mengyue-plus": "^0.0.67",  # 删除这一行
    "vue": "^3.5.13",
    "vue-router": "^4.5.1"
  },
}

```

### 使用命令更新
:::code-group
```bash[npm]
npm install
```
```bash[pnpm]
pnpm install
```
```bash[yarn]
yarn install
```
:::

## 2. 安装正式版
:::code-group
```bash[npm]
npm remove mengyue-components
```
```bash[pnpm]
pnpm remove mengyue-components
```
```bash[yarn]
yarn remove mengyue-components
```
:::

## 3.修改 packge.json
检查`package.json`中是否在`dependencies`或 `devDependencies`内残留`mengyue-plus`,如有手动删除，确保仅保留`mengyue-components`
删除后，执行`npm install`或`pnpm install`或`yarn install`<br />
> 注意: `mengyue-components`和`mengyue-plus`可以共存，但没有必要这样做，也没必要共存。

## 4. 更新入口文件
### 全局更新
以`vue3`中的入口文件`main.js/ts`<br />
:::code-group
```bash[typescript]
import { createApp } from 'vue'
import App from './App.vue'
/ **
 * 删除mengyue-plus的写法，使用mengyue-components
 */
// import mengyuePlus from 'mengyue-plus'
// import 'mengyue-plus/style.css'
import mengyueComponents from 'mengyue-components'
import 'mengyue-components/style.css'

const app = createApp(App)
// 去掉mengyue-plus的写法,使用mengyue-components
// app.use(mengyuePlus)
app.use(mengyueComponents)
app.mount('#app')
```
:::

### 局部组件
如果是以局部导入的方式使用`mengyue-plus`，需要手动将所有`mengyue-plus`组件的写法改为`mengyue-components` <br />
> from 'mengyue-plus' ==>  from 'mengyue-components'

### 5. 运行验证
执行启动命令
:::code-group
```bash[npm]
npm run dev
```
```bash[pnpm]
pnpm run dev
```
:::


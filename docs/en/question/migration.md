# Migration from mengyue-plus to mengyue-components
> This guide outlines the steps for switching and code adjustments. For changes to component APIs, please [refer to the documentation](../components/FastStart.md)

## 1.  Uninstall the old version
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

### package.json delete
You can also delete mengyue plus in pakagejson
```json
{
  "dependencies": {
    "mengyue-plus": "^0.0.67",  # Delete this line
    "vue": "^3.5.13",
    "vue-router": "^4.5.1"
  },
}

```

### Update using commands
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

## 2. Install the official version
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

## 3.Modify packgejson
Check if there are any residual `mengyue plus` in `dependencies` or `devDependencies` in `package. json`. If manually deleted, ensure that only `mengyue components` are retained`
After deletion, execute `npm install` or `pnpm install` or `yarn install`<br/>
>Note: `mengyue components` and `mengyue plus` can coexist, but it is not necessary to do so or coexist.

## 4. Update entrance file
### Global update
Using the entry file `main.js/ts` in `vue3` <br/>
:::code-group
```bash[typescript]
import { createApp } from 'vue'
import App from './App.vue'
/ **
 * Remove the spelling `mengyue plus` and use `mengyue components` instead
 */
// import mengyuePlus from 'mengyue-plus'
// import 'mengyue-plus/style.css'
import mengyueComponents from 'mengyue-components'
import 'mengyue-components/style.css'

const app = createApp(App)
// Remove the spelling `mengyue plus` and use `mengyue components` instead
// app.use(mengyuePlus)
app.use(mengyueComponents)
app.mount('#app')
```
:::

### local component
If using `mengyue plus` as a local import, you need to manually change the writing of all `mengyue plus` components to `mengyue components`<br/>
> from 'mengyue-plus' ==>  from 'mengyue-components'

### 5. Run verification
Execute the startup command
:::code-group
```bash[npm]
npm run dev
```
```bash[pnpm]
pnpm run dev
```
:::


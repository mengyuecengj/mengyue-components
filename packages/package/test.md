# 组件库优化
## 可复用性优化
项目	当前现状	优化建议
状态逻辑（如弹窗开关、选中状态）	写死在组件内部	抽离到 hooks/ 目录下，如 useToggle, useModal, useHover 等
事件监听（如点击外部关闭）	手动写 addEventListener	封装为 useClickOutside
表单控制 / 暴露方法	$refs 操作	使用 defineExpose 和组合式 API 暴露逻辑，或用 v-model 实现双向控制

## 样式复用
项目	当前现状	优化建议
间距、颜色、字体等	每个组件自己写	统一提取到 styles/variables/（如 spacing.scss, color.scss）
flex、居中等样式	每个组件都写	封装常用 mixins：如 @include flex-center
响应式断点	写死在组件中	抽离为 $breakpoints 变量 + mixin

## 可扩展性优化（插件化 / 组件暴露 / 主题）
项目	优化建议
所有组件都支持 v-model 和 emits 定义	使用 <script setup lang="ts"> 中的 defineProps, defineEmits
所有组件暴露公共方法	使用 defineExpose({ open, close })
暴露组件类型	在 index.ts 中写 export type { ButtonProps } from './src/props'
插件安装方式	支持 app.use(MyComponentLib) 自动全局注册
支持主题定制	使用 CSS 变量 + :root/.dark 等类来切换主题样式
可按需引入组件样式	每个组件的 scss 单独导出，例如 button.scss，由主样式入口 index.scss 聚合导出


## 类型安全优化（TS 极致使用）
优化点	建议
props 强类型	所有 props 放在 props.ts 中导出接口类型
emits 强类型	defineEmits<{ (e: 'click', ev: MouseEvent): void }>()
v-model 类型	modelValue: string，update:modelValue emit 类型配套
安装全局组件时类型声明	在 index.ts 中为每个组件暴露类型，并提供全局组件注册类型文件
支持完整类型导出	项目使用 tsconfig.build.json 支持 declaration: true 输出 .d.ts


## 样式整体系统优化
维度	建议
变量抽离	所有颜色、字体、阴影、尺寸用变量管理
响应式系统	$breakpoints + mixin 管理
暗黑主题	使用 CSS 变量 + .dark 类控制全局
每个组件样式隔离	使用 scoped + 统一 style/button.scss 文件
可切换主题色	配置 CSS 变量运行时切换或 vite-plugin-theme

## 前端工程化与体积优化
构建打包优化
项目	建议
支持按需引入	避免 export *，显式导出组件与样式
构建输出格式	支持 es + cjs 输出，使用 rollup 构建
去除无用代码	使用 treeshake: true，并移除未使用的变量
类型声明	使用 declaration: true，并独立输出类型文件夹


## 开发体验
项目	建议
自动组件导入	配置 unplugin-vue-components，支持自动引入组件
自动样式导入	unplugin-style-import 或组件内部 @use
Lint & 格式化	配置 ESLint + Prettier + Stylelint 统一规范
单元测试	使用 Vitest 编写测试用例（覆盖 composable、组件行为）
CI/CD	配置 GitHub Actions 实现自动测试 + 构建发布流程
创建组件脚本	写一个 scripts/create-component.ts 自动生成组件模板结构

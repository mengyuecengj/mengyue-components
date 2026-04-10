# mengyue-plus

`mengyue-plus` 是本组件库体系在正式发布前的 **早期过渡版本**。它承载了组件库最初的设计理念与功能实现，并为后续正式版的完善奠定了坚实的基础。

## 定位与现状

`mengyue-plus` 与正式版 `mengyue-components` 在组件种类上 **完全一致**，所有基础组件功能均已具备。该版本曾用于内部验证与早期项目试用，随着正式版的推出，`mengyue-plus` 已进入 **维护冻结** 状态，不再进行新功能开发。

## 技术特征

- **技术栈**：Vue 3 + TypeScript + Vite，基于 pnpm workspace 构建。
- **完全自研**：所有组件均为独立开发，未依赖任何第三方 UI 库。
- **测试保障**：包含 200+ 个测试用例，单元测试覆盖率 100%。
- **轻量设计**：打包体积控制在数百 KB 级别（< 1MB），按需引入成本极低。

## 与正式版的关系

`mengyue-plus` 与 `mengyue-components` 存在 **继承与优化关系**：

- 正式版在保留全部组件功能的基础上，**统一并优化了 Props API 设计**，提升了使用一致性。
- 修复了早期版本中已发现的缺陷，增强了代码健壮性与可维护性。

::: warning 迁移建议
当前项目若仍在使用 `mengyue-plus`，**强烈推荐迁移至正式版 `mengyue-components`**。  
迁移路径与变更点请参考独立的 [迁移指南](../question/migration.md) 章节。
:::

## 注意事项

- `mengyue-plus` 与 `mengyue-components` 虽可共存于同一项目，但二者为同一套组件的不同迭代，**无必要同时引入**。
- 后续所有新特性与问题修复将 **在 `mengyue-components` 进行**。

对于新项目，请直接选用 `mengyue-components` 以获得最新的 API 设计与长期维护支持。
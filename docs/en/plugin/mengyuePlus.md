# mengyue-plus

`mengyue-plus` is an **early transitional version** of this component library system prior to its official release. It embodies the initial design concepts and functional implementations of the component library, laying a solid foundation for the subsequent formal version's refinement.

Positioning and Current Status

`mengyue-plus` is **fully consistent** with the official version `mengyue-components` in terms of component types, featuring all the functionalities of basic components. This version was previously used for internal validation and early project trials. With the release of the official version, `mengyue-plus` has entered a **maintenance freeze** state and will no longer receive new feature developments.

## Technical Features

- **Technology Stack**: Vue 3 + TypeScript + Vite, built on pnpm workspace.
- **Fully自主研发**：All components are independently developed without relying on any third-party UI libraries.
- **Test Assurance**: Includes over 200 test cases with 100% unit test coverage.
- **Lightweight Design**: The package size is controlled at the hundreds of KB level (<1MB), with minimal cost for on-demand integration.

## Relationship with the Official Version

```mengyue-plus``` and ```mengyue-components``` have an **inheritance and optimization relationship**:

The official version retains all component functionalities while **unifying and optimizing the Props API design**, enhancing usage consistency.
- Fixed defects identified in earlier versions, enhancing code robustness and maintainability.

::: warning Migration Recommendation
If the current project is still using `mengyue-plus`, **strongly recommend migrating to the official version `mengyue-components`**.   
For migration paths and change points, please refer to the independent [Migration Guide](../question/migration.md) section.
:::

## Precautions

Although `mengyue-plus` and `mengyue-components` can coexist in the same project, they represent different iterations of the same component set, so **there is no need to import both simultaneously**.
- All future new features and bug fixes will be **implemented in `mengyue-components`**.

For new projects, please directly use `mengyue-components` to access the latest API design and long-term maintenance support.
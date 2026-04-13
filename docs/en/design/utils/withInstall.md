# Hooks and Utility Functions

## withInstall: Component Auto-Registration Utility

### Pain Points

In Vue 3 component library development, a common yet tedious task is manually writing an `install` method for each component to support global registration (e.g., `app.use(Button)` or `app.use(MyComponent)`).

Typical repetitive code looks like:

```typescript
Button.install = (app: App) => {
  app.component(Button.name, Button)
}
```

### As the number of components grows:
· Every component repeats nearly identical install logic<br />
· Easy to forget adding install, preventing global registration during on-demand imports<br />
· Inconsistent ways to obtain component names (some use name, some use __name)<br />
· TypeScript type inference is cumbersome; merging Plugin type with component type is not elegant<br />

These seemingly small issues significantly increase maintenance costs and reduce the professionalism of the component library.

## Design Goals
The goal of withInstall is to provide a minimal, universal utility function that grants every component full global registration capability with just one line of code, while maintaining perfect TypeScript type support and runtime safety.

## 核心特性

| Feature                         | Description                                                                 |
|------------------------------|----------------------------------------------------------------------|
| **One-Click Enhancement**           | Wrap a component with withInstall(Component) to automatically add a standard install method |
| **Automatic Name Extraction**       | Prioritizes component.name, falls back to component.__name, covering most scenarios |
| **Runtime Safety Check**        | 	Throws a clear error if the component lacks a name, facilitating early detection during development      |
| **Perfect Type Fusion**             | The SFCWithInstall type ensures the wrapped component retains both the original component type and the Plugin type   |
| **Zero Runtime Overhead**             | Registration logic executes only when app.use is called; no extra performance cost     |
| **Pure Utility Function**                 | 	No side effects, no dependency on Vue runtime; safe to call at any build stage     |

### 典型使用方式
```TypeScript
// In component definition file
import { withInstall } from '@/utils/withInstall'

const MyButton = defineComponent({
  name: 'MyButton',  // or __name: 'MyButton' (auto-injected by Vite)
  // ... component logic
})

export default withInstall(MyButton)

/**
 * For composition components exporting multiple
 * wrap each or export the primary one
 *  */ 
export const MyButtonPro = withInstall(defineComponent({ ... }))
```

### Unified Export in Entry File
```TypeScript
export { default as MyButton } from './src/button'
export { default as MyMessage } from './src/message'
/**
 *  No need to manually add install; all components 
 *  already have global registration capability
 *  */
```

User-side usage (adhering to industry standards):
```typescript
import { createApp } from 'vue'
import MengyueComponents from 'mengyue-components'

const app = createApp(App)

// Automatically registers all components with install
app.use(MengyueComponents) 
```

Or on-demand:
```TypeScript
import { MyButton } from 'mengyue-components'

app.use(MyButton)  // Global registration of a single component
```

## Design Value
Though small, withInstall solves one of the most common "repetitive labor" issues in component library development:
· Completely eliminates boilerplate install code for all components<br />
· Enforces component naming conventions (no name = error), improving library quality consistency<br />
· Unifies component export patterns, allowing maintainers to focus solely on component logic<br />
· Seamless integration with Vue's official plugin mechanism, providing a user experience identical to mainstream libraries like       Element Plus and Naive UI<br />
· Full TypeScript type safety with IDE IntelliSense for the install method
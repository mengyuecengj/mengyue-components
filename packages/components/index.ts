import type { App, Plugin } from 'vue';
import MYButton from './button/src/button.vue';
import MYBorder from './border/src/border.vue';
import MYText from './text/src/text.vue';
import MYa from './a/src/a.vue';
import { MYScroll } from './scroll';
import { MYScrollbar } from './scrollbar';
import {
  MYContainer,
  MYHeader,
  MYMain,
  MYFooter,
  MYAside,
} from './container';
import { MYRow, MYCol } from './layout';

// 组件映射，显式定义 name
const components = {
  MYButton: { component: MYButton, name: 'MYButton' },
  MYBorder: { component: MYBorder, name: 'MYBorder' },
  MYText: { component: MYText, name: 'MYText' },
  MYa: { component: MYa, name: 'MYa' },
  MYScroll: { component: MYScroll, name: 'MYScroll' },
  MYScrollbar: { component: MYScrollbar, name: 'MYScrollbar' },
  MYContainer: { component: MYContainer, name: 'MYContainer' },
  MYHeader: { component: MYHeader, name: 'MYHeader' },
  MYMain: { component: MYMain, name: 'MYMain' },
  MYFooter: { component: MYFooter, name: 'MYFooter' },
  MYAside: { component: MYAside, name: 'MYAside' },
  MYRow: { component: MYRow, name: 'MYRow' },
  MYCol: { component: MYCol, name: 'MYCol' },
};

// interface ComponentWithName {
//   name?: string;
//   __name?: string;
// }

// interface ComponentEntry {
//   component: any; // 可以根据具体类型调整
//   name: string;
// }

// install 方法
const install: Plugin['install'] = (app: App) => {
  Object.values(components).forEach(({ component, name }) => {
    // 检查是否已注册，避免覆盖
    if (app.component(name)) {
      console.warn(`Component ${name} is already registered, skipping.`);
      return;
    }
    // 使用组件自身的 name 作为备用
    const finalName = component.name || component.__name || name;
    app.component(finalName, component);
  });
};

// 插件对象
const MengyuePlus: Plugin = { install };

// ───── 导出 ─────
export default MengyuePlus;
export {
  MYButton,
  MYBorder,
  MYText,
  MYa,
  MYScroll,
  MYScrollbar,
  MYContainer,
  MYHeader,
  MYMain,
  MYFooter,
  MYAside,
  MYRow,
  MYCol,
};
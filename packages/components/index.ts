import type { App, Plugin } from 'vue';
import MYButton from './button/src/button.vue';
import MYBorder from './border/src/border.vue';
import MYText from './text/src/text.vue';
import MYa from './a/src/a.vue';
import { MYScroll } from './scroll';
import { MYScrollbar } from './scrollbar';
import { MYContainer, MYHeader, MYMain, MYFooter, MYAside } from './container';
import { MYRow, MYCol } from './layout';
import { MYInput } from './input';
import { MYRadio, MYRadioGroup } from './radio'
import { MYCheckbox, MYCheckboxGroup } from './checkbox';
import { MYSwitch } from './switch';
import { MYRate } from './rate'
import { MYPickColor } from './pickColor';
import { MYSelectDate } from './selectDate';
import { MYSelectTime } from './selectTime';
import { MYSelect, MYOption } from './select';
import { MYSelectCascader } from './selectCascader';
import { MYSlidebar } from './sliderbar';
import { MYForm, MYFormItem } from './form';
import { MYBadge } from './badge';
import { MYCollapse, MYCollapseItem } from './collapse';
import { MYProgress } from './progress';
import { MYResult } from './result';
import { MYSkeleton, MYSkeletonItem } from './skeleton';
import { MYPagination } from './pagination';
import { MYTable, MYTableColumn } from './table';
import { MYTimeline, MYTimelineItem } from './timeline';
import { MYTree, MYTreeNode } from './tree';
import { MYBacktop } from './backtop';
import { MYBreadcrumb, MYBreadcrumbItem } from './breadcrumb';
import { MYDropdown, MYDropdownMenu, MYDropdownItem } from './dropdown';
import { MYMenu, MYMenuSubMenu, MYMenuItem } from './menu';
import { MYStep, MYSteps } from './step';
import { MYCarousel, MYCarouselItem } from './carousel';
import { MYTransfer, MYTransferPanel } from './transfer';
import { MYAlert } from './alert';


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
  MYInput: { component: MYInput, name: 'MYInput' },
  MYRadio: { component: MYRadio, name: 'MYRadio'},
  MYRadioGroup: { component: MYRadioGroup, name: 'MYRadio-group' },
  MYCheckbox: { component: MYCheckbox, name: 'MYCheckbox' },
  MYCheckboxGroup: { component: MYCheckboxGroup, name: 'MYCheckbox-group'},
  MYSwitch: { component: MYSwitch, name: 'MYSwitch' },
  MYRate: { component: MYRate, name: 'MYRate' },
  MYPickColor: { component: MYPickColor, name: 'MYSelect-color' },
  selectDate: { component: MYSelectDate, name: 'MYSelect-date' },
  selectTime: { component: MYSelectTime, name: 'MYSelect-time' },
  select: { component: MYSelect, name: 'MYSelect' },
  option: { component: MYOption, name: 'MYOption' },
  selectCascader: { component: MYSelectCascader, name: 'MYSelect-cascader' },
  MYSlidebar: { component: MYSlidebar, name: 'MYSlidebar' },
  MYForm: { component: MYForm, name: 'MYForm' },
  MYFormItem: { component: MYFormItem, name: 'MYFormItem'},
  MYBadge: { component: MYBadge, name: 'MYBadge'},
  MYCollapse: { component: MYCollapse, name: 'MYCollapse'},
  MYCollapseItem: { component: MYCollapseItem, name: 'MYCollapse-item' },
  MYProgress: { component: MYProgress, name: 'MYProgress' },
  MYResult: { component: MYResult, name: 'MYResult' },
  MYSkeleton: { component: MYSkeleton, name: 'MYSkeleton' },
  MYSkeletonItem: { component: MYSkeletonItem, name: 'MYSkeleton-item' },
  MYPagination: { component: MYPagination, name: 'MYPagination' },
  MYTable: { component: MYTable, name: 'MYTable' },
  MYTableColumn: { component: MYTableColumn, name: 'MYTableColumn' },
  MYTimeline: { component: MYTimeline, name: 'MYTimeline' },
  MYTimelineItem: { component: MYTimelineItem, name: 'MYTimeline-item' },
  MYTree: { component: MYTree, name: 'MYTree' },
  MYTreeNode: { component: MYTreeNode, name: 'MYTree-node' },
  MYBacktop: { component: MYBacktop, name: 'MYBacktop' },
  MYBreadcrumb: { component: MYBreadcrumb, name: 'MYBreadcrumb'},
  MYBreadcrumbItem: { component: MYBreadcrumbItem, name: 'MYBreadcrumb-item' },
  MYDropdown: { component: MYDropdown, name: 'MYDropdown' },
  MYDropdownMenu: { component: MYDropdownMenu, name: 'MYDropdown-menu' },
  MYDropdownItem: { component: MYDropdownItem, name: 'MYDropdown-item' },
  MYMenu: { component: MYMenu, name: 'MYMenu' },
  MYMenuSubMenu: { component: MYMenuSubMenu, name: 'MYMenu-submenu' },
  MYMenuItem: { component: MYMenuItem, name: 'MYMenu-item'},
  MYStep: { component: MYStep, name: 'MYStep' },
  MYSteps: { component: MYSteps, name: 'MYSteps' },
  MYCarousel: { component: MYCarousel, name: 'MYCarousel' },
  MYCarouselItem: { component: MYCarouselItem, name: 'MYCarousel-item' },
  MYTransfer: { component: MYTransfer, name: 'MYTransfer' },
  MYTransferPanel: { component: MYTransferPanel, name: 'MYTransferPanel' },
  MYAlert: { component: MYAlert, name: 'MYAlert' },
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
    const finalName = name;
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
  MYInput,
  MYRadio,
  MYRadioGroup,
  MYCheckbox,
  MYCheckboxGroup,
  MYSwitch,
  MYRate,
  MYPickColor,
  MYSelectDate,
  MYSelectTime,
  MYSelect,
  MYOption,
  MYSelectCascader,
  MYSlidebar,
  MYForm,
  MYFormItem,
  MYBadge,
  MYCollapse,
  MYCollapseItem,
  MYProgress,
  MYResult,
  MYSkeleton,
  MYSkeletonItem,
  MYPagination,
  MYTable,
  MYTableColumn,
  MYTimeline,
  MYTimelineItem,
  MYTree,
  MYTreeNode,
  MYBacktop,
  MYBreadcrumb,
  MYBreadcrumbItem,
  MYDropdown,
  MYDropdownMenu,
  MYDropdownItem,
  MYMenu,
  MYMenuSubMenu,
  MYMenuItem,
  MYStep,
  MYSteps,
  MYCarousel,
  MYCarouselItem,
  MYTransfer,
  MYTransferPanel,
  MYAlert
};

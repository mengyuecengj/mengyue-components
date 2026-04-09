# Drawer

## 简易介绍
Drawer 抽屉组件，用于从页面边缘滑出的面板，常用于展示更多内容或操作。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYDrawer></MYDrawer>` 或者 `<MYDrawer />` 来实现抽屉功能。

## 基本用法

### 基础抽屉
基础的抽屉组件，默认从右侧滑出。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div>
    <button @click='showDrawer = true'>打开抽屉</button>
    <MYDrawer v-model='showDrawer' title='基础抽屉'>
      <p>这里是抽屉的内容</p>
      <p>可以放置任何内容</p>
    </MYDrawer>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <button @click="showDrawer1 = true" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        打开抽屉
      </button>
      <MYDrawer v-model="showDrawer1" title="基础抽屉">
        <p>这里是抽屉的内容</p>
        <p>可以放置任何内容</p>
      </MYDrawer>
    </div>
  </template>
</ShowCode>

### 不同方向
使用 `direction` 属性设置抽屉的弹出方向。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 10px; flex-wrap: wrap;'>
    <button @click='openDrawer('rtl')'>从右侧打开</button>
    <button @click='openDrawer('ltr')'>从左侧打开</button>
    <button @click='openDrawer('ttb')'>从顶部打开</button>
    <button @click='openDrawer('btt')'>从底部打开</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :direction='currentDirection'
  >
    <p>当前方向: {{ currentDirection }}</p>
    <p>抽屉内容...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentDirection = ref('rtl')
const currentTitle = ref('')
const openDrawer = (direction) => {
  currentDirection.value = direction
  currentTitle.value = \`\${getDirectionText(direction)}抽屉\`
  showDrawer.value = true
}
const getDirectionText = (dir) => {
  const map = { rtl: '右侧', ltr: '左侧', ttb: '顶部', btt: '底部' }
  return map[dir] || dir
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
      <button @click="openDirectionDrawer('rtl')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        从右侧打开
      </button>
      <button @click="openDirectionDrawer('ltr')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        从左侧打开
      </button>
      <button @click="openDirectionDrawer('ttb')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        从顶部打开
      </button>
      <button @click="openDirectionDrawer('btt')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        从底部打开
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer2" 
      :title="currentTitle"
      :direction="currentDirection"
    >
      <p>当前方向: {{ getDirectionText(currentDirection) }}</p>
      <p>抽屉内容...</p>
    </MYDrawer>
  </template>
</ShowCode>


### 自定义尺寸
使用 `size` 属性设置抽屉的尺寸。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openSizeDrawer('30%'')'>30% 宽度</button>
    <button @click='openSizeDrawer('500px')'>500px 宽度</button>
    <button @click='openSizeDrawer('80%'')'>80% 宽度</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    :title='currentTitle'
    :size='currentSize'
  >
    <p>当前尺寸: {{ currentSize }}</p>
    <p>抽屉内容...</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentSize = ref('30%')
const currentTitle = ref('')
const openSizeDrawer = (size) => {
  currentSize.value = size
  currentTitle.value = \`\${size} 尺寸抽屉\`
  showDrawer.value = true
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px;">
      <button @click="openSizeDrawer('30%')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        30% 宽度
      </button>
      <button @click="openSizeDrawer('500px')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        500px 宽度
      </button>
      <button @click="openSizeDrawer('80%')" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        80% 宽度
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer3" 
      :title="currentSizeTitle"
      :size="currentSize"
    >
      <p>当前尺寸: {{ currentSize }}</p>
      <p>抽屉内容...</p>
    </MYDrawer>
  </template>
</ShowCode>


### 自定义背景色
使用 `backgroundColor` 属性自定义抽屉的背景颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openColorDrawer('#f0f9ff')'>浅蓝色</button>
    <button @click='openColorDrawer('#fef2f2')'>浅红色</button>
    <button @click='openColorDrawer('#f0fdf4')'>浅绿色</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='自定义颜色'
    :background-color='currentColor'
  >
    <p>自定义背景颜色的抽屉</p>
    <p>当前颜色: {{ currentColor }}</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const currentColor = ref('#f0f9ff')
const openColorDrawer = (color) => {
  currentColor.value = color
  showDrawer.value = true
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px;">
      <button @click="openColorDrawer('#f0f9ff')" style="padding: 8px 16px; background: #f0f9ff; color: #0369a1; border: 1px solid #bae6fd; border-radius: 4px; cursor: pointer;">
        浅蓝色
      </button>
      <button @click="openColorDrawer('#fef2f2')" style="padding: 8px 16px; background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; border-radius: 4px; cursor: pointer;">
        浅红色
      </button>
      <button @click="openColorDrawer('#f0fdf4')" style="padding: 8px 16px; background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; border-radius: 4px; cursor: pointer;">
        浅绿色
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer4" 
      title="自定义颜色"
      :background-color="currentColor"
    >
      <p>自定义背景颜色的抽屉</p>
      <p>当前颜色: {{ currentColor }}</p>
    </MYDrawer>
  </template>
</ShowCode>


### 隐藏头部和关闭按钮
使用 `with-header` 和 `show-close` 属性控制头部和关闭按钮的显示。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 10px;'>
    <button @click='openCustomDrawer(true, true)'>显示头部和关闭按钮</button>
    <button @click='openCustomDrawer(false, false)'>隐藏头部和关闭按钮</button>
  </div>
  <MYDrawer 
    v-model='showDrawer' 
    title='自定义头部'
    :with-header='withHeader'
    :show-close='showClose'
  >
    <p>头部显示: {{ withHeader ? '是' : '否' }}</p>
    <p>关闭按钮: {{ showClose ? '是' : '否' }}</p>
    <p>点击遮罩层可以关闭</p>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const withHeader = ref(true)
const showClose = ref(true)
const openCustomDrawer = (header, close) => {
  withHeader.value = header
  showClose.value = close
  showDrawer.value = true
}
</script>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 10px;">
      <button @click="openCustomDrawer(true, true)" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        显示头部和关闭按钮
      </button>
      <button @click="openCustomDrawer(false, false)" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        隐藏头部和关闭按钮
      </button>
    </div>
    <MYDrawer 
      v-model="showDrawer5" 
      title="自定义头部"
      :with-header="withHeader"
      :show-close="showClose"
    >
      <p>头部显示: {{ withHeader ? '是' : '否' }}</p>
      <p>关闭按钮: {{ showClose ? '是' : '否' }}</p>
      <p>点击遮罩层可以关闭</p>
    </MYDrawer>
  </template>
</ShowCode>


### 带底部操作栏
使用 footer 插槽添加底部操作栏。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <button @click='showDrawer = true'>打开带底部抽屉</button>
  <MYDrawer v-model='showDrawer' title='带底部操作栏'>
    <p>这里是抽屉的主要内容</p>
    <p>可以放置表单、列表等内容</p>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button @click='showDrawer = false'>取消</button>
        <button @click='handleConfirm' style='background: #409EFF; color: white;'>确认</button>
      </div>
    </template>
  </MYDrawer>
</template>
<script setup>
import { ref } from 'vue'
const showDrawer = ref(false)
const handleConfirm = () => {
  alert('确认操作')
  showDrawer.value = false
}
</script>
  `.trim()"
>
  <template #demo>
    <div>
      <button @click="showDrawer6 = true" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">
        打开带底部抽屉
      </button>
      <MYDrawer v-model="showDrawer6" title="带底部操作栏">
        <p>这里是抽屉的主要内容</p>
        <p>可以放置表单、列表等内容</p>
        <template #footer>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button @click="showDrawer6 = false" style="padding: 8px 16px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;">取消</button>
            <button @click="handleFooterConfirm" style="padding: 8px 16px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">确认</button>
          </div>
        </template>
      </MYDrawer>
    </div>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| modelValue  | 是否显示抽屉      | boolean  | — | `false`  |
| title  | 抽屉标题      | string  | — | `''`  |
| direction  | 抽屉打开方向      | string  | `ltr`/`rtl`/`ttb`/`btt` | `rtl`  |
| size  | 抽屉尺寸      | string \| number  | — | `30%`  |
| with-header  | 是否显示头部      | boolean  | — | `true`  |
| show-close  | 是否显示关闭按钮      | boolean  | — | `true`  |
| background-color  | 抽屉背景色      | string  | — | `''`  |
| close-on-click-modal  | 是否可以通过点击遮罩层关闭抽屉      | boolean  | — | `true`  |
| close-on-press-escape  | 是否可以通过按下 ESC 关闭抽屉      | boolean  | — | `true`  |
| lock-scroll  | 是否在抽屉显示时将 body 滚动锁定      | boolean  | — | `true`  |
| before-close  | 关闭前的回调函数      | function  | — | `undefined`  |

### 事件
| 事件名          | 说明         | 参数     |
|--------------|-------------|---------|
| update:modelValue  | 抽屉显示状态变化时触发      | value: boolean  |
| open  | 抽屉打开时触发      | —  |
| close  | 抽屉关闭时触发      | —  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| default  | 抽屉主体内容      |
| title  | 抽屉标题内容      |
| footer  | 抽屉底部内容      |

### 类型定义
```typescript
interface DrawerProps {
  modelValue?: boolean;
  title?: string;
  direction?: 'ltr' | 'rtl' | 'ttb' | 'btt';
  size?: string | number;
  withHeader?: boolean;
  showClose?: boolean;
  backgroundColor?: string;
  closeOnClickModal?: boolean;
  closeOnPressEscape?: boolean;
  lockScroll?: boolean;
  beforeClose?: (done: () => void) => void;
}
```

<script setup>
import { ref } from 'vue'
import MYDrawer from '../../packages/components/drawer/src/drawer.vue'

// 基础抽屉示例
const showDrawer1 = ref(false)

// 方向抽屉示例
const showDrawer2 = ref(false)
const currentDirection = ref('rtl')
const currentTitle = ref('')

const openDirectionDrawer = (direction) => {
  currentDirection.value = direction
  currentTitle.value = `${getDirectionText(direction)}抽屉`
  showDrawer2.value = true
}

const getDirectionText = (dir) => {
  const map = { 
    rtl: '右侧', 
    ltr: '左侧', 
    ttb: '顶部', 
    btt: '底部' 
  }
  return map[dir] || dir
}

// 尺寸抽屉示例
const showDrawer3 = ref(false)
const currentSize = ref('30%')
const currentSizeTitle = ref('')

const openSizeDrawer = (size) => {
  currentSize.value = size
  currentSizeTitle.value = `${size} 尺寸抽屉`
  showDrawer3.value = true
}

// 颜色抽屉示例
const showDrawer4 = ref(false)
const currentColor = ref('#f0f9ff')

const openColorDrawer = (color) => {
  currentColor.value = color
  showDrawer4.value = true
}

// 自定义头部示例
const showDrawer5 = ref(false)
const withHeader = ref(true)
const showClose = ref(true)

const openCustomDrawer = (header, close) => {
  withHeader.value = header
  showClose.value = close
  showDrawer5.value = true
}

// 底部操作栏示例
const showDrawer6 = ref(false)

const handleFooterConfirm = () => {
  alert('确认操作')
  showDrawer6.value = false
}
</script>
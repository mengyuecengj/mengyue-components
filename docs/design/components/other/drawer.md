# Drawer 组件设计文档

## 概述

Drawer 组件是本组件库中用于实现抽屉式弹出层功能的核心组件。它延续了我们组件库一贯的设计理念，采用"容器化"和"动画驱动"的原则，通过 drawer.vue 实现了一套完整且易用的抽屉式弹出层解决方案。

Drawer 组件专注于处理页面侧边的临时内容展示，为用户提供了一套流畅、直观的抽屉式交互体验，支持多种方向、尺寸配置、自定义样式和丰富的交互控制，有效提升用户在查看额外信息或执行辅助操作时的体验。

## 设计理念

### 容器化设计

Drawer 组件采用容器化的设计思想：

1. **独立容器** - 通过 Teleport 将组件渲染到 body 下，确保层级和定位正确
2. **完整结构** - 内置标题、内容和页脚区域，提供完整的容器结构
3. **状态隔离** - 组件内部管理显示状态，与外部应用逻辑解耦

这种设计确保了组件的独立性和可复用性。

### 动画驱动架构

Drawer 组件采用动画驱动的架构设计：

- **过渡动画** - 通过 Transition 组件实现遮罩层和抽屉主体的动画效果
- **方向感知** - 动画效果根据 direction 属性自动调整
- **状态同步** - 动画状态与组件显示状态紧密关联

这种设计使交互体验更加流畅自然，同时保持了代码的清晰性。

## 核心功能设计

### 显示控制机制

Drawer 组件的核心在于显示控制机制：

```typescript
const visible = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    visible.value = val
    if (val) {
      openDrawer()
    } else {
      closeDrawer()
    }
  }
)
```

#### 显示控制特点：
- **双向绑定** - 通过 modelValue 实现 v-model 双向绑定
- **状态同步** - 内部状态与外部状态保持一致
- **生命周期管理** - 开启/关闭时触发相应的生命周期事件
- **滚动控制** - 通过 lockScroll 属性控制页面滚动

### 方向与尺寸管理

Drawer 组件的方向与尺寸管理设计如下：

```typescript
const drawerStyle = computed(() => {
  if (['rtl', 'ltr'].includes(props.direction)) {
    return {
      width:
        typeof props.size === 'number'
          ? `${props.size}px`
          : props.size
    }
  } else {
    return {
      height:
        typeof props.size === 'number'
          ? `${props.size}px`
          : props.size
    }
  }
})
```

#### 方向与尺寸特点：
- **多方向支持** - 支持 ltr、rtl、ttb、btt 四种方向
- **尺寸灵活** - 支持百分比和像素值两种尺寸单位
- **自适应布局** - 根据方向自动调整宽度或高度
- **响应式设计** - 适应不同屏幕尺寸

## 组件结构设计

### 整体结构

Drawer 组件的整体结构如下：

```html
<Teleport to="body">
  <div v-if="visible" class="my-drawer__wrapper">
    <!-- 遮罩层 -->
    <Transition name="my-drawer-fade">
      <div v-show="visible" class="my-drawer__mask" @click="handleMaskClick" />
    </Transition>

    <!-- 抽屉主体 -->
    <Transition name="my-drawer-slide" :style="dialogStyle">
      <div v-if="visible" class="my-drawer" :class="`my-drawer--${props.direction}`" :style="drawerStyle">
        <!-- Header -->
        <header class="my-drawer__header" v-if="props.withHeader">
          <slot name="title">{{ props.title }}</slot>
          <button class="my-drawer__close" @click="handleClose" v-if="props.showClose">
            ×
          </button>
        </header>

        <!-- Body -->
        <section class="my-drawer__body">
          <slot></slot>
        </section>

        <!-- Footer -->
        <footer class="my-drawer__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </Transition>
  </div>
</Teleport>
```

### 组件层次

Drawer 组件包含多个关键部分：

1. **容器层** - `.my-drawer__wrapper` - 包裹整个抽屉组件，使用固定定位
2. **遮罩层** - `.my-drawer__mask` - 背景遮罩，点击可关闭抽屉
3. **抽屉主体** - `.my-drawer` - 抽屉的主要内容区域
4. **头部区域** - `.my-drawer__header` - 标题和关闭按钮区域
5. **内容区域** - `.my-drawer__body` - 主要内容展示区域
6. **页脚区域** - `.my-drawer__footer` - 操作按钮等页脚内容

#### 方向类设计：

- `.my-drawer--rtl` - 从右向左滑出
- `.my-drawer--ltr` - 从左向右滑出
- `.my-drawer--ttb` - 从上向下滑出
- `.my-drawer--btt` - 从下向上滑出

## 交互设计

### 关闭机制

Drawer 组件提供多种关闭方式：

```typescript
const handleClose = () => {
  if (props.beforeClose) {
    props.beforeClose(closeDrawer)
  } else {
    closeDrawer()
  }
}

const handleMaskClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  }
}

onMounted(() => {
  if (props.closeOnPressEscape) {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && visible.value) {
        handleClose()
      }
    })
  }
})
```

#### 关闭方式：
- **关闭按钮** - 点击标题区域的关闭按钮
- **遮罩层点击** - 点击遮罩层关闭（可配置）
- **ESC 键** - 按下 ESC 键关闭（可配置）
- **自定义关闭** - 通过 beforeClose 回调实现自定义关闭逻辑

### 动画实现

Drawer 组件的动画实现采用精心设计的过渡策略：

```scss
/* 遮罩层淡入淡出 */
.my-drawer-fade-enter-active,
.my-drawer-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.my-drawer-fade-enter-from,
.my-drawer-fade-leave-to {
  opacity: 0;
}

/* 抽屉滑动动画 */
.my-drawer-slide-enter-active,
.my-drawer-slide-leave-active {
  transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
}

.my-drawer-slide-enter-from,
.my-drawer-slide-leave-to {
  opacity: 0.9;
}
```

#### 动画特点：
- **遮罩层** - 使用淡入淡出效果
- **抽屉主体** - 使用滑动+轻微缩放效果
- **方向适配** - 根据 direction 属性自动调整动画方向
- **视觉反馈** - 添加轻微的缩放效果增强视觉反馈

## 扩展性设计

Drawer 组件具备出色的扩展性：

1. **方向扩展** - 通过 direction 属性支持四种方向
2. **尺寸扩展** - 通过 size 属性支持灵活的尺寸配置
3. **内容扩展** - 通过插槽机制支持自定义标题、内容和页脚
4. **样式扩展** - 通过 backgroundColor 属性支持自定义背景色
5. **交互扩展** - 通过 beforeClose 和事件机制支持自定义交互逻辑

## 样式细节

Drawer 组件在样式处理上有以下特点：

1. **层次结构** - 通过 z-index 精确控制元素堆叠顺序
   ```scss
   .my-drawer__wrapper {
     position: fixed;
     inset: 0;
     z-index: 3000;
   }
   
   .my-drawer__mask {
     z-index: 2000;
   }
   
   .my-drawer {
     z-index: 2100;
   }
   ```
2. **动画优化** - 使用高性能的 transform 和 opacity 属性
3. **视觉层次** - 通过边框、阴影和间距创建清晰的视觉层次
4. **响应式设计** - 适应不同屏幕尺寸和方向
5. **过渡效果** - 使用缓动函数(ease-in-out)使动画更加自然

## 性能优化

通过以下方式优化性能：

1. **条件渲染** - 仅在需要时渲染抽屉内容
   ```html
   <div v-if="visible" class="my-drawer__wrapper">
   ```
2. **高效动画** - 使用 transform 和 opacity 实现 GPU 加速动画
3. **事件管理** - 按需监听和移除事件
4. **滚动控制** - 仅在抽屉打开时禁用页面滚动
5. **内存管理** - 正确处理抽屉关闭后的资源释放

## 设计价值

Drawer 组件延续了我们组件库的设计哲学：

1. **关注点分离** - 将结构、样式和逻辑清晰分离
2. **容器化设计** - 提供完整的抽屉容器，降低使用复杂度
3. **动画驱动** - 通过精心设计的动画提升用户体验
4. **多方向支持** - 满足不同场景下的抽屉展示需求
5. **可定制性** - 通过丰富的属性和插槽提供高度定制能力

Drawer 组件提供了一套完整的抽屉式弹出层解决方案，通过合理的架构设计和精心的动画效果，为用户提供了一套流畅、直观且灵活的抽屉组件。组件设计注重内部逻辑的清晰性和可维护性，同时保持了足够的扩展性，能够满足各种业务场景的需求。
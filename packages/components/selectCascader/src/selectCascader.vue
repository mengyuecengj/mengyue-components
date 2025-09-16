<template>
    <div class="select-e" :class="{ 'is-focused': isFocused, 'is-disabled': disabled }" tabindex="0"
        :style="selectStyle" @focus="handleFocus" @blur="handleBlur">
        <div class="select-trigger" :class="{ 'is-disabled': disabled }" @click="toggleDropdown">
            <span class="selected-value">{{ selectedLabel || placeholder }}</span>
            <span class="arrow-icon" :class="{ 'is-open': dropdownVisible }">
                <svg viewBox="0 0 24 24" width="16" height="16">
                    <path d="M7 10l5 5 5-5z" />
                </svg>
            </span>
        </div>
        <div ref="dropdownContainer" class="dropdown-container" @mouseleave="handleContainerMouseleave">
            <Transition name="slide-fade">
                <div v-show="dropdownVisible" ref="selectDropdown" class="select-dropdown" :style="dropdownPosition">
                    <MYScrollbar height="200px" thumbColor="#4C4D4F" thumbHoverColor="#2a2a2e"
                        trackColor="#2a2a2e">
                        <div v-for="item in options" :key="item.value" class="select-option"
                            :class="{ 'is-disabled': item.disabled || disabled }" @mouseenter="() => handleMouseenter(item)">
                            <div class="label" @click="() => handleClick(item)">
                                {{ item.label }}
                                <span v-if="item.children" class="arrow-icon">▶</span>
                            </div>
                        </div>
                    </MYScrollbar>
                </div>
            </Transition>
            <!-- 二级菜单 -->
            <Transition name="slide-fade">
                <div v-if="activeSubMenu" class="sub-menu" :style="subMenuPosition">
                    <div v-for="child in activeSubMenuItems" :key="child.value" class="select-option"
                        :class="{ 'is-disabled': child.disabled || disabled }" @click.stop="handleClick(child)" @mouseenter="() => handleSecondLevelEnter(child)">
                        <div class="label">
                            {{ child.label }}
                            <span v-if="child.children" class="arrow-icon">▶</span>
                        </div>
                    </div>
                </div>
            </Transition>
            <!-- 三级菜单 -->
            <Transition name="slide-fade">
                <div v-if="activeThirdMenu" class="third-menu" :style="thirdMenuPosition">
                    <div v-for="third in activeThirdMenuItems" :key="third.value" class="select-option"
                        :class="{ 'is-disabled': (third as any).disabled || disabled }" @click.stop="handleClick(third)">
                        <div class="label">{{ third.label }}</div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useSelectCascader } from './selectCascaderComputed'
import { selectCascaderProps } from './selectCascader'
import '../style/selectCascader.scss'

defineOptions({ name: 'MYSelect-cascader' })

const props = defineProps(selectCascaderProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>()

const {
  dropdownVisible,
  activeSubMenu,
  activeThirdMenu,
  selectedLabel,
  isFocused,
  subMenuPosition,
  thirdMenuPosition,
  selectDropdown,
  dropdownPosition,
  activeSubMenuItems,
  activeThirdMenuItems,
  toggleDropdown,
  handleMouseenter,
  handleSecondLevelEnter,
  handleClick,
  handleFocus,
  handleBlur,
  handleContainerMouseleave,
  selectStyle
} = useSelectCascader(props, emit)
</script>

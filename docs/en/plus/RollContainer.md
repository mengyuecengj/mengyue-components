# Container

## Introduction

Container is a container component used to wrap other content and provide layout and style control.
There are five tags for its usage:
`<MYContainer></MYContainer>` and `<MYContainer />`: Basic container<br />
`<MYHeader></MYHeader>` and `<MYHeader />`: Page header<br />
`<MYAside></MYAside>` and `<MYAside />`: Sidebar<br />
`<MYMain></MYMain>` and `<MYMain />`: Main content<br />
`<MYFooter></MYFooter>` and `<MYFooter />`: Page footer<br />

## Container Usage

### Basic Container

Use `<MYContainer></MYContainer>` to implement a container.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>Basic Container</h3>
    <MYContainer class='basic-container'>
      <p>This is a basic container</p>
    </MYContainer>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="border: 1px solid #2c2; padding: 15px; border-radius: 4px">
      <h3>Basic Container</h3>
      <MYContainer class="basic-container">
        <p>This is a basic container</p>
      </MYContainer>
    </div>
  </template>
</ShowCode>

### Custom Styled Container

Basic container with custom styles:

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='border: 1px solid #2c2; padding: 15px; border-radius: 4px'>
    <h3>Container with Custom Styles</h3>
    <MYContainer 
      height='300px' 
      width='80%' 
      background='#470303ff' 
      class='styled-container'
    >
      <p>Container with custom height, width, and background color</p>
    </MYContainer>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="border: 1px solid #2c2; padding: 15px; border-radius: 4px">
      <h3>Container with Custom Styles</h3>
      <MYContainer height="300px" width="80%" background="#470303ff" class="styled-container">
        <p>Container with custom height, width, and background color</p>
      </MYContainer>
    </div>
  </template>
</ShowCode>

### Complete Layout

Complete layout example (width, height, colors can be freely adjusted):

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div class='test-case'>
    <h3>Complete Layout</h3>
    <MYContainer height='200px' class='full-layout'>
      <MYHeader class='header' height='30px'>Header</MYHeader>
      <MYAside class='left-aside'>Left Sidebar</MYAside>
      <MYMain class='main-content'>
        <p>Main content area</p>
        <p>Various content can be placed here</p>
      </MYMain>
      <MYAside position='right' class='right-aside'>Right Sidebar</MYAside>
      <MYFooter class='footer' height='30px'>Footer Area</MYFooter>
    </MYContainer>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div class="test-case">
      <h3>Complete Layout</h3>
      <MYContainer height="200px" class="full-layout">
        <MYHeader class="header" height="30px">Header</MYHeader>
        <MYAside class="left-aside">Left Sidebar</MYAside>
        <MYMain class="main-content">
          <p>Main content area</p>
          <p>Various content can be placed here</p>
        </MYMain>
        <MYAside position="right" class="right-aside">Right Sidebar</MYAside>
        <MYFooter class="footer" height="30px">Footer Area</MYFooter>
      </MYContainer>
    </div>
  </template>
</ShowCode>

## API Reference

### MYContainer Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| height | Height | string/number | px/em/rem/dynamic | — |
| width | Width | string/number | px/em/rem/dynamic/% | — |
| background | Background color | string | Supports hex colors or color names | — |
| tag | Container tag | string | All HTML tags | `div` |

### MYHeader Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| height | Height | string/number | px/em/rem/dynamic | — |
| width | Width | string/number | px/em/rem/dynamic/% | — |
| background | Background color | string | Supports hex colors or color names | — |
| fixed | Fix header navigation | boolean | — | `false` |
| tag | Container tag | string | All HTML tags | `header` |

### MYAside Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| height | Height | string/number | px/em/rem/dynamic | — |
| width | Width | string/number | px/em/rem/dynamic/% | — |
| background | Background color | string | Supports hex colors or color names | — |
| position | Sidebar position | string | `left`/`right` | `left` |
| tag | Container tag | string | All HTML tags | `aside` |

### MYMain Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| height | Height | string/number | px/em/rem/dynamic | — |
| width | Width | string/number | px/em/rem/dynamic/% | — |
| background | Background color | string | Supports hex colors or color names | — |
| tag | Container tag | string | All HTML tags | `main` |

### MYFooter Props

| Parameter | Description | Type | Options | Default |
|-----------|-------------|------|---------|---------|
| height | Height | string/number | px/em/rem/dynamic | — |
| width | Width | string/number | px/em/rem/dynamic/% | — |
| background | Background color | string | Supports hex colors or color names | — |
| tag | Container tag | string | All HTML tags | `footer` |

### Type Definitions

```typescript
interface ContainerProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
}

interface HeaderProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  fixed?: boolean;
  tag?: string;
}

interface AsideProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
  position?: "left" | "right";
}

interface MainProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
}

interface FooterProps {
  height?: string | number;
  width?: string | number;
  background?: string;
  tag?: string;
}
```

<script setup>
import MYAside from '../../../packages/components/container/src/aside.vue'
import MYContainer from '../../../packages/components/container/src/container.vue'
import MYFooter from '../../../packages/components/container/src/footer.vue'
import MYHeader from '../../../packages/components/container/src/header.vue'
import MYMain from '../../../packages/components/container/src/main.vue'
</script>

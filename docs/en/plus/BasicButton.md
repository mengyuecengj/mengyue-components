# Button
## Brief Introduction
The `button` component is a fundamental interactive element for common operations, such as form submission. You can use `<MYButton></MYButton>` or `<MYButton />` to implement a button.

## About Color Usage
### type

Using `type` in `MYButton` defines the button's color. These colors are the basic definitions provided by `mengyue-components`. For example, use `type` to achieve the following color definitions. If `type` is not specified, the default is a transparent color:

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton>Default Button</MYButton>
    <MYButton type='primary'>Primary Button</MYButton>
    <MYButton type='success'>Success Button</MYButton>
    <MYButton type='warning'>Warning Button</MYButton>
    <MYButton type='danger'>Danger Button</MYButton>
    <MYButton type='info'>Info Button</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <span>Note: The demo effect has some element magnification. For specific dimensions, please read the <MYa href="#aboutSize" style="">About Size</MYa> description below.</span>
    <ClientOnly>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; justify-content: center; margin-top: 20px;">
            <MYButton>Default Button</MYButton>
            <MYButton type="primary">Primary Button</MYButton>
            <MYButton type="success">Success Button</MYButton>
            <MYButton type="warning">Warning Button</MYButton>
            <MYButton type="danger">Danger Button</MYButton>
            <MYButton type="info">Info Button</MYButton>
        </div>
    </ClientOnly>
  </template>
</ShowCode>

### colorBg
If the above colors do not meet your needs, you can customize the color. Use `colorBg` to customize the button background color. For example, using a red background here:

<ShowCode
  title="Code Demo"
  description="If the colorBg API is used, the type attribute will be overridden by the colorBg attribute."
  :code="`
<template>
    <MYButton colorBg='#ff0000'>Hex Custom Red Background Button</MYButton>
    <MYButton colorBg='red'>Named Color Custom Red Background Button</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorBg="#ff0000">Hex Custom Red Background Button</MYButton>
            <MYButton colorBg="red">Named Color Custom Red Background Button</MYButton>
        </ClientOnly>
    </div>
  </template>
</ShowCode>

### colorText
The `MYButton` also supports custom text color. Use `colorText` to customize the button's text color.

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton colorText='#ff0000'>Hex Custom Red Text Button</MYButton>
    <MYButton colorText='red'>Named Color Custom Red Text Button</MYButton>
</template>
    `"
>
    <template #demo>
        <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorText="#ff0000">Hex Custom Red Text Button</MYButton>
            <MYButton colorText="red">Named Color Custom Red Text Button</MYButton>
        </ClientOnly>
        </div>
    </template>
</ShowCode>

### colorBorder
Customize the button border color. Use `colorBorder` to customize the button's border color.

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton colorBorder='#FF7F50'>Hex Custom Orange Border Button</MYButton>
    <MYButton colorBorder='orange'>Named Color Custom Orange Border Button</MYButton>
</template>
    `"
>
    <template #demo>
        <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorBorder='#FF7F50'>Hex Custom Orange Border Button</MYButton>
            <MYButton colorBorder='orange'>Named Color Custom Orange Border Button</MYButton>
            </ClientOnly>
        </div>
    </template>
</ShowCode>

### plain
Use the `plain` attribute to render the button with a transparent style, which can be combined with the custom colors above to achieve unique appearances.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton plain>Default Button</MYButton>
    <MYButton plain type='primary'>Primary Button</MYButton>
    <MYButton plain type='success'>Success Button</MYButton>
    <MYButton plain type='warning'>Warning Button</MYButton>
    <MYButton plain type='danger'>Danger Button</MYButton>
    <MYButton plain type='info'>Info Button</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <span>Note: The demo effect has some element magnification. For specific dimensions, please read the <MYa href="#aboutSize" style="">About Size</MYa> description below.</span>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; justify-content: center; margin-top: 20px;">
    <ClientOnly>
        <MYButton plain>Default Button</MYButton>
        <MYButton type="primary" plain>Primary Button</MYButton>
        <MYButton type="success" plain>Success Button</MYButton>
        <MYButton type="warning" plain>Warning Button</MYButton>
        <MYButton type="danger" plain>Danger Button</MYButton>
        <MYButton type="info" plain>Info Button</MYButton>
    </ClientOnly>
    </div>
  </template>
</ShowCode>

## About Border Radius
### round
Use `round` to make the button have rounded corners.

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton round>Rounded Button</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton round>Rounded Button</MYButton>
    </ClientOnly>
    </template>
</ShowCode>

### circle
Use `circle` to make the button circular.

<ShowCode
    title="Code Demo"
    description="The circle and round attributes cannot be used simultaneously."
    :code="`
<template>
    <MYButton circle>A</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton circle>A</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## About Size {#aboutSize}
### size
Use the `size` attribute to adjust the button size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton size='supersmall'>supersmall Button</MYButton>
    <MYButton size='small'>small Button</MYButton>
    <MYButton size='medium'>medium Button</MYButton>
    <MYButton size='large'>large Button</MYButton>
    <MYButton size='superbig'>superbig Button</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <span>Note: The demo effect has some element magnification. For specific dimensions, please read the <MYa href="#aboutSize" style="">About Size</MYa> description below.</span>
    <div>
    <ClientOnly>
        <MYButton style="display: block; margin-top: 20px" size="supersmall">supersmall Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="small">small Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="medium">medium Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="large">large Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="superbig">superbig Button</MYButton>
        </ClientOnly>
    </div>
  </template>
</ShowCode>

## About Disabled
### disabled
Use `disabled` to disable the button.

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton disabled>Disabled Button</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton disabled>Disabled Button</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## Insert Icon
Use the `icon` property or the default slot to insert an icon into the button.

<ShowCode
    title='Code Demo'
    :code='`
<template>
    <MYButton>
        <MYPlus /> Button with Icon
    </MYButton>
</template>
    `'
>
    <template #demo>
        <ClientOnly>
<MYButton type="success">
    <MYPlus /> Button with Icon
</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

Finally, combine multiple APIs to create a customized button:

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton
        size='superbig'
        round
        plain
        colorBorder='#FF7F50'
        colorBg='#8d4dd1'
        colorText='red'
    >Combined Button</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton
            size='superbig'
            round
            plain
            colorBorder='#FF7F50'
            colorBg='#8d4dd1'
            colorText='red'
        >Combined Button</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## API Reference
### Props
| Parameter     | Description                 | Type      | Optional Values                                                    | Default   |
|---------------|-----------------------------|-----------|--------------------------------------------------------------------|-----------|
| type          | Button type                 | string    | `primary` / `success` / `warning` / `danger` / `info`              | —         |
| size          | Button size                 | string    | `supersmall` / `small` / `medium` / `large` / `superbig`           | `medium`  |
| plain         | Whether it's a plain button | boolean   | —                                                                  | `false`   |
| round         | Whether it's a rounded button | boolean | —                                                                  | `false`   |
| circle        | Whether it's a circular button | boolean | —                                                                  | `false`   |
| disabled      | Whether disabled            | boolean   | —                                                                  | `false`   |
| colorBg       | Background color            | string    | Supports hex colors or named colors                                | —         |
| colorText     | Text color                  | string    | Supports hex colors or named colors                                | —         |
| colorBorder   | Border color                | string    | Supports hex colors or named colors                                | —         |
| tag           | Render tag                  | string    | Supports all HTML tags                                             | `button`  |

### Type Definition
```typescript
interface ButtonProps {
  type?: string;
  size?: string;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  colorBg?: string;
  colorText?: string;
  colorBorder?: string;
  iconOnly?: boolean;
  tag?: string;
}
```

<script setup>
import MYButton from '../../../packages/components/button/src/button.vue'
import MYa from '../../../packages/components/a/src/a.vue'
import MYPlus from '../../../packages/icons/src/components/plus.vue'
</script>

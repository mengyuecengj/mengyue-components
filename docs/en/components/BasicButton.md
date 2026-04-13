# Button

## Brief Introduction
The Button component is a classic interactive element, commonly used as an action button for form submission and other purposes.
You can use `<MYButton></MYButton>` or `<MYButton />` to implement a button.

## Using Colors

### type
Using `type` in `MYButton` allows you to define button colors. These colors are the basic color definitions provided by `mengyue-components`. For example, use `type` to achieve the color definitions below. If `type` is not specified, the default is a transparent color:

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
    <span>Note: The demo elements are slightly enlarged. Please refer to the <MYa href="#aboutSize" style="">Size</MYa> section below for specific dimensions.</span>
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

### colorBackground
Of course, if the above colors don't meet your needs, you can customize the button background color using `colorBackground`. For example, using a red background:

<ShowCode
  title="Code Demo"
  description="If you use the colorBackground API, the type property will be overridden by the colorBackground property."
  :code="`
<template>
    <MYButton colorBackground='#ff0000'>Custom red background button (hex)</MYButton>
    <MYButton colorBackground='red'>Custom red background button (named)</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorBackground="#ff0000">Custom red background button (hex)</MYButton>
            <MYButton colorBackground="red">Custom red background button (named)</MYButton>
        </ClientOnly>
    </div>
  </template>
</ShowCode>

### colorText
The `MYButton` component also supports custom text color using `colorText`.

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton colorText='#ff0000'>Custom red text button (hex)</MYButton>
    <MYButton colorText='red'>Custom red text button (named)</MYButton>
</template>
    `"
>
    <template #demo>
        <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorText="#ff0000">Custom red text button (hex)</MYButton>
            <MYButton colorText="red">Custom red text button (named)</MYButton>
        </ClientOnly>
        </div>
    </template>
</ShowCode>

### colorBorder
Customize the button border color using `colorBorder`.

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton colorBorder='#FF7F50'>Custom orange border button (hex)</MYButton>
    <MYButton colorBorder='orange'>Custom orange border button (named)</MYButton>
</template>
    `"
>
    <template #demo>
        <div style="display: flex; gap: 50px;">
        <ClientOnly>
            <MYButton colorBorder='#FF7F50'>Custom orange border button (hex)</MYButton>
            <MYButton colorBorder='#FF7F50'>Custom orange border button (named)</MYButton>
            </ClientOnly>
        </div>
    </template>
</ShowCode>

### plain
Use the `plain` property to render the button with a transparent style, allowing you to achieve different looks when combined with custom colors.

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
    <span>Note: The demo elements are slightly enlarged. Please refer to the <MYa href="#aboutSize" style="">Size</MYa> section below for specific dimensions.</span>
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

## Rounded Corners

### rounded
Use `rounded` to make the button have rounded corners.

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton rounded>Rounded Button</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton rounded>Rounded Button</MYButton>
    </ClientOnly>
    </template>
</ShowCode>

### circular
Use `circular` to make the button circular.

<ShowCode
    title="Code Demo"
    description="The circular and rounded properties cannot be used simultaneously."
    :code="`
<template>
    <MYButton circular>A</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton circular>A</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## Sizes {#aboutSize}

### size
Use the `size` property to adjust the button size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
    <MYButton size='supersmall'>Supersmall Button</MYButton>
    <MYButton size='small'>Small Button</MYButton>
    <MYButton size='medium'>Medium Button</MYButton>
    <MYButton size='large'>Large Button</MYButton>
    <MYButton size='superbig'>Superbig Button</MYButton>
</template>
`.trim()"
>
  <template #demo>
    <span>Note: The demo elements are slightly enlarged. Please refer to the <MYa href="#aboutSize" style="">Size</MYa> section above for specific dimensions.</span>
    <div>
    <ClientOnly>
        <MYButton style="display: block; margin-top: 20px" size="supersmall">Supersmall Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="small">Small Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="medium">Medium Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="large">Large Button</MYButton>
        <MYButton style="display: block; margin-top: 20px" size="superbig">Superbig Button</MYButton>
        </ClientOnly>
    </div>
  </template>
</ShowCode>

## Disabled State

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

## Adding Icons
Use the `icon` property to add an icon to the button.

<ShowCode
    title='Code Demo'
    :code='`
<template>
    <MYButton icon="MYPlus">Button with Icon</MYButton>
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

Finally, here's an example combining multiple APIs to create a custom button:

<ShowCode
    title="Code Demo"
    :code="`
<template>
    <MYButton
        size='superbig'
        rounded
        plain
        colorBorder='#FF7F50'
        colorBackground='#8d4dd1'
        colorText='red'
    >Combined Button</MYButton>
</template>
    `"
>
    <template #demo>
    <ClientOnly>
        <MYButton
            size='superbig'
            rounded
            plain
            colorBorder='#FF7F50'
            colorBackground='#8d4dd1'
            colorText='red'
        >Combined Button</MYButton>
        </ClientOnly>
    </template>
</ShowCode>

## API Reference

### Props

| Prop             | Description                    | Type     | Options                                                       | Default    |
|------------------|--------------------------------|----------|---------------------------------------------------------------|------------|
| type             | Button type                    | string   | `primary`/`success`/`warning`/`danger`/`info`                 | —          |
| size             | Button size                    | string   | `supersmall`/`small`/`medium`/`large`/`superbig`              | `medium`   |
| plain            | Whether it's a plain button    | boolean  | —                                                             | `false`    |
| rounded          | Whether it has rounded corners | boolean  | —                                                             | `false`    |
| circular         | Whether it's circular          | boolean  | —                                                             | `false`    |
| disabled         | Whether it's disabled          | boolean  | —                                                             | `false`    |
| colorBackground  | Background color               | string   | Hex or named color                                            | —          |
| colorText        | Text color                     | string   | Hex or named color                                            | `false`    |
| colorBorder      | Border color                   | string   | Hex or named color                                            | —          |
| tag              | Rendered HTML tag              | string   | Any HTML tag                                                  | `button`   |

### Type Definitions

```typescript
interface ButtonProps {
  type?: string;
  size?: string;
  plain?: boolean;
  rounded?: boolean;
  circular?: boolean;
  disabled?: boolean;
  colorBackground?: string;
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

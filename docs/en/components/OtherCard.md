# Card

## Brief Introduction
The Card component is used to display information and content blocks, supporting custom headers, bodies, and footers. mengyue-components has encapsulated it and performed vitest testing.
You can use `<MYCard></MYCard>` or `<MYCard />` to implement a card layout.

## Basic Usage

### Basic Card
Basic card component with header, body, and footer.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYCard>
    <template #header>
      <div style='font-weight: bold;'>Card Title</div>
    </template>
    <template #body>
      <p>This is the main content of the card</p>
      <p>Any type of content can be placed here</p>
    </template>
    <template #footer>
      <div style='text-align: right; color: #666;'>Card Footer</div>
    </template>
  </MYCard>
</template>
  `.trim()"
>
  <template #demo>
    <div style="max-width: 400px;">
      <MYCard>
        <template #header>
          <div style="font-weight: bold;">Card Title</div>
        </template>
        <template #body>
          <p>This is the main content of the card</p>
          <p>Any type of content can be placed here</p>
        </template>
        <template #footer>
          <div style="text-align: right; color: #666;">Card Footer</div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### Custom Size
Use the `width` and `height` props to customize the card size.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' height='150px'>
      <template #header>Small Card</template>
      <template #body>
        <p>200px × 150px</p>
      </template>
    </MYCard>
    <MYCard width='300px' height='200px'>
      <template #header>Medium Card</template>
      <template #body>
        <p>300px × 200px</p>
      </template>
    </MYCard>
    <MYCard width='400px' height='250px'>
      <template #header>Large Card</template>
      <template #body>
        <p>400px × 250px</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <MYCard width="200px" height="150px">
        <template #header>Small Card</template>
        <template #body>
          <p>200px × 150px</p>
        </template>
      </MYCard>
      <MYCard width="300px" height="200px">
        <template #header>Medium Card</template>
        <template #body>
          <p>300px × 200px</p>
        </template>
      </MYCard>
      <MYCard width="400px" height="250px">
        <template #header>Large Card</template>
        <template #body>
          <p>400px × 250px</p>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### Custom Background Color
Use the `backgroundColor` prop to customize the card's background color.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='250px' background-color='#f0f9ff'>
      <template #header style='color: #0369a1;'>Light Blue Card</template>
      <template #body>
        <p>Custom background color</p>
        <p>#f0f9ff</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#fef2f2'>
      <template #header style='color: #dc2626;'>Light Red Card</template>
      <template #body>
        <p>Custom background color</p>
        <p>#fef2f2</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#f0fdf4'>
      <template #header style='color: #16a34a;'>Light Green Card</template>
      <template #body>
        <p>Custom background color</p>
        <p>#f0fdf4</p>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <MYCard width="250px" background-color="#f0f9ff">
        <template #header>
          <div style="color: #0369a1;">Light Blue Card</div>
        </template>
        <template #body>
          <p>Custom background color</p>
          <p>#f0f9ff</p>
        </template>
      </MYCard>
      <MYCard width="250px" background-color="#fef2f2">
        <template #header>
          <div style="color: #dc2626;">Light Red Card</div>
        </template>
        <template #body>
          <p>Custom background color</p>
          <p>#fef2f2</p>
        </template>
      </MYCard>
      <MYCard width="250px" background-color="#f0fdf4">
        <template #header>
          <div style="color: #16a34a;">Light Green Card</div>
        </template>
        <template #body>
          <p>Custom background color</p>
          <p>#f0fdf4</p>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### Product Display Card
Use cards to display product information.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='280px'>
      <template #header>
        <div style='display: flex; justify-content: space-between; align-items: center;'>
          <span style='font-weight: bold;'>MacBook Pro</span>
          <span style='color: #409EFF;'>¥12999</span>
        </div>
      </template>
      <template #body>
        <div style='text-align: center; margin-bottom: 15px;'>
          <div style='width: 100%; height: 120px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px;'>
            💻
          </div>
        </div>
        <p>13-inch, M2 chip, 8GB memory, 256GB storage</p>
        <ul style='color: #666; font-size: 14px;'>
          <li>Retina display</li>
          <li>Touch Bar and Touch ID</li>
          <li>Up to 20 hours battery life</li>
        </ul>
      </template>
      <template #footer>
        <div style='display: flex; gap: 10px;'>
          <button style='flex: 1; padding: 8px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>Buy Now</button>
          <button style='flex: 1; padding: 8px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;'>Add to Cart</button>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <MYCard width="280px">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold;">MacBook Pro</span>
            <span style="color: #409EFF;">¥12999</span>
          </div>
        </template>
        <template #body>
          <div style="text-align: center; margin-bottom: 15px;">
            <div style="width: 100%; height: 120px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px;">
              💻
            </div>
          </div>
          <p>13-inch, M2 chip, 8GB memory, 256GB storage</p>
          <ul style="color: #666; font-size: 14px;">
            <li>Retina display</li>
            <li>Touch Bar and Touch ID</li>
            <li>Up to 20 hours battery life</li>
          </ul>
        </template>
        <template #footer>
          <div style="display: flex; gap: 10px;">
            <button style="flex: 1; padding: 8px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">Buy Now</button>
            <button style="flex: 1; padding: 8px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;">Add to Cart</button>
          </div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### User Information Card
Use cards to display user information.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <MYCard width='320px' background-color='#f8fafc'>
    <template #header>
      <div style='display: flex; align-items: center; gap: 12px;'>
        <div style='width: 40px; height: 40px; background: #409EFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;'>
          U
        </div>
        <div>
          <div style='font-weight: bold;'>Zhang San</div>
          <div style='color: #666; font-size: 14px;'>Premium User</div>
        </div>
      </div>
    </template>
    <template #body>
      <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 15px;'>
        <div>
          <div style='color: #666; font-size: 12px;'>Email</div>
          <div>zhangsan@example.com</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>Phone</div>
          <div>138****1234</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>Department</div>
          <div>Technology</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>Position</div>
          <div>Frontend Engineer</div>
        </div>
      </div>
    </template>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button style='padding: 6px 12px; border: 1px solid #409EFF; color: #409EFF; background: white; border-radius: 4px; cursor: pointer;'>Edit</button>
        <button style='padding: 6px 12px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>Contact</button>
      </div>
    </template>
  </MYCard>
</template>
  `.trim()"
>
  <template #demo>
    <div style="max-width: 400px;">
      <MYCard width="320px" background-color="#f8fafc">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; background: #409EFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
              U
            </div>
            <div>
              <div style="font-weight: bold;">Zhang San</div>
              <div style="color: #666; font-size: 14px;">Premium User</div>
            </div>
          </div>
        </template>
        <template #body>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <div style="color: #666; font-size: 12px;">Email</div>
              <div>zhangsan@example.com</div>
            </div>
            <div>
              <div style="color: #666; font-size: 12px;">Phone</div>
              <div>138****1234</div>
            </div>
            <div>
              <div style="color: #666; font-size: 12px;">Department</div>
              <div>Technology</div>
            </div>
            <div>
              <div style="color: #666; font-size: 12px;">Position</div>
              <div>Frontend Engineer</div>
            </div>
          </div>
        </template>
        <template #footer>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button style="padding: 6px 12px; border: 1px solid #409EFF; color: #409EFF; background: white; border-radius: 4px; cursor: pointer;">Edit</button>
            <button style="padding: 6px 12px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">Contact</button>
          </div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### Data Statistics Card
Use cards to display data statistics.

<ShowCode
  title="Code Demo"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' background-color='#f0f9ff'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #0369a1;'>1,234</div>
          <div style='color: #666; margin-top: 8px;'>Daily Visits</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fef2f2'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #dc2626;'>567</div>
          <div style='color: #666; margin-top: 8px;'>New Users</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#f0fdf4'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #16a34a;'>89.5%</div>
          <div style='color: #666; margin-top: 8px;'>Conversion Rate</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fffbeb'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #d97706;'>¥12,345</div>
          <div style='color: #666; margin-top: 8px;'>Daily Revenue</div>
        </div>
      </template>
    </MYCard>
  </div>
</template>
  `.trim()"
>
  <template #demo>
    <div style="display: flex; gap: 20px; flex-wrap: wrap;">
      <MYCard width="200px" background-color="#f0f9ff">
        <template #body>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #0369a1;">1,234</div>
            <div style="color: #666; margin-top: 8px;">Daily Visits</div>
          </div>
        </template>
      </MYCard>
      <MYCard width="200px" background-color="#fef2f2">
        <template #body>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #dc2626;">567</div>
            <div style="color: #666; margin-top: 8px;">New Users</div>
          </div>
        </template>
      </MYCard>
      <MYCard width="200px" background-color="#f0fdf4">
        <template #body>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #16a34a;">89.5%</div>
            <div style="color: #666; margin-top: 8px;">Conversion Rate</div>
          </div>
        </template>
      </MYCard>
      <MYCard width="200px" background-color="#fffbeb">
        <template #body>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #d97706;">¥12,345</div>
            <div style="color: #666; margin-top: 8px;">Daily Revenue</div>
          </div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

## API Reference

### Props

| Prop              | Description               | Type    | Options | Default |
|-------------------|---------------------------|---------|---------|---------|
| title             | Card title                | string  | —       | `''`    |
| width             | Card width                | string  | —       | `''`    |
| height            | Card height               | string  | —       | `''`    |
| footer            | Card footer content       | string  | —       | `''`    |
| background-color  | Card background color     | string  | —       | `''`    |

### Slots

| Slot Name   | Description                |
|-------------|----------------------------|
| header      | Card header content        |
| body        | Card body content          |
| footer      | Card footer content        |

### Type Definitions

```typescript
interface CardProps {
  title?: string;
  width?: string;
  height?: string;
  footer?: string;
  backgroundColor?: string;
}
```

<script setup>
import MYCard from '../../../packages/components/card/src/card.vue'
</script>

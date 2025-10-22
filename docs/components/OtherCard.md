# Card

## 简易介绍
Card 卡片组件，用于展示信息和内容块，支持自定义头部、主体和底部。mengyue-components 进行了封装并进行了 vitest 测试。
可以使用 `<MYCard></MYCard>` 或者 `<MYCard />` 来实现卡片布局。

## 基本用法

### 基础卡片
基础的卡片组件，包含头部、主体和底部。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYCard>
    <template #header>
      <div style='font-weight: bold;'>卡片标题</div>
    </template>
    <template #body>
      <p>这里是卡片的主体内容</p>
      <p>可以放置任何类型的内容</p>
    </template>
    <template #footer>
      <div style='text-align: right; color: #666;'>卡片底部</div>
    </template>
  </MYCard>
</template>
  `.trim()"
>
  <template #demo>
    <div style="max-width: 400px;">
      <MYCard>
        <template #header>
          <div style="font-weight: bold;">卡片标题</div>
        </template>
        <template #body>
          <p>这里是卡片的主体内容</p>
          <p>可以放置任何类型的内容</p>
        </template>
        <template #footer>
          <div style="text-align: right; color: #666;">卡片底部</div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### 自定义尺寸
使用 `width` 和 `height` 属性自定义卡片的尺寸。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' height='150px'>
      <template #header>小卡片</template>
      <template #body>
        <p>200px × 150px</p>
      </template>
    </MYCard>
    <MYCard width='300px' height='200px'>
      <template #header>中等卡片</template>
      <template #body>
        <p>300px × 200px</p>
      </template>
    </MYCard>
    <MYCard width='400px' height='250px'>
      <template #header>大卡片</template>
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
        <template #header>小卡片</template>
        <template #body>
          <p>200px × 150px</p>
        </template>
      </MYCard>
      <MYCard width="300px" height="200px">
        <template #header>中等卡片</template>
        <template #body>
          <p>300px × 200px</p>
        </template>
      </MYCard>
      <MYCard width="400px" height="250px">
        <template #header>大卡片</template>
        <template #body>
          <p>400px × 250px</p>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### 自定义背景色
使用 `backgroundColor` 属性自定义卡片的背景颜色。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='250px' background-color='#f0f9ff'>
      <template #header style='color: #0369a1;'>浅蓝色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#f0f9ff</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#fef2f2'>
      <template #header style='color: #dc2626;'>浅红色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
        <p>#fef2f2</p>
      </template>
    </MYCard>
    <MYCard width='250px' background-color='#f0fdf4'>
      <template #header style='color: #16a34a;'>浅绿色卡片</template>
      <template #body>
        <p>自定义背景颜色</p>
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
          <div style="color: #0369a1;">浅蓝色卡片</div>
        </template>
        <template #body>
          <p>自定义背景颜色</p>
          <p>#f0f9ff</p>
        </template>
      </MYCard>
      <MYCard width="250px" background-color="#fef2f2">
        <template #header>
          <div style="color: #dc2626;">浅红色卡片</div>
        </template>
        <template #body>
          <p>自定义背景颜色</p>
          <p>#fef2f2</p>
        </template>
      </MYCard>
      <MYCard width="250px" background-color="#f0fdf4">
        <template #header>
          <div style="color: #16a34a;">浅绿色卡片</div>
        </template>
        <template #body>
          <p>自定义背景颜色</p>
          <p>#f0fdf4</p>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### 产品展示卡片
使用卡片展示产品信息。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='280px'>
      <template #header>
        <div style='display: flex; justify-content: space-between; align-items: center;'>
          <span style='font-weight: bold;'>MacBook Pro</span>
          <span style='color: #409EFF;'>￥12999</span>
        </div>
      </template>
      <template #body>
        <div style='text-align: center; margin-bottom: 15px;'>
          <div style='width: 100%; height: 120px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px;'>
            💻
          </div>
        </div>
        <p>13英寸，M2芯片，8GB内存，256GB存储</p>
        <ul style='color: #666; font-size: 14px;'>
          <li>Retina 显示屏</li>
          <li>触控栏和触控 ID</li>
          <li>最长可达 20 小时电池续航</li>
        </ul>
      </template>
      <template #footer>
        <div style='display: flex; gap: 10px;'>
          <button style='flex: 1; padding: 8px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>立即购买</button>
          <button style='flex: 1; padding: 8px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;'>加入购物车</button>
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
            <span style="color: #409EFF;">￥12999</span>
          </div>
        </template>
        <template #body>
          <div style="text-align: center; margin-bottom: 15px;">
            <div style="width: 100%; height: 120px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px;">
              💻
            </div>
          </div>
          <p>13英寸，M2芯片，8GB内存，256GB存储</p>
          <ul style="color: #666; font-size: 14px;">
            <li>Retina 显示屏</li>
            <li>触控栏和触控 ID</li>
            <li>最长可达 20 小时电池续航</li>
          </ul>
        </template>
        <template #footer>
          <div style="display: flex; gap: 10px;">
            <button style="flex: 1; padding: 8px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">立即购买</button>
            <button style="flex: 1; padding: 8px; border: 1px solid #dcdfe6; background: white; border-radius: 4px; cursor: pointer;">加入购物车</button>
          </div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### 用户信息卡片
使用卡片展示用户信息。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <MYCard width='320px' background-color='#f8fafc'>
    <template #header>
      <div style='display: flex; align-items: center; gap: 12px;'>
        <div style='width: 40px; height: 40px; background: #409EFF; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;'>
          U
        </div>
        <div>
          <div style='font-weight: bold;'>张三</div>
          <div style='color: #666; font-size: 14px;'>高级用户</div>
        </div>
      </div>
    </template>
    <template #body>
      <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 15px;'>
        <div>
          <div style='color: #666; font-size: 12px;'>邮箱</div>
          <div>zhangsan@example.com</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>电话</div>
          <div>138****1234</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>部门</div>
          <div>技术部</div>
        </div>
        <div>
          <div style='color: #666; font-size: 12px;'>职位</div>
          <div>前端工程师</div>
        </div>
      </div>
    </template>
    <template #footer>
      <div style='display: flex; gap: 10px; justify-content: flex-end;'>
        <button style='padding: 6px 12px; border: 1px solid #409EFF; color: #409EFF; background: white; border-radius: 4px; cursor: pointer;'>编辑</button>
        <button style='padding: 6px 12px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;'>联系</button>
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
              <div style="font-weight: bold;">张三</div>
              <div style="color: #666; font-size: 14px;">高级用户</div>
            </div>
          </div>
        </template>
        <template #body>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
            <div>
              <div style="color: #666; font-size: 12px;">邮箱</div>
              <div>zhangsan@example.com</div>
            </div>
            <div>
              <div style="color: #666; font-size: 12px;">电话</div>
              <div>138****1234</div>
            </div>
            <div>
              <div style="color: #666; font-size: 12px;">部门</div>
              <div>技术部</div>
            </div>
            <div>
              <div style="color: #666; font-size: 12px;">职位</div>
              <div>前端工程师</div>
            </div>
          </div>
        </template>
        <template #footer>
          <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button style="padding: 6px 12px; border: 1px solid #409EFF; color: #409EFF; background: white; border-radius: 4px; cursor: pointer;">编辑</button>
            <button style="padding: 6px 12px; background: #409EFF; color: white; border: none; border-radius: 4px; cursor: pointer;">联系</button>
          </div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

### 数据统计卡片
使用卡片展示数据统计信息。

<ShowCode
  title="代码演示"
  :code="`
<template>
  <div style='display: flex; gap: 20px; flex-wrap: wrap;'>
    <MYCard width='200px' background-color='#f0f9ff'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #0369a1;'>1,234</div>
          <div style='color: #666; margin-top: 8px;'>今日访问量</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fef2f2'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #dc2626;'>567</div>
          <div style='color: #666; margin-top: 8px;'>新增用户</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#f0fdf4'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #16a34a;'>89.5%</div>
          <div style='color: #666; margin-top: 8px;'>转化率</div>
        </div>
      </template>
    </MYCard>
    <MYCard width='200px' background-color='#fffbeb'>
      <template #body>
        <div style='text-align: center; padding: 20px 0;'>
          <div style='font-size: 32px; font-weight: bold; color: #d97706;'>¥12,345</div>
          <div style='color: #666; margin-top: 8px;'>今日收入</div>
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
            <div style="color: #666; margin-top: 8px;">今日访问量</div>
          </div>
        </template>
      </MYCard>
      <MYCard width="200px" background-color="#fef2f2">
        <template #body>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #dc2626;">567</div>
            <div style="color: #666; margin-top: 8px;">新增用户</div>
          </div>
        </template>
      </MYCard>
      <MYCard width="200px" background-color="#f0fdf4">
        <template #body>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #16a34a;">89.5%</div>
            <div style="color: #666; margin-top: 8px;">转化率</div>
          </div>
        </template>
      </MYCard>
      <MYCard width="200px" background-color="#fffbeb">
        <template #body>
          <div style="text-align: center; padding: 20px 0;">
            <div style="font-size: 32px; font-weight: bold; color: #d97706;">¥12,345</div>
            <div style="color: #666; margin-top: 8px;">今日收入</div>
          </div>
        </template>
      </MYCard>
    </div>
  </template>
</ShowCode>

## API 参考

### Props
| 参数          | 说明         | 类型     | 可选值                              | 默认值  |
|--------------|-------------|---------|-----------------------------------|--------|
| title  | 卡片标题      | string  | — | `''`  |
| width  | 卡片宽度      | string  | — | `''`  |
| height  | 卡片高度      | string  | — | `''`  |
| footer  | 卡片底部内容      | string  | — | `''`  |
| background-color  | 卡片背景色      | string  | — | `''`  |

### 插槽
| 插槽名          | 说明         |
|--------------|-------------|
| header  | 卡片头部内容      |
| body  | 卡片主体内容      |
| footer  | 卡片底部内容      |

### 类型定义
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
import MYCard from '../../packages/components/card/src/card.vue'
</script>
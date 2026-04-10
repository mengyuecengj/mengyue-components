# 插件迁移/切换后的常见问题
## 1. 迁移后组件样式丢失
请检查是否正确引入了`mengyue-components`的样式文件。
:::code-group
```bash[typescript]
import 'mengyue-components/style.css'
如果不生效尝试下面这种
import 'mengyue-components/dist/style.css'
```

## 2. 能否暂时保留`mengyue-plus`逐步替换
技术上可以共存，但不推荐这么做，如果要迁移/切换插件，*建议*尽快完成操作。
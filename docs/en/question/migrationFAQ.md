# Common problems after plugin migration/switching
## 1. Component styles are lost after migration
Please check if the style file for `mengyue components` has been correctly introduced.
:::code-group
```bash[typescript]
import 'mengyue-components/style.css'
// If it doesn't take effect, try the following
import 'mengyue-components/dist/style.css'
```

## 2. Can we temporarily keep 'mengyue plus' and gradually replace it
Technically, coexistence is possible, but it is not recommended. If you want to migrate/switch plugins, it is recommended to complete the operation as soon as possible.
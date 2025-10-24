export const indexDesign = [
    {
        text: '概览',
        collapsible: true, // 允许折叠
        collapsed: false,  // 默认展开
        items: [
            { text: '快速阅读', link: '/design/FastRead' },
        ],
    },
    {
        text: 'hooks 设计',
        collapsible: true, // 允许折叠
        collapsed: false,  // 默认展开
        items: [
            { text: 'useClassComputed', link: '/design/hooks/useClass' },
            { text: 'useStyleComputed', link: '/design/hooks/useStyle' },
            { text: 'useCheckComputed', link: '/design/hooks/useCheck' },
            { text: 'useColorComputed', link: '/design/hooks/useColor' },
            { text: 'useOverallComputed', link: '/design/hooks/useOverall' },
            { text: 'useSelectComputed', link: '/design/hooks/useScroll' },
            { text: 'useColorUitls', link: '/design/hooks/useColorUtils' },
            { text: 'useScrollCommon', link: '/design/hooks/useScrollCommon' },
        ],
    },
    {
        text: '工具函数',
        collapsible: true, // 允许折叠
        collapsed: false,  // 默认展开
        items: [
            { text: 'date', link: '/design/utils/date' },
            { text: 'messageManager', link: '/design/utils/messageManager' },
            { text: 'withInstall', link: '/design/utils/withInstall' },
        ]
    },
    {
        text: '组件设计',
        collapsible: true, // 允许折叠
        collapsed: false,  // 默认展开
        items: [
            {
                text: '基础组件',
                collapsible: true, // 允许折叠
                collapsed: false,  // 默认展开
                items: [
                    { text: 'Button按钮', link: '/design/components/basic/button' },
                    { text: 'Border边框', link: '/design/components/basic/border' },
                    { text: 'text文本', link: '/design/components/basic/text' },
                    { text: 'A链接', link: '/design/components/basic/a' },
                ]
            },
            {
                text: '布局与滚动',
                collapsible: true, // 允许折叠
                collapsed: false,  // 默认展开
                items: [
                    { text: 'scroll滚动条(全局)', link: '/design/components/distribution/scroll' },
                    { text: 'scrollbar滚动条(局部)', link: '/design/components/distribution/scrollbar' },
                    { text: 'container布局', link: '/design/components/roll/container' },
                    { text: 'layout布局', link: '/design/components/roll/layout' },
                ],
            },
            {
                text: '表单组件',
                collapsible: true, // 允许折叠
                collapsed: false,  // 默认展开
                items: [
                    { text: 'input输入框', link: '/desgin/components/form/input' },
                    { text: 'radio单选框', link: '/desgin/components/form/radio' },
                    { text: 'checkbox复选框', link: '/desgin/components/form/checkbox' },
                    { text: 'switch开关', link: '/desgin/components/form/switch' },
                    { text: 'rate评分', link: '/desgin/components/form/rate' },
                    { text: 'pickColor颜色选择', link: '/desgin/components/form/pickColor' },
                    { text: 'select选择器', link: '/desgin/components/form/select' },
                    { text: 'select日期选择器', link: '/desgin/components/form/selectDate' },
                    { text: 'select时间选择器', link: '/desgin/components/form/selectTime' },
                    { text: 'selectCascader级联', link: '/desgin/components/form/selectCascader' },
                    { text: 'slidebar滑块', link: '/desgin/components/form/sidebar' },
                    { text: 'form表单', link: '/desgin/components/form/form' },
                ],
            },
            {
                text: '反馈组件',
                collapsible: true, // 允许折叠
                collapsed: false,  // 默认展开
                items: [
                    { text: 'badge勋章', link: '/desgin/components/feedback/badge' },
                    { text: 'collapse折叠面板', link: '/desgin/components/feedback/collapse' },
                    { text: 'progress进度条', link: '/desgin/components/feedback/progress' },
                    { text: 'result结果', link: '/desgin/components/feedback/result' },
                    { text: 'skeleton骨架屏', link: '/desgin/components/feedback/skeleton' },
                    { text: 'dialog对话框', link: '/desgin/components/feedback/dialog' },
                    { text: 'message消息', link: '/desgin/components/feedback/message' }
                ],
            },
            {
                text: '数据展示',
                collapsible: true, // 允许折叠
                collapsed: false,  // 默认展开
                items: [
                    { text: 'pagination分页器', link: '/desgin/components/data/pagination' },
                    { text: 'table表格', link: '/desgin/components/data/table' },
                    { text: 'timeline时间轴', link: '/desgin/components/data/timeline' },
                    { text: 'tree树形菜单', link: '/desgin/components/data/tree' },
                ],
            },
            {
                text: '导航组件',
                collapsible: true, // 允许折叠
                collapsed: false,  // 默认展开
                items: [
                    { text: 'backtop回到顶部', link: '/desgin/components/navigation/backtop' },
                    { text: 'breadcrumb导航', link: '/desgin/components/navigation/breadcrumb' },
                    { text: 'dropdown下拉框', link: '/desgin/components/navigation/dropdown' },
                    { text: 'menu菜单', link: '/desgin/components/navigation/menu' },
                    { text: 'step步骤条', link: '/desgin/components/navigation/step' },
                ],
            },
            {
                text: '其他组件',
                collapsible: true, // 允许折叠
                collapsed: false,  // 默认展开
                items: [
                    { text: 'transfer穿梭框', link: '/desgin/components/other/transfer' },
                    { text: 'upload上传', link: '/desgin/components/other/upload' },
                    { text: 'drawer抽屉', link: '/desgin/components/other/drawer' },
                    { text: 'card卡片', link: '/desgin/components/other/card' }
                ],
            },
        ],
    },
]

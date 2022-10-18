
<h1 align="center">lucky-ui</h1>

<p align="center">简单的 Vue pc端组件库</p>


---

### 介绍

lucky-ui 是一个**轻量的pc端组件库**。

## 特性

- 🍭 支持 Vue 2

## 安装

在现有项目中使用 lucky-ui 时，可以通过 `npm` 进行安装：

```bash
# Vue 2 项目，安装 Vant 2
npm i lucky-ui-vue
```

## 快速上手

```js
// 1. 引入组件
import LuckyUi from "lucky-ui-vue"
// 2. 引入组件样式
import "../node_modules/lucky-ui-vue/lucky-ui-vue.css"
// 3. 注册你需要的组件
Vue.use(LuckyUi)
```
## 组件
### 1. lucky-icon 图标
```js
    // 图标名称
    name: {
      type: String,
      default: 'smile-fill'
    },
    // 图标尺寸
    size: {
      type: Number,
      default: 16
    },
    // 图标颜色
    color: {
      type: String,
      default: '#606266'
    }
```
### 1. lucky-button 按钮

```js
    // 按钮类型[primary,success,danger,warning,info]
    type: {
      type: String,
      default: 'default'
    },
    // 按钮标题
    title: {
      type: String,
      default: 'Button'
    },
    // 按钮尺寸
    size: {
      type: String,
      default: 'normal'
    },
    // 按钮背景颜色，注意：设置后type属性无效
    bgColor: {
      type: [String, Array],
      default: ''
    },
    // 按钮字体颜色
    color: {
      type: String,
      default: ''
    },
    // 按钮背景颜色渐变方向
    bgColorLinearDirection: {
      type: String,
      default: 'to right'
    },
    // 按钮点击是否有波纹扩散动效
    ripple: {
      type: Boolean,
      default: true
    },
    // 按钮是否为圆角
    round: {
      type: Boolean,
      default: false
    },
    // 按钮是否为圆形
    circle: {
      type: Boolean,
      default: false
    },
    // 按钮是否为图标按钮
    onlyIcon: {
      type: Boolean,
      default: false
    },
    // 按钮图标名称
    icon: {
      type: String,
      default: ''
    },
    // 按钮图标尺寸
    iconSize: {
      type: Number,
      default: 16
    },
    // 按钮图标位置
    iconPlace: {
      type: String,
      default: 'left'
    },
    // 按钮是否禁用
    disabled: {
      type: Boolean,
      default: false
    }
```

## 贡献者

Lucky(github：lucky-1106)
# vue-picture-tools
[![NPM version](https://img.shields.io/npm/v/vue-picture-tools.svg)](https://www.npmjs.com/package/vue-picture-tools)

> vue picture preview tools👫

> 支持pc端，移动端

> 支持放大

> 支持键盘事件

🙋  
🙋 单击关闭查看图片窗口
🙋 双击放大

## npm

``` bash
# npm install
npm install vue-picture-tools --save
```
## 引入

在main.js中引入

```js
import preview from 'vue-picture-tools'
Vue.use(preview)
```

在组件中使用

> 包含图片列表&&展示

``` html
<picture-list
  :boxStyle="boxStyle"
  :listStyle="listStyle"
  :img-urls="imgUrls">
</picture-list>
```
| 参数 | 类型 | 备注 |
|  ------ | ------ | ------ |
| boxStyle | Object | 图片列表盒子样式（驼峰命名：backgroundColor） |
| listStyle | Object | 图片样式（驼峰命名：backgroundColor） |
| imgUrls | array | 图片数组 |

> 仅做图片查看

``` html
<picture-preview
  :picture-index="pictureIndex"
  :picture-data="pictureData"
  :is-delete="isDelete"
  @picture-out="pictureOut">
</picture-preview>
```

| 参数 | 类型 | 备注 |
|  ------ | ------ | ------ |
| pictureIndex | number | 当前点击图片的index |
| pictureData | array | 图片数组 |
| isDelete | Boolean | 删除按钮展示 |
| pictureOut | event | 图片单击回调事件（我用来做展示关闭事件回调） |

图片数组格式

```
boxStyle: {
  width: '100%'
}
```

```
listStyle: {
  boxWidth: '100%',
  width: '200px',
  height: '200px',
  margin: '10px 0 0 10px',
}
```

```
[
  {
    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3345425463,2829351688&fm=26&gp=0.jpg',
    desc: '图片一'
  },
  {
    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2820343167,442028568&fm=26&gp=0.jpg',
    desc: '图片二'
  },
  {
    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3885463997,795370374&fm=26&gp=0.jpg',
    desc: '图片三'
  }
]
```

# 效果展示

> pc端

![avatar](/static/pc.gif)

> 移动端

![avatar](/static/moblie.gif)

源码地址：[https://github.com/liqin1059/vue-picture-tools](https://github.com/liqin1059/vue-picture-tools)


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
  :box-width="boxWidth"
  :width="width"
  :height="height"
  :margin="margin"
  :img-urls="imgUrls">
</picture-list>
```
| 参数 | 类型 | 备注 |
|  ------ | ------ | ------ |
| boxWidth | sting | 图片列表盒子宽 |
| width | sting | 图片宽度 |
| height | sting | 图片高度 |
| margin | sting | 图片边距 |
| imgUrls | array | 图片数组 |

> 仅做图片查看

``` html
<picture-preview
  :picture-index="pictureIndex"
  :picture-data="pictureData"
  :is-delete="isDelete">
</picture-preview>
```

| 参数 | 类型 | 备注 |
|  ------ | ------ | ------ |
| pictureIndex | number | 当前点击图片的index |
| pictureData | array | 图片数组 |
| isDelete | Boolean | 删除事件 |

图片数组格式
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


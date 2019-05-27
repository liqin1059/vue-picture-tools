# vue-picture-tools
[![NPM version](https://img.shields.io/npm/v/vue-picture-tools.svg)](https://www.npmjs.com/package/vue-picture-tools)

-  vue picture preview tools👫

-  支持pc端，移动端

-  支持放大

-  图片链接属性自定义

-  支持键盘事件

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

## 使用

###  包含图片列表&&展示

删除图标样式可以自定义，可以引申为自己需要的点击的功能图标，回调参数为当前点击图片的index

``` html
<picture-list
  :box-style="{}"
  :list-style="{}"
  :urlName="'url'"
  :img-urls="[]"
  :is-delete="false"
  :dele-style="deleStyle"
  :zoom="false"
  :speed="200"
  @delete-picture="deletePicture">
</picture-list>
```
| 参数 | 类型 | 备注 | 默认值 |
|  ------ | ------ | ------ | ------ |
| boxStyle | Object | 图片列表盒子样式<br>（驼峰命名：backgroundColor） | {} |
| listStyle | Object | 图片样式<br>（驼峰命名：backgroundColor） | {} |
| urlName | String | 图片链接属性名称 | 'url' |
| imgUrls | Array | 图片数组 | [] |
| isDelete | Boolean | 是否显示删除按钮 | false |
| deleStyle | Boolean | 删除按钮样式<br>（驼峰命名：backgroundColor） | {} |
| zoom | Boolean | 是否双击放大 | true |
| speed | Number | 图片浏览切换速度 | 800 |
| deletePicture | event | 删除事件回调（参数：index） |  |

###  仅做图片查看

``` html
<picture-preview
  :urlName="'url'"
  :picture-index="0"
  :picture-data="[]"
  :is-delete="false"
  :dele-style="{}"
  :zoom="false"
  :speed="200"
  @picture-out="pictureOut"
  @delete-picture="deletePicture">
</picture-preview>
```

| 参数 | 类型 | 备注 | 默认值 |
|  ------ | ------ | ------ | ------ |
| urlName | String | 图片链接属性名称 | 'url' |
| pictureIndex | Number | 当前点击图片的index | 0 |
| pictureData | Array | 图片数组 | [] |
| isDelete | Boolean | 是否显示删除按钮 | false |
| deleStyle | Object | 删除按钮样式<br>（驼峰命名：backgroundColor） | {} |
| zoom | Boolean | 是否双击放大 | true |
| speed | Number | 图片浏览切换速度 | 800 |
| picture-out | event | 图片单击回调事件（我用来做展示关闭事件回调） |  |
| deletePicture | event | 删除事件回调（参数：index） |  |

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


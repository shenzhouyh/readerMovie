### 小程序入门实战

-----

#### 知识点

app.json文件中的pages属性中，第一个页面路径为小程序的初始显示页
- 小程序页面的生命周期
    - onLoad-监听页面加载
    - onShow-监听页面显示
    - onReady-监听页面初次渲染完成
    - onHide-监听页面隐藏
    - onUnload-监听页面卸载
- 全局配置和页面配置采用就近策略，相关属性可参考， [小程序配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)
- 使用弹性盒子模型，布局容器
`
    display: flex;
    flex-direction: row;
    align-items: center;
    `
- 数据绑定，在wxml中使用双花括号，显示JS文件中的绑定数据；单向数据绑定（JS-->wxml）
- 双花括号可以进行数据的运算，详情参考小程序文档 [数据绑定](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html)
- wx:for用法
`<block wx:for="{{posts_content}}" wx:for-item="item"></block>`
- 小程序的事件介绍，绑定事件并指明回调函数，可参考 [小程序事件系统](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)
`<view class="moto-container" bind:tap="onTap"></view>`
bind+冒号+事件类型名称
- 页面跳转
    - 方式一：wx.navigateTo(Object object)
        wx.navigateTo({
            url:'../posts/posts'
        })
    - 方式二：wx.redirectTo(Object object)
    wx.redirectTo({
            url:'../posts/posts'
        })
    - 方式三：switchTab
    wx.switchTab({
            url:'../posts/posts'
        })
        
    - 方式对比
        1、navigateTo在跳转之后会有返回按钮，而redirectTo是没有的
        2、navigateTo在跳转之后，会调用页面周期函数onHide，而redirectTo则是调用onUnload
        3、switchTab跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
- bind和catch
    - 都可以对事件进行绑定
    - catch可以阻止冒泡事件（父容器不会处理子容器已经响应的事件）
- template模板文件的使用
    - 模板声明：`<template name="post-item"></template>`
    - 模板使用：`<template is="post-item" data="{{item}}"></template>`
    - 注意：template中涉及到路径时，尽量使用绝对路径，因为template会被多处调用，无法确定调用方的文件层级
- 组件自定义属性
    - 属性定义：data+属性名称
    `<view catch:tap="TapPost" data-post-id="{{item.postId}}">`
    - 属性获取：event.currentTarget.dataset.(属性名称，-省略，且驼峰优化)   
    `let postId = event.currentTarget.dataset.postId;`
    - currentTarget和target的区别
        - currentTarget：指的是事件捕获的组件
        - target：指的是当前操作的组件
- 缓存 [小程序官方文档-缓存](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html)
    - 小程序缓存一旦设置是永久存在的，除非调用缓存管理方法
    - 缓存相关常用的方法
        - 设置缓存：wx.setStorage或setStorageSync
        - 获取缓存：wx.getStorage或getStorageSync
        - 移除缓存：wx.removeStorage或removeStorageSync
        - 清空缓存：wx.clearStorage或clearStorageSync
- 界面交互 [小程序官方文档-界面交互](https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html)
    - showToast（title，icon，duration）  
    - showModal，注意会函数中this的处理，可以使用另一个变量提前保存之后再使用
    - showActionSheet
- 背景音频播放 [小程序官方文档-背景音频播放](https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html)
    - 获取BackgroundAudioManager对象 let audioManager = wx.getBackgroundAudioManager();
- 数据绑定的优点
    - 全局变量的统一性和通用性，相比较于JS
    - 便于赋值和更新
    - 有利于单元测试        
#### 案例一：新闻阅读列表

##### swiper组件

- swiper-item的高宽，取决于外层swiper的高宽，swiper-item的高宽会默认设置为100% 
- swiper和swiper-item的本质都是容器，这就意味着内部可以防止任意内容，应用具备高度灵活性
- swiper组件的常用属性， [小程序开发文档-swiper组件](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)
##### 从数据文件中读取数据（代替从服务端获取数据）

- 使用require获取JS模块文件
    - require加载文件路径只能使用相对路径，不能使用绝对路径
    `const postData = require('../../data/posts-data');
     onLoad: function (options) {
        this.setData({
            posts_key:postData.postList
        })
    }
    `
- 使用小程序缓存，实现文章的收藏功能

#### 电影资讯页面
##### 模板的嵌套使用
    
- 评分组件模板、电影模板、电影列表模板，从小模板写起
- 使用restful api 获取网站数据，该方式主要以json数据格式进行传输，比较轻量级
- 国内外比较主流的在线API
    - 微博API、豆瓣API
    - github API
- API的设计关键
    - 路径的语义要尽量明确
    - 接口的力度要尽可能的细致
    



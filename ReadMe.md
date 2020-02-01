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

#### 案例一：新闻阅读列表
##### swiper组件
- swiper-item的高宽，取决于外层swiper的高宽，swiper-item的高宽会默认设置为100% 
- swiper和swiper-item的本质都是容器，这就意味着内部可以防止任意内容，应用具备高度灵活性
- swiper组件的常用属性， [小程序开发文档-swiper组件](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)





## 有关拼多多开发日志
1. tabBar 里的颜色只能用十六进制颜色 
2. 制作顶部分类栏时，保持超出者隐藏，可以滚动，但是又隐藏滚动条的方法；
    Element::-webkit-scrollbar {
        display: none;
    }
3. 图标(图片)居中方法，在父级盒子里设置text-align: center;
4. 小程序单位rpx  1px = 2rpx 
5. 小程序是以数据驱动视图的更新。所以在小程序中，不能直接操作dom，当然也不能使用jquery之类的库
6. 微信小程序指示点的样式要通过微信内置的类名来控制。如下：
.wx-swiper-dots {
    position: relative;
    left: unset !important;
    /* unset 不继承父级属性 */
    right: 0;
}
.wx-swiper-dots.wx-swiper-dots-horizontal {
    margin-bottom: -5rpx;
}
7. // 如何自定义标题栏  
在 app.json 里面把 "navigationStyle" 设置为 "custom"，这样子之后就只会保留右上角胶囊按钮了。
8. 我们可以将一些公共的代码抽离成为一个单独的 js 文件，作为一个模块。模块只有通过 module.exports 或者 exports 才能对外暴露接口
9. 数据绑定使用 Mustache 语法（双大括号）将变量包起来  使用方法： {{ 内容 }} 
10. wx:if和wx:for必须分开使用
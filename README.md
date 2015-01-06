##框架动态

『2014-03-26』适合移动端的css框架 先挖个坑，准备填

『2015-01-06』终于暂时把坑填了

##框架介绍

###框架结构:

- definition.scss 用到的变量定义
- reset.scss 样式重置
- layout.scss 布局相关
- btn.scss 按钮相关
- form.scss 表单相关
- border.scss 边框相关
- font.scss 文字相关
- module.scss 常用模块
- layout.scss 弹窗相关
- animation.scss 动画相关

###注意问题

在ios8以前web端实现高清屏下的1px边框是无法直接实现的，只能通过一些方式间接实现，如使用gradient或者使用伪元素scale,甚至用box-shadow来模拟，但这些方式都有自己的缺点:

- 使用gradient的方案我在实际项目的开发中使用了，缺点很明显，无法设置圆角和自身无法设置background-image，另外border-top和border-left无法共存等等；
- scale的方式缺陷同样很明显，元素无法设置overflow:hidden及改变元素本身定位方式等；
- box-shadow只能使之看起来像实际却不是

本框架做了改进，需要配合js来使用，动态添加meta标签，对页面整体缩放

**补充：**因为表单元素radio和checkbox在高清屏下缩小50%后，无法通过设置大小来恢复正常，所以使用了zoom:2来放大，如果您有更好的方式，欢迎斧正。



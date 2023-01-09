# 颜色生成器 表单相关

## html

### 如果给 input 的属性 value 绑定了 state，又不设置 onChange，那么是无法改变 view 的。也就是说用户通过改变 state，来改变 view

## css

### 如果希望提示输入错误的值，可以写一个 error 对应的 CSS，然后设置一个 error 的 state，一旦用户提交表单，则对表单的输入进行验证，如果验证发现不符合，需要更改 view，因此需要改变 error 的 state。之后通过三目运算符改变 input 的 className。

### input 的 Error 样式可以通过红框来表示，很简单，就是加一层 border

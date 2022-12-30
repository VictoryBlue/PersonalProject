# 轮播图

# html

### 轮播图的元素都是在页面上渲染出来的，不是通过用户交互再创造的。只不过这些元素通过 CSS（opacity：0）隐藏了，只设置 css 类为 active 的 opacity 为 1

### 语义化 html：article

### svg：svg 元素（icon 元素）总是被包裹在 button 中，这样可以设置 background。left，right 结合 position 作定位。使用 gird 的 place-items 对 svg 进行垂直居中对齐。（.prev,.next）

# css

### 图片裁剪：object-fit: cover;保持原有尺寸，避免图片的 height 或者 width 调过之后被挤压。（section-center）

### overflow:hidden 可以隐藏由 transform:tanslate 造成的溢出部分（person-img）

### 头像图片经常在外层加一层 border，以及做成圆形

### transition 效果经常使用 linear，使得背景的变化平滑一些

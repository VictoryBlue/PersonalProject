# 轮播图

### 思路：渲染全部轮播图元素，设置 pre，next 的 CSS，只展示 active 的元素，设置每隔一段时间触发 setIndex，index 除了可以被计时器触发，也可以被 button 触发

### tip：更新 index 的逻辑可以一口气写在 btn 里，也可以先部分卸载 btn 的回调函中，然后 useEffect 里再判断一次

# html

### 语义化 html：article

### svg：svg 元素（icon 元素）总是被包裹在 button 中，这样可以设置 background。left，right 结合 position 作定位。使用 gird 的 place-items 对 svg 进行垂直居中对齐。（.prev,.next）

# css

### 轮播图元素通过 CSS（opacity：0）隐藏了，只设置 css 类为 active 的 opacity 为 1

### 图片裁剪：object-fit: cover;保持原有尺寸，避免图片的 height 或者 width 调过之后被挤压。（section-center）

### overflow:hidden 可以隐藏由 transform:tanslate 造成的溢出部分（person-img）

### 头像图片经常在外层加一层 border，以及做成圆形

### transition 效果经常使用 linear，使得背景的变化平滑一些

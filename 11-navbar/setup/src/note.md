# Nav

## 效果

### toggle nav-toggle 旋转效果

- 伪类 transform: rotate(90deg);
- 非伪类 transition: all 0.3s linear
- 颜色与网站颜色适配，改变大小，背景颜色设置为 transparent

### 导航栏下拉效果

- html: links-container 包裹 links dic->ul->li
- CSS 隐藏导航栏: 使用 height:0px overflow:hidden （links-container）
- CSS 展示导航栏:
  设置是否展示导航栏的 state
  方式一:是否挂载组件
  方式二:设置 links-container 的 height（prefer，因为可以设置动效）
  如果 links 特别多，那么把高度写死会造成 link 被隐藏，所以要根据元素大小（getBoundingClientRect()）动态确定 height。
  因此每次 links 变动都要重新渲染--->useEffect

### icon 跳转效果

- 可以用 button 包裹 icon
- 可以用 a 标签包裹 icon 实现跳转效果，鼠标悬停在 a 标签上左下角会提示链接地址。
- icon 往往需要改变背景颜色，大小，设置 hover 效果表明正在悬浮

### 导航链接效果

- 灰色字体变为主色以示悬浮
- background 填充为主色，文字 left-padding（.links a:hover）
- a 元素不是块级元素，设置上下 padding 不起作用，需要加上 display:block,这样可以增大链接间的间隙，也可使得 background 填满整个一行。

## 文件组织

- 不需要硬编码链接等，可以从文件中导入，避免多次改动

## 导航栏响应式布局

移动端布局，CSS 先从小的布局开始写起。随后再使用媒体查询过渡到大的布局。
可以一次性写全整个 html 结构，然后根据媒体查询决定一些布局是否展示（display:none)
height:auto，是指根据块内内容自动调节高度。

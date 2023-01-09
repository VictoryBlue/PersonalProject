#### IN ACTION

[Portfolio](https://gatsby-strapi-portfolio-project.netlify.app/)

# 设计

### 标题 第一等灰度 比较大的文本， line-height<1.5,这里设置了 1.25

### 正文 中等灰度 正常 size 的文本， line-height 在 1.5-2 之间，这里设置 1.5

### 不要总是居中文本

# html

## 语义化 html（section article 等，不要沉迷于 div 无法自拔）

## 又是设置大号的字体不一定非要用 p，可以选择 h3-h4

# CSS

## 一般会设置一个整个布局的 container，包裹所有子元素，这时候设置 margin: 5rem auto 也无所谓，因为没有其他兄弟元素，不会发生 margin 的塌陷。auto 则是为了居中容器

## 实现下划线，只需要给一个 div 元素,增加宽、高，并且设置 background 就好

## 一个块级父元素容器，包裹子元素，如果都有 margin-bottom 存在，会发生 margin 的覆盖，而非叠加。

## grid-template-columns（.job-desc） 设置为 auto，意味着内容尺寸取决于内容本身的大小

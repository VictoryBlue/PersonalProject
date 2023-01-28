# 购物车项目，可以不断的添加商品到购物车里，每次添加商品到购物车里都要重新计件，页面就要重新渲染，以及计算整个 products 里面最贵的商品。

# BigList 负责 render SingleProduct

## 整个项目的结构包括 index，SingleProduct 和 BigList

## 因为图片比较多，渲染就很慢，而且如果每次 Products 的种类没变的话，都要重新计算最贵的产品就很不值得。

## 所以用两个方式解决问题：

### 1.React.memo,包住 BigList，这样只要 BigList 的 Products 不变，那么 BigList 就不会重新渲染。

### 2.但是后来发现 SingleProduct 完成添加购物车的功能，需要添加一个函数到 SingleProduct 里。但是函数每次在 Index re-render 的时候都变了，那么就要用 useCallback 缓存函数。state 只要没有改变，在多次 re-render 间是可以共享的

### 3.发现每次 re-render 都会重新计算商品里面最贵的商品，但是总的 products list 是没有变动的，所以就没有必要重复调用函数。使用 useMemo 缓存函数的计算结果。

# 图片是来自开源 api

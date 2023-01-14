#

## hook

我发现只有在 React 的组件中引入相应的 hook，当 hook 变化，才会触发组件的重新渲染。以 index.js 为例，如果不在 index.js 引入 location 这样的 state，哪怕 Submenu 发生了渲染，AppProvider 作为组件，拥有着全局变量（包括 location），只要 index.js 没有在函数式组件中使用 location 这样的 hook，那么就不会触发整个 App 的 re-render

## context

1. context.js 里的 AppProvider 是一个组件，AppProvider 也是一个组件，AppProvider 封装 AppContext.Provider 之后可以使得代码更加容易复用，因为可以把相关函数一起封装到 AppProvider 中。

2. 在 JSX 让 AppProvider，包裹需要提供全局上下文的组件，这样 AppProvider 会优先执行。

3. 如何封装 AppProvider? AppProvider 里需要让<AppContext.Provider></AppContext.Provider>包裹住<AppProvider></AppProvider>里包裹的 **children**。那么如何让 AppProvider 组件内使用她的 children 呢（index.js 文件里的<App/>)？

- <AppProvider><AppProvider/>本身要是双闭合的，React 组件中，单闭合的组件比如说<App/>,是没有 children 属性的。<AppProvider><App/><AppProvider/>。这种形式，React 会认为，AppProvider 有一个 children 属性叫做<App/>。
- 然后创建 AppProvider 组件时，在里面传入{children},也就是说 children 组件是在<AppContext.Provider></AppContext.Provider>里，使用它的 value 里对应的全局变量。
  children 这个属性非常适合要二次封装组件的时候使用，比如说一套网站，页脚和 Nav 都是一致的，只需要改变中间的内容就好，也就是我们的 child

```
 <AppContext.Provider
      value={{
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
        isSidebarOpen,
        isModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
```

4. 子组件使用全局变量。渲染到 AppProvider 之后， AppContext.Provider 里的 value 就绑定了全局变量，之后执行到 children。useContext(AppContext)返回绑定的全局变量.

5. 进而可以在子组件使用 useGlobalContext()获得全局变量。

## CSS 基础

- grid 如果不设置 grid-template-columns 默认一行一个 item，元素表现为 block。
- 对于图像：通常会处理图像的宽高, object-fit
- z-index:auto 和 0 是同一层。当没有指定 z-index 的时候， 所有元素都在会被渲染在默认层(0 层)。**也就是 auto 和 0 是同一层。**

## hero 布局

可以采用 grid 布局， 屏幕足够大的时候两栏布局 2:1【文字:图像】，屏幕变小后【抹去图像】。文字下有 button 跳转至 register 页面

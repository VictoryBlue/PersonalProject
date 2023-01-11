# sidebar

## useContext

### 自定义 hook

自定义 hook 需要以 use 开头，hook 只可以在自定义 hook 中以及组件中使用
使用自定义 hook 可以在子组件中让我们免于导入 useContext 和创建的 Context（AppContext .etc)

### provider 可以自己再包裹一层

```
const AppProvider = ({ children }) => {
return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};
```

```
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
```

### useContext 的两种写法

```
import { useGlobalContext } from './context';

const Modal = () => {
  const { closeModal, isModalOpen } = useGlobalContext();
  return (<></>)
  }
```

```
import { AppContext, useGlobalContext, useContext } from './context';
const Home = () => {
  const value = useContext(AppContext);
  return (<></>)
  }
```

## 布局

### 侧边栏

- 布局：使用 fixed, left:0, top:0 让 sidebar 脱离正常文档流（从上到下、从左到右的布局），这意味着 sidebar 在 html 中的书写位置并不重要。按照 html 顺序 sidebar 本来应该排在下面，但是我们可以通过这种方式将 sidebar 布置在左边。
- fixed 的使用会覆盖住正常文档流（没有设置定位）的元素

- 隐藏与展示：
  制作思路，先把 sidebar 以可见的方式做出来，然后样式再设置成默认隐藏，最后根据逻辑设置是否展示
  隐藏状态：transform：translate(-100%)
  展示状态：transform：translate(0)

### 媒体查询

当一个屏幕宽度同时满足两条规则时，执行的结果与 CSS 文件中规则摆放的顺序有关。

这种写法当屏幕宽度为 700px 时，sidebar 宽度为 0
顺序倒置 sidebar 宽度为 500px

```
@media screen and (min-width: 676px) {
  .sidebar {
    width: 400px;
  }
}

@media screen and (min-width: 500px) {
  .sidebar {
    width: 0px;
  }
}
```

## 动效

```
.sidebar-toggle {
  position: fixed;
  top: 2rem;
  left: 3rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  transition: var(--transition);
  cursor: pointer;
  animation: bounce 2s ease-in-out infinite;
}
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
```

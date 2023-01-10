# sidebar

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

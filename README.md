# The Dojo Blog
这是一个用React搭建的博客小项目.部署在[Netlify](https://reactdemo-dojo-blog.netlify.app)上,由于Netlify不能启动json-server，所以不是所有功能都可以启用。


Blog实现了Home、Navbar、Create、BlogList、BlogDetails等组件。
使用json-server模块模拟后端接口。


source:https://github.com/iamshaunjp/Complete-React-Tutorial/tree/main
## 下载依赖
```
npm install
```
## 模拟后端服务器
```
npx json-server --watch data/db.json --port 8000
```

## 启动项目
```
npm run start
```

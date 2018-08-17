# cnode-react

## 介绍
基于React构建的cnode开源社区，目前实现了浏览，分类和无限加载，登录，评论等功能，更多功能正在逐步完善中。

## 预览：
项目预览地址：http://134.175.64.55

## 技术栈
- React 16.4: 用于页面的渲染和加载展示。
- React-Redux: 管理项目中相关状态，实现组件之间的状态共享。
- React-Router: 实现项目中的路由切换。
- Redux-Saga: Redux的中间件，用于集中处理组件中的异步逻辑。
- Styled-Components: 配合React使用的CSS解决方案，使用组件化的方式书写CSS。
- Moment.js: 对服务器返回的时间进行格式化处理，转换成相应的格式。
- Axios: 用于向服务器发送异步请求。
- E6+: 项目整体使用es6+的语法。

## 运行
```
# install dependencies
npm install

# serve with hot reload
npm run start

# build for production
npm run build

# expose files about config
npm run eject
```

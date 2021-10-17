const express = require('express');
// 官方表示
// Note: We do not recommend installing this module globally.
// 不建议全局安装
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');


const app = express();

// 获取配置文件和编译器
const config = require("./lg.config.js");
const compiler = webpack(config);
console.log(typeof wtf);
// app.use([path,] callback [, callback...])
// 在指定的路径上挂载中间件函数, 当请求的路径与指定路径相匹配时, 中间件函数将被执行
app.use(webpackDevMiddleware(compiler));

// 创建http服务器监听3000端口
app.listen(3000, ()=>{
   console.log('服务运行在3000端口上');
});


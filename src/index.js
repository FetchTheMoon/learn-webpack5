// import {sum, square} from './js/utils.js'; // 通过手动引入, 必须加js后缀, 否则报错找不到文件
// const getInfo = require('./js/api.js'); // Uncaught ReferenceError: require is not defined
// // import './js/lg'; // 将log.js加入依赖图(注意现在就没有加js后缀)
//
// import './js/login';
//
// console.log(sum(10, 20));
// console.log(square(10));
// console.log(getInfo());


import './js/image';


/*
* asset 模块
* 1. asset/resource --> file-loader
* 2. asset/inline   --> url-loader
* 3. asset/source   --> raw-loader(很少用
* 4. asset
* */
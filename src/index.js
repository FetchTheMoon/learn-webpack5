import {sum, square} from './js/utils.js'; // 通过手动引入, 必须加js后缀, 否则报错找不到文件
const getInfo = require('./js/api.js'); // Uncaught ReferenceError: require is not defined

console.log(sum(10, 20));
console.log(square(10));
console.log(getInfo());
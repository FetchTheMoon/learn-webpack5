import 'core-js/stable';                // 使用useBuiltIns:'entry' 则需要自己在js中引入这两句
import 'regenerator-runtime/runtime';   // 使用useBuiltIns:'entry' 则需要自己在js中引入这两句


const title = '前端';
const foo = () => {
    console.log(title);
}


const p1 = new Promise((resolve, reject) => {
    console.log(111);
});

console.log(p1);


foo();

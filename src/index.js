import './title';
// 在入口文件将想要具备热更新的文件加入到accept
if(module.hot){
    module.hot.accept(['./title.js'], ()=>{
        console.log("回调");
    });
}
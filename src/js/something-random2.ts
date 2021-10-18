module.exports = {
    tsFn: () => console.log("this module from typescript"),
    promise: () => new Promise((resolve, reject) => {
    }),

}
let add = (a: number, b: number) => a + b

console.log(add(3,1));


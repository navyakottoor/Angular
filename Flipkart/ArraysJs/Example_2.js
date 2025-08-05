let arr2 = [72, 50, 38, 45, 10, 82, 1];


console.log(arr2.map((obj) => obj+(obj*0.1)));

let str = "hello world";
let res = str.split(" ").reduce((p, c) => {
    return c + p;
});
console.log(res);
// <!-- 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class' -->

// let str = 'this is javascript class';
// let res = str.toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// console.log(res);

let str = 'this is javascript class';
let res = "";

let arr = str.split(' ');
for(let s of arr) {
    res += s.replace(s.charAt(0), s.charAt(0).toUpperCase()) + " ";
}
console.log(res.trim());

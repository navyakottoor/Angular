//  1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas' 

// let str = "sachin";
// let reverse = "";
// for (char of str) {
//     reverse = char + reverse;
// }
// console.log(reverse);

let str = "sachin";

let res = "";
for(let i = -str.length; i <= -1; i++){
    res =  str.at(i) + res ;
}
console.log(res);


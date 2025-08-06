// <!-- 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript -->

    // let s1 = 'this is javascript class';
    // let arr = s1.split(' ');
    // let longestLength = arr.reduce((a,b) => a.length >= b.length ? a : b);
    // console.log(longestLength) ;



let s1 = 'this is javascript class';
let arr = s1.split(" ");
// let len = 0;
// let longestWord = "";
// for(let s of arr.re) {
//     if(len < s.length) {
//         len = s.length;
//         longestWord = s;
//     }
// }
// console.log(longestWord);

let longestLength = arr.reduce((a,b) => 
    {
        // console.log(a + " " + b);
        return a.length >= b.length ? a : b
    });
console.log(longestLength);
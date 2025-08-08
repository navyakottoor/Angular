// let str = 'entertainment';
// let occurArray = {};

// //
// str.split("").sort().reduce((ab,chr) => {
//     if(prev === curr) {
//           occurArray[prev] = (occurArray[prev] || 0) + 1;
//         // console.log(occurArray[prev]);
//     }
//     return curr;
// });
// console.log(str.split("").sort());

// // print the No of occ of each string
// console.log(occurArray);
// for(i = 0; i <= str.length; i++) {
//     if(occurArray[str.charAt(i)] >= 1) {
//         console.log( + "  " + occurArray[str.charAt(i)]);
//     }
// }











let inputString = 'entertainment';

let output = inputString.split("").reduce((obj, curr) => {
    // console.log(inputString.split(""));
    obj[curr] = (obj[curr] || 0) + 1;
    return obj;
}, {});

console.log(output);
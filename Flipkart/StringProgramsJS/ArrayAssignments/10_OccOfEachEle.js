// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

input = [10,20,30,40,50,10,30,50];
let res = input.reduce((a,b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
}, {});
console.log(res);
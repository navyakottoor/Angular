let arr = ["ball", "appleball", "cat"];

arr.sort();

console.log(arr);

// loop, for in for , for each

delete arr[0];
console.log(arr); // len = 3


let arr1 = [1, 2, 3, 4, 5, 6];

arr1.splice(2,1); // index, no_of_delete, add_new_element, ....

//Search
let arr2 = [72, 50, 38, 45, 10, 82, 1];

console.log(arr2.find(72));
// Create a function reverseArray(arr) that returns a reversed copy of the array 
// without using .reverse()

function reverseArray(arr) {
    let res = [];
    for(let i = arr.length-1; i >= 0; i--) {
        res.push(arr[i]);
    }
    return res;
}

let arr = [1, 2, 3, 4];
res = reverseArray(arr);
console.log(res);
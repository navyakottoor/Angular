// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

let input = 'hello world';

// extract obj of chars with its repetation number
let output = input.split("").reduce((obj, initalVal) => {
    obj[initalVal] = (obj[initalVal] || 0) + 1;
    return obj;
}, {});

//now iterate the char arr output to find the max count and max count char.
let maxCount = 0;
let maxChar = '';
for(let c in output) {
    if(output[c] > maxCount) {
        maxCount = output[c];
        maxChar = c;
    }
}

//print the result
console.log(maxChar + " " + maxCount);

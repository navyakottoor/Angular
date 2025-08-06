// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let input = 'Hell3o Wor4ld';

let res = input.split(" ").reduce((a,b) => {
    let word = '';
    for(let chara of b) {
        if(chara.charCodeAt(0) >= 65 && chara.charCodeAt(0) <= 90) {
            word += chara.toLowerCase();
        } else if(chara.charCodeAt(0) >= 97 && chara.charCodeAt(0) <= 122) {
            word += chara.toUpperCase();
        } else {
            word += chara;
        }
    }
    a[b] = word;
    return a;
}, {});

console.log(res);
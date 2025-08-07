// 6. convert array of letters to array of words
// 		const inputArr = [ 
// 				'b', 'a', 'k', 'e', '',
// 				'c', 'a', 'k', 'e', '',
// 				'e', 'a', 't'
// 				];
// 	   output = ['bake','cake','eat'];

const inputArr = [ 
				'b', 'a', 'k', 'e', '',
				'c', 'a', 'k', 'e', '',
				'e', 'a', 't'
				];
let c = '';
let res = inputArr.reduce((a,b) => {
    if(!b.match(/[a-zA-Z]/)) {
        b = b + ' ';
    }
    a = a+b;      
    return a;
},'');

console.log(res);
let str = "Java Script v %1.0 and #20";
console.log(str.charCodeAt(0)); //115 gives the ascii value for the index of that string
console.log(str.charAt(0)); //s gives the char at that specified index
console.log(str.at(-5)); //i sachin - 012345, -5-4-3-2-1
console.log(str.indexOf("Java",3)); // search string, index to begin search
console.log(str.lastIndexOf("av")); //gives last index of the specified substring
console.log(str.match("J")); //takes the regex and gives array of all the substring occurances
console.log("***");
const matchRes = str.matchAll(/[^a-zA-Z]/g); //
for(const i of matchRes) {
    console.log(i.index , i[0], i);
} //-1 
console.log(str.replace(/a/, "b")); // substing , replacevalue
console.log(str.replaceAll(/a/g, "b")); // replaces all
console.log("******");
console.log(str.repeat(1)); // repeates specified no of times
console.log(str.repeat(4)); // repeates 
console.log(str.search(/a/g)); // repeates 

// let a = 's';
// let b = ['s'];
// console.log("*******");
// console.log(a == b);
// console.log(a === b);
let user = {name: 'sachin', age: 35, 'last name': 'Tendulkar', add: 'mumbai'};

console.log(user.name);
console.log(user['age']);

console.log(['last name']);

let a = 'age';
console.log(user[a]);

for(key in user) {
    console.log(key + "  " +user[k]);
}
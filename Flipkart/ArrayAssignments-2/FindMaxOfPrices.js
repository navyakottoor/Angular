const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 75000, stock: 10, rating: 4.5 },
  { id: 2, name: "Smartphone", category: "Electronics", price: 40000, stock: 0, rating: 4.2 },
  { id: 3, name: "Book", category: "Education", price: 500, stock: 100, rating: 4.9 },
  { id: 4, name: "Desk Chair", category: "Furniture", price: 3500, stock: 25, rating: 4.0 }
];

let arr = products.reduce((max, curr) => {
        if(max>curr.price)  {
            max = max;
        } else {
            max = curr.price;
        }
        return max;
}, 0);
console.log(arr);


// let res = products.sort((a,b) => {
//     return a.price - b.price;
// });
// console.log(res[res.length-1]);
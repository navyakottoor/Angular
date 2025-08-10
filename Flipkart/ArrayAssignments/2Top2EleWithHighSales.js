// 2. Get the top 2 products with highest total sales (price × quantity)
// Output: ["Phone", "Tablet"]
const products = [
  { name: "Laptop", price: 1000, quantity: 4 },
  { name: "Phone", price: 500, quantity: 10 },
  { name: "Tablet", price: 800, quantity: 5 }
];

let res = products.reduce((a, b) => {
    b.price = b.price*b.quantity;
      a[b] = b;
    return a;
}, []);
console.log(res);
// res.sort( (ele1, ele2) => ele1.price-ele2.price);
// console.log(res);

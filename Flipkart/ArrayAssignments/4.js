// 4. Get list of customers who placed orders in the last 30 days
const orders = [
  { id: 1, customer: "Alice", date: "2025-07-20" },
  { id: 2, customer: "Bob", date: "2025-08-05" },
  { id: 3, customer: "Charlie", date: "2025-06-15" }
];
// Assume today = 2025-08-08   // Output: ["Alice", "Bob"]

let today = new Date();
let last30Days = new Date();
last30Days.setDate(today.getDate()-30);
let res = orders.filter( ele => {
    let orderDate = new Date(ele.date);
    return (orderDate >= last30Days && orderDate <= today); 
});
console.log(res);
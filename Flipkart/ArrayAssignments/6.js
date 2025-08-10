// 6. Merge orders with customer details (join by id)
const customers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const ordersList = [
  { orderId: 101, customerId: 1 },
  { orderId: 102, customerId: 2 }
];
// Output: [
//   { orderId: 101, customerId: 1, name: "Alice" },
//   { orderId: 102, customerId: 2, name: "Bob" }
// ]

let res = ordersList.reduce( orderEle => {
    let customers = customers.filter(custEle => custEle.id = orderEle.customerId);
    
    return{
        ...orderEle,
        name: customers.name 
    }
});4

console.log(res);
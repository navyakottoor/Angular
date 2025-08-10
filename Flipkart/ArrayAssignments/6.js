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

let res = ordersList.map( orderEle => {
        let cust = customers.find(customerObj => customerObj.id === orderEle.customerId)
        return { ...orderEle, name: cust.name};
});

console.log(res);

// 1. Find the department with the highest average salary
// // Output: "IT" (average salary 55000);

const employees = [
  { name: "Alice", department: "HR", salary: 40000 },
  { name: "Bob", department: "IT", salary: 50000 },
  { name: "Charlie", department: "IT", salary: 60000 },
  { name: "David", department: "HR", salary: 45000 }
];
let sum = employees.reduce((prev, curr) => {
  prev = prev + curr.salary;
  return prev;
}, 0);

let res = employees.sort().find(ele => {
  if( ele.salary > sum/employees.length){
    return ele.department;
  }
});

console.log(res);
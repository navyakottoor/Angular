// 4. declare array of employees & increase sal of every employee by 500;

let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  //wrong with reduce we overwriting the same prev[curr] which is prev[object]
//     let empRes1 = employees.reduce((prev, curr) => {
//         prev[curr] = curr.sal + 500;
//         return prev;
//     }, {});
//   console.log("empRes1 - ");
//   console.log(empRes1);
//   console.log("****");
//   console.log("****");

// Have to build arr using reduce to store the each obj in empRes2
  let empRes2 = employees.reduce((prev, curr) => {
    prev.push({
        ...curr,
        prev: curr.sal + 500
    });
    return prev;
  }, []);
  console.log("empRes2 - ");
  console.log(empRes2);
  console.log("****");
  console.log("****");


let empRes3 = employees.map(emp => { // here emp is a obj ref of each employee obj 
    return {
        ...emp, // here we create a clone of map's emp  obj - shallow clone - here copies by values so no problem
        sal: emp.sal + 500 // modify the sal property of the new cloned emp obj
    } //now you returning all whole clone obj on each iteration to empRes Obj arr
});
  console.log("empRes3 - ");
  console.log(empRes3);

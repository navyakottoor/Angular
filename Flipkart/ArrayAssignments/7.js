// 7. Find overlapping bookings
const bookings = [
  { id: 1, start: "2025-08-01", end: "2025-08-05" },
  { id: 2, start: "2025-08-04", end: "2025-08-06" },
  { id: 3, start: "2025-08-10", end: "2025-08-12" }
];
// Output: [[1,2]]  // booking 1 and 2 overlap

let res = bookings.reduce( (obj1, obj2) => {
    let sDateO1 = new Date(obj1.start);
    let eDateO1 = new Date(obj1.end);
    let sDateO2 = new Date(obj2.start);
    if(sDateO2 >= sDateO1 && sDateO2 >= eDateO1) {
        return obj1,obj2;
    }
}, []);
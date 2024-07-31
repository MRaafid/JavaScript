let a = new Date();
console.log(a.toLocaleString()); 
// Output: 31/7/2024, 4:57:12 pm
// will give the in the format of the device using at the time
// toLocaleDateString() --> will give just date
// toLocaleTimeString() --> will give just time

console.log(a.toString());
//Output: Wed Jul 31 2024 17:00:51 GMT+0530 (India Standard Time)
// date.toDateString() --> date
// date.toTimeString() --> time

console.log(a.toISOString());
//Output: 2024-07-31T11:35:10.289Z
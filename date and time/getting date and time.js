let a = new Date();
console.log(a);
//Output: 2024-07-31T10:14:14.418Z
//2024-07-31 --> date in the format yyyy-mm-dd
//T--> indicates time starts from here
// 10:14:14.418 --> Hr:min:sec:milisec
// Z --> Coordinated Universal Time (UTC)/Zulu Time
console.log(a.getFullYear()); 
// 2024 --> will get the year from a
console.log(a.getMonth()); 
// month
//note: months are numbered from 0
//jan-->0 & Dec-->11
console.log(a.getDate());   
// date
console.log(a.getHours());
// hours in local time
console.log(a.getUTCHours());
//hours in UTC
console.log(a.getMinutes());
//Minutes in local time
console.log(a.getUTCMinutes());
//Minutes in UTC
console.log(a.getSeconds());
//Minutes in local time
console.log(a.getUTCSeconds());
//Minutes in UTC
console.log(a.getMilliseconds());
//Minutes in local time
console.log(a.getUTCMilliseconds());
//Minutes in UTC
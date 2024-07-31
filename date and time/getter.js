let a = new Date();
console.log(a.getDate())
console.log(a.getDay()) 
// Will get the day 0--> Sununday and 6--> Saturday
console.log(a.getMonth()) 
//month starting from 0
console.log(a.getFullYear())
console.log(a.getMinutes())
// all in local time
console.log(a.getUTCDay());
//in UCT
console.log(a.getTime());
//number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix Epoch).
console.log(a.getTimezoneOffset());
// Difference in minutes between local time and UTC
//negitve indicate local time is ahead of UTC


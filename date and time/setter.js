let a = new Date();
a.setDate(10);
a.setFullYear(1999);
a.setHours(0);
a.setMinutes(0);
a.setMonth(3)
// this will set the month to april
a.setMilliseconds(0);
console.log(a)
// output: 1999-04-09T18:30:23.000Z
console.log(a.toString());
// output: Sat Apr 10 1999 00:00:23 GMT+0530 (India Standard Time)
// hour, date and munitus will only change local time valueS


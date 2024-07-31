let a = "Hello, World!";
let b = a.slice(2, 5);
console.log(b); // output: llo
// 2 start index & // 5 end index n umber
// h-0, e->1, l->2
// it will delete all elements other than one in between strat and end index
// end will not be included in the final result
let c = a.slice(2, 8); 
console.log(c);  // output: llo, W
// special character will and space is also considered as a index
let d = a.slice(-1, 8); 
console.log(d);  // there will be no output or empty string
//-1 is equalent to 0 from right
//it will not slice right to left
let e = a.slice(-4, -1); 
console.log(e);  // output: rld



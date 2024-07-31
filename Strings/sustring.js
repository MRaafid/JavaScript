let a = "Hello, World!";
let b = a.substring(2, 5);
console.log(b); // output: llo
// 2 start index & // 5 end index n umber
// h-0, e->1, l->2
// it will delete all elements other than one in between strat and end index
// end will not be included in the final result
let c = a.substring(2, 8); 
console.log(c);  // output: llo, W
// special character will and space is also considered as a index
let d = a.substring(-1, 8); 
console.log(d);  // Hello, W
//-1 will be considered as 0
let e = a.substring(-4, -1); 
console.log(e);  // output: there will be no output or empty string
//4, -1 Both indices are treated as 0
// so it is equvalent to a.substring(0, 0);


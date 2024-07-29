let a =[1,2,3,4];
console.log(a); // output: [ 4, 3, 2, 1 ]
a.reverse();    // will reverse the array
console.log(a); // output: [ 4, 3, 2, 1 ]

let b = [1,2,3,4];
let c = b.reverse(); // Mutator Method
// even if u have not equated b to  b.reverse() it will change the orginal array
console.log(b); // output: [ 4, 3, 2, 1 ]


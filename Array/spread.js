let a =[1,2,3,4];
let b= [2,6,6,7];

//cloning using spread
let c =[...a]; // clones a
console.log(c) //output: [ 1, 2, 3, 4 ]

// combining using spread
let d =[...a,...b]; // combines array a & b
console.log(d) //output: [1, 2, 3, 4, 2, 6, 6, 7]



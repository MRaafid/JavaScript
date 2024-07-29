console.group('Using New')
    let a = new Array('apple','bat');
    console.log(a); // Output: [ 'apple', 'bat' ]
    let e = new Array(1,2); 
    console.log(e); // Output: [ 1, 2 ]
    let b = new Array(10); // will create an empty array with 10 items
    console.log(b); // Output: [ <10 empty items> ]
    // to add eliment we need to Manualy add using push
console.groupEnd();
console.group('Using array of')
    let c = Array.of(1,2,3,4,5);
    console.log(c);   // Output: [ 1, 2, 3, 4, 5 ]
    let d = Array.of(10); 
    // will create an array with element 10, not with 10 elements
    console.log(d);   // Output: [ 10 ]
console.groupEnd();
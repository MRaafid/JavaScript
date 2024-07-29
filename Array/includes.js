console.group('array of numbers');
    let a = [1,2,3,4]
    console.log(a.includes(3)); //Output: true
    console.log(a.includes(7)); //Output: false
console.groupEnd();
console.group('array of strings');
    let b = ['ant','cat','cow'];
    console.log(b.includes('cow')); //Output: true
    console.log(b.includes('dog')); //Output: false
console.groupEnd();
console.group('To check if it exists in the mentioned index');
    let c = [1,2,3,4]
    console.log(c.includes(3,2)); //Output: true
    console.log(c.includes(3,3)); //Output: false
    // will strat to search the values from the mentioned index number
console.groupEnd();


console.group('Number to BigInt');
    let a = 10;
    let b = BigInt(a)
    console.log(typeof a);
    console.log(typeof b);
    let c = 9.7
    //let d = BigInt(c) this will not give the value because the number is in float
    let c1 = Math.round(c)
    let d = BigInt(c1)
    console.log(typeof c);
    console.log(typeof d);
console.groupEnd();


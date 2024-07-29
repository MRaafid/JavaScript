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
console.group('Number to string');
    let e = 10;
    let f = String(e)
    console.log(typeof e);
    console.log(typeof f);
console.groupEnd();
{
    console.group('string to Number');
    let e = '10';
    let f = Number(e)
    console.log(typeof e);
    console.log(typeof f);
console.groupEnd();
}

{
    console.group('array to string');
    let a = ['a','b','c'];
    let b = String(a)
    console.log(typeof e);
    console.log(typeof f);
    console.groupEnd();
}


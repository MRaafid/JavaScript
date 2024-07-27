console.group('Global');
    a=100;
    a=1000;
    console.log(a);
    {
        a=100
        console.log(a);
    }
    console.log(a);
console.groupEnd();

console.group('var');
    var b =100;
    var b =1000;
    console.log(b);
    {
        var b = 100
        console.log(b);
    }
    console.log(b);
console.groupEnd();

console.group('let');
    let c = 100;
    console.log(c);
    c = 23;
    console.log(c);
    {
        let c = 57
        console.log(c);
    }
    console.log(c);
console.groupEnd();

console.group('let');
    const d = 100;
    // d = 100; this will give an error
    console.log(d);
    d = 23;
    console.log(d);
    {
        const d = 57
        console.log(d);
    }
    console.log(d);
console.groupEnd();
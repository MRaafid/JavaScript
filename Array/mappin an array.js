let a = [1,2,3,4];

{
    console.group('Basic Transformation')
    let a2= a.map(b => b*2)
    // will multiply all element of array a with 2
    console.log(a2)
    console.groupEnd();
}
{
    console.group('For an object')
    let a = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ];
    let a2= a.map(b => b.age+1);
    // will aded 1 to the age give the output
    console.log(a2)
}


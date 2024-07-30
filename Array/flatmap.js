{
    let a = [1,[2,3],['sex', ['M','F']],]
    {
        let b = a.flatMap(a=>a) // will remove 1 nested
        // can remove by only 1 depth
        console.log(b) // [ 1, 2, 3, 'sex', [ 'M', 'F' ] ]
    }
    {
        let b = a.flatMap(a=>a*2) // Will multiple the array by 2
        // cannot petform on nested
        console.log(b) // [ 2, NaN, NaN ]
    }
}
{
    let a = ['hello worlld']
    let b = [1,2,3,4,5]
    let c = a.flatMap(a=>a.split()); // splic can be used
    console.log(c);
    let d = b.flatMap(a=>[a,a*2]); // map and flatten
    let e = b.map(a=>[a,a*2]);  // will only map
    console.log(d); // output: [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
    console.log(e); // output: [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]
}
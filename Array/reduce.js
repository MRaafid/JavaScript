let a = [1,2,3,4,5]
{
    let b = a.reduce ((a,b)=> a+b); // will add all the elements of the array
    console.log(b); // output: 15
}
{
    let b = a.reduce ((a,b)=> a+b,5); // sum of elements of the array + 5
    console.log(b); // output:20
}
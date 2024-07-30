let a=[1,2,3,4,5]
{
    let b = a.slice();// this will copy the whole array
    console.log(b); // output: [ 1, 2, 3, 4, 5 ]
}
{
    let b = a.slice(2);// this will copy all elements from index number 
    console.log(b); // output: [ 3, 4, 5 ]
}
{
    let b = a.slice('',4);// this will copy all elements till the mentioned index number
    //the mentioned end endex number will not be included
    console.log(b); // output: [ 1, 2, 3, 4 ]
}
{
    let b = a.slice(2,4);// this will copy all elements from index number to the mentioned index number
    //the mentioned end endex number will not be included
    console.log(b); // output: [ 3, 4 ]
}
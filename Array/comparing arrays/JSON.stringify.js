let a = [1,2,3,4];
let b = [1,2,3,4];
let d =[4,3,2,1];
let c = ['cat','bat','rat'];


{
    let z = JSON.stringify(a) === JSON.stringify(a); 
    console.log(z) // true
}
{
    let z = JSON.stringify(a) === JSON.stringify(c); 
    console.log(z) // false
}
{
    let z = JSON.stringify(a) === JSON.stringify(d); 
    console.log(z) // false
    // wil not work if the even one element order is different
}




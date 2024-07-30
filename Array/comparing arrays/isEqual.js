const _ = require('lodash');
let a = [1,2,3,4];
let b = [1,2,3,4];
let d =[4,3,2,1];
let c = ['cat','bat','rat'];

{
    let z = _.isEqual(a,b) 
    console.log(z) 
}
{
    let z = _.isEqual(a,c) 
    console.log(z) 
}
{
    let z = _.isEqual(a,d) 
    console.log(z) 
}


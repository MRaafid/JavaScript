console.group(Number);
let a = 100 
console.log(typeof a);
console.groupEnd();

console.group(String);
    let b = '100';
    let c = 'apple';
    let d = '12apple';
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
console.groupEnd();

console.group(Boolean);
    let e = true;
    let f = false;
    console.log(typeof e);
    console.log(typeof f);
console.groupEnd();

console.group(BigInt);
    let g = 121243546547566n;
    console.log(typeof g);
console.groupEnd();

console.group(BigInt);
    let h
    console.log(typeof h);
console.groupEnd();

console.group(Object);
    let i = {
        Name: 'Zoro',
        Age: 21,
        Divil_Fruit: 'None',
        Wepon: 'Sword'
    };
    console.log(typeof i);
console.groupEnd();

console.group(Array);
    let j = [1,2,3,4] // array of numbers
    let k = ['a','b','c'] // arrray of strings
    let l = [{name:'xyz', age: 23}, {name:'pqr', age: 28}] // array of objects
    let m = [1,2,'a','b',{name:'xyz', age: 23}] // combination
    console.log(typeof j);
    console.log(typeof k);
    console.log(typeof l);
    console.log(typeof m);
console.groupEnd();

function ppl(name)
    {
        return console.log(`Hello ${name}, Welcome`)
    }
ppl('luffy')

console.group(Date);
    let today = new Date();
    console.log(today);
console.groupEnd();

console.group(Symbol);
    let symbol1 = Symbol();
    let symbol2 = Symbol('description');
    let symbol3 = Symbol('description'); // Different from symbol2
    console.log(symbol1); // Output: Symbol()
    console.log(symbol2); // Output: Symbol(description)
    console.log(symbol3); // Output: Symbol(description)
    console.log(symbol2 === symbol3); // Output: false
console.groupEnd();
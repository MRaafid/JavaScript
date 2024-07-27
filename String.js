let name = 'Zoro';
let age = '21';
let color = 'green';
let Village = 'Shimotsuki Village';
let location = 'East Blue'; 
let a = Village + location;

console.group('Add String');
    console.log(a); // output Shimotsuki VillageEast Blue
    let b = Village + ' ' +location;
    console.log(b); // output Shimotsuki Village East Blue
console.groupEnd();

console.group('Multiple Quotes');
    // let c = ''dog' or 'cat'';  This will give an error
    let c = '\'dog\' or \'cat\''; // thus we will need to add \ 
    console.log(c) // output: 'dog' or 'cat'
console.groupEnd();


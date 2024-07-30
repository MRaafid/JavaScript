let a = {name: 'zoro', age: 27};
let b = {gender: 'M'};
let c = {city: 'ABD', Zip: '1234'};

let z = {
    ...a,   // we can copy 1 object
    ...b,   // we can copy multipy objects
    adress: {...c},  // we can create a propety and add a object as nested
    cont: 12332445463  // we can add our own property
};

console.log(z)


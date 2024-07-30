let a = { 
    name: 'zoro',
    age : 23,
    sex: 'M'
}

let z = Object.getOwnPropertyDescriptor(a, 'name');
console.log(z) // output: { value: 'zoro', writable: true, enumerable: true, configurable: true }


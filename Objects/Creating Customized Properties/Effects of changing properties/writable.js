let a = { name: 'zoro',age : 23,sex: 'M'}
    // changing writable
    Object.defineProperty(a, 'name', {writable: false});
    let z = Object.getOwnPropertyDescriptor(a, 'name');
    console.log(z) // output: { value: 'zoro', writable: false, enumerable: true, configurable: true }

a.name = 'Nami';
console.log(a); // output: { name: 'zoro', age: 23, sex: 'M' }
// no change as writable permission is set to false



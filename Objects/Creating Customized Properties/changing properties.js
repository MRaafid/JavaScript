{
    let a = { 
        name: 'zoro',
        age : 23,
        sex: 'M'
    }
    // changing value
    Object.defineProperty(a, 'name', { value: 'nami'});
    console.log(a); // { name: 'nami', age: 23, sex: 'M' }
}
{
    let a = { name: 'zoro',age : 23,sex: 'M'}
    // changing writable
    Object.defineProperty(a, 'name', {writable: false});
    let z = Object.getOwnPropertyDescriptor(a, 'name');
    console.log(z) // output: { value: 'zoro', writable: false, enumerable: true, configurable: true }
}

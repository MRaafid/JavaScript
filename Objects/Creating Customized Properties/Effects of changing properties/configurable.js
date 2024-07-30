let a = { name: 'zoro',age : 23,sex: 'M'}
    // changing writable
    Object.defineProperty(a, 'name', {configurable: false});
    let z = Object.getOwnPropertyDescriptor(a, 'name');
    console.log(z) // output: { value: 'zoro', writable: true, enumerable: true, configurable: false }

a.name = 'nami';
console.log(a); // output: { name: 'nami', age: 23, sex: 'M' }

delete a.name; // will not works as configurable: false
console.log(a); // { name: 'nami', age: 23, sex: 'M' }

try{
    Object.defineProperty(a, 'name', {writable: false, enumerable: false});
    let y = Object.getOwnPropertyDescriptor(a, 'name'); // output will be error: as configurable: false
}catch{
    console.log('error!: writable and enumerable properties cannot be changed');
} 
try{
    Object.defineProperty(a, 'name', {configurable: true}); // output will be error: as configurable: false
    let u = Object.getOwnPropertyDescriptor(a, 'name');
}catch{
    console.log('error!: configurable property cannot be changed');
}    
    
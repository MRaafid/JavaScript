let a = { name: 'zoro',age : 23,sex: 'M'}
    // changing writable
    Object.defineProperty(a, 'name', {enumerable: false});
    let z = Object.getOwnPropertyDescriptor(a, 'name');
    console.log(z) // output: { value: 'zoro', writable: true, enumerable: false, configurable: true }

for (const key in a) {
    console.log(`${key}: ${a[key]}`)
}
    
/* 
    Output:
        age: 23
        sex: M
        name is not show as enumerable is set to false
*/


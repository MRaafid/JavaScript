let obj = { name: 'zoro', age: 23 };
console.log(Object.hasOwn(obj, 'name')); // true
console.log(Object.hasOwn(obj, 'sex'));  // false 
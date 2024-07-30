let a = 'hello every one'

// will chcek if it ends with the mentioned word
console.log(a.endsWith('y one')); // true
console.log(a.endsWith('y on')); // false
console.log(a.indexOf('one')); // 12
//h->0, e->1, l->2, l-> 3, ... O->12
// speace is also considered as one index
console.log(a.indexOf('o')); // 4
// since there are multiple o it will give the valve of first one from left
console.log(a.indexOf('ee')); // -1 since it doesnt exist
console.log(a.lastIndexOf('one')) // 12 same as index of
console.log(a.lastIndexOf('o'))
// since there are multiple o it will give the valve of first one from right
console.log(a.lastIndexOf('ee')); // -1 since it doesnt exist
console.log(a.includes("y one")); // true
console.log(a.includes('ee')); // false
console.log(a.startsWith("hello e")) // true
console.log(a.startsWith("one")) // false

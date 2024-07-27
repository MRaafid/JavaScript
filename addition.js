a = Number.MAX_SAFE_INTEGER;
console.log(a);

console.group('Unicode');
    console.log(`copyRight: '\u00A9'`)
    console.log(`hash: '\u0023'`)
    console.log(`ae: '\u1D01'`)
console.groupEnd();

console.group('New line');
    console.log(`A \nB`);
console.groupEnd();

console.group('Length');
    let num = 34;
    console.log(num.length); // not aplicable for numbers thus output is undifined
    let str ='34';
    let str2 = 'apple';
    console.log(str.length); 
    console.log(str2.length); // gives number of character in the string
    let arystr = ['apple','banna','cat'];
    console.log(arystr.length); // number of elements in the array
    let obj = {name:'xyz', age: 23};
    console.log(obj.length); // not applicable thus undifined
console.groupEnd();
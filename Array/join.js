let a = ['a','p','p','l','e'];

console.group('join()');
    console.log(a.join());
    // will conver the whole array into a single string comma included
console.groupEnd();
console.group(`join('')`);
    console.log(a.join(''));
    // will conver the whole array single string
    // commas will not be included
console.groupEnd();
console.group(`join(' ') space in between the double quotes`);
    console.log(a.join(' '));
    // will conver the whole array into a single
    // commas will not be included
    // but a space will be added after each element
console.groupEnd();
console.group(`join('_')`);
    console.log(a.join('_'));
    // _ will be added after each element
    // _ can be replaced with any character or numbers 
console.groupEnd();


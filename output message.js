const data = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 25 }
];
console.log(`output message`)
console.error('This is an error message');
console.warn('This is a warning message');
console.info('This is an informational message');
console.debug('This is a debug message');
console.group('Group of messages');
    console.log('Message 1');
    console.error('This is an error message');
console.groupEnd();

console.table(data);

console.group('Asssert');
    console.assert(1 === 2, 'This will display because the assertion failed');
    console.assert(1 === 1, 'This will display because the assertion failed');
console.groupEnd();

console.group('Counter');
    console.count('Counter');
    console.count('Counter');
    console.countReset('Counter');
    console.count('Counter');
console.groupEnd();

console.group('excution time');
    console.time('Sum');
        let a = 100;
        let b = 150
        let sum = a + b;
    console.timeEnd('Sum');
console.groupEnd();

alert(`welcome`)
confirm('Do you want to proceed?');
prompt('Please enter your name:');


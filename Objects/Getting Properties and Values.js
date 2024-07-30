const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
  };

console.log(Object.keys(person)) // output: [ 'name', 'age', 'job' ]
// will give the properties
console.log('');
console.log(Object.values(person));  // output: [ 'Alice', 30, 'Engineer' ]
// will give the valuse of the properties
console.log(Object.entries(person));  // output: [ [ 'name', 'Alice' ], [ 'age', 30 ], [ 'job', 'Engineer' ] ]
console.log(person) // output: { name: 'Alice', age: 30, job: 'Engineer' }



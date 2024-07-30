const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
  };

Object.seal(person);
person.sex = 'M'    // property not added
console.log(person) // Output: { name: 'Alice', age: 30, job: 'Engineer' }
person.job = 'cop'  // will modify 
console.log(person) // Output: { name: 'Alice', age: 30, job: 'cop' }
delete person.job   // cannot delete
console.log(person) // Output: { name: 'Alice', age: 30, job: 'cop' }

// here only property modification possible


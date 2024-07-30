const person = {
    name: 'Alice',
    age: 30,
    job: 'Engineer'
  };

Object.freeze(person);
person.sex = 'M'    // property not added
console.log(person) // Output: { name: 'Alice', age: 30, job: 'Engineer' }
person.job = 'cop'  // will not modify 
console.log(person) // Output: { name: 'Alice', age: 30, job: 'Engineer' }
delete person.job   // cannot delete
console.log(person) // Output: { name: 'Alice', age: 30, job: 'Engineer' }

// here only property modification possible


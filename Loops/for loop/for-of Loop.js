const check = (obj) => 
    {
        
        if(obj.age<18)
            {
                console.group(`License Application`)
                    console.log(`Hello ${obj.name}, Welcome to RTO`)
                    console.log(`You are not eligible to apply for driver's License`)
                    let a = 18 -obj.age;
                    console.log(`Try after ${a} years`);
                console.groupEnd()
            }
        else
            {
                console.group(`License Application`)
                    console.log(`Hello ${obj.name}, Welcome to RTO`)
                    console.log(`You are eligible to apply for driver's License`)
                console.groupEnd()
            }
    }

const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 17, gender: "male" },
    { name: "Charlie", age: 16, gender: "male" },
    { name: "Diana", age: 30, gender: "female" },
    { name: "Eva", age: 12, gender: "female" }
];

const greeting = (obj) => console.log(`Hello ${obj.name}!`);

console.group(`Greeting using function`)
    for (const obj of people) // using function
        {
            greeting(obj);
        }
console.groupEnd()

console.group(`Greeting`)
    for (const a of people) 
        {
            console.log(`Hello ${a.name}!`)
        }
console.groupEnd()

for (const obj of people) 
    {
        check(obj);
    }

console.group(`In strings`)         //Output: will print each character/letter seperately
    let z = 'ZORO'                  // Z
    for (const letter of z)         // O
        {                           // R
            console.log(letter);    // O
        }
console.groupEnd()
console.group(`In Array`)           //Output: will print each index value seperately
    let Z = [1,2,3,4]               // 1
    for (const index of Z)          // 2
        {                           // 3
            console.log(index);     // 4
        }
console.groupEnd()


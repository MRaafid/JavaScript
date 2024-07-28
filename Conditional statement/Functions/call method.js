let person1 = {
    name: "Alice Johnson",
    age: 28,
    gender: "F",
    weight: 68, // in kilograms
    height: 165 // in centimeters
};

let a = function()
    {
        console.log(`Welcome ${this.name}!`);
    }
a.call(person1);



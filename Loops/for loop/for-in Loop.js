const people = { 
    name: "Alice", 
    age: 25, 
    gender: "female" 
};

console.group(`To print the property`);
    for (const key in people) 
        {
            console.log(key);
        }
console.groupEnd();

console.group(`To print the Value`);
    for (const key in people) 
        {
            const element = people[key];
            console.log(`${element}`);
        }
console.groupEnd();



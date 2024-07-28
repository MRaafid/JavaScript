let person = {
    name: "Jane Smith",
    age: 28,
    address: {
        street: "456 Elm St.",
        city: "Othertown",
        postalCode: "67890"
    }
};

let a = person.address.country; // this will give the output as undefined as the mentioned doesnot exist
let b = person.address?.country; // this will give the output as undefined
let c = person.address?.country ?? 'N/A'; // will give the output as N/A if the mentioned desnot exist
console.log(a);
console.log(b);
console.log(c);
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

details= function (city,discount)
    {
        console.log(`${this.name} order a ${this.product} from ${city} for $${this.price} at ${discount}% Off`)
        // here city and discount is not included in the object
        // thus is not included with .this
    }

const Item1 =   {   
    name: "John",
    product: "Shirt",
    price: 25.99,
};

details.call(Item1,'Mangalore',10) // here mangalore and qo will fill the empty city and discount
// the first one mentioned will will be assigngt to the first empty variable (from left to right)



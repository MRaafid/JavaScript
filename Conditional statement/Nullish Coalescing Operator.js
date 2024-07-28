function greet(a)
    {
        let c = 'User';
        console.log(`hello ${a || c}`); // it will use the value of c if a is null (no value is added)
    }
greet(); 
greet(1);
greet('Zoro');

function Qty(a)
    {
        let c = 'N/A';
        console.log(`Quantity ${a || c}`); // it will use the value of c if a is null (no value is added)
    }
Qty(); 
Qty(1);
Qty('Zoro');
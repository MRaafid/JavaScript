{
    // method 1
    const person = {
        name: 'Alice',
        age: 30,
        job: 'Engineer',
        address: {
        city: 'Wonderland',
        zip: '12345'
        }
    };


    {
        const { name, age, job, address} = person;
        console.log(address) // output { city: 'Wonderland', zip: '12345' }
    }
    {
        // if u whant to split the adresss (city and zip)
        const { name, age, job, address: { city, zip }} = person;
        console.log(city) // output: Wonderland
    }
}
{
    // method 2
    const { name, age, job, address: { city, zip }}  = {
        name: 'Alice',
        age: 30,
        job: 'Engineer',
        address: {
        city: 'Wonderland',
        zip: '12345'
        } 
    }; 
    console.log(zip) // output: 12345
}


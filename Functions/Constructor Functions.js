let A = (a) => console.log(a);
function emp(name,age,gender)
    {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

let emp_1 = new emp('Akshay',26,'M'); // new must be used a you are creating a new object
A(emp_1);
let person1 = {
    name: "Alice Johnson",
    age: 28,
    gender: "F",
    weight: 68, // in kilograms
    height: 165 // in centimeters
};

let person2 = {
    name: "Bob Smith",
    age: 35,
    gender: "M",
    weight: 80, // in kilograms
    height: 180 // in centimeters
};

let person3 = {
    name: "Charlie Davis",
    age: 24,
    gender: "M",
    weight: 72, // in kilograms
    height: 170 // in centimeters
};

let bmi = function ()
    {
        let H = (this.height/100)**2;
        let BMI = this.weight/H;
        return BMI;
    }

let bmr = function ()
    {
        if (this.gender === 'M')
            {
                let W = 13.397 * this.weight;
                let H = 4.799 * this.height;
                let A = 5.677 * this.age;
                let B = 88.362 + W + H - A;
                return B;
            }
        else
            {
                let W = 9.247 * this.weight;
                let H = 3.098 * this.height;
                let A = 4.330 * this.age;
                let B = 447.593 + W + H - A;
                return B;
            }
    }

console.log(`
    Alice Johnson:
        BMI=${bmi.call(person1)}
        BMR=${bmr.call(person1)}`)

console.log(`
    Bob Smith:
        BMI=${bmi.call(person2)}
        BMR=${bmr.call(person2)}`)

console.log(`
    Charlie Davis:
        BMI=${bmi.call(person3)}
        BMR=${bmr.call(person3)}`)
//const a = (length) => {return length**2} 
const area_square = (length) => length**2 // single line function return and {} can be skipped
const area_rectangle = (length,weidth) => length*weidth;
const greet = () => console.log('Hello Everyone!'); // no parameter
const area_triangle =(base,height) => {    // multi-line
    let area = 0.5 * base * height;
    console.log(area);
}

console.log(area_square(10));
console.log(area_rectangle(10,20));
greet();
area_triangle(23,57);


// To create Objects
const emp = (user,age,gender) => ({    // need to use flower bracket
    user,   // here no need to write user: user 
    age,    // function will automatically assign property
    gender, // for this to work the used in declaration emp = (user,age,gender) should match the object
})

emp1 = emp('Zoro',23,'M');
console.log(emp1);

// to use .this key word
let a = {
    x: 1,
    y: 2,
    add() {  // need to create an no parameter function
        return () => this.x + this.y// then  retun the arrow function
    }
}
let sum_1 = a.add(); // will equate this to () => this.x + this.y
console.log(sum_1()); // when sum () run => () => this.x + this.y will run

// if we want to add another number
let b = {
    x: 1,
    y: 2,
    add() {  
        return (b,c) => this.x + this.y + b + c// then add a parameter or multiple paramater if need
    }
}
let sum_2 = b.add();
console.log(sum_2(2,5));


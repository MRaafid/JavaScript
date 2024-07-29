{
    let fruits = ['banana', 'apple', 'cherry'];
    let num = [1,4,55,6,24];
    console.group('Alphabetically');
        fruits.sort(); // output: [ 'apple', 'banana', 'cherry' ]
        num.sort();    // output: [ 1, 24, 4, 55, 6 ]
        console.log(fruits);
        console.log(num);
    console.groupEnd();

}

{
    let num = [1,4,55,6,24];
    console.group('Sorting Numbers');
        num.sort((a, b) => a - b); //ascending order
        console.log(num); // output: [ 1, 4, 6, 24, 55 ]
        num.sort((a, b) => b - a); //Descending Order
        console.log(num); // output: [ 1, 4, 6, 24, 55 ]
    console.groupEnd();

}

{
    let emp = [
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 25 },
        { name: 'Charlie', age: 35 }
      ];
    console.group('Objects by Property');
        console.group('with respect to age');
            emp.sort((a, b) => a.age - b.age); // younger first
            console.log(emp); 
            emp.sort((a, b) => b.age - a.age); //older first
            console.log(emp);
        console.groupEnd();
    console.groupEnd()
}
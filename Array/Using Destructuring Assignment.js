let emp =['Zoro','23','M','Junior Developer'];
let emp2 =['Zoro','23','M','Junior Developer'];
let emp3 =['Zoro','23','M','Junior Developer'];
console.group('Assess array using index number');
    console.log(emp[2]);
console.groupEnd();
console.group('Using Destructuring Assignment');
    let [user, age, gender, designation] = emp
    console.log(age);
    // will assign values to matching index numbers
    let [name, ,sex] = emp2
    console.log(sex);
    // we cn skip a element by leaving its matching index blank
    console.group('rest')
        let [id, Age, ...rest] = emp3
        console.log(id); // will work similaraly to above
        console.log(rest); 
        // will add all the element after Age
console.groupEnd();


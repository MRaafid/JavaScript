{    
    let a =[1,2,3,4,5];

    let b = a.filter(even => even % 2 ===0);
    console.log(b); // output: [ 2, 4 ]
    let c = a.filter(odd => odd % 2!==0);
    console.log(c); // output: [ 1, 3, 5 ]
}
{    
    let a =['pass', 'fail' , 'pass', 'fail'];

    let b = a.filter(pass => pass == 'pass');
    console.log(b); // output: [ 2, 4 ]
    let c = a.filter(fail => fail == 'fail');
    console.log(c); // output: [ 1, 3, 5 ]
}
{
    console.group('Objects')
        let a = [
            { name: 'Alice', age: 17, gender: 'F' },
            { name: 'Bob', age: 23, gender: 'M' },
            { name: 'Charlie', age: 16, gender: 'M' },
            { name: 'David', age: 19, gender: 'M'},
            { name: 'Nami', age: 12, gender: 'F' },
            { name: 'Robin', age: 32, gender: 'F'}
        ];
        console.group('age');
            let Minor = a.filter(x => x.age < 18);
            console.log(Minor);
            let Adult = a.filter(x => x.age >= 18);
            console.log(Adult);
        console.groupEnd();
        console.group('gender');
            let Male = a.filter(x => x.gender == 'M' );
            console.log(Male);
            let Female = a.filter(x => x.gender == 'F');
            console.log(Female);
        console.groupEnd();
}


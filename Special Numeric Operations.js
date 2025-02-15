console.group('Math Object');
    console.log(Math.PI)
    console.log(Math.LN2)
    console.log(Math.LN10)
    console.log(Math.LOG2E)
    console.log(Math.LOG10E)
    console.log(Math.SQRT1_2)
    console.log(Math.sqrt(3_4))
    console.log(Math.sqrt(4))
    console.log(Math.sqrt(9))
    console.log(Math.round(9.78))
    console.log(Math.round(8.5))
    console.log(Math.random())
console.groupEnd();

console.group('Unary Negation: ');
    let a = 10  
    let b = -a  
    console.log(a)
    console.log(b)
console.groupEnd();

console.group('Unary Plus (+): ');
    let c = '10'  
    let d = +c  
    console.log(c)
    console.log(typeof c)
    console.log(d)
    console.log(typeof d)
console.groupEnd();

console.group('To check if the given elemet is a Number')
    a = 100;
    b = 'a'
    console.log(isNaN(a)); // false: if a is number 
    console.log(isNaN(b)); // true: if a is not a number
    console.log(!isNaN(a)); // true: if a is number
    console.log(!isNaN(b)); // false: if a is not a number
console.groupEnd();

function greater(a,b)
    {
        let c = (a>b) ? `${a} is greater` : `${b} is greater`;
        console.log(c)
    }

greater(10,20);
greater(37,24);

function num(a)
    {
        let c = (a==0 || a==1) ? `The given number is ${a}` : (a<0) ? 'The given number is negative' : (a%2==0) ? `${a} is a even number` : `${a} is a odd number`;
        console.log(c)
    }

num(0);
num(1);
num(-1);
num(3)
num(5)
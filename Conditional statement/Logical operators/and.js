function num(x)
    {
        if(x>0 && x%2==0)
            {
                console.log(`${x} is a positive even number`)
            }
        else if(x>0 && x%2!=0)
            {
                console.log(`${x} is a positive odd number`)
            }
        else if(x==0)
            {
                console.log(`${x} is neither a positive nor a negitive number`)
            }
        else 
            {
                console.log(`${x} is a negitive number`)
            }
    }

num(0);
num(25);
num(66);
num(-5);
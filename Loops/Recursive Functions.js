function sum(a,count=1,x=[])
    {
        if(count<=a)
            {
                x.push(count);
                return sum(a,count+1,x); // call the function within
            }
        console.log(x);
    }

sum(10); // will create a array of 10 numbers
sum(20);


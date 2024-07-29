function factorial(n)
    {
        let i=1;
        let a=1;
        do {
            a*=i;
            i++;
        } while (i<=n);
        console.log(`${n}! = ${a}`);
    }


factorial(1);
factorial(0);
factorial(5);
factorial(-1);




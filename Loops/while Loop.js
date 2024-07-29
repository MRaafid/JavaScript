function sum(n)
{
    let i=1;
    let a=0
    while (i<=n) {
        a+=i;
        i++
    }
    console.log(`Sum of number from 0 to ${n} is ${a}`)
}

sum(0);
sum(1);
sum(4);
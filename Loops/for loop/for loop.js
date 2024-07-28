function factorial (n)
    {
        let result = 1;
        for(i=1;i<=n;i++)
            {
                result *=i;
            }
        console.log(`${n}! = ${result}`);
    }

factorial(0);
factorial(1);
factorial(10);

console.group(`for loop on array of objects`)
    let a = [
        { x: 2, y: 3 },
        { x: 9, y: 56 },
        { x: 5, y: 8 },
        { x: 7, y: 12 },
        { x: 14, y: 21 }
    ];

    let b = sum => sum.x+sum.y;

    for (i=0;i<a.length;i++)
        {
            console.log(`${a[i].x} + ${a[i].y} =${b(a[i])}`);
        }
console.groupEnd();
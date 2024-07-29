function and(a,b)
    {
        if ((a < 2 && a >= 0) && (b < 2 && b >= 0))
            {
                if(a==0 && b==0)
                    {
                        console.log(`${a}.${b}=0`) 
                    }
                else if(a==1 && b==0)
                    {
                        console.log(`${a}.${b}=0`)  
                    }
                else if(a==0 && b==1)
                    {
                        console.log(`${a}.${b}=0`)  
                    }  
                else    
                    {
                        console.log(`${a}.${b}=1`)
                    }
            }
        else
            {
                console.log(`INVALID INPUT`)
            }
    }

and(0,0);
and(1,0);
and(0,1);
and(1,1);
and(2,0);
and(0,5);
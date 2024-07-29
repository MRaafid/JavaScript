function nor(a,b)
    {
        if ((a < 2 && a >= 0) && (b < 2 && b >= 0))
            {
                if(a==0 || b==0)
                    {
                        console.log(`${a}+${b}=1`) 
                    }
                else    
                    {
                        console.log(`${a}+${b}=0`)
                    }
            }
        else
            {
                console.log(`INVALID INPUT`)
            }
    }

nor(0,0);
nor(1,0);
nor(0,1);
nor(1,1);
nor(2,0);
nor(0,5);
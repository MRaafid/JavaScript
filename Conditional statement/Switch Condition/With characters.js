let a = 1734;
let b = 200;
let action = 'add'

switch(action)
    {
        case 'add':  // here this will excute
            {    
                let sum = a+b;
                console.log(`Sum of ${a} and ${b} is ${sum}`);
                break;
            }
    
        case 'sub':
            {
                let sub = a-b;
                console.log(`Difference between ${a} and ${b} is ${sub}`);
                break;
            }
        default:
            {
                console.log('invalid input');
            }
    }
    
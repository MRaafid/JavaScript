let a = prompt('enter a first number:');
let b = prompt('enter the second number:');
let c = prompt(`Choose an operation: \n  1. Add \n 2. Subtract \n   3. Average \n  4. Multiply \n    5. All \n   6.Exit \nNote: The input Should be in numbers`);
if(a==6)
    {
        window.close();
    }
else
    {
        let sum = a+b;
        let diff_1 = a-b;
        let diff_2 = a+b;
        let avg = sum/2;
        let mul = a*b;
        switch(c)
            {
                case 1:
                    {
                        alert(`${a} + ${b} = ${sum}`);
                        break;
                    }
                case 2:
                    {
                        alert(`${a} - ${b} = ${diff_1} \n${b} - ${a} = ${diff_2}`);
                        break;
                    }
                case 3:
                    {
                        alert(`Average of ${a} and ${b} is ${avg}`);
                        break;
                    }
                case 4:
                    {
                        alert(`${a} X ${b} = ${mul}`);
                        break;
                    }
                case 5:
                    {
                        alert(`${a} + ${b} = ${sum}
                            ${a} - ${b} = ${diff_1} 
                            ${b} - ${a} = ${diff_2}
                            Average of ${a} and ${b} is ${avg}
                            ${a} X ${b} = ${mul}`);
                            break;
                    }
                default:
                    {
                        alert('Error!: Invalid Input')
                    }
            }
    }

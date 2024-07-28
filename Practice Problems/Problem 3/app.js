while (true) 
    {
        let a = prompt('Enter the first number:');
        if (a === null) 
            { 
                window.close();
                break;
            }
        a = parseFloat(a) || 0; // Default to 0 if input is not a valid number
        let b;
        while (true) 
            {
                b = prompt('Enter the second number:');
                if (b === null) 
                    { 
                        break;
                    }
                b = parseFloat(b) || 0; // Default to 0 if input is not a valid number
                break; 
            }
        let c;
        while (true) 
            {
                c = prompt(`
                    Choose an operation: 
                        1. Add 
                        2. Subtract 
                        3. Average 
                        4. Multiply 
                        5. All 
                        6. Exit 
                    Note: The input should be a number between 1 and 6.`);
                if (c === null) 
                    { 
                        break;
                    }
                c = parseInt(c, 10) || 0; // Default to 0 if input is not a valid number
                if (c >= 1 && c <= 6) break; // Valid input, break out of inner loop
                alert('Error: Invalid Input! \nPlease enter a number between 1 and 6.');
            }
        if (c === null) continue; // Go back to the prompt for 'b' if 'c' is null
        if (c === 6) 
            {
                window.close();
                break;
            }
        let sum = a + b;
        let diff_1 = a - b;
        let diff_2 = b - a;
        let avg = sum / 2;
        let mul = a * b;

        switch (c) 
            {
                case 1:
                    alert(`${a} + ${b} = ${sum}`);
                    break;
                case 2:
                    alert(`${a} - ${b} = ${diff_1}\n${b} - ${a} = ${diff_2}`);
                    break;
                case 3:
                    alert(`Average of ${a} and ${b} is ${avg}`);
                    break;
                case 4:
                    alert(`${a} X ${b} = ${mul}`);
                    break;
                case 5:
                    alert(`
                        ${a} + ${b} = ${sum}
                        ${a} - ${b} = ${diff_1}
                        ${b} - ${a} = ${diff_2}
                        Average of ${a} and ${b} is ${avg}
                        ${a} X ${b} = ${mul}`);
                    break;
            }
    }

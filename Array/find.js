console.group('finding a number');
    const num = [1,2,3,4,5];
    console.log(num.find(a=>a>2)); // output: 3
    //it will find the first matching element
    // as soon as it found the matching result it will not check for other values
console.groupEnd();


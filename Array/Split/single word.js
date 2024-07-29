let x = 'hello'
{
    console.group('Split')
        let a = x
        console.log(a.split()); 
    console.groupEnd();
    // will convert the whole string to an one element array
}
{
    console.group(`Split with ''`)
        let a = x
        console.log(a.split(''));
    console.groupEnd();  
    // will split individual element, space will be considered as empty ('')
    // space will also be considered as character
    // Any special character will also be considered as a single element
}


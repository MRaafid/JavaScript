let a = "  Hello, World!  ";
{
    // trim()
    let b = a.trim();
    console.log(b) // output: 'Hello, World!'
    // Whitespace @ start and end are removed
}
{
    // trimStart()
    let b = a.trimStart();
    console.log(b) // output: 'Hello, World! '
    // Whitespace is removed only at the start
}
{
    // trimEnd()
    let b = a.trimEnd();
    console.log(b) // output: '  Hello, World!'
    // Whitespace is removed at the End
}

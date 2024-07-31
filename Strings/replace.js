{
    let str = "She sells seashells, and he sells them all.";

    let a = str.replace('sells','doesnt sell');
    console.log(a);
    //output: She doesnt sell seashells, and he sells them all.
    // will replace only the first match 
    let b = str.replace('he','him');
    console.log(b);
    // output: Shim sells seashells, and he sells them all.
    // it will even change if it comes betweeen the word
    let c = str.replace('she','him');
    console.log(c);
    //output: She sells seahimlls, and he sells them all.
    // even if the first match is She it changed seahimlls
    // it is case sensitive
}
{
    let str = "She sells seashells, and he sells them all.";
    let a = str.replace(/sells/,'doesnt sell');
    console.log(a);
    // Output: She doesnt sell seashells, and he sells them all.
    let b = str.replace(/sells/g,'doesnt sell');
    console.log(b);
    //Output: She doesnt sell seashells, and he doesnt sell them all.
    let c = str.replace(/she/i,'He');
    console.log(c);
    // output: He sells seashells, and he sells them all.
    // here we can set out preference  
}

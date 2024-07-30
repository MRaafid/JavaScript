let a=[1,2,3,4,5]
{
    let b = [...a];
    b.splice(); // will not do any thing
    console.log(b); // Output: [ 1, 2, 3, 4, 5 ]
}
{
    let b = [...a];
    let c = [...a]; 
    let d = [...a];
    b.splice(1); // will remove all elements starting from index 1
    console.log(b); // Output: [ 1 ]
    c.splice(0);    // will remove all elements starting from index 1
    console.log(c); // Output: []
    d.splice(-1);    // will remove from right side
    // index number -1 is equalient of 0 from right side
    console.log(d); // Output: [ 1, 2, 3, 4 ]
}
{
    let b = [...a];
    b.splice(1,3); // Will remove element starting from index 1
    //3 indicate the number of elemet it should delet after the start
    // the stat index element will also be included in the count
    console.log(b); // Output: [ 1, 5 ]
}
{
    let b = [...a];
    let c = [...a]; 
    let d = [...a];
    b.splice(1,4,3); // will delet 4 elements from the index 1
    // 3 -->  specifies the element to be added to the array 
    // It will be added at the start index after the removal of the specified elements.
    c.splice(1,3,4)
    console.log(b); // Output: [ 1, 3 ]
    console.log(c); // Output: [ 1, 4, 5]
    d.splice(1,3,'ant') 
    console.log(d); // Output: [ 1, 'ant', 5 ]
}
{
    let b = [...a];
    let c = [...a];
    let d = [...a];
    b.splice('','','apple'); // will add apple at the tart index (i.e 0)
    console.log(b); // [ 'apple', 1, 2, 3, 4, 5 ]
    //instead og blank we can also write 0
    c.splice('2','','apple') // will add apple at the start index (i.e 2)
    // no element will be deleted
    console.log(c); // [ 1, 2, 'apple', 3, 4, 5 ]
    d.splice('','2','apple') // in this case 3 elements will be deleted after start index  (i.e 2)
    console.log(d); // Output: [ 'apple', 3, 4, 5 ]
}

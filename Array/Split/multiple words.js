{
    console.group(`Split with ' ' there is a space between quotes `)
        let a = 'hello everyone welcome';
        console.log(a.split(' '));
    console.groupEnd(); 
    // will detect the space
    // all leters after the space will be considered as one element
}
{
    console.group(`Split with ' ' there is a special character between quotes `)
        let a = 'hello,everyone,welcome';
        console.log(a.split(','));
    console.groupEnd(); 
    // will detect the special character
    // in this case ,
    // note that , should be within ''
    // all leters after the , (or  any other special character if used) will be considered as one element
    /*
        space is used after the , (hello, everyone)
        then there should be a space given after the , in split
        console.log(a.split(' ,'));
    */
}
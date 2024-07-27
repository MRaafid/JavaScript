let animals = ['ape', 'bat', ['cat', 'kitten'], 'dog'];
animals.push('elephant'); // add the string at the end og the array
console.log(animals[1]) // gets the 1+1 i.e 2nd element of the array
console.log(animals[2]) // Since it is a nested array it will give the output as that array
console.log(animals[2][1]) // gets the 3rd element->nested array's 2nd element
console.log(animals);
animals.pop();    // delets the last elemet of the array
console.log(animals);
animals[0]= 'ant'; // modifies the value of the element in the index value 0 
animals[4]= 'monkey'; // if there is no elemet in the mentioned index then it will add the element
animals[10] = 'Lion'; // if we choose a index number after a gap, in the remainig spaces will be let balnk
console.log(animals); // output: [ 'ant', 'bat', 'cat', 'dog', 'monkey', <5 empty items>, 'Lion' ]
a = [...animals] // creates a clone of the array
console.log(a);
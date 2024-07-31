let string = "The quick brown fox jumps over the lazy dog.";
{
    let matches = string.match(/[aeiou]/gi);  // Find all vowels
    console.log(matches);  // Output: ['e', 'u', 'i', 'o', 'o', 'u', 'o', 'e', 'a', 'o']
}
{
    let matches = string.matchAll(/[aeiou]/gi);
    console.log(matches);  // Output: Object [RegExp String Iterator] {}
    console.log(Array.from(matches));
}
{
    let regex = /fox/;
    let result = regex.test(string);
    console.log(result);  // Output: true
}
{
    let position = string.search(/fox/);
    console.log(position);  // Output: 16
}
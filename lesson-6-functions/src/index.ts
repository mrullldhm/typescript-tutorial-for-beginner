// enums are a way to define a set of named constants

const small = 1;
const medium = 2;
const large = 3;

// enums example
// default value of enums start with 0, 1, 2, 3, ,,,
// can set the value of enums manually
const enum Size {Small = 1, Medium = 2, Large = 3}
let mySize: Size = Size.Medium
console.log(mySize)
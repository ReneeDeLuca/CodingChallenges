//Convert a String to a Number!
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
//P: all inputs will be strings
//R: return number
//E:"1234" --> 1234
//  "605"  --> 605
//  "1405" --> 1405
//  "-7" --> -7
//P: take the string, return an interger.

const makeNum = str => Number(str)

console.log(makeNum('1234'), 1234)
console.log(makeNum('605'), 605)

// works! needed to remind myself of arrow function syntax, but understood the requirement without issue. 

//repush with updated email
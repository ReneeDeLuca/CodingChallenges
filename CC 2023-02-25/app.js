// kyu: 8
//title: Is It Even?
//description: In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.

//P: need to consider pos and neg numbers, floats, and zero
//R: return true if even, else false
//E: 2 -> true
//   -18 -> true
//   0.234 -> false
//   17 -> false
//P: %2 === 0 return true

const testEven = num => num % 2 === 0


//notes: easy peasy

//test:
console.log(testEven(2),true)
console.log(testEven(-18),true)
console.log(testEven(0.234),false)
console.log(testEven(17),false)
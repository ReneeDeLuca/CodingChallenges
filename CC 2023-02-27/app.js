// kyu: 8
//title: Find Multiples of a Number
//description: In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

//P: positive integers only, never 0 or negative
//R: array of only the required numbers
//E: if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
//P: loop through and see if modulus === 0, if so add to array, only up to second paramenter. 

let findMultiples = function(a,b){
    let arr = []
    for(let i = 1; i <= b; i++){
        if((a*i)%a === 0){
            arr.push(Number(i))
        }
    }   
    return arr
}
//notes: attempt 1 above, not returning a new array with seperate numbers, only returning the last number in the test. 


//notes:

//test:
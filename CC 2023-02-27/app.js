// kyu: 8
//title: Find Multiples of a Number
//description: In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

//P: positive integers only, never 0 or negative
//R: array of only the required numbers
//E: if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
//P: loop through and see if modulus === 0, if so add to array, only up to second paramenter. 

function findMultiples (a,b){
    let arr = []
    for(let i = 1; i <= b; i++){
        if((a*i)/a=== 0){
            arr.push(i)
        }
    }   
    return arr
}
//notes: attempt 1 above, not returning an array with seperate numbers, only returning the last number in the test (codewars test), console.log is returning array with all numbers 1 - b. 
//second look: if equation is not correct, will always be % 0 so will push all numbers 1-b. 

function findMultiples(a,b){
    let arr = []
    for(let i=a; i<=b;i+=a){
        arr.push(i)
        }
        return arr
    }
        
//notes: not working with equation, reviewed solutions. no need for if statement, only needed to loop and iterate to increase by a. 

//test:

console.log(findMultiples(5,25), [5,10,15,20,25])
console.log(findMultiples(2,6), [2,4,6])
console.log(findMultiples(3,12), [3,6,9,12])
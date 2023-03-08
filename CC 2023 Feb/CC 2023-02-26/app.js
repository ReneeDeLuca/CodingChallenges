// kyu: 7
//title: Filter the number
//description: Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//P:what if numbers are negative? will all numbers be integers?
//R: return a number from a string.
//E: "123" -> 123
//   "a1b2c3" -> 123
//   "aa1bb2cc3dd" -> 123
//P: iterate through the sting and pull out numbers, type of? no, will be string... how to find out if character is a number? if Number(character)===false, pop? filter?

//const filterString = str => {
//     let numStr = []
//     let arrStr = str.split('')
//     arrStr.forEach(el =>{
//         if(Number(el)=== True){
//             numStr.push(Number(el))
//         }
//     })

//     console.log(numStr)
// }

//notes: converted string to array, trying to get numbers out, NOT WORKING. try different approach, what if we filter out the letters and then convert to number? 

// const filterString = str => {
//     let arrStr = str.split('')
//     console.log(arrStr)
// //notes:this works, returning array of str characters, now what? how to get the letters out. 
//     let numStr = []    
//     arrStr.forEach(el => {
//         if(el == 0 || el == 1 || el == 2 || el ==3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9 || el == 0){
//             numStr.push(el)
//         }        
//     })
//     console.log(numStr)
//     // working to this point, getting array of only 'numbers', now to convert join and convert to Number
//     console.log(Number(numStr.join('')))
// }
//notes: clean it up

// const filterString = str => {
//     let arrStr = str.split('')
//     let numStr = []    
//     arrStr.forEach(el => {
//         if(el == 0 || el == 1 || el == 2 || el ==3 || el == 4 || el == 5 || el == 6 || el == 7 || el == 8 || el == 9 || el == 0){
//             numStr.push(el)
//         }        
//     })
//     return Number(numStr.join(''))
// }

//note: how to make it better? clean up forEach. should not need to list each character, there must be a way to automate that further. 

const filterString = str => {
    let arr = Array.from(str)
    arr = arr.filter((element) => element == Number(element))
    arr = arr.join('')
    return Number(arr)
  }

//notes: works, cleaner. I was on the right track originally with the boolean statement but using === instead of ==. 
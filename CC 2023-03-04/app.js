// kyu: 8 
//title: Is it a palindrome?
//description: Write a function that checks if a given string (case insensitive) is a palindrome.

//P: case insensitive - will need to convert to all lower to compare strings.
//R: return true if it is a palindrome, false if it is not.
//E: "abba" -> true
//   "aBbA" -> true
//   "hello" -> false
//P: set to lowercase, reverse string and compare to original string.

let isPalindrome = function(str){
    let revStr = str.split('').reverse().join('')
    if(str.toLowerCase() === revStr.toLowerCase()){
        return true
    }else{
        return false 
    }
}

console.log(isPalindrome("abba"))
console.log(isPalindrome("aBbA"))
console.log(isPalindrome("hello"))

//originally forgot the '' for split and join, need to do more anki, that's in my deck :/
// could write this as an arrow function? 

const palindromeMaybe = str => str.toLowerCase() === (str.split('').reverse().join('')).toLowerCase() 

//works!! nice. 


//notes: 

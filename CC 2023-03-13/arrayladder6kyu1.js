// kyu: 6
//title: The Wave
//description: In this simple Kata your task is to create a function that turns a string into a representation of The Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a "person" standing up. 
//1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

//P: string will always be lowercase, but may be empty.
//R: return array with each item a new string with a new 'person' standing.
//E: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
//P: create array, iterate over the string string.length times, split, capitalize, join, push? ignore spaces

function wave(str){
    let waveArray = []
    for(i=0; i<str.length; i++){
        if(i > str.length-1){
            
        else{
            
        }
       
    }
    return waveArray
}

//notes: cannot figure out what to do, checked arrays and strings and regex on MDN, not becoming clearer. google search resulted in:

// function setCharAt(str,index,chr) {
//     if(index > str.length-1) return str;
//     return str.substring(0,index) + chr + str.substring(index+1);
// }

//but unclear of how to use it. 

//codewars solution:

function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}

//notes: ugh, so close so many times. need to work with slice more and regex. 
//test:
console.log(wave("hello"))
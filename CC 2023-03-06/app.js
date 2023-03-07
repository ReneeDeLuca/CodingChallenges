// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//P: Empty array should return empty string, one element array should return string with no spaces.  
//R: String with spaces in between elements
//E: ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//   [] => ''
//   ['coffee'] => 'coffee'
//P: creat a function that parses through the array and pulls out each element
function makeSentence(arr){
    if(arr.length === 0){
        return ''
    }else if(arr.length === 1){
        return arr.toString('') 
    }else{
        return arr.join(' ')
    }
}
//   add to a string with spaces in between each element
//   but not before or after. 

//got it, don't need .toString on longer array, only need to join and give parameter for removing the commas.

// most common answer after submit:
const smash = words => words.join(' ');
//no need for edge cases? was arr.toString even doing anything? did I need to account for arr.length === 0 || arr.length === 1? Seems like examples are too easy. 
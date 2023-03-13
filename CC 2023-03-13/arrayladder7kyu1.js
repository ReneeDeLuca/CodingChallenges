// kyu: 7
//title: Jenny the Youngest Detective
//description: Jenny is 9 years old. She is the youngest detective in North America. Jenny is a 3rd grader student, so when a new mission comes up, she gets a code to decipher in a form of a sticker (with numbers) in her math notebook and a comment (a sentence) in her writing notebook. All she needs to do is to figure out one word, from there she already knows what to do. And here comes your role - you can help Jenny find out what the word is!

//In order to find out what the word is, you should use the sticker (array of 3 numbers) to retrive 3 letters from the comment (string) that create the word.

//Each of the numbers in the array refers to the position of a letter in the string, in increasing order.
//Spaces are not places, you need the actual letters. No spaces.
//The returned word should be all lowercase letters. if you can't find one of the letters using the index numbers, return "No mission today". Jenny would be very sad, but that's life... :(


//P: spaces don't count, need to remove, need to include response if it doesn't work
//R: return word made (lowercase) or "no mission today"
//E: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")
//P: string: remove spaces, split, sort nums array, push appropriate index to new array, .join().toLowerCase(). 

function missingWord(nums, str) {
    //remove all spaces
    let noSpaceStr = str.replaceAll(" ","")
    //split string into an array
    let strArray = Array.from(noSpaceStr)
    //sort nums array
    function compareNumbers(a, b) {
        return a - b;
      }
    nums.sort(compareNumbers)
    //create new array with values from strArray at index of nums values
    let secretWord = [strArray[nums[0]],strArray[nums[1]],strArray[nums[2]]]
    //convert back to a string, in lowercase
    secretWord = secretWord.join("").toLowerCase()
    //if string is less than 3 letters, no mission
    if(!(secretWord.length === 3)){
        return "No mission today"
    //else return the secret word
    }else{
        return secretWord
    }
 }


//test:
console.log(missingWord([5, 0, 3], "I love you"), "ivy")
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"), "bay")
console.log(missingWord([12, 4, 6], "Good Morning"), "No mission today")
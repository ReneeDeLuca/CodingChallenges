// kyu: 8
//title: Correct the mistakes of the character recognition software
//description: Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//P: should only change 5, 0, & 1, will not include numbers to be kept. 
//R: return the corrected word
//E: "L0ND0N", "DUBL1N", "51NGAP0RE", "BUDAPE5T", "PAR15"
//P: look through the string and replace the 5s with Ss, the 0 with Os, and the 1s with Is.

const correct = (str) => {
    str = str.replaceAll("5", "S");
    str = str.replaceAll("0", "O");
    str = str.replaceAll("1", "I");
    return str
}


//notes: condense? use regex and /g instead of replaceAll and restating str =

//const correct = string => string.replace(/0/g, "O").replace(/1/g, "I").replace(/5/g, "S");



//test:
console.log(correct("L0ND0N"), "LONDON")
console.log(correct("DUBL1N"), "DUBLIN")
console.log(correct("51NGAP0RE"), "SINGAPORE")
console.log(correct("BUDAPE5T"), "BUDAPEST")
console.log(correct("PAR1S"), "PARIS")
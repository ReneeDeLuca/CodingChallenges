// kyu: 7
//title: Validate PIN code
//description: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.

//P: should only return true for 4 or 6 length PINs with characters between 0 and 9. no special char, no letters. input should be string.
//R: true or false
//E: "12345",false
//   "1234",true
//   "a123",false
//P: accept an input, validate the length is 4 or 6, validate the charcters are between 0 and 9

//notes: getting complicated. research RegEx().

const validatePIN2 = str =>{
    let newStr = str.replace(/\D/g, "");
        console.log(newStr);
        newStr = newStr.replace(".","a");
        console.log(newStr);
        newStr = newStr.replace("-", "a");
        console.log(newStr);
    if(!(str.length === 4 || str.length === 6)){
        return false
    }else{
        let digits4 = /\d\d\d\d/g;
        let digits6 = /\d\d\d\d\d\d/g;
        if(digits4.test(str)){
          return true
        }else if(digits6.test(str)){
            return true
        }
        else{
          return false
        }
    }
}

//notes: sort of working but condensing "-1.234" to 1234 and then returning true when it should be false. Need to check for non digit characters first. swap order of things. 

const validatePIN = str =>{
    let newStr = str.replace(/\D/g, "a");
    newStr = newStr.replace(".","a");
    newStr = newStr.replace("-","a");
        //console.log(newStr);
    if(!(str.length === 4 || str.length === 6)){
        return false
    }else if(newStr.includes("a")){
        return false
    }else{
        return true
    }
}
//notes: wow, regex are interesting and probably make things easier once you get to know them. That was a long one, but I got it! forcing any non digit character to be something I know is not a digit and then seeing if the known character is included. 

//test:
console.log(validatePIN("123"),false)
console.log(validatePIN("-1.234"), false)
console.log(validatePIN("00000000"),false)
console.log(validatePIN("a234"),false)
console.log(validatePIN("123456"),true)


/*better solution: 

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)

*/

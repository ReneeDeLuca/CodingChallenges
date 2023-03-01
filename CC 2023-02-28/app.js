// kyu: 8
//title: Multiply
//description: This code does not execute properly. Try to figure out why.

//: provided code:

function multiply(a, b){
    a * b
  }


//notes: what is it doing with the number? returning? logging? there is no implicit return on this fuction. 

//debugged code:

function multiply(a,b){
    return a*b
}

//test:
console.log(multiply(2,4)) //8
console.log(multiply(5,5)) //25
console.log(multiply(1,0)) //0
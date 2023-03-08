// 7kyu Greet Me
//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

//P: whether input is lower, upper, or a mix, should return as a proper noun
//R: return string with greeting and name with !
//E: "riley" --> "Hello Riley!"
//   "JACK"  --> "Hello Jack!"
//P: constructor? not sure how to make it but I think this is the answer. 

// look up on MDN:
// constructor example:
// class Person {
//     constructor(name) {
//       this.name = name;
//     }
  
//     introduce() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   }
  
//   const otto = new Person("Otto");
  
//   otto.introduce(); // Hello, my name is Otto

// not familiar with the 'class' portion of the example. going to review Mosh's OOP vod to review his constructor syntax.

function Person(name){
    this.name = function capitalize(name) {
        return name[0].toUpperCase() + name.slice(1).toLowerCase();
      }
    this.greet = function greet(){
        console.log(`Hello, ${this.name}!`)
    }
}

//ok got this far and I think I'm over complicating this. Constructor is not needed and I'm not doing it exactly right.

// try again

let greeting = function capitalize(name) {
    return 'Hello '+name[0].toUpperCase() + name.slice(1).toLowerCase()+'!';
    
}

// ok this works on the test 'riley' but it could be cleaner

const greet = name => 'Hello '+name[0].toUpperCase() + name.slice(1).toLowerCase()+'!'

//works! good job, me. Take the string 'name', take the character at index[0] and make it uppercase, the concatinate it to the rest of the string starting at index[1], which is made lower case with toLowerCase. return it in the middle of the strings 'Hello ' and '!'.
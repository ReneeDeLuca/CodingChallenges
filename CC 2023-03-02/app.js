// kyu: 8
//title: Grasshopper - Debug sayHello
//description: The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!


//given code:
function sayHello(name) {
    return 'Hello'
  }
//notes: original function is not using input

//debugged code:
function sayHello(name){
    return 'Hello, ' + name
}

//notes: can write in a more compact format, but I think that is not debugging, that is editing and rewriting. 

//test:
console.log(sayHello('Mr. Spock'))
console.log(sayHello('Captain Kirk'))
console.log(sayHello('Liutenant Uhura'))
// kyu: 8
//title: Count the Monkeys!
//description: You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

//As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//P: no negative numbers, there are monkeys (at least 1), can't be non-integer (can't have half a monkey)
//R: array with all numbers 1-n
//E: 6 monkeys, 10 monkeys, 57 monkeys
//P: loop up to n, push i to array, return array

const countMonkeys = n => {
    let monkeyArray = []
    for(i=1; i<=n ; i++){
        monkeyArray.push(i)
    }
    return monkeyArray
}


//notes: easy peasy < 5 min

//test:
console.log(countMonkeys(6))
console.log(countMonkeys(10))
console.log(countMonkeys(57))
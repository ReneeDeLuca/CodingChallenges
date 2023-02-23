// kyu: 8
//title: Total amount of points
//description: Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//P: always 10 matches, x and y are always between 0 and 4 inclusive.   
//R: return sum of points awarded   
//E: ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]
//   ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]
//   ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]
//P: need to get the second character of each string in each element and use a conditional statement against the fourth character to awared points. 

const points = games => {
    let total = 0
    total = games.forEach((item) => {
        if(Number(item[0])-Number(item[2]) > 0){
            console.log('Win!')
            total += 3
        }else if(Number(item[0])-Number(item[2]) === 0){
            console.log('Tie!')
            total += 1
        }else{
            console.log('Loss!')
        }
    })
    return total
}
//notes: Was having trouble seeing what was going on, added console.log to find out what it was doing. " " are not included in the indexing of the string for the array elements. Did not know that. Once I figured out that it was not working correctly at the if and else if statements, it was an easy fix for that part, but still not adding to the total, resulting in 'undefined'. 

let points2 = function(games){
    let total = []
    let pushTotal = games.map((str) => {
        if(Number(str[0])-Number(str[2]) > 0){
            total.push(3)
            console.log('Win!')    
        }else if(Number(str[0])-Number(str[2]) === 0){
            total.push(1)
            console.log('Tie!')    
        }else{
            total.push(0)
            console.log('Loss!')
        }
    })
    console.log(total)
    return total.reduce((current, next) => current + next, 0)
}

//notes: needed .map instead of .forEach, hard to know when to use each one, but seems like .map is the way to go when you need something returned. 

//notes: checked for simpler examples. while the example I found is shorter, it is hard to read to me, needs better variables to clearly explain what is happening. 

// const points = games => games
//                           .map(x => x[0] > x[2] ? 3 : x[0] === x[2] ? 1 : 0)
//                           .reduce((p, c) => p + c)

//test:
console.log(points2(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30)
console.log(points2(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10)
console.log(points2(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0)
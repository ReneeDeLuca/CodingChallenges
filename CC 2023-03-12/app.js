// kyu: 7
//title: Find the stray number
//description: You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

//P: array length always odd and always >= 3
//R: return the different number
//E: [1,1,2],[1,2,1],[2,1,1],[17, 17, 3, 17, 17, 17, 17]
//P: iterate over the array and compare numbers. how to figure out which one is the different number? what if I map to two different arrays depending on the comparison (true/false), then return the value of array[0], only if the length is 1. 

function stray(numbers) {
    while(numbers.length > 2){
        if(numbers[0] === numbers[1] && numbers[0] !== numbers[2]){
            return numbers[2]
        }else if(numbers[0] !== numbers[1] && numbers[0] === numbers[2]){
            return numbers[1]
        }else if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]){
            return numbers[0]
        }else{
            numbers.shift()
        }
    }               
}

//notes: keep comparing the first three, then remove the first if they are all the same, otherwise return the one that is different. 

//test:
console.log(stray([1, 1, 2]), 2)
console.log(stray([1, 2, 1]), 2)
console.log(stray([2, 1, 1]), 2)
console.log(stray([17, 17, 3, 17, 17, 17, 17]))
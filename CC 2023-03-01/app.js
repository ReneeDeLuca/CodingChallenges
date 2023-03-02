// kyu: 8
//title: Invert values
//description:Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. You can assume that all values are integers. Do not mutate the input array/list.

//P: all integers, positives and negatives
//R: do not mutate - return a new array
//E: [1,2,3] -> [-1,-2,-3]
//P: apply a method to each element of the array to change from positive to negative, map and multipy by -1? 

const invert = array => array.map(element => element * -1)



//notes: looks weird with two arrows, but works

//test:
console.log(invert([1,2,3]))
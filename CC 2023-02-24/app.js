// kyu: 8
//title: Square(n)Sum
//description: Complete the square sum function so that it squares each number passed into it and then sums the results together.

//P: always numbers?
//R: return number value of all values of the array squared and then added together.
//E: For example, for [1, 2, 2] it should return 9
//P: for each and then reduce?  

const squareSum = numArr => {
    let sqArr = []
    numArr.forEach((el) =>{
        sqArr.push(el*el)
    })
    console.log(sqArr)
    let sum = sqArr.reduce((total, add) => total + add , 0)
    return sum 
}


//notes: need to define the var sqArr before .push will work, need to practice sytax for .reduce, forgot to inclue paramenters and was getting an error. 


//test:
console.log(squareSum([1,2,2]),9)
console.log(squareSum([2,4,4]),36)
console.log(squareSum([5,18,25]),974)
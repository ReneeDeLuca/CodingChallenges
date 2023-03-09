// kyu: 7
//title: String ends with?
//description: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//P: check chars at string1 end to see if is the same as string2
//R: return true if match or false if no
//E: solution('abc', 'bc') // returns true
//   solution('abc', 'd') // returns false
//P: need to get char at str.length-(ending.length) to see if they match. maybe slice str to be the same length as ending and then compare?

const solution = (str, ending)=>str.slice(-(ending.length)) === ending
        
//notes: I feel this is the right solution, however, failing attempt on codewars with error notes 'Expected solution('abc', '') to return true: expected false to equal true'. 'abc' does not end in ''. Seems I need to add code to just return true if ending is blank. 

const solution2 = (str, ending)=>str.slice(-(ending.length)) === ending || ending.length === 0
//notes: works, but doesn't make sense to me why that example should return true.

//test:
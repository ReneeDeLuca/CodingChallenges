// kyu: 6
//title: Take a Ten Minute Walk
//description: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//P: Never an empty array, arrays will only contain 4 directions, needs to be exactly 10 minutes (length) long
//R: return true if array.length is 10 && returns to starting point, else false
//E: ['n','s','n','s','n','s','n','s','n','s'] (true)
//   ['w','e','w','e','w','e','w','e','w','e','w','e'] (false)
//   ['w'] (false)
//P: first check for array length, if not 10, automatically false. then check if returns to starting point. Can use values for directions? n,e == 1, s,w == -1? should reduce to 0. try .map

function isValidWalk(walk) {
    let returnToStart = 0
    walk.forEach((direction) => {
        if(direction === 'n'){
            returnToStart++
        }else if(direction === 'e'){
            returnToStart += 2
        }else if(direction === 's'){
            returnToStart--
        }else{
            returnToStart -=2
        }

    })
    console.log(returnToStart)
    if(walk.length ==10 && returnToStart===0){
        return true
    }else{
        return false
    }
  }

//    .reduce((total,add) => total + add, 0)  == 0)

//notes:


//notes:

//test:
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
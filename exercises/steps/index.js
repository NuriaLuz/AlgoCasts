// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n,row = 0, stair = ''){
    //This is our base case. Once row = n then we hit our max
    if(row === n){
      return
    }
    // in this case, once  n = stairs.length , we are done with that string
    if(n === stair.length){
      console.log(stair)
      // we need to continue and increase the row
      return steps(n, row + 1)
    }
    if (stair.length <= row){
      stair += '#'
    } else {
      stair += ' '
    }
    //this calls the recursion again
    steps(n,row,stair)
    }

module.exports = steps;

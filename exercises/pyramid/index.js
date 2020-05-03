// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n , row = 0 , level = ''){
    //Base Case
    if(row === n){
        return;
    }
// Rules once level size is reached
    if(level.length === 2*n -1){
        console.log(level)
        return pyramid(n, row +1)
    }
 //here we add # or spaces based on the midpoint 
    const midpoint = Math.floor((2*n - 1) / 2)
    if( midpoint - row <= level.length && midpoint + row >= level.length){
        level += '#'
    } else {
        level += ' '
    }
    //call again to the recursion function
    pyramid(n,row, level)

 }
module.exports = pyramid;

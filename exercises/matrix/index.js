// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // the result array is where we will push the other subarrays in 
   let result = []

    // We also need to put a limit of how many subarrays can be put in the result array
    for(let i = 0 ; i < n; i++){
    result.push([])
}

let counter = 1
let startRow = 0
let endRow = n - 1
let startCol = 0
let endCol = n - 1

while(startRow <= endRow && startCol <= endCol){
    //Top Row 
    for(let i = startCol ; i <= endCol ; i++){
        result[startRow][i] = counter;
        counter ++;
    }
    startRow++
    
    //Right Column
    for(let i = startRow; i <= endRow ; i++){
        result[i][endCol] = counter;
        counter ++;
    }
    endCol-- // this is shifting now to the left

    //Bottom Row
    for( let i = endCol; i >= startCol; i --){
        result[endRow][i] = counter;
        counter ++;
    }
    endRow--

    for(let i = endRow; i >= startRow ; i --){
        result[i][startCol]= counter;
        counter ++;
    }
    startCol++
}
return result
}


module.exports = matrix;

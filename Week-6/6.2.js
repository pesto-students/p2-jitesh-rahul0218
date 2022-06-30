
function spiralPrint(endingRow, endingCol, arr) {
    let i, startingRow = 0, startingCol = 0;
 
 
    while (startingRow < endingRow && startingCol < endingCol) {
      
        for (i = startingCol; i < endingCol; ++i) {
            console.log(arr[startingRow][i] + ' ');
        }
        startingRow++;
 
        
        for (i = startingRow; i < endingRow; ++i) {
            console.log(arr[i][endingCol - 1] + ' ');
        }
        endingCol--;
 
        
        if (startingRow < endingRow) {
            for (i = endingCol - 1; i >= startingCol; --i) {
                console.log(arr[endingRow - 1][i] + ' ');
            }
            endingRow--;
        }
 
        
        if (startingCol < endingCol) {
            for (i = endingRow - 1; i >= startingRow; --i) {
                console.log(arr[i][startingCol] + ' ');
            }
            startingCol++;
        }
    }
}
 
let arr = [ [ 1, 2, 3 ],
           [ 4, 5, 6 ], 
           [ 7, 8, 9 ] ];
let r = arr.length;
let c = arr[0].length;
 
console.log(spiralPrint(r, c, arr));
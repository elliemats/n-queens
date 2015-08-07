/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
// n = 3;
var solution = []; //stores our board answers
var board = new Board({'n' : n}); // constructs our board


for (var i = 0; i < n; i++) { // i is the row index
  board.get(i)[i] = 1;
  solution.push(board.get(i));
}
// console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));

return solution;

}




// for (var j = 0;j < n;j++){//iterate through rows on board
//   for(var k = 0; k < n; k++) { // iterating through each space in each row
//     console.log(newBoard[j][k]);

//     newBoard[j][k]=1
//     console.log(newBoard[0]);
//     console.log(newBoard);
//     // newBoard.togglePiece(j,k);
//     console.log(newBoard[j][k]);
//     console.log('row',row)

//       if(newBoard[j][k].hasAnyRowConflicts || newBoard[j][k].hasAnyColConflicts) {
//         newBoard[j][k] = 0;
//       }
//   }

// }
// debugger;
// return newBoard;






  // construct empty array shell for the board (use new Array constructor)
  // for loop starts
  // start at position 0,0 and do rook check on that posiiton (ex: targeting Array[0][0])
  // possibly use toggle piece to insert a piece at the given location


  //var solution = undefined; //fixme
  //var count =0;
  //
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //return solution;
// };



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var count = 0; //fixme
  var board = new Board({n: n});

  var countSolutions = function (rowIndex){
    //loop through colIndexes
    if(rowIndex === n) return count++;

    for (var i = 0; i < n; i++){
      console.log('rowindex', rowIndex, 'col', i);
      console.log(board.rows(), 'row: ', rowIndex);
      //place a piece on the board board.togglePiece(rowIndex, i)
          // board.get(rowIndex)[i] = 1;
          board.togglePiece(rowIndex, i);
      //check for conflicts hasAnyRooksConflicts
      if(!board.hasAnyRooksConflicts()){

        //if no conflicts (false) call the function again on the next row (increment row and call again)
        countSolutions(rowIndex+1)
      }
      //if there are conflicts togglePiece back to zero
      board.togglePiece(rowIndex,i);
      // board.get(rowIndex)[i] = 0;
    }

  }

  countSolutions(0);
// console.log(solutionCount);
  console.log('pig');


  console.log('Number of solutions for ' + n + ' rooks:', count);
  return count;

};

/*

var solutionCount = 0;
  var board = new Board({n: n});
  var recurse = function(row) {
    if (row === n) {
      return solutionCount++;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        recurse(row+1);
      }
      board.togglePiece(row, i);
    }
  }
  recurse(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;

*/



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

window.countNQueensBitwise = function(n){
  var solutionCount = 0;

  console.log('Bitwise: Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};



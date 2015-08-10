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
  var solution, 
      counter = 0,
      board = new Board({n:n});

  var findSolution = function(row){
    for (var col = 0; col < n; col++){
      board.togglePiece(row,col);

      if (board.hasAnyRooksConflicts()){
        board.togglePiece(row,col)
      } else {
        counter++
        if (counter === n) solution = board.rows();
        else findSolution(row+1);
      }
    }
  }

  findSolution(0);
  return solution
}


// return the number of nxn chessboards that exist, 
// with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0,
      board = new Board({n:n});

  var countSolutions = function(currentRow){
    if(currentRow === n) return solutionCount++;

    for (var col = 0; col < n; col++){
      board.togglePiece(currentRow, col);

      if (!board.hasAnyRooksConflicts()){
        countSolutions(currentRow+1)
      }
      
      board.togglePiece(currentRow, col)
    }
  }
  countSolutions(0)
  return solutionCount
};


// return a matrix (an array of arrays) representing a single nxn chessboard, 
// with n queens placed such that none of them can attack each other

window.findNQueensSolution = function(n) { 
  var solution = [],
      board = new Board({n:n});

  if (n === 1) return [[1]];
  if (n === 2 || n === 3) return board.rows();

  var recursiveFunc = function(initRow){

    if(initRow === n){
      solution = _.map(board.rows(), function(row){ return row.slice()})
      return 
    }

    for (var col = 0; col < n; col++){
      board.togglePiece(initRow, col);

      if (!board.hasAnyQueenConflictsOn(initRow, col)){
        recursiveFunc(initRow+1)
      } 
      
      board.togglePiece(initRow, col)
    }
  }

  recursiveFunc(0)
  return solution
};


// return the number of nxn chessboards that exist, 
// with n queens placed such that none of them can attack each other

window.countNQueensSolutions = function(n) {
  var solutionCount = 0,
      board = new Board({n:n});

  if (n === 2 || n === 3) {
    return 0;
  }

  var recursiveFunc = function(initRow){
    if(initRow === n) return solutionCount++ ;

    for (var col = 0; col < n; col++){
      board.togglePiece(initRow, col);

      if (!board.hasAnyQueenConflictsOn(initRow, col)){
        recursiveFunc(initRow+1)
      }
      board.togglePiece(initRow, col)
    }
  }

  recursiveFunc(0)
  return solutionCount
};

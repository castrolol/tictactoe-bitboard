# tictactoe-bitboard
A simple sample of TicTacToe bitboard


## How use

```js
  const Bitboard = require("./bitboard");
  
  var myBoard = new Bitboard();
  
  var boardWithCenter = myBoard.or(16);
  
  //to show... console.log(boardWithCenter.toString());
```



### A simple sample with tic-tac-toe engine

```js
  const Bitboard = require("./bitboard");
  
  var boards = {
      X: new Bitboard(),
      O: new Bitboard()
 };
  
  var winPositions = [7, 56, 73, 84, 146, 273, 292, 448];
  
  function doMove(playerId, x, y){

     var fullboard = boards.X.or(boards.O);

     if(fullboard.getPosition(x, y)){

         console.log("not allowed move");
         return;
     }

     var anyWin = winPositions.some( pos => boards[playerId].and(pos) == pos );

     if(anyWin){
        console.log(playerId + " is winner!");
        return;
     }

     boards[playerId].setPosition(x, y, 1);
     console.log( playerId + " is checked in ("+ x + "," + y + ")");
 
 }
  

 doMove("X", 1, 0);

 doMove("O", 2, 0);

 doMove("X", 1, 1);

 doMove("O", 2, 1);

 doMove("X", 1, 2);
 

```

# tictactoe-bitboard
A simple sample of TicTacToe bitboard


## How use

```js
  const Bitboard = require("./bitboard");
  
  var myBoard = new Bitboard();
  
  var boardWithCenter = myBoard.or(16);
  
  //to show... console.log(boardWithCenter.toString());
```

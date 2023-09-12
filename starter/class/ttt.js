const Screen = require("./screen");
const Cursor = require("./cursor");

const Command = require('./command');

const { isEmptyGrid, checkHorizontalWin, checkVerticalWin, checkdiagonalWin, fullBoard, isTie, noWin } = require('../_helper');

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']]

    this.cursor = new Cursor(3, 3);
    // console.log(this.cursor)

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    // Screen.addCommand('t', 'test command (remove)', TTT.testCommand);
    Screen.addCommand('h', 'left', this.left);
    Screen.addCommand('j', 'up', TTT.up);
    Screen.addCommand('k', 'down', TTT.down);
    Screen.addCommand('l', 'right', TTT.right);

    Screen.render();
  }

  // Remove this
  // static testCommand() {          // REMOVE!!!!!
  //   console.log("TEST COMMAND");
  // }
  up() {
    this.cursor.up()
  }

  down() {
    this.cursor.down()
  }

  left() {
    // console.log('up')
    this.cursor.left()
  }

  right() {
    // console.log('up')
    this.cursor.right();
  }

  static checkWin(grid) {
    // Return 'X' if player X wins

    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    if (!isEmptyGrid(grid)) {
      if (fullBoard(grid)) {
        let winner = checkHorizontalWin(grid) || checkVerticalWin(grid) || checkdiagonalWin(grid);
        if (winner) return winner;
        return isTie(grid);
      }
      else {
        return noWin(grid);
      }
    }
    return false;

  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

grid = [['X', 'X', ' '],
['X', 'O', 'O'],
['O', 'X', 'O']]

// console.log(TTT.checkWin(grid));
let cur = new TTT();
console.log(cur)
cur.down();
cur.down();
cur.up();
// console.log(cur.cursor);
console.log(cur)

module.exports = TTT;

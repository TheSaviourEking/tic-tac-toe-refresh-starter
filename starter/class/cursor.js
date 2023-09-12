const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
    Screen.render();
  }

  setBackgroundColor() {
    Screen.initialize(this.numRows, this.numCols);
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
  }

  up() {
    // Move cursor up
    if (this.row > 0 && this.row < this.numRows - 1) this.row--
  }

  down() {
    // Move cursor down
    // this.row++;
    if (this.row >= 0 && this.row < this.numRows - 1) this.row++
  }

  left() {
    // Move cursor left
    if (this.col > 0 && this.col < this.numCols - 1) this.col--
  }

  right() {
    // Move cursor right
    if (this.col < this.numCols - 1) this.col++
  }

}

// let cursor = new Cursor(3, 3);
// console.log(Screen)
// cursor.setBackgroundColor()
// cursor.resetBackgroundColor()
// console.log(cursor)
// cursor.down();
// cursor.down();
// cursor.down();
// cursor.up();
// cursor.down();
// cursor.up()
// cursor.right(); cursor.right(); cursor.right()
// console.log(cursor)

module.exports = Cursor;

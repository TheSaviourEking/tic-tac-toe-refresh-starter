function isEmptyGrid(grid) {
    for (let gridItem of grid) {
        // console.log(this);
        for (let gridFigure of gridItem) {
            // console.log(gridFigure);
            if (gridFigure !== ' ') return false;
        }
    }
    return true;
}

function checkHorizontalWin(grid) {
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];

        for (let j = 1; j < grid[0].length - 1; j++) {
            if (row[j] !== ' ' && row[j] !== '') {
                if (row[j - 1] === row[j] && row[j] === row[j + 1]) {
                    // console.log(row[j])
                    return row[j];
                }
            }
        }
    }

    // return false;
}

function checkVerticalWin(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 1; j < grid[0].length - 1; j++) {
            let col = grid[j];

            if (col[i] !== ' ' && col[i] !== '') {
                // console.log(grid[j][0])
                if (grid[j - 1][i] === grid[j][i] && grid[j][i] === grid[j + 1][i]) return grid[j][i];
            }
        }
    }

    return false;
}

function checkdiagonalWin(grid) {
    for (let i = 1; i < grid.length - 1; i++) {
        let row = grid[i];

        if (grid[i - 1][i - 1] === grid[i][i] && grid[i][i] === grid[i + 1][i + 1]) return grid[i][i];
        else {
            // if (row[])
            // console.log(grid[i - 1][i + 1])
            if (grid[i - 1][i + 1] === grid[i][i] && grid[i][i] === grid[i + 1][i - 1]) return grid[i][i];
        }
    }

    return false;
}

function isTie(grid) {
    if (!isEmptyGrid(grid) && !checkHorizontalWin(grid) && !checkVerticalWin(grid) && !checkdiagonalWin(grid)) {
        // for (let i = 0; i < grid.length; i++) {
        //     for (let j = 0; j < grid[0].length; j++) {

        //     }
        // }
        if (fullBoard(grid)) {
            return 'T';
        }
    }
    return false;
}

function noWin(grid) {
    if (!fullBoard(grid) && !isTie(grid)) {
        return checkHorizontalWin(grid) || checkVerticalWin(grid) || checkdiagonalWin(grid);
    }
    return false;
}

function fullBoard(grid) {
    let result = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== ' ') {
                result.push(grid[i][j]);
            }
            // console.log(grid[i][j])
        }
    }

    return result.length === grid.length * grid[0].length;
}
module.exports = {
    isEmptyGrid,
    checkHorizontalWin,
    checkVerticalWin,
    checkdiagonalWin,
    isTie,
    fullBoard,
    noWin
}

/**
 * @param {number} n
 */
var TicTacToe = function(n) {
    this.field = Array.from({length: n}, () => Array(n).fill(0));
    this.n = n
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} player
 * @return {number}
 */
const checkCol = (field, n, col, player) => {
    for (let i=0; i<n; i++) {
        if (field[i][col] !== player) return false;
    }
    
    return true;
}

const checkRow = (field, n, row, player) => {
    for (let i=0; i<n; i++) {
        if (field[row][i] !== player) return false
    }
    
    return true
}

const checkDiagonal = (field, n, player) => {
    for (let i=0; i<n; i++) {
        if (field[i][i] !== player) return false
    }
    
    return true
}

const checkAntiDiagonal = (field, n, player) => {
    for (let i=0; i<n; i++) {
        if (field[i][n-i-1] !== player) return false
    }
    
    return true
}

TicTacToe.prototype.move = function(row, col, player) {
    this.field[row][col] = player;
    
    if (checkCol(this.field, this.n, col, player) 
       || checkRow(this.field, this.n, row, player)
       || (row === col && checkDiagonal(this.field, this.n, player))
       || (row === this.n - col - 1 && checkAntiDiagonal(this.field, this.n, player))) {
        return player
    }
    
    return 0
};

/** 
 * Your TicTacToe object will be instantiated and called as such:
 * var obj = new TicTacToe(n)
 * var param_1 = obj.move(row,col,player)
 */
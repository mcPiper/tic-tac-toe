class TicTacToe {
    constructor() {
        this.board = [[null, null, null],[null, null, null],[null, null, null]];
        this.currentPlayer = 'x';
        this.winPos = [
            // horizontals
            [[0, 0], [0, 1], [0, 2]],
            [[1, 0], [1, 1], [1, 2]],
            [[2, 0], [2, 1], [2, 2]],
            // verticals
            [[0, 0], [1, 0], [2, 0]],
            [[0, 1], [1, 1], [2, 1]],
            [[0, 2], [1, 2], [2, 2]],
            // diagonals
            [[0, 0], [1, 1], [2, 2]],
            [[2, 0], [1, 1], [0, 2]]
          ];
          this.marks = ['x', 'o'];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.board[rowIndex][columnIndex] === null){
            this.board[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x'
        }
    }

    isFinished() {
        if((this.getWinner() !== null) || (this.isDraw())) {
            return true;
        }
        return false;
    }

    getWinner() {
        for(let i = 0; i < this.winPos.length; i++){
            const winner = this.winnerHelper(this.winPos[i]);
            if (winner != null) {
              return winner;
            }
        }
        return null
    }

    winnerHelper(winPos) {
        for (let markIdx = 0; markIdx < this.marks.length; markIdx++) {
          const targetMark = this.marks[markIdx];
          let winner = true;
          for (let posIdx = 0; posIdx < 3; posIdx++) {
            const pos = winPos[posIdx];
            const mark = this.board[pos[0]][pos[1]];
            if (mark != targetMark) {
              winner = false;
            }
          }
          if (winner) {
            return targetMark;
          }
        }
        return null;
      }

    noMoreTurns() {
        let noTurns = true;
        this.board.forEach((ele) => {
            if(ele.includes(null)) noTurns = false
        })
        return noTurns;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()){
            return true
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.board[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;

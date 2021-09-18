// this class contains all properties and function of the game

class Game {

    constructor() {

        console.log("You are in the Game");
        this.turn = "X"
        this.board = new Array(9).fill(null);

    }


    //Game start with X's turn this function is called in the makeMOve function  to change the user for alternative moves-----------------------
    nextTurn() {
        if (this.turn == "X") {
            this.turn = "O"
        }
        else {
            this.turn = "X"
        }
    }

    //this is make move function this function decides in which index of game.bords keep  
    //this also checks if the game is not completed and if the array position already does nnot contain ant value-----------------------
    makeMove(i) {
        if (this.endOfGame()) {
            return;
        }
        if (this.board[i]) {
            return;
        }
        this.board[i] = this.turn;

        let winningCombination = this.findWinningCombination()
        console.log("This is winner", winningCombination);
        if (!winningCombination) {
            this.nextTurn()
        }

    }



    //this function checks for all the winning combinatons   called above in makemove function-----------------------------------
    findWinningCombination() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [6, 4, 2],
        ]

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;

            if (this.board[a] &&
                (this.board[a] === this.board[b] && this.board[a] === this.board[c])) {
                return combination;
            }



        }
        return null;
    }


    // this function ends the game if winning requirements are met called avove in makemove function-----------------------------------------------

    endOfGame() {
        let winningCombination = this.findWinningCombination();
        if (winningCombination) {
            return true;
        }
        return false;
    }






}


export default Game;
//this class maps the goame.board that is array that contains gamedata to the ui-----------------------

export default class GameView {

    constructor() {
        console.log("init gameView")
    }


    //this function updates the board according to the data in the game.board-----------------------------------------

    updateBoard(game) {
        this.updateTurn(game);

        const winningCombination = game.findWinningCombination();

        for (let i = 0; i < game.board.length; i++) {
            const tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove('tile-winner');

            let tileType = game.board[i] == "X" ? "tile-X" : "tile-O";

            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`

            if (winningCombination && winningCombination.includes(i)) {
                tile.classList.add("tile-winner")
            }


        }

    }


    //updates players css according to whose turn it is  called in update board function -----------------------------------
    updateTurn(game) {
        let playerX = document.querySelector('.player-X')
        let playerO = document.querySelector('.player-O')

        playerX.classList.remove('active')
        playerO.classList.remove('active')

        if (game.turn == 'X') {
            playerX.classList.add('active')
        }
        else {
            playerO.classList.add('active')

        }

    }

}
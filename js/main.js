import Game from './Game.js';
import GameView from './GameView.js'


let game = new Game();
let gameView = new GameView();


//grabbing all the tiles of the boards as an array
let tiles = document.querySelectorAll('.board-tile');


//looping through all the tiles and calling the onTile click function with the index that tile is clicked-------------------------
tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        onTileClick(tile.dataset.index)

    })
})



//  is called in tiles.forEach function 
//makes move and updates the board according to that------------------
function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
}




//to restart the game -------------------------
document.querySelector('.restart').addEventListener('click', () => {
    game = new Game();
    gameView.updateBoard(game)

})



gameView.updateBoard(game)




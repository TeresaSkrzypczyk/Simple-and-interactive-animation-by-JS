document.addEventListener("DOMContentLoaded", function () {

    function GameOfLife (boardWidth, boardHeight) {
        this.width = boardWidth;
        this.height = boardHeight;

        var board = document.querySelector('#board');
        //console.log(this.width);
        this.numberOfCells = boardWidth * boardHeight;

        var cells = [];
        //console.log(this.numberOfCells);

        this.createBoard = function () {
            board.style.width = (boardWidth * 10) + 'px';
            board.style.height = (boardHeight * 10) + 'px';

                 for (var i = 0; i < this.numberOfCells; i ++) {
                     var newCellDiv = document.createElement('div');
                     board.appendChild(newCellDiv);
                     cells.push(newCellDiv);
                 }

                 cells.forEach(function (newCellDiv) {
                     newCellDiv.addEventListener("click", function (event) {
                         newCellDiv.classList.toggle("live");
                     });
                 });
        };

    }

    var game = new GameOfLife(10, 10);
    game.createBoard();
    //console.log(game);

});
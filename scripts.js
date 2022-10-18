const gameBoard = (() => {
    const boardSelections = [['', '', ''], ['', '', ''], ['', '', '']];

    const renderBoard = () => {
        let content = document.getElementById("content");
        let board = document.createElement("div");
        board.id = "board";

        boardSelections.forEach(row => {
            for (let i = 0; i < 3; i++) {
                let tile = document.createElement("div");
                tile.classList.add("tile");
                tile.innerHTML = row[i];
                board.appendChild(tile);
            }
        });

        content.appendChild(board);
    };

    return {renderBoard}
})();

const displayController = (() => {

})();

const Player = (name) => {
    const getName = () => name;
};

gameBoard.renderBoard();
const Player = (name, symbol) => {
    // What is under the player goes here
    return {name, symbol};
};

const gameBoard = (() => {
    // stuff that happens to game goes here
    const cells = Array.from(document.querySelectorAll('.cell'));
    
    cells.forEach(cell => cell.addEventListener('click', (e) => {
        console.log(e.target.getAttribute('data-cell'));
        document.getElementsByClassName('cell').disabled = true;
    }));

    return {cells};
})();

const gameController = (() => {
    // displaying everything goes here

})();
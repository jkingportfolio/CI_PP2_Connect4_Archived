// listen for the DOM content to be loaded

// game functions to create

let winningCombinations = [
    //horizontal
    [0, 1, 2, 3]
    [1, 2, 3, 4]
    [2, 3, 4, 5]
    [3, 4, 5, 6]
    [7, 8, 9, 10]
    [8, 9, 10, 11]
    [9, 10, 11, 12]
    [10, 11, 12, 13]
    [14, 15, 16, 17]
    [15, 16, 17, 18]
    [16, 17, 18, 19]
    [17, 18, 19, 20]
    [21, 22, 23, 24]
    [22, 23, 24, 25]
    [23, 24, 25, 26]
    [24, 25, 26, 27]
    [28, 29, 30, 31]
    [29, 30, 31, 32]
    [30, 31, 32, 33]
    [31, 32, 33, 34]
    [35, 36, 37, 38]
    [36, 37, 38, 39]
    [37, 38, 39, 40]
    [38, 39, 40, 41]
]

//check board, check if player 1 has a winning array, then check player 2
// display winner if there is one

// loop to check what grid items are being used, and if placement is correct

// display notification, player 1 turn, player 2 turn, winner

// modals

document.getElementById("#newGameModal").addEventListener('click',
function(){
    document.querySelector('.new-game-modal').style.display = "Flex";
});

document.querySelector('.new-game-close').addEventListener('click', 
function(){
    document.querySelector('.new-game-modal').style.display = "None";
});

document.getElementById("#helpModal").addEventListener('click',
function(){
    document.querySelector('.help-modal').style.display = "Flex";
});

document.querySelector('.help-close').addEventListener('click', 
function(){
    document.querySelector('.help-modal').style.display = "None";
});

document.getElementById("#settingsModal").addEventListener('click',
function(){
    document.querySelector('.settings-modal').style.display = "Flex";
});

document.querySelector('.settings-close').addEventListener('click', 
function(){
    document.querySelector('.settings-modal').style.display = "None";
});

document.getElementById("#contactModal").addEventListener('click',
function(){
    document.querySelector('.contact-modal').style.display = "Flex";
});

document.querySelector('.contact-close').addEventListener('click', 
function(){
    document.querySelector('.contact-modal').style.display = "None";
});



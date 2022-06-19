// listen for the DOM content to be loaded

// game functions to create

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



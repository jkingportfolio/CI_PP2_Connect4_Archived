// modals

document.getElementById("#newGameModal").addEventListener('click',
function(){
    document.querySelector('.new-game-modal').style.display = "Flex";
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.new-game-modal').style.display = "None";
});

document.getElementById("#helpModal").addEventListener('click',
function(){
    document.querySelector('.help-modal').style.display = "Flex";
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.help-modal').style.display = "None";
});

document.getElementById("#settingsModal").addEventListener('click',
function(){
    document.querySelector('.settings-modal').style.display = "Flex";
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.settings-modal').style.display = "None";
});

document.getElementById("#contactModal").addEventListener('click',
function(){
    document.querySelector('.contact-modal').style.display = "Flex";
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.contatc-modal').style.display = "None";
});



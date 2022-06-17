// modals

document.getElementById("#newGameModal").addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = "Flex";
});

document.getElementById("#helpModal").addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = "Flex";
});

document.getElementById("#settingsModal").addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = "Flex";
});

document.getElementById("#contactModal").addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = "Flex";
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.bg-modal').style.display = "None";
});

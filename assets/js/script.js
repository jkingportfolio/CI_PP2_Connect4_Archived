// modals

document.getElementById("#newGameModal").addEventListener('click',
function(){
    document.querySelector('.bg-modal').style.display = "Flex";
});

document.querySelector('.close').addEventListener('click', 
function(){
    document.querySelector('.bg-modal').style.display = "None";
});

// Listen for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {

    // Variables
    
    const notification = document.getElementById('game-notification');
    const cells = document.querySelectorAll('.game-grid span')
    let currentPlayer = 1
    let music = false;
    let sounds = false;

    let winningCombinations = [
        //horizontal
        [0, 1, 2, 3],
        [1, 2, 3, 4],
        [2, 3, 4, 5],
        [3, 4, 5, 6],
        [7, 8, 9, 10],
        [8, 9, 10, 11],
        [9, 10, 11, 12],
        [10, 11, 12, 13],
        [14, 15, 16, 17],
        [15, 16, 17, 18],
        [16, 17, 18, 19],
        [17, 18, 19, 20],
        [21, 22, 23, 24],
        [22, 23, 24, 25],
        [23, 24, 25, 26],
        [24, 25, 26, 27],
        [28, 29, 30, 31],
        [29, 30, 31, 32],
        [30, 31, 32, 33],
        [31, 32, 33, 34],
        [35, 36, 37, 38],
        [36, 37, 38, 39],
        [37, 38, 39, 40],
        [38, 39, 40, 41],
        //vertical
        [0, 7, 14, 21],
        [7, 14, 21, 28],
        [14, 21, 28, 35],
        [1, 8, 15, 22],
        [8, 15, 22, 29],
        [15, 22, 29, 36],
        [2, 9, 16, 23],
        [9, 16, 23, 30],
        [16, 23, 30, 37],
        [3, 10, 17, 24],
        [10, 17, 24, 31],
        [17, 24, 31, 38],
        [4, 11, 18, 25],
        [11, 18, 25, 32],
        [18, 25, 32, 39],
        [5, 12, 19, 26],
        [12, 19, 26, 33],
        [19, 26, 33, 40],
        [6, 13, 20, 27],
        [13, 20, 27, 34],
        [20, 27, 34, 41],
        //diagonal right to left
        [3, 9, 15, 21],
        [4, 10, 16, 22],
        [5, 11, 17, 23],
        [6, 12, 18, 24],
        [10, 16, 22, 28],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [13, 19, 25, 31],
        [17, 23, 29, 35],
        [18, 24, 30, 36],
        [19, 25, 31, 37],
        [20, 26, 32, 38],
        //diagonal left to right
        [0, 8, 16, 24],
        [1, 9, 17, 25],
        [2, 10, 18, 26],
        [3, 11, 19, 27],
        [7, 15, 23, 31],
        [8, 16, 24, 32],
        [9, 17, 25, 33],
        [10, 18, 26, 34],
        [14, 22, 30, 38],
        [15, 23, 31, 39],
        [16, 24, 32, 40],
        [17, 25, 33, 41],
    ]


    //check board, check if player 1 has a winning array, then check player 2
    function winner() {

    }
    // display winner if there is one

    // loop to check what grid items are being used, and if placement is correct

    for (let i = 0; i < cells.length; i++) {
        cells[i].onclick = () => {
            //log cell number which has been clicked
            console.log(i);
            if (cells[i + 7].classList.contains('occupied') && !cells[i].classList.contains('occupied')) {
                if (currentPlayer == 1) {
                    cells[i].classList.add('occupied');
                    cells[i].classList.add('player-one');
                    currentPlayer = 2;
                    notification.innerHTML = `Its Player ${currentPlayer}'s turn!`
                } else if (currentPlayer == 2) {
                    cells[i].classList.add('occupied');
                    cells[i].classList.add('player-two');
                    currentPlayer == 1;
                    notification.innerHTML = `Its Player ${currentPlayer}'s turn!`
                }
            } else alert('not correct');
        }
    }
    // display notification, player 1 turn, player 2 turn, winner

});

// Modals

document.getElementById("#newGameModal").addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "Flex";
    });

document.querySelector('.new-game-close').addEventListener('click',
    function () {
        document.querySelector('.new-game-modal').style.display = "None";
    });

document.getElementById("#helpModal").addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "Flex";
    });

document.querySelector('.help-close').addEventListener('click',
    function () {
        document.querySelector('.help-modal').style.display = "None";
    });

document.getElementById("#settingsModal").addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "Flex";
    });

document.querySelector('.settings-close').addEventListener('click',
    function () {
        document.querySelector('.settings-modal').style.display = "None";
    });

document.getElementById("#contactModal").addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "Flex";
    });

document.querySelector('.contact-close').addEventListener('click',
    function () {
        document.querySelector('.contact-modal').style.display = "None";
    });
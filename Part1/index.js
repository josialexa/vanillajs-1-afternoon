// console.log('hello');
let gameArr = [];

const play = (boxID) => {
    let curPlayerSpan = document.getElementById('player');
    let curPlayer = curPlayerSpan.innerText;
    let clickedBox = document.getElementById(boxID);
    
    clickedBox.innerText = curPlayer;
    gameArr[boxID] = curPlayer;
    console.log(gameArr);
    curPlayerSpan.innerText = curPlayer == 'X' ? 'O' : 'X';
};
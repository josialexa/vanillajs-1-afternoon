console.log('hello');

const play = (boxID) => {
    let curPlayerBox = document.getElementById('player');
    let curPlayer = curPlayerBox.innerText;
    let clickedBox = document.getElementById(boxID);
    
    clickedBox.innerText = curPlayer;
    curPlayerBox.innterText = curPlayer == 'X' ? 'O' : 'X';
};
console.log('hello');

const play = (boxID) => {
    let curPlayerSpan = document.getElementById('player');
    let curPlayer = curPlayerSpan.innerText;
    console.log(curPlayer);
    let clickedBox = document.getElementById(boxID);
    
    clickedBox.innerText = curPlayer;
    curPlayerSpan.innerText = curPlayer == 'X' ? 'O' : 'X';
    // if(curPlayer == 'X') {
    //     console.log('its X');
    //     curPlayerSpan.innerText = 'O';
    // } else {
    //     console.log('its not X');
    //     curPlayerSpan.innerText = 'X';
    // }
};
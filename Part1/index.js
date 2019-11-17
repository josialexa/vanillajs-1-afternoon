// console.log('hello');
let gameArr = [];

const play = (boxID) => {
    let curPlayerSpan = document.getElementById('player');
    let curPlayer = curPlayerSpan.innerText;
    let clickedBox = document.getElementById(boxID);
    
    clickedBox.innerText = curPlayer;
    gameArr[boxID] = curPlayer;

    //check for winner
    //check horizontal
    for(let i = j = Math.floor(boxID / 3) * 3; i < j + 3; i++) {
        if(gameArr[i] != curPlayer) {
            break;
        } else if(i - j >= 2) {
            //declare winner as curPlayer
            winner(curPlayer);
        }
    }
    
    //check vertical
    for(let i = j = boxID % 3; i <= j + 6; i += 3) {
        if(gameArr[i] != curPlayer) {
            break;
        } else if(i - j == 6) {
            //declare winner as curPlayer
            winner(curPlayer);
        }
    }
    
    //check diag
    for(let i = 0; i < 9; i += 4) {
        if(gameArr[i] != curPlayer) {
            break;
        } else if(i == 8) {
            //declare winner as curPlayer
            winner(curPlayer);
        }
    }
    
    //check reverse diag
    for(let i = 2; i <= 6; i += 2) {
        if(gameArr[i] != curPlayer) {
            break;
        } else if(i >= 6) {
            //declare winner as curPlayer
            winner(curPlayer);
        }
    }

    if(gameArr.findIndex(e => e == undefined) == -1 && gameArr.length == 9) {
        alert("CAT's game!");
    }

    curPlayerSpan.innerText = curPlayer == 'X' ? 'O' : 'X';
};

let winner = (winner) => {
    alert(`${winner} wins!`);
}
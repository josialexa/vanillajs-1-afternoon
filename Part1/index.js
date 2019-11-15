console.log('hello');

const play = () => {
    let curPlayer = document.getElementById('player');
    curPlayer.innerText = curPlayer.innerText == 'X' ? 'O' : 'X';
};
//console.log('The house always wins!');

const setCard = () => {
    let cardID = document.getElementById('cardID').value;
    let cardStyle = document.getElementById('cardStyle').value;
    // console.log(cardID, cardStyle);
    document.getElementById(cardID).style.color = cardStyle;
};

const reset = () => {
    let cards = document.getElementsByTagName('section');

    for(let i = 0; i < cards.length; i++) {
        cards[i].style.color = "grey";
    }
}

document.getElementById('resetCards').addEventListener('click', reset);
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 =  Math.floor(Math.random() * 6) + 1;
const playerOneImage = document.getElementById('playerOneImage');
const playerTwoImage = document.getElementById('playerTwoImage');
const mainHeading = document.querySelector('h1');


getWinner = () => {

    if (randomNumber1 > randomNumber2) {
         mainHeading.innerHTML = 'Player 1 Wins!!';
        
    } else if ( randomNumber2 > randomNumber1) {
        mainHeading.innerHTML = 'Player 2 Wins!';

    } else if( randomNumber1 === randomNumber2) {
        mainHeading.innerHTML = "It's a draw!";

    } else {
        mainHeading.innerHTML = 'Error';
    }
}


changePlayer1Image = () => {

    switch (randomNumber1) {

    case 1:
        playerOneImage.setAttribute("src", "./images/dice1.png")
        break;
        
    case 2:
        playerOneImage.setAttribute("src", "./images/dice2.png")
        break;

    case 3:
        playerOneImage.setAttribute("src", "./images/dice3.png")
        break;

    case 4:
        playerOneImage.setAttribute("src", "./images/dice4.png")
        break;

    case 5:
        playerOneImage.setAttribute("src", "./images/dice5.png")
        break;

    case 6:
        playerOneImage.setAttribute("src", "./images/dice6.png")
        break;

    default:
        playerOneImage.setAttribute("src", "./images/dice6.png");
    }
    
}

changePlayer1Image();



changePlayer2Image = () => {

    switch (randomNumber2) {

        case 1:
            playerTwoImage.setAttribute("src", "./images/dice1.png")
            break;
            
        case 2:
            playerTwoImage.setAttribute("src", "./images/dice2.png")
            break;
    
        case 3:
            playerTwoImage.setAttribute("src", "./images/dice3.png")
            break;
    
        case 4:
            playerTwoImage.setAttribute("src", "./images/dice4.png")
            break;
    
        case 5:
            playerTwoImage.setAttribute("src", "./images/dice5.png")
            break;
    
        case 6:
            playerTwoImage.setAttribute("src", "./images/dice6.png")
            break;

        default:
            playerTwoImage.setAttribute("src", "./images/dice6.png");
        }

}

changePlayer2Image();
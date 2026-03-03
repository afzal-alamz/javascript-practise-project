const dice1 = document.querySelector('#dice1');
const dice2 = document.querySelector('#dice2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const result = document.querySelector('#result');
const round = document.querySelector('#round');
const rollBtn = document.querySelector('#rollBtn');
const resetBtn = document.querySelector('#resetBtn');
let player1Score = 0,player2Score=0,currentRound=0;
function rollDice() {
    if (currentRound >= 5) {
        return;
    }
    const diceValue1 = Math.floor(Math.random() * 6) + 1;
    const diceValue2 = Math.floor(Math.random() * 6) + 1;
    dice1.innerText = diceValue1;
    dice2.innerText = diceValue2;
    currentRound++;
    round.innerText = currentRound;
    if (diceValue1 > diceValue2) {
        player1Score++;
        score1.innerText = player1Score;
        result.innerText = '🎉 Player 1 Wins This Round!';
    } else if (diceValue2 > diceValue1) {
        player2Score++;
        score2.innerText = player2Score;
        result.innerText = '🎉 Player 2 Wins This Round!';
    } else {
        result.innerText = '🤝 Tie!';
    }
    if (currentRound >= 5) {
        rollBtn.disabled = true;   
        if (player1Score > player2Score) {
            result.innerText = '🏆 Player 1 Wins the Game! 🏆';
        } else if (player2Score > player1Score) {
            result.innerText = '🏆 Player 2 Wins the Game! 🏆';
        } else {
            result.innerText = '🤝 Game Tied!';
        }
    }
}

// Reset function
function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentRound = 0;
    
    score1.innerText = '0';
    score2.innerText = '0';
    round.innerText = '0';
    dice1.innerText = '?';
    dice2.innerText = '?';
    result.innerText = "Let's Play!";
    
    rollBtn.disabled = false;
}
rollBtn.addEventListener('click', rollDice);
resetBtn.addEventListener('click', resetGame);





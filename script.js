function computerPlay() {
  let roll = Math.floor(Math.random() * 3);
  switch (roll) {
    case 0: 
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2: 
      return 'scissors';
      break;
    default:
      return '';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let draw = {win:'draw', message:'Draw!'};
  let pWin = {win:'player', message:'Player wins!'};
  let cWin = {win:'computer', message:'Computer wins!'};
  let cError = {win:'error', message:'Computer error'};
  let pError = {win:'error', message:'Player error'};

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return draw;
        break;
      case 'paper':
        return cWin;
        break;
      case 'scissors':
        return pWin;
        break;
      default:
        return cError;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        return pWin;
        break;
      case 'paper':
        return draw;
        break;
      case 'scissors':
        return cWin;
        break;
      default:
        return cError;
    }
  } else if (playerSelection === 'scissors') {
    switch (computerSelection) {
      case 'rock':
        return cWin;
        break;
      case 'paper':
        return pWin;
        break;
      case 'scissors':
        return draw;
        break;
      default:
        return cError;
    }
  } else {
    return pError;
  }
}

function game(playerSelection) {
  const results = document.querySelector('.results');
  if (gameOver) return;
  if (pScore < 5 && cScore < 5) {
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result.win === 'player') {
      pScore++;
    } else if (result.win === 'computer') {
      cScore++;
    }
    let text = `You chose: ${playerSelection}. Computer chose: ${computerSelection}.
                  ${result.message} Score is ${pScore} - ${cScore}`;
    
    const p = document.createElement('p');
    p.textContent = text;
    results.appendChild(p);
  }
  if (pScore === 5 || cScore === 5) {
    let endMsg = `Game over! 
    Player score: ${pScore}.
    Computer score: ${cScore}.
    ${(pScore > cScore) ? 'Player wins!' : 'Computer wins!'}`;
    const endP = document.createElement('p');
    endP.textContent = endMsg;
    results.appendChild(endP);
    gameOver = true;
    return;
  }
}


const buttons = document.querySelectorAll('button');
let gameOver = false;
let pScore = 0;
let cScore = 0;

buttons.forEach((button) => {
  
  button.addEventListener('click', (e) => {
    game(e.target.textContent);
  });
});



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

function game() {
  let pScore = 0;
  let cScore = 0;
  let draw = 0;
  let playerSelection = '';
  while (!playerSelection) {
    playerSelection = prompt('Choose Rock, paper, or scissors', '');
  }
  let computerSelection = computerPlay();
  let result = playRound(playerSelection, computerSelection);
  if (result.win === 'player') {
    pScore++;
  } else if (result.win === 'computer') {
    cScore++;
  } else if (result.win === 'draw') {
    draw++;
  }
  console.log(result.message);
  /*   
  let endMsg = 
    `Player score: ${pScore}
    Computer score: ${cScore}
    Draw: ${draw}
    ${(pScore > cScore) ? 'Player wins!' : (cScore > pScore) ?
        'Computer wins!' : 'Draw!'}`;
  console.log(endMsg);
  */
}


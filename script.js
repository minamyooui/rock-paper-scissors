function computerPlay() {
  let roll = Math.floor(Math.random() * 3);
  switch (roll) {
    case 0: 
      return 'Rock';
      break;
    case 1: 
      return 'Paper';
      break;
    case 2: 
      return 'Scissors';
      break;
    default:
      return '';
  }
}

function playRound(playerSelection, computerSelection) {
  let draw = 'Draw!';
  let pWin = 'Player wins!';
  let cWin = 'Computer wins!';

  if (playerSelection === 'Rock') {
    switch (computerSelection) {
      case 'Rock':
        return draw;
        break;
      case 'Paper':
        return cWin;
        break;
      case 'Scissors':
        return pWin;
        break;
    }
  } else if (playerSelection === 'Paper') {
    switch (computerSelection) {
      case 'Rock':
        return pWin;
        break;
      case 'Paper':
        return draw;
        break;
      case 'Scissors':
        return cWin;
        break;
    }
  } else if (playerSelection === 'Scissors') {
    switch (computerSelection) {
      case 'Rock':
        return cWin;
        break;
      case 'Paper':
        return pWin;
        break;
      case 'Scissors':
        return draw;
        break;
      default:
        return 'Invalid '
    }
  } else {

  }
}
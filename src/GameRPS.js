

class GameRPS {
  player
  computer
     
  constructor(player, computer) {
    this.player = player
    this.computer = computer;
  }
  
  result(computer, playerChoice) {
    if (playerChoice === computer.choice) {
      return `Its a draw`

    } else if (playerChoice === 'Paper' && computer.choice === 'Rock') {
      return `${player.name} is the winner`
    } else if (playerChoice === 'Scissors' && computer.choice === 'Paper') {
      return `${player.name} is the winner`
    } else if (playerChoice === 'Rock' && computer.choice === 'Scissors') {
      return `${player.name} is the winner`
    } else {
      return `${computer.name} is the winner`
    }
  }
}



export default GameRPS;
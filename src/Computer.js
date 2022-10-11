class Computer {
  
  constructor() {
    this.name = 'Computer'
    this.choice = randomChoice();
  }
}


function randomChoice() {
  let choice = Math.floor(Math.random() * 3)
  if (choice === 0) {
    return 'Scissors'

  } if (choice === 1) {
    return 'Paper'
  } else { 
    return 'Rock'
  }
}
export default Computer;
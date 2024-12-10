const computerPlay = () => {
    const arrOfChoice = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() *3)
    const getComputerChoice = arrOfChoice[randomNum]
    return getComputerChoice
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection ) {
        return `You tied! You both picked ${playerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++
        return 'You lost! Rock crushes Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You won! Scissors cuts Paper'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++
        return 'You lost! Paper covers Rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! Rock crushes Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++
        return 'You lost! Scissors cuts Paper'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won! Paper covers Rock'
    }   

}

const playerSelection = 'rock'
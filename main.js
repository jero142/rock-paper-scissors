const computerPlay = () => {
    const arrOfChoice = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() *3)
    const getComputerChoice = arrOfChoice[randomNum]
    return getComputerChoice
}


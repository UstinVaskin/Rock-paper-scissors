function main() {

  //Storing the DOM in variables: 

  let userScore = 0
  let compScore = 0

  const userScore_span = document.getElementById('user-score')
  const compScore_span = document.getElementById('comp-score')
  const result_div = document.querySelector('.result')
  const rock_div = document.getElementById('r')
  const paper_div = document.getElementById('p')
  const scissors_div = document.getElementById('s')

  function getCompChoie() {
    const choices = ['r', 'p', 's']
    const randomNum = Math.floor(Math.random() * 3) // randon numb 
    return choices[randomNum] // choose element p or r or s 
  }


  // Users choice 
  rock_div.addEventListener('click', () => {
    game('r')
  })
  paper_div.addEventListener('click', () => {
    game('p')
  })
  scissors_div.addEventListener('click', () => {
    game('s')
  })


  function game(userChoice) {  // looks at variations Userchoice and  compChoice
    const compChoice = getCompChoie()
    switch (userChoice + compChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        win()
        break
      case 'rp':
      case 'ps':
      case 'sr':
        lose()
        break
      case 'pp':
      case 'rr':
      case 'ss':
        tie()
    }
  }

  function win() {
    userScore++
    userScore_span.innerHTML = userScore
    result_div.innerHTML = 'You Win! '

  }

  function lose() {
    compScore++
    compScore_span.innerHTML = compScore
    result_div.innerHTML = `You Lose!`
  }

  function tie() {
    console.log(tie)
    result_div.innerHTML = 'It is a Tie!'
  }

  const reset = document.querySelector('.reset')
  reset.addEventListener('click', () => {
    location.reload()
  })

}

window.addEventListener('DOMContentLoaded', main)



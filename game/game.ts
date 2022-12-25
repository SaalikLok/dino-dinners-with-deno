const game = {
  score: 0,
  turn: 0,
  marketDinner: [0, 0, 0]
}

const getRandomInt = (min: number, max :number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const generateMarketDinner = () => {
  game.marketDinner = game.marketDinner.map(_ingredient => {
    return getRandomInt(1, 10)
  })
}

const calculateScore = (playerDinner : number[], marketDinner : number[]) => {

  for (let index = 0; index < 3; index++) {
    const diff = Math.abs(marketDinner[index] - playerDinner[index])
    
    game.score += (10 - diff)
  }
}

const getPlayerDinner = () => {
  const spiceLevel = prompt("Spice? >>")
  const saltLevel = prompt("Salt? >>")
  const sweetLevel = prompt("Sweet? >>")

  return [parseInt(spiceLevel), parseInt(saltLevel), parseInt(sweetLevel)]
}

export const playGame = () => {
  generateMarketDinner();

  while (game.turn < 5) {
    console.log()
    console.log("---------")
    console.log(`Turn:  ${game.turn + 1} of 5`)
    console.log(`Earnings: 🪙${game.score}`)

    calculateScore(getPlayerDinner(), game.marketDinner)

    game.turn++
  }

  console.log("")
  console.log("")
  console.log("Game over!")
  console.log(`You earned 🪙${game.score}`)
}



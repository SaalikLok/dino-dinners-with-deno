import { getRandomInt } from "./utils.ts";

const game = {
  score: 0,
  turn: 0,
  marketDinner: [0, 0, 0]
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
  const spiceLevel = prompt("Spice 🌶️ >>")
  const saltLevel = prompt("Salt 🧂 >>")
  const sweetLevel = prompt("Sweet 🍨 >>")

  return [parseInt(spiceLevel), parseInt(saltLevel), parseInt(sweetLevel)]
}

export const playGame = () => {
  generateMarketDinner();

  console.log(`Welcome to the kitchen! Over the next 5 days, you'll try different flavor combinations to get the dinos to absolutely LOVE your dinner.`)

  while (game.turn < 5) {
    console.log()
    console.log("---------")
    console.log(`Day:  ${game.turn + 1} of 5`)
    console.log(`Earnings: 🪙${game.score}`)
    console.log("")

    calculateScore(getPlayerDinner(), game.marketDinner)

    game.turn++
  }

  console.log("")
  console.log("")
  console.log("Game over!")
  console.log(`You earned 🪙${game.score}`)
}



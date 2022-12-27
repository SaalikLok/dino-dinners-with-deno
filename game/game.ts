import { getRandomInt } from "./utils.ts";

const game = {
  score: 0,
  turn: 0,
  marketDinner: [0, 0, 0],
};

const generateMarketDinner = () => {
  game.marketDinner = game.marketDinner.map((_ingredient) => {
    return getRandomInt(1, 10);
  });
};

const calculateScore = (playerDinner: number[], marketDinner: number[]) => {
  for (let index = 0; index < 3; index++) {
    const diff = Math.abs(marketDinner[index] - playerDinner[index]);

    game.score += 10 - diff;
  }
};

const validatedIngredient = (ingredient: string | null) => {
  if (ingredient && parseInt(ingredient) > 0 && parseInt(ingredient) <= 10) {
    return parseInt(ingredient);
  }

  return 0;
};

const getPlayerDinner = () => {
  let spiceLevel = 0;
  let saltLevel = 0;
  let sweetLevel = 0;
  let validated = false;
  // Add error handling for these prompts

  while (!validated) {
    const spiceInput = prompt("Spice 🌶️ >>");
    const saltInput = prompt("Salt 🧂 >>");
    const sweetInput = prompt("Sweet 🍨 >>");

    if (
      validatedIngredient(spiceInput) && validatedIngredient(saltInput) &&
      validatedIngredient(sweetInput)
    ) {
      spiceLevel = validatedIngredient(spiceInput);
      saltLevel = validatedIngredient(saltInput);
      sweetLevel = validatedIngredient(sweetInput);
      validated = true;
    } else {
      console.log(
        `Oops! Make sure that your spice, salt and sweet levels are numbers between 1 and 10.`,
      );
    }
  }

  return [spiceLevel, saltLevel, sweetLevel];
};

export const playGame = () => {
  generateMarketDinner();

  console.log(
    `Welcome to the kitchen! Over the next 5 days, you'll try different flavor combinations to get the dinos to absolutely LOVE your dinner.
    
    Each day, you'll see the current day and the amount of earnings you have.
    
    You'll be prompted to set the spice, salt, and sweet levels of your dino dinner.
    
    They can be integers from 1-10`,
  );

  while (game.turn < 5) {
    console.log();
    console.log("---------");
    console.log(`Day:  ${game.turn + 1} of 5`);
    console.log(`Earnings: 🪙${game.score}`);
    console.log("");

    calculateScore(getPlayerDinner(), game.marketDinner);

    game.turn++;
  }

  console.log("");
  console.log("");
  console.log("Game over!");
  console.log(`You earned 🪙${game.score}`);
};

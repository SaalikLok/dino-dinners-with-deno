export const start = () => {
  console.log(`Hello there!

Whew, am I glad you're here. We've got tons of hungry dinos to feed.`)

/**
 * 
 * Future TODO:
 * - Check if the text file has any entries in the leaderboard.
 * - If so, skip the introductory bit down here and get directly into turn 1
 * 
 */

prompt("Wait a second... do I know you? >>")

console.log(`
Oof. Silly, silly. Introductions are necessary.

I'm %cDonny%c, the Diplodocus 🦕.
`, "color: green; font-weight: bold", "color: white")

const name = prompt("And your name is? >>")

console.log(`Well, hello there %c${name}!`, "color: yellow; font-weight: bold")

prompt("\n>>")

console.log(`
On to business.

You're here to help put together dino dinners.
Based on how close your recipe is to what these picky giants want, you'll be rewarded!`)

prompt("\n>>")

console.log(`There are 3 distinct attributes to these meals:

- Spice 🌶️
- Salt 🧂
- Sweet 🍨
`)

prompt("\n>>")

console.log(`
You'll need to tweak the amounts of each every turn, to make the dinos happier.

Don't worry, it's not too difficult. Let's get started.

%cMWAAOOO!`, "color: green; font-weight: bold")

prompt("\n>>")
}
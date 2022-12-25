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


console.log(`
I'm %cDonny%c, the Diplodocus 🦕.
`, "color: green; font-weight: bold", "color: white")

prompt("\n>>")

console.log(`
Thanks for helping to put these dino dinners together.
Based on how close your recipe is to what these picky giants want, you'll earn 🪙!`)

prompt("\n>>")

console.log(`There are 3 distinct flavors to these meals:

- Spice 🌶️
- Salt 🧂
- Sweet 🍨
`)

prompt("\n>>")

console.log(`
When we start, the dinos have collectively agreed upon their perfect level of spice, salt, and sweetness.

You'll need to tweak the amounts of each every turn to make the dinos happy.

Let's get started. %cMWAAOOO!`, "color: green; font-weight: bold")

prompt("\n>>")
}
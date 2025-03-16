/* Sir Lucian, a daring magician, is on a mission to recreate the legendary trick “The Transported Man.” He needs Tesla's experimental equipment to pull off the impossible! But there’s a catch — the equipment is locked away, and to get his hands on it, Lucian needs to guess the magic number hidden by Tesla himself. 
Sir Lucian can’t do it alone. He needs your help to guess the magic number, which is between 1 and 100.
If Lucian guesses the number correctly, he’ll get the equipment and become the world’s greatest magician! But here’s the twist: Lucian doesn’t know the number. He’ll need to rely on your guesses.
You should write the code which tells you and Sir Lucian if the number was too high or too low; You should keep guessing until you get the right number, or you give up (use sentinel).


 */
function guessTheMagicNumber() {
    const magicNumber = Math.floor(Math.random() * 100) + 1; 
    let userGuess = 0;
    let guessCount = 0;

    
    console.log("Welcome to The Transported Man's Trick!");
    console.log("Guess the magic number between 1 and 100. I will tell you if your guess is too high or too low.");
    console.log("Type '0' to quit the game anytime.");

   
    while (userGuess !== magicNumber) {
        userGuess = parseInt(prompt("Enter your guess:"));

        
        if (userGuess === 0) {
            console.log("You have chosen to quit. Thanks for playing!");
            break;  // Exit the loop if user types 0
        }

        guessCount++;

        
        if (userGuess < magicNumber) {
            console.log("Too low! Try again.");
        } else if (userGuess > magicNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You guessed the magic number ${magicNumber} in ${guessCount} tries!`);
        }
    }
}
//guessTheMagicNumber();

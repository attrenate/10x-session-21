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
guessTheMagicNumber();

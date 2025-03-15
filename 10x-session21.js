// Exercise 1: The Power of Variables and Operators
let gandalfPower = 80;
let dumbledorePower = 90;


gandalfPower += 20; 
dumbledorePower -= 5; 


console.log(`Gandalf's power: ${gandalfPower}`);
console.log(`Dumbledore's power: ${dumbledorePower}`);

//  Compare and determine who is stronger
if (gandalfPower > dumbledorePower) {
    console.log("Gandalf is stronger!");
} else if (gandalfPower < dumbledorePower) {
    console.log("Dumbledore is stronger!");
} else {
    console.log("It's a tie!");
}

// Exercise 2: The Treasure Chest of Data Types
let pirate;
let gold = 98;
let map = 'Treassure map';
let isCursed = true;

console.log(typeof gold);
console.log(typeof map);
console.log(typeof isCursed);


// Exercise 3: The Potion Shop’s Price Calculator
let healthPotion = 20;
let manaPotion = 5; 

let total = healthPotion * 3 + manaPotion * 2;

console.log(total);

if (total > 50) {
    let discount = total * 0.2; 
    let finalTotal = total - discount; 
    console.log("Total is above 50, so the customer gets a 20% discount.");
    console.log("Total after discount: " + finalTotal);
}

// Exercise 4: The Brave Knight’s Inventory
let swordLevel = 11;
const armor = 'armor';
let hasShield = false;

console.log(`Sir Debugalot is ready for the battle! (he was born ready!)
    with his ${swordLevel} level sword There's no one who can stand in his way! he is protected by mighty ${armor}
   The only question left is if he has a shield to protect him? ${hasShield}`);

// Exercise 5: The Bakery's Daily Earnings

let breadPrice = 1;
let cakePrice = 15;
let breadSold = 372;
let cakeSold = 38;

let dailyEarning = breadPrice * breadSold + cakePrice * cakeSold;

console.log(`The bakery made a total of ${dailyEarning} gold coins today! 🍞🎂 Business is booming!`);

// Exercise 6: The Space Mission’s Fuel Check
let fuelCapacity = 150;
let canLaunch = (150 * 4) / 5;
let currentFuel = 88;

if(currentFuel < canLaunch){
    console.log('Launch status: Unfortunately due to the fact that spaceship has not enough fuel we cannot send the spaceship to outter space.');
} else if(currentFuel > canLaunch){
    console.log('Launch status: Due to the fact that the spaceship has no problems and the fuel is enough for the mission, We can send the spaceship to the COSMOS');
}

// Exercise 7: The Time Traveler’s Stopwatch (Updated)
// shemezara danarchens mere vizam mament
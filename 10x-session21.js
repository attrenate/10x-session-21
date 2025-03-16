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
const date = new Date().getFullYear();
const yearsJumped = 44;
const dateAfterJump = date + yearsJumped;

console.log(`After a time jump of ${yearsJumped} years, the year will be ${dateAfterJump}.`);


// Exercise 8: The Wizard’s Spell Strength Test
let abracadabra = 11;
let vingardiumLeviosa = 22;
let blahBlah = 12;

let strongestSpell;
if(abracadabra > vingardiumLeviosa && abracadabra > blahBlah){
    strongestSpell = 'abracadabra';
} else if(abracadabra < vingardiumLeviosa && abracadabra > blahBlah){
    strongestSpell = 'vingardiumLeviosa'
} else if(abracadabra === vingardiumLeviosa && abracadabra === blahBlah){
    strongestSpell = 'all three of the spells are equal';
} else if(abracadabra > vingardiumLeviosa && abracadabra < blahBlah){
    strongestSpell = 'blahBlah';
}
console.log(`The strongest spell is: ${strongestSpell}`);

// Exercise 9: The Haunted House Mystery
let kitchenHasGhost = true;
let livingRoomHasGhost = false;
let houseIsSafe = livingRoomHasGhost === !true && kitchenHasGhost === !true;

if(houseIsSafe === true){
    console.log('The house is safe! No ghosts in the Kitchen or Living Room.');
} else {
    console.log('Danger! The house is NOT safe. Ghosts detected!');
}

// Exercise 10: The Robot’s Battery Check
let batteryPower = 81;
let batterySufficient = 30;

if(batteryPower > batterySufficient){
    console.log('Battery sufficient');
} else if(batteryPower > batterySufficient){
    console.log(' Low Battery');
}

// Exercise 11: The Dragon’s Health Meter
let dragonHealth = 100;
let knightsAttack = 25;
dragonHealth -= knightsAttack;

console.log(dragonHealth);

// Exercise 12: The Speeding Race Car
const speedLimit = 50;
let carSpeed = 30;

carSpeed += 25;

if(carSpeed > speedLimit){
    console.log('Speed Warning: You are going too fast!');
    console.log(`Current speed is: ${carSpeed} mph`);
} else if(carSpeed < speedLimit){
    console.log('okay');
    console.log(`Current speed is: ${carSpeed} mph`);
}

// Exercise 13: The Superhero Strength Test
let valiantPower = 90;
let heroStrenght = 95;

let result = heroStrenght - valiantPower;
if(result > 10){
    console.log('Valiant triumphs decisively! Malakor is utterly outmatched!');
} else if(result <= 10){
    console.log("Valiant barely edges out! A close call victory against Malakor!")
} else if(valiantPower === heroStrenght){
    console.log("It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.");
}

// Exercise 14: The Tricky Treasure Hunt
let hasTreasureMap = true;
let isFullMoon = false;
let foundAncientKey = true;
let solvedRiddleScroll = false;
let hasCompass = false;

const mapFound = hasTreasureMap === true  || foundAncientKey === true || solvedRiddleScroll === true && hasCompass === true;

if(mapFound === !false){
    console.log('Success! Alex can find the legendary treasure!');
} else {
    console.log('Alas, Alex is missing crucial clues and cannot find the treasure yet.');
}

// Exercise 15: The Ice Cream Shop’s Daily Sales with Volume Discount
let conesSoldToday = 250;
let sundaesSoldToday = 120;
let conePrice = 4;
let sundaePrice = 8;

let earningFromCones = conePrice * conesSoldToday;
let earningsFromSundae = sundaesSoldToday * sundaePrice;
let totalEarnings = earningFromCones + earningsFromSundae;
let afterDiscount = totalEarnings - totalEarnings * 5 / 100;
let discount = totalEarnings * 5 / 100;
if(totalEarnings > 1000){
    console.log(totalEarnings);
    console.log(`Volume Discount Applied, the amount of disount applied is: ${discount}
        daily earning after discount is: ${afterDiscount}`);
}

// Exercise 16: Music Band Concert Profit Check 
let ticketPrice = 20;
let ticketSold = 500;
let concertCost = 8000;
let earningsFromTicket = ticketPrice * ticketSold;
let profit = earningsFromTicket - concertCost;

if(profit > 0){
    console.log(`Concert profit is ${profit}$ . Great success!`);
} else if(profit <= 0){
    console.log(`Concert did not cover costs. Earnings: $${earningsFromTicket}, costs: $${concertCost}.`);
}

// aq damtavrda nukris amocanebi
//
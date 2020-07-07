//take in a number, return true if greater than 0
// false if number is less than 0
// "exactly zero" if the number is 0

function isZero(num) {
    if (num > 0) { // if the number is positive
        return true; // only run this code if the condition is true
    } else if (num < 0) { // if num is negative
        return false; // only run this code if condition is true
    } else { // (if num is zero (0), i.e., if (num === 0)) or if none of the conditions above were met...
        return "Exactly 0"; // run this code (if the number is 0)
    }
};
console.log(isZero(1));
console.log(isZero(-1));
console.log(isZero(0));


// takes in a number & return a different string
// depending on whether a number is divisible by 3
// or divisible by 5

function divisibleBy(num) {
    if (num % 3 === 0) { // if num is divisible by 3
        console.log(`${num} is divisible by 3`)
    } if (num % 5 === 0) {
        console.log(`${num} is divisible by 5`)
    }
};

divisibleBy(19); // NO output
divisibleBy(15); // 15 is divisible by 3, 15 is divisible by 5
divisibleBy(33); // 33 is divisible by 3
divisibleBy(25); // 25 is divisible by 5

// same function as above but with an else if statement

function divisibleByPt2(num) {
    if (num % 3 === 0) { // if num is divisible by 3
        console.log(`${num} is divisible by 3`)
    } else if (num % 5 === 0) {
        console.log(`${num} is divisible by 5`)
    }
};

divisibleByPt2(19); // NO output
divisibleByPt2(15); // 15 is divisible by 3 (else if statement output limited to the FIRST true statement)
divisibleByPt2(33); // 33 is divisible by 3
divisibleByPt2(25); // 25 is divisible by 5

// introducing Loops
// *******************
// do/while loops, while loops, for loops
// code that repeats until a condition is met
// families of loops are Conditional (boolean test, either true or false)
// Conditional loops are useful when loop should execute a set number of times
// and Iterative (test against min or max value)
// loop parts are Condition, Executable Block, Iteration statement, and Break i.e., Way to End Loop
// pre-test loops - condition located before executable block
// post-test loop - do/while loop, condition follows executable block and always runs at least once

//"while" loop >>>>>>
// Set population of zoo to 100
// Start with 0 penguins
let popLimit = 100;
let numPenguins = 0;
//init while loop to run until penguins reach population limit of the zoo
while (numPenguins < popLimit) {  // condition to test goes btwn parentheses!
   numPenguins += 2;              // code to execute while condition is true, AND Stopping condition
//    popLimit++                  // add 2 penguins to the population
   console.log("Room for " + (popLimit - numPenguins) + " more penguins in the zoo")

};

//Carlos' example of a counter
var text = "";
var i = 0;
while (i < 10) {
    text = text + "The number is " + i + "   ";
    i++;
};
console.log(text);



 // say hello 100 times
 var i=0;
 while (i<100) {
     console.log("hello!");
     i++;
 }


//count the monkeys from 0 to 20
let monkeys = 0;
let maxMonkeys = 20;
while (monkeys < maxMonkeys) {
    monkeys++
    console.log(`There are now ${monkeys} monkeys!`)
};


// monkey countdown! same as monkey counter, but counting backwards from 20 to 0
 let moreMonkeys = 20;
 let minMonkeys = 0;
 console.log("We started with " + moreMonkeys + " monkeys...")
while (minMonkeys < moreMonkeys) {
    moreMonkeys--;
    console.log(`There are now ${moreMonkeys} monkeys!`);
};

// write a loop that starts at 1 and counts up to 10 then stops
let count = 1;
document.write("Starting Loop at " + count + "<br />")
let maxCount = 10;
while (count <= maxCount) {
    document.write("Current Count : " +     count + "<br />"); // writes to the html doc
    count++;
};
document.write("We have reached " + maxCount + "! Loop stopped!")
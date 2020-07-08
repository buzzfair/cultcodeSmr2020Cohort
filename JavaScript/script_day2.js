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
};


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
let count = 1; // initiator
document.write("Starting Loop at " + count)
let maxCount = 10; // stopping condition
while (count <= maxCount) { // iteration condition
    document.write(" Current Count : " +     count + "<br />"); // writes each iteration to the html doc
    count++; // iteration statement
};
document.write("We have reached " + maxCount + "! Loop stopped! <br />") // writes a statement to the html doc, after the code has stopped/loop has been broken


// introducing do/while loops >>>
// *******************************
// allows repeatable code while condition is true
// useful when program should go on for indeterminate length of time
// must have a stopping condition
// ACTION to be performed at least once while the condition is evaled to true

// EXAMPLE BELOW >>>>>>>>>>

// do
// {
//     keep driving;
//     recognize next sign 
// }
//     while (this is true);


// do/while loop that counts from 0 to 4
var text = ""
var i = 0; // initiator
do {
    text += "The number is " + i + "<br />"; // executable code
    i++; // iterator
} 
while (i < 5); //condition to test and stopping condition
document.write(text);
document.write("Loop stopped at 4 <br />")


// write a do/while loop that starts at 0 and counts up to 8, then stops
var counter = 0; 
document.write("Starting Loop" + "<br />");
do {
    document.write("Current Count: " + counter + "<br />");
    counter++;
}
while (counter < 8);
document.write("We reached " + counter + ". Loop Stopped. <br />");


// *** SOLO CODING CHALLENGES DAY 2 *** //
// 1. Write a while loop that logs the numbers 2-20 out to the document.

// 2. Write a do/while loop that logs the numbers 2-20 out to the console.

// 3. Write a while loop that logs the numbers 20 - 2 in descending order out to the document.

// 4. Write a function that takes in two numbers representing the minimum and 
// 4. maximum values for a range of numbers. Use a while loop to loop through 
// 4. the numbers from the minimum to the maximum and log each one to the console

// 5. Write a function that takes in two numbers representing the minimum and maximum 
// 5. values for a range of numbers. Use a while loop to loop through the numbers 
// 5. from the mimimum to the maximum and print "even" if the number is even and "odd" 
// 5. if the number is odd. Try to reuse your function from before!

// 6. Write a function that takes in a number N. Loop through all of the values 
// 6. from 0 to N. Log each value out to the console. STOP the loop 
// 6. when the value that you're about to log is GREATER THAN OR EQUAL TO the value of N/2

// 7. Write a function that takes in a string and uses a while loop to print out 
// 7. each character in the string. e.g. stringPrinter("apple") -> 
// "a"
// "p"
// "p"
// "l"
// "E"
// You'll need to look up a concept called indexing to make this work.

// 8. Write a function that takes in a string and a number N and uses a loop 
// 8. to log the string out to the console N times.

// 1: while loop that logs the numbers 2-20 out to the document

var xray = 2; // initiator
document.write(`Starting Loop at ${xray} <br />`);
var topCount = 20; // stopping condition
while (xray <= topCount) { // iteration condition
    document.write(" Current Count : " +     xray + "<br />"); // writes each iteration to the html doc
    xray++; // iteration statement
};
document.write("We have reached " + topCount + "! Loop stopped! <br />")


// 2: do/while loop that logs the numbers 2-20 out to the console

var counter = 0; 
console.log("Starting Loop");
do {
    console.log("Current Count: " + counter);
    counter++;
}
while (counter < 20);
console.log("We reached " + counter + ". Loop Stopped.");


// 3: while loop that logs the numbers 20 - 2 in descending order out to the document
var countdown = 20; // initiator
document.write("Starting Loop at " + countdown + "<br />")
var minCounter = 2; // stopping condition
while (countdown <= minCounter) { // iteration condition
    document.write(" Current Count : " +     countdown + "<br />"); // writes each iteration to the html doc
    countdown++; // iteration statement
};
document.write("We have reached " + minCounter + "! Loop stopped! <br />")


// 4: function w/ range of number (start w/ min & max numbers), use while loop to iterate through numbers and print to the console

function countRange(lowNum,highNum) {
    while (lowNum <= highNum) {
        console.log(lowNum);
        lowNum++;
    }
};
countRange(15,45);


// 5: same as above but print even or odd instead of printing the numbers to the console

function countRangeV2(lowVal,highVal) {
    while (lowVal <= highVal) {
        lowVal++;
    if (lowVal & 1) {
        console.log("even");
    } else {
        console.log("odd");
    } 
    } 
};
countRangeV2(15,45); // expected result! at last!



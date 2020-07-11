// Friday 7/10 Coding Exercises
// Loops

// 1. Write a for loop that writes the numbers 1-5 out to the document
//  1a. Write a while loop that writes the numbers 1-5 out to the console

function forLoop() {
    for(let i=0;i<6;i++){
        console.log(i);
    }
}
forLoop();
// output
// 0
// 1
// 2
// 3
// 4
// 5

function whileLoop() {
    i=0;
    while(i<6) {
        console.log(i);
        i++;
    }
}
whileLoop();
// output
// 0
// 1
// 2
// 3
// 4
// 5

// 2. Write a for loop that logs the numbers 5-1 (in descending order) out to the console
//  2a. Write a while loop that writes the numbers 5-1 out to the document
 
function backwardFor() {
    let i = 0;
    for (i = 5; i > 0; i--){
      console.log(i);
    }
};
backwardFor();
// output
// 5
// 4
// 3
// 2
// 1


function backwardWhile() {
    let i=5;
    while(i > 0) {
        console.log(i);
        i--;
    }
}
backwardWhile();
// output
// 5
// 4
// 3
// 2
// 1

// 3 - Andrew is worried that when he's walking on the sidewalk and steps 
// on a crack, it'll break his mom's back. 
//  3a. Create an array of steps and on step 3 of 5 (index 3) signify the crack 
// that'll break his mom's back (i.e crack/broken). 
// On the remaining steps signify that his mom is safe (i.e no crack/safe). 
// Write a function using a for loop that writes his steps out to the document. 
//  3b. Using the same array, write a function using a while loop that stops 
//  right before he steps on the crack.

steps = ["step 0-safe","step 1-safe","step 2-safe",
"step 3 crack-broken","step 4-safe","step 5-safe"];

function stepCounter(array) {
    for (let i=0; i<array.length; i++) {
        console.log(array[index]);
    }
};
// output (6) ["step 0-safe", "step 1-safe", "step 2-safe", "step 3 crack-broken", "step 4-safe", "step 5-safe"]

function stopStepping(array,substr) {
    for (let i = 0; i < array.length; i++){ 
    let stopValue = array.findIndex(item => item.includes(substr));
    console.log(stopValue - 1) // test to see if this is working as expected
    if (stopValue - 1) {
        console.log("Stop before you break your mother's back!")
        break;
        }
    }
}
stopStepping(steps,"crack");
// output
// 2
// Stop before you break your mother's back!
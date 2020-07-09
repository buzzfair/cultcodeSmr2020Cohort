// ***** PRACTICE EXERCISES *****
// get input from the user and output it to the console

function inputOutputX3(){
    let response = window.prompt("Input a number");
    if (response < 0) {
        console.log("negative");
    } 
    else if (response == 42) {
        console.log("The Answer");
    } 
    else if (response >= 0) {
        console.log("not negative");
    }
};

let iterator = 1; // initiator
while (iterator < 4) { 
    inputOutputX3()
    iterator++;
};

// write a while loop with a variable of iteration 
// starts at 0 and goes to 10, adding 1 each time
// log the value of i with each interation

var i = 0;
console.log(i);
while (i < 10) {
    i++;
    console.log(i); // if you console.log BEFORE iterating, the count will only go to 9!
};


// write a while loop with a variable of iteration 
// starts at 0 and goes to 10, adding 1 each time
// log the value of i with each interation
var x = 0;
console.log(x);
while (x < 10) {
    x+=2;
    console.log(x); // if you console.log BEFORE iterating, the count will only go to 8!
};
// alternate way to write the same loop with less code
let y = 0;
while (y <= 10) {
    console.log(y);
    y+=2;
};

// write function passwordChecker, takes in a string
// and returns true if string equals "password"
// or returns false if otherwise

const passwordChecker = (string) => {
    if (string === "password") {
        return true;
    } else {
        return false;
    }
};
console.log(passwordChecker('password')); // output true
console.log(passwordChecker('kittyKat15')); // output false

// write function userCheck that gets a value from the user (window.prompt)
// and uses passwordChecker to see if user response is the word
// 'password'. If so, log "Please try again". If not, log "Password acknowledged"
//

Function userCheck() {
    let input = window.prompt("Input a password");
    if (passwordChecker(input)) {
        console.log("Please try again.");
    } else { 
        console.log("Password acknowledged.") 
}
};
userCheck();

let input = 0;
while (input !== "password") {
    userCheck()
    input++
};


// modify userCheck() so that it lops to continually ask user for a new password
// until they put in a string that is not the word "password" 

function userCheck() {
    let input = window.prompt("Input a password");
    while (input === "password") {
        input = window.prompt("Password not accepted. Please enter a different password")
    }
        console.log("Password acknowledged.") 
};
userCheck();



// ***** SOLO CODING CHALLENGES *****
// 1- Write a program to keep asking for a number until you enter a negative number. 
// At the end, print the sum of all entered numbers.

function sumNumbers() {
    let userEntries = [];
    let userNum = window.prompt("Enter a number");
    userEntries.push(userNum);
    while (userNum >= 0) {
        console.log("That's not the type of number we're looking for. Please enter another number.")
        userNum = window.prompt("Enter a different number this time. Hint: Don't think so positively.")
        userNum++;
        };
    if (userNum < 0) { console.log("Voila! That's the negative we want!"); }
    function reducerFunct(acc,currVal) { acc + currVal };
    function getSum() { userEntries.reduce(reducerFunct) };
    console.log ("Here are the numbers you entered: " + userEntries);    
    console.log("The sum of all your entries is: " + getSum());
};
sumNumbers(); // stuck on this one...moving on.



// 2- Write a program to ask for a name until the user enters END. 
// Print the name each time. When you are done, print "I am done." 


function askForName() {
    let userName = window.prompt("Input a name");
    while (userName !== "END") {
        userName = window.prompt("Enter another name, or enter END if you're ready to stop now.")
    }
        console.log("I am done.") 
};
askForName();  // worked as expected

// sayingHi function needs 2 parameters
// variables aren't defined so when we invoke sayingHi
// the invocation fails. Define variables so that when the 
// function is invoked, it prints "Hello World."
// define a as 'Hello' and b as 'World'

let a; // let x = 'Hello'
let b; // let y = 'World'
function sayingHi(x,y) {
  return x + " " + y;
}
console.log(sayingHi(a,b)); // current output undefined, undefined >>>> change a,b to x,y


let x = 'Hello'
let y = 'World'
function sayingHi(x,y) {
  return x + " " + y;
}
console.log(sayingHi(x,y)); // output Hello World 

// Complete the function called print 
// by having it return the word 'javascript'. 
// Write the code needed on the line that 
// says '// Write your code here'.

function print() {
     return "javascript";
  };
console.log(print()); // output javascript

// Complete the function called add that takes
// two arguments: num1 and num2. 
// It returns the sum of these two numbers.

function add(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  console.log(add(2,2)); // output 4
  console.log(add(10,20)); // output 30

  // Take in a number, return true if that 
  // number is greater than 0 and false if it is not.

  function greaterThanZero(num) {
      if (num > 0) {
          return true;
      } else {
          return false;
      }
  }
  console.log(greaterThanZero(5)); // output true
  console.log(greaterThanZero(0)); // output false
  console.log(greaterThanZero(15953)); // output true
  console.log(greaterThanZero(-5)); // output false
  console.log(greaterThanZero(.134)); // output true

//   Take in a string containing a name, use 
//   concatenation to return the string “Hello, <name>!”

function helloName(nameString) {
    console.log(`Hello, ${nameString}!`);
};
helloName("Guin"); // output Hello, Guin!
helloName("Joe Ed"); // output Hello, Joe Ed!
helloName("Salvatore"); // output Hello, Salvatore!
helloName("Ruth Bader Ginsberg"); // output Hello, Ruth Bader Ginsberg!
helloName("JavaScript"); // output Hello, JavaScript!

// Take in a number. Add one to that number, 
// then multiply the result by two. Then, subtract three. 
// Then, divide the number by four. Return the result 
// after all of these operations have been performed.

function crazyMath(num) {
    let add = num + 1;
    let multiply = add * 2;
    let subtract = multiply - 3;
    let divide = multiply / 4;
    return divide;
}
console.log(crazyMath(5)); // output 3
console.log(crazyMath(83)); // output 42
console.log(crazyMath(50)); // output 25.5
console.log(crazyMath(-8)); // output -3.5


// Take in a number, return the remainder of that number divided by 7

function remainderDiv7 (num) {
    let remainder = num % 7;
    console.log(remainder);
}
remainderDiv7(12); // output 5
remainderDiv7(21); // output 0
remainderDiv7(-.03594); // output -0.03594


// Take in a string, return 2 copies of that string

function repeatString (string) {
    console.log(`${string}  ${string}`);
}
repeatString("I want a burrito!") // output I want a burrito!  I want a burrito!


// Take in a string and a number N, 
// return a single string consisting of N copies of that string

function multiplyString (string,N) {
    let repeated = string.repeat(N);
    console.log(repeated) 
}
multiplyString("Let's Eat!",3); // output Let's Eat!Let's Eat!Let's Eat!


// Take in a string representing a name of a user 
// and a number representing the number of days since the user last logged in.  
// Using backticks, return a <p> tag with a greeting that contains 
// the name and number as the content of the p tag. You should not use concatenation.

function pTagGreeting (userName,numOfDaysLoggedOut) {
    console.log(`<p>Hello, ${userName}. It\'s been ${numOfDaysLoggedOut} since we last saw you. Welcome back!</p>`);
};
pTagGreeting("God36",7); // output <p>Hello, God36. It's been 7 since we last saw you. Welcome back!</p>

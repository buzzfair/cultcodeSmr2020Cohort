// ***** INSTRUCTOR-LED EXERCISES *****
// introducing arrays
// can be empty, can be any size (no size limit IOW), can store any data type including other arrays
// ea element (or item) receives its own index (ordered place in the array list)
// JS arrays are always zero-indexed >>>>>
// meaning the first item is located at index 0, the second item is at index 1, etc.
// actions can be taken on arrays: indexing, pushing, popping, slicing, and more!

let userOne = "Timmy";
let userTwo = "Belinda";
let userThree = "Carlos";

let myArray = [userOne, "Belinda", "Carlos", 13.15, 1089348];
let emptyArray = [];
console.log(emptyArray); // output []
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // output apple
console.log(fruits[3]); // output undefined
fruits[1] = "blueberries"; // reassign the element at index 1
console.log(fruits); //  ["apple", "blueberries", "cherry"]
fruits[2] = "coconut"; // reassign the element at index 2
console.log(fruits); // ["apple", "blueberries", "coconut"]
fruits[8] = "guava"; // add an element at index location 8
console.log(fruits); // ["apple", "blueberries", "coconut", empty × 5, "guava"]

// methods: arrayName.methodName( // required inputs //)
// .push = adds one or more elements to the end of an array and returns the new length of the array
// .pop = deletes the last element of array and returns that value
fruits.push("grapefruit"); // "pushes" the string "grapefruit" onto the end of the array
console.log(fruits); // ["apple", "blueberries", "coconut", empty × 5, "guava", "grapefruit"]
fruits.push("orange","raspberry"); // 2 strings added to the end of the fruits array
console.log(fruits); // ["apple", "blueberries", "coconut", empty × 5, "guava", "grapefruit", "orange", "raspberry"]
fruits.pop(); // removes the last element of array
let myFaveFruit = fruits.pop(); // stores last element of array in a variable
console.log(myFaveFruit); // output grapefruit
console.log(fruits); // ["apple", "blueberries", "coconut", empty × 5, "guava", "grapefruit"]


// introducing for loops
// aka counting loop, aka counter-control loop
// best when you need to iterate a finite number of times
// pre-determined length of time
// PARTS: condition for the test, starting point (initialization), min/max value (condition to test)
// way to increment/decrement the counter (iteration value)
// EXAMPLES >>>>>>

for (let i = 0; i < 100; i++) {
    console.log(i); //logs values from 0 to 100 to the console
}

// used within a snippet of code to write to an html doc

let i; // this ceclaration could be moved to inside the for loop to save room
let cars=["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
document.write("Starting Loop" + "<br />");
for (i=0; i<cars.length; i++) {
    document.write(cars[i] + "<br />");
}
document.write("Done counting cars now. <br /><br />");
// output:
// Starting Loop
// BMW
// Volvo
// Saab
// Ford
// Fiat
// Audi
// Done counting cars now.

// use a for loop to write out a multiplication statement

for (c = 1; c <= 7; c++) {
    document.write(c + " times 7 is " + c * 7 + "<br />");
};
// output:
// 1 times 7 is 7
// 2 times 7 is 14
// 3 times 7 is 21
// 4 times 7 is 28
// 5 times 7 is 35
// 6 times 7 is 42
// 7 times 7 is 49

//

haystack = new Array(); // []
haystack[17] = "Needle";
for (j=0; j<20; j++) {
    if (haystack[j] === "Needle") {
        document.write("<br /> Found a needle in a haystack at location " + j + "<br />");
        break;
    } else {
        document.write(j + " <br /> ");
    }
};
// output:
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// Found a needle in a haystack at location 17


// ***** DO ON OWN *****
// write a for loop that iterates through an array and outputs all items in that array

let platforms=["Android-phone", "tablet", "desktop-PC", "Mac", "iPad", "iPhone"];
document.write("<br /> Here is a list of platforms to design for:" + "<br />");
for (let i=0; i<platforms.length; i++) {
    document.write(platforms[i] + "<br />");
}
document.write("There are many more, but this just gives you an idea. <br />");
// output:
// Here is a list of platforms to design for:
// Android-phone
// tablet
// desktop-PC
// Mac
// iPad
// iPhone
// There are more platforms, but this just gives you an idea of some.

// introducing maps (aka hashmaps, hashtables)
// similar to arrays but with constant time access
// have keys and values
// storing info behing a password (or key)
// can't get to info unless you have the right password (key)
// unlike arrays, there is no discernable order to the data
// keys : identifiers that let us store info
// values : info you store inside the key; can be of any data type
// setter : method that lets us PLACE info inside
// getter : method that lets us GET (or access) info inside
//
// EXAMPLE from Carlos >>>>
let myMap = new Map([
    [1, 'one']
    [2, 'two']
    [3, 'three']
]);
myMap.keys() // returns all the keys
myMap.values() // returns all the values


// MORE EXAMPLES >>>>>>
let contacts = new Map();
contacts.set('David', {Phone: "506-283-8233", Address: "123 Main St"})
console.log(contacts.get('David')); // returns true
console.log(contacts.size); // output 1
contacts.set('Guin', {Phone: "506-335-0234", Address: "111 Chestnut St"})
console.log(contacts.size); // output 2
console.log(contacts.has('David')); // output true
console.log(contacts.get('David')); // output {Phone: "506-283-8233", Address: "123 Main St"}
// contacts.delete('Guin');
// console.log(contacts.has('Guin')); // output false
console.log(contacts.values());



// ***** SOLO CODING CHALLENGES ***** //

// 1: In the following code, 
// what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4]; // output 4

let array2 = [1];
array2.length = 5; // output 5

let array3 = [];
array3[-1] = [1]; // output 1

let array4 = [1, 2, 3, 4, 5];
array4.length = 3; // output 3

let array5 = [];
array5[100] = 3; // output 3


// 2: Log all of the even values from myArray to the console.

function evenNums(array) {
    let arr = [];
    for (let i=0; i<array.length; i++) {
    if (array[i] % 2 === 0) {
        arr.push(array[i]);
        }
    }
    return arr;
};
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
console.log(evenNums(myArray)); // output (6) [6, 4, 2, 4, 16, 0]


// 3: Let's make the problem a little harder. 
// In this problem, we're again interested in even numbers, 
// but this time the numbers are in nested arrays in a single outer array.


let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];
let mergedArray=[].concat.apply([], myArray);
console.log(mergedArray.filter(a=>a%2==0)); // output (6) [6, 4, 2, 4, 16, 0]


// 4: Let's try another variation on the even-numbers theme.
// We'll return to the simpler one-dimensional array. 
// In this problem, we want to use the .map method to create a new array 
// that contains one element for each element in the original array. 
// If the element is an even value, then the corresponding element 
// in the new array should contain the string 'even'; 
// otherwise, the element in the new array should contain 'odd'

let myArray = [
    1, 3, 6, 11,
    4, 2, 4, 9,
    17, 16, 0,
  ];

  function callback(n) {
    if (n % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
};

const map2 = myArray.map(callback);
console.log(map2);
// output: //  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]

// FYI using: (x => x%2 === 0); as the callback returns true and false instead of even and odd


// 5: Write a function that takes in an array and logs all of the values from beginning to end. 
// Then, it logs each value from end to the beginning.
// E.g. arrayPrinter([“a”,”b”,”c”]) ->
// “a”
// “b”
// “c”
// “c”
// “b”
// “a”

const guinArray = ["green-eyes", "brown-hair", "confused-by-JavaScript","adores-design"];

function endToBegin(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
};
function beginToEnd(arr) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
    }
};

beginToEnd(guinArray); // output:
// green-eyes
// brown-hair
// confused-by-JavaScript
// adores-design
endToBegin(guinArray); // output:
// adores-design
// confused-by-JavaScript
// brown-hair
// green-eyes


// 6: Use the filter method to implement a function that takes in an array 
// and returns a new array with all of the integers from the input array. 
//It should ignore all non-integer values from the input.
// You can use Number.isInteger(value) to determine whether 
// a numeric value is an integer. It returns true if the value is an integer, false otherwise.

// Example //
let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]

function removeNonInteger(array) {
	return array.filter(function(element) {
		return Number.isInteger(element);
        });
};

// Here's my function demonstrating .filter method, and my result
const removeStuff = (arr) => {
    return arr.filter(x=(item)=>{
        return Number.isInteger(item);
    });
};
let numbersAndStuff = ["apple", 1, "orange", "watermelon", 25, Infinity, undefined, null, 42, 50, 60, 8.09, 9.08]
console.log(removeStuff(numbersAndStuff));
// output (5) [1, 25, 42, 50, 60]


//7: Use map and filter to first determine the lengths of all the elements 
// in an array of string values, then discard the even values (keep the odd values).
// i.e., desired output // => [1, 5, 3]

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
let lengths = arr.map(function(item){
    return item.length
   });
console.log(lengths); // output (5) [1, 4, 5, 3, 2]
let odds = lengths.filter(x => x%2);
console.log(odds); // output (3) [1, 5, 3]



// 8: Without using a for, while, or do/while loop, 
// write some code that checks whether the number 3 appears inside these arrays:
// Return true or false depending on each result.

let numbers1 = [1, 3, 5, 7, 9, 11];
numbers1.some(function(num){return num === 3}); // output true
let numbers2 = [];
numbers2.some(function(num){return num === 3}); // output false
let numbers3 = [2, 4, 6, 8];
numbers3.some(function(num){return num === 3}); // output false


// 9: Write some code to extract the word 'mem' from the following nested array

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
let newArr = arr.reduce(function(prev, curr) {
    return prev.concat(curr);
  });
console.log(newArr); // ["test", "hello", "world", "example", 6, "mem", null, 4, 8, 12] 
newArr.indexOf("mem"); // output 5
console.log(newArr[5]); // output mem



// ***** Maps Coding Challenges *****
// 1: Write a map object to store the following information:
// Our family needs to keep track of our pets. We have 2 dogs, 1 hamster, 3 cats, and 1 fish.

const petMap = new Map([
    [1, '1 hamster'],
    [2, '1 fish'],
    [3, '2 dogs'],
    [4, '3 cats']
]);
console.log(petMap); // output Map(4) {1 => "1 hamster", 2 => "1 fish", 3 => "2 dogs", 4 => "3 cats"}

// 2: Given the following code:
// Write code to obtain the value stored at the key ‘pizza’. What is it? 

let myMap = new Map();
myMap.set('pizza', 'delicious');
myMap.set('broccoli', 'important');
myMap.set('pizza', 'unhealthy');
console.log(myMap); // output Map(2) {"pizza" => "unhealthy", "broccoli" => "important"}
console.log(myMap.get('pizza')); // output unhealthy

// 3: Write a function that takes in a Map as input. Using a loop, 
// it then cycles through each key in the map and prints out the values corresponding to that key

function mapValues(map) {
    let mapIter = map.keys();
    for(i=0;i<map.size;i++) {
        let value = map.get(mapIter.next().values)
        console.log(value);
    }
};
console.log(petMap); // output 

// 4: Write a function that takes in two arrays as input, keys and values. 
// The input arrays are of equal length, and each entry in them corresponds 
// to a single key and value pair. Return a map containing all of the information 
// in the original arrays.
// E.g. arraysToMap([‘chicken’,’dog’], [3,’fish’]) ->
// Map { ‘chicken’ => 3, ‘dog’ => 'fish’ }

array1 = [101,102,103,104];
array2 = ['programming-foundations','html','css','javascript'];
function arrToMap(keysArr,valuesArr) {
    // since we're returning to a map, we need to create a map
    let result = new Map();
    for(let i=0;i<keysArr.length;i++){
        // get a key from one array & a value from the other
        let key = keysArr[i];
        let value = valuesArr[i]
        //add a key-value pair to map
        result.set(key,value)
    }
    return result;
};
arrToMap(array1,array2); // output


// 5: Let’s make a basic password system in two parts.
// 5a: That is, it takes in two strings as input: one representing 
// a username and one representing a password. The function stores 
// the username and password combination in a map and return the new map
// 5b: Write a function to act as a password reminder. That is, it takes in 
// a string as input representing a username and a map to store. 
// If the username already 
// has a password stored, the function returns the password. If the username 
// hasn’t been stored, the function returns false and logs a message to the 
// console letting them know about the issue.

function passwordStorer(username,password) {
    let thatMap = new Map(); // create the map
    thatMap.set(username,password) // "set" or push the keys and values into the map
    return thatMap; // return the new map
}

function passwordReminder(username,map) {
    if(map.has(username)){
        let password = map.get(username); // .get() method used with a key returns the assigned value
        return password;
    } else {
        console.log("Error: no password");
        return false;
        
    }
};

let database = passwordStorer('gwhite123','gooberberries'); 
passwordReminder('gwhite123', database);
passwordReminder('gwhite123', database); // output "gooberberries"

// 6: Write a function that takes in two maps and merges them, 
// returning a single map representing the combination of the two. 
// That is, it does the following:
// 6a: If a key in the first map does not exist in the second map 
// (or vice versa), add the key and value to the map.
// 6b: If a key exists in BOTH maps, the new value for the key should be 
// an array containing BOTH values from the two maps.
// E.g. 
// /* 
// Map { 1 => 'apple', 2 => 'banana', 3 => ['cherry','watermelon'], 4 => 'pear' }
// */

var first = new Map([[1, 'apple'],[2, 'banana'],[3, 'cherry']])
var second = new Map([[3, 'watermelon'],[4, 'pear'] ])
// var combined = mapCombiner(first, second);

function mergeMap(map1,map2) {
    let combined = new Map();
    for (const k of map1.keys()) {
        if (map1.get(key) !== map2.get(key) {        //if a key in one map doesn't exist in the other
        combined.set(map1.keys(),map1.values());     //add that key and its corresponding value to a new (merged) map
        } else { 
            let newArray = Array.from(map.values()); //if a key DOES exist in both maps, return an array , as a new value for the key,
            combined.set(newArray.values());         // that consists of the corresponding values from the (2) original maps
        }
    }
console.log(combined);
}
mergeMap(first,second);


// 7: A kidnapper wrote a ransom note, but now he is worried it will be traced 
// back to him through his handwriting. He found a magazine and wants to know 
// if he can cut out whole words from it and use them to create an untraceable 
// replica of his ransom note. The words in his note are case-sensitive and he 
// must use only whole words available in the magazine. 
// He cannot use substrings or concatenation to create the words he needs. 

// Given the words in the magazine and the words in the ransom note, 
// print Yes if he can replicate his ransom note exactly using whole words 
// from the magazine; otherwise, print No.
// For example, the note is "Attack at dawn". 
// The magazine contains only "attack at dawn". 
// The magazine has all the right words, but there's 
// a case mismatch. The answer is “No”. 
// The inputs are a list of strings representing the magazine 
// and a list of strings representing the note.

let magazineWords = [put the money in the box, Attack at dawn, no police];
let noteWords = [Put the money in the box, attack at dawn, No police];
function ransomNote(magazineWords,noteWords) {
    if(magazineWords.length!=noteWords.length) {
    return "No";                                    //if not return no 
    } else { 
    for(var i=0;i<magazineWords.length;i++)    // comparing each element of array 
    if(magazineWords[i]!=noteWords[i]) {
     return "No";
     } else {               //if not return no 
     return "Yes";     //if everything matches (both the words and the case) return yes 
   } 
 } 
};
console.log(ransomNote;)

// could also try?  array1.length === array2.length && 
//                  array1.every(function(value, index) { return value === array2[index]})


// 8: Given two strings, determine if they share a common substring. 
// A substring may be as small as one character.
// For example, the words "a", "and", "art" share the common substring “a”. 
// The words "be" and "cat" do not share a substring. 
// Hint: consider a sequence of nested maps

function commonSubstring(string1,string2) {
    //compare the 2 strings
    //return true if they have a substring in common
    //return false if otherwise
}

console.log(commonSubstring("cat","apple")); //desired output: true;
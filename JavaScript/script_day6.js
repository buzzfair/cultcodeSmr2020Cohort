// defining and declaring a class for an object
// class is a special function found within an object
// the same way you can declare a function, you can declare a class
// data within objects are called properties
// functions used within an object are called methods

// -----------------CREATING AN OJECT USING A CONSTRUCTOR------------------
//constructor for an object: what's contained within the object

function User(firstname,username,password) {
    this.firstname = firstname; // this allows us to have multiple instances of the values assigned (since there will be more than one User)
    this.username = username;
    this.password = password;

    this.showUser = function() {
        document.write("Firstname: " + firstname + "<br/>" )
        document.write("Username: " + username + "<br/>" )
        document.write("Password: " + password + "<br/>" )
    }
}

//this.showUser constructor function could also be declared as follows, 
// outside the object and then the object constructor would look like this instead:

function User(firstname,username,password) {
    this.firstname = firstname; // this allows us to have multiple instances of the value firstname assigned (since there will be more than one User)
    this.username = username;
    this.password = password;
    this.showUser = showUser
};
function showUser() {
    document.write("Firstname: " + firstname + "<br/>" )
    document.write("Username: " + username + "<br/>" )
    document.write("Password: " + password + "<br/>" )
};

// ways to assign keys and values to the properties
details = new User("Guin", "cherokee505", "mypass123");
details = new User()
details.firstname = "Carlos";
details.username = "dmscus";
details.password = "password";
// add a new property
details.greeting = "howdy"

document.write(details.greeting);

// on your own, create a new object called bicycle using a contructor

function Bicycle() {
    this.color = color;
    this.speed = speed;
    this.config = config;
    this.bell = function() {
        alert("On Your Left! Ding Ding Ding!");
    }
};

details = new Bicycle("red","10-speed","upright")
details = new Bicycle("silver","24-speed","recumbent")

/* PROTOTYPE keyword - if we create 1000 different bikes, unless we use "prototype" when
declaring the object method, we'll also be creating 1000 instances of that method. 
This way, using "prototype" this only creates 1 single instance of the method, saving 
tons of precious memory*/

Bicycle.prototype.showBikes = function() {
        document.write("Color: " + color + "<br/>" );
        document.write("Speed: " + speed + "<br/>" );
        document.write("Configuration: " + config + "<br/>" );
}

document.write(showBikes());

// create an object for a right triangle that stores (3) properties

const Triangle = {
    base: base,
    height: height,
    getArea: function () {
        return (this.base * this.height) / 2;
    }
};

// or alternatively using an object constructor //

function Triangle(base,height) {
    this.base = base; 
    this.height = height;
    this.prototype.getArea = function(){
        return (this.base*this.height)/2;
    }
};

// data types are treated like objects
// strings: string.length, string.slice()
// numbers: 
// other objects are built in: dates, console, document, Math

//***********INTRODUCTING JSON**********/
// JavaScript Object Notation aka JSON
// commonly used way to store data (objects)
// no functions or Date objects allow
// otherwise looks exactly like vanilla JS objects

// common WebDev convention: convert JS into JSON

// convert a JSON string to a JS object
var js_obj = JSON.parse(sample_JSON_str);
// convert a JS object or value to JSON object
JSON_str = JSON.stringify(sample_obj);


// SOLO CODING EXERCISES //

// 1: Take in a number and return the square root of that number
function sqRt(num) {
    return Math. sqrt(num);
}
console.log(sqRt(144)); // output 12


// 2: Take in a string, replace the first instance of the string ‘e’ 
// within the string with the character ‘*’, return the modified string
// E.g. “Eeyore” -> “E*yore”
// “Banana” -> “Banana”
// “Apple” -> “Appl*”

function replaceE(string) {
    let firstLetter = string.slice(0,1);
    let newStr = string.substring(1);
    let partTwo = newStr.replace(/e{1,}/,"*");
    console.log(firstLetter + partTwo);

}
replaceE("Eeyore"); // E*yore
replaceE("Banana"); // Banana
replaceE("Apple"); //  Appl*


// 3: return the number of digits in a number

function nmbrOfDigs(num) {
   return Math.log(num) * Math.LOG10E + 1 | 0;
}
console.log(nmbrOfDigs(10)); // 2
console.log(nmbrOfDigs(224234)); // 6

// 4: Take in three numbers: day, month and year. Create a Date object with these values. 
// Then, determine if that Date is part of the weekend. If it is, return true. Otherwise, return false.
// Note: do NOT build your own Date object. Use the built-in Date object, e.g. weekendChecker(1,31,2020) -> false
// January 31, 2020 is not part of the weekend

function isWeekend(year,month,day) {
    let date = new Date(year,month,day)
    console.log("The date you entered is: " + date + ". Was it the weekend?");
    if (date.getDay() === 6 || date.getDay() === 0) {
        return true;
    } else {
        return false;
    }
};
 
console.log(isWeekend(1985,9,20)); 
// The date you entered is: Sun Oct 20 1985 00:00:00 GMT-0600 (Mountain Daylight Time). Was it the weekend?
// true

// 5: Write the command to add the language "Go" to the end of the languages array

var programming = {
	languages: ["JavaScript", "Python", "Ruby"],
	isChallenging: true,
	isRewarding: true,
	difficulty: 8,
	jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");
console.log(programming.languages); // ["JavaScript", "Python", "Ruby", "Go"]

// 6: Change the difficulty to the value of 7

programming.difficulty=7;
console.log(programming.difficulty); // 7


// 7: Using the delete keyword, write the command to remove the jokes key from the programming object

delete programming.jokes;
console.log(programming.jokes); // undefined

// 8: Write the command to add a new key called isFun and a value of true to the programming object

programming.isFun = true;
console.log(programming.isFun); // true
console.log(programming); // {languages: Array(4), isChallenging: true, isRewarding: true, difficulty: 7, isFun: true}

// 9: Using a loop, iterate through the languages array and console.log all of the languages

for (i=0; i<programming.languages.length; i++) {
    console.log(programming.languages[i]);
}
// JavaScript
// Python
// Ruby
// Go


// 10: Using a loop, console.log all of the keys in the programming object

for (let [key, value] of Object.entries(programming)) { 
    console.log(key); 
}; 
// languages
// isChallenging
// isRewarding
// difficulty
// isFun

// THIS COMMAND ALSO WORKS, BUT DOESN'T USE A LOOP
// console.log(Object.keys(programming));
// (5) ["languages", "isChallenging", "isRewarding", "difficulty", "isFun"]


// 11: Using a loop, console.log all of the values in the programming object

for (let [key, value] of Object.entries(programming)) { 
    console.log(value); 
}; 
// (4) ["JavaScript", "Python", "Ruby", "Go"]
// true
// true
// 7
// true


// 12: To-Do list maker
// 12a: Write a function that takes in two strings and returns 
//      a custom object called ‘Item’ containing the fields ‘task’ and ‘deadline’
//      e.g. Item(‘get groceries’, ‘‘March 10, 2020”) 
//      -> {task: ‘get groceries’, deadline: ‘March 10, 2020’)

// 12a:
function Item (task,deadline) {
    this.task = task;
    this.deadline = deadline;
}
let groceries = new Item("get groceries", "July 16,2020");
let bike = new Item("fix bicycle","ASAP") 
console.log(groceries,bike);

// 12b:
let toDo = [groceries,bike];
console.log(toDo);

function toDoHTML(array) {
    let list = document.createElement("ul")
    for (let i=0;i<array.length;i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${arr[i].task}: ${arr[i].deadline} `;
        list.appendChild(listItem)
    }
    return list;
}

let list = toDoHTML(toDo)

// 12c:
document.getElementsByTagName("body").appendChild(list)



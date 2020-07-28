// consider the following object
let dog = {
    "breed": "Golden Retriever",
    "name": "Fido",
    "age": 12,
    "isSitting": false,                     // 0
    "sit": function() {                     // 1 could alternatively been written as: 
        if (this.isSitting === false) {     // this.isSitting = !this.isSitting;
            this.isSitting = true;
        } else {
                this.isSitting = false;
        }
    }
};




// 0. add a property to the dog object called isSitting. Give it a value of false.

/* 1.
attach a method to the dog object called sit. This method modifies the 
isSitting property; if isSitting is false when .sit() is called, change it to true.
if isSitting is true when .sit() is called, change it to false.
*/

/* 2.
now, take everything from the dog object and turn it into a constructor
function to allow us to create multiple dog objects at once. Each dog should
have the same properties (breed, name, age, isSitting) and methods (sit).

note that isSitting by default should always be false.
*/

function Dog(breed,name,age) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.isSitting = false;
    this.sit = function() {
        this.isSitting = !this.isSitting;
        };
};

// let fido = new Dog ("Golden Retriever","Fido",12);

/* 3.
now, use a loop to create several Dog objects using your constructor function. 
store these objects in an array called kennel.
note that isSitting by default should always be false.
*/
let names = ["Alfie", "Bort", "Champion"];
let breeds = ["Doberman", "Poodle", "Wolf"];
let ages = [7,13,22];

let kennel = [];

for (let i=0;i<names.length;i++){
    // each time the loop runs, create a new Dog object
    // and add it to the kennel array
    // get the names, breeds, ages
    let name = names[i];
    let breed = breeds[i];
    let age = ages[i];
    
    // create the Dog object
    let dog = new Dog(breed,name,age);

    // add the dog(s)
    kennel.push(dog);
//    console.log(kennel[i]);

};

// console.log(kennel);

/* 4.
use another loop to go through each object in the dogs array and 
log each one's name to the console
*/


/* 
now, use that loop to add some information to the DOM.
for each dog, add their name, breed, and a certain string based on their age:

if the dog is <= (less than OR equal to) 20 years, call the dog "young"
otherwise, call the dog "old"

thus, each element on the page should look something like this:
Fido
Golden Retriever
12

*/

for (let i=0;i<kennel.length;i++) {
    let dog=kennel[i];
//    console.log(dog.name); // 4 pt1
    let info = document.createElement("p");
    let info_string = "";
    info_string += dog.name
    info_string += dog.breed
    

    if (dog.age <= 20) {
        info_string += "young"
    } else { 
        info_string += "old"
    };

    info.innerHTML = info_string


    document.body.appendChild("info")
};







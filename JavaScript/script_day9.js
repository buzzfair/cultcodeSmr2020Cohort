
// in the event the script tag is placed in an 
// improper place in the html doc,
//  say in the head as opposed to the body,
// you can add an event listener to the 
// script to handle such an occurence and it will
// ensure that the JS is loaded 
// only AFTER all the doc content has been loaded

//document.addEventListener("DOMContentLoaded", function())

let body = document.querySelector("body");
let buttons = document.querySelectorAll("button")

// function buttonClick() {
//     console.log("You clicked on me!");
//     };

// for (let i = 0; i < buttons.length; i++) {
//     let button = buttons[i];
//     // button.onclick = function buttonClick() {
//     //     console.log("I'm button " + button[i] + ". You clicked me!");
//     // replace code above with an event listener >>>>
//     //addEventListener takes the name of an event AND a callback funtion
//     button.addEventListener("click", buttonClick);
// };



// let firstButton = buttons[0];
// firstButton.removeEventListener("click",buttonClick);

//********* ON YOUR OWN ***********/
// store the total amount of clicks the user has made
// on all the buttons
// and display that number on the page
// create a text element to hold that info in the DOM
// get the value of it somehow
// when a button is clicked, update that value
// add that text element to the DOM
// it should start at 0 (zero)
// "You have clicked a button X times!" (X will change)


// let count = document.createElement("p");
// document.body.appendChild(count);
// count.innerHTML = "You have clicked a button 0 times!";
// count.style.fontFamily = "Helvetica"
// count.style.color = "purple";
// count.style.fontWeight = "800";
// let clicks = 0;
// function countClicks() {
//     for (let i = 0; i < buttons.length; i++) {
//     let button = buttons[i];  
//     button.addEventListener("click", function click(event) {
//         // console.log(event);
//         // console.log(event.target);
//         // console.log(event.target.innerHTML);
//         clicks++;
//         // count.innerHTML = `You have clicked a button ${clicks} times!`;
//         count.innerHTML = `You have clicked on a button ${clicks} times`
//         });
//     }
// }
// countClicks();


// use event.target to display three different counters on the page
// one for each different button
//store variables in a way that they're for each button
// David recommends using a Map like so >>>>>


// let clickTracker = new Map();

// let firstButton = buttons[0];

// clickTracker.set(firstButton,0)

// let numClicksFirstButton = clickTracker.get(firstButton);

// console.log(numClicksFirstButton);


for (let i=0;i<3;i++) {
    var p = document.createElement("p");
    p.id = "p"+i;
    document.body.appendChild(p)
    p.innerHTML = "You have clicked Button" + (i+1) + " 0 times";
    p.style.fontFamily = "Helvetica"
    p.style.color = "purple";
    p.style.fontWeight = "800";
    };

let clicks1 = 0;
for (let i=0;i<1;i++) {
    var button1 = document.getElementById("b1")
    button1.addEventListener("click", function click(event) {
    clicks1++;
    p0.innerHTML = `You clicked ${event.target.innerHTML} this number of times ${clicks1}`;
})
}

let clicks2 = 0;
for (let i=0;i<1;i++) {
    var button2 = document.getElementById("b2")
    button2.addEventListener("click", function click(event) {
    clicks2++;
    p1.innerHTML = `You clicked ${event.target.innerHTML} this number of times ${clicks2}`;
})
}

let clicks3 = 0;
for (let i=0;i<1;i++) {
    var button3 = document.getElementById("b3")
    button3.addEventListener("click", function click(event) {
    clicks3++;
    p2.innerHTML = `You clicked ${event.target.innerHTML} this number of times ${clicks3}`;
})
}

// let clicks = 0;
// for (let i=0;i<buttons.length;i++) {
//     var button = buttons[i];
//     button.addEventListener("click", function(event) {
//     console.log(event);
//     console.log(event.target);
//     console.log(event.target.innerHTML);
//     clicks++;
//     p.innerHTML = `You clicked this button: ${event.target.innerHTML}, and you've made this many clicks: ${clicks}`;
//     //p.innerHTML = `You have clicked on a button ${clicks} times`
//     });
// }

//i need a counter for each button which i've got: event.target (it's working!)
//i need to return that event.target (by id?) to the equivalent p.innerhtml
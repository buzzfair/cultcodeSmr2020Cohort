// document is an object you can access
// JS methods are usually named using camelCase

console.log(document.getElementById("nested").innerText); 

// use getElementbyID to store the parent tag in a variable
// then use the properties parentElement and firstElementChild
// to store the body tag and first child in two other variables

const parent = document.getElementById("parent");
const body = parent.parentElement;
const child = parent.firstElementChild;
console.log(parent, body, child);

// use document.getElementsByClassName() to get both child tags
// and store them in a variable called 

const children = document.getElementsByClassName("child");
console.log(children);

// one of the most powerful getters is by CSS selector!
// document.querySelectorAll() gets ALL matching results
// document.querySelector() gets the first matching result

let first = document.querySelector("*"); // gets first html tag in the doc!
let all = document.querySelectorAll("*"); // gets ALL html tags in doc

// Use document.getElementById to obtain the child element and store it in a variable
// Use document.querySelector along with the id selector to obtain the child element and store it in a variable
// Use document.querySelector along with the child selector to obtain the child element and store it in a variable
// To check that each one is correct, use the .innerHTML property and log it to the console


let childElement = document.getElementById("nested");
console.log(childElement.innerHTML);

let childEl2 = document.querySelector("#nested");
console.log(childEl2.innerHTML);

let childEl3 = document.querySelector("div > .child");
console.log(childEl3.innerHTML);


// ************SOLO CODING CHALLENGES*************
// To be completed in CodePen.io: https://codepen.io/dtenorio/pen/JjjjVvM
// Guin's code is at https://codepen.io/buzzfair/pen/abdaLgo?editors=0011

/*
Here are a bunch of DOM exercises!
Please complete them in a Codepen. They should be done in Javascript, unless otherwise indicated.

Please COMMENT your code (more > less) and add a comment before each snippet of code indicating which number exercise it is for.

0. Write a line of code to select the body tag in the HTML and store it inside a variable named body.

1. Create a new div and append it to the body.

2. Give the div from (1.) a class: myDiv. In CSS, give this class a background color of #ffb3ff.

3. Create a h1 tag and append it to the div from (1.). Give this tag an ID: myHeader.

4. Create a h2 tag and append it below the h1 tag. Give this tag an ID: mySubHeader. In CSS, give this ID a background color of #ccfff5. Also give it a solid black border with a width of 3px.

5. Give the h1 tag some innerText: "This is a header". Give the h2 tag some innerText as well: "Subheader".

6. Remove the h1 tag. What happens? Why?

7. After removing it, try appending the same h1 tag back to the body. What returns to the page? Why?

8. Using a loop, add five new p tags to the body of the document. Each p tag should have different innerText based on its index e.g. "This is p tag 1, "This is p tag 2", ... , "This is p tag 5". 

BONUS: give each p tag a different background color, too!
*/

//https://codepen.io/buzzfair/pen/abdaLgo?editors=0010
// 0. 
let body = document.querySelector("body")
console.log(body);

// 1. 
let newDiv = document.createElement("div");
document.querySelector("body").appendChild(newDiv);
console.log(newDiv);

// 2. 
let divClass = document.querySelector("body").lastChild;
divClass.classList.add("myDiv"); 
divClass.style.backgroundColor = "#ffb3ff";
console.log(divClass);

// 3. 
let myHeader = document.createElement("h1");
myHeader.id="myHeader";
newDiv.appendChild(myHeader);
console.log(myHeader);
console.log(newDiv);

// 4.
let mySubHeader = document.createElement("h2");
mySubHeader.id="mySubHeader";
body.appendChild(mySubHeader);
mySubHeader.style.backgroundColor = "#ccfff5";
mySubHeader.style.border = "3px solid black";
console.log(mySubHeader);

// 5.
myHeader.innerText = "This is a header";
mySubHeader.innerText = "Subheader";
console.log(myHeader.innerText,mySubHeader.innerText);

// 6. 
myHeader.remove();
console.log(newDiv);
console.log(myHeader);
// What happens? The h1 element is not longer visible inside the div; HOWEVER, when I console.log the h1 element, it's still there! Woah!
// Why? I learned that .remove() actually only detaches the child element from its parent, breaking the relationship between a child and its parent, 
// but the removed element is still stored in memory.

// 7.
body.appendChild(myHeader);
console.log(body);
// Because the h1 element was removed and stored in memory, I can still get to it, and in this case append it to the body! Neat.

// 8. 
// function createParagraph() 
for (let i=1; i < 6; i++) { 
  let newPara = document.createElement("p");
  newPara.innerHTML = `This is paragraph ${i}`;
  document.body.appendChild(newPara);
}
console.log(body)

// BONUS: 
const colors = ["red","blue","green","yellow","purple"]; 
const paragraphs = document.getElementsByTagName("p");
for(let j = 0; j < paragraphs.length; j++) {
    paragraphs[j].style.backgroundColor = colors[j];
}

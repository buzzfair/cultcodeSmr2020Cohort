Note: when asked to write code, write it in VS Code first and then paste it here.

Design
      0. What are two mistakes to avoid when designing a website? There are infinitely many to choose from, just list a couple.

Make things that work but look terrible
Make things that don’t work as intended, that people don’t want to use

Describe an example of poor UI and an example of poor UX. For each example, explain the following:
What it is
Poor UI - an unattractive or difficult to use interface
Poor UX - a user experience that’s frustrating, badly communicated, confusing
Why it’s a poor example of either UI or UX
Poor UI example: Craigslist
Poor UX example: email list unsubscribe/opt-out that’s impossible to find or requires multiple/complicated steps to achieve
How would you would fix it 
UI can be fixed by ensuring the user interface is as intuitive, familiar and easy-to-navigate as possible
UX is often a matter of understanding the user/s needs and making sure the product/app/website experience meets those needs. To do this, one would research the user/s, define the problem/s and brainstorm solution/s, then create and test a series of designs (wireframes, mock-ups and prototypes), and once the product was free of bugs and successfully tested with as many target users as possible, the product would then be launched


Place the following steps of the design process in the correct order from first to last:
Client intake 
Moodboard creation 
Wireframing
Mockup creation
Prototyping

HTML
What does the meta encoding tag do? Why is it important?

It declares the encoding of the characters. In HTML it should always be set to UTF-8. It’s important as a common practice of modern web development and demonstrates a developer’s attention to detail.

What is the difference between display: block, display: inline, and display: inline-block?

Display: block means that a line break will automatically be inserted before and
after the element, it will also take up the full width of the parent container, block elements can have margins and padding (height and width) applied to them. 

Display: inline means an element will only take up as much space as the content requires, they appear on the same line as their adjacent elements, neither padding nor margin can be applied to inline elements

Display: inline-block means the, like inline elements, they appear on the same line as their adjacent elements, but like block elements, margins and padding (height and width) can be applied to them

What is the difference between classes and ids?

Classes are not unique and can be applied to multiple elements
IDs are unique and should only be applied to a single,individual element











Looking at this code, how many rows and columns would we have?
<div class="container">
  <div class="row">
    <div class="column">
      <h3>Lorem ipsum dolor.</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="column">
      <h3>Lorem ipsum dolor.</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
    <div class="column">
      <h3>Lorem ipsum dolor</h3>
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
</div>

Rows = 6, although only 1 instance of the class “row” is declared
Columns = 1, although 3 instances of the class “column” are declared


What kind of tag would you use to import a video from YouTube?

<video>

Write out an anchor tag that links to https://www.google.com/ in a new tab. Don’t forget all the attributes you’d need to make it secure!

	<a href=”https://www.google.com/” target=”_blank” rel=”noopener noreferrer”>Go
to Google</a>
CSS
How would I call this div by class in CSS and give it a font color of blue and a background color of orange with an opacity of 0.8?
<div class=”text”> Hello! </div>

.text {
    color: blue;
    background-color: orange;
    opacity: 0.8;
}

Describe the difference between margin and padding.


In the CSS box model, padding is located just outside the content and inside the border, while margin is located outside the border


Consider two classes with the following CSS:
.classA {
	font-weight: 700;
}
.classB {
	font-weight: 400;
}

How will elements with the class “classA” differ from elements with the class “classB” in terms of appearance?

Answer: The font “boldness” quality of classA will be heavier, bolder-faced than that of classB. 400 weight is considered a “normal” weight while larger numbers denote a bolder font weight

What is a pseudoclass? Give an example of one and how we might use it.

Pseudo classes declare a special state of the element they’re applied to. An example would be :hover


What aspects of style does flexbox help with?

Flexbox is used for positioning elements and designing a layout in the viewport or container


What is the difference between the main axis and the cross axis inside a flex container?

The main axis is parallel to the flex direction while the cross axis is perpendicular to the flex direction. By default the direction of flexbox is row, and therefore, by default, the main axis is horizontal.


List the CSS property you would use to accomplish the following tasks:
Turn an element into a flex container.
    display: flex;
Change the main axis of the flex container.
    flex-direction: ;
Change the alignment of the items of the flex container along the main axis.
justify-content: ;
Change the alignment of the items of the flex container along the cross axis.
align-items: ;
Change the alignment of a single flex item of the flex container along the main axis.
justify-self: ;
Change the alignment of a single flex item of the flex container along the cross axis.
align-self: ;


Command Line

You have a file structure that begins looking like this:

📁ROOT
	📁LEVEL1
    		🗎file1.txt
    		📁LEVEL2
        			🗎file2.txt
       	 
where your current working directory begins at ./ROOT

The following commands are executed in the command line:
cd LEVEL1
rm file2.txt

What happens? 
We are unable to remove file2.txt if we’re working inside the LEVEL1 directory
Why? 
To access file2.txt (and remove it), we will have to change our location to be inside the same directory (LEVEL2) as the file

What 3 git commands would you use to upload a file from your local machine to a repository on Github?

	git add, git commit, git push

Why use git? How is it better than saving a file on your device locally?

git allows you to track all changes made within a project. This is particularly helpful when a team of designers/developers are working on a project together -- accessing and keeping track of all of the different folders, files and versions of files would be very difficult otherwise. git makes it easier to branch and merge project files, giving more control over the code base being worked on.
Javascript

Name 3 of the 7 Data types in JS.
	
	String, number, boolean

Is it possible to nest an object within another object?

Yes!


What is the difference between let and const?
	
	Variables declared using let can be reassigned while variables declared using
const cannot be reassigned

Write a function that returns an array of 5 random numbers. There is no input.
	
	function fiveRandomNums() {
    let numArr = [];
    for (let i=0; i<5; i++) {
        let randomValue = Math.floor(Math.random() * 9);
        numArr.push(randomValue);
    }
    console.log(numArr)
}
fiveRandomNums();


Using any type of loop, write the syntax to go through the array you created and log out an individual element of the array out to the console. This code does not need to use a function, but may if you choose.

let numArr = [];
    for (let i=0; i<5; i++) {
        let randomValue = Math.floor(Math.random() * 9);
        numArr.push(randomValue);
    }
    let numFromArr = numArr[Math.floor(Math.random() * numArr.length)]
    console.log(numFromArr)


Create yourself as an object in JS using either the object initializer or object constructor methodology, with the property names (and corresponding values for): firstName, lastName, hairColor, eyeColor. You may use fake values if you prefer.

function Person (firstName,lastName,hairColor,eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor
    }
    let gWhite = new Person("Guin", "White", "brown","hazel");
    console.log(gWhite);



Now, create an object constructor function that takes in the same property names as inputs and generates an object when called. You do not have to actually call the function and create a sample object.

    function Person (firstName,lastName,hairColor,eyeColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor
    }



Write a line of code that would gather all of the elements that meet ALL of the following requirements and store them in a variable called “elements”:
Tag type: span
Class name: goldText 
let elements = document.querySelector("span > goldText");


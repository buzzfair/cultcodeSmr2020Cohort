// TO DO LIST MAKER
/*
Let's make a simple to-do list app. On a high level, we want to achieve three different features (in ascending order of difficulty):

1. The user can input the name of a task, click a button, and have that task stored on the page.

Then, for each task...
2. The user can click a checkmark to make the task appear complete.
3. The user can click an X to remove the task from the page.
*/

// 1. The user can input the name of a task, click a button, and have that task stored on the page.

/*
To achieve these tasks, follow these steps:
0. Make a button and input tag and display them side-by-side in the document.
You may do this in the HTML. Note that the codepen has this done for you!
1. Store the button and input tag in variables in your Javascript. You'll need them later!
2. Add an event listener to the button so it responds to a click.

Then, inside the callback function...
3. Get the current value of the text inside the input tag, perhaps using .value
4. Create a new p tag to store the text from (3). 
5. Append the new p tag to the body.

And that's all! But now things get a little harder and the instructions get a little more vague, too...
*/

// 2. The user can click a checkmark to make the task appear complete.
/*
To achieve this tasks, follow these steps:
0. Inside the same event listener from before, you'll need to add a second element before the text with a checkmark inside it: ✓
1. Use an event listener on this checkmark so that when you click on it, you change the style of the task to have a line through it (also called "strikethrough")
2. Ensure this checkmark appears to the left of the text.

As a bonus challenge, you may implement additional functionality so that clicking on the checkmark toggles between strikethrough and normal text. However, it is OK if you leave it the strikethrough effect as irreversible.
*/

// 3. The user can click an X to remove the task from the page.
/*
To achieve this tasks, follow these steps:
0. Inside the initial event listener, you'll need to add a third element before the text with a red X inside it: X
1. Use an event listener on this X so that when you click on it, you remove all three elements (the checkmark, the task, and the X itself) from the body
2. Ensure this X appears to the right of the text initially pre-removal.
*/

// HINTS
/*
0. Consider storing all three elements inside one parent container element. That would make it easier to remove or add all of them at once to the body.
1. The CSS property text-decoration will help you achieve the strike-through effect. 
2. Put any CSS you need as classes in the CSS. Then in the JS you can just add and remove those classes as needeed.
3. Think through what you need to do for each event listener. Ask yourself, 
What am I attaching the event listener TO?
    (some kind of HTML element)
What type of event am I listening for?
    (a string representing an event)
What should I do when that event occurs?
    (an entire function that runs when the event occurs)
*/

/*when button clicks, add checkmark, user input and X below in a div container
/*when checkmark is clicked, strikethrough innerHTML or innerTEXT
  /*when checkmark is clicked again, text becomes normal again - strikethrough disappears
/*when X is clicked, checkmark, innerHTML and X disappear*/

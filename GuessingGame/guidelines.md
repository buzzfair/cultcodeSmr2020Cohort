Do this in steps:
1. Create a div with an id of "game"
2. Append that div to the body. 
3. Make a button with an id of 'start'
4. Append that button to the div.
5. Add a listener so that when the button is clicked,  your game() function runs.
Inside the game() function, which should take in no inputs...
6. Create an img tag and add it below the button tag. This should contain an image of some kind of character who will act as the "host" to your game. This can be anything you want, from a honey badger to LeBron James to a Scandinavian viking.
7. Create an input tag and add that below  the img tag. This will be where the user types in their guess.
8. Create a button tag that should display to the right of the input tag. 
Add a listener so that when that button is clicked, the user officially 'makes' a guess.
9. Store a random number between 1 and 100 as the actual 'right' answer.
10. Initialize a loop of some kind that should always run UNLESS the user wins
11. When the button is clicked, check the user's guess against the right answer. Tell the user if their guess is "too high" or "too low". If the user guesses correctly, let them know they have won and end the game by breaking the loop. This information should be displayed on the document itself somehow, perhaps using innerText or by appending a new tag to hold this information. 

requirements:
- the range of possible numbers should be at least 1 to 100, and the number the user needs to guess should indeed be randomly generated each time and be between those values (i.e. the answer shouldn't be 105 or -10)
- the user should be able to win and lose, and receive feedback when they do
- an image containing the host of the game who greets the user and provides them with feedback
- some CSS-based style to make the game visually appealing

BONUS:

A. Modify the game() function to take in three inputs: a beginning point and end point for the possible numbers (rather than 1 to 100) and a number of guesses. The endpoint MUST be greater than the beginning point.

some stretch goals for those yearning for complexity:
- begin the game with a "start screen" where the user clicks a certain location on-screen in order to begin
- add a "play again" button that lets the user immediately start the game again with a new number
- allow the user to choose between different modes (e.g. easy, medium, hard, each with a different pre-set number range)
- make sure the game works on mobile
- display all the user's past guesses sorted into categories of 'too low' and 'too high'

*/

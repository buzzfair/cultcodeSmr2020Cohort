/*today's exercise: make a "Guess the Number" game!

requirements:
- the range of possible numbers should be at least 1 to 100, 
and the number the user needs to guess should indeed be randomly generated each time
- the user should be able to win and lose, and receive feedback when they do
- an image containing the host of the game who greets the user and provides them with feedback
- some CSS-based style to make the game visually appealing

some stretch goals for those yearning for complexity:
- use an actual button and input field to receive guesses from the user
- begin the game with a "start screen" where the user clicks a certain location on-screen in order to begin
- add a "play again" button that lets the user immediately start the game again with a new number
- allow the user to choose between different modes (e.g. easy, medium, hard)
- make sure the game works on mobile
- display all the user's past guesses sorted into categories of 'too low' and 'too high'

more detailed instructions to guide you if you're feeling lost are located here:
https://codepen.io/dtenorio/pen/MWWKKgB?editors=1111
*/

var body = document.querySelector("body");
var button = document.querySelector("button");
let response = document.getElementsByClassName("output");
var guesses = 1;

var winningNumber = Math.floor((Math.random() * 100) + 1);
button.addEventListener("click", function click(){
    var userGuess = document.querySelector("input").value;
    if (userGuess > winningNumber) {
    var a = document.createElement("p");
    a.innerHTML = "oops! " + userGuess + " is too high! Try a lower number";
    document.getElementById("responses").appendChild(a); // .insertAdjacentHTML('afterend', 'additional HTML code')
    guesses++;
    }
    if (userGuess < winningNumber) {
    var b = document.createElement("p");
    b.innerHTML = "oops! " + userGuess + " is too low! Try a higher number";
    document.getElementById("responses").appendChild(b);
    guesses++;
    }
    if (userGuess == winningNumber) {
        if (guesses == 1) {
        var c = document.response.createElement("p");
        c.innerHTML = "Well done! You guessed my number in" + guesses + "guess! Awesome!";
        document.getElementById("responses").appendChild(c);
        } else {
            var d = document.createElement("p");
            d.innerHTML = "Well done! You guessed my number in " + guesses + " guesses!";
            document.getElementById("responses").appendChild(d);
            }
        }
    });
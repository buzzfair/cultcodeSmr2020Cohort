// document.write("Hello World");

// require axios and save it in a variable
const axios = require('axios');

// save API uri/url to a variable
const url = 'https://ghibliapi.herokuapp.com/films';

// const url = 'https://ghibliapi.herokuapp.com/people';

var container = document.querySelector("div");

// make the get request to the url
axios.get(url) // this takes time, so...
    .then(function (response) { // do this ONLY AFTER the initial api get request is sent and completed
        let data = response.data; // stores an array of 20 objects with several properties
        //console.log(data);

        /*
        response.data contains these objects
            id
            title
            url
            description
            director
            locations (array)
            people (array)
            producer
            release_date
            rt_score
            species (array)
            title
            vehicles(array)
        let's make a card for each of the 20 films that includes the title and director
        */

        /* if we only want to display "My Neighbor, Totoro" and "Spirited Away"
        if (movie_object.title === "My Neighbor Totoro" || movie_object.title === "Spirited Away") {

        } else {
            continue;
        }

        */
    // just movies made before 1988
//    data = data.filter(movie => movie.release_date < "1988");
//    console.log(data);


        for (let i = 0; i < data.length; i++) {
            let movie_object = data[i] // access a specific film inside the object


            // alternate way of filtering out the results we want to see, for example
            // if we just want to see films by a specific director...
            // data = data.filter(movie => movie.director === "Hayao Miyazaki")
            // arrow function above is equivalent to:
            // function(movie) {return movie.director === "Hayao Miyazaki"}


            let card = document.createElement("div");
            card.classList.add("card")

            // create and get the title
            let title = document.createElement("h2");
            title.innerHTML = movie_object.title;
            title.classList.add("title");

            // create and get the director
            let director = document.createElement("h3");
            director.innerHTML = `directed by ${movie_object.director}`;
            director.classList.add('director');

            // add a button to each card
            let button = document.createElement("button");
            button.classList.add("button");
            button.innerHTML = "Read more";
            
            // when we click on the button, add a description to the card
            let buttonClicked = false;

            let description = document.createElement("p");
            description.classList.add("description");
            description.innerHTML = movie_object.description;
            
            button.addEventListener("click", function showDesc(){

                // if button hasn't been clicked, show desc
                // if button has been clicked, hide desc
                if (buttonClicked === false) {
                    card.appendChild(description);
                    buttonClicked = true;
                } else {
                    card.removeChild(description);
                    buttonClicked = false;
                }
            })

            // add title and director to the card
            card.appendChild(title);
            card.appendChild(director);
            card.appendChild(button);

            // add the card to the doc
            container.appendChild(card);


        }

    });


// get all the people in the films, then console.log the name of each person who has brown eyes

const urlPeople = 'https://ghibliapi.herokuapp.com/people';

axios.get(urlPeople) // this takes time, so...
    .then(function (response) { // do this ONLY AFTER the initial api get request is sent and completed
        let data = response.data; // stores an array of 31 objects with several properties
        // console.log(data); // print object with all the people

        data = data.filter(people => people.eye_color === "Brown");
        for (let i=0; i<data.length;i++) {
            let people = data[i];
            console.log(people.name);
        }
});

// when prev is clicked, show previous slide

const body = document.querySelector("body"); // define body
const container = document.body.querySelector(".image-carousel"); // slides div container
const prevArrow = document.body.querySelector(".prev"); // previous slide slideshow controller
const nextArrow = document.body.querySelector(".next"); // next slide slideshow controller
const slides = Array.from(container.children); // create an array of slides 
const images = document.body.querySelectorAll(".image-carousel__images"); // create a NodeList of images

// console.log(slides);
// console.log(images);

// show first slide only, as default

const currentSlide = document.body.querySelector(".slide1");
function showCurrentSlie () {
    if (!currentSlide) { // if not on the default slide
        // show the default slide
    } else {
        // do nothing ? or...?
    }
};


// do I need a loop? I suspect yes, but I'm not sure
for (i=0;i<slides.length;i++) {

};


// when next is clicked, show next slide (or image?)
nextArrow.addEventListener("click", function(event){
    // move from current slide to the next slide
})

// when previous is clicked, show previous slide
previousArrow.addEventListener("click", function(event){
    // move from current slide to the last/previous slide
})



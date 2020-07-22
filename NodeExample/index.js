// to utilize the axios package, this line of code is required
const axios = require('axios');

/*
// get all the dog breeds using the API link provided at/by dog.ceo
const getAllBreeds = async() => {
    return await axios({
        url: 'https://dog.ceo/api/breeds/list/all'
    })
};

// print ALL dog breeds including the subarrays
(async() => {
    const allBreeds = await getAllBreeds()
    console.log(allBreeds.data
    );
})()
*/

const url = 'https://dog.ceo/api/breeds/list/all';

let container = document.querySelector('.container');

axios.get(url).then(function(response) {
    console.log(response);
    container.innerHTML = response.data.message.australian;
});


// const getRandomImg = async() => {
//     return await axios({
//         url: 'https://dog.ceo/api/breeds/image/random'
//     })
// };

// (async() => {
//     const randomImg = await getRandomImg()
//     console.log(randomImg.data
//     );
// })()


let newDiv = document.createElement('div');
newDiv.className = 'randomDog'
document.body.appendChild(newDiv);
let oneDogImg = document.createElement('img');
let link = 'https://dog.ceo/api/breeds/image/random';

// img.src = 'https://dog.ceo/api/breeds/image/random';

axios.get(link).then(function(response) {
    console.log(response.data);
    oneDogImg.src = response.data.message;
    newDiv.appendChild(oneDogImg);
});

const imgStyles = {
    width : '200px',
    height : 'auto',
    borderRadius : '10px'
};

Object.assign(oneDogImg.style, imgStyles);

let imageDiv = document.createElement('div');
imageDiv.className = 'fiveDogPix';

document.body.appendChild(imageDiv);
let links = 'https://dog.ceo/api/breeds/image/random/5';
var docfrag = document.createDocumentFragment();

axios.get(links).then(function(response) {
    // console.log(response.data.message);
    let photos = response.data.message;
    let dogImgs = [];
    for(let i=0; i<photos.length; i++) { // loop through API data array
        dogImgs.push(photos[i]); // create array of img urls and push the API data urls into it
        console.log(dogImgs) // log new array to make sure all the urls were added to it
    }
    dogImgs.forEach(function(url,index,originalArray) { // loop through newly created img url array
        let img = document.createElement('img'); // create img elements
        img.src = url; // assign a url as a src for each img
        img.style.height = '250px'
        img.style.width = 'auto'
        docfrag.appendChild(img); // append the imgs to a document fragment
    })
    imageDiv.appendChild(docfrag) // append the document fragment to the image div that was created earlier

});


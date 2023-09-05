var endpoint = `https://dog.ceo/api/breeds/image/random`;

var image = document.querySelector('.dog-image')

// newQuoteButton.addEventListener('click', getQuote);

function fetchDog(){
   console.log('registered');
   console.log(image);
   fetch(endpoint)
   .then(response =>{
    return response.json()
   })
   .then(jsonResponse =>{
    image.src = jsonResponse.message;
   })
};
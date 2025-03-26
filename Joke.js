const jokeContainer =  document.getElementById('joke-container');
const pageTitle = document.getElementById('page-title');


function getRandomJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode.')
    .then(response => response.json())
    .then(data => {
        if (data.type === 'single'){
            jokeContainer.textContent = data.joke;
        } else if (data.type === 'twopart'){
            jokeContainer.innerHTMLn= `${data.setup}<span style="color: gray;">...</span>${data.delivery}`;
        }
    })
    .catch(() => {
          jokeContainer.textContent = 'something went wrong.';
    });
}



//from specific category

function getCategoryJoke(Category)
{
    fetch(`https://v2.jokeapi.dev/joke/${Category}?safe-mode`)
    .then(response => response.json())
    .then(data => {
        if (data.type === 'single'){
            jokeContainer.textContent = data.joke;
        } else if (data.type === 'twopart') {
            jokeContainer.innerHTMLn= `${data.setup}<span style="color: gray;">...</span>${data.delivery}`;
        }
    })
    .catch(() => {
          jokeContainer.textContent = 'something went wrong.';
    });
}






// Event listeners for each button. When a button is clicked, we get a joke from the respective category
document.getElementById('programming-btn').addEventListener('click', function() {
    pageTitle.textContent = 'A Random Programming Joke';
    getCategoryJoke('Programming');
});

document.getElementById('misc-btn').addEventListener('click', function() {
    pageTitle.textContent = 'A Random Misc Joke';
    getCategoryJoke('Misc');
});

document.getElementById('pun-btn').addEventListener('click', function() {
    pageTitle.textContent = 'A Random Pun';
    getCategoryJoke('Pun');
});

document.getElementById('spooky-btn').addEventListener('click', function() {
    pageTitle.textContent = 'A Random Spooky Joke';
    getCategoryJoke('Spooky');
});

document.getElementById('christmas-btn').addEventListener('click', function() {
    pageTitle.textContent = 'A Random Christmas Joke';
    getCategoryJoke('Christmas');
});

// When the page loads, we get a random joke from the "Any" category
getRandomJoke();
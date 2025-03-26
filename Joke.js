const jokeContainer =  document.getElementById('joke-container');
const pageTitle = document.getElementById('page-title');


function getRandomJoke(){
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode.')
    .then(response => response.json())
    .then(data => {
        if (data.type === 'single'){
            jokeContainer.textContent = data.joke;
        } else if (data.type === 'twopart'){
            jokeContainer.innerHTML= `${data.setup}<span style="color: gray;">...</span>${data.delivery}`;
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
            jokeContainer.innerHTML= `${data.setup}<span style="color: gray;">...</span>${data.delivery}`;
        }
    })
    .catch(() => {
          jokeContainer.textContent = 'something went wrong.';
    });
}




document.getElementById('programming-btn').addEventListener('click',function(){
    pageTitle.textContent = 'A random programmimg joke';
    getCategoryJoke('Programming');
});

document.getElementById('misc-btn').addEventListener('click',function(){
    pageTitle.textContent = 'A random Misc joke';
    getCategoryJoke('Misc');
});

document.getElementById('pun-btn').addEventListener('click',function(){
    pageTitle.textContent = 'A random pun';
    getCategoryJoke('pun');
});

document.getElementById('spooky-btn').addEventListener('click',function(){
    pageTitle.textContent = 'A random spooky joke';
    getCategoryJoke('spooky');
});

document.getElementById('christmas-btn').addEventListener('click',function(){
    pageTitle.textContent = 'A random spooky joke';
    getCategoryJoke('Christmas');
});

getRandomJoke();
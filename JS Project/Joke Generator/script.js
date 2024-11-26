let jokeBtn = document.getElementById('joke-button');
jokeBtn.addEventListener('click', getjoke);

async function getjoke() {
    const apiURL = 'https://official-joke-api.appspot.com/random_joke';

    try {
        let response = await fetch(apiURL);

        if (response.ok) {
            let jokeData = await response.json();
            displayJoke(jokeData); // Logs the joke data to the console
        } else {
            alert('Failed to fetch joke. Please try again!');
        }
    } catch (error) {
        console.error('An error occurred:', error); // Logs error details
        alert('Something went wrong. Please try again later.');
    }
}

function displayJoke(joke){
    let setup = document.getElementById('setup');
    setup.innerHTML = joke.setup;

    let punchline = document.getElementById('punchline');
    punchline.innerHTML = joke.punchline;
}
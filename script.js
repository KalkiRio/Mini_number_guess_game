// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let numberOfTries = 0;

// Get elements from the DOM
const guessField = document.getElementById('guessField');
const guessSubmit = document.getElementById('guessSubmit');
const message = document.querySelector('.message');

guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    numberOfTries++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number in ${numberOfTries} tries.`;
        message.style.color = 'green';
        guessField.disabled = true;
        guessSubmit.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Try higher!';
        message.style.color = 'red';
    } else {
        message.textContent = 'Try lower!';
        message.style.color = 'red';
    }

    guessField.value = '';
    guessField.focus();
}

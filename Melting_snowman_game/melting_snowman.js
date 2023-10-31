const words = ['DOG', 'CAT', 'DOLPHIN', 'BIRD', 'COW', 'SQUIRREL'];

const maxWrongGuesses = 6;

//random word that the player needs to guess
let wordToGuess = '';

//array of underscores representing the unguessed letters in the word
let guessedLetters = [];

//keep track of the number of incorrect guesses the player has made
let wrongGuesses = 0;

// which melting snowman image to display
let imageCount = 1;

//selects a random word from the array
function selectRandomWord() {   
    return words[Math.floor(Math.random() * words.length)];
}

function initializeGame() {
    wordToGuess = selectRandomWord();
    guessedLetters = Array(wordToGuess.length).fill(' _ ');
    wrongGuesses = 0;

    updateWordDisplay();

    updateMeltingSnowmanGraphic();

    const lettersContainer = document.querySelector('.letters');
    
    while (lettersContainer.firstChild) {
    lettersContainer.removeChild(lettersContainer.firstChild);
    }

    for(let i = 0; i < 26; i++){
        const letter = String.fromCharCode(65 + i);
        const button = document.createElement('button');
        
        button.innerText = letter;
        
        button.addEventListener('click', function (){
            handleGuess(letter);
        });
        
        lettersContainer.appendChild(button);
    }

    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = '';
    
};

function updateWordDisplay(){
    const wordContainer = document.querySelector('.word');
    wordContainer.innerText = guessedLetters.join(' ');
};

function handleGuess(letter) {
    // If the letter has already been guessed, do nothing
    if (guessedLetters.includes(letter)) {
      return;
    }
  
    // Add the letter to the list of guessed letters
    guessedLetters.forEach((guessedLetter, index) => {
      if (wordToGuess[index] === letter) {
        guessedLetters[index] = letter;
      }
    });
  
    // If the letter is not in the hidden word, increment the wrong guesses count and update the Melting Snowman graphic
    if (!wordToGuess.includes(letter)) {
      wrongGuesses++;
      updateMeltingSnowmanGraphic();
    }
  
    // Update the word display
    updateWordDisplay();
  
    // Check if the game has been won or lost
    checkWinOrLose();
  }

function updateIncorrectLettersDisplay (){
    const incorrectLettersContainer = document.querySelector('.incorrect-letters');
    incorrectLettersContainer.textContent = `Incorrect Letters:  ${incorrectLetters.join(', ')}`;
}

function updateMeltingSnowmanGraphic(){
    const meltingSnowmanContainer = document.querySelector('.melting_snowman');
    meltingSnowmanContainer.innerHTML = `<img src="images/${imageCount}.png" alt="MeltingSnowman ${imageCount}">`;
    imageCount++;
};

function checkWinOrLose(){
    if(guessedLetters.join('') === wordToGuess){
        
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = 'You win!';
        
        const letterButtons = document.querySelectorAll('.letters_button');
        letterButtons.forEach (button => {
            button.disabled = true;
            button.removeEventListener('click', handleGuess);
        });

    } else if (wrongGuesses >= maxWrongGuesses){
        
        const messageContainer = document.querySelector('.message');
        messageContainer.innerText = `You lose :( The word was "${wordToGuess}".`;
        
        const meltingSnowmanContainer = document.querySelector('.melting_snowman');
        meltingSnowmanContainer.innerHTML = `<img src="images/gameover.png" alt="game over">`; 
        
        const letterButtons = document.querySelectorAll('.letters_button');
        letterButtons.forEach(button => {
            button.disabled = true;
            button.removeEventListener('click', handleGuess);
        })
    }
};

window.addEventListener('load', initializeGame);
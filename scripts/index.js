const MAXIMUM_NUMBERS_OF_ATTEMPTS = 6
const WORDS = [
    "apple", "banana", "cat", "dog", "elephant", "flower", "guitar", "house", "ice cream", "jacket",
    "kite", "lemon", "monkey", "night", "orange", "pencil", "queen", "rainbow", "sun", "tree",
    "umbrella", "violin", "water", "xylophone", "yacht", "zebra", "book", "car", "desk", "egg",
    "fish", "grape", "hat", "island", "juice", "kangaroo", "lion", "moon", "notebook", "ocean",
    "panda", "quilt", "robot", "shoe", "table", "unicorn", "volcano", "waffle", "xylophone", "yogurt",
    "zeppelin", "ball", "cake", "dolphin", "ear", "frog", "garden", "hammer", "igloo", "jellyfish",
    "key", "lighthouse", "mango", "nest", "ostrich", "parrot", "quokka", "rocket", "sunflower", "tiger",
    "umbrella", "vase", "whale", "xylophone", "yarn", "zebra", "apple", "bus", "cup", "duck",
    "elephant", "fish", "guitar", "hat", "ice cream", "jacket", "kite", "lemon", "monkey", "night",
]


const wordElement = document.querySelector("#word")
const attemptsElement = document.querySelector("#attempts")
const attemptDemoElement = document.querySelector("#attemptDemo")
const messageElement = document.querySelector("#message")
const gameDiv = document.querySelector("#game")
const menuDiv = document.querySelector("#menu")

let currentAttempt = MAXIMUM_NUMBERS_OF_ATTEMPTS
let guessedWord = ""
let word = ""

window.addEventListener('load', e => {
    guessWord()
    updateAttempts()
})

document.addEventListener('click', e => {
    if (e.target.classList.contains("btn")){
        if (currentAttempt < 1){
            return
        }
        const btn = e.target
        const btnValue = btn.innerHTML.toLowerCase()
        const isTrueLetter = checkLetter(btnValue)
        if (!isTrueLetter) {
            currentAttempt--;
            updateAttempts()
            if (currentAttempt < 1){
                gameOver(`You lost :( </br> The word you were trying to guess was <u>${word}</u>. <br/>Let's try again?`)
            }
            return
        }
        openLetter(btnValue)
        if (guessedWord === word){
            gameOver("Greeting! You guessed the word")
        }
    }
})

function guessWord(){
    guessedWord = word.replace(/[a-z]/g ,"_")
    wordElement.innerHTML = guessedWord
}

function updateAttempts(){
    attemptsElement.innerHTML = `${currentAttempt}/${MAXIMUM_NUMBERS_OF_ATTEMPTS}`
    attemptDemoElement.setAttribute("src", `./images/Hangman-${MAXIMUM_NUMBERS_OF_ATTEMPTS - currentAttempt}.png`)
}

function gameOver(message){
    messageElement.innerHTML = message
    gameDiv.classList.add("hidden")
    menuDiv.classList.remove("hidden")
}

function startGame(){
    word = WORDS[Math.floor(Math.random() * WORDS.length-1)]
    currentAttempt = MAXIMUM_NUMBERS_OF_ATTEMPTS
    updateAttempts()
    guessWord()
    gameDiv.classList.remove("hidden")
    menuDiv.classList.add("hidden")
}

function openLetter(letter){
    const guessedWordArray = guessedWord.split('');

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessedWordArray[i] = letter;
        }
    }
    guessedWord = guessedWordArray.join('');
    wordElement.innerHTML = guessedWord
}

function checkLetter(letter){
    for (let i = 0; i < word.length;i++){
        if (word[i].toLowerCase() === letter){
            return true
        }
    }
    return false
}


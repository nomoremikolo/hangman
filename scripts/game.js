const wordElement = document.querySelector("#word")
const attemptsElement = document.querySelector("#attempts")
const attemptDemoElement = document.querySelector("#attemptDemo")
const messageElement = document.querySelector("#message")
const gameDiv = document.querySelector("#game")
const menuDiv = document.querySelector("#menu")
const successSound = document.querySelector("#successSound")
const errorSound = document.querySelector("#errorSound")
const winSound = document.querySelector("#winSound")
const loseSound = document.querySelector("#loseSound")

class Game{
    word = ""
    guessedWord = ""
    attempt = MAXIMUM_NUMBERS_OF_ATTEMPTS

    startGame(){
        this.makeWord()
        this.updateAttempt()
        gameDiv.classList.remove("hidden")
        menuDiv.classList.add("hidden")
    }

    gameOver(message){
        messageElement.innerHTML = message
        gameDiv.classList.add("hidden")
        menuDiv.classList.remove("hidden")
    }

    updateAttempt(){
        attemptsElement.innerHTML = `${this.attempt}/${MAXIMUM_NUMBERS_OF_ATTEMPTS}`
        attemptDemoElement.setAttribute("src", `./images/Hangman-${MAXIMUM_NUMBERS_OF_ATTEMPTS - this.attempt}.png`)
    }

    guessWord(letter){
        if (this.attempt < 1){
            return
        }
        let isTrueLetter = false;
        for (let i = 0; i < this.word.length;i++){
            if (this.word[i].toLowerCase() === letter){
                isTrueLetter = true
            }
        }
        if (!isTrueLetter){

            this.attempt--;
            this.updateAttempt()
            if (this.attempt < 1){
                this.gameOver(`You lost :( </br> The word you were trying to guess was <u>${this.word}</u>. <br/>Let's try again?`)
                loseSound.currentTime = 0;
                loseSound.play()
                return
            }
            errorSound.currentTime = 0;
            errorSound.play()
        }else{

            this.openLetter(letter)
            if (this.guessedWord === this.word){
                this.gameOver("Greeting! You guessed the word")
                winSound.currentTime = 0;
                winSound.play()
                return
            }
            successSound.currentTime = 0;
            successSound.play()
        }

    }

    openLetter(letter){
        const guessedWordArray = this.guessedWord.split('');

        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
                guessedWordArray[i] = letter;
            }
        }
        this.guessedWord = guessedWordArray.join('');
        wordElement.innerHTML = this.guessedWord

    }

    makeWord(){
        this.word = WORDS[Math.floor(Math.random() * WORDS.length-1)]
        console.log(this.word)
        this.attempt = MAXIMUM_NUMBERS_OF_ATTEMPTS
        this.guessedWord = this.word.replace(/[a-z]/g ,"_")
        wordElement.innerHTML = this.guessedWord

    }
}

import { MAXIMUM_NUMBERS_OF_ATTEMPTS, WORDS } from "./constants.js";
import { soundManager } from "./sound.js";

class HangmanGame {
    constructor() {
        this.wordElement = document.querySelector("#word");
        this.attemptsElement = document.querySelector("#attempts");
        this.attemptDemoElement = document.querySelector("#attemptDemo");
        this.messageElement = document.querySelector("#message");
        this.gameDiv = document.querySelector("#game");
        this.menuDiv = document.querySelector("#menu");

        this.word = "";
        this.guessedWord = "";
        this.attempt = MAXIMUM_NUMBERS_OF_ATTEMPTS;
    }

    startGame() {
        this.makeWord();
        this.updateAttempt();
        this.gameDiv.classList.remove("hidden");
        this.menuDiv.classList.add("hidden");
    }

    gameOver(message) {
        this.messageElement.innerHTML = message;
        this.gameDiv.classList.add("hidden");
        this.menuDiv.classList.remove("hidden");
    }

    updateAttempt() {
        this.attemptsElement.innerHTML = `${this.attempt}/${MAXIMUM_NUMBERS_OF_ATTEMPTS}`;
        this.attemptDemoElement.setAttribute(
            "src",
            `./images/Hangman-${MAXIMUM_NUMBERS_OF_ATTEMPTS - this.attempt}.png`
        );
    }

    guessWord(letter) {
        if (this.attempt < 1) {
            return;
        }

        let isTrueLetter = false;
        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i].toLowerCase() === letter) {
                isTrueLetter = true;
            }
        }

        if (!isTrueLetter) {
            this.attempt--;
            this.updateAttempt();

            if (this.attempt < 1) {
                this.gameOver(`You lost :( </br> The word you were trying to guess was <u>${this.word}</u>. <br/>Let's try again?`);
                soundManager.playLose();
                return;
            }

            soundManager.playError();
        } else {
            this.openLetter(letter);

            if (this.guessedWord === this.word) {
                this.gameOver("Congratulations! You guessed the word");
                soundManager.playWin();
                return;
            }

            soundManager.playSuccess();
        }
    }

    openLetter(letter) {
        const guessedWordArray = this.guessedWord.split("");

        for (let i = 0; i < this.word.length; i++) {
            if (this.word[i] === letter) {
                guessedWordArray[i] = letter;
            }
        }

        this.guessedWord = guessedWordArray.join("");
        this.wordElement.innerHTML = this.guessedWord;
    }

    makeWord() {
        this.word = WORDS[Math.floor(Math.random() * WORDS.length)];
        console.log(this.word);
        this.attempt = MAXIMUM_NUMBERS_OF_ATTEMPTS;
        this.guessedWord = this.word.replace(/[a-z]/g, "_");
        this.wordElement.innerHTML = this.guessedWord;
    }
}

export default HangmanGame;
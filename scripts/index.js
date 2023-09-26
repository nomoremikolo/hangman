import HangmanGame from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
    const game = new HangmanGame();

    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn")) {
            const btn = e.target;
            const btnValue = btn.innerHTML.toLowerCase();
            game.guessWord(btnValue);
        }
    });

    document.querySelector(".start-btn").addEventListener("click", () => {
        game.startGame();
    });
});

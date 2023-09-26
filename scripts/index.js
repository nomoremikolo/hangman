const game = new Game()

window.addEventListener('load', e => {
    game.updateAttempt()
})

document.addEventListener('click', e => {
    if (e.target.classList.contains("btn")){
        const btn = e.target
        const btnValue = btn.innerHTML.toLowerCase()
        game.guessWord(btnValue)
    }
})




class SoundManager {
    constructor() {
        this.successSound = new Audio("../sounds/clickSuccess.wav");
        this.errorSound = new Audio("../sounds/clickWrong.wav");
        this.winSound = new Audio("../sounds/winSound.wav");
        this.loseSound = new Audio("../sounds/loseSound.wav");
    }

    playSuccess() {
        this.successSound.currentTime = 0;
        this.successSound.play();
    }

    playError() {
        this.errorSound.currentTime = 0;
        this.errorSound.play();
    }

    playWin() {
        this.winSound.currentTime = 0;
        this.winSound.play();
    }

    playLose() {
        this.loseSound.currentTime = 0;
        this.loseSound.play();
    }
}

export const soundManager = new SoundManager();
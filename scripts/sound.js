class SoundManager {
    constructor() {
        this.sounds = {};
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

    loadAndPlaySound(name, src) {
        if (!this.sounds[name]) {
            this.sounds[name] = new Audio(src);
        }
        this.sounds[name].currentTime = 0;
        this.sounds[name].play();
    }
}

export const soundManager = new SoundManager();
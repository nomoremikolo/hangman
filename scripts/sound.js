class SoundManager {
    constructor() {
        this.sounds = {};
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

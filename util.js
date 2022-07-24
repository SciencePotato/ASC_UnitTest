module.exports = class utilFunction {
    static alphabet = `.,?!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!`;
    static spaceAlphabet = `      .,?!abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.,?!`;
    static onlyAlphabet = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

    static randIntRange = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;


    static makeStr = (len) => {
        let s = '';
        for (let i = 0; i < len; i++) {
            s += this.alphabet[this.randIntRange(0, this.alphabet.length)];
        }

        return s;
    };

    static makeStrSpace = (len) => {
        let s = '';
        for (let i = 0; i < len; i++) {
            s += this.spaceAlphabet[this.randIntRange(0, this.spaceAlphabet.length)];
        }

        return s;
    };

    static makeStrOnly = (len) => {
        let s = '';
        for (let i = 0; i < len; i++) {
            s += this.onlyAlphabet[this.randIntRange(0, this.onlyAlphabet.length)];
        }

        return s;
    };

    static randSentence = (numWords) => {
        let s = '';
        for (let i = 0; i < numWords; i++) {
            s += `${this.makeStr(this.randIntRange(0, 10))} `;
        }

        return s;
    };

    static randSentenceSpace = (numWords) => {
        let s = '';
        for (let i = 0; i < numWords; i++) {
            s += `${this.makeStrSpace(this.randIntRange(0, 10))} `;
        }

        return s;
    };  

    static randSentenceOnly = (numWords) => {
        let s = '';
        for (let i = 0; i < numWords; i++) {
            s += `${this.makeStrOnly(this.randIntRange(0, 10))} `;
        }

        return s.replaceAll(" ", "");
    };  
}


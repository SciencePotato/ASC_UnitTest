const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let wordLength = utils.randIntRange(1, 10);
    let word = utils.randSentenceOnly(wordLength);
    let isPalindrome = true;
    word = word.replaceAll(" ", '');
    for (let i = 0; i < (word.length / 2); i ++) {
        if (isPalindrome == false)
            break;
        if (!(word.charAt(i).toUpperCase() == word.charAt(word.length - i - 1).toUpperCase()))
            isPalindrome = false;
    }
    let userAns =  testFunction.isPalindrome(word);
    r1a.push(isPalindrome === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let wordLength = utils.randIntRange(1, 10);
    let wordCharacter = [];
    let word = ""
    for (let i = 0; i < wordLength; i ++) {
        let char = utils.onlyAlphabet.charAt(utils.randIntRange(1, utils.onlyAlphabet.length));
        wordCharacter.push(char);
    }

    for (let i = 0; i < wordCharacter.length; i ++) {
        word += wordCharacter[i];
    }

    for (let i = wordCharacter.length - 1; i >= 0; i --) {
        word += wordCharacter[i];
    }

    let isPalindrome = true;
    word = word.replaceAll(" ", '');
    for (let i = 0; i < (word.length / 2); i ++) {
        if (isPalindrome == false)
            break;
        if (!(word.charAt(i).toUpperCase() == word.charAt(word.length - i - 1).toUpperCase()))
            isPalindrome = false;
    }
    let userAns =  testFunction.isPalindrome(word);
    r2a.push(isPalindrome === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Palindrome Word', () => {


  it('<b>TEST #1</b><br> isPalindrome should be defined as a function', () => {
    expect(testFunction.isPalindrome).to.exist;
    expect(testFunction.isPalindrome).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing isPalindrome 5 times with non-palindrome words', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing isPalindrome 5 times with palindrome words', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with both Uppercase only and lowercase only words!$$[{"a1": "Taco Cat"},{"a1": "Evil Olive"}]$$', () => {
    expect(testFunction.isPalindrome('Taco Cat')).to.equal(true);
    expect(testFunction.isPalindrome('Evil Olive')).to.equal(true);
  });
});

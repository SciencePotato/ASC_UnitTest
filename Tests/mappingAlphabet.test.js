/* To DO */
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let randLen = utils.randIntRange(0, 100);
    let randWord = "";
    let ans = 0;

    for (let i = 0; i < randLen; i ++) {
        let tmp = utils.randIntRange(0, 25);
        randWord += utils.capAlphabet[tmp];
    }

    for (let i = 0; i < randWord.length; i ++) {
        ans += randWord.charCodeAt(i) - 64;
    }
    let userAns = testFunction.mappingAlphabet(randWord);
    r1a.push(ans === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let randLen = utils.randIntRange(0, 100);
    let randWord = "";
    let ans = 0;

    for (let i = 0; i < randLen; i ++) {
        let tmp = utils.randIntRange(0, 25);
        randWord += utils.capAlphabet[tmp];
    }

    for (let i = 0; i < randWord.length; i ++) {
        ans += randWord.charCodeAt(i) - 64;
    }
    let userAns = testFunction.mappingAlphabet(randWord);
    r2a.push(ans === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Mapping Alphabet', () => {

  it('<b>TEST #1</b><br> mappingAlphabet should be defined as a function', () => {
    expect(testFunction.mappingAlphabet).to.exist;
    expect(testFunction.mappingAlphabet).to.be.a('function');
  });

  it('<b>TEST #2</b><br> testing mappingAlphabet 5 times with random combination of words', () => {
    expect(allR1Matched).to.be.true;
  });

  it('<b>TEST #3</b><br> testing mappingAlphabet 5 more times with random combination of words', () => {
    expect(allR2Matched).to.be.true;
  });

  it('<b>TEST #4</b><br> should work with words with empty String!$$[{"a1": ""}]$$', () => {
    expect(testFunction.mappingAlphabet('')).to.equal(0);
  });
});

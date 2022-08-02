/* To DO */
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let wordLength = utils.randIntRange(1, 5000);
    let word = utils.specialSentence(wordLength); 
    let userAns =  testFunction.toRomanNumeral(word);
    word = word.replaceAll("1", "I");
    word = word.replaceAll("0", "O");
    r1a.push(word === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let wordLength = utils.randIntRange(1, 5000);
    let word = utils.specialSentence(wordLength); 
    let userAns =  testFunction.toRomanNumeral(word);
    word = word.replaceAll("1", "I");
    word = word.replaceAll("0", "O");
    r2a.push(word === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Typo Correction', () => {


  it('<b>TEST #1</b><br> toRomanNumeral should be defined as a function', () => {
    expect(testFunction.toRomanNumeral).to.exist;
    expect(testFunction.toRomanNumeral).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing toRomanNumeral 5 times with random combination of words', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing toRomanNumeral 5 more times with random combination of words', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with words with empty String and a String without typo!$$[{"a1": ""},{"a1": "TOMATO"}]$$', () => {
    expect(testFunction.toRomanNumeral('')).to.equal('');
    expect(testFunction.toRomanNumeral('TOMATO')).to.equal('TOMATO');
  });
});

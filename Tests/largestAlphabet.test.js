const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 10);
    let randSent = utils.randSentenceOnly(range);
    let largestChar = 'A';
    for (let i = 0; i < randSent.length; i ++) {
        if (randSent.charAt(i) > largestChar) 
            largestChar = randSent.charAt(i);
    }
    let userAns =  testFunction.largestAlphabet(randSent);
    r1a.push(largestChar === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 10);
    let randSent = utils.randSentenceOnly(range);
    let largestChar = 'A';
    for (let i = 0; i < randSent.length; i ++) {
        if (randSent.charAt(i) > largestChar) 
            largestChar = randSent.charAt(i);
    }
    let userAns =  testFunction.largestAlphabet(randSent);
    r2a.push(largestChar === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Largest Alphabet', () => {


  it('<b>TEST #1</b><br> largestAlphabet should be defined as a function', () => {
    expect(testFunction.largestAlphabet).to.exist;
    expect(testFunction.largestAlphabet).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing largestAlphabet 5 times with random words', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing largestAlphabet 5 more times with random words', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with one character Word!$$[{"a1": "A"}]$$', () => {
    expect(testFunction.largestAlphabet('A')).to.equal('K');
  });
});
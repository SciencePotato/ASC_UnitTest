
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 10000);
    let largestDigit = 0;
    while (randNum > 0) {
        let temp = randNum % 10;
        if (temp > largestDigit) 
            largestDigit = temp;
        randNum /= 10;
        randNum = Math.trunc(randNum);
    }
    let userAns =  testFunction.largestSingleDigit(randNum);
    r1a.push(largestDigit === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 10000);
    let largestDigit = 0;
    while (randNum > 0) {
        let temp = randNum % 10;
        if (temp > largestDigit) 
            largestDigit = temp;
        randNum /= 10;
        randNum = Math.trunc(randNum);
    }
    let userAns =  testFunction.largestSingleDigit(randNum);
    r2a.push(largestDigit === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Largest Single Digit', () => {


  it('<b>TEST #1</b><br> largestSingleDigit should be defined as a function', () => {
    expect(testFunction.largestSingleDigit).to.exist;
    expect(testFunction.largestSingleDigit).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing largestSingleDigit 5 times with random numbers', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing largestSingleDigit 5 more times with random numbers', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with 0 and number with 0 in front!$$[{"a1": 0},{"a1": 1}]$$', () => {
    expect(testFunction.largestAlphabet(0)).to.equal(0);
    expect(testFunction.largestAlphabet(010)).to.equal(1);
  });
});
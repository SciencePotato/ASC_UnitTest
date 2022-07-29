
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(0, 10000);
    let binary = (randNum >>> 0).toString(2);
    let binaryNum = parseInt(binary);
    let userAns =  testFunction.numToBinary(randNum);
    r1a.push(binaryNum === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(0, 10000);
    let binary = (randNum >>> 0).toString(2);
    let binaryNum = parseInt(binary);
    let userAns =  testFunction.numToBinary(randNum);
    r2a.push(binaryNum === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Number to Binary', () => {


  it('<b>TEST #1</b><br> numToBinary should be defined as a function', () => {
    expect(testFunction.numToBinary).to.exist;
    expect(testFunction.numToBinary).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing numToBinary 5 times with random combination of numbers', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing numToBinary 5 more times with random combination of numbers', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with words with English words!$$[{"a1": " potato "},{"a1": "tomato"}]$$', () => {
    expect(testFunction.numToBinary(4)).to.equal(1000);
    expect(testFunction.numToBinary(0)).to.equal(0);
  });
});

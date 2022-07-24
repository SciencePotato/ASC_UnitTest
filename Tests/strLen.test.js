const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

const randIntRange = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 500);
    let randSent = utils.randSentenceSpace(range);
    randSent = randSent.trim();
    randSent = randSent.replaceAll(" ", "");
    let sentLen = randSent.length;
    let userAns =  testFunction.strLen();
    r1a.push(sentLen === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 500);
    let randSent = utils.randSentenceSpace(range);
    randSent = randSent.trim();
    randSent = randSent.replaceAll(" ", "");
    let sentLen = randSent.length;
    let userAns =  testFunction.strLen();
    r2a.push(sentLen === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Sum Some Nums', () => {


  it('<b>TEST #1</b><br> sumTwo should be defined as a function', () => {
    expect(testFunction.strLen).to.exist;
    expect(testFunction.strLen).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing sumTwo 5 times with random numbers', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing sumTwo 5 times with random negative numbers', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with numbers like 1 million!$$[{"a1": " potato "},{"a1": "tomato"}]$$', () => {
    expect(testFunction.strLen(' potato ')).to.equal(6);
    expect(testFunction.strLen('tomato')).to.equal(6);
  });
});

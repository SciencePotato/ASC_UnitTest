const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 500);
    let randSent = utils.randSentenceSpace(range);
    randSent = randSent.trim();
    randSent = randSent.replaceAll(" ", "");
    let sentLen = randSent.length;
    let userAns =  testFunction.strLen(randSent);
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
    let userAns =  testFunction.strLen(randSent);
    r2a.push(sentLen === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('String Length', () => {


  it('<b>TEST #1</b><br> strLen should be defined as a function', () => {
    expect(testFunction.strLen).to.exist;
    expect(testFunction.strLen).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing strLen 5 times with random combination of words', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing strLen 5 more times with random combination of words', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with random spaces!$$[{"a1": " potato "},{"a1": "t o m a t o"}]$$', () => {
    expect(testFunction.strLen(' potato ')).to.equal(6);
    expect(testFunction.strLen('t o m a t o')).to.equal(6);
  });
});
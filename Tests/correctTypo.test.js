
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let userAns =  testFunction.correctTypo();
    r1a.push(sentLen === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let userAns =  testFunction.correctTypo();
    r2a.push(sentLen === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Typo Correction', () => {


  it('<b>TEST #1</b><br> correctTypo should be defined as a function', () => {
    expect(testFunction.correctTypo).to.exist;
    expect(testFunction.correctTypo).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing correctTypo 5 times with random combination of words', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing correctTypo 5 more times with random combination of words', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with words with English words!$$[{"a1": " potato "},{"a1": "tomato"}]$$', () => {
    expect(testFunction.correctTypo(' potato ')).to.equal(6);
    expect(testFunction.correctTypo('tomato')).to.equal(6);
  });
});

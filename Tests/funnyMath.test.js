const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let input = utils.randIntRange(-500, 500);
    let target = utils.randIntRange(-1000, 1000);
    let ans = target - input;
    let userAns =  testFunction.funnyMath(input, target);
    r1a.push(ans === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let input = utils.randIntRange(-500, 500);
    let target = utils.randIntRange(-1000, 1000);
    let ans = target - input;
    let userAns =  testFunction.funnyMath(input, target);
    r2a.push(ans === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Funny Math', () => {


  it('<b>TEST #1</b><br> funnyMath should be defined as a function', () => {
    expect(testFunction.funnyMath).to.exist;
    expect(testFunction.funnyMath).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing funnyMath 5 times with random combination', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing funnyMath 5 more times with random combination', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with 0s!$$[{"a1": 0, "a2" : 0}]$$', () => {
    expect(testFunction.funnyMath(0, 0)).to.equal(6);
  });
});
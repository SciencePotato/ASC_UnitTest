const utils = require('../util.js');
const testFunction = require('../main.js');
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 500);
    let tmp = 501;
    let inputArray = [];
    for (let x = 0; x < range; x++) {
        let tmpNum = utils.randIntRange(-500, 500);
        if (tmpNum < tmp)
            tmp = tmpNum;
        inputArray.push(tmpNum);
    };
    let userAns = testFunction.smallestNum(inputArray);
    r1a.push(tmpSum === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 500);
    let tmp = 501;
    let inputArray = [];
    for (let x = 0; x < range; x++) {
        let tmpNum = utils.randIntRange(-500, 500);
        if (tmpNum < tmp)
            tmp = tmpNum;
        inputArray.push(tmpNum);
    };
    let userAns = testFunction.smallestNum(inputArray);
    r2a.push(tmp === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Smallest Number', () => {


  it('<b>TEST #1</b><br> smallestNum should be defined as a function', () => {
    expect(testFunction.smallestNum).to.exist;
    expect(testFunction.smallestNum).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing smallestNum 5 times with random Array', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing smallestNum 5 more times with random Array', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with numbers positive and negative Integer $$[{"a1": [1, 2, 3, 4, 5, 6, 7, 8, 9]},{"a1": [-1, -2, -3, -4, -5, -6, -7, -8, -9]}]$$', () => {
    expect(testFunction.smallestNum([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(1);
    expect(testFunction.smallestNum([-1, -2, -3, -4, -5, -6, -7, -8, -9])).to.equal(-9);
  });
});
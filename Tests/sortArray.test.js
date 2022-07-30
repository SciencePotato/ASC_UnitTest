
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 100);
    let arr = [];
    let userArr = [];
    for (let i = 0; i < randNum; i++) {
        let tmp = utils.randIntRange(-500, 500);
        arr.push(tmp);
        userArr.push(tmp);
    }
    arr.sort((a, b) => a - b)
    let userAns =  testFunction.sortArray(userArr);
    r1a.push(arr === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 100);
    let arr = [];
    let userArr = [];
    for (let i = 0; i < randNum; i++) {
        let tmp = utils.randIntRange(-500, 500);
        arr.push(tmp);
        userArr.push(tmp);
    }
    arr.sort((a, b) => a - b)
    let userAns =  testFunction.sortArray(userArr);
    r2a.push(arr === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Sorting Array', () => {


  it('<b>TEST #1</b><br> sortArray should be defined as a function', () => {
    expect(testFunction.sortArray).to.exist;
    expect(testFunction.sortArray).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing sortArray 5 times with random size and random value', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing sortArray 5 more times with random size and random value', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with arrays with only Positive and Negative Integer!$$[{"a1": [1, 2, 3, 4, 5]},{"a1": [-1, -2, -3, -4, -5]}]$$', () => {
    expect(testFunction.sortArray([1, 2, 3, 4, 5])).to.equal([1, 2, 3, 4, 5]);
    expect(testFunction.sortArray([-1, -2, -3, -4, -5])).to.equal([-5, -4, -3, -2, -1]);
  });
});
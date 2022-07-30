const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 500);
    let arr1 = [];
    let arr2 = [];
    let resultArr = [];
    for (let i = 0; i < range; i ++) {
        arr1[i] = utils.randIntRange(1, 500);
        arr2[i] = utils.randIntRange(1, 500);
        resultArr[i] = arr1[i] * arr2[i];
    }
    let userAns =  testFunction.multiplyArray(arr1, arr2);
    r1a.push(resultArr === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let range = utils.randIntRange(1, 500);
    let arr1 = [];
    let arr2 = [];
    let resultArr = [];
    for (let i = 0; i < range; i ++) {
        arr1[i] = utils.randIntRange(1, 500);
        arr2[i] = utils.randIntRange(1, 500);
        resultArr[i] = arr1[i] * arr2[i];
    }
    let userAns =  testFunction.multiplyArray(arr1, arr2);
    r2a.push(resultArr === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Multiply Array', () => {


  it('<b>TEST #1</b><br> multiplyArray should be defined as a function', () => {
    expect(testFunction.multiplyArray).to.exist;
    expect(testFunction.multiplyArray).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing multiplyArray 5 times with random numbers', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing multiplyArray 5 more times with random numbers', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with a single item array!$$[{"a1": [0], "a2": [0]},{"a1": [1], "a2": [1]}]$$', () => {
    expect(testFunction.multiplyArray([0], [0])).to.equal(0);
    expect(testFunction.multiplyArray([1], [1])).to.equal(1);
  });
});
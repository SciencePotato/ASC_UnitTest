/* To DO */
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let randLen = utils.randIntRange(20, 40);
    let fakeMountain = [];
    for (let i = 0; i < randLen; i ++){
        let ranInt = utils.randIntRange(0, 1000);
        fakeMountain.push(ranInt);
    }

    let l = 0;
    let r = fakeMountain.length - 1;
    while(l + 1 < fakeMountain.length - 1 && fakeMountain[l] < fakeMountain[l + 1]) l++;
    while(r - 1 > 0 && fakeMountain[r] < fakeMountain[r - 1]) r--;
    let ans = (l == r);
    let userAns = testFunction.validMountainArray(fakeMountain);
    r1a.push(ans === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let randIncrease = utils.randIntRange(2, 15);
    let randDecrease = utils.randIntRange(2, 15);
    let realMountain = [];
    realMountain[0] = utils.randIntRange(1, 10);
    for (let i = 0; i < randIncrease; i ++) {
        realMountain.push(utils.randIntRange(realMountain[i] + 1, realMountain[i] + 10));
    }

    for (let i = 0; i < randDecrease; i ++) {
        realMountain.push(utils.randIntRange(realMountain[randIncrease + i] - 20, realMountain[randIncrease + i] - 1));
    }

    let l = 0;
    let r = fakeMountain.length - 1;
    while(l + 1 < fakeMountain.length - 1 && fakeMountain[l] < fakeMountain[l + 1]) l++;
    while(r - 1 > 0 && fakeMountain[r] < fakeMountain[r - 1]) r--;
    let ans = (l == r);
    let userAns = testFunction.validMountainArray(fakeMountain);
    r2a.push(ans === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Valid mountain Array', () => {

  it('<b>TEST #1</b><br> validMountainArray should be defined as a function', () => {
    expect(testFunction.validMountainArray).to.exist;
    expect(testFunction.validMountainArray).to.be.a('function');
  });

  it('<b>TEST #2</b><br> testing validMountainArray 5 times with random combination of words', () => {
    expect(allR1Matched).to.be.true;
  });

  it('<b>TEST #3</b><br> testing validMountainArray 5 more times with random combination of words', () => {
    expect(allR2Matched).to.be.true;
  });

  it('<b>TEST #4</b><br> should work with an Array under length 3!$$[{"a1": [1, 2]}]$$', () => {
    expect(testFunction.validMountainArray([1, 2])).to.equal(false);
  });
});

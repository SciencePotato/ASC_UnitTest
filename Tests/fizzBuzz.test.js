
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 10000);
    let ans = '';
    if (randNum % 3 == 0 && randNum % 5 == 0) 
        ans = "FizzBuzz";
    else if (randNum % 3 == 0)
        ans = "Fizz"
    else if (randNum % 5 == 0)
        ans = "Buzz"
    else
        ans = randNum.toString();

    let userAns =  testFunction.fizzBuzz();
    r1a.push(ans === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 10000);
    let ans = '';
    if (randNum % 3 == 0 && randNum % 5 == 0) 
        ans = "FizzBuzz";
    else if (randNum % 3 == 0)
        ans = "Fizz"
    else if (randNum % 5 == 0)
        ans = "Buzz"
    else
        ans = randNum.toString();

    let userAns =  testFunction.fizzBuzz();
    r2a.push(userAns === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('FizzBuzz', () => {


  it('<b>TEST #1</b><br> fizzBuzz should be defined as a function', () => {
    expect(testFunction.fizzBuzz).to.exist;
    expect(testFunction.fizzBuzz).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing fizzBuzz 5 times with random numbers', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing fizzBuzz 5 more times with random numbers', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with words with English words!$$[{"a1": 0},{"a1": 1}]$$', () => {
    expect(testFunction.fizzBuzz(0)).to.equal('FizzBuzz');
    expect(testFunction.fizzBuzz(1)).to.equal(1);
  });
});
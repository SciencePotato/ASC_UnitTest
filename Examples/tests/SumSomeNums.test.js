const sumTwo = require('../main.js');
const chai = require('chai');
const expect = chai.expect;

const randIntRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let r1a = [];
for (let i = 0; i < 5; i++) {
  let r1 = randIntRange(0, 500);
  let r2 = randIntRange(0, 500);
  let sum = r1 + r2;
  let userSum = sumTwo(r1, r2);
  r1a.push(sum === userSum);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
  let r1 = randIntRange(-500, 0);
  let r2 = randIntRange(-500, 0);
  let sum = r1 + r2;
  let userSum = sumTwo(r1, r2);
  r2a.push(sum === userSum);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Sum Some Nums', () => {


  it('<b>TEST #1</b><br> sumTwo should be defined as a function', () => {
    expect(sumTwo).to.exist;
    expect(sumTwo).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing sumTwo 5 times with random numbers', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing sumTwo 5 times with random negative numbers', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with numbers like 1 million!$$[{"a1": 1_000_000,"a2": 27},{"a1": 1_000_000,"a2":1_000_000}]$$', () => {
    expect(sumTwo(1_000_000, 27)).to.equal(1_000_027);
    expect(sumTwo(1_000_000, 1_000_000)).to.equal(2_000_000);
  });
});

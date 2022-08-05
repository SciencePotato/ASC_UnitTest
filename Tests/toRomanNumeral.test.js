/* To DO */
const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 2500);
    let digits = String(+randNum).split("");
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    let romanAns = Array(+digits.join("") + 1).join("M") + roman;
    let userAns = testFunction.toRomanNumeral(romanAns);
    r1a.push(randNum === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let randNum = utils.randIntRange(1, 2500);
    let digits = String(+randNum).split("");
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    let romanAns = Array(+digits.join("") + 1).join("M") + roman;
    let userAns = testFunction.toRomanNumeral(romanAns);
    r2a.push(randNum === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('To Roman Numeral', () => {

  it('<b>TEST #1</b><br> toRomanNumeral should be defined as a function', () => {
    expect(testFunction.toRomanNumeral).to.exist;
    expect(testFunction.toRomanNumeral).to.be.a('function');
  });

  it('<b>TEST #2</b><br> testing toRomanNumeral 5 times with random combination of words', () => {
    expect(allR1Matched).to.be.true;
  });

  it('<b>TEST #3</b><br> testing toRomanNumeral 5 more times with random combination of words', () => {
    expect(allR2Matched).to.be.true;
  });

  it('<b>TEST #4</b><br> should work with an Empty Duty!$$[{"a1": ""}]$$', () => {
    expect(testFunction.toRomanNumeral('')).to.equal(0);
  });
});

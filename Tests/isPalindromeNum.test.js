const utils = require('../util.js');
const testFunction = require('../main.js')
const chai = require('chai');
const expect = chai.expect;

let r1a = [];
for (let i = 0; i < 5; i++) {
    let num = utils.randIntRange(1,10000000);
    num = num.toString();
    let isPalindrome = true;
    for (let i = 0; i < (num.length / 2); i++) {
        if (isPalindrome == false)
            break;
        if (!(num.charAt(i) == num.charAt(num.length - i - 1)))
            isPalindrome = false;
    }
    let userAns =  testFunction.isPalindromeNum(num);
    r1a.push(isPalindrome === userAns);
}
const allR1Matched = r1a.every((result) => result === true);

let r2a = [];
for (let i = 0; i < 5; i++) {
    let num = utils.randIntRange(1,10000000);
    num = num.toString();
    reverseNum = '';
    for (let i = num.length - 1; i >= 0; i --) {
        reverseNum += num.charAt(i);
    }

    num += reverseNum;

    let isPalindrome = true;
    for (let i = 0; i < (num.length / 2); i++) {
        if (isPalindrome == false)
            break;
        if (!(num.charAt(i) == num.charAt(num.length - i - 1)))
            isPalindrome = false;
    }
    r2a.push(isPalindrome === userAns);
}
const allR2Matched = r2a.every((result) => result === true);

describe('Palindrome Number', () => {


  it('<b>TEST #1</b><br> isPalindromeNum should be defined as a function', () => {
    expect(testFunction.isPalindromeNum).to.exist;
    expect(testFunction.isPalindromeNum).to.be.a('function');
  });


  it('<b>TEST #2</b><br> testing isPalindromeNum 5 times with random non-Palindrome number', () => {
    expect(allR1Matched).to.be.true;
  });


  it('<b>TEST #3</b><br> testing isPalindromeNum 5 times with random palindrome numbers', () => {
    expect(allR2Matched).to.be.true;
  });


  it('<b>TEST #4</b><br> should work with both Uppercase only and lowercase words with Spaces in them!$$[{"a1": "ABCDEFGHIJK"},{"a1": "potato"}]$$', () => {
    expect(testFunction.isPalindromeNum('ABCDEFGHIJK')).to.equal('K');
    expect(testFunction.isPalindromeNum('potato')).to.equal('t');
  });
});
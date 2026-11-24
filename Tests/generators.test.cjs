const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');
const utils = require('../util.js');

function palindromeInputs(randomValue) {
    const inputs = [];
    const original = Math.random;
    Math.random = () => randomValue;
    try {
        vm.runInNewContext(fs.readFileSync('Tests/isPalindrome.test.js', 'utf8'), {
            require: (path) => {
                if (path === '../util.js') return utils;
                if (path === '../main.js') return { isPalindrome: (word) => { inputs.push(word); return false; } };
                if (path === 'chai') return {};
                throw new Error(`Unexpected dependency: ${path}`);
            },
            describe: () => {}
        });
    } finally {
        Math.random = original;
    }
    return inputs.slice(-5);
}

test('palindrome generator includes the first alphabet character', () => {
    assert.deepEqual(palindromeInputs(0), Array(5).fill('aa'));
});

test('palindrome generator never samples past the last alphabet character', () => {
    assert.deepEqual(palindromeInputs(1 - Number.EPSILON), Array(5).fill('Z'.repeat(20)));
});

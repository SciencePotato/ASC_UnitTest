const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

function runSuite(wrong) {
    const calls = [];
    const assertions = [];
    const source = fs.readFileSync(path.join(__dirname, '../Tests/isPalindromeNum.test.js'), 'utf8');
    const context = {
        require(name) {
            if (name === '../util.js') return { randIntRange: () => 12 };
            if (name === '../main.js') return {
                isPalindromeNum(value) {
                    calls.push(value);
                    if (wrong && calls.length > 5) return false;
                    return String(value) === [...String(value)].reverse().join('');
                }
            };
            if (name === 'chai') return { expect: value => ({
                to: { be: { get true() { assert.equal(value, true); } } }
            }) };
            throw new Error(name);
        },
        describe: (_, body) => body(),
        it: (name, body) => { if (/TEST #[23]/.test(name)) assertions.push(body); }
    };
    vm.runInNewContext(source, context, { timeout: 1000 });
    assert.deepEqual(calls, [...Array(5).fill('12'), ...Array(5).fill('1221')]);
    for (const body of assertions) body();
    assert.equal(Object.hasOwn(context, 'reverseNum'), false);
}

test('each positive palindrome sample reaches the exercise implementation', () => runSuite(false));
test('positive palindrome batch rejects false answers', () => assert.throws(() => runSuite(true), assert.AssertionError));

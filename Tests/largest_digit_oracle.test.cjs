const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

function runSuite(wrong) {
    const calls = [];
    const assertions = [];
    const samples = [9, 80, 507, 1234, 10000, 91, 82, 703, 4321, 10];
    let sample = 0;
    vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../Tests/largestSingleDigit.test.js'), 'utf8'), {
        require(name) {
            if (name === '../util.js') return { randIntRange: () => samples[sample++] };
            if (name === '../main.js') return {
                largestSingleDigit(number) {
                    calls.push(number);
                    return wrong ? 9 : Math.max(...String(number).split('').map(Number));
                }
            };
            if (name === 'chai') return { expect: value => ({
                to: { be: { get true() { assert.equal(value, true); } },
                    equal: expected => assert.equal(value, expected) }
            }) };
            throw new Error(name);
        },
        describe: (_, body) => body(),
        it: (name, body) => { if (!name.includes('TEST #1')) assertions.push(body); }
    }, { timeout: 1000 });
    assert.deepEqual(calls, samples);
    for (const body of assertions) body();
    assert.deepEqual(calls.slice(-2), [0, 10]);
}

test('largest-digit batches preserve the original number and use decimal ten', () => runSuite(false));
test('largest-digit oracle rejects a constant maximum', () => assert.throws(() => runSuite(true), assert.AssertionError));

const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

function runSuite(wrong) {
    const outcomes = [];
    vm.runInNewContext(fs.readFileSync('Tests/smallestNumber.test.js', 'utf8'), {
        require: (name) => {
            if (name === '../util.js') return { randIntRange: (min) => min };
            if (name === '../main.js') return {
                smallestNum: (values) => values.length ? Math.min(...values) + (wrong ? 1 : 0) : null
            };
            if (name === 'chai') return { expect: (value) => ({
                to: { be: { get true() { assert.equal(value, true); } },
                    equal: (expected) => assert.equal(value, expected) }
            }) };
            throw new Error(name);
        },
        describe: (_, body) => body(),
        it: (name, body) => { if (!name.includes('TEST #1')) outcomes.push(body); }
    });
    for (const body of outcomes) body();
}

test('minimum suite accepts correct results including negative/empty inputs', () => runSuite(false));
test('minimum suite rejects incorrect results', () => assert.throws(() => runSuite(true), assert.AssertionError));

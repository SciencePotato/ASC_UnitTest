const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

function runSuite(wrong) {
    const inputs = [];
    const bodies = [];
    vm.runInNewContext(fs.readFileSync('Tests/validMountainArray.test.js', 'utf8'), {
        require: (name) => {
            if (name === '../util.js') return { randIntRange: (min) => min };
            if (name === '../main.js') return {
                validMountainArray: (values) => {
                    inputs.push(Array.from(values));
                    const peak = values.indexOf(Math.max(...values));
                    const valid = peak > 0 && peak < values.length - 1
                        && values.every((value, i) => i === 0 || (i <= peak ? value > values[i - 1] : value < values[i - 1]));
                    return wrong ? !valid : valid;
                }
            };
            if (name === 'chai') return { expect: (value) => ({
                to: { be: { get true() { assert.equal(value, true); } },
                    equal: (expected) => assert.equal(value, expected) }
            }) };
            throw new Error(name);
        },
        describe: (_, body) => body(),
        it: (name, body) => { if (!name.includes('TEST #1')) bodies.push(body); }
    });
    assert.equal(inputs.length, 10);
    for (const mountain of inputs.slice(5)) {
        const peak = mountain.indexOf(Math.max(...mountain));
        assert.ok(peak > 0 && peak < mountain.length - 1);
        for (let i = 1; i <= peak; i++) assert.ok(mountain[i] > mountain[i - 1]);
        for (let i = peak + 1; i < mountain.length; i++) assert.ok(mountain[i] < mountain[i - 1]);
    }
    for (const body of bodies) body();
}

test('mountain batches accept correct answers and include five genuine mountains', () => runSuite(false));
test('mountain batches reject inverted answers', () => assert.throws(() => runSuite(true), assert.AssertionError));

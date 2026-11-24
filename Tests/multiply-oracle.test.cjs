const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const test = require('node:test');

function runSuite(wrong) {
    const bodies = [];
    vm.runInNewContext(fs.readFileSync('Tests/multiplyArray.test.js', 'utf8'), {
        require: (name) => {
            if (name === '../util.js') return { randIntRange: (min) => min };
            if (name === '../main.js') return {
                multiplyArray: (left, right) => {
                    const products = left.map((value, i) => value * right[i] + (wrong === true ? 1 : 0));
                    if (wrong === 'short') return products.slice(0, -1);
                    if (wrong === 'scalar') return products[0];
                    return products;
                }
            };
            if (name === 'chai') return { expect: (value) => ({
                to: { be: { get true() { assert.equal(value, true); } },
                    deep: { equal: (expected) => assert.deepEqual(Array.from(value), Array.from(expected)) } }
            }) };
            throw new Error(name);
        },
        describe: (_, body) => body(),
        it: (name, body) => { if (!name.includes('TEST #1')) bodies.push(body); }
    });
    for (const body of bodies) body();
}

test('multiplication suite accepts a fresh correct array and singleton arrays', () => runSuite(false));
test('multiplication suite rejects incorrect products', () => assert.throws(() => runSuite(true), assert.AssertionError));
test('multiplication suite rejects truncated arrays and scalar answers', () => {
    for (const kind of ['short', 'scalar']) assert.throws(() => runSuite(kind), assert.AssertionError);
});

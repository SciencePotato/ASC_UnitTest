const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const chai = require('chai');

function runSuite(name, implementation, seed = 42) {
    let calls = 0;
    const source = fs.readFileSync(path.join(__dirname, '../Tests', `${name}.test.js`), 'utf8');
    const context = {
        require(id) {
            if (id === 'chai') return chai;
            if (id === '../util.js') return {
                randIntRange: (min, max) => Math.max(min, Math.min(seed, max)),
                randSentenceOnly: () => 'ZAZ'
            };
            if (id === '../main.js') return {
                [name](...args) {
                    calls++;
                    return implementation(...args);
                }
            };
            throw new Error(`Unexpected dependency ${id}`);
        },
        describe: (_, run) => run(),
        it: (_, run) => run()
    };
    vm.runInNewContext(source, context, { timeout: 500 });
    assert.equal(Object.hasOwn(context, 'key'), false);
    assert.equal(Object.hasOwn(context, 'roman'), false);
    return calls;
}

test('largest alphabet suite accepts the maximum input character, not K', () => {
    assert.equal(runSuite('largestAlphabet', word => [...word].sort().at(-1) || 'A'), 11);
    assert.throws(() => runSuite('largestAlphabet', () => 'K'));
});

test('funny math suite accepts target minus input, including equal inputs', () => {
    assert.equal(runSuite('funnyMath', (input, target) => target - input), 11);
    assert.throws(() => runSuite('funnyMath', () => 6));
});

test('Roman suite finishes both five-sample batches and keeps variables local', () => {
    const decode = roman => {
        const values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
        return [...roman].reduce((sum, char, i) =>
            sum + (values[char] < values[roman[i + 1]] ? -values[char] : values[char]), 0);
    };
    for (const seed of [1, 4, 9, 42, 99, 100]) {
        assert.equal(runSuite('toRomanNumeral', decode, seed), 11);
    }
    assert.throws(() => runSuite('toRomanNumeral', () => -1));
});

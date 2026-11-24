const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

function runSuite(wrongBatch = 0) {
    const calls = [];
    const assertions = [];
    const samples = [1, 3, 5, 15, 16, 2, 6, 10, 30, 31];
    let sample = 0;
    const source = fs.readFileSync(path.join(__dirname, '../Tests/fizzBuzz.test.js'), 'utf8');
    vm.runInNewContext(source, {
        require(name) {
            if (name === '../util.js') return { randIntRange: () => samples[sample++] };
            if (name === '../main.js') return {
                fizzBuzz(number) {
                    const call = calls.push(number);
                    if ((wrongBatch === 1 && call <= 5) || (wrongBatch === 2 && call > 5 && call <= 10)) return 'wrong';
                    return number % 15 === 0 ? 'FizzBuzz' : number % 3 === 0 ? 'Fizz'
                        : number % 5 === 0 ? 'Buzz' : number;
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
}

test('both FizzBuzz batches pass the generated number and accept correct answers', () => runSuite());
test('neither FizzBuzz batch can accept wrong answers', () => {
    for (const batch of [1, 2]) assert.throws(() => runSuite(batch), assert.AssertionError);
});

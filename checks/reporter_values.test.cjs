const assert = require('node:assert/strict');
const { EventEmitter } = require('node:events');
const test = require('node:test');
const { AssertionError } = require('chai');
const { Runner } = require('mocha');

for (const path of ['../customReporter.js', '../Examples/customReporter.js']) {
  test(`${path} retains assertion values that JSON cannot serialize`, () => {
    const Reporter = require(path);
    const circular = [];
    circular.push(circular);
    for (const actual of [1n, circular, undefined]) {
      const expected = { answer: 42 };
      const error = new AssertionError('wrong answer', { actual, expected });
      const runner = new EventEmitter();
      const reporter = new Reporter(runner);
      runner.emit(Runner.constants.EVENT_TEST_FAIL, {
        state: 'failed',
        title: 'challenge result',
        fullTitle: () => 'suite challenge result'
      }, error);
      assert.equal(reporter.failedResultsCluster.length, 1);
      const result = reporter.failedResultsCluster[0];
      assert.equal(result.status, 'failed');
      assert.equal(result.given, actual);
      assert.equal(result.expected, expected);
      assert.equal(result.stack, error.stack);
    }
  });
}

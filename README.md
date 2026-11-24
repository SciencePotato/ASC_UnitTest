# ASC UNIT TEST

Run `node --test Tests/palindrome_number_oracle.test.cjs` to check that both
numeric-palindrome batches call the exercise with their own generated values
and reject incorrect positive-batch answers. The exercise stubs and the
separate explicit zero-input expectation are unchanged; this check covers the
generated batches, not the entire challenge suite.

## Resources

- [Chai reference](https://www.chaijs.com/api/bdd/)
- Need to `require` function in test case file
- Don't forget to to do `npm install`
- Make sure to update `package.json` script if you change the test case's file name
- Start with basic checks using `expect`, then you can work on random.
- Try to keep format of titles consistent
- First test is usually checking that the function exists
- Only 10 tests per challenge
- Last 2 tests should be randomized tests
- Check other sample test cases I sent for reference
- I'll try to get a test challenge zone up and running so you can try uploading challenges to the site


$$
[
  {}
]
$$

<!--  -->

$$
  [
    {"a1": 1_000_000,"a2":27},
    {"a1": 1_000_000,"a2":1_000_000}
  ]
$$

## Utils 
`const utils = require(locationDir)` - Import util class as `utils`
`utils.randomIntRange(minNum, maxNum)` - Returns a number between minNum and maxNum.
`utils.randomSentence(len)` - Returns a random sentence based on the static variable `alphabet`.
`utils.randomSentenceSpace(len)` - Returns a random sentence based on the static variable `spaceAlphabet`.
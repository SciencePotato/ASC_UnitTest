# ASC UNIT TEST

## Run the challenge suites

Use Node.js 22 for the legacy dependency lock (Mocha 10). From the repository
root, install the existing dependencies and run:

```sh
npm ci
npm test
npm run test:r
npm run test:generators
```

The root scripts discover `Tests/**/*.test.js` (capital `T`). The separate
`Examples/` project has its own `tests/SumSomeNums.test.js`; run it with
`cd Examples && npm install && npm test`.

`main.js` deliberately contains exercise stubs. Challenge failures are expected
until learners implement them; discovering the suites does not mean they pass.
`test:generators` checks the palindrome test-input generator independently of
those stubs, including the first/last alphabet index.

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
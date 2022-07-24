const utils = require('./util.js');

/*#region SmallestNumber

let range = randIntRange(1, 500); 
let tmpArr = [];
let tmpSum = 0;
for (let i = 0; i < range; i ++){
    let tmpNum = randIntRange(-500, 500);
    tmpArr.push(tmpNum);
    tmpSum += tmpNum;
}

console.log(tmpArr.length);
console.log(tmpSum);
tmpArr.forEach(element => {
    
    tmpSum -= element;  
});
console.log(tmpSum);

#endregion */ 

/* #region strLen

let range = utils.randIntRange(1, 500);
let randSent = utils.randSentenceSpace(range);
randSent = randSent.trim();
randSent = randSent.replaceAll(" ", "");
sentLen = randSent.length;

#endregion */

/*#region largestAlphabet

let range = utils.randIntRange(1, 10);
let randSent = utils.randSentenceOnly(range);
let largestChar = 'A';
for (let i = 0; i < randSent.length; i ++) {
    if (randSent.charAt(i) > largestChar) 
        largestChar = randSent.charAt(i);
}

console.log(randSent);
console.log(largestChar);
#endregion  */

/* #region multiplyArray
let range = utils.randIntRange(1, 500);
let arr1 = [];
let arr2 = [];
let resultArr = [];
for (let i = 0; i < range; i ++) {
    arr1[i] = utils.randIntRange(1, 500);
    arr2[i] = utils.randIntRange(1, 500);
    resultArr[i] = arr1[i] * arr2[i];
}
console.log(arr1);
console.log(arr2);
console.log(resultArr);
#endregion */

/* #region funny Math
let input = utils.randIntRange(-500, 500);
let output = utils.randIntRange(-1000, 1000);
console.log(input, output);
console.log(output - input);

#endregion */

/*#region largestDigit
let randNum = utils.randIntRange(1, 10000);
let largestDigit = 0;
console.log(randNum);
while (randNum > 0) {
    let temp = randNum % 10;
    if (temp > largestDigit) 
        largestDigit = temp;
    randNum /= 10;
    randNum = Math.trunc(randNum);
}

console.log(largestDigit);
#endregion */

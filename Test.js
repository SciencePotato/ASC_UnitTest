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

/*#region largestSingleDigit
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


/*#region isPalindrome
let word = "Evil Olive";
let isPalindrome = true;
word = word.replaceAll(" ", '');
for (let i = 0; i < (word.length / 2); i ++) {
    if (isPalindrome == false)
        break;
    if (!(word.charAt(i).toUpperCase() == word.charAt(word.length - i - 1).toUpperCase()))
        isPalindrome = false;
}
console.log(isPalindrome);

let wordLength = utils.randIntRange(1, 10);
let wordCharacter = [];
let word = ""
for (let i = 0; i < wordLength; i ++) {
    let char = utils.onlyAlphabet.charAt(utils.randIntRange(1, utils.onlyAlphabet.length));
    wordCharacter.push(char);
}

for (let i = 0; i < wordCharacter.length; i ++) {
    word += wordCharacter[i];
}

for (let i = wordCharacter.length - 1; i >= 0; i --) {
    word += wordCharacter[i];
}

let isPalindrome = true;
word = word.replaceAll(" ", '');
for (let i = 0; i < (word.length / 2); i ++) {
    if (isPalindrome == false)
        break;
    if (!(word.charAt(i).toUpperCase() == word.charAt(word.length - i - 1).toUpperCase()))
        isPalindrome = false;
}
#endregion */

/*#region isPalindromeNum
let num = utils.randIntRange(1,10000000);
num = num.toString();
let isPalindrome = true;
for (let i = 0; i < (num.length / 2); i++) {
    if (isPalindrome == false)
        break;
    if (!(num.charAt(i) == num.charAt(num.length - i - 1)))
        isPalindrome = false;
}

console.log(isPalindrome);

let num = utils.randIntRange(1,10000000);
num = num.toString();
reverseNum = '';
for (let i = num.length - 1; i >= 0; i --) {
    reverseNum += num.charAt(i);
}

num += reverseNum;

let isPalindrome = true;
for (let i = 0; i < (num.length / 2); i++) {
    if (isPalindrome == false)
        break;
    if (!(num.charAt(i) == num.charAt(num.length - i - 1)))
        isPalindrome = false;
}
#endregion */ 

/*#region Sorting Array
let randNum = utils.randIntRange(1, 100);
let arr = [];
for (let i = 0; i < randNum; i++) {
    arr.push(utils.randIntRange(-500,500))
}
arr.sort((a, b) => a - b)
console.log(arr);

#endregion*/

//#region correctTypo
let wordLength = utils.randIntRange(1, 5000);
let word = utils.randSentence(wordLength); 
word = word.replaceAll(" ", "");
word = word.replaceAll("0", "o");
word = word.replaceAll("!", "1");
word = word.replaceAll(".", "");
word = word.replaceAll("?", "");
word = word.replaceAll(",", "");
console.log(word);

//#endregion

//#region numberToBinary

//#endregion
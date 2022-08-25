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

/* #region correctTypo
let wordLength = utils.randIntRange(1, 5000);
let word = utils.specialSentence(wordLength); 
word = word.replaceAll("1", "I");
word = word.replaceAll("0", "O");
#endregion */

/*#region numberToBinary
let randNum = utils.randIntRange(0, 10000);
let binary = (randNum >>> 0).toString(2);
let binaryNum = parseInt(binary);
console.log(binaryNum);
#endregion*/

/*#region fizzBuzz
let randNum = utils.randIntRange(1, 10000);
let ans = '';
if (randNum % 3 == 0 && randNum % 5 == 0) 
    ans = "FizzBuzz";
else if (randNum % 3 == 0)
    ans = "Fizz"
else if (randNum % 5 == 0)
    ans = "Buzz"
else
    ans = randNum.toString();
#endregion */

/*#region Roman Numeral to Integer 
let randNum = utils.randIntRange(0, 2500);
let digits = String(+randNum).split("");
    key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
           "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
           "","I","II","III","IV","V","VI","VII","VIII","IX"],
    roman = "",
    i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
console.log(Array(+digits.join("") + 1).join("M") + roman);
#endregion*/

/*#region Mapping Alphabet
let randLen = utils.randIntRange(0, 100);
let randWord = "";
let ans = 0;

for (let i = 0; i < randLen; i ++) {
    let tmp = utils.randIntRange(0, 25);
    randWord += utils.capAlphabet[tmp];
}

for (let i = 0; i < randWord.length; i ++) {
    ans += randWord.charCodeAt(i) - 64;
}
#endregion*/

//#region Valid Mountain Array
let randLen = utils.randIntRange(20, 40);
let fakeMountain = [];
for (let i = 0; i < randLen; i ++){
    let ranInt = utils.randIntRange(0, 1000);
    fakeMountain.push(ranInt);
}

/*
let randIncrease = utils.randIntRange(2, 15);
let randDecrease = utils.randIntRange(2, 15);
let realMountain = [];
realMountain[0] = utils.randIntRange(1, 10);
for (let i = 0; i < randIncrease; i ++) {
    realMountain.push(utils.randIntRange(realMountain[i] + 1, realMountain[i] + 10));
}

for (let i = 0; i < randDecrease; i ++) {
    realMountain.push(utils.randIntRange(realMountain[randIncrease + i] - 20, realMountain[randIncrease + i] - 1));
}
*/

let l = 0;
let r = fakeMountain.length - 1;
while(l + 1 < fakeMountain.length - 1 && fakeMountain[l] < fakeMountain[l + 1]) l++;
while(r - 1 > 0 && fakeMountain[r] < fakeMountain[r - 1]) r--;

console.log(fakeMountain, l == r);
//#endregion
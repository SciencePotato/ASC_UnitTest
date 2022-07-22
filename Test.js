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
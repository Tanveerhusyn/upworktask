const str = "Smart people learn from everything and everyone, average people from their experience stupid people already, have all the answers";


var strArr = str.replace(/[^a-z]/gi, ' ').split(' ').sort(function (a, b) { return b.length - a.length });

const longestStrings = strArr.filter(dat=>dat.length==strArr[0].length)

let vowels = /[aeiou]/gi;
let text ='';
let length =0
longestStrings.map(dat=>{
    matchVowels = dat.match(vowels);
    if(matchVowels.length>length){
        length = matchVowels.length;
        text = dat;
        
    }
    
})

console.log(text)


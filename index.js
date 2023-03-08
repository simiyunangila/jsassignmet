//1.last four characters
let string = `extravaganza`
console.log(string[8],string[9],string[10],string[11])
 
//2.Insert the following string at the fourth index of the below variable:
const food = "The quick fox jumped over the lazy dog."
const food2=food.replace("jumped","eat") 
console.log(food2);

//3.Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
const story= "The quick brown fox jumps over the lazy dog"
const story2=story.split("the").length -1;
console.log(story2);

const y= story.split("brown").length -1;
console.log(y);
//4.Using JavaScript, find the following words from the following strings:
//1. "are"
const string1 = "The pupils are reading in the library";
const z = string1.search("are")
console.log(z)
//2. "sitting"
const string2 = "The child was sitting on the table before it fell";
const p =string2.search("sitting")
console.log(p)
// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
let x = "wonderful"
let output = x.toLocaleUpperCase();
console.log(output)
// 2. LowerCase: "amazing", "UndERneath"
let a = "amazing"
let result = a.toLocaleLowerCase();
console.log(result)
let b ="undERneath"
let result2 = b.toLocaleLowerCase();
console.log(result2)
// 3. Title case "A wonderful world"
let c ="A wonderful world"
c=c.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
// let title = c.toTitleCase();
console.log(c)


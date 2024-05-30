const readline=require("readline")
.createInterface({
output:process.stdin,
input:process.stdout,
});
readline.question("enter the number:",(input)=>{
let number=parseFloat(input);
console.log("initial number:",number);
console.log("number++:",number++);
console.log(":",++number);

readline.close();
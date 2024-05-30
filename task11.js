const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the first number:",(a)=>{
x.question("enter the second number:",(b)=>{
const num1=parseFloat(a);
const num2=parseFloat(b);
console.log("initial number:num1=",num1,",num2=",num2);
console.log("num1==num2:",num1==num2);
console.log("num1!=num2:",num1!=num2);
console.log("num1===num2:",num1===num2);
console.log("num1!==num2:",num1!==num2);
console.log("num1>num2:",num1>num2);
console.log("num1<num2:",num1<num2);
console.log("num1>=num2:",num1>=num2);
console.log("num1<=num2:",num1<=num2);
x.close();
});
});


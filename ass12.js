const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the celsius value:",(a)=>{
    var b =parseInt(a)
celsius=b*9/5+32
console.log("the farhen heat value is:",celsius);
x.close();
});
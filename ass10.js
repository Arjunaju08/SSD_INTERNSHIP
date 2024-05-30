const x =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
})
x.question("enter the number:",(n)=>{
let result=0;
while(n>0){
result+= n %10;
n=parseInt(n/10);
}
console.log("sum is",result);

})

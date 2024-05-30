const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the first number:",(n1)=>{
x.question("enter the second number:",(n2)=>{
const s1= parseInt(n1)
const s2 =parseInt(n2)
sum=s1+s2;
div=s1/s2;
sub=s1-s2;
mul=s1*s2;
mod=s1%s2;
console.log("the sum is",+sum+"  ");
console.log("the div is",+div+" ");
console.log("the sub is",+sub+" ");
console.log("the mul is",+mul+" ");
console.log("the mod is",+mod+" ");
x.close();
});
});


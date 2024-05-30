const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the base measurement:",(a)=>{
x.question("enter the height measurement:",(b)=>{
let  r=parseInt(a)
let y=parseInt(b)
area=(0.5*r*y);
console.log("the area of the traingle is",+ area+" ");
x.close();
});
})
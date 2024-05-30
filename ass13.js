
const x  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
x.question("enter the number:",(a)=>{
var num=parseInt(a);
var i=1;
while(num>=i){
    if(i%2==0){
    console.log("result",i);
}
i++;
}
x.close();
});
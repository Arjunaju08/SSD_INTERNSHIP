const a  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
a.question("enter the number:",(b)=>{
var num=parseInt(b)
for(i=1;i<=10;i++){
    mul=i*num;
    console.log(+i+"x"+num+"="+mul);
a.close();
};
});
const ran  =require("readline")
.createInterface({
input:process.stdin,
output:process.stdout,
});
ran.question("who r you?\n",(name)=>{
    ran.question("what is your age?\n",(naam)=>{
    console.log(" da "+name+" ");
    console.log("your age is "+naam+" ");
    ran.close();
});

});
const fs=require("fs");
fs.writeFile("message.txt", "Hello From node js by Anil!",(err)=>{
    if(err)throw err;
    console.log("The file has been saved!");
});

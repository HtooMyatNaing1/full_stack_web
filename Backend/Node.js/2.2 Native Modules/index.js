const fs = require("fs");

/* 
fs.writeFile("test.txt", "Hello, I am testing out node.js.", (error) => {
    if(error){
        throw error;
    }
    console.log("File has been saved successfully.");
});
*/

fs.readFile("message.txt", "utf-8", (e, data) => {
    if(e) throw e;
    console.log(data);
});
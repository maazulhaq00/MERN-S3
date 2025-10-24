const fs = require("fs");
const path = require("path");

// console.log("Directory is : " +  __dirname)
// console.log("Full Directory is : " + __filename)

// fs.mkdirSync("documents")

let filepath = path.join(__dirname, "documents", "mydata.txt")

fs.writeFileSync(filepath, "Hello i am writing this in mydata.txt file", "utf-8")


let fileData1 = fs.readFileSync(filepath, "utf-8")

console.log(fileData1);

fs.writeFileSync(filepath, "file updated", "utf-8")

let fileData2 = fs.readFileSync(filepath, "utf-8")

console.log(fileData2);

fs.appendFileSync(filepath,"Im adding this","utf-8")

fs.appendFileSync(filepath,"\nIm adding this in new linw","utf-8")


const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./first.txt", "utf8");
const second = readFileSync("./second.txt", "utf8");

writeFileSync("./first.txt", "i'm the added text", { flag: "a" });
//this {flag:"a"} means "append" that makes the file system modules add a new text to the file not to override it
console.log(first, second);

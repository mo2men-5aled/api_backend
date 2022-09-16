const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./first.txt", "utf8");
const second = readFileSync("./second.txt", "utf8");

writeFileSync("./first.txt", "i'm the added text", { flag: "a" });
console.log(first, second);

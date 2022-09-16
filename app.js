const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./first.txt", "utf8", (err, result) => {
  if (err) throw err;
  const first = result;
  readFile("./second.txt", "utf8", (err, result) => {
    if (err) throw err;
    const second = result;
    writeFile(
      "./result file.txt",
      `i'm the first file's text${first}, and i'm the second one ${second}`,
      (err, result) => {
        if (err) throw err;
        //console.log(result);
        console.log("done with this task");
      }
    );
  });
  console.log("ready ot start again");
});

//start
//ready to start again
//done with this task

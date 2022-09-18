const { readFile, writeFile } = require("fs");
const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const file_1_respones = await readFilePromise("./test.txt", "utf8");
    const file_2_respones = await readFilePromise("./test2.txt", "utf8");
    await writeFilePromise(
      "./the_result.txt",
      `i'm the first: ${file_1_respones}, and i'm the second one : ${file_2_respones}`
    );
    console.log(file_1_respones, file_2_respones);
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

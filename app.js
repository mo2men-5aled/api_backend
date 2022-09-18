const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const file_1_respones = await readFile("./test.txt", "utf8");
    const file_2_respones = await readFile("./test2.txt", "utf8");
    await writeFile(
      "./the_result.txt",
      `i'm the first: ${file_1_respones}, and i'm the second one : ${file_2_respones}`,
      { flag: "a" }
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

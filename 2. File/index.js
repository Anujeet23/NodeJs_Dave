const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf8"
    );
    console.log(data.toString());
    //Delete
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    //Write
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    //Append
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\n@232Nice to meet you"
    );
    //Rename
    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

// fs.readFile(
//   path.join(__dirname, "files", "starter.txt"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   }
// );

fileOps();

// console.log("Hello .....");

//CallBack HELL
// fs.writeFile(
//   path.join(__dirname, "files", "reply.txt"),
//   "Nie to meet you",
//   (err) => {
//     if (err) throw err;
//     console.log("File written successfully");

//     fs.appendFile(
//       path.join(__dirname, "files", "reply.txt"),
//       "\n\n My Pleasure",
//       (err) => {
//         if (err) throw err;
//         console.log("Append successfully");

//         fs.rename(path.join(__dirname, "files", "newReply.txt"), (err) => {
//           if (err) throw err;
//           console.log("Rename Complete");
//         });
//       }
//     );
//   }
// );

process.on("uncaughtException", (err) => {
  console.log(`There was an uncaught error: ${err}`);
  process.exit(1);
});

/*
 const fs = require("fs");
const path = require("path");

//second method to use file -> best practice instead of hardcoded
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.toString()); // we can also print string  by add utf8 as parameter
  }
);

// fs.readFile("./files/starter.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   console.log(data.toString()); // we can also print string  by add utf8 as parameter
// });

console.log("hello...is printing first before the data.");

// when we are writing if file exit then write that otherwise create a new file and then write
// playing with more async operation
// in this way we can control the async nature
// we were controlling the async in vanilla javascript with aysnc await but in nodejs we will see


fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Hello,nice to meet you.",
  (err, data) => {
    if (err) throw err;
    console.log("Write Complete with async operation");

    fs.appendFile(
      path.join(__dirname, "files", "test.txt"),
      "\n\n\nTesting again.",
      (err, data) => {
        if (err) throw err;
        console.log("Append Complete with async operation");

        fs.rename(
          path.join(__dirname, "files", "test.txt"),
          path.join(__dirname, "files", "testing.txt"),
          (err, data) => {
            if (err) throw err;
            console.log("Rename Complete with async operation");
          }
        );
      }
    );
  }
);

fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  "\n\n\nTesting.",
  (err, data) => {
    if (err) throw err;
    console.log("Append Complete");
  }
);

// when we are getting an error

process.on("uncaughtException", (err) => {
  console.error("There was an uncaught err: ", err);
  process.exit(1);
});

 */

// using promises to handle async operation

const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data, "Read Complete");

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    console.log("Delete Complete");
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      data
    );
    console.log("Write Complete");

    await fsPromises.appendFile(
      path.join(__dirname, "files", "promiseWrite.txt"),
      "\n\n\n appending the text in promiseWrite file"
    );
    console.log("Append Complete");

    await fsPromises.rename(
      path.join(__dirname, "files", "promiseWrite.txt"),
      path.join(__dirname, "files", "promiseComplete.txt")
    );
    console.log("Rename Complete");

    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseComplete.txt"),
      "utf-8"
    );
    console.log(newData, "Read Complete of new data");
  } catch (error) {
    console.log(err);
  }
};
fileOps();

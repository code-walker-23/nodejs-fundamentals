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
fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "Hello,nice to meet you.",
  (err, data) => {
    if (err) throw err;
    console.log("Write Complete");
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






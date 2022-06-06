const fs = require("fs");

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
  }

const readFromFile = (fileToRead) => {
    const fuck = fs
      .readFileSync(fileToRead, "utf8", function (err, data) {
        if (err) throw err;
      })
      .trim();
    return fuck;
  };

module.exports=readFromFile,writeToFile
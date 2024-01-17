const { error } = require("console");
const fs = require("fs");
fs.writeFile("welcome.txt", "Hello Node.", (error) => {
  if (error) throw error;
});

fs.readFile("Hello.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});

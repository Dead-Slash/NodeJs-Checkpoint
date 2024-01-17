const express = require("express");
const app = express();
const port = 3000;
app.listen(port, console.log("server is runing"));

app.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>Hello Node!!!!</h1>");
  res.end();
  console.log(res);
});

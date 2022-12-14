const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;
const url = require("url");
const os = require("os");
const http = require("http");

const server = http.createServer((req, res) => {
  let filePath = "";

  switch (req.url) {
    case "/" || "index.html":
      res.statusCode = 200;
      res.setHeader("content-type", "text/html");

      filePath = path.join(__dirname, "views", "index.html");
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) console.log(err);

        res.end(data);
      });
      break;
    case "/message":
      res.writeHead(200, { "Content-Type": "text/plain" });

      res.end("Hello World!");
      break;
    case "/text":
      res.write("Hello text!");

      res.end();
      break;
    default:
      res.statusCode = 404;
      res.setHeader("content-type", "text/html");
      filePath = path.join(__dirname, "views", "404.html");
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) console.log(err);

        res.end(data);
      });
      break;
  }
});

const PORT = process.env.PORT || 3500;

server.listen(PORT, () =>
  console.log(`server is up and running on http://localhost:${PORT}`)
);

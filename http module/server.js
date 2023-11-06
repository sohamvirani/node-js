const http = require("http");

const port = 5000;

http
  .createServer((req, res) => {
    let data = "my name is soham virani";
    console.log("server start");

    res.write("hello world");

    res.write(data);

    res.end();
  })
  .listen(port);
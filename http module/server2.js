const http = require("http");

const port = 5002;

http
  .createServer((req, res) => {
    let data = " soham virani";
    console.log("server start");

    res.write("server2");

    res.write(data);

    res.end();
  })
  .listen(port);
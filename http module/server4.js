const http = require("http");

const port = 5004;

http
  .createServer((req, res) => {
    let data = " soham virani";
    console.log("server start");

    res.write("server4");

    res.write(data);

    res.end();
  })
  .listen(port);
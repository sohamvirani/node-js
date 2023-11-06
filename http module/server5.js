const http = require("http");

const port = 5005;

http
  .createServer((req, res) => {
    let data = " soham virani";
    console.log("server start");

    res.write("server5");

    res.write(data);

    res.end();
  })
  .listen(port);
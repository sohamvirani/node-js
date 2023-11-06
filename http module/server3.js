const http = require("http");

const port = 5003;

http
  .createServer((req, res) => {
    let data = " s virani";
    console.log("server start");

    res.write("server3");

    res.write(data);

    res.end();
  })
  .listen(port);
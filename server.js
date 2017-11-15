var http = require("http");
var availTool = require("./availTool");

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    availTool.getAvail(0, response);
  }
  
  http.createServer(onRequest).listen(process.env.PORT);
  console.log("Server has started.");
  

}

exports.start = start;
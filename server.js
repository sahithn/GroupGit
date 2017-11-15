var http = require("http");

function start() {
  function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Henryola");
    //response.end();
    blazer();
    
    function blazer(){ response.end("blazer");}
  }
  
  http.createServer(onRequest).listen(process.env.PORT);
  console.log("Server has started.");
  

}

exports.start = start;
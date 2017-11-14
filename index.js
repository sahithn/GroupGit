var server = require("./server");
var availTool = require("./availTool");

server.start();
console.log( availTool.getAvail() );

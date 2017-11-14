var server = require("./server");
var availTool = require("./availTool");

server.start();

availTool.getAvail(0);
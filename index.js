var server = require("./server");
var availTool = require("./availTool");

server.start();

var week = [];
availTool.getAvail(week,0);
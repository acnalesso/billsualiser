var config = require("./config/" + (process.ENV || "test"));
var fs = require("fs");

var indexFile = process.env.PWD + "/dist/index.html";
fs.readFile(indexFile, "utf8", function (err, html) {
  fs.writeFile(indexFile, html.replace('<serviceURL>', config.serviceURL));
});

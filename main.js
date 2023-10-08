var express = require("express");
var app = express();
var server = app.listen(3000, listen);
var fs = require("node:fs");
function listen() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("Example app listening at http://" + host + ":" + port);
}
//'C:/Users/odiou/irla/success.pdf'

app.get("/", (req, res) => {
    res.send('<html><h1>Dhruv\'s magazines:</h1><br><a href="/content">What is Success?</a></html>');
});

app.get("/content", (req, res) => {
	var stream = fs.createReadStream("C:/Users/odiou/irla/success.pdf");
	var filename = "success.pdf";

	filename = encodeURIComponent(filename);

	res.setHeader("Content-disposition", 'inline; filename="' + filename + '"');
	res.setHeader("Content-type", "application/pdf");

	stream.pipe(res);
});

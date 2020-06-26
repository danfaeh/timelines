var express = require('express'),
	app = express();

// a "GET" request to "/" will run the function below
app.get("/", function (req, res) {
	res.send("Hello World");
});

// start the server
app.listen(3000, function () {
	console.log("Go to localhost:3000/");
});
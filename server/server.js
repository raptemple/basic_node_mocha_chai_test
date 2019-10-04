const express = require("express");
var app = express();

app.get('/', (req, resp) => {
	// resp.send('Hello World')
	// resp.status(404).send('Hello World') // fail
	/*
		resp.status(200).send( {
			error: 'Page Not Found'
		}) // Fail
	 */
	
	resp.status(200).send('Hello World!')
});

app.get('/error', (req, resp) => {
	resp.status(404). send({
		error: 'Page not found!',
		name: 'Subin Shrestha'
	})
});

app.get('/users', (req, resp) => {
	let arrayOfUsers = [
		{ name: "Rose", age: 30 },
		{ name: "Jasmine", age: 75 },
		{ name: "Cauliflower", age: 88 }
	]
	resp.send(JSON.stringify((arrayOfUsers),null,'\t'))
});

app.listen(3030);

module.exports = { app };

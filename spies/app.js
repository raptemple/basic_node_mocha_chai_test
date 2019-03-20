const db = require('./db.js');

module.exports.handleSignUp = (email, password) => {
	// Check the email already exists
	db.saveUser({
		email: email,
		password: password
	})
	// Save the user to DB
	// Send the welcome email
};


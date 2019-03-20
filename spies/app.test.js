var chai = require('chai');
var sinon = require('sinon')
var sinonChai = require("sinon-chai");
var rewire = require('rewire')

var app = rewire('./app');

var assert = chai.assert;    // Using Assert style (Assest Test FrameWork)
var expectjs = chai.expect;    // Using Expect style (Expect Test FrameWork)
var should = chai.should();  // Using Should style (Should Test FrameWork)

chai.use(sinonChai);

describe('Playing with spy', () => {
	it('should call the callback function spy correctly', () => {
		var spy = sinon.spy();
		helloFunc("Subin", spy);
		expectjs(spy).to.have.been.calledWith("Hello Subin");
	})

	it('should call the spy correctly', () => {
		var spy = sinon.spy();
		spy('Subin', 30)
		// Check spy have been called with that data
		expectjs(spy).to.have.been.calledWith('Subin', 30);
	})

});

function helloFunc(name, callback) {
	callback(`Hello ${name}`);
};

describe('DB Testing', () => {
	let dbObj = {
		saveUser: sinon.spy()
	};
	app.__set__('db', dbObj); // Setting db file with spy

	it('should call saveUser func with the user object', () => {
		var email = 'shizz@email.com';
		var password = 'P@ssword123';

		app.handleSignUp(email, password);
		expectjs(dbObj.saveUser).to.have.been.calledWith({ email: email, password: password });
	})
})

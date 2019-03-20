const request = require('supertest');
var chai = require('chai');

const {app} = require('./server');

var assert = chai.assert;    // Using Assert style (Assest Test FrameWork)
var expectjs = chai.expect;    // Using Expect style (Expect Test FrameWork)
var should = chai.should();  // Using Should style (Should Test FrameWork)



// describe is method from MOCHA
// descibe is helps to group test together

describe('Server Test Cases', () => {

	describe('#GET("/")', () => {
	//When running this test case , NO NEED TO RUN SERVER
		it('should pass Hello World response', (done) => {
			request(app).get('/') // GET request URL
				.expect(200) // Status Code
				.expect('Hello World!') // Response body
				.end(done);
		})
	});

	describe('#GET("/error")', () => {
		it('should pass /error response where request is object', (done) => {
			request(app).get('/error')
				.expect(404)
				.expect({
					error: 'Page not found!',
					name: 'Subin Shrestha'
				})
				.end(done);

		/*
		// Alternatively way, using CHAI
		request(app).get('/error')
			.expect(404)
			.expect( (resp) => {
				// console.log(resp.body);
				expectjs(resp.body).to.include({
					error: 'Page not found!'
				})
			})
			.end(done);
		 */
		})
	});

	describe('#GET("/users")', () => {
		it('should pass /users routes', (done) => {
			request(app).get('/users')
				.expect(200)
				.expect( (resp) => {
					// console.log(resp.body)
					expectjs(resp.body).to.be.an('array');
					expectjs(resp.body).to.have.length(3);
					expectjs(resp.body).not.eql([]); // Checking not an empty array
					expectjs(resp.body).to.include.deep.members([
						{
							name: 'Puspita',
							age: 48
						}
					]);
				})
				.end(done);
			})
		})
	});
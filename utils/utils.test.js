const utilFile = require('./utils');
var chai = require('chai');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();


describe('Util test cases', () => {
// A test case is a function which will check 
// weather we get expected output or not
// // Define new TestCase
it('Should add two number', () => {
//Mocha is build on Behavioural driven development (BDD)
	var res = utilFile.add(33, 11);
	/*
	 if (res != 44) {
		throw new Error(`Expected 44, but got ${res}`);
	}
	*/
	expect(res).to.equal(44);
	expect(res).to.be.a('number');

});

it('Should square a number', () => {
	var result = utilFile.square(5);
	/*
	if (result != 25) {
		throw new Error(`Expected 25, but got ${result}`);
	}
	*/
	// chaining two assertions
	expect(result).to.equal(25).to.be.a('number');
});

it('Playing with expect', () => {
expect(12).to.not.equal(11);//12 notequals to 11

        // expect({name:'Subin'}).to.equal({name : 'Subin'})//fails (checking hashcode of two different object)
        expect({ name: 'Subin' }).to.deep.equal({ name: 'Subin' })//pass (two objects r equal)
        expect({ name: 'Subin' }).to.not.deep.equal({ name: 'subin' })//pass  (two objects r not equal)
        // expect([2,3,4]).to.include(5);//fails (5 is not the there in that array)
        expect([2, 3, 4]).to.include(3);//pass
        expect([2, 3, 4]).to.not.include(5);//pass
        expect({ name: "Subin", age: 25, location: 'Nepal' }).to.include({ age: 25 })//pass(property& correct value is present in the object)
        // expect({name: "Subin", age : 25, location : 'Nepal'}).to.include({age:2})//fails
        expect({ name: "Subin", age: 25, location: 'Nepal' }).to.not.include({ sex: 'Male' })
        expect({ a: 1 }).to.not.have.property('b');
        expect({ a: 1, b: 32 }).to.have.property('a');
        expect([1, 2, 3]).to.have.length(3);
        // expect([]).to.have.length.gt(0);//fails
        expect([1, 2, 3]).to.have.length.gt(0);
        // expect({ name: 'bob' }).to.have.key('age');//fails
        expect({ name: 'bob' }).to.have.key('name');
        expect({ a: 'Subin', c: 'Kites' }).to.have.keys(['a', 'c']);
        expect({ a: 1, b: 23, c: 'Subin' }).to.have.property('a');
        // expect({a: 1, b:23,c:'Subin'}).to.have.property('name');//fails
        expect(1).to.be.within(0, Infinity);
        // expect(2).to.be.within(23, Infinity);//fails
        expect([]).eql([]);//checkking empty array
        expect(['Subin', 'Nate', 'Roger']).not.eql([]);//checking not empty array
        expect({ name: 'Subin', age: '25' }).not.eql({});//checking not empty object

        // expect([1, 2, 3]).to.equal([1, 2, 3]); //fail
        expect([1, 2, 3]).to.deep.equal([1, 2, 3]);// (DEEP EQUAL CHECKING)
        expect([1, 2, 3]).to.eql([1, 2, 3]);// (DEEP EQUAL CHECKING) eql()  ===  deep.equal()

        // expect([{a:1}, {b:2}]).to.eql([{a:1}, {b:4}]); // fails
        expect([{ a: 1 }, { b: 2 }]).to.eql([{ a: 1 }, { b: 2 }]); // passes

        // expect({ a: 1 }).to.equal({ a: 1 }); // fails
        expect({ a: 1 }).to.eql({ a: 1 }); // passes

        // expect([1,2,3]).to.eql([3,2,1]); // fails
        expect([1, 2, 3]).to.have.members([3, 2, 1]); // passes
        // expect([1,2,3]).to.have.members([3,2]); // fails
        expect([1, 2, 3, 4]).to.include.members([3, 2]);
        // expect([1,2,3]).to.have.all.members([3,2]); // fails
        expect([1, 2, 3]).to.have.all.members([3, 2, 1]);
        // expect([1,2,3]).to.have.ordered.members([3,2,1]);//fails
        expect([1, 2, 3]).to.have.ordered.members([1, 2, 3]); // passes


        // expect([ {name:"Subin"} ]).to.have.members([ {name:"Subin"} ]);//fails
        expect([{ name: "Subin" }]).to.have.deep.members([{ name: "Subin" }]); // passes

        // expect([ {name:"Subin"}, {name : 'lokesh'} ]).to.include.members([ {name:"Subin"} ]);//fail
        expect([{ name: "Subin" }, { name: 'lokesh' }]).to.include.deep.members([{ name: "Subin" }]);

        const obj = { a: 1, b: 2 };
        // expect(obj.c).to.not.be.undefined;//fails

        expect({ a: 1, b: 2 }).to.have.property('b'); // passes
        expect({ a: 1, b: 2 }).to.have.keys(['a', 'b']); // passes
        expect({ a: 1, b: 2 }).to.have.property('b', 2); // passes

        expect({ a: 1, b: 2 }).to.include({ b: 2 }); // passes

        // expect({ a: { c: 3 } }).to.include({ a: { c: 3 } }); // fails
        expect({ a: { c: 3 } }).to.deep.include({ a: { c: 3 } }); // passes

        const obj2 = {
            query: {
                bool: {
                    filterObj: {
                        term: { id: '12345' }
                    }
                }
            }
        };

        expect(obj2).to.have.nested.property('query.bool.filterObj.term.id');
        expect(obj2).to.have.deep.nested.property('query.bool.filterObj.term', { id: '12345' });

        const obj3 = {
            query: {
                bool: {
                    filterArray: [{
                        term: { id: '12345' }
                    }]
                }
            }
        };

        expect(obj3).to.have.nested.property('query.bool.filterArray[0].term.id');


    });


it('Verifiying user Object', () => {
    let userObj = utilFile.setName({},"Subin Shrestha");

    expect(userObj).to.be.an('object')//Similar to TypeOf
    expect(userObj).not.equal(NaN)
    expect(userObj).not.equal(undefined)
    expect(userObj).to.include({firstName:'Subin'})
    expect(userObj).to.include({lastName:'Shrestha'})
    expect(userObj).to.include({firstName:'Subin', lastName:'Shrestha'})
    console.log(userObj);
});

it('Should add two numbers in async function', (done) => {
	utilFile.asyncAdd(2,4, (sumResult) => {
		expect(sumResult).to.be.equal(6)
		expect(sumResult).to.be.a('number');
		done();
	})
});

it('Should square two number in async function', (done) => {
	utilFile.asyncSquare(3, (squareResult) => {
		expect(squareResult).to.be.equal(9)
		expect(squareResult).to.be.a('number');
		done();
	})
});

});

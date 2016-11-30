require('rootpath')();
var chai = require('chai'),
mockery = require('mockery'),
sinon = require('sinon'),
expect = chai.expect; // we are using the "expect" style of Chai\


describe('Error Base Tests', function() {
var message;


before(function(done) {
//set up redis stub functions
//enable mockery and register redis stub object
mockery.enable({
warnOnReplace: true,
warnOnUnregistered: false,
useCleanCache: false
});
//register mocks to replace original external files
//load business later AFTER registering the stub so it does not load the real one
done();
});
after(function(done) {
mockery.disable();
done();
});
beforeEach(function(done) {
//set up request and response
done();
});

describe("Error Constructor Calls", function() {
describe("Select Topic",function(){

it("Error Constructor with Error Type, Status Code and Custom Error Message", function(done) {

var errorMessage = require('app/common/errors/error');

var errorObj = new errorMessage("UnAuthorized",401,'Identity is not Valid');

expect(errorObj.name).to.be.equal("UnAuthorized");

done();


});


it("Error Constructor with Error Type and without Status Code and Custom Error Message", function(done) {

var errorMessage = require('app/common/errors/error');

var errorObj = new errorMessage("UnAuthorized");

expect(errorObj.name).to.be.equal("UnAuthorized");

done();


});



})});
});




require('rootpath')();
var chai = require('chai'),
mockery = require('mockery'),
sinon = require('sinon'),
expect = chai.expect; // we are using the "expect" style of Chai\

describe('Identity Tests', function() {
var message;


before(function(done) {

identity= require('app/common/security/identity');
config= require('app/config/config');
done();
});
after(function(done) {
done();
});
beforeEach(function(done) {
done();
});

describe("Authentication Calls", function() {
describe("Validate Identity",function(){
it("Validate Identity -Health Probe Call", function(done) {
var req = {};
req.url='/health';


identity.validateIdentity(req, function(res) {
expect(res).to.be.equal(true);
done();
});

});


it("Validate Identity -with Auth Token", function(done) {
var req = {};
req.headers={};
req.url='/analytics';
req.headers['x-auth-header'] = config.settings.secId;

identity.validateIdentity(req, function(res) {
expect(res).to.be.equal(true);
done();
});

});

it("Validate Identity -with Wrong Auth Token", function(done) {
var req = {};
req.headers={};
req.url='/analytics';
req.headers['x-auth-header'] = 'XXX-XXX-XXXX34567-5678';

identity.validateIdentity(req, function(res) {
expect(res).to.be.equal(false);
done();
});

});


})});
});



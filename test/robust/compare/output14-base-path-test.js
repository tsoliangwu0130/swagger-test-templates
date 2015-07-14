'use strict';
var chai = require('chai');
var ZSchema = require('z-schema');
var validator = new ZSchema({});

chai.should();
var request = require('request');

describe('/', function() {
  describe('get', function() {
    it('should respond with 200 OK', function(done) {
      request({
        url: 'https://api.uber.com/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(200);

        body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "username": {
            "type": "string"
          }
        }
      };

      /*eslint-enable*/
      request({
        url: 'https://api.uber.com/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(200);

        validator.validate(body, schema).should.be.true;
        done();
      });
    });

    it('should respond with 400 NOT OK', function(done) {
      request({
        url: 'https://api.uber.com/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(400);

        body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 400 NOT OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "object",
        "properties": {
          "meta": "string",
          "data": "number"
        }
      };

      /*eslint-enable*/
      request({
        url: 'https://api.uber.com/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(400);

        validator.validate(body, schema).should.be.true;
        done();
      });
    });

    it('should respond with 500 SERVER ERROR', function(done) {
      request({
        url: 'https://api.uber.com/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(500);

        body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 500 SERVER ERROR', function(done) {
      /*eslint-disable*/
      var schema = {
        "properties": {
          "meta": "string",
          "data": "number",
          "UserObj": {
            "schema": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "integer"
                },
                "username": {
                  "type": "string"
                }
              }
            }
          }
        }
      };

      /*eslint-enable*/
      request({
        url: 'https://api.uber.com/',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(500);

        validator.validate(body, schema).should.be.true;
        done();
      });
    });

  });

  describe('post', function() {
    it('should respond with 200 OK', function(done) {
      request({
        url: 'https://api.uber.com/',
        qs: {
          longitude: 'DATA GOES HERE'
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(200);

        body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 200 OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "username": {
              "type": "string"
            }
          }
        }
      };

      /*eslint-enable*/
      request({
        url: 'https://api.uber.com/',
        qs: {
          longitude: 'DATA GOES HERE'
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(200);

        validator.validate(body, schema).should.be.true;
        done();
      });
    });

    it('should respond with 400 NOT OK', function(done) {
      request({
        url: 'https://api.uber.com/',
        qs: {
          longitude: 'DATA GOES HERE'
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(400);

        body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 400 NOT OK', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "number"
      };

      /*eslint-enable*/
      request({
        url: 'https://api.uber.com/',
        qs: {
          longitude: 'DATA GOES HERE'
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(400);

        validator.validate(body, schema).should.be.true;
        done();
      });
    });

    it('should respond with 500 SERVER ERROR', function(done) {
      request({
        url: 'https://api.uber.com/',
        qs: {
          longitude: 'DATA GOES HERE'
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(500);

        body.should.equal(null); // non-json response or no schema
        done();
      });
    });

    it('should respond with 500 SERVER ERROR', function(done) {
      /*eslint-disable*/
      var schema = {
        "type": "string"
      };

      /*eslint-enable*/
      request({
        url: 'https://api.uber.com/',
        qs: {
          longitude: 'DATA GOES HERE'
        },
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        json: {
          latitude: 'DATA GOES HERE'
        }
      },
      function(error, res, body) {
        if (error) return done(error);

        res.statusCode.should.equal(500);

        validator.validate(body, schema).should.be.true;
        done();
      });
    });

  });

});
'use strict';

var expect = require('chai').expect;


describe('random-geohash: ', function () {

  var geohash = require('../../');

  it('common', function () {

    expect(geohash())
      .to.be.a('string')
      .and
      .to.have.length(7)
      .and
      .to.be.match(/^[0123456789bcdefghjkmnpqrstuvwxyz]+$/);

    expect(geohash({ length: 'asd' }))
      .to.be.a('string')
      .and
      .to.have.length(7)
      .and
      .to.be.match(/^[0123456789bcdefghjkmnpqrstuvwxyz]+$/);

    expect(geohash({ length: 2 }))
      .to.be.a('string')
      .and
      .to.have.length(2)
      .and
      .to.be.match(/^[0123456789bcdefghjkmnpqrstuvwxyz]+$/);

  });
});

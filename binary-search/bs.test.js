var expect = require('chai').expect;
var binarySearch = require('./bs').binarySearch;

describe('binary search', function() {
  it('should find the target', function() {
    expect(binarySearch([2, 7, 8, 23, 45, 78, 98])).to.equal('running');
  });
});

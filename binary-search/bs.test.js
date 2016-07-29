var expect = require('chai').expect;
var binarySearch = require('./bs').binarySearch;



describe('binary search', function() {
  // beforeEach(function() {
  //   var test = [2, 7, 8, 23, 45, 78, 98];
  // });

  it('should find the target', function() {
    expect(binarySearch([2, 7, 8, 23, 45, 78, 98], 78)).to.equal(true);
  });

  it('should return false if the target is not in the input', function() {
    expect(binarySearch([2, 7, 8, 23, 45, 78, 98], 1)).to.equal(false);
  });
});

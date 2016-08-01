var chai = require('chai');
var expect = chai.expect;
var LinkedList = require('./list.linked.js');

describe('LinkedList', function() {
  var list;
  beforeEach(function() {
    list = new LinkedList();
  })
  it('should have "clear", "insert", "append", "remove", "moveToStart", "moveToEnd", "prev", "next", "currPos", "moveToPos", "isAtEnd", "getValue"', function() {
    expect(list.clear).to.be.a('function');
    expect(list.insert).to.be.a('function');
    expect(list.append).to.be.a('function');
    expect(list.remove).to.be.a('function');
    expect(list.moveToStart).to.be.a('function');
    expect(list.moveToEnd).to.be.a('function');
    expect(list.prev).to.be.a('function');
    expect(list.next).to.be.a('function');
    expect(list.currPos).to.be.a('function');
    expect(list.moveToPos).to.be.a('function');
    expect(list.isAtEnd).to.be.a('function');
    expect(list.getValue).to.be.a('function');
  });

  describe('append', function() {
    it('should add items to the end of the list', function() {
      list.append(4);
      list.append(8);
      list.append(10);
      list.moveToEnd();
      expect(list.getValue()).to.equal(10);
    });
  });

});

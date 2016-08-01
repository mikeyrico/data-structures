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
      expect(list.print()).to.eql([4, 8, 10]);
    });
  });

  describe('currPos', function() {
    it('should return the current position in the list', function() {
      expect(list.currPos()).to.equal(0);
      list.append('this');
      list.append('that');
      list.append('the other');
      list.next();
      expect(list.currPos()).to.equal(1);
      list.next();
      list.next();
      list.next();
      expect(list.currPos()).to.equal(3);
    });
  });

  describe('moveToPos', function() {
    it('should move the element to the given position', function() {
      list.append(4);
      list.append(8);
      list.append(12);
      list.append(16);
      list.moveToPos(2);
      expect(list.getValue()).to.equal(12);
    });

    it('should move to the final position if given position greater than length', function() {
      list.append(3);
      list.append(4);
      list.append(5);
      list.moveToPos(100);
      expect(list.currPos()).to.equal(3);
    });
  });

  describe('remove', function() {
    it('should remove elements of the list at the current position', function() {
      list.append(1);
      list.append(2);
      list.append(3);
      list.moveToPos(1);
      expect(list.remove()).to.equal(2);
      expect(list.print()).to.eql([1, 3]);
    });
  });

  describe('prev', function() {
    it('should move current pointer to the previous node', function() {
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      list.moveToPos(3);
      list.prev();
      expect(list.getValue()).to.equal(3);
    });
  });

  describe('insert', function() {

  });

});

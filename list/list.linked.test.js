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
      expect(list.length()).to.equal(2);
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

  describe('next', function() {
    it('should move the pointer to next node, and stop when at the end', function() {
      list.append(1);
      list.append(2);
      list.append(3);
      list.next();
      expect(list.getValue()).to.equal(2);
      list.next();
      expect(list.getValue()).to.equal(3);
      list.next();
      expect(list.getValue()).to.equal(null);
      expect(list.currPos()).to.equal(3);
    });


  });

  describe('insert', function() {
    it('should insert an element at the current position', function() {
      list.append('one');
      list.append('two');
      list.append('three');
      list.append('four');
      list.moveToPos(1);
      list.insert('hey ya');
      expect(list.print()).to.eql(['one', 'hey ya', 'two', 'three', 'four']);
      expect(list.length()).to.equal(5);
    });
  });

  describe('isAtEnd', function() {
    it('should return true if position is at end of list', function() {
      list.append(0);
      list.append(1);
      list.append(2);
      list.moveToEnd();
      expect(list.isAtEnd()).to.equal(true);
    });

    it('should return false when in any other position', function() {
      list.append(0);
      list.append(1);
      expect(list.isAtEnd()).to.equal(false);
      list.next();
      expect(list.isAtEnd()).to.equal(false);
      list.next();
      expect(list.isAtEnd()).to.equal(true);
    });
  });

  describe('length', function() {
    it('should report 0 for an empty list', function() {
      expect(list.length()).to.equal(0);
    });

    it('should correctly report the length as items added and removed', function() {
      list.append(1);
      expect(list.length()).to.equal(1);
      list.append(2);
      list.append(3);
      expect(list.length()).to.equal(3);
      list.remove();
      expect(list.length()).to.equal(2);
      list.moveToPos(1);
      list.insert(9);
      expect(list.length()).to.equal(3);
      list.moveToStart();
      list.remove();
      list.remove();
      list.remove();
      list.remove();
      expect(list.length()).to.equal(0);
    });
  });

});

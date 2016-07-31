var chai = require('chai');
var expect = chai.expect;
var LinkedList = require('./linkedList');

describe('Linked List', function() {
  var linked_list;

  beforeEach(function() {
    linked_list = LinkedList();
  });

  it('should have "addToTail", "removeHead", "traverse", "remove", and "size" methods', function() {
    expect(linked_list.addToTail).to.be.a('function');
    expect(linked_list.removeHead).to.be.a('function');
    expect(linked_list.traverse).to.be.a('function');
    expect(linked_list.remove).to.be.a('function');
  });

  describe('removeHead', function() {

    beforeEach(function() {
      linked_list.addToTail(4);
      linked_list.addToTail(6);
      linked_list.addToTail(8);
    });

    it('should return the first item added', function() {
      expect(linked_list.removeHead()).to.equal(4);
    });

    it('should report the correct size after removeing items', function() {
      expect(linked_list.size()).to.equal(3);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(2);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(1);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(0);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(0);
    });

    it('should report null for an empty list', function() {
      expect(linked_list.size()).to.equal(3);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(2);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(1);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(0);
      linked_list.removeHead();
      expect(linked_list.size()).to.equal(0);
      expect(linked_list.removeHead()).to.equal(null);
    });

  });

  describe('traverse', function() {
    it('should execute a callback for every item in the list', function() {
      var transformed = [];
      linked_list.addToTail(1);
      linked_list.addToTail(3);
      linked_list.addToTail(5);
      linked_list.traverse(function(node) {
        transformed.push(node.value);
      });
      expect(transformed).to.eql([1, 3, 5]);
    });
  });

  describe('remove', function() {
    it('should remove an item', function() {
      var transformed = [];
      linked_list.addToTail('Mary');
      linked_list.addToTail('had');
      linked_list.addToTail('a');
      linked_list.addToTail('little');
      linked_list.addToTail('lamb');
      linked_list.remove('a');
      linked_list.traverse(function(node) {
        transformed.push(node.value);
      });
      expect(transformed).to.eql(['Mary', 'had', 'little', 'lamb']);
    });
    });

});

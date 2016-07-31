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

    before(function() {
      linked_list.addToTail(4);
      linked_list.addToTail(6);
      linked_list.addToTail(8);
    });

    it('should return the first item added', function() {
      expect(linked_list.removeHead()).to.equal(4);
    });

    it('should report the correct size after removeing items', function() {
      expect(linked_list.size()).to.eqaul(2);
      linked_list.removeHead();
      expect(linked_list.size()).to.eqaul(1);
      linked_list.removeHead();
      expect(linked_list.size()).to.eqaul(0);
      linked_list.removeHead();
      expect(linked_list.size()).to.eqaul(0);
    });

    it('should report null for an empty list', function() {
      expect(linked_list.removeHead()).to.equal(null);
    });
  });


});

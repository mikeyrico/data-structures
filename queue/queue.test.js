var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var Queue = require('./queue');

describe('Queue', function() {
  var queue;

  beforeEach(function() {
    queue = Queue();
  });

  it('should have "dequeue", "enqueue", "peak" methods', function() {
    expect(queue.dequeue).to.be.a('function');
    expect(queue.enqueue).to.be.a('function');
    expect(queue.size).to.be.a('function');
    expect(queue.peek).to.be.a('function');

  });

  it('should remove the first item added', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    expect(queue.dequeue()).to.equal('first');
  });

  it('should report the correct size after adding and removing items', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    queue.enqueue('third');
    queue.dequeue();
    expect(queue.size()).to.equal(2);
  });

  it('should report a size of zero after removing more items than in queue', function() {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  });

  it('peek should return the first item in the queue, but not remove it', function() {
    queue.enqueue('first');
    queue.enqueue('second');
    expect(queue.peek()).to.equal('first');
    expect(queue.size()).to.equal(2);
    queue.dequeue();
    expect(queue.peek()).to.equal('second');
    expect(queue.size()).to.equal(1);
  });

});

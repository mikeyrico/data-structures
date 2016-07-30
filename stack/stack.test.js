var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var Stack = require('./stack');

describe('stack', function() {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  it('should have push() pop() and size() methods', function() {
    expect(stack.push).to.be.a('function');
    expect(stack.pop).to.be.a('function');
    expect(stack.size).to.be.a('function');
  });

  it('should report the correct size after pushing and popping items', function() {
    stack.push(3);
    stack.push(5);
    stack.push(9);
    stack.pop();
    expect(stack.size()).to.equal(2);

  });

  it('should remove the most recently added item', function() {
    stack.push('help');
    stack.push('me');
    stack.push('im stuck');
    stack.push('monkey');
    expect(stack.pop()).to.equal('monkey');
  });

  it('should report null if popping from an empty stack', function() {
    expect(stack.pop()).to.equal(undefined);
  });

  it('should report length of 0 for an empty stack', function() {
    expect(stack.size()).to.equal(0);
  });

  it('should report length of 0 after popping more items than in the list', function() {
    stack.push(5);
    stack.pop();
    stack.pop();
    expect(stack.size()).to.equal(0);
  });
});

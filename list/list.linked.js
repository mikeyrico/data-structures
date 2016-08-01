if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
}

if (typeof Function.prototype.method !== 'function') {
  Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
      this.prototype[name] = func;
      return this;
    }
  };
}

var Node = function (it, next) {
  var element = it;
  var next = next;
  var instance = {};

  instance.setElt = function(it) {
    element = it;
    return true;
  };
  instance.getElt = function() {
    return element;
  };
  instance.setNext = function(inner) {
    next = inner;
    return true;
  };
  instance.getNext = function() {
    return next;
  };

  return instance;
};

module.exports = (function() {
  var LinkedList = function() {
    this.head = Node(null, null);
    this.tail = Node(null, null);
    this.curr = this.tail;
    this.head.setNext(this.tail);
    this.size = 0;
  };

  LinkedList.method('insert', function(it) {
    // insert value at currentPos

  });

  LinkedList.method('remove', function() {
    // remove value at current position
  });

  LinkedList.method('moveToStart', function() {
    // set current pointer to head.next
  });

  LinkedList.method('moveToEnd', function() {
    // set current pointer to tail
    this.curr = this.tail;
  });

  LinkedList.method('moveToPos', function() {
    // if pos out of bounds
    // start at the beginning
    // count until you hit that position
    // set current to that
  });

  LinkedList.method('currPos', function() {
    // set temp to start
    // count until you hit the curr == temp
  });

  LinkedList.method('clear', function() {
    // set tail to null
    // set head.next to point at tail
  });

  LinkedList.method('append', function(it) {
    // add item to tail, reset pointer
    this.tail.setNext(Node(it, null));
    this.tail = this.tail.getNext();
    return true;
  });

  LinkedList.method('prev', function() {
    // move current pointer to previous
    // set temp to head, iterate until find curr
    // what if at the beginning
  });

  LinkedList.method('next', function() {
    // move pointer to nextPos
    // what if at the end
  });

  LinkedList.method('getValue', function() {
    return this.curr.getElt();
  });

  LinkedList.method('isAtEnd', function() {
    return this.curr === this.tail;
  });

  return LinkedList;
})();

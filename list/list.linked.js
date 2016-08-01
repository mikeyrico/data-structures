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
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.curr = this.tail;
    this.head.setNext(this.tail);
    this.size = 0;
  };

  LinkedList.method('insert', function() {

  });

  LinkedList.method('remove', function() {

  });

  LinkedList.method('moveToStart', function() {

  });

  LinkedList.method('moveToEnd', function() {

  });

  LinkedList.method('moveToPos', function() {

  });

  LinkedList.method('currPos', function() {

  });

  LinkedList.method('clear', function() {

  });

  LinkedList.method('append', function() {

  });

  LinkedList.method('prev', function() {

  });

  LinkedList.method('next', function() {

  });

  LinkedList.method('getValue', function() {

  });

  LinkedList.method('isAtEnd', function() {

  });

  return LinkedList;
})();

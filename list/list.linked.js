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
    this.head;
    this.tail;
    this.curr;
    this.size;
    this.clear();
  };

  LinkedList.method('insert', function(it) {
    // insert value at currentPos
    this.curr.setNext(Node(this.curr.getElt(), this.curr.getNext()));
    this.curr.setElt(it);
    if (this.curr === this.tail) {
      this.tail = this.curr.getNext();
    }
    this.size++;
    return true;
  });

  LinkedList.method('remove', function() {
    // remove value at current position
    var output;
    if (this.curr === this.tail) {
      return null;
    }
    output = this.curr.getElt();
    this.curr.setElt(this.curr.getNext().getElt());
    if (this.curr.getNext() === this.tail) {
      this.tail = this.curr;
    }
    this.curr.setNext(this.curr.getNext().getNext());
    this.size--;
    return output;
  });

  LinkedList.method('moveToStart', function() {
    // set current pointer to head.next
    this.curr = this.head.getNext();
  });

  LinkedList.method('moveToEnd', function() {
    // set current pointer to tail
    this.curr = this.tail;
  });

  LinkedList.method('moveToPos', function(pos) {
    // if pos out of bounds
    // start at the beginning
    // count until you hit that position
    // set current to that
    if (pos < 0) {
      return this.moveToStart();
    } else if (pos >= this.length()) {
      return this.moveToEnd();
    }
    var curr = this.head.getNext();
    for (var i = 0; i < pos; i++) {
      this.curr = this.curr.getNext();
    }
    return true;
  });

  LinkedList.method('currPos', function() {
    // set temp to start
    // count until you hit the curr == temp
    var temp = this.head.getNext();
    var i = 0;
    while (temp !== this.curr) {
      i++;
      temp = temp.getNext();
    }
    return i;
  });

  LinkedList.method('clear', function() {
    // set tail to null
    // set head.next to point at tail
    this.curr = this.tail = Node(null);
    this.head = Node(null, this.tail);
    this.size = 0;
    return true;
  });

  LinkedList.method('append', function(it) {
    // add item to tail, reset pointer
    this.tail.setNext(Node(null));
    this.tail.setElt(it);
    this.tail = this.tail.getNext();
    this.size++;
    return true;
  });

  LinkedList.method('prev', function() {
    // move current pointer to previous
    // set temp to head, iterate until find curr
    // what if at the beginning
    if (this.head.getNext() === this.curr) {
      return;
    }
    var temp = this.head.getNext();
    while (temp.getNext() !== this.curr) {
      temp = temp.getNext();
    }
    this.curr = temp;
    return true;
  });

  LinkedList.method('next', function() {
    // move pointer to nextPos
    // what if at the end
    if (!this.curr.getNext()) {
      return false;
    }
    this.curr = this.curr.getNext();
  });

  LinkedList.method('getValue', function() {
    return this.curr.getElt();
  });

  LinkedList.method('isAtEnd', function() {
    return this.curr === this.tail;
  });

  LinkedList.method('length', function() {
    return this.size;
  });

  LinkedList.method('print', function() {
    var node = this.head.getNext();
    var output = [];
    while (node.getNext()) {
      output.push(node.getElt());
      node = node.getNext();
    }
    return output;
  });

  return LinkedList;
})();

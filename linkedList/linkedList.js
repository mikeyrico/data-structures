if (typeof Object.prototype.extend !== 'function') {
  Object.prototype.extend = function() {
    var that = this;
    var args = Array.prototype.slice.call(arguments);
    args.forEach(function(obj, i) {
      for (var method in obj) {
        if (!that[method]) {
          that[method] = obj[method];
        }
      }
    });
    return that;
  };
}

module.exports = (function () {
  var Node = function(value) {
    return {
      value: value,
      next: null
    }
  };

  var LinkedList = function() {
    var instance = {};

    instance._head = null;
    instance._tail = null;
    instance._size = 0;
    instance.extend(linkedListMethods);

    return instance;
  };

  var linkedListMethods = {};

  linkedListMethods.addToTail = function(value) {
    var node = Node(value);
    if (!this._head) {
      this._head = this._tail = node;
    }
    this._tail.next = node;
    this._tail = this._tail.next;
    this._size++;
    return node;
  };

  linkedListMethods.removeHead = function() {
    var output = this._head;
    if (!output) {
      return output;
    }
    this._head = this._head.next;
    this._size--;
    return output.value;
  };

  linkedListMethods.remove = function(value) {
    // traverse linked list looking for the value
    // if found, set previous next to current.next
    var curr = this._head;
    var prev = null;
    var output;

    while (curr) {
      if (curr.value === value) {
        if (!prev) {
          this.removeHead();
          return value;
        }
        output = curr.value;
        prev.next = curr.next;
        return output;
      }
      prev = curr;
      curr = curr.next;
    }
    return output;
  };

  linkedListMethods.size = function() {
    return this._size;
  };

  linkedListMethods.traverse = function(cb) {
    for (var node = this._head; node; node = node.next) {
      cb(node);
    }
  };

  return LinkedList;
})();

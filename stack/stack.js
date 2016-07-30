if (typeof Function.prototype.method !== 'function') {
  Function.prototype.method = function(name, func) {
    if (!this[name]) {
      this.prototype[name] = func;
      return this;
    }
  };
}

module.exports = (function() {
  var Stack = function() {
    this._storage = {};
    this._size = 0;
  };

  Stack.method('push', function(value) {
    this._storage[this._size++] = value;
  });

  Stack.method('pop', function() {
    var result = this._storage[this._size - 1];
    if (result === undefined) {
      return;
    }
    delete this._storage[this._size--];
    return result;
  });

  Stack.method('size', function() {
    return this._size;
  });

  return Stack;
})();


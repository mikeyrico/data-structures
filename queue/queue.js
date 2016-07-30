module.exports = (function () {

  var Queue = function() {
    var instance = Object.create(queueMethods);
    instance._start = 0;
    instance._end = 0;
    instance._storage = {};
    return instance;
  };

  var queueMethods = {};

  queueMethods.enqueue = function(item) {
    this._storage[this._end++] = item;
  };

  queueMethods.dequeue = function() {
    if (!this.size()) {
      return;
    }
    var result = this._storage[this._start];
    delete this._storage[this._start++];
    return result;
  };

  queueMethods.size = function() {
    return this._end - this._start;
  };

  queueMethods.peek = function() {
    return this._storage[this._start];
  };

  return Queue;

})();

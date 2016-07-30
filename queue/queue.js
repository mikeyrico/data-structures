module.exports = (function () {

  var Queue = function() {
    var instance = {};
    var start = 0;
    var end = 0;
    var storage = {};

    instance.enqueue = function(item) {
      storage[end++] = item;
    };

    instance.dequeue = function() {
      if (!this.size()) {
        return;
      }
      var result = storage[start];
      delete storage[start];
      start++;
      return result;
    };

    instance.size = function() {
      return end - start;
    };

    instance.peek = function() {
      return storage[start];
    }

    return instance;
  };


  return Queue;

})();

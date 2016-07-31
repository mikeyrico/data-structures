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
      head: value,
      next: null
    }
  };

  var LinkedList = function() {
    var instance = {};
    var _head = null;
    var _tail = null;
    var _size = 0;
    instance.extend(linkedListMethods);

    return instance;
  };

  var linkedListMethods = {};

  linkedListMethods.addToTail = function() {

  };

  linkedListMethods.removeHead = function() {

  };

  linkedListMethods.remove = function() {

  };

  linkedListMethods.size = function() {

  };

  linkedListMethods.traverse = function() {

  };

  return LinkedList;
})();

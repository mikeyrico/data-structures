function binarySearch(arr, target, i, j) {
  i = i === undefined ? 0 : i;
  j = j === undefined ? arr.length - 1 : j;
  var midIndex = getMid(i, j);
  var mid = arr[midIndex];
  if (target === mid) {
    return true;
  } else if (i >= j) {
    return false;
  } else if (mid < target) {
    return binarySearch(arr, target, midIndex+1, j);
  } else {
    return binarySearch(arr, target, 0, midIndex - 1);
  }
};

function getMid(a, b) {
  return Math.floor((a+b)/2);
}

module.exports = {
  binarySearch: binarySearch,
};


var utils = {
  isArray(d) {
    return d && d.constructor === Array && d instanceof Array;
  },
  isObject(d) {
    return d && d.constructor === Object && d instanceof Object;
  },
  getNumberOfDifferentArrayKeys(array, field) {
    if (!array || !array.length) {
      return 0;
    }

    var keys = [];

    for (let i = 0; i < array.length; i++) {
      var element = field ? array[i][field] : array[i];
      if (element) {
        keys.push(element);
      }
    }
    return d3.set(keys).size();
  }
};
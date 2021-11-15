function digitize(n) {
  var  arr = String(n).split("").reverse().map(Number);
    return arr;
  }
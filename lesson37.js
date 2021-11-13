Array.range = (start, count) =>{
  return Array.from({ length: count }, (_, index) => start + index)
}

Array.prototype.sum = function() {
  return this.reduce((total, value) => total + value, 0)
}
function findLongest(str) {
  var arr=str.split(" ");
  var sarr=arr.sort(function(a,b){return b.length-a.length;});
  str=sarr[0];
  return str.length;
}
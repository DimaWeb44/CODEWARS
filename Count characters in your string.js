function count(string) {
  var a = string.split("");
  var obj = {};
  a.forEach(function(s){
    var count=0;
    for(var j=0;j<a.length;j++){
      if(s==a[j]){
        count+=1;
      }
      obj[s]=count;
    }
  });
  return obj; 
}

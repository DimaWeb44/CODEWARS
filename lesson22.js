function padIt(str,n){
  var count = 0;
  while ( count < n ) {
    count % 2 ? str += '*' : str = '*' + str;
    count ++
   }
    return str;
  }
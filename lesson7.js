
 function problem(x){
   let result = x * 50 + 6;
    if (isNaN(x) || x === '') {
      return 'Error';
    } else {
      return result;
    }
  }
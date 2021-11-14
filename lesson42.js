function squareSum(numbers){
    var sum = 0;
    for(var i = 0; i < numbers.length; i++) {
     
       sum +=  Math.pow(numbers[i], 2);
     
    }
   return sum;
   }
  
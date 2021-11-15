function getAverage(marks){
  var  int = 0;
   for (var i = 0; i < marks.length; i++){
  int += marks[i];
   } return Math.floor(int/ marks.length);
 }
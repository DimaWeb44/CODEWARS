function howManydays(month){
  var days ;
  switch (month){
   case 1:
     days = 31;
      break;
       case 3:
     days = 31;
      break;
       case 5:
      days = 31;
      break;
       case 7:
      days = 31;
      break;
       case 8:
       days = 31;
      break;
       case 10:
      days = 31;
      break;
       case 12:
      days = 31;
      break;
   case 4:
      days = 30;
      break;
       case 6:
     days = 30;
      break;
       case 9:
     days = 30;
      break;
       case 11:
     days = 30;
      break;
      default: 
        days = 28;
  }
  return days;
}
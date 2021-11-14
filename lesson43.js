function countSheeps(arrayOfSheeps) 
{
    var num = 0;
  for(var i = 0; i < arrayOfSheeps.length; i++) 
  {
    if (arrayOfSheeps[i] == true) {num++; }
  }
  return num;
}



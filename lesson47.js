function century(year) 
{ var vek = 0;
  if  (year % 100 === 0)
  vek = year / 100;
 else  vek = Math.floor(year / 100)  + 1;
    return vek;
  }  
 
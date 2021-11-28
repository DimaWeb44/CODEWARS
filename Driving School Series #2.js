function cost (mins) { 
  if (mins<65) return 30
  else {
 let  n =  (mins - 65) / 30
 if  (n < 1) return 40 
   else {return 40 + Math.floor(n) * 10}   
  }
} 
  

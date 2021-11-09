function isTriangle(a,b,c)
{ if (a>=b+c || b>=a+c || c>=a+b || a<=0 || b<=0 || c<=0) {
   return  false;
  }
 else  {return true;}
}